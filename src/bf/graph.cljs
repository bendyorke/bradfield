(ns bf.graph
 (:require [cljs.test :refer-macros [deftest is run-tests]]))

;; Graph:
#_{0 #{}      ; Node 0 depends on nothing
   1 #{0}     ; Node 1 depends on node 0
   2 #{0 3}   ; Node 2 depends on node 0 & node 3
   4 #{,,,}
   ,,,}

;; Node:
#_[1]         ; Implies node 1 has no dependencies
#_[1 #{}]     ; Indicates node 1 has no dependancies
#_[1 #{4 5}]  ; Indicates node 1 has 2 dependancies

;; Path:
#_(5 4 3 2 1) ; Path that ends at 5 and starts at 1

;; Graph transduction
(defn explore
  "Explore an entire graph. It accepts a transducer to apply to
  new paths before they are added to the stack.  It may repeat nodes
  and infinitely loop through cycles unless specifed otherwise.  Returns
  a list of the paths taken"
  ([graph xform]
   (fn step [stack]
     (lazy-seq
       (when-not (empty? stack)
         (let [[node :as s]  (peek stack)
               nstacks       (into (pop stack)
                                   (comp (map (partial conj s))
                                         xform)
                                   (graph node))]
           (cons s (step nstacks)))))))
  ;; Search the graph from a designated node using a particular stack
  ([stack graph xform & start]
   ((explore graph xform) (into stack
                                (comp (map list) xform)
                                start))))

(defn distinct-nodes
  "Returns a transducer that will ensure each node is only visited once"
  []
  (let [visited (volatile! #{})]
    (fn [xf]
      (fn
        ([] (xf))
        ([result] (xf result))
        ([result [node :as input]]
         (if (contains? @visited node)
           result
           (do (vswap! visited conj node)
               (xf result input))))))))

(defn remove-cyc
  "Transducer to remove any cyclical paths"
  [xf]
  (fn
   ([] (xf))
   ([result] (xf result))
   ([result input]
    (if (apply distinct? input)
      (xf result input)
      result))))

(defn max-depth
  "Limit the depth one can search on a graph"
  [n]
  (filter #(<= (count %) n)))

(defn gsearch ;; Graph Search
  "Traverse a graph without checking whether nodes have already been touched,
  returning a list of nodes.

  (gsearch stack graph xform & start)"
  [stack & args]
  (sequence (map first) (apply explore (list* stack args))))

(def gsearch-deep (partial gsearch '()))
(def gsearch-wide (partial gsearch #queue []))

(defn tsearch ;; Tree Search
  "Traverses a graph, only touching each node one time, returning a list
  of nodes

  (tsearch stack graph xform & start)"
  ([stack graph xform & args]
   (sequence
     (map first)
     (apply explore (list* stack graph (comp (distinct-nodes) xform) args)))))

(def tsearch-deep (partial tsearch '()))
(def tsearch-wide (partial tsearch #queue []))

;; Graph Introspection
(defn node-edges
  "Return a list of dependencies for a given node [node deps]"
  [[node deps]]
  (map (partial vector node) deps))

(defn graph-edges
  "Return a list of dependencies for a given graph"
  [graph]
  (transduce (map node-edges) concat [] graph))

(defn acyclical?
  [graph start]
  (= (explore '() graph identity start)
     (explore '() graph remove-cyc start)))

(defn cyclical?
  [graph start]
  (not (acyclical? graph start)))

;; Graph Manipulation
(defn replace-node
  "Replaces a node in a graph."
  [graph [node deps]]
  (assoc graph node deps))

(defn merge-node
  "Merges a node into a graph."
  [graph [node deps]]
  (if (graph node)
    (update-in graph [node] into deps)
    (replace-node graph [node deps])))

(defn add-edge
  "Add a dependency to a graph"
  [graph [a b]]
  (merge-node graph [a #{b}]))

(def from-edges (partial reduce add-edge {}))

(defn add-path
  "Add a path to a graph"
  [graph path]
  (reduce add-edge
          graph
          (partition 2 (rest (interleave path path)))))

(def from-paths (partial reduce add-path {}))

;; Graph Generation
(defn random-edge
  "Given a number of nodes, return a random edge"
  [n]
  [(rand-int n) (rand-int n)])

(defn random-edges
  "Create a random list of dependencies with n nodes.  Optionally specify the number of deps"
  ([n] (random-edges n n))
  ([num-nodes num-edges]
   (repeatedly num-edges #(random-edge num-nodes))))

(defn random-graph
  "Create a random graph with n nodes.  Optionally specify the number of edges and a condition
  that the random graph must satisfy.  Graphs will be continuously generated until one meets
  the condition - for this reason you can also specify a number of attempts to generate a
  proper graph, otherwise it returns nil. Defaults to 1000"
  ([n] (random-graph n n))
  ([n m] (from-edges (random-edges n m)))
  ([n m cond?] (random-graph n m cond? 1000))
  ([n m cond? limit]
   (loop [graph (random-graph n m)
          limit limit]
     (when-not (zero? limit)
       (if-not (cond? graph)
         (recur (random-graph n m) (dec limit))
         graph)))))

;; Tests
(def acyc-graph {0 #{1 2 3}
                 1 #{2}
                 2 #{3}})

(def cyc-graph {0 #{1}
                1 #{2}
                2 #{0}})

(deftest max-depth-test
  (is (= (explore '() acyc-graph (max-depth 1) 0)
         (list (list 0)))))

(deftest cyclical?-test
  (is (true? (cyclical? cyc-graph 0)))
  (is (false? (cyclical? acyc-graph 0))))

(deftest acyclical?-test
  (is (false? (acyclical? cyc-graph 0)))
  (is (true? (acyclical? acyc-graph 0))))

(deftest search-test
  (is (= (tsearch-deep acyc-graph identity 0)
         (list 0 3 2 1)))
  (is (= (tsearch-wide acyc-graph identity 0)
         (list 0 1 2 3))))
