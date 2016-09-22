(ns bf.delaunay.edge)

(defn make [edge & {:keys [rotation flip]}])

(defn rotate [{:keys [rotation flip] :as edge}]
  (make edge
        :rotation (+ rotation 1 flip flip)
        :flip flip))

(defn flip [{:keys [rotation flip] :as edge}]
  (make edge
        :rotation rotation
        :flip (+ flip 1)))
