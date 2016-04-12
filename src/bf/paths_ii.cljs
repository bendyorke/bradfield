#!/usr/bin/env planck

(ns bf.paths
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

(defn get-relation-to-edges
  "Returns whether the robot is on a valid position, obsticle, edge, or ending position"
  [matrix x y]
  (let [valid  (-> matrix (nth x) (nth y) (= VALID_CHAR))
        last-x (- (count matrix) 1)
        last-y (- (count (last matrix)) 1)]
    (cond
      (and valid (= x last-x) (= y last-y)) :finish
      (and valid (> last-x x) (> last-y y)) :center
      (and valid (> last-x x))              :bottom
      (and valid (> last-y y))              :right
      :else                                 :invalid)))

(defn paths
  "Find the number of unique paths"
  ([matrix] (paths matrix 0 0))
  ([matrix x y]
   (let [next (partial paths matrix)]
     (case (get-relation-to-edges matrix x y)
       :finish 1
       :center (+ (next (inc x) y) (next x (inc y)))
       :bottom (next (inc x) y)
       :right  (next x (inc y))
       0))))

(defn clia->rows
  "Takes a series of strings and converts them into a nested vector of strings
  You can use any non word character as a delimeter (spaces, commas, pipes)
  and any word character as a value.
  i.e. 000 111 000 -> [[0 0 0] [1 1 1] [0 0 0]]
       0!!,000,x?0 -> [[0 ! !] [0 0 0] [x ? 0]]"
  ([#_"single string" args] (apply clia->rows (split args #"\W")))
  ([#_"list of word char strings" & args]
   (into [] (map #(split % "") args))))

;; Accept commands from the command line
(if *command-line-args*
  (println (paths (apply clia->rows *command-line-args*))))
