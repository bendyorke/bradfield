// Compiled by ClojureScript 1.9.89 {}
goog.provide('bf.delaunay');
goog.require('cljs.core');
bf.delaunay.canvas = document.getElementById("canvas");
bf.delaunay.points = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null);
bf.delaunay.lines = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null)], null);
bf.delaunay._PLUS_super_PLUS_ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-0.57735026919,(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.57735026919,(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,-0.86602540378], null)], null);
bf.delaunay.find_edges = (function bf$delaunay$find_edges(vs){
var G__30129 = cljs.core.count.call(null,vs);
switch (G__30129) {
case (0):
case (1):
throw (new Error("Not enough edges supplied"));

break;
case (2):
return vs;

break;
case (3):
return cljs.core.take.call(null,(3),cljs.core.partition.call(null,(2),cljs.core.cycle.call(null,vs)));

break;
default:
return cljs.core.apply.call(null,bf.delaunay.stitch,cljs.core.map.call(null,bf$delaunay$find_edges,cljs.core.split_at.call(null,cljs.core.count.call(null,vs),vs)));

}
});
bf.delaunay.triangulate = (function bf$delaunay$triangulate(points){
return bf.delaunay.find_edges.call(null,cljs.core.sort.call(null,cljs.core.into.call(null,points,bf.delaunay._PLUS_super_PLUS_)));
});
bf.delaunay.get_ctx = (function bf$delaunay$get_ctx(){
return bf.delaunay.canvas.getContext("2d");
});
bf.delaunay.realize_point = (function bf$delaunay$realize_point(p__30131){
var vec__30135 = p__30131;
var x = cljs.core.nth.call(null,vec__30135,(0),null);
var y = cljs.core.nth.call(null,vec__30135,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(bf.delaunay.canvas.width * x),(bf.delaunay.canvas.height * y)], null);
});
bf.delaunay.draw_point_BANG_ = (function bf$delaunay$draw_point_BANG_(ctx,p){
var vec__30141 = bf.delaunay.realize_point.call(null,p);
var x = cljs.core.nth.call(null,vec__30141,(0),null);
var y = cljs.core.nth.call(null,vec__30141,(1),null);
return ctx.fillRect((x - (2)),(y - (2)),(5),(5));
});
bf.delaunay.draw_points_BANG_ = (function bf$delaunay$draw_points_BANG_(ctx,points){
return cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,bf.delaunay.draw_point_BANG_,ctx),points));
});
bf.delaunay.draw_line_BANG_ = (function bf$delaunay$draw_line_BANG_(ctx,p__30144){
var vec__30154 = p__30144;
var p1 = cljs.core.nth.call(null,vec__30154,(0),null);
var p2 = cljs.core.nth.call(null,vec__30154,(1),null);
var vec__30157 = bf.delaunay.realize_point.call(null,p1);
var x1 = cljs.core.nth.call(null,vec__30157,(0),null);
var y1 = cljs.core.nth.call(null,vec__30157,(1),null);
var vec__30160 = bf.delaunay.realize_point.call(null,p2);
var x2 = cljs.core.nth.call(null,vec__30160,(0),null);
var y2 = cljs.core.nth.call(null,vec__30160,(1),null);
ctx.beginPath();

ctx.moveTo(x1,y1);

ctx.lineTo(x2,y2);

return ctx.stroke();
});
bf.delaunay.draw_lines_BANG_ = (function bf$delaunay$draw_lines_BANG_(ctx,lines){
return cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,bf.delaunay.draw_line_BANG_,ctx),lines));
});
bf.delaunay.clear_BANG_ = (function bf$delaunay$clear_BANG_(ctx){
return ctx.clearRect((0),(0),bf.delaunay.canvas.width,bf.delaunay.canvas.height);
});
bf.delaunay.on_jsload = (function bf$delaunay$on_jsload(){
var ctx = bf.delaunay.get_ctx.call(null);
bf.delaunay.clear_BANG_.call(null,ctx);

bf.delaunay.draw_points_BANG_.call(null,ctx,bf.delaunay.points);

return bf.delaunay.draw_lines_BANG_.call(null,ctx,bf.delaunay.lines);
});

//# sourceMappingURL=delaunay.js.map