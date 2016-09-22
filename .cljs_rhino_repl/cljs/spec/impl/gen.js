// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__27353__auto__,writer__27354__auto__,opt__27355__auto__){
return cljs.core._write.call(null,writer__27354__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__27829__auto__ = [];
var len__27822__auto___29900 = arguments.length;
var i__27823__auto___29901 = (0);
while(true){
if((i__27823__auto___29901 < len__27822__auto___29900)){
args__27829__auto__.push((arguments[i__27823__auto___29901]));

var G__29902 = (i__27823__auto___29901 + (1));
i__27823__auto___29901 = G__29902;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq29899){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29899));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__27829__auto__ = [];
var len__27822__auto___29904 = arguments.length;
var i__27823__auto___29905 = (0);
while(true){
if((i__27823__auto___29905 < len__27822__auto___29904)){
args__27829__auto__.push((arguments[i__27823__auto___29905]));

var G__29906 = (i__27823__auto___29905 + (1));
i__27823__auto___29905 = G__29906;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq29903){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29903));
});

var g_QMARK__29907 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_29908 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__29907){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__29907))
,null));
var mkg_29909 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__29907,g_29908){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__29907,g_29908))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__29907,g_29908,mkg_29909){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__29907).call(null,x);
});})(g_QMARK__29907,g_29908,mkg_29909))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__29907,g_29908,mkg_29909){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_29909).call(null,gfn);
});})(g_QMARK__29907,g_29908,mkg_29909))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__29907,g_29908,mkg_29909){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_29908).call(null,generator);
});})(g_QMARK__29907,g_29908,mkg_29909))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__27898__auto___29927 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__27898__auto___29927){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__27829__auto__ = [];
var len__27822__auto___29928 = arguments.length;
var i__27823__auto___29929 = (0);
while(true){
if((i__27823__auto___29929 < len__27822__auto___29928)){
args__27829__auto__.push((arguments[i__27823__auto___29929]));

var G__29930 = (i__27823__auto___29929 + (1));
i__27823__auto___29929 = G__29930;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});})(g__27898__auto___29927))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27898__auto___29927){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27898__auto___29927),args);
});})(g__27898__auto___29927))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__27898__auto___29927){
return (function (seq29910){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29910));
});})(g__27898__auto___29927))
;


var g__27898__auto___29931 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__27898__auto___29931){
return (function cljs$spec$impl$gen$list(var_args){
var args__27829__auto__ = [];
var len__27822__auto___29932 = arguments.length;
var i__27823__auto___29933 = (0);
while(true){
if((i__27823__auto___29933 < len__27822__auto___29932)){
args__27829__auto__.push((arguments[i__27823__auto___29933]));

var G__29934 = (i__27823__auto___29933 + (1));
i__27823__auto___29933 = G__29934;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});})(g__27898__auto___29931))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27898__auto___29931){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27898__auto___29931),args);
});})(g__27898__auto___29931))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__27898__auto___29931){
return (function (seq29911){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29911));
});})(g__27898__auto___29931))
;


var g__27898__auto___29935 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__27898__auto___29935){
return (function cljs$spec$impl$gen$map(var_args){
var args__27829__auto__ = [];
var len__27822__auto___29936 = arguments.length;
var i__27823__auto___29937 = (0);
while(true){
if((i__27823__auto___29937 < len__27822__auto___29936)){
args__27829__auto__.push((arguments[i__27823__auto___29937]));

var G__29938 = (i__27823__auto___29937 + (1));
i__27823__auto___29937 = G__29938;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});})(g__27898__auto___29935))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27898__auto___29935){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27898__auto___29935),args);
});})(g__27898__auto___29935))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__27898__auto___29935){
return (function (seq29912){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29912));
});})(g__27898__auto___29935))
;


var g__27898__auto___29939 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__27898__auto___29939){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__27829__auto__ = [];
var len__27822__auto___29940 = arguments.length;
var i__27823__auto___29941 = (0);
while(true){
if((i__27823__auto___29941 < len__27822__auto___29940)){
args__27829__auto__.push((arguments[i__27823__auto___29941]));

var G__29942 = (i__27823__auto___29941 + (1));
i__27823__auto___29941 = G__29942;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});})(g__27898__auto___29939))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27898__auto___29939){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27898__auto___29939),args);
});})(g__27898__auto___29939))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__27898__auto___29939){
return (function (seq29913){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29913));
});})(g__27898__auto___29939))
;


