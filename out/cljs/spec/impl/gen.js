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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__27609__auto__,writer__27610__auto__,opt__27611__auto__){
return cljs.core._write.call(null,writer__27610__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__28085__auto__ = [];
var len__28078__auto___30156 = arguments.length;
var i__28079__auto___30157 = (0);
while(true){
if((i__28079__auto___30157 < len__28078__auto___30156)){
args__28085__auto__.push((arguments[i__28079__auto___30157]));

var G__30158 = (i__28079__auto___30157 + (1));
i__28079__auto___30157 = G__30158;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq30155){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30155));
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
var args__28085__auto__ = [];
var len__28078__auto___30160 = arguments.length;
var i__28079__auto___30161 = (0);
while(true){
if((i__28079__auto___30161 < len__28078__auto___30160)){
args__28085__auto__.push((arguments[i__28079__auto___30161]));

var G__30162 = (i__28079__auto___30161 + (1));
i__28079__auto___30161 = G__30162;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq30159){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30159));
});

var g_QMARK__30163 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_30164 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__30163){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__30163))
,null));
var mkg_30165 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__30163,g_30164){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__30163,g_30164))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__30163,g_30164,mkg_30165){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__30163).call(null,x);
});})(g_QMARK__30163,g_30164,mkg_30165))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__30163,g_30164,mkg_30165){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_30165).call(null,gfn);
});})(g_QMARK__30163,g_30164,mkg_30165))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__30163,g_30164,mkg_30165){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_30164).call(null,generator);
});})(g_QMARK__30163,g_30164,mkg_30165))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__28154__auto___30183 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__28154__auto___30183){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__28085__auto__ = [];
var len__28078__auto___30184 = arguments.length;
var i__28079__auto___30185 = (0);
while(true){
if((i__28079__auto___30185 < len__28078__auto___30184)){
args__28085__auto__.push((arguments[i__28079__auto___30185]));

var G__30186 = (i__28079__auto___30185 + (1));
i__28079__auto___30185 = G__30186;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});})(g__28154__auto___30183))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28154__auto___30183){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28154__auto___30183),args);
});})(g__28154__auto___30183))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__28154__auto___30183){
return (function (seq30166){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30166));
});})(g__28154__auto___30183))
;


var g__28154__auto___30187 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__28154__auto___30187){
return (function cljs$spec$impl$gen$list(var_args){
var args__28085__auto__ = [];
var len__28078__auto___30188 = arguments.length;
var i__28079__auto___30189 = (0);
while(true){
if((i__28079__auto___30189 < len__28078__auto___30188)){
args__28085__auto__.push((arguments[i__28079__auto___30189]));

var G__30190 = (i__28079__auto___30189 + (1));
i__28079__auto___30189 = G__30190;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});})(g__28154__auto___30187))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28154__auto___30187){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28154__auto___30187),args);
});})(g__28154__auto___30187))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__28154__auto___30187){
return (function (seq30167){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30167));
});})(g__28154__auto___30187))
;


var g__28154__auto___30191 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__28154__auto___30191){
return (function cljs$spec$impl$gen$map(var_args){
var args__28085__auto__ = [];
var len__28078__auto___30192 = arguments.length;
var i__28079__auto___30193 = (0);
while(true){
if((i__28079__auto___30193 < len__28078__auto___30192)){
args__28085__auto__.push((arguments[i__28079__auto___30193]));

var G__30194 = (i__28079__auto___30193 + (1));
i__28079__auto___30193 = G__30194;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});})(g__28154__auto___30191))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28154__auto___30191){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28154__auto___30191),args);
});})(g__28154__auto___30191))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__28154__auto___30191){
return (function (seq30168){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30168));
});})(g__28154__auto___30191))
;


var g__28154__auto___30195 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__28154__auto___30195){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__28085__auto__ = [];
var len__28078__auto___30196 = arguments.length;
var i__28079__auto___30197 = (0);
while(true){
if((i__28079__auto___30197 < len__28078__auto___30196)){
args__28085__auto__.push((arguments[i__28079__auto___30197]));

var G__30198 = (i__28079__auto___30197 + (1));
i__28079__auto___30197 = G__30198;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});})(g__28154__auto___30195))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28154__auto___30195){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28154__auto___30195),args);
});})(g__28154__auto___30195))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__28154__auto___30195){
return (function (seq30169){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30169));
});})(g__28154__auto___30195))
;


