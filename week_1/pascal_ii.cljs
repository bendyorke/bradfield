#!/usr/bin/env planck

(ns week-1.pascal-ii
  (:require [planck.core :refer [*command-line-args*]]))

;; Pascal's Triangle II:
;; https://leetcode.com/problems/pascals-triangle-ii/
;;
;; Given an index k, return the kth row of the Pascal's triangle.
;;
;; For example, given k = 3,
;; Return [1,3,3,1].
;;
;; Note:
;; Could you optimize your algorithm to use only O(k) extra space?

(defn row
  "Find a given row in Pascal's triangle"
  [k]
  (if (> k 0)
    (loop [row   [1]
           index 1]
      (if (= index k)
        row
        (let [prev   (last row)
              factor (/ (- k index) index)]
          (recur (conj row (* prev factor))
                 (inc index)))))))

;; Accept commands from the command line
(println (row (-> *command-line-args* first js/parseInt)))