var g__27898__auto___29943 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__27898__auto___29943){
return (function cljs$spec$impl$gen$set(var_args){
var args__27829__auto__ = [];
var len__27822__auto___29944 = arguments.length;
var i__27823__auto___29945 = (0);
while(true){
if((i__27823__auto___29945 < len__27822__auto___29944)){
args__27829__auto__.push((arguments[i__27823__auto___29945]));

var G__29946 = (i__27823__auto___29945 + (1));
i__27823__auto___29945 = G__29946;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});})(g__27898__auto___29943))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27898__auto___29943){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27898__auto___29943),args);
});})(g__27898__auto___29943))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__27898__auto___29943){
return (function (seq29914){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29914));
});})(g__27898__auto___29943))
;


var g__27898__auto___29947 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__27898__auto___29947){
return (function cljs$spec$impl$gen$vector(var_args){
var args__27829__auto__ = [];
var len__27822__auto___29948 = arguments.length;
var i__27823__auto___29949 = (0);
while(true){
if((i__27823__auto___29949 < len__27822__auto___29948)){
args__27829__auto__.push((arguments[i__27823__auto___29949]));

var G__29950 = (i__27823__auto___29949 + (1));
i__27823__auto___29949 = G__29950;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});})(g__27898__auto___29947))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27898__auto___29947){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27898__auto___29947),args);
});})(g__27898__auto___29947))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__27898__auto___29947){
return (function (seq29915){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29915));
});})(g__27898__auto___29947))
;


var g__27898__auto___29951 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__27898__auto___29951){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__27829__auto__ = [];
var len__27822__auto___29952 = arguments.length;
var i__27823__auto___29953 = (0);
while(true){
if((i__27823__auto___29953 < len__27822__auto___29952)){
args__27829__auto__.push((arguments[i__27823__auto___29953]));

var G__29954 = (i__27823__auto___29953 + (1));
i__27823__auto___29953 = G__29954;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});})(g__27898__auto___29951))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27898__auto___29951){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27898__auto___29951),args);
});})(g__27898__auto___29951))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__27898__auto___29951){
return (function (seq29916){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29916));
});})(g__27898__auto___29951))
;


var g__27898__auto___29955 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__27898__auto___29955){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__27829__auto__ = [];
var len__27822__auto___29956 = arguments.length;
var i__27823__auto___29957 = (0);
while(true){
if((i__27823__auto___29957 < len__27822__auto___29956)){
args__27829__auto__.push((arguments[i__27823__auto___29957]));

var G__29958 = (i__27823__auto___29957 + (1));
i__27823__auto___29957 = G__29958;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});})(g__27898__auto___29955))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27898__auto___29955){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27898__auto___29955),args);
});})(g__27898__auto___29955))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__27898__auto___29955){
return (function (seq29917){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29917));
});})(g__27898__auto___29955))
;


var g__27898__auto___29959 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__27898__auto___29959){
return (function cljs$spec$impl$gen$elements(var_args){
var args__27829__auto__ = [];
var len__27822__auto___29960 = arguments.length;
var i__27823__auto___29961 = (0);
while(true){
if((i__27823__auto___29961 < len__27822__auto___29960)){
args__27829__auto__.push((arguments[i__27823__auto___29961]));

var G__29962 = (i__27823__auto___29961 + (1));
i__27823__auto___29961 = G__29962;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});})(g__27898__auto___29959))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27898__auto___29959){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27898__auto___29959),args);
});})(g__27898__auto___29959))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__27898__auto___29959){
return (function (seq29918){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29918));
});})(g__27898__auto___29959))
;


var g__27898__auto___29963 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__27898__auto___29963){
return (function cljs$spec$impl$gen$bind(var_args){
var args__27829__auto__ = [];
var len__27822__auto___29964 = arguments.length;
var i__27823__auto___29965 = (0);
while(true){
if((i__27823__auto___29965 < len__27822__auto___29964)){
args__27829__auto__.push((arguments[i__27823__auto___29965]));

var G__29966 = (i__27823__auto___29965 + (1));
i__27823__auto___29965 = G__29966;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});})(g__27898__auto___29963))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27898__auto___29963){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27898__auto___29963),args);
});})(g__27898__auto___29963))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__27898__auto___29963){
return (function (seq29919){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29919));
});})(g__27898__auto___29963))
;