var g__28154__auto___30199 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__28154__auto___30199){
return (function cljs$spec$impl$gen$set(var_args){
var args__28085__auto__ = [];
var len__28078__auto___30200 = arguments.length;
var i__28079__auto___30201 = (0);
while(true){
if((i__28079__auto___30201 < len__28078__auto___30200)){
args__28085__auto__.push((arguments[i__28079__auto___30201]));

var G__30202 = (i__28079__auto___30201 + (1));
i__28079__auto___30201 = G__30202;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});})(g__28154__auto___30199))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28154__auto___30199){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28154__auto___30199),args);
});})(g__28154__auto___30199))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__28154__auto___30199){
return (function (seq30170){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30170));
});})(g__28154__auto___30199))
;


var g__28154__auto___30203 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__28154__auto___30203){
return (function cljs$spec$impl$gen$vector(var_args){
var args__28085__auto__ = [];
var len__28078__auto___30204 = arguments.length;
var i__28079__auto___30205 = (0);
while(true){
if((i__28079__auto___30205 < len__28078__auto___30204)){
args__28085__auto__.push((arguments[i__28079__auto___30205]));

var G__30206 = (i__28079__auto___30205 + (1));
i__28079__auto___30205 = G__30206;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});})(g__28154__auto___30203))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28154__auto___30203){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28154__auto___30203),args);
});})(g__28154__auto___30203))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__28154__auto___30203){
return (function (seq30171){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30171));
});})(g__28154__auto___30203))
;


var g__28154__auto___30207 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__28154__auto___30207){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__28085__auto__ = [];
var len__28078__auto___30208 = arguments.length;
var i__28079__auto___30209 = (0);
while(true){
if((i__28079__auto___30209 < len__28078__auto___30208)){
args__28085__auto__.push((arguments[i__28079__auto___30209]));

var G__30210 = (i__28079__auto___30209 + (1));
i__28079__auto___30209 = G__30210;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});})(g__28154__auto___30207))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28154__auto___30207){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28154__auto___30207),args);
});})(g__28154__auto___30207))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__28154__auto___30207){
return (function (seq30172){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30172));
});})(g__28154__auto___30207))
;


var g__28154__auto___30211 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__28154__auto___30211){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__28085__auto__ = [];
var len__28078__auto___30212 = arguments.length;
var i__28079__auto___30213 = (0);
while(true){
if((i__28079__auto___30213 < len__28078__auto___30212)){
args__28085__auto__.push((arguments[i__28079__auto___30213]));

var G__30214 = (i__28079__auto___30213 + (1));
i__28079__auto___30213 = G__30214;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});})(g__28154__auto___30211))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28154__auto___30211){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28154__auto___30211),args);
});})(g__28154__auto___30211))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__28154__auto___30211){
return (function (seq30173){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30173));
});})(g__28154__auto___30211))
;


var g__28154__auto___30215 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__28154__auto___30215){
return (function cljs$spec$impl$gen$elements(var_args){
var args__28085__auto__ = [];
var len__28078__auto___30216 = arguments.length;
var i__28079__auto___30217 = (0);
while(true){
if((i__28079__auto___30217 < len__28078__auto___30216)){
args__28085__auto__.push((arguments[i__28079__auto___30217]));

var G__30218 = (i__28079__auto___30217 + (1));
i__28079__auto___30217 = G__30218;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});})(g__28154__auto___30215))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28154__auto___30215){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28154__auto___30215),args);
});})(g__28154__auto___30215))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__28154__auto___30215){
return (function (seq30174){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30174));
});})(g__28154__auto___30215))
;


var g__28154__auto___30219 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__28154__auto___30219){
return (function cljs$spec$impl$gen$bind(var_args){
var args__28085__auto__ = [];
var len__28078__auto___30220 = arguments.length;
var i__28079__auto___30221 = (0);
while(true){
if((i__28079__auto___30221 < len__28078__auto___30220)){
args__28085__auto__.push((arguments[i__28079__auto___30221]));

var G__30222 = (i__28079__auto___30221 + (1));
i__28079__auto___30221 = G__30222;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});})(g__28154__auto___30219))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28154__auto___30219){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28154__auto___30219),args);
});})(g__28154__auto___30219))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__28154__auto___30219){
return (function (seq30175){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30175));
});})(g__28154__auto___30219))
;


