(ns week-2.calc-ii)

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

(defn update-last [coll f]
  (update coll (dec (count coll)) f))

(defn type-of-char [c]
  (cond
    (<= 0 (.indexOf "0123456789" c)) :digit
    (<= 0 (.indexOf "+-*/" c))       :operator
    :else                            :unknown))

(defn add-digit
  "Given a string representation of a number, parse it to a number.  If the first value in the stack
  is a number, add it as a place value.  Otherwise, add it to the top of the stack. i.e.
  (add-digit '(1 2 3) 1) -> '(11 2 3)
  (add-digit '(nil 2 3) 1) -> '(1 nil 2 3)"
  [stack digit]
  (let [digit (js/parseFloat digit)]
    (if (number? (last stack))
      (update-last stack #(-> % (* 10) (+ digit)))
      (conj stack digit))))

(defn create-stack [string]
  (reduce (fn [stack char]
            (case (type-of-char char)
              :digit    (add-digit stack char)
              :operator (conj stack char)
              stack))
          []
          (seq string)))

(defn apply-operators [stack operators]
  (loop [out-stack        []
         [a b c & remain] stack]
    (if (nil? a)
      out-stack
      (if-let [operator (operators b)]
        ;; #_(comment "Keep the same out-stack, but merge the first three values left in the stack")
        (recur out-stack
               (conj remain (operator a c)))
        ;; #_(comment "Add the value to the out stack, and remove the first element from the remaining stack")
        (recur (conj out-stack a)
               (conj remain c b))))))

(defn calc [string]
  (-> string
      create-stack
      (apply-operators {"*" * "/" /})
      (apply-operators {"+" + "-" -})
      first))
