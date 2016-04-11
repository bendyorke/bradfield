(ns week-3.trap
  (:require [cljs.test :refer-macros [deftest is run-tests]]))

;; Trapping Rain Water
;; https://leetcode.com/problems/trapping-rain-water/

;; Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.
;;
;; For example,
;; Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.

;; Domain:
;; Water on either side is not trapped
;; Water where there are walls on either side is trapped
;; Given an Array (x-axis) of integers (y-axis)
;; Amount of water trapped is relative to the two highest peaks on either side of a canal

;; Approach:
;; Reduce the input starting with {:canals (list) :water 0}
;; For each value along the x axis, loop through all the values along the y axis
;; if the index of the canal is less than the current y value, empty that canal into the water
;; if the index of the canal is greater than the current y value, increment that canal
;; if the current y-index is larger than the number of canals, pad the canals with 0's to match the length
;; Return :water

;; Diagrams:
#_(:given     [1 6 2 3 4 1 6]
   :start     {:canals '() :water 0}
   X       -> {:canals '(0) :water 0}
   XXXXXX  -> {:canals '(0 0 0 0 0 0) :water 0}
   XX      -> {:canals '(0 0 1 1 1 1) :water 0}
   XXX     -> {:canals '(0 0 0 2 2 2) :water 1}
   XXXX    -> {:canals '(0 0 0 0 3 3) :water 3}
   X       -> {:canals '(0 1 1 1 4 4) :water 3}
   XXXXXX  -> {:canals '(0 0 0 0 0 0) :water 14})

;;
;; Implementation
;;

(def initial {:canals (list)
              :water  0})

(defn add-water [canals peak]
  (map-indexed #(if (>= %1 peak) (inc %2) %2) canals))

(defn pad [canals peak]
  (if (> peak (count canals))
    (take peak (concat canals (repeat 0)))
    canals))

(defn drain-canals [canals peak]
  {:canals (concat (repeat peak 0) (drop peak canals))
   :water  (reduce + (take peak canals))})


(defn water-for-peak [{:keys [canals water]} peak]
  (-> canals
      (add-water peak)
      (pad peak)
      (drain-canals peak)
      (update-in [:water] + water)))

(defn trap
  "Given an array of integers, return the units of water that would be trapped"
  [peaks]
  ((reduce water-for-peak initial peaks) :water))

;;
;; Tests
;;

(deftest add-water-test
  (is (= (add-water (list) 0) (list)))
  (is (= (add-water (list 0 0) 0) (list 1 1)))
  (is (= (add-water (list 0 0) 1) (list 0 1))))

(deftest pad-test
  (is (= (pad (list) 2) (list 0 0)))
  (is (= (pad (list 1) 2) (list 1 0)))
  (is (= (pad (list 1 1) 2) (list 1 1)))
  (is (= (pad (list 1 1 1) 2) (list 1 1 1))))

(deftest drain-canals-test
  (is (= (drain-canals (list 0) 1) {:canals (list 0) :water 0}))
  (is (= (drain-canals (list 1) 0) {:canals (list 1) :water 0}))
  (is (= (drain-canals (list 1 1) 1) {:canals (list 0 1) :water 1}))
  (is (= (drain-canals (list 0 1) 1) {:canals (list 0 1) :water 0})))

(deftest trap-test
  (is (= (trap [0]) 0))
  (is (= (trap [0 1 0]) 0))
  (is (= (trap [1 0 1]) 1))
  (is (= (trap [5 0 5]) 5))
  (is (= (trap [5 4 3]) 0))
  (is (= (trap [0 1 0 2 1 0 1 3 2 1 2 1]) 6))
  (is (= (trap [5 2 4 0 5]) 9))
  (is (= (trap [0 10 100 1000 0]) 0)))