var g__28154__auto___30223 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__28154__auto___30223){
return (function cljs$spec$impl$gen$choose(var_args){
var args__28085__auto__ = [];
var len__28078__auto___30224 = arguments.length;
var i__28079__auto___30225 = (0);
while(true){
if((i__28079__auto___30225 < len__28078__auto___30224)){
args__28085__auto__.push((arguments[i__28079__auto___30225]));

var G__30226 = (i__28079__auto___30225 + (1));
i__28079__auto___30225 = G__30226;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});})(g__28154__auto___30223))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28154__auto___30223){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28154__auto___30223),args);
});})(g__28154__auto___30223))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__28154__auto___30223){
return (function (seq30176){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30176));
});})(g__28154__auto___30223))
;


var g__28154__auto___30227 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__28154__auto___30227){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__28085__auto__ = [];
var len__28078__auto___30228 = arguments.length;
var i__28079__auto___30229 = (0);
while(true){
if((i__28079__auto___30229 < len__28078__auto___30228)){
args__28085__auto__.push((arguments[i__28079__auto___30229]));

var G__30230 = (i__28079__auto___30229 + (1));
i__28079__auto___30229 = G__30230;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});})(g__28154__auto___30227))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28154__auto___30227){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28154__auto___30227),args);
});})(g__28154__auto___30227))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__28154__auto___30227){
return (function (seq30177){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30177));
});})(g__28154__auto___30227))
;


var g__28154__auto___30231 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__28154__auto___30231){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__28085__auto__ = [];
var len__28078__auto___30232 = arguments.length;
var i__28079__auto___30233 = (0);
while(true){
if((i__28079__auto___30233 < len__28078__auto___30232)){
args__28085__auto__.push((arguments[i__28079__auto___30233]));

var G__30234 = (i__28079__auto___30233 + (1));
i__28079__auto___30233 = G__30234;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});})(g__28154__auto___30231))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28154__auto___30231){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28154__auto___30231),args);
});})(g__28154__auto___30231))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__28154__auto___30231){
return (function (seq30178){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30178));
});})(g__28154__auto___30231))
;


var g__28154__auto___30235 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__28154__auto___30235){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__28085__auto__ = [];
var len__28078__auto___30236 = arguments.length;
var i__28079__auto___30237 = (0);
while(true){
if((i__28079__auto___30237 < len__28078__auto___30236)){
args__28085__auto__.push((arguments[i__28079__auto___30237]));

var G__30238 = (i__28079__auto___30237 + (1));
i__28079__auto___30237 = G__30238;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});})(g__28154__auto___30235))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28154__auto___30235){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28154__auto___30235),args);
});})(g__28154__auto___30235))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__28154__auto___30235){
return (function (seq30179){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30179));
});})(g__28154__auto___30235))
;


var g__28154__auto___30239 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__28154__auto___30239){
return (function cljs$spec$impl$gen$sample(var_args){
var args__28085__auto__ = [];
var len__28078__auto___30240 = arguments.length;
var i__28079__auto___30241 = (0);
while(true){
if((i__28079__auto___30241 < len__28078__auto___30240)){
args__28085__auto__.push((arguments[i__28079__auto___30241]));

var G__30242 = (i__28079__auto___30241 + (1));
i__28079__auto___30241 = G__30242;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});})(g__28154__auto___30239))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28154__auto___30239){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28154__auto___30239),args);
});})(g__28154__auto___30239))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__28154__auto___30239){
return (function (seq30180){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30180));
});})(g__28154__auto___30239))
;


var g__28154__auto___30243 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__28154__auto___30243){
return (function cljs$spec$impl$gen$return(var_args){
var args__28085__auto__ = [];
var len__28078__auto___30244 = arguments.length;
var i__28079__auto___30245 = (0);
while(true){
if((i__28079__auto___30245 < len__28078__auto___30244)){
args__28085__auto__.push((arguments[i__28079__auto___30245]));

var G__30246 = (i__28079__auto___30245 + (1));
i__28079__auto___30245 = G__30246;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});})(g__28154__auto___30243))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28154__auto___30243){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28154__auto___30243),args);
});})(g__28154__auto___30243))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__28154__auto___30243){
return (function (seq30181){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30181));
});})(g__28154__auto___30243))
;


