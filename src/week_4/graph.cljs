(ns week-4.graph
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
   (fn step [stack visited]
     (lazy-seq
       (when-not (empty? stack)
         (let [[node :as s]  (peek stack)
               visited       (conj visited node)
               nstacks       (into (pop stack)
                                   (comp (map (partial conj s))
                                         xform)
                                   (graph node))]
           (cons s (step nstacks visited)))))))
  ;; Search the graph from a designated starting stack
  ([graph xform stack]
   ((explore graph xform) stack #{}))
  ;; Search the graph from a designated node using a particular stack
  ([graph xform stack start]
   (explore graph xform (conj stack (list start)))))

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

(defn all-paths
  "Identity transducer"
  [xf]
  (fn
   ([] (xf))
   ([result] (xf result))
   ([result input] (xf result input))))

(defn max-depth
  "Limit the depth one can search on a graph"
  [n]
  (filter #(<= (count %) n)))

(defn- search
  "Search a graph.  Returns a unique list of nodes in the order that they were visited.
  Use search-deep to search depth first and search-wide to search bredth-first"
  [stack graph start]
  (sequence (comp (map first) (distinct))
            (explore graph remove-cyc stack 0)))

(def search-deep (partial search '()))
(def search-wide (partial search #queue []))

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
  (= (explore graph all-paths [] start)
     (explore graph remove-cyc [] start)))

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

(defn from-edges
  "Create a graph from a given dependency list"
  [deps]
  (reduce add-edge {} deps))

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
  (is (= (explore acyc-graph (max-depth 1) [] 0)
         (list (list 0)))))

(deftest cyclical?-test
  (is (true? (cyclical? cyc-graph 0)))
  (is (false? (cyclical? acyc-graph 0))))

(deftest acyclical?-test
  (is (false? (acyclical? cyc-graph 0)))
  (is (true? (acyclical? acyc-graph 0))))

(deftest search-test
  (is (= (search-deep acyc-graph 0)
         (list 0 3 2 1)))
  (is (= (search-wide acyc-graph 0)
         (list 0 1 2 3))))
