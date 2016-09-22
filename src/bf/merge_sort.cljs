(ns bf.merge-sort)

(defn combine [xs ys]
  (loop [[x & xrest] xs
         [y & yrest] ys
         zs          []]
    (cond
      (and (nil? x) (nil? y))
      zs

      (nil? x)
      (recur xrest yrest (conj zs y))

      (nil? y)
      (recur xrest yrest (conj zs x))

      :else
      (if (< x y)
        (recur xrest (conj yrest y) (conj zs x))
        (recur (conj xrest x) yrest (conj zs y))))))

(defn first-half [xs]
  (-> xs count (/ 2) js/Math.ceil (take xs)))

(defn second-half [xs]
  (-> xs count (/ 2) js/Math.ceil (drop xs)))

(defn merge-sort [xs]
  (if (<= (count xs) 1)
    xs
    (combine
      (merge-sort (first-half xs))
      (merge-sort (second-half xs)))))

 ; Splitting vectors
 ; (println (first-half [1 2 3 4 5]))
 ; (println (second-half [1 2 3 4 5]))
 ; (println (first-half [1 2 3 4 5 6]))
 ; (println (second-half [1 2 3 4 5 6]))

 ; Combine
(println (combine [1] [2]))
(println (combine [1 4 5 8] [2]))
(println (combine [1 4 5 6] [2 3 8]))

 ; Merge-sort
(println (merge-sort [1 4 2 2 2 2 2 2]))
(println (merge-sort [1 2 5 4 3 9 8 6]))