var g__28154__auto___30247 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__28154__auto___30247){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__28085__auto__ = [];
var len__28078__auto___30248 = arguments.length;
var i__28079__auto___30249 = (0);
while(true){
if((i__28079__auto___30249 < len__28078__auto___30248)){
args__28085__auto__.push((arguments[i__28079__auto___30249]));

var G__30250 = (i__28079__auto___30249 + (1));
i__28079__auto___30249 = G__30250;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});})(g__28154__auto___30247))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28154__auto___30247){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__28154__auto___30247),args);
});})(g__28154__auto___30247))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__28154__auto___30247){
return (function (seq30182){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30182));
});})(g__28154__auto___30247))
;

var g__28167__auto___30272 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__28167__auto___30272){
return (function cljs$spec$impl$gen$any(var_args){
var args__28085__auto__ = [];
var len__28078__auto___30273 = arguments.length;
var i__28079__auto___30274 = (0);
while(true){
if((i__28079__auto___30274 < len__28078__auto___30273)){
args__28085__auto__.push((arguments[i__28079__auto___30274]));

var G__30275 = (i__28079__auto___30274 + (1));
i__28079__auto___30274 = G__30275;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});})(g__28167__auto___30272))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28167__auto___30272){
return (function (args){
return cljs.core.deref.call(null,g__28167__auto___30272);
});})(g__28167__auto___30272))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__28167__auto___30272){
return (function (seq30251){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30251));
});})(g__28167__auto___30272))
;


var g__28167__auto___30276 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__28167__auto___30276){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__28085__auto__ = [];
var len__28078__auto___30277 = arguments.length;
var i__28079__auto___30278 = (0);
while(true){
if((i__28079__auto___30278 < len__28078__auto___30277)){
args__28085__auto__.push((arguments[i__28079__auto___30278]));

var G__30279 = (i__28079__auto___30278 + (1));
i__28079__auto___30278 = G__30279;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});})(g__28167__auto___30276))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28167__auto___30276){
return (function (args){
return cljs.core.deref.call(null,g__28167__auto___30276);
});})(g__28167__auto___30276))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__28167__auto___30276){
return (function (seq30252){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30252));
});})(g__28167__auto___30276))
;


var g__28167__auto___30280 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__28167__auto___30280){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__28085__auto__ = [];
var len__28078__auto___30281 = arguments.length;
var i__28079__auto___30282 = (0);
while(true){
if((i__28079__auto___30282 < len__28078__auto___30281)){
args__28085__auto__.push((arguments[i__28079__auto___30282]));

var G__30283 = (i__28079__auto___30282 + (1));
i__28079__auto___30282 = G__30283;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});})(g__28167__auto___30280))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28167__auto___30280){
return (function (args){
return cljs.core.deref.call(null,g__28167__auto___30280);
});})(g__28167__auto___30280))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__28167__auto___30280){
return (function (seq30253){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30253));
});})(g__28167__auto___30280))
;


var g__28167__auto___30284 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__28167__auto___30284){
return (function cljs$spec$impl$gen$char(var_args){
var args__28085__auto__ = [];
var len__28078__auto___30285 = arguments.length;
var i__28079__auto___30286 = (0);
while(true){
if((i__28079__auto___30286 < len__28078__auto___30285)){
args__28085__auto__.push((arguments[i__28079__auto___30286]));

var G__30287 = (i__28079__auto___30286 + (1));
i__28079__auto___30286 = G__30287;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});})(g__28167__auto___30284))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28167__auto___30284){
return (function (args){
return cljs.core.deref.call(null,g__28167__auto___30284);
});})(g__28167__auto___30284))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__28167__auto___30284){
return (function (seq30254){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30254));
});})(g__28167__auto___30284))
;


var g__28167__auto___30288 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__28167__auto___30288){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__28085__auto__ = [];
var len__28078__auto___30289 = arguments.length;
var i__28079__auto___30290 = (0);
while(true){
if((i__28079__auto___30290 < len__28078__auto___30289)){
args__28085__auto__.push((arguments[i__28079__auto___30290]));

var G__30291 = (i__28079__auto___30290 + (1));
i__28079__auto___30290 = G__30291;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});})(g__28167__auto___30288))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28167__auto___30288){
return (function (args){
return cljs.core.deref.call(null,g__28167__auto___30288);
});})(g__28167__auto___30288))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__28167__auto___30288){
return (function (seq30255){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30255));
});})(g__28167__auto___30288))
;


var g__28167__auto___30292 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__28167__auto___30292){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__28085__auto__ = [];
var len__28078__auto___30293 = arguments.length;
var i__28079__auto___30294 = (0);
while(true){
if((i__28079__auto___30294 < len__28078__auto___30293)){
args__28085__auto__.push((arguments[i__28079__auto___30294]));

var G__30295 = (i__28079__auto___30294 + (1));
i__28079__auto___30294 = G__30295;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});})(g__28167__auto___30292))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28167__auto___30292){
return (function (args){
return cljs.core.deref.call(null,g__28167__auto___30292);
});})(g__28167__auto___30292))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__28167__auto___30292){
return (function (seq30256){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30256));
});})(g__28167__auto___30292))
;


var g__28167__auto___30296 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__28167__auto___30296){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__28085__auto__ = [];
var len__28078__auto___30297 = arguments.length;
var i__28079__auto___30298 = (0);
while(true){
if((i__28079__auto___30298 < len__28078__auto___30297)){
args__28085__auto__.push((arguments[i__28079__auto___30298]));

var G__30299 = (i__28079__auto___30298 + (1));
i__28079__auto___30298 = G__30299;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});})(g__28167__auto___30296))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28167__auto___30296){
return (function (args){
return cljs.core.deref.call(null,g__28167__auto___30296);
});})(g__28167__auto___30296))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__28167__auto___30296){
return (function (seq30257){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30257));
});})(g__28167__auto___30296))
;


var g__28167__auto___30300 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__28167__auto___30300){
return (function cljs$spec$impl$gen$double(var_args){
var args__28085__auto__ = [];
var len__28078__auto___30301 = arguments.length;
var i__28079__auto___30302 = (0);
while(true){
if((i__28079__auto___30302 < len__28078__auto___30301)){
args__28085__auto__.push((arguments[i__28079__auto___30302]));

var G__30303 = (i__28079__auto___30302 + (1));
i__28079__auto___30302 = G__30303;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});})(g__28167__auto___30300))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28167__auto___30300){
return (function (args){
return cljs.core.deref.call(null,g__28167__auto___30300);
});})(g__28167__auto___30300))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__28167__auto___30300){
return (function (seq30258){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30258));
});})(g__28167__auto___30300))
;


var g__28167__auto___30304 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__28167__auto___30304){
return (function cljs$spec$impl$gen$int(var_args){
var args__28085__auto__ = [];
var len__28078__auto___30305 = arguments.length;
var i__28079__auto___30306 = (0);
while(true){
if((i__28079__auto___30306 < len__28078__auto___30305)){
args__28085__auto__.push((arguments[i__28079__auto___30306]));

var G__30307 = (i__28079__auto___30306 + (1));
i__28079__auto___30306 = G__30307;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});})(g__28167__auto___30304))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28167__auto___30304){
return (function (args){
return cljs.core.deref.call(null,g__28167__auto___30304);
});})(g__28167__auto___30304))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__28167__auto___30304){
return (function (seq30259){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30259));
});})(g__28167__auto___30304))
;


var g__28167__auto___30308 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__28167__auto___30308){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__28085__auto__ = [];
var len__28078__auto___30309 = arguments.length;
var i__28079__auto___30310 = (0);
while(true){
if((i__28079__auto___30310 < len__28078__auto___30309)){
args__28085__auto__.push((arguments[i__28079__auto___30310]));

var G__30311 = (i__28079__auto___30310 + (1));
i__28079__auto___30310 = G__30311;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});})(g__28167__auto___30308))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28167__auto___30308){
return (function (args){
return cljs.core.deref.call(null,g__28167__auto___30308);
});})(g__28167__auto___30308))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__28167__auto___30308){
return (function (seq30260){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30260));
});})(g__28167__auto___30308))
;


var g__28167__auto___30312 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__28167__auto___30312){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__28085__auto__ = [];
var len__28078__auto___30313 = arguments.length;
var i__28079__auto___30314 = (0);
while(true){
if((i__28079__auto___30314 < len__28078__auto___30313)){
args__28085__auto__.push((arguments[i__28079__auto___30314]));

var G__30315 = (i__28079__auto___30314 + (1));
i__28079__auto___30314 = G__30315;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});})(g__28167__auto___30312))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28167__auto___30312){
return (function (args){
return cljs.core.deref.call(null,g__28167__auto___30312);
});})(g__28167__auto___30312))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__28167__auto___30312){
return (function (seq30261){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30261));
});})(g__28167__auto___30312))
;


var g__28167__auto___30316 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__28167__auto___30316){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__28085__auto__ = [];
var len__28078__auto___30317 = arguments.length;
var i__28079__auto___30318 = (0);
while(true){
if((i__28079__auto___30318 < len__28078__auto___30317)){
args__28085__auto__.push((arguments[i__28079__auto___30318]));

var G__30319 = (i__28079__auto___30318 + (1));
i__28079__auto___30318 = G__30319;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});})(g__28167__auto___30316))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28167__auto___30316){
return (function (args){
return cljs.core.deref.call(null,g__28167__auto___30316);
});})(g__28167__auto___30316))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__28167__auto___30316){
return (function (seq30262){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30262));
});})(g__28167__auto___30316))
;


var g__28167__auto___30320 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__28167__auto___30320){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__28085__auto__ = [];
var len__28078__auto___30321 = arguments.length;
var i__28079__auto___30322 = (0);
while(true){
if((i__28079__auto___30322 < len__28078__auto___30321)){
args__28085__auto__.push((arguments[i__28079__auto___30322]));

var G__30323 = (i__28079__auto___30322 + (1));
i__28079__auto___30322 = G__30323;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});})(g__28167__auto___30320))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28167__auto___30320){
return (function (args){
return cljs.core.deref.call(null,g__28167__auto___30320);
});})(g__28167__auto___30320))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__28167__auto___30320){
return (function (seq30263){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30263));
});})(g__28167__auto___30320))
;


var g__28167__auto___30324 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__28167__auto___30324){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__28085__auto__ = [];
var len__28078__auto___30325 = arguments.length;
var i__28079__auto___30326 = (0);
while(true){
if((i__28079__auto___30326 < len__28078__auto___30325)){
args__28085__auto__.push((arguments[i__28079__auto___30326]));

var G__30327 = (i__28079__auto___30326 + (1));
i__28079__auto___30326 = G__30327;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});})(g__28167__auto___30324))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28167__auto___30324){
return (function (args){
return cljs.core.deref.call(null,g__28167__auto___30324);
});})(g__28167__auto___30324))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__28167__auto___30324){
return (function (seq30264){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30264));
});})(g__28167__auto___30324))
;


var g__28167__auto___30328 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__28167__auto___30328){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__28085__auto__ = [];
var len__28078__auto___30329 = arguments.length;
var i__28079__auto___30330 = (0);
while(true){
if((i__28079__auto___30330 < len__28078__auto___30329)){
args__28085__auto__.push((arguments[i__28079__auto___30330]));

var G__30331 = (i__28079__auto___30330 + (1));
i__28079__auto___30330 = G__30331;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});})(g__28167__auto___30328))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28167__auto___30328){
return (function (args){
return cljs.core.deref.call(null,g__28167__auto___30328);
});})(g__28167__auto___30328))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__28167__auto___30328){
return (function (seq30265){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30265));
});})(g__28167__auto___30328))
;


var g__28167__auto___30332 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__28167__auto___30332){
return (function cljs$spec$impl$gen$string(var_args){
var args__28085__auto__ = [];
var len__28078__auto___30333 = arguments.length;
var i__28079__auto___30334 = (0);
while(true){
if((i__28079__auto___30334 < len__28078__auto___30333)){
args__28085__auto__.push((arguments[i__28079__auto___30334]));

var G__30335 = (i__28079__auto___30334 + (1));
i__28079__auto___30334 = G__30335;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});})(g__28167__auto___30332))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28167__auto___30332){
return (function (args){
return cljs.core.deref.call(null,g__28167__auto___30332);
});})(g__28167__auto___30332))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__28167__auto___30332){
return (function (seq30266){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30266));
});})(g__28167__auto___30332))
;