var g__27898__auto___29967 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__27898__auto___29967){
return (function cljs$spec$impl$gen$choose(var_args){
var args__27829__auto__ = [];
var len__27822__auto___29968 = arguments.length;
var i__27823__auto___29969 = (0);
while(true){
if((i__27823__auto___29969 < len__27822__auto___29968)){
args__27829__auto__.push((arguments[i__27823__auto___29969]));

var G__29970 = (i__27823__auto___29969 + (1));
i__27823__auto___29969 = G__29970;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});})(g__27898__auto___29967))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27898__auto___29967){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27898__auto___29967),args);
});})(g__27898__auto___29967))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__27898__auto___29967){
return (function (seq29920){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29920));
});})(g__27898__auto___29967))
;


var g__27898__auto___29971 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__27898__auto___29971){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__27829__auto__ = [];
var len__27822__auto___29972 = arguments.length;
var i__27823__auto___29973 = (0);
while(true){
if((i__27823__auto___29973 < len__27822__auto___29972)){
args__27829__auto__.push((arguments[i__27823__auto___29973]));

var G__29974 = (i__27823__auto___29973 + (1));
i__27823__auto___29973 = G__29974;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});})(g__27898__auto___29971))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27898__auto___29971){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27898__auto___29971),args);
});})(g__27898__auto___29971))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__27898__auto___29971){
return (function (seq29921){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29921));
});})(g__27898__auto___29971))
;


var g__27898__auto___29975 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__27898__auto___29975){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__27829__auto__ = [];
var len__27822__auto___29976 = arguments.length;
var i__27823__auto___29977 = (0);
while(true){
if((i__27823__auto___29977 < len__27822__auto___29976)){
args__27829__auto__.push((arguments[i__27823__auto___29977]));

var G__29978 = (i__27823__auto___29977 + (1));
i__27823__auto___29977 = G__29978;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});})(g__27898__auto___29975))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27898__auto___29975){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27898__auto___29975),args);
});})(g__27898__auto___29975))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__27898__auto___29975){
return (function (seq29922){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29922));
});})(g__27898__auto___29975))
;


var g__27898__auto___29979 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__27898__auto___29979){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__27829__auto__ = [];
var len__27822__auto___29980 = arguments.length;
var i__27823__auto___29981 = (0);
while(true){
if((i__27823__auto___29981 < len__27822__auto___29980)){
args__27829__auto__.push((arguments[i__27823__auto___29981]));

var G__29982 = (i__27823__auto___29981 + (1));
i__27823__auto___29981 = G__29982;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});})(g__27898__auto___29979))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27898__auto___29979){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27898__auto___29979),args);
});})(g__27898__auto___29979))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__27898__auto___29979){
return (function (seq29923){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29923));
});})(g__27898__auto___29979))
;


var g__27898__auto___29983 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__27898__auto___29983){
return (function cljs$spec$impl$gen$sample(var_args){
var args__27829__auto__ = [];
var len__27822__auto___29984 = arguments.length;
var i__27823__auto___29985 = (0);
while(true){
if((i__27823__auto___29985 < len__27822__auto___29984)){
args__27829__auto__.push((arguments[i__27823__auto___29985]));

var G__29986 = (i__27823__auto___29985 + (1));
i__27823__auto___29985 = G__29986;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});})(g__27898__auto___29983))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27898__auto___29983){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27898__auto___29983),args);
});})(g__27898__auto___29983))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__27898__auto___29983){
return (function (seq29924){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29924));
});})(g__27898__auto___29983))
;


var g__27898__auto___29987 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__27898__auto___29987){
return (function cljs$spec$impl$gen$return(var_args){
var args__27829__auto__ = [];
var len__27822__auto___29988 = arguments.length;
var i__27823__auto___29989 = (0);
while(true){
if((i__27823__auto___29989 < len__27822__auto___29988)){
args__27829__auto__.push((arguments[i__27823__auto___29989]));

var G__29990 = (i__27823__auto___29989 + (1));
i__27823__auto___29989 = G__29990;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});})(g__27898__auto___29987))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27898__auto___29987){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27898__auto___29987),args);
});})(g__27898__auto___29987))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__27898__auto___29987){
return (function (seq29925){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29925));
});})(g__27898__auto___29987))
;


