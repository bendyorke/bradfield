#! /usr/bin/env planck

(ns week-1.strobo-iii
  (:require [planck.core :refer [*command-line-args*]]
            [clojure.string :refer [join]]))

;; Strobogrammatic numbers III:
;; https://leetcode.com/problems/strobogrammatic-number-iii/
;;
;; A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).
;;
;; Write a function to count the total strobogrammatic numbers that exist in the range of low <= num <= high.
;;
;; For example,
;;
;; Given low = "50", high = "100", return 3. Because 69, 88, and 96 are three strobogrammatic numbers.

(def all-reflections [["1" "1"]
                      ["6" "9"]
                      ["8" "8"]
                      ["9" "6"]])

(def self-reflections ["1" "8"])

(defn reflections
  "Return the reflections within two bounds"
  [min max]
  ())

(defn place-value
  "Return the integer at a given place value.
  If the number does not have values at that place, return 0"
  [place number]
  (if (>= (count number) place)
    (nth number (- (count number) place))
    0))

(defn count-strobos
  "Return the number of strobogrammatic number between two other numbers"
  [min max])

;; Iterate through each length between min and max
;; Start building strobos from the outside in

;; Accept commands from the command line
(if *command-line-args*
  (println (apply count-strobos (take 2 *command-line-args*))))
