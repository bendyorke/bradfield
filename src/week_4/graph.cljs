(ns week-4.graph)

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

;; Graph Introspection
(defn node-edges
  "Return a list of dependencies for a given node [node deps]"
  [[node deps]]
  (map (partial vector node) deps))

(defn graph-edges
  "Return a list of dependencies for a given graph"
  [graph]
  (transduce (map node-edges) concat [] graph))

(defn walk
  "Lazily walk a graph. Can optionally omit the start value to return
  a walk function that accepts a start value.  Can also omit the accumulator
  collection to return the walk function that can be provided a custom stack
  and visited set"
  ([graph]
   (fn step [stack visited]
     (lazy-seq
       (when-not (empty? stack)
         (let [[curr remain] ((juxt peek pop) stack)
               neighbors     (graph curr)
               visited       (conj visited curr)
               next          (step (into remain (remove visited) neighbors)
                                   (into visited neighbors))]
           (cons curr next))))))
  ([coll graph]
   (fn [& start]
     ((walk graph) (apply (partial conj coll) start) #{})))
  ([coll graph & start]
   (apply (walk coll graph) start)))

;; Arrays will peek and pop the tail, as well as conj to the tail,
;; therefore will result in a depth first walk
(def walk-deep
  "Lazily walk the graph, depth first"
  (partial walk []))

;; Queues will peek and pop the head, but conj to the tail,
;; therefore will result in a bredth first walk
(def walk-wide
  "Lazily walk the graph, bredth first"
  (partial walk #queue []))

(defn acyclical?
  "Returns true or false, indicating whether the graph is acyclic or not.
  Can optionally provide a starting node if you want to test a single direction."
  ([graph] (every? (partial acyclical? graph) (keys graph)))
  ([graph start]
   (loop [stack   [start]
          visited #{}]
     (let [curr (peek stack)]
       (cond
         (nil? curr)              true
         (contains? visited curr) false
         :else (recur (into (pop stack) (graph curr))
                      (conj visited curr)))))))

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
