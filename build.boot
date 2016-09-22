(set-env!
 :source-paths #{"src"}
 :resource-paths #{"resources"}
 :dependencies '[[adzerk/boot-cljs            "1.7.228-1"      :scope "test"]
                 [adzerk/boot-cljs-repl       "0.3.0"          :scope "test"]
                 [adzerk/boot-reload          "0.4.11"         :scope "test"]
                 [pandeiro/boot-http          "0.7.3"          :scope "test"]
                 [org.clojure/clojure         "1.9.0-alpha7"]
                 [org.clojure/clojurescript   "1.9.89"]
                 [com.cemerick/piggieback     "0.2.1"          :scope "test"]
                 [weasel                      "0.7.0"          :scope "test"]
                 [org.clojure/tools.nrepl     "0.2.12"         :scope "test"]])

(require
 '[adzerk.boot-cljs      :refer [cljs]]
 '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
 '[adzerk.boot-reload    :refer [reload]]
 '[pandeiro.boot-http    :refer [serve]])

(task-options!
 target {:dir #{"target"}})

(deftask project
  [p project VAL str "Project to be hot reloaded"]
  (task-options!
   cljs   {:optimizations :none
           :source-map true}
   reload {:on-jsload (symbol (str (or project "bf.delaunay") "/on-jsload"))})
  (comp (serve)
     (watch)
     (cljs-repl)
     (reload)
     (cljs)))
