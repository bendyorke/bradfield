#!/usr/bin/env planck

(ns week-1.paths
  (:require [planck.core :refer [*command-line-args*]]))

;; Unique Paths:
;; https://leetcode.com/problems/unique-paths/
;;
;; A robot is located at the top-left corner of a m x n grid.
;;
;; The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid.
;;
;; How many possible unique paths are there?

(defn paths
  "Find the number of unique paths"
  ([m n] (paths m n 1 1))
  ([m n x y]
   (let [next (partial paths m n)]
     (cond
       (and (= m x) (= n y)) 1
       (and (> m x) (> n y)) (+ (next (inc x) y) (next x (inc y)))
       (> m x)               (next (inc x) y)
       (> n y)               (next x (inc y))
       :else                 0))))

;; Accept commands from the command line
(println (apply paths (take 2 (map js/parseInt *command-line-args*))))