var g__27898__auto___29991 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__27898__auto___29991){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__27829__auto__ = [];
var len__27822__auto___29992 = arguments.length;
var i__27823__auto___29993 = (0);
while(true){
if((i__27823__auto___29993 < len__27822__auto___29992)){
args__27829__auto__.push((arguments[i__27823__auto___29993]));

var G__29994 = (i__27823__auto___29993 + (1));
i__27823__auto___29993 = G__29994;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});})(g__27898__auto___29991))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27898__auto___29991){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__27898__auto___29991),args);
});})(g__27898__auto___29991))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__27898__auto___29991){
return (function (seq29926){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29926));
});})(g__27898__auto___29991))
;

var g__27911__auto___30016 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__27911__auto___30016){
return (function cljs$spec$impl$gen$any(var_args){
var args__27829__auto__ = [];
var len__27822__auto___30017 = arguments.length;
var i__27823__auto___30018 = (0);
while(true){
if((i__27823__auto___30018 < len__27822__auto___30017)){
args__27829__auto__.push((arguments[i__27823__auto___30018]));

var G__30019 = (i__27823__auto___30018 + (1));
i__27823__auto___30018 = G__30019;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});})(g__27911__auto___30016))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27911__auto___30016){
return (function (args){
return cljs.core.deref.call(null,g__27911__auto___30016);
});})(g__27911__auto___30016))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__27911__auto___30016){
return (function (seq29995){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29995));
});})(g__27911__auto___30016))
;


var g__27911__auto___30020 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__27911__auto___30020){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__27829__auto__ = [];
var len__27822__auto___30021 = arguments.length;
var i__27823__auto___30022 = (0);
while(true){
if((i__27823__auto___30022 < len__27822__auto___30021)){
args__27829__auto__.push((arguments[i__27823__auto___30022]));

var G__30023 = (i__27823__auto___30022 + (1));
i__27823__auto___30022 = G__30023;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});})(g__27911__auto___30020))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27911__auto___30020){
return (function (args){
return cljs.core.deref.call(null,g__27911__auto___30020);
});})(g__27911__auto___30020))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__27911__auto___30020){
return (function (seq29996){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29996));
});})(g__27911__auto___30020))
;


var g__27911__auto___30024 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__27911__auto___30024){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__27829__auto__ = [];
var len__27822__auto___30025 = arguments.length;
var i__27823__auto___30026 = (0);
while(true){
if((i__27823__auto___30026 < len__27822__auto___30025)){
args__27829__auto__.push((arguments[i__27823__auto___30026]));

var G__30027 = (i__27823__auto___30026 + (1));
i__27823__auto___30026 = G__30027;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});})(g__27911__auto___30024))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27911__auto___30024){
return (function (args){
return cljs.core.deref.call(null,g__27911__auto___30024);
});})(g__27911__auto___30024))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__27911__auto___30024){
return (function (seq29997){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29997));
});})(g__27911__auto___30024))
;


var g__27911__auto___30028 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__27911__auto___30028){
return (function cljs$spec$impl$gen$char(var_args){
var args__27829__auto__ = [];
var len__27822__auto___30029 = arguments.length;
var i__27823__auto___30030 = (0);
while(true){
if((i__27823__auto___30030 < len__27822__auto___30029)){
args__27829__auto__.push((arguments[i__27823__auto___30030]));

var G__30031 = (i__27823__auto___30030 + (1));
i__27823__auto___30030 = G__30031;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});})(g__27911__auto___30028))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27911__auto___30028){
return (function (args){
return cljs.core.deref.call(null,g__27911__auto___30028);
});})(g__27911__auto___30028))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__27911__auto___30028){
return (function (seq29998){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29998));
});})(g__27911__auto___30028))
;


var g__27911__auto___30032 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__27911__auto___30032){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__27829__auto__ = [];
var len__27822__auto___30033 = arguments.length;
var i__27823__auto___30034 = (0);
while(true){
if((i__27823__auto___30034 < len__27822__auto___30033)){
args__27829__auto__.push((arguments[i__27823__auto___30034]));

var G__30035 = (i__27823__auto___30034 + (1));
i__27823__auto___30034 = G__30035;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});})(g__27911__auto___30032))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27911__auto___30032){
return (function (args){
return cljs.core.deref.call(null,g__27911__auto___30032);
});})(g__27911__auto___30032))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__27911__auto___30032){
return (function (seq29999){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29999));
});})(g__27911__auto___30032))
;