var g__28167__auto___30336 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__28167__auto___30336){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__28085__auto__ = [];
var len__28078__auto___30337 = arguments.length;
var i__28079__auto___30338 = (0);
while(true){
if((i__28079__auto___30338 < len__28078__auto___30337)){
args__28085__auto__.push((arguments[i__28079__auto___30338]));

var G__30339 = (i__28079__auto___30338 + (1));
i__28079__auto___30338 = G__30339;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});})(g__28167__auto___30336))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28167__auto___30336){
return (function (args){
return cljs.core.deref.call(null,g__28167__auto___30336);
});})(g__28167__auto___30336))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__28167__auto___30336){
return (function (seq30267){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30267));
});})(g__28167__auto___30336))
;


var g__28167__auto___30340 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__28167__auto___30340){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__28085__auto__ = [];
var len__28078__auto___30341 = arguments.length;
var i__28079__auto___30342 = (0);
while(true){
if((i__28079__auto___30342 < len__28078__auto___30341)){
args__28085__auto__.push((arguments[i__28079__auto___30342]));

var G__30343 = (i__28079__auto___30342 + (1));
i__28079__auto___30342 = G__30343;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});})(g__28167__auto___30340))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28167__auto___30340){
return (function (args){
return cljs.core.deref.call(null,g__28167__auto___30340);
});})(g__28167__auto___30340))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__28167__auto___30340){
return (function (seq30268){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30268));
});})(g__28167__auto___30340))
;


var g__28167__auto___30344 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__28167__auto___30344){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__28085__auto__ = [];
var len__28078__auto___30345 = arguments.length;
var i__28079__auto___30346 = (0);
while(true){
if((i__28079__auto___30346 < len__28078__auto___30345)){
args__28085__auto__.push((arguments[i__28079__auto___30346]));

var G__30347 = (i__28079__auto___30346 + (1));
i__28079__auto___30346 = G__30347;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});})(g__28167__auto___30344))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28167__auto___30344){
return (function (args){
return cljs.core.deref.call(null,g__28167__auto___30344);
});})(g__28167__auto___30344))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__28167__auto___30344){
return (function (seq30269){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30269));
});})(g__28167__auto___30344))
;


var g__28167__auto___30348 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__28167__auto___30348){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__28085__auto__ = [];
var len__28078__auto___30349 = arguments.length;
var i__28079__auto___30350 = (0);
while(true){
if((i__28079__auto___30350 < len__28078__auto___30349)){
args__28085__auto__.push((arguments[i__28079__auto___30350]));

var G__30351 = (i__28079__auto___30350 + (1));
i__28079__auto___30350 = G__30351;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});})(g__28167__auto___30348))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28167__auto___30348){
return (function (args){
return cljs.core.deref.call(null,g__28167__auto___30348);
});})(g__28167__auto___30348))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__28167__auto___30348){
return (function (seq30270){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30270));
});})(g__28167__auto___30348))
;


var g__28167__auto___30352 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__28167__auto___30352){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__28085__auto__ = [];
var len__28078__auto___30353 = arguments.length;
var i__28079__auto___30354 = (0);
while(true){
if((i__28079__auto___30354 < len__28078__auto___30353)){
args__28085__auto__.push((arguments[i__28079__auto___30354]));

var G__30355 = (i__28079__auto___30354 + (1));
i__28079__auto___30354 = G__30355;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});})(g__28167__auto___30352))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__28167__auto___30352){
return (function (args){
return cljs.core.deref.call(null,g__28167__auto___30352);
});})(g__28167__auto___30352))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__28167__auto___30352){
return (function (seq30271){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30271));
});})(g__28167__auto___30352))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__28085__auto__ = [];
var len__28078__auto___30358 = arguments.length;
var i__28079__auto___30359 = (0);
while(true){
if((i__28079__auto___30359 < len__28078__auto___30358)){
args__28085__auto__.push((arguments[i__28079__auto___30359]));

var G__30360 = (i__28079__auto___30359 + (1));
i__28079__auto___30359 = G__30360;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__30356_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__30356_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq30357){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30357));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__30361_SHARP_){
return (new Date(p1__30361_SHARP_));
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