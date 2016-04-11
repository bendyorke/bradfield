(ns week-2.polish)

;; Evaluate Reverse Polish Notation:
;; https://leetcode.com/problems/evaluate-reverse-polish-notation/

;; Evaluate the value of an arithmetic expression in Reverse Polish Notation.
;;
;; Valid operators are +, -, *, /. Each operand may be an integer or another expression.
;;
;; Some examples:
;; ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
;; ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6
;; Subscribe to see which companies asked this question

;; Domain:
;; Accepts a vector of strings
;; Strings can be either a number or one of four operators
;; Reading left to right, reduce previous 2 values with an operator when you run across one
;; First operand to be entered will come first when applying an operator


;; Approach:
;; Create a new stack for values to be reduced (operands)
;; Loop through input values
;; Check if value is operand or operator
;; If it's an operand, add it to the stack of values to be reduced
;; If it's an operator, apply the operator to the two most recent operands
;; If there are any remaining values, continue to the next value
;; If there are no remaining values, return the first operand

(defn parse-value
  "Accepts a single argument and returns the parsed value of the string - if it is an
  operator, it will return the symbol for that operator. If it is not, it will return
  the number for the given operand."
  [string]
  (case string
    "+" +
    "-" -
    "*" *
    "/" /
    (js/parseFloat string)))

(defn ensure-number
  "Ensures the value is a number.  If it does not appear to be a number 0 will be returned"
  [input]
  (if (number? input) input 0))

(defn apply-operator
  "Accepts an oeprator and a vector of operands.  Applys the operator to the last two
  operands.  Absent values will be treated as 0."
  [operator [a b & remaining]]
  (conj remaining (operator (ensure-number b) (ensure-number a))))

(defn rpn
  "Given a list of operators and operands, evaluate in Reverse Polish Notation
  Accepts a vector of strings representing numbers, +, -, *, or /.
  i.e. (rpn [2 1 + 3 *]) -> 9"
  [values]
  (loop [operands  '()
         remaining values]
    (if (empty? remaining)
      (first operands)
      (let [current-value    (parse-value (first remaining))
            remaining-values (rest remaining)]
        (if (number? current-value)
          (recur (conj operands current-value) remaining-values)
          (recur (apply-operator current-value operands) remaining-values))))))
