(ns week-2.calc
  (:require [cljs.test :refer-macros [deftest is]]))

;; Basic Calculator:
;; https://leetcode.com/problems/basic-calculator/

;; Implement a basic calculator to evaluate a simple expression string.
;;
;; The expression string may contain open ( and closing parentheses ), the plus + or minus sign -, non-negative integers and empty spaces .
;;
;; You may assume that the given expression is always valid.
;;
;; Some examples:
;; "1 + 1" = 2
;; " 2-1 + 2 " = 3
;; "(1+(4+5+2)-3)+(6+8)" = 23
;; Note: Do not use the eval built-in library function.

;; Domain:
;; Accepts a single string
;; String can only consist of (, ), +, -, positive numbers, and whitespace
;; Operations will apply left to right
;; Operations in parenthesis must happen first
;; Order will always be oprand operator operand

;; Approach:
;; Create a new stack
;; Loop through chars
;; Check the type of the first char
;; If it is a whitespace, skip
;; If it is a number, and the last element in the stack is a number, join the two as strings
;; If it is a number, and the last element in the stack is an operator, add it to the stack
;; If it is an operand, and the stack has 3 elements, resolve the current stack
;; If it is an operand, add it to the stack
;; If it is an end parenthesis, resolve the current stack and pop off a saved saved
;; If it is an open parenthesis, save the current stack and create a new one
;; Resolving the stack:
;; if the stack is complete (two operands and an operator) apply the operator to the operands
;; if the stack is incomplete (either (list operand operator) or (list operand)) return the operand

;; SHARED

(defn string->operator [string]
  ({"+" + "-" -} string))

(defn type-of-char
  "Accepts a string and checks what type of character it is.  It is expected to be
  length 1 (a char)."
  [c]
  (cond
    (<= 0 (.indexOf "0123456789" c)) :digit
    (or (= "+" c) (= "-" c))         :operator
    (= "(" c)                        :open-paren
    (= ")" c)                        :close-paren
    :else                            :unknown))

;; LOOP

(defn resolve-stack
  "If the stack is complete (list operand operator operand), apply the operator to the
  operands.  If the stack is incomplete (either (list operand) or (list operand operator))
  return the operand."
  [[second operator first :as stack]]
  (if (= (count stack) 3)
    ((string->operator operator) (js/parseFloat first) (js/parseFloat second))
    (js/parseFloat (last stack))))

(defn add-digit [stack digit]
  (if (= :digit (type-of-char (first stack)))
    (conj (rest stack) (str (first stack) digit))
    (conj stack digit)))

(defn add-operator [stack operator]
  (->> stack resolve-stack str (list operator)))

(defn calc-loop
  "Accepts a string consisting of (, ), +, -, 0-9 and whitespaces, and evaluates
  the expression."
  [string]
  (loop [current-stack    (list)
         stacks           (list)
         [value & remain] (seq string)]
    (if value
      (case (type-of-char value)
        :digit       (recur (add-digit current-stack value) stacks remain)
        :operator    (recur (add-operator current-stack value) stacks remain)
        :open-paren  (recur (list) (conj stacks current-stack) remain)
        :close-paren (recur (first stacks) (rest stacks) (conj remain (resolve-stack current-stack)))
        (recur current-stack stacks remain))
      (resolve-stack current-stack))))


;; REDUCE VERSION

(defn reduce-stack [[b operator a & stack]]
  (conj
    stack
    (str
      ((string->operator operator)
       (js/parseFloat a)
       (js/parseFloat b)))))


(defn apply-digit-to-stack [[last-token :as stack] char]
  (let [prev-type (type-of-char last-token)]
    (cond
      (seq? last-token)       (conj (rest stack) (apply-digit-to-stack last-token char))
      (= prev-type :digit)    (conj (rest stack) (str last-token char))
      (= prev-type :operator) (reduce-stack (conj stack char))
      :else                   (conj stack char))))

(defn add-operator-to-stack [[last-token :as stack] char]
  (if (seq? last-token)
    (conj (rest stack) (add-operator-to-stack last-token char))
    (conj stack char)))

(defn calc-reduce-step [stack token]
  (case (type-of-char token)
    :digit       (apply-digit-to-stack stack token)
    :operator    (add-operator-to-stack stack token)
    :open-paren  (conj stack '())
    :close-paren (apply-digit-to-stack (rest stack) (ffirst stack))
    stack))

(defn calc-reduce [string]
  (first (reduce calc-reduce-step '() (seq string))))

(deftest add-digit-to-stack-test
  (is (= (apply-digit-to-stack '("2") "3") '("23")))
  (is (= (apply-digit-to-stack (list (list) "2") "3") (list '("3") "2")))
  (is (= (apply-digit-to-stack (list '("3") "2") "4") (list '("34") "2")))
  (is (= (apply-digit-to-stack (list "+" "2") "3") '("5"))))

(deftest add-operator-to-stack-test
  (is (= (add-operator-to-stack (list) "+") (list "+")))
  (is (= (add-operator-to-stack (list (list) "1") "+") (list (list "+") "1")))
  (is (= (add-operator-to-stack (list (list "1") "2") "+") (list (list "+" "1") "2"))))

(deftest calc-reduce-test
  (is (= (calc-reduce "1") "1"))
  (is (= (calc-reduce "1 + 1") "2"))
  (is (= (calc-reduce " 2-1 + 2 ") "3"))
  (is (= (calc-reduce "(1)") "1"))
  (is (= (calc-reduce "(1 + 1)") "2"))
  (is (= (calc-reduce "5 - (5 - 2)") "2"))
  (is (= (calc-reduce "(1 + 1) + 1") "3"))
  (is (= (calc-reduce "(1 + 1) + (1 + 1)") "4"))
  (is (= (calc-reduce "1 + (1 + 1) + 1") "4"))
  (is (= (calc-reduce "(1-3)+(6+8)") "12"))
  (is (= (calc-reduce "(1+(4+5+2)-3)+(6+8)") "23")))
