#! /usr/bin/env planck

(ns bf.strobo-i
  (:require [planck.core :refer [*command-line-args*]]))

;; Strobogrammatic numbers:
;; https://leetcode.com/problems/strobogrammatic-number/
;;
;; A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).
;;
;; Write a function to determine if a number is strobogrammatic. The number is represented as a string.
;;
;; For example, the numbers "69", "88", and "818" are all strobogrammatic.

(def reflections {"1" "1"
                  "6" "9"
                  "8" "8"
                  "9" "6"})

(defn strobo?
  "Check to see if a number is strobogrammatic"
  [number]
  (and (= (reflections (first number)) (last number))
       (if-let [inside (butlast (rest number))]
         (strobo? inside) true)))

;; Accept commands from the command line
(if *command-line-args*
  (println (map strobo? *command-line-args*)))
