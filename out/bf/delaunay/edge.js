// Compiled by ClojureScript 1.9.89 {}
goog.provide('bf.delaunay.edge');
goog.require('cljs.core');
bf.delaunay.edge.make = (function bf$delaunay$edge$make(var_args){
var args__28073__auto__ = [];
var len__28066__auto___28435 = arguments.length;
var i__28067__auto___28436 = (0);
while(true){
if((i__28067__auto___28436 < len__28066__auto___28435)){
args__28073__auto__.push((arguments[i__28067__auto___28436]));

var G__28437 = (i__28067__auto___28436 + (1));
i__28067__auto___28436 = G__28437;
continue;
} else {
}
break;
}

var argseq__28074__auto__ = ((((1) < args__28073__auto__.length))?(new cljs.core.IndexedSeq(args__28073__auto__.slice((1)),(0),null)):null);
return bf.delaunay.edge.make.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28074__auto__);
});

bf.delaunay.edge.make.cljs$core$IFn$_invoke$arity$variadic = (function (edge,p__28432){
var map__28433 = p__28432;
var map__28433__$1 = ((((!((map__28433 == null)))?((((map__28433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28433):map__28433);
var rotation = cljs.core.get.call(null,map__28433__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var flip = cljs.core.get.call(null,map__28433__$1,new cljs.core.Keyword(null,"flip","flip",2033871302));
return null;
});

bf.delaunay.edge.make.cljs$lang$maxFixedArity = (1);

bf.delaunay.edge.make.cljs$lang$applyTo = (function (seq28430){
var G__28431 = cljs.core.first.call(null,seq28430);
var seq28430__$1 = cljs.core.next.call(null,seq28430);
return bf.delaunay.edge.make.cljs$core$IFn$_invoke$arity$variadic(G__28431,seq28430__$1);
});

bf.delaunay.edge.rotate = (function bf$delaunay$edge$rotate(p__28438){
var map__28441 = p__28438;
var map__28441__$1 = ((((!((map__28441 == null)))?((((map__28441.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28441.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28441):map__28441);
var edge = map__28441__$1;
var rotation = cljs.core.get.call(null,map__28441__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var flip = cljs.core.get.call(null,map__28441__$1,new cljs.core.Keyword(null,"flip","flip",2033871302));
return bf.delaunay.edge.make.call(null,edge,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(((rotation + (1)) + flip) + flip),new cljs.core.Keyword(null,"flip","flip",2033871302),flip);
});
bf.delaunay.edge.flip = (function bf$delaunay$edge$flip(p__28443){
var map__28446 = p__28443;
var map__28446__$1 = ((((!((map__28446 == null)))?((((map__28446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28446):map__28446);
var edge = map__28446__$1;
var rotation = cljs.core.get.call(null,map__28446__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644));
var flip__$1 = cljs.core.get.call(null,map__28446__$1,new cljs.core.Keyword(null,"flip","flip",2033871302));
return bf.delaunay.edge.make.call(null,edge,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),rotation,new cljs.core.Keyword(null,"flip","flip",2033871302),(flip__$1 + (1)));
});

//# sourceMappingURL=edge.js.map