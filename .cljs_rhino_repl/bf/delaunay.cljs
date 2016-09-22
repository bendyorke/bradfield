(ns bf.delaunay)

;; Constants ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def canvas (js/document.getElementById "canvas"))

(def points [[0 0] [0 1] [1 0] [1 1]])

(def lines [[[0 0] [0 1]]
            [[0 0] [1 0]]
            [[0 0] [1 1]]
            [[0 1] [1 1]]
            [[1 0] [1 1]]])


;; Vertices of a circumscribing triangle around a 1x1 plane grid cube
(def +super+ [[-0.57735026919 1]
              [1.57735026919 1]
              [0.5 -0.86602540378]])

;; Calc ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn find-edges [vs]
  (case (count vs)
    (0 1) (throw (js/Error. "Not enough edges supplied"))
    2     vs
    3     (take 3 (partition 2 (cycle vs)))
    (apply stitch (map find-edges (split-at (count vs) vs)))))

(defn triangulate [points]
  (-> points
      (into +super+)
      sort
      find-edges))

;; Render ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


(defn get-ctx []
  (.getContext canvas "2d"))

(defn realize-point [[x y]]
  [(-> canvas .-width (* x))
   (-> canvas .-height (* y))])

(defn draw-point! [ctx p]
  (let [[x y] (realize-point p)]
    (.fillRect ctx (- x 2) (- y 2) 5 5)))

(defn draw-points! [ctx points]
  (doall (map (partial draw-point! ctx) points)))

(defn draw-line! [ctx [p1 p2]]
  (let [[x1 y1] (realize-point p1)
        [x2 y2] (realize-point p2)]
    (.beginPath ctx)
    (.moveTo ctx x1 y1)
    (.lineTo ctx x2 y2)
    (.stroke ctx)))

(defn draw-lines! [ctx lines]
  (doall (map (partial draw-line! ctx) lines)))

(defn clear! [ctx]
  (.clearRect ctx 0 0 (.-width canvas) (.-height canvas)))

(defn on-jsload []
  (let [ctx (get-ctx)]
    (clear! ctx)
    (draw-points! ctx points)
    (draw-lines! ctx lines)))
