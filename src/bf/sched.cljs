(ns bf.sched
  (:require [cljs.test :refer-macros [deftest is run-tests]]))

;; Course Schedule II
;; https://leetcode.com/problems/course-schedule-ii/

;; There are a total of n courses you have to take, labeled from 0 to n - 1.
;;
;; Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]
;;
;; Given the total number of courses and a list of prerequisite pairs, return the ordering of courses you should take to finish all courses.
;;
;; There may be multiple correct orders, you just need to return one of them. If it is impossible to finish all courses, return an empty array.
;;
;; For example:
;;
;; 2, [[1,0]]
;; There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1]
;;
;; 4, [[1,0],[2,0],[3,1],[3,2]]
;; There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0. So one correct course order is [0,1,2,3]. Another correct ordering is[0,2,1,3].

(defn pair->dep [[key value]]
  {key #{value}})

(defn create-adj-graph [pre-reqs]
  ;; (reduce (partial merge-with clojure.set/union)
  ;;         {}
  ;;         (map pair->dep pre-reqs)
  (transduce (map pair->dep)
             (partial merge-with clojure.set/union)
             {}
             pre-reqs))

(defn dependancy-resolver [graph]
  (fn resolve
    ;; Return a resolver with a given visited "stack"
    ;; This is just some sugar for cleaner recursion
    ([stack] #(resolve %1 %2 stack))
    ;; If no visited "stack" is given, start resolving with an empty set
    ([results dep] (resolve results dep #{}))
    ([results dep stack]
     (let [dependancies (get graph dep)
           results      (reduce (resolve (conj stack dep)) results dependancies)]
       (cond
         (nil? results)          nil     ; There was a cyclical dependancy on a deeper node
         (contains? stack dep)   nil     ; There is a cyclical dependancy with this node
         (contains? results dep) results ; This dependancy has already been added
         :else (conj results dep))))))   ; LGTM!

(defn sched [num-classes pre-reqs]
  (into []
    (reduce (-> pre-reqs
                create-adj-graph
                dependancy-resolver) #{} (range num-classes))))

;; TESTS

(defn valid-schedule? [sched-fn n rs]
  (let [sched (sched-fn n rs)]
    (and (= n (count sched))
         (every? (fn [[a b]] (> (.indexOf sched a) (.indexOf sched b))) rs))))

(deftest valid-schedule?-test
  (is (true? (valid-schedule? #(identity [0 2 1]) 3 [[2 0]])))
  (is (true? (valid-schedule? #(identity [0 2 1]) 3 [[2 0] [1 0]])))
  (is (false? (valid-schedule? #(identity [0 2 1]) 3 [[0 1]]))))

(deftest create-adj-graph-test
  (is (= (create-adj-graph [[0 1] [1 2]])
         {0 #{1} 1 #{2}}))
  (is (= (create-adj-graph [[0 1] [0 2]])
         {0 #{1 2}}))
  (is (= (create-adj-graph [])
         {})))

(deftest sched-test
  (is (valid-schedule? sched 4 [[1 0] [2 0] [3 1] [3 2]])))
