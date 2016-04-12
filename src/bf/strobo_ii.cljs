#! /usr/bin/env planck

(ns bf.strobo-ii
  (:require [planck.core :refer [*command-line-args*]]
            [clojure.string :refer [join]]))

;; Strobogrammatic numbers II:
;; https://leetcode.com/problems/strobogrammatic-number-ii/
;;
;; A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).
;;
;; Find all strobogrammatic numbers that are of length = n.
;;
;; For example, Given n = 2, return
;; ["11","69","88","96"]

(def reflections [["1" "1"]
                  ["6" "9"]
                  ["8" "8"]
                  ["9" "6"]])

(def self-reflections ["1" "8"])

(defn surround
  "Surround item by n pairs
  i.e. (surround 1 [2 3] [4 5])
   => '(213 415)"
  [contents & surroundings]
  (map #(join contents %) surroundings))

(defn map-surround
  "Surround a collection by a finite set of pairs.
  i.e. (map-surround [[2 3]] [1 2 3])
   => '(213 223 233)"
  [surroundings contents]
  (map #(apply surround (cons % surroundings)) contents))

(defn strobo
  "Return all strobogrammatic numbers for a given length as a set"
  [length]
  (cond (> length 2) (->> (strobo (- length 2))
                          (map-surround reflections)
                          (flatten)
                          (into #{}))
        (= length 2) (map join reflections)
        (= length 1) self-reflections
        :else ""))

;; Accept commands from the command line
(if *command-line-args*
  (println (strobo (first *command-line-args*))))
