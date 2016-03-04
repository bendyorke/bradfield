#!/usr/bin/env planck

(ns week-1.paths
  (:require [planck.core :refer [*command-line-args*]]
            [clojure.string :refer [split]]))

;; Unique Paths II:
;; https://leetcode.com/problems/unique-paths-ii/
;;
;; Follow up for "Unique Paths":
;;
;; Now consider if some obstacles are added to the grids. How many unique paths would there be?
;;
;; An obstacle and empty space is marked as 1 and 0 respectively in the grid.

(def VALID_CHAR "0")

(defn value-in-rows
  "Returns whether the robot is on a valid position, obsticle, edge, or ending position"
  [rows x y]
  (let [valid  (-> rows (nth x) (nth y) (= VALID_CHAR))
        last-x (- (count rows) 1)
        last-y (- (count (last rows)) 1)]
    (cond
      (and valid (= x last-x) (= y last-y)) :finish
      (and valid (> last-x x) (> last-y y)) :center
      (and valid (> last-x x))              :bottom
      (and valid (> last-y y))              :right
      :else                                 :invalid)))

(defn paths
  "Find the number of unique paths"
  ([rows] (paths rows 0 0))
  ([rows x y]
   (let [next (partial paths rows)]
     (case (value-in-rows rows x y)
       :finish 1
       :center (+ (next (inc x) y) (next x (inc y)))
       :bottom (next (inc x) y)
       :right  (next x (inc y))
       0))))

(defn clia->rows
  "Takes a series of strings and converts them into a nested vector of strings
  You can use any non word character as a delimeter (spaces, commas, pipes)
  and any word character as a value.
  i.e. 000 111 000 -> [[0 0 0] [0 1 0] [0 0 0]]
       0!!,000,x?0 -> [[0 ! !] [0 0 0] [x ? 0]]"
  ([args] (apply clia->rows (split args #"\W")))
  ([& args]
  (into [] (map #(split % "") args))))

;; Accept commands from the command line
(println (paths (apply clia->rows *command-line-args*)))