var g__27911__auto___30036 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__27911__auto___30036){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__27829__auto__ = [];
var len__27822__auto___30037 = arguments.length;
var i__27823__auto___30038 = (0);
while(true){
if((i__27823__auto___30038 < len__27822__auto___30037)){
args__27829__auto__.push((arguments[i__27823__auto___30038]));

var G__30039 = (i__27823__auto___30038 + (1));
i__27823__auto___30038 = G__30039;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});})(g__27911__auto___30036))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27911__auto___30036){
return (function (args){
return cljs.core.deref.call(null,g__27911__auto___30036);
});})(g__27911__auto___30036))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__27911__auto___30036){
return (function (seq30000){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30000));
});})(g__27911__auto___30036))
;


var g__27911__auto___30040 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__27911__auto___30040){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__27829__auto__ = [];
var len__27822__auto___30041 = arguments.length;
var i__27823__auto___30042 = (0);
while(true){
if((i__27823__auto___30042 < len__27822__auto___30041)){
args__27829__auto__.push((arguments[i__27823__auto___30042]));

var G__30043 = (i__27823__auto___30042 + (1));
i__27823__auto___30042 = G__30043;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});})(g__27911__auto___30040))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27911__auto___30040){
return (function (args){
return cljs.core.deref.call(null,g__27911__auto___30040);
});})(g__27911__auto___30040))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__27911__auto___30040){
return (function (seq30001){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30001));
});})(g__27911__auto___30040))
;


var g__27911__auto___30044 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__27911__auto___30044){
return (function cljs$spec$impl$gen$double(var_args){
var args__27829__auto__ = [];
var len__27822__auto___30045 = arguments.length;
var i__27823__auto___30046 = (0);
while(true){
if((i__27823__auto___30046 < len__27822__auto___30045)){
args__27829__auto__.push((arguments[i__27823__auto___30046]));

var G__30047 = (i__27823__auto___30046 + (1));
i__27823__auto___30046 = G__30047;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});})(g__27911__auto___30044))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27911__auto___30044){
return (function (args){
return cljs.core.deref.call(null,g__27911__auto___30044);
});})(g__27911__auto___30044))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__27911__auto___30044){
return (function (seq30002){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30002));
});})(g__27911__auto___30044))
;


var g__27911__auto___30048 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__27911__auto___30048){
return (function cljs$spec$impl$gen$int(var_args){
var args__27829__auto__ = [];
var len__27822__auto___30049 = arguments.length;
var i__27823__auto___30050 = (0);
while(true){
if((i__27823__auto___30050 < len__27822__auto___30049)){
args__27829__auto__.push((arguments[i__27823__auto___30050]));

var G__30051 = (i__27823__auto___30050 + (1));
i__27823__auto___30050 = G__30051;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});})(g__27911__auto___30048))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27911__auto___30048){
return (function (args){
return cljs.core.deref.call(null,g__27911__auto___30048);
});})(g__27911__auto___30048))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__27911__auto___30048){
return (function (seq30003){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30003));
});})(g__27911__auto___30048))
;


var g__27911__auto___30052 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__27911__auto___30052){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__27829__auto__ = [];
var len__27822__auto___30053 = arguments.length;
var i__27823__auto___30054 = (0);
while(true){
if((i__27823__auto___30054 < len__27822__auto___30053)){
args__27829__auto__.push((arguments[i__27823__auto___30054]));

var G__30055 = (i__27823__auto___30054 + (1));
i__27823__auto___30054 = G__30055;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});})(g__27911__auto___30052))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27911__auto___30052){
return (function (args){
return cljs.core.deref.call(null,g__27911__auto___30052);
});})(g__27911__auto___30052))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__27911__auto___30052){
return (function (seq30004){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30004));
});})(g__27911__auto___30052))
;


var g__27911__auto___30056 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__27911__auto___30056){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__27829__auto__ = [];
var len__27822__auto___30057 = arguments.length;
var i__27823__auto___30058 = (0);
while(true){
if((i__27823__auto___30058 < len__27822__auto___30057)){
args__27829__auto__.push((arguments[i__27823__auto___30058]));

var G__30059 = (i__27823__auto___30058 + (1));
i__27823__auto___30058 = G__30059;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});})(g__27911__auto___30056))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27911__auto___30056){
return (function (args){
return cljs.core.deref.call(null,g__27911__auto___30056);
});})(g__27911__auto___30056))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__27911__auto___30056){
return (function (seq30005){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30005));
});})(g__27911__auto___30056))
;


var g__27911__auto___30060 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__27911__auto___30060){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__27829__auto__ = [];
var len__27822__auto___30061 = arguments.length;
var i__27823__auto___30062 = (0);
while(true){
if((i__27823__auto___30062 < len__27822__auto___30061)){
args__27829__auto__.push((arguments[i__27823__auto___30062]));

var G__30063 = (i__27823__auto___30062 + (1));
i__27823__auto___30062 = G__30063;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});})(g__27911__auto___30060))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27911__auto___30060){
return (function (args){
return cljs.core.deref.call(null,g__27911__auto___30060);
});})(g__27911__auto___30060))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__27911__auto___30060){
return (function (seq30006){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30006));
});})(g__27911__auto___30060))
;


var g__27911__auto___30064 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__27911__auto___30064){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__27829__auto__ = [];
var len__27822__auto___30065 = arguments.length;
var i__27823__auto___30066 = (0);
while(true){
if((i__27823__auto___30066 < len__27822__auto___30065)){
args__27829__auto__.push((arguments[i__27823__auto___30066]));

var G__30067 = (i__27823__auto___30066 + (1));
i__27823__auto___30066 = G__30067;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});})(g__27911__auto___30064))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27911__auto___30064){
return (function (args){
return cljs.core.deref.call(null,g__27911__auto___30064);
});})(g__27911__auto___30064))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__27911__auto___30064){
return (function (seq30007){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30007));
});})(g__27911__auto___30064))
;


var g__27911__auto___30068 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__27911__auto___30068){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__27829__auto__ = [];
var len__27822__auto___30069 = arguments.length;
var i__27823__auto___30070 = (0);
while(true){
if((i__27823__auto___30070 < len__27822__auto___30069)){
args__27829__auto__.push((arguments[i__27823__auto___30070]));

var G__30071 = (i__27823__auto___30070 + (1));
i__27823__auto___30070 = G__30071;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});})(g__27911__auto___30068))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27911__auto___30068){
return (function (args){
return cljs.core.deref.call(null,g__27911__auto___30068);
});})(g__27911__auto___30068))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__27911__auto___30068){
return (function (seq30008){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30008));
});})(g__27911__auto___30068))
;


var g__27911__auto___30072 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__27911__auto___30072){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__27829__auto__ = [];
var len__27822__auto___30073 = arguments.length;
var i__27823__auto___30074 = (0);
while(true){
if((i__27823__auto___30074 < len__27822__auto___30073)){
args__27829__auto__.push((arguments[i__27823__auto___30074]));

var G__30075 = (i__27823__auto___30074 + (1));
i__27823__auto___30074 = G__30075;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});})(g__27911__auto___30072))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27911__auto___30072){
return (function (args){
return cljs.core.deref.call(null,g__27911__auto___30072);
});})(g__27911__auto___30072))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__27911__auto___30072){
return (function (seq30009){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30009));
});})(g__27911__auto___30072))
;


var g__27911__auto___30076 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__27911__auto___30076){
return (function cljs$spec$impl$gen$string(var_args){
var args__27829__auto__ = [];
var len__27822__auto___30077 = arguments.length;
var i__27823__auto___30078 = (0);
while(true){
if((i__27823__auto___30078 < len__27822__auto___30077)){
args__27829__auto__.push((arguments[i__27823__auto___30078]));

var G__30079 = (i__27823__auto___30078 + (1));
i__27823__auto___30078 = G__30079;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});})(g__27911__auto___30076))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27911__auto___30076){
return (function (args){
return cljs.core.deref.call(null,g__27911__auto___30076);
});})(g__27911__auto___30076))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__27911__auto___30076){
return (function (seq30010){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30010));
});})(g__27911__auto___30076))
;


var g__27911__auto___30080 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__27911__auto___30080){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__27829__auto__ = [];
var len__27822__auto___30081 = arguments.length;
var i__27823__auto___30082 = (0);
while(true){
if((i__27823__auto___30082 < len__27822__auto___30081)){
args__27829__auto__.push((arguments[i__27823__auto___30082]));

var G__30083 = (i__27823__auto___30082 + (1));
i__27823__auto___30082 = G__30083;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});})(g__27911__auto___30080))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27911__auto___30080){
return (function (args){
return cljs.core.deref.call(null,g__27911__auto___30080);
});})(g__27911__auto___30080))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__27911__auto___30080){
return (function (seq30011){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30011));
});})(g__27911__auto___30080))
;


var g__27911__auto___30084 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__27911__auto___30084){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__27829__auto__ = [];
var len__27822__auto___30085 = arguments.length;
var i__27823__auto___30086 = (0);
while(true){
if((i__27823__auto___30086 < len__27822__auto___30085)){
args__27829__auto__.push((arguments[i__27823__auto___30086]));

var G__30087 = (i__27823__auto___30086 + (1));
i__27823__auto___30086 = G__30087;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});})(g__27911__auto___30084))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27911__auto___30084){
return (function (args){
return cljs.core.deref.call(null,g__27911__auto___30084);
});})(g__27911__auto___30084))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__27911__auto___30084){
return (function (seq30012){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30012));
});})(g__27911__auto___30084))
;


var g__27911__auto___30088 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__27911__auto___30088){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__27829__auto__ = [];
var len__27822__auto___30089 = arguments.length;
var i__27823__auto___30090 = (0);
while(true){
if((i__27823__auto___30090 < len__27822__auto___30089)){
args__27829__auto__.push((arguments[i__27823__auto___30090]));

var G__30091 = (i__27823__auto___30090 + (1));
i__27823__auto___30090 = G__30091;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});})(g__27911__auto___30088))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27911__auto___30088){
return (function (args){
return cljs.core.deref.call(null,g__27911__auto___30088);
});})(g__27911__auto___30088))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__27911__auto___30088){
return (function (seq30013){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30013));
});})(g__27911__auto___30088))
;


var g__27911__auto___30092 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__27911__auto___30092){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__27829__auto__ = [];
var len__27822__auto___30093 = arguments.length;
var i__27823__auto___30094 = (0);
while(true){
if((i__27823__auto___30094 < len__27822__auto___30093)){
args__27829__auto__.push((arguments[i__27823__auto___30094]));

var G__30095 = (i__27823__auto___30094 + (1));
i__27823__auto___30094 = G__30095;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});})(g__27911__auto___30092))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27911__auto___30092){
return (function (args){
return cljs.core.deref.call(null,g__27911__auto___30092);
});})(g__27911__auto___30092))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__27911__auto___30092){
return (function (seq30014){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30014));
});})(g__27911__auto___30092))
;


var g__27911__auto___30096 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__27911__auto___30096){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__27829__auto__ = [];
var len__27822__auto___30097 = arguments.length;
var i__27823__auto___30098 = (0);
while(true){
if((i__27823__auto___30098 < len__27822__auto___30097)){
args__27829__auto__.push((arguments[i__27823__auto___30098]));

var G__30099 = (i__27823__auto___30098 + (1));
i__27823__auto___30098 = G__30099;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});})(g__27911__auto___30096))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__27911__auto___30096){
return (function (args){
return cljs.core.deref.call(null,g__27911__auto___30096);
});})(g__27911__auto___30096))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__27911__auto___30096){
return (function (seq30015){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30015));
});})(g__27911__auto___30096))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__27829__auto__ = [];
var len__27822__auto___30102 = arguments.length;
var i__27823__auto___30103 = (0);
while(true){
if((i__27823__auto___30103 < len__27822__auto___30102)){
args__27829__auto__.push((arguments[i__27823__auto___30103]));

var G__30104 = (i__27823__auto___30103 + (1));
i__27823__auto___30103 = G__30104;
continue;
} else {
}
break;
}

var argseq__27830__auto__ = ((((0) < args__27829__auto__.length))?(new cljs.core.IndexedSeq(args__27829__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__27830__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__30100_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__30100_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq30101){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30101));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__30105_SHARP_){
return (new Date(p1__30105_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map