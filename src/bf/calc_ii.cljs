(ns bf.calc-ii
  (:require [clojure.string :refer [trim split]]
            [cljs.test :refer-macros [deftest is run-tests]]))

;; Basic Calculator II:
;; https://leetcode.com/problems/basic-calculator-ii/

;; Implement a basic calculator to evaluate a simple expression string.
;;
;; The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . The integer division should truncate toward zero.
;;
;; You may assume that the given expression is always valid.
;;
;; Some examples:
;; "3+2*2" = 7
;; " 3/2 " = 1
;; " 3+5 / 2 " = 5
;; Note: Do not use the eval built-in library function.<Paste>

;; Domain:
;; Input it a string consiting of digits, +, -, *, /, and space characters
;; Operators * and / must be applied before + and -
;; Returns a string
;; No parens (for now)

;; Approach:
;; Break string into a list of numbers & operators
;; - loop over each char
;; - if number:
;;   - if previous entry in stack is number: append to that number (a + b = (a*10) + b)
;;   - else: convert to int and add it to the stack
;; - if operator: add the string to the stack
;; - else: ignore
;;
;; Loop through stack and apply the operators (first */ then +-)
;; - loop through the stack
;; - if applicable operator: apply it to the previous and next value in the loop and add the result to the stack
;; - else: add it to the stack
;;
;; Return the first value of the stack

(defn to-number [string]
  (let [number (-> string js/parseFloat)]
    (if (js/isNaN number) nil number)))

(defn add-to-stack [stack string]
  (let [trimmed (trim string)]
    (if-let [number (to-number trimmed)]
      (conj stack number)
      (case trimmed
        "*" (conj stack *)
        "/" (conj stack /)
        "+" (conj stack +)
        "-" (conj stack -)
        stack))))

(defn create-stack [string]
  (reduce add-to-stack (list) (split string #"(\d+)")))

(defn apply-last-operator [[a operator b & stack]]
  (conj stack (.trunc js/Math (operator b a))))

(defn apply-operators [stack operators]
  (reduce (fn [result el]
            (if (some #(= (first result) %) operators)
              (apply-last-operator (conj result el))
              (conj result el)))
          (list)
          (reverse stack)))

(defn calc [string]
  (-> string
      create-stack
      (apply-operators [* /])
      (apply-operators [+ -])
      first))

;;
;; TESTS
;;

(deftest to-number-test
  (is (= (to-number "1") 1))
  (is (= (to-number "x") nil))
  (is (= (to-number "10") 10)))

(deftest add-to-stack-test
  (is (= (add-to-stack (list) "10") (list 10)))
  (is (= (add-to-stack (list) "xx") (list)))
  (is (= (add-to-stack (list) " +") (list +)))
  (is (= (add-to-stack (list) "/") (list /)))
  (is (= (add-to-stack (list /) "1") (list 1 /))))

(deftest create-stack-test
  (is (= (create-stack "1+1") (list 1 + 1)))
  (is (= (create-stack "1 + 1") (list 1 + 1)))
  (is (= (create-stack " 1+1 ") (list 1 + 1)))
  (is (= (create-stack "11+11") (list 11 + 11))))

(deftest apply-last-operator-test
  (is (= (apply-last-operator (list 1 + 1)) (list 2)))
  (is (= (apply-last-operator (list 1 + 1 - 1)) (list 2 - 1))))

(deftest apply-operators-test
  (is (= (apply-operators (list 1) []) (list 1)))
  (is (= (apply-operators (list 1 + 2) []) (list 1 + 2)))
  (is (= (apply-operators (list 1 + 2) [+]) (list 3)))
  (is (= (apply-operators (list 1 + 2 - 3) [+]) (list 3 - 3)))
  (is (= (apply-operators (list 1 * 2 - 3 * 4) [*]) (list 2 - 12))))

(deftest calc-test
  (is (= (calc "1") 1))
  (is (= (calc "1+1") 2))
  (is (= (calc "1+1+1") 3))
  (is (= (calc "1+1-1") 1))
  (is (= (calc "1+1-1*2") 0))
  (is (= (calc "1+1-1*2/2") 1))
  (is (= (calc "1+10/10-1*2/2") 1))
  (is (= (calc "1/2") 0)))
