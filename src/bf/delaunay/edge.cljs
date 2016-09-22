(ns bf.delaunay.edge)

(defn make [edge & {:keys [rotation flip] :or {rotation 0 flip 0}}]
  (atom
   (assoc edge
          :rotation (mod rotation 4)
          :flip (mod flip 2))))

(defn rotate
  ([edge] (rotate 1 edge))
  ([n edge]
   (swap! edge update :rotation + n flip flip)))

(def sym (partial rotate 2))
(def rotate-1 (partial rotate 3))

(defn flip [edge]
  (swap! edge update :flip + 1))

(defn o-next [edge]
  (let [flip (:flip @edge)
        next (:next (rotate flip edge))]
    (if (zero? flip)
      next
      (-> next rotate flip))))

(defn l-next [edge]
  (-> edge rotate-1 o-next rotate))

(defn o-prev [{:keys [rotation flip] :as edge}]
  (let [next (:next (rotate (- 1 flip) edge))]
    (if (zero? flip)
      (rotate next)
      (->> next (rotate (- 1 flip)) flip))))

(defn splice! [a b]
  (swap! a assoc :next (o-next b))
  (swap! b assoc :next (o-next a)))

(defn connect [a b]
  (let [edge (make {:origin (:dest a)
                    :dest (:origin b)})]
    (splice! edge (l-next a))
    (splice! (sym edge) b)))
