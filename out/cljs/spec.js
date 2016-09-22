// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.spec');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.walk');
goog.require('cljs.spec.impl.gen');
goog.require('clojure.string');
cljs.spec.MAX_INT = (9007199254740991);
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_check_limit_STAR_ = (101);
/**
 * The number of errors reported by explain in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_error_limit_STAR_ = (20);
/**
 * if false, instrumented fns call straight through
 */
cljs.spec._STAR_instrument_enabled_STAR_ = true;

/**
 * @interface
 */
cljs.spec.Spec = function(){};

cljs.spec.conform_STAR_ = (function cljs$spec$conform_STAR_(spec,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$conform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$conform_STAR_$arity$2(spec,x);
} else {
var x__27666__auto__ = (((spec == null))?null:spec);
var m__27667__auto__ = (cljs.spec.conform_STAR_[goog.typeOf(x__27666__auto__)]);
if(!((m__27667__auto__ == null))){
return m__27667__auto__.call(null,spec,x);
} else {
var m__27667__auto____$1 = (cljs.spec.conform_STAR_["_"]);
if(!((m__27667__auto____$1 == null))){
return m__27667__auto____$1.call(null,spec,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.conform*",spec);
}
}
}
});

cljs.spec.unform_STAR_ = (function cljs$spec$unform_STAR_(spec,y){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$unform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$unform_STAR_$arity$2(spec,y);
} else {
var x__27666__auto__ = (((spec == null))?null:spec);
var m__27667__auto__ = (cljs.spec.unform_STAR_[goog.typeOf(x__27666__auto__)]);
if(!((m__27667__auto__ == null))){
return m__27667__auto__.call(null,spec,y);
} else {
var m__27667__auto____$1 = (cljs.spec.unform_STAR_["_"]);
if(!((m__27667__auto____$1 == null))){
return m__27667__auto____$1.call(null,spec,y);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.unform*",spec);
}
}
}
});

cljs.spec.explain_STAR_ = (function cljs$spec$explain_STAR_(spec,path,via,in$,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$explain_STAR_$arity$5 == null)))){
return spec.cljs$spec$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
var x__27666__auto__ = (((spec == null))?null:spec);
var m__27667__auto__ = (cljs.spec.explain_STAR_[goog.typeOf(x__27666__auto__)]);
if(!((m__27667__auto__ == null))){
return m__27667__auto__.call(null,spec,path,via,in$,x);
} else {
var m__27667__auto____$1 = (cljs.spec.explain_STAR_["_"]);
if(!((m__27667__auto____$1 == null))){
return m__27667__auto____$1.call(null,spec,path,via,in$,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.explain*",spec);
}
}
}
});

cljs.spec.gen_STAR_ = (function cljs$spec$gen_STAR_(spec,overrides,path,rmap){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$gen_STAR_$arity$4 == null)))){
return spec.cljs$spec$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
var x__27666__auto__ = (((spec == null))?null:spec);
var m__27667__auto__ = (cljs.spec.gen_STAR_[goog.typeOf(x__27666__auto__)]);
if(!((m__27667__auto__ == null))){
return m__27667__auto__.call(null,spec,overrides,path,rmap);
} else {
var m__27667__auto____$1 = (cljs.spec.gen_STAR_["_"]);
if(!((m__27667__auto____$1 == null))){
return m__27667__auto____$1.call(null,spec,overrides,path,rmap);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.gen*",spec);
}
}
}
});

cljs.spec.with_gen_STAR_ = (function cljs$spec$with_gen_STAR_(spec,gfn){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$with_gen_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
var x__27666__auto__ = (((spec == null))?null:spec);
var m__27667__auto__ = (cljs.spec.with_gen_STAR_[goog.typeOf(x__27666__auto__)]);
if(!((m__27667__auto__ == null))){
return m__27667__auto__.call(null,spec,gfn);
} else {
var m__27667__auto____$1 = (cljs.spec.with_gen_STAR_["_"]);
if(!((m__27667__auto____$1 == null))){
return m__27667__auto____$1.call(null,spec,gfn);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.with-gen*",spec);
}
}
}
});

cljs.spec.describe_STAR_ = (function cljs$spec$describe_STAR_(spec){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$describe_STAR_$arity$1 == null)))){
return spec.cljs$spec$Spec$describe_STAR_$arity$1(spec);
} else {
var x__27666__auto__ = (((spec == null))?null:spec);
var m__27667__auto__ = (cljs.spec.describe_STAR_[goog.typeOf(x__27666__auto__)]);
if(!((m__27667__auto__ == null))){
return m__27667__auto__.call(null,spec);
} else {
var m__27667__auto____$1 = (cljs.spec.describe_STAR_["_"]);
if(!((m__27667__auto____$1 == null))){
return m__27667__auto____$1.call(null,spec);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.describe*",spec);
}
}
}
});

if(typeof cljs.spec.registry_ref !== 'undefined'){
} else {
cljs.spec.registry_ref = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.named_QMARK_ = (function cljs$spec$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || (x.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.spec.with_name = (function cljs$spec$with_name(spec,name){
return cljs.core.with_meta.call(null,spec,cljs.core.assoc.call(null,cljs.core.meta.call(null,spec),new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006),name));
});
cljs.spec.spec_name = (function cljs$spec$spec_name(spec){
if((spec instanceof cljs.core.Keyword)){
return spec;
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || (spec.cljs$core$IMeta$))?true:false):false)){
return new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,spec));
} else {
return null;
}
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not Named
 */
cljs.spec.reg_resolve = (function cljs$spec$reg_resolve(k){
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,k))){
var reg = cljs.core.deref.call(null,cljs.spec.registry_ref);
var spec = k;
while(true){
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,spec))){
var G__29295 = cljs.core.get.call(null,reg,spec);
spec = G__29295;
continue;
} else {
if(cljs.core.truth_(spec)){
return cljs.spec.with_name.call(null,spec,k);
} else {
return null;
}
}
break;
}
} else {
return k;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, throws if not found, k if k not ident
 */
cljs.spec.reg_resolve_BANG_ = (function cljs$spec$reg_resolve_BANG_(k){
if(cljs.core.ident_QMARK_.call(null,k)){
var or__27003__auto__ = cljs.spec.reg_resolve.call(null,k);
if(cljs.core.truth_(or__27003__auto__)){
return or__27003__auto__;
} else {
throw (new Error([cljs.core.str("Unable to resolve spec: "),cljs.core.str(k)].join('')));
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.spec_QMARK_ = (function cljs$spec$spec_QMARK_(x){
var and__26991__auto__ = ((!((x == null)))?(((false) || (x.cljs$spec$Spec$))?true:false):false);
if(and__26991__auto__){
return x;
} else {
return and__26991__auto__;
}
});
/**
 * returns x if x is a (clojure.spec) regex op, else logical false
 */
cljs.spec.regex_QMARK_ = (function cljs$spec$regex_QMARK_(x){
var and__26991__auto__ = new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__26991__auto__)){
return x;
} else {
return and__26991__auto__;
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.maybe_spec = (function cljs$spec$maybe_spec(spec_or_k){
var s = (function (){var or__27003__auto__ = cljs.spec.spec_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__27003__auto__)){
return or__27003__auto__;
} else {
var or__27003__auto____$1 = cljs.spec.regex_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__27003__auto____$1)){
return or__27003__auto____$1;
} else {
var or__27003__auto____$2 = (function (){var and__26991__auto__ = cljs.spec.named_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(and__26991__auto__)){
return cljs.spec.reg_resolve.call(null,spec_or_k);
} else {
return and__26991__auto__;
}
})();
if(cljs.core.truth_(or__27003__auto____$2)){
return or__27003__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,s))){
return cljs.spec.with_name.call(null,cljs.spec.regex_spec_impl.call(null,s,null),cljs.spec.spec_name.call(null,s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.the_spec = (function cljs$spec$the_spec(spec_or_k){
var or__27003__auto__ = cljs.spec.maybe_spec.call(null,spec_or_k);
if(cljs.core.truth_(or__27003__auto__)){
return or__27003__auto__;
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,spec_or_k))){
throw (new Error([cljs.core.str("Unable to resolve spec: "),cljs.core.str(spec_or_k)].join('')));
} else {
return null;
}
}
});
cljs.spec.specize = (function cljs$spec$specize(s){
var or__27003__auto__ = cljs.spec.the_spec.call(null,s);
if(cljs.core.truth_(or__27003__auto__)){
return or__27003__auto__;
} else {
return cljs.spec.spec_impl.call(null,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582),s,null,null);
}
});
/**
 * Given a spec and a value, returns :clojure.spec/invalid if value does not match spec,
 *   else the (possibly destructured) value.
 */
cljs.spec.conform = (function cljs$spec$conform(spec,x){
return cljs.spec.conform_STAR_.call(null,cljs.spec.specize.call(null,spec),x);
});
/**
 * Given a spec and a value created by or compliant with a call to
 *   'conform' with the same spec, returns a value with all conform
 * destructuring undone.
 */
cljs.spec.unform = (function cljs$spec$unform(spec,x){
return cljs.spec.unform_STAR_.call(null,cljs.spec.specize.call(null,spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.form = (function cljs$spec$form(spec){
return cljs.spec.describe_STAR_.call(null,cljs.spec.specize.call(null,spec));
});
cljs.spec.abbrev = (function cljs$spec$abbrev(form){
if(cljs.core.seq_QMARK_.call(null,form)){
return clojure.walk.postwalk.call(null,(function (form__$1){
if(cljs.core.truth_((function (){var and__26991__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__26991__auto__){
return cljs.core.namespace.call(null,form__$1);
} else {
return and__26991__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form__$1));
} else {
if((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.first.call(null,form__$1))) && (cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.second.call(null,form__$1)))){
return cljs.core.last.call(null,form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__26991__auto__ = (form instanceof cljs.core.Symbol);
if(and__26991__auto__){
return cljs.core.namespace.call(null,form);
} else {
return and__26991__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.describe = (function cljs$spec$describe(spec){
return cljs.spec.abbrev.call(null,cljs.spec.form.call(null,spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.with_gen = (function cljs$spec$with_gen(spec,gen_fn){
return cljs.spec.with_gen_STAR_.call(null,cljs.spec.specize.call(null,spec),gen_fn);
});
cljs.spec.explain_data_STAR_ = (function cljs$spec$explain_data_STAR_(spec,path,via,in$,x){
var temp__4425__auto__ = cljs.spec.explain_STAR_.call(null,cljs.spec.specize.call(null,spec),path,via,in$,x);
if(cljs.core.truth_(temp__4425__auto__)){
var probs = temp__4425__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),probs], null);
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a path->problem-map, where problem-map has at least :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.explain_data = (function cljs$spec$explain_data(spec,x){
return cljs.spec.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__4423__auto__ = cljs.spec.spec_name.call(null,spec);
if(cljs.core.truth_(temp__4423__auto__)){
var name = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * prints an explanation to *out*.
 */
cljs.spec.explain_out = (function cljs$spec$explain_out(ed){
if(cljs.core.truth_(ed)){
return cljs.core.print.call(null,(function (){var sb__27989__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_29346_29392 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_29347_29393 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_29346_29392,_STAR_print_fn_STAR_29347_29393,sb__27989__auto__){
return (function (x__27990__auto__){
return sb__27989__auto__.append(x__27990__auto__);
});})(_STAR_print_newline_STAR_29346_29392,_STAR_print_fn_STAR_29347_29393,sb__27989__auto__))
;

try{var seq__29348_29394 = cljs.core.seq.call(null,new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678).cljs$core$IFn$_invoke$arity$1(ed));
var chunk__29349_29395 = null;
var count__29350_29396 = (0);
var i__29351_29397 = (0);
while(true){
if((i__29351_29397 < count__29350_29396)){
var vec__29352_29398 = cljs.core._nth.call(null,chunk__29349_29395,i__29351_29397);
var path_29399 = cljs.core.nth.call(null,vec__29352_29398,(0),null);
var map__29355_29400 = cljs.core.nth.call(null,vec__29352_29398,(1),null);
var map__29355_29401__$1 = ((((!((map__29355_29400 == null)))?((((map__29355_29400.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29355_29400.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29355_29400):map__29355_29400);
var prob_29402 = map__29355_29401__$1;
var pred_29403 = cljs.core.get.call(null,map__29355_29401__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_29404 = cljs.core.get.call(null,map__29355_29401__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_29405 = cljs.core.get.call(null,map__29355_29401__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_29406 = cljs.core.get.call(null,map__29355_29401__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_29407 = cljs.core.get.call(null,map__29355_29401__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_29407)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_29407),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_29404);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_29406)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_29406)));
}

if(cljs.core.empty_QMARK_.call(null,path_29399)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_29399));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,pred_29403);

if(cljs.core.truth_(reason_29405)){
cljs.core.print.call(null,", ",reason_29405);
} else {
}

var seq__29357_29408 = cljs.core.seq.call(null,prob_29402);
var chunk__29358_29409 = null;
var count__29359_29410 = (0);
var i__29360_29411 = (0);
while(true){
if((i__29360_29411 < count__29359_29410)){
var vec__29361_29412 = cljs.core._nth.call(null,chunk__29358_29409,i__29360_29411);
var k_29413 = cljs.core.nth.call(null,vec__29361_29412,(0),null);
var v_29414 = cljs.core.nth.call(null,vec__29361_29412,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_29413))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_29413)," ");

cljs.core.pr.call(null,v_29414);
}

var G__29415 = seq__29357_29408;
var G__29416 = chunk__29358_29409;
var G__29417 = count__29359_29410;
var G__29418 = (i__29360_29411 + (1));
seq__29357_29408 = G__29415;
chunk__29358_29409 = G__29416;
count__29359_29410 = G__29417;
i__29360_29411 = G__29418;
continue;
} else {
var temp__4425__auto___29419 = cljs.core.seq.call(null,seq__29357_29408);
if(temp__4425__auto___29419){
var seq__29357_29420__$1 = temp__4425__auto___29419;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29357_29420__$1)){
var c__27814__auto___29421 = cljs.core.chunk_first.call(null,seq__29357_29420__$1);
var G__29422 = cljs.core.chunk_rest.call(null,seq__29357_29420__$1);
var G__29423 = c__27814__auto___29421;
var G__29424 = cljs.core.count.call(null,c__27814__auto___29421);
var G__29425 = (0);
seq__29357_29408 = G__29422;
chunk__29358_29409 = G__29423;
count__29359_29410 = G__29424;
i__29360_29411 = G__29425;
continue;
} else {
var vec__29364_29426 = cljs.core.first.call(null,seq__29357_29420__$1);
var k_29427 = cljs.core.nth.call(null,vec__29364_29426,(0),null);
var v_29428 = cljs.core.nth.call(null,vec__29364_29426,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_29427))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_29427)," ");

cljs.core.pr.call(null,v_29428);
}

var G__29429 = cljs.core.next.call(null,seq__29357_29420__$1);
var G__29430 = null;
var G__29431 = (0);
var G__29432 = (0);
seq__29357_29408 = G__29429;
chunk__29358_29409 = G__29430;
count__29359_29410 = G__29431;
i__29360_29411 = G__29432;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__29433 = seq__29348_29394;
var G__29434 = chunk__29349_29395;
var G__29435 = count__29350_29396;
var G__29436 = (i__29351_29397 + (1));
seq__29348_29394 = G__29433;
chunk__29349_29395 = G__29434;
count__29350_29396 = G__29435;
i__29351_29397 = G__29436;
continue;
} else {
var temp__4425__auto___29437 = cljs.core.seq.call(null,seq__29348_29394);
if(temp__4425__auto___29437){
var seq__29348_29438__$1 = temp__4425__auto___29437;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29348_29438__$1)){
var c__27814__auto___29439 = cljs.core.chunk_first.call(null,seq__29348_29438__$1);
var G__29440 = cljs.core.chunk_rest.call(null,seq__29348_29438__$1);
var G__29441 = c__27814__auto___29439;
var G__29442 = cljs.core.count.call(null,c__27814__auto___29439);
var G__29443 = (0);
seq__29348_29394 = G__29440;
chunk__29349_29395 = G__29441;
count__29350_29396 = G__29442;
i__29351_29397 = G__29443;
continue;
} else {
var vec__29367_29444 = cljs.core.first.call(null,seq__29348_29438__$1);
var path_29445 = cljs.core.nth.call(null,vec__29367_29444,(0),null);
var map__29370_29446 = cljs.core.nth.call(null,vec__29367_29444,(1),null);
var map__29370_29447__$1 = ((((!((map__29370_29446 == null)))?((((map__29370_29446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29370_29446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29370_29446):map__29370_29446);
var prob_29448 = map__29370_29447__$1;
var pred_29449 = cljs.core.get.call(null,map__29370_29447__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_29450 = cljs.core.get.call(null,map__29370_29447__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_29451 = cljs.core.get.call(null,map__29370_29447__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_29452 = cljs.core.get.call(null,map__29370_29447__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_29453 = cljs.core.get.call(null,map__29370_29447__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_29453)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_29453),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_29450);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_29452)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_29452)));
}

if(cljs.core.empty_QMARK_.call(null,path_29445)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_29445));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,pred_29449);

if(cljs.core.truth_(reason_29451)){
cljs.core.print.call(null,", ",reason_29451);
} else {
}

var seq__29372_29454 = cljs.core.seq.call(null,prob_29448);
var chunk__29373_29455 = null;
var count__29374_29456 = (0);
var i__29375_29457 = (0);
while(true){
if((i__29375_29457 < count__29374_29456)){
var vec__29376_29458 = cljs.core._nth.call(null,chunk__29373_29455,i__29375_29457);
var k_29459 = cljs.core.nth.call(null,vec__29376_29458,(0),null);
var v_29460 = cljs.core.nth.call(null,vec__29376_29458,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_29459))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_29459)," ");

cljs.core.pr.call(null,v_29460);
}

var G__29461 = seq__29372_29454;
var G__29462 = chunk__29373_29455;
var G__29463 = count__29374_29456;
var G__29464 = (i__29375_29457 + (1));
seq__29372_29454 = G__29461;
chunk__29373_29455 = G__29462;
count__29374_29456 = G__29463;
i__29375_29457 = G__29464;
continue;
} else {
var temp__4425__auto___29465__$1 = cljs.core.seq.call(null,seq__29372_29454);
if(temp__4425__auto___29465__$1){
var seq__29372_29466__$1 = temp__4425__auto___29465__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29372_29466__$1)){
var c__27814__auto___29467 = cljs.core.chunk_first.call(null,seq__29372_29466__$1);
var G__29468 = cljs.core.chunk_rest.call(null,seq__29372_29466__$1);
var G__29469 = c__27814__auto___29467;
var G__29470 = cljs.core.count.call(null,c__27814__auto___29467);
var G__29471 = (0);
seq__29372_29454 = G__29468;
chunk__29373_29455 = G__29469;
count__29374_29456 = G__29470;
i__29375_29457 = G__29471;
continue;
} else {
var vec__29379_29472 = cljs.core.first.call(null,seq__29372_29466__$1);
var k_29473 = cljs.core.nth.call(null,vec__29379_29472,(0),null);
var v_29474 = cljs.core.nth.call(null,vec__29379_29472,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_29473))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_29473)," ");

cljs.core.pr.call(null,v_29474);
}

var G__29475 = cljs.core.next.call(null,seq__29372_29466__$1);
var G__29476 = null;
var G__29477 = (0);
var G__29478 = (0);
seq__29372_29454 = G__29475;
chunk__29373_29455 = G__29476;
count__29374_29456 = G__29477;
i__29375_29457 = G__29478;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__29479 = cljs.core.next.call(null,seq__29348_29438__$1);
var G__29480 = null;
var G__29481 = (0);
var G__29482 = (0);
seq__29348_29394 = G__29479;
chunk__29349_29395 = G__29480;
count__29350_29396 = G__29481;
i__29351_29397 = G__29482;
continue;
}
} else {
}
}
break;
}

var seq__29382_29483 = cljs.core.seq.call(null,ed);
var chunk__29383_29484 = null;
var count__29384_29485 = (0);
var i__29385_29486 = (0);
while(true){
if((i__29385_29486 < count__29384_29485)){
var vec__29386_29487 = cljs.core._nth.call(null,chunk__29383_29484,i__29385_29486);
var k_29488 = cljs.core.nth.call(null,vec__29386_29487,(0),null);
var v_29489 = cljs.core.nth.call(null,vec__29386_29487,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_29488))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_29488)," ");

cljs.core.pr.call(null,v_29489);

cljs.core.newline.call(null);
}

var G__29490 = seq__29382_29483;
var G__29491 = chunk__29383_29484;
var G__29492 = count__29384_29485;
var G__29493 = (i__29385_29486 + (1));
seq__29382_29483 = G__29490;
chunk__29383_29484 = G__29491;
count__29384_29485 = G__29492;
i__29385_29486 = G__29493;
continue;
} else {
var temp__4425__auto___29494 = cljs.core.seq.call(null,seq__29382_29483);
if(temp__4425__auto___29494){
var seq__29382_29495__$1 = temp__4425__auto___29494;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29382_29495__$1)){
var c__27814__auto___29496 = cljs.core.chunk_first.call(null,seq__29382_29495__$1);
var G__29497 = cljs.core.chunk_rest.call(null,seq__29382_29495__$1);
var G__29498 = c__27814__auto___29496;
var G__29499 = cljs.core.count.call(null,c__27814__auto___29496);
var G__29500 = (0);
seq__29382_29483 = G__29497;
chunk__29383_29484 = G__29498;
count__29384_29485 = G__29499;
i__29385_29486 = G__29500;
continue;
} else {
var vec__29389_29501 = cljs.core.first.call(null,seq__29382_29495__$1);
var k_29502 = cljs.core.nth.call(null,vec__29389_29501,(0),null);
var v_29503 = cljs.core.nth.call(null,vec__29389_29501,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_29502))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_29502)," ");

cljs.core.pr.call(null,v_29503);

cljs.core.newline.call(null);
}

var G__29504 = cljs.core.next.call(null,seq__29382_29495__$1);
var G__29505 = null;
var G__29506 = (0);
var G__29507 = (0);
seq__29382_29483 = G__29504;
chunk__29383_29484 = G__29505;
count__29384_29485 = G__29506;
i__29385_29486 = G__29507;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29347_29393;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29346_29392;
}
return [cljs.core.str(sb__27989__auto__)].join('');
})());
} else {
return cljs.core.println.call(null,"Success!");
}
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.explain = (function cljs$spec$explain(spec,x){
return cljs.spec.explain_out.call(null,cljs.spec.explain_data.call(null,spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.explain_str = (function cljs$spec$explain_str(spec,x){
var sb__27989__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_29510_29512 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_29511_29513 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_29510_29512,_STAR_print_fn_STAR_29511_29513,sb__27989__auto__){
return (function (x__27990__auto__){
return sb__27989__auto__.append(x__27990__auto__);
});})(_STAR_print_newline_STAR_29510_29512,_STAR_print_fn_STAR_29511_29513,sb__27989__auto__))
;

try{cljs.spec.explain.call(null,spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29511_29513;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29510_29512;
}
return [cljs.core.str(sb__27989__auto__)].join('');
});
cljs.spec.gensub = (function cljs$spec$gensub(spec,overrides,path,rmap,form){
var spec__$1 = (function (){var or__27003__auto__ = cljs.core.get.call(null,overrides,spec);
if(cljs.core.truth_(or__27003__auto__)){
return or__27003__auto__;
} else {
return spec;
}
})();
var spec__$2 = cljs.spec.specize.call(null,spec__$1);
var temp__4423__auto__ = (function (){var or__27003__auto__ = cljs.core.get.call(null,overrides,path);
if(cljs.core.truth_(or__27003__auto__)){
return or__27003__auto__;
} else {
return cljs.spec.gen_STAR_.call(null,spec__$2,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var g = temp__4423__auto__;
return cljs.spec.impl.gen.such_that.call(null,((function (g,temp__4423__auto__,spec__$1,spec__$2){
return (function (p1__29514_SHARP_){
return cljs.spec.valid_QMARK_.call(null,spec__$2,p1__29514_SHARP_);
});})(g,temp__4423__auto__,spec__$1,spec__$2))
,g,(100));
} else {
throw (new Error([cljs.core.str("Unable to construct gen at: "),cljs.core.str(path),cljs.core.str(" for: "),cljs.core.str(cljs.spec.abbrev.call(null,form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map spec names or paths (vectors of keywords) to
 *   generators. These will be used instead of the generators at those
 *   names/paths. Note that parent generator (in the spec or overrides
 *   map) will supersede those of any subtrees. A generator for a regex
 *   op must always return a sequential collection (i.e. a generator for
 *   s/? should return either an empty sequence/vector or a
 *   sequence/vector with one item in it)
 */
cljs.spec.gen = (function cljs$spec$gen(var_args){
var args29515 = [];
var len__28078__auto___29518 = arguments.length;
var i__28079__auto___29519 = (0);
while(true){
if((i__28079__auto___29519 < len__28078__auto___29518)){
args29515.push((arguments[i__28079__auto___29519]));

var G__29520 = (i__28079__auto___29519 + (1));
i__28079__auto___29519 = G__29520;
continue;
} else {
}
break;
}

var G__29517 = args29515.length;
switch (G__29517) {
case 1:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29515.length)].join('')));

}
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.gen.call(null,spec,null);
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.gensub.call(null,spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086),cljs.spec._STAR_recursion_limit_STAR_], null),spec);
});

cljs.spec.gen.cljs$lang$maxFixedArity = 2;

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.def_impl = (function cljs$spec$def_impl(k,form,spec){
if(cljs.core.truth_((function (){var and__26991__auto__ = cljs.spec.named_QMARK_.call(null,k);
if(cljs.core.truth_(and__26991__auto__)){
return cljs.core.namespace.call(null,k);
} else {
return and__26991__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("k must be namespaced keyword or resolveable symbol"),cljs.core.str("\n"),cljs.core.str("(c/and (named? k) (namespace k))")].join('')));
}

var spec__$1 = (cljs.core.truth_((function (){var or__27003__auto__ = cljs.spec.spec_QMARK_.call(null,spec);
if(cljs.core.truth_(or__27003__auto__)){
return or__27003__auto__;
} else {
var or__27003__auto____$1 = cljs.spec.regex_QMARK_.call(null,spec);
if(cljs.core.truth_(or__27003__auto____$1)){
return or__27003__auto____$1;
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.registry_ref),spec);
}
}
})())?spec:cljs.spec.spec_impl.call(null,form,spec,null,null));
cljs.core.swap_BANG_.call(null,cljs.spec.registry_ref,cljs.core.assoc,k,spec__$1);

return k;
});
/**
 * returns the registry map, prefer 'get-spec' to lookup a spec by name
 */
cljs.spec.registry = (function cljs$spec$registry(){
return cljs.core.deref.call(null,cljs.spec.registry_ref);
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.__GT_sym = (function cljs$spec$__GT_sym(x){
if(cljs.core.var_QMARK_.call(null,x)){
return x.sym;
} else {
return x;
}
});
/**
 * Returns spec registered for keyword/symbol/var k, or nil.
 */
cljs.spec.get_spec = (function cljs$spec$get_spec(k){
return cljs.core.get.call(null,cljs.spec.registry.call(null),(((k instanceof cljs.core.Keyword))?k:cljs.spec.__GT_sym.call(null,k)));
});
/**
 * Returns nil if v conforms to spec, else throws ex-info with explain-data.
 */
cljs.spec.expect = (function cljs$spec$expect(spec,v){
return null;
});
/**
 * Fn-spec must include at least :args or :ret specs.
 */
cljs.spec.fn_spec_QMARK_ = (function cljs$spec$fn_spec_QMARK_(m){
var or__27003__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27003__auto__)){
return or__27003__auto__;
} else {
return new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(m);
}
});
cljs.spec.spec_checking_fn = (function cljs$spec$spec_checking_fn(v,f){
var conform_BANG_ = (function (v__$1,role,spec,data,args){
var conformed = cljs.spec.conform.call(null,spec,data);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),conformed)){
var ed = cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [role], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,data),new cljs.core.Keyword("cljs.spec","args","cljs.spec/args",-367019609),args);
throw cljs.core.ex_info.call(null,[cljs.core.str("Call to "),cljs.core.str(cljs.core.pr_str.call(null,v__$1)),cljs.core.str(" did not conform to spec:\n"),cljs.core.str((function (){var sb__27989__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_29528_29534 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_29529_29535 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_29528_29534,_STAR_print_fn_STAR_29529_29535,sb__27989__auto__,ed,conformed){
return (function (x__27990__auto__){
return sb__27989__auto__.append(x__27990__auto__);
});})(_STAR_print_newline_STAR_29528_29534,_STAR_print_fn_STAR_29529_29535,sb__27989__auto__,ed,conformed))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29529_29535;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29528_29534;
}
return [cljs.core.str(sb__27989__auto__)].join('');
})())].join(''),ed);
} else {
return conformed;
}
});
var G__29530 = ((function (conform_BANG_){
return (function() { 
var G__29536__delegate = function (args){
if(cljs.core.truth_(cljs.spec._STAR_instrument_enabled_STAR_)){
var _STAR_instrument_enabled_STAR_29531 = cljs.spec._STAR_instrument_enabled_STAR_;
cljs.spec._STAR_instrument_enabled_STAR_ = null;

try{var specs = cljs.spec.get_spec.call(null,v);
if(cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs))){
conform_BANG_.call(null,v,new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args,args);
} else {
}

var _STAR_instrument_enabled_STAR_29532 = cljs.spec._STAR_instrument_enabled_STAR_;
cljs.spec._STAR_instrument_enabled_STAR_ = true;

try{return cljs.core.apply.call(null,f,args);
}finally {cljs.spec._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR_29532;
}}finally {cljs.spec._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR_29531;
}} else {
return cljs.core.apply.call(null,f,args);
}
};
var G__29536 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29537__i = 0, G__29537__a = new Array(arguments.length -  0);
while (G__29537__i < G__29537__a.length) {G__29537__a[G__29537__i] = arguments[G__29537__i + 0]; ++G__29537__i;}
  args = new cljs.core.IndexedSeq(G__29537__a,0);
} 
return G__29536__delegate.call(this,args);};
G__29536.cljs$lang$maxFixedArity = 0;
G__29536.cljs$lang$applyTo = (function (arglist__29538){
var args = cljs.core.seq(arglist__29538);
return G__29536__delegate(args);
});
G__29536.cljs$core$IFn$_invoke$arity$variadic = G__29536__delegate;
return G__29536;
})()
;})(conform_BANG_))
;
var G__29530__$1 = ((!((f instanceof cljs.core.MultiFn)))?(function (){var G__29533 = G__29530;
goog.object.extend(G__29533,f);

return G__29533;
})():G__29530);
return G__29530__$1;
});
cljs.spec.macroexpand_check = (function cljs$spec$macroexpand_check(v,args){
var specs = cljs.spec.get_spec.call(null,v);
var temp__4425__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(temp__4425__auto__)){
var arg_spec = temp__4425__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.conform.call(null,arg_spec,args))){
var ed = cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,arg_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576)], null),(function (){var temp__4423__auto__ = cljs.spec.spec_name.call(null,arg_spec);
if(cljs.core.truth_(temp__4423__auto__)){
var name = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,args),new cljs.core.Keyword("cljs.spec","args","cljs.spec/args",-367019609),args);
throw (new Error([cljs.core.str("Call to "),cljs.core.str(cljs.spec.__GT_sym.call(null,v)),cljs.core.str(" did not conform to spec:\n"),cljs.core.str((function (){var sb__27989__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_29541_29543 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_29542_29544 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_29541_29543,_STAR_print_fn_STAR_29542_29544,sb__27989__auto__,ed,arg_spec,temp__4425__auto__,specs){
return (function (x__27990__auto__){
return sb__27989__auto__.append(x__27990__auto__);
});})(_STAR_print_newline_STAR_29541_29543,_STAR_print_fn_STAR_29542_29544,sb__27989__auto__,ed,arg_spec,temp__4425__auto__,specs))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29542_29544;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29541_29543;
}
return [cljs.core.str(sb__27989__auto__)].join('');
})())].join('')));
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.no_fn_spec = (function cljs$spec$no_fn_spec(v,specs){
return cljs.core.ex_info.call(null,[cljs.core.str("Fn at "),cljs.core.str(cljs.core.pr_str.call(null,v)),cljs.core.str(" is not spec'ed.")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"var","var",-769682797),v,new cljs.core.Keyword(null,"specs","specs",1426570741),specs], null));
});
/**
 * Map for instrumented vars to :raw/:wrapped fns
 */
cljs.spec.instrumented_vars = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.spec.instrument_STAR_ = (function cljs$spec$instrument_STAR_(v){
var spec = cljs.spec.get_spec.call(null,v);
if(cljs.core.truth_(cljs.spec.fn_spec_QMARK_.call(null,spec))){
var map__29547 = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.instrumented_vars),v);
var map__29547__$1 = ((((!((map__29547 == null)))?((((map__29547.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29547.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29547):map__29547);
var raw = cljs.core.get.call(null,map__29547__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var wrapped = cljs.core.get.call(null,map__29547__$1,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701));
var current = cljs.core.deref.call(null,v);
if(cljs.core._EQ_.call(null,wrapped,current)){
return null;
} else {
var checked = cljs.spec.spec_checking_fn.call(null,v,current);
cljs.core.swap_BANG_.call(null,cljs.spec.instrumented_vars,cljs.core.assoc,v,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"raw","raw",1604651272),current,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701),checked], null));

return checked;
}
} else {
throw cljs.spec.no_fn_spec.call(null,v,spec);
}
});
cljs.spec.unstrument_STAR_ = (function cljs$spec$unstrument_STAR_(v){
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.instrumented_vars),v);
if(cljs.core.truth_(temp__4425__auto__)){
var map__29551 = temp__4425__auto__;
var map__29551__$1 = ((((!((map__29551 == null)))?((((map__29551.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29551.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29551):map__29551);
var raw = cljs.core.get.call(null,map__29551__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var wrapped = cljs.core.get.call(null,map__29551__$1,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701));
var current = cljs.core.deref.call(null,v);
if(cljs.core._EQ_.call(null,wrapped,current)){
cljs.core.swap_BANG_.call(null,cljs.spec.instrumented_vars,cljs.core.dissoc,v);

return raw;
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.recur_limit_QMARK_ = (function cljs$spec$recur_limit_QMARK_(rmap,id,path,k){
return ((cljs.core.get.call(null,rmap,id) > new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086).cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,path),k));
});
cljs.spec.inck = (function cljs$spec$inck(m,k){
return cljs.core.assoc.call(null,m,k,((function (){var or__27003__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(or__27003__auto__)){
return or__27003__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.dt = (function cljs$spec$dt(var_args){
var args29553 = [];
var len__28078__auto___29556 = arguments.length;
var i__28079__auto___29557 = (0);
while(true){
if((i__28079__auto___29557 < len__28078__auto___29556)){
args29553.push((arguments[i__28079__auto___29557]));

var G__29558 = (i__28079__auto___29557 + (1));
i__28079__auto___29557 = G__29558;
continue;
} else {
}
break;
}

var G__29555 = args29553.length;
switch (G__29555) {
case 3:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29553.length)].join('')));

}
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.dt.call(null,pred,x,form,null);
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__4423__auto__ = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(temp__4423__auto__)){
var spec = temp__4423__auto__;
return cljs.spec.conform.call(null,spec,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return pred.call(null,x);
} else {
if(cljs.core.truth_(pred.call(null,x))){
return x;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
} else {
throw (new Error([cljs.core.str(cljs.core.pr_str.call(null,form)),cljs.core.str(" is not a fn, expected predicate fn")].join('')));
}
}
} else {
return x;
}
});

cljs.spec.dt.cljs$lang$maxFixedArity = 4;

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.valid_QMARK_ = (function cljs$spec$valid_QMARK_(var_args){
var args29560 = [];
var len__28078__auto___29563 = arguments.length;
var i__28079__auto___29564 = (0);
while(true){
if((i__28079__auto___29564 < len__28078__auto___29563)){
args29560.push((arguments[i__28079__auto___29564]));

var G__29565 = (i__28079__auto___29564 + (1));
i__28079__auto___29564 = G__29565;
continue;
} else {
}
break;
}

var G__29562 = args29560.length;
switch (G__29562) {
case 2:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29560.length)].join('')));

}
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,spec,x,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582)));
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,spec,x,form));
});

cljs.spec.valid_QMARK_.cljs$lang$maxFixedArity = 3;

cljs.spec.explain_1 = (function cljs$spec$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.maybe_spec.call(null,pred);
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred__$1))){
return cljs.spec.explain_STAR_.call(null,pred__$1,path,(function (){var temp__4423__auto__ = cljs.spec.spec_name.call(null,pred__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var name = temp__4423__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})(),in$,v);
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form),new cljs.core.Keyword(null,"val","val",128701612),v,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
}
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
cljs.spec.map_spec_impl = (function cljs$spec$map_spec_impl(p__29569){
var map__29600 = p__29569;
var map__29600__$1 = ((((!((map__29600 == null)))?((((map__29600.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29600.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29600):map__29600);
var argm = map__29600__$1;
var opt = cljs.core.get.call(null,map__29600__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.call(null,map__29600__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.call(null,map__29600__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var gfn = cljs.core.get.call(null,map__29600__$1,new cljs.core.Keyword(null,"gfn","gfn",791517474));
var pred_exprs = cljs.core.get.call(null,map__29600__$1,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395));
var opt_keys = cljs.core.get.call(null,map__29600__$1,new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261));
var req_specs = cljs.core.get.call(null,map__29600__$1,new cljs.core.Keyword(null,"req-specs","req-specs",553962313));
var req = cljs.core.get.call(null,map__29600__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_keys = cljs.core.get.call(null,map__29600__$1,new cljs.core.Keyword(null,"req-keys","req-keys",514319221));
var opt_specs = cljs.core.get.call(null,map__29600__$1,new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450));
var pred_forms = cljs.core.get.call(null,map__29600__$1,new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832));
var keys_pred = cljs.core.apply.call(null,cljs.core.every_pred,pred_exprs);
var k__GT_s = cljs.core.zipmap.call(null,cljs.core.concat.call(null,req_keys,opt_keys),cljs.core.concat.call(null,req_specs,opt_specs));
var keys__GT_specs = ((function (keys_pred,k__GT_s,map__29600,map__29600__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__29567_SHARP_){
var or__27003__auto__ = k__GT_s.call(null,p1__29567_SHARP_);
if(cljs.core.truth_(or__27003__auto__)){
return or__27003__auto__;
} else {
return p1__29567_SHARP_;
}
});})(keys_pred,k__GT_s,map__29600,map__29600__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid.call(null);
if(typeof cljs.spec.t_cljs$spec29602 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec29602 = (function (opt,map_spec_impl,req_un,opt_un,map__29600,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,keys__GT_specs,p__29569,req,id,req_keys,opt_specs,k__GT_s,pred_forms,meta29603){
this.opt = opt;
this.map_spec_impl = map_spec_impl;
this.req_un = req_un;
this.opt_un = opt_un;
this.map__29600 = map__29600;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.req_specs = req_specs;
this.keys__GT_specs = keys__GT_specs;
this.p__29569 = p__29569;
this.req = req;
this.id = id;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta29603 = meta29603;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec29602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__29600,map__29600__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_29604,meta29603__$1){
var self__ = this;
var _29604__$1 = this;
return (new cljs.spec.t_cljs$spec29602(self__.opt,self__.map_spec_impl,self__.req_un,self__.opt_un,self__.map__29600,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.req_specs,self__.keys__GT_specs,self__.p__29569,self__.req,self__.id,self__.req_keys,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta29603__$1));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__29600,map__29600__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec29602.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__29600,map__29600__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_29604){
var self__ = this;
var _29604__$1 = this;
return self__.meta29603;
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__29600,map__29600__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec29602.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec29602.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__29600,map__29600__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys_pred.call(null,m))){
var reg = cljs.spec.registry.call(null);
var ret = m;
var G__29608 = cljs.core.keys.call(null,m);
var vec__29609 = G__29608;
var seq__29610 = cljs.core.seq.call(null,vec__29609);
var first__29611 = cljs.core.first.call(null,seq__29610);
var seq__29610__$1 = cljs.core.next.call(null,seq__29610);
var k = first__29611;
var ks = seq__29610__$1;
var keys = vec__29609;
var ret__$1 = ret;
var G__29608__$1 = G__29608;
while(true){
var ret__$2 = ret__$1;
var vec__29612 = G__29608__$1;
var seq__29613 = cljs.core.seq.call(null,vec__29612);
var first__29614 = cljs.core.first.call(null,seq__29613);
var seq__29613__$1 = cljs.core.next.call(null,seq__29613);
var k__$1 = first__29614;
var ks__$1 = seq__29613__$1;
var keys__$1 = vec__29612;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k__$1))){
var v = cljs.core.get.call(null,m,k__$1);
var cv = cljs.spec.conform.call(null,self__.keys__GT_specs.call(null,k__$1),v);
if(cljs.core._EQ_.call(null,cv,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__29630 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,cv));
var G__29631 = ks__$1;
ret__$1 = G__29630;
G__29608__$1 = G__29631;
continue;
}
} else {
var G__29632 = ret__$2;
var G__29633 = ks__$1;
ret__$1 = G__29632;
G__29608__$1 = G__29633;
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__29600,map__29600__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec29602.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__29600,map__29600__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.registry.call(null);
var ret = m;
var G__29618 = cljs.core.keys.call(null,m);
var vec__29619 = G__29618;
var seq__29620 = cljs.core.seq.call(null,vec__29619);
var first__29621 = cljs.core.first.call(null,seq__29620);
var seq__29620__$1 = cljs.core.next.call(null,seq__29620);
var k = first__29621;
var ks = seq__29620__$1;
var keys = vec__29619;
var ret__$1 = ret;
var G__29618__$1 = G__29618;
while(true){
var ret__$2 = ret__$1;
var vec__29622 = G__29618__$1;
var seq__29623 = cljs.core.seq.call(null,vec__29622);
var first__29624 = cljs.core.first.call(null,seq__29623);
var seq__29623__$1 = cljs.core.next.call(null,seq__29623);
var k__$1 = first__29624;
var ks__$1 = seq__29623__$1;
var keys__$1 = vec__29622;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k__$1))){
var cv = cljs.core.get.call(null,m,k__$1);
var v = cljs.spec.unform.call(null,self__.keys__GT_specs.call(null,k__$1),cv);
var G__29634 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,v));
var G__29635 = ks__$1;
ret__$1 = G__29634;
G__29618__$1 = G__29635;
continue;
} else {
var G__29636 = ret__$2;
var G__29637 = ks__$1;
ret__$1 = G__29636;
G__29618__$1 = G__29637;
continue;
}
} else {
return ret__$2;
}
break;
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__29600,map__29600__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec29602.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__29600,map__29600__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.map_QMARK_.call(null,x))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
var reg = cljs.spec.registry.call(null);
return cljs.core.apply.call(null,cljs.core.merge,(function (){var temp__4425__auto__ = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__29600,map__29600__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (pred,form){
if(cljs.core.truth_(pred.call(null,x))){
return null;
} else {
return cljs.spec.abbrev.call(null,form);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__29600,map__29600__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__4425__auto__){
var probs = temp__4425__auto__;
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.vec.call(null,probs),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
return null;
}
})(),cljs.core.map.call(null,((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__29600,map__29600__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__29625){
var vec__29626 = p__29625;
var k = cljs.core.nth.call(null,vec__29626,(0),null);
var v = cljs.core.nth.call(null,vec__29626,(1),null);
if(cljs.core.truth_((function (){var or__27003__auto__ = !(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k)));
if(or__27003__auto__){
return or__27003__auto__;
} else {
return cljs.spec.valid_QMARK_.call(null,self__.keys__GT_specs.call(null,k),v,k);
}
})())){
return null;
} else {
return cljs.spec.explain_1.call(null,self__.keys__GT_specs.call(null,k),self__.keys__GT_specs.call(null,k),cljs.core.conj.call(null,path,k),via,cljs.core.conj.call(null,in$,k),v);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__29600,map__29600__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq.call(null,x)));
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__29600,map__29600__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec29602.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__29600,map__29600__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
var gen = ((function (rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__29600,map__29600__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__29600,map__29600__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__29600,map__29600__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__29600,map__29600__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__29600,map__29600__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__29600,map__29600__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var req_gens = cljs.core.map.call(null,gen,self__.req_keys,self__.req_specs);
var opt_gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.concat.call(null,req_gens,opt_gens))){
var reqs = cljs.core.zipmap.call(null,self__.req_keys,req_gens);
var opts = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,opt_gens);
return cljs.spec.impl.gen.bind.call(null,cljs.spec.impl.gen.choose.call(null,(0),cljs.core.count.call(null,opts)),((function (reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__29600,map__29600__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__29568_SHARP_){
var args = cljs.core.concat.call(null,cljs.core.seq.call(null,reqs),((cljs.core.seq.call(null,opts))?cljs.core.shuffle.call(null,cljs.core.seq.call(null,opts)):null));
return cljs.core.apply.call(null,cljs.spec.impl.gen.hash_map,cljs.core.apply.call(null,cljs.core.concat,cljs.core.take.call(null,(p1__29568_SHARP_ + cljs.core.count.call(null,reqs)),args)));
});})(reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__29600,map__29600__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
);
} else {
return null;
}
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__29600,map__29600__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec29602.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__29600,map__29600__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.map_spec_impl.call(null,cljs.core.assoc.call(null,self__.argm,new cljs.core.Keyword(null,"gfn","gfn",791517474),gfn__$1));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__29600,map__29600__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec29602.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__29600,map__29600__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),(function (){var G__29629 = cljs.core.PersistentVector.EMPTY;
var G__29629__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.call(null,G__29629,new cljs.core.Keyword(null,"req","req",-326448303),self__.req):G__29629);
var G__29629__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.call(null,G__29629__$1,new cljs.core.Keyword(null,"opt","opt",-794706369),self__.opt):G__29629__$1);
var G__29629__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.call(null,G__29629__$2,new cljs.core.Keyword(null,"req-un","req-un",1074571008),self__.req_un):G__29629__$2);
var G__29629__$4 = (cljs.core.truth_(self__.opt_un)?cljs.core.conj.call(null,G__29629__$3,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),self__.opt_un):G__29629__$3);
return G__29629__$4;
})());
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__29600,map__29600__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec29602.getBasis = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__29600,map__29600__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opt","opt",845825158,null),cljs.core.with_meta(new cljs.core.Symbol(null,"map-spec-impl","map-spec-impl",-1682885722,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"opt","opt",845825158,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"argm","argm",-181546357,null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'spec' with a map argument"], null)),new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"map__29600","map__29600",2057119303,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"keys-pred","keys-pred",-1795451030,null),new cljs.core.Symbol(null,"argm","argm",-181546357,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"keys->specs","keys->specs",-97897643,null),new cljs.core.Symbol(null,"p__29569","p__29569",287965431,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"k->s","k->s",-1685112801,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"meta29603","meta29603",1352525369,null)], null);
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__29600,map__29600__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec29602.cljs$lang$type = true;

cljs.spec.t_cljs$spec29602.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec29602";

cljs.spec.t_cljs$spec29602.cljs$lang$ctorPrWriter = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__29600,map__29600__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__27609__auto__,writer__27610__auto__,opt__27611__auto__){
return cljs.core._write.call(null,writer__27610__auto__,"cljs.spec/t_cljs$spec29602");
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__29600,map__29600__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.__GT_t_cljs$spec29602 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__29600,map__29600__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$map_spec_impl_$___GT_t_cljs$spec29602(opt__$1,map_spec_impl__$1,req_un__$1,opt_un__$1,map__29600__$2,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,keys__GT_specs__$1,p__29569__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta29603){
return (new cljs.spec.t_cljs$spec29602(opt__$1,map_spec_impl__$1,req_un__$1,opt_un__$1,map__29600__$2,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,keys__GT_specs__$1,p__29569__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta29603));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__29600,map__29600__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

}

return (new cljs.spec.t_cljs$spec29602(opt,cljs$spec$map_spec_impl,req_un,opt_un,map__29600__$1,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,keys__GT_specs,p__29569,req,id,req_keys,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.spec_impl = (function cljs$spec$spec_impl(var_args){
var args29638 = [];
var len__28078__auto___29646 = arguments.length;
var i__28079__auto___29647 = (0);
while(true){
if((i__28079__auto___29647 < len__28078__auto___29646)){
args29638.push((arguments[i__28079__auto___29647]));

var G__29648 = (i__28079__auto___29647 + (1));
i__28079__auto___29647 = G__29648;
continue;
} else {
}
break;
}

var G__29640 = args29638.length;
switch (G__29640) {
case 4:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29638.length)].join('')));

}
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.spec_impl.call(null,form,pred,gfn,cpred_QMARK_,null);
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred))){
var G__29641 = pred;
var G__29641__$1 = (cljs.core.truth_(gfn)?cljs.spec.with_gen.call(null,G__29641,gfn):G__29641);
return G__29641__$1;
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,pred))){
return cljs.spec.regex_spec_impl.call(null,pred,gfn);
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,pred))){
var G__29642 = cljs.spec.the_spec.call(null,pred);
var G__29642__$1 = (cljs.core.truth_(gfn)?cljs.spec.with_gen.call(null,G__29642,gfn):G__29642);
return G__29642__$1;
} else {
if(typeof cljs.spec.t_cljs$spec29643 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec29643 = (function (form,pred,gfn,cpred_QMARK_,unc,meta29644){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
this.meta29644 = meta29644;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec29643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29645,meta29644__$1){
var self__ = this;
var _29645__$1 = this;
return (new cljs.spec.t_cljs$spec29643(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta29644__$1));
});

cljs.spec.t_cljs$spec29643.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29645){
var self__ = this;
var _29645__$1 = this;
return self__.meta29644;
});

cljs.spec.t_cljs$spec29643.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec29643.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_);
});

cljs.spec.t_cljs$spec29643.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.cpred_QMARK_)){
if(cljs.core.truth_(self__.unc)){
return self__.unc.call(null,x);
} else {
throw (new Error("no unform fn for conformer"));
}
} else {
return x;
}
});

cljs.spec.t_cljs$spec29643.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,self__.form),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
return null;
}
});

cljs.spec.t_cljs$spec29643.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.gen_for_pred.call(null,self__.pred);
}
});

cljs.spec.t_cljs$spec29643.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.spec_impl.call(null,self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_);
});

cljs.spec.t_cljs$spec29643.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
});

cljs.spec.t_cljs$spec29643.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"cpred?","cpred?",35589515,null),new cljs.core.Symbol(null,"unc","unc",-465250751,null),new cljs.core.Symbol(null,"meta29644","meta29644",101822698,null)], null);
});

cljs.spec.t_cljs$spec29643.cljs$lang$type = true;

cljs.spec.t_cljs$spec29643.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec29643";

cljs.spec.t_cljs$spec29643.cljs$lang$ctorPrWriter = (function (this__27609__auto__,writer__27610__auto__,opt__27611__auto__){
return cljs.core._write.call(null,writer__27610__auto__,"cljs.spec/t_cljs$spec29643");
});

cljs.spec.__GT_t_cljs$spec29643 = (function cljs$spec$__GT_t_cljs$spec29643(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta29644){
return (new cljs.spec.t_cljs$spec29643(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta29644));
});

}

return (new cljs.spec.t_cljs$spec29643(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
});

cljs.spec.spec_impl.cljs$lang$maxFixedArity = 5;

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.multi_spec_impl = (function cljs$spec$multi_spec_impl(var_args){
var args29655 = [];
var len__28078__auto___29669 = arguments.length;
var i__28079__auto___29670 = (0);
while(true){
if((i__28079__auto___29670 < len__28078__auto___29669)){
args29655.push((arguments[i__28079__auto___29670]));

var G__29671 = (i__28079__auto___29670 + (1));
i__28079__auto___29670 = G__29671;
continue;
} else {
}
break;
}

var G__29657 = args29655.length;
switch (G__29657) {
case 3:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29655.length)].join('')));

}
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.multi_spec_impl.call(null,form,mmvar,retag,null);
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid.call(null);
var predx = ((function (id){
return (function (p1__29650_SHARP_){
var mm = cljs.core.deref.call(null,mmvar);
var and__26991__auto__ = cljs.core.contains_QMARK_.call(null,cljs.core.methods$.call(null,mm),cljs.core._dispatch_fn.call(null,mm).call(null,p1__29650_SHARP_));
if(and__26991__auto__){
return mm.call(null,p1__29650_SHARP_);
} else {
return and__26991__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
return (function (p1__29651_SHARP_){
return cljs.core._dispatch_fn.call(null,cljs.core.deref.call(null,mmvar)).call(null,p1__29651_SHARP_);
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__29652_SHARP_,p2__29653_SHARP_){
return cljs.core.assoc.call(null,p1__29652_SHARP_,retag,p2__29653_SHARP_);
});})(id,predx,dval))
:retag);
if(typeof cljs.spec.t_cljs$spec29658 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec29658 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta29659){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta29659 = meta29659;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec29658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_29660,meta29659__$1){
var self__ = this;
var _29660__$1 = this;
return (new cljs.spec.t_cljs$spec29658(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta29659__$1));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec29658.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_29660){
var self__ = this;
var _29660__$1 = this;
return self__.meta29659;
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec29658.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec29658.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__4423__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__4423__auto__)){
var pred = temp__4423__auto__;
return cljs.spec.dt.call(null,pred,x,self__.form);
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec29658.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__4423__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__4423__auto__)){
var pred = temp__4423__auto__;
return cljs.spec.unform.call(null,pred,x);
} else {
throw (new Error([cljs.core.str("No method of: "),cljs.core.str(self__.form),cljs.core.str(" for dispatch value: "),cljs.core.str(self__.dval.call(null,x))].join('')));
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec29658.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = self__.dval.call(null,x);
var path__$1 = cljs.core.conj.call(null,path,dv);
var temp__4423__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__4423__auto__)){
var pred = temp__4423__auto__;
return cljs.spec.explain_1.call(null,self__.form,pred,path__$1,via,in$,x);
} else {
return cljs.core.PersistentArrayMap.fromArray([path__$1,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),self__.form,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"reason","reason",-2070751759),"no method",new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec29658.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,predx,dval,tag){
return (function (p__29661){
var vec__29662 = p__29661;
var k = cljs.core.nth.call(null,vec__29662,(0),null);
var f = cljs.core.nth.call(null,vec__29662,(1),null);
var p = f.call(null,null);
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,p,vec__29662,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.impl.gen.fmap.call(null,((function (rmap__$1,p,vec__29662,k,f,___$1,id,predx,dval,tag){
return (function (p1__29654_SHARP_){
return self__.tag.call(null,p1__29654_SHARP_,k);
});})(rmap__$1,p,vec__29662,k,f,___$1,id,predx,dval,tag))
,cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,cljs.core._conj.call(null,(function (){var x__27837__auto__ = self__.form;
return cljs.core._conj.call(null,(function (){var x__27837__auto____$1 = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27837__auto____$1);
})(),x__27837__auto__);
})(),new cljs.core.Symbol(null,"method","method",1696235119,null))));
});})(rmap__$1,p,vec__29662,k,f,___$1,id,predx,dval,tag))
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,cljs.core.remove.call(null,((function (gen,___$1,id,predx,dval,tag){
return (function (p__29665){
var vec__29666 = p__29665;
var k = cljs.core.nth.call(null,vec__29666,(0),null);
return cljs.core._EQ_.call(null,k,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
});})(gen,___$1,id,predx,dval,tag))
,cljs.core.methods$.call(null,cljs.core.deref.call(null,self__.mmvar)))));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.spec.impl.gen.one_of.call(null,gs);
} else {
return null;
}
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec29658.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.multi_spec_impl.call(null,self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec29658.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","multi-spec","cljs.spec/multi-spec",-2053297814,null)),(function (){var x__27837__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27837__auto__);
})())));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec29658.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"mmvar","mmvar",-1714325675,null),new cljs.core.Symbol(null,"retag","retag",528972725,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"predx","predx",2063470948,null),new cljs.core.Symbol(null,"dval","dval",835211877,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta29659","meta29659",-221235276,null)], null);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec29658.cljs$lang$type = true;

cljs.spec.t_cljs$spec29658.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec29658";

cljs.spec.t_cljs$spec29658.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__27609__auto__,writer__27610__auto__,opt__27611__auto__){
return cljs.core._write.call(null,writer__27610__auto__,"cljs.spec/t_cljs$spec29658");
});})(id,predx,dval,tag))
;

cljs.spec.__GT_t_cljs$spec29658 = ((function (id,predx,dval,tag){
return (function cljs$spec$__GT_t_cljs$spec29658(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta29659){
return (new cljs.spec.t_cljs$spec29658(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta29659));
});})(id,predx,dval,tag))
;

}

return (new cljs.spec.t_cljs$spec29658(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.tuple_impl = (function cljs$spec$tuple_impl(var_args){
var args29673 = [];
var len__28078__auto___29679 = arguments.length;
var i__28079__auto___29680 = (0);
while(true){
if((i__28079__auto___29680 < len__28078__auto___29679)){
args29673.push((arguments[i__28079__auto___29680]));

var G__29681 = (i__28079__auto___29680 + (1));
i__28079__auto___29680 = G__29681;
continue;
} else {
}
break;
}

var G__29675 = args29673.length;
switch (G__29675) {
case 2:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29673.length)].join('')));

}
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.tuple_impl.call(null,forms,preds,null);
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec29676 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec29676 = (function (forms,preds,gfn,meta29677){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta29677 = meta29677;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec29676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29678,meta29677__$1){
var self__ = this;
var _29678__$1 = this;
return (new cljs.spec.t_cljs$spec29676(self__.forms,self__.preds,self__.gfn,meta29677__$1));
});

cljs.spec.t_cljs$spec29676.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29678){
var self__ = this;
var _29678__$1 = this;
return self__.meta29677;
});

cljs.spec.t_cljs$spec29676.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec29676.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(!((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var v = x.call(null,i);
var cv = cljs.spec.dt.call(null,self__.preds.call(null,i),v,self__.forms.call(null,i));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cv)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__29683 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,cv));
var G__29684 = (i + (1));
ret = G__29683;
i = G__29684;
continue;
}
}
break;
}
}
});

cljs.spec.t_cljs$spec29676.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds)))){
} else {
throw (new Error("Assert failed: (c/and (vector? x) (= (count x) (count preds)))"));
}

var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var cv = x.call(null,i);
var v = cljs.spec.unform.call(null,self__.preds.call(null,i),cv);
var G__29685 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,v));
var G__29686 = (i + (1));
ret = G__29685;
i = G__29686;
continue;
}
break;
}
});

cljs.spec.t_cljs$spec29676.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.vector_QMARK_.call(null,x))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__27837__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27837__auto__);
})(),(function (){var x__27837__auto__ = cljs.core.count.call(null,self__.preds);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27837__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (___$1){
return (function (i,form,pred){
var v = x.call(null,i);
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,pred,v))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,i),via,cljs.core.conj.call(null,in$,i),v);
}
});})(___$1))
,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.forms,self__.preds));

}
}
});

cljs.spec.t_cljs$spec29676.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1){
return (function (i,p,f){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,i),rmap,f);
});})(___$1))
;
var gs = cljs.core.map.call(null,gen,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gs);
} else {
return null;
}
}
});

cljs.spec.t_cljs$spec29676.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.tuple_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec29676.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","tuple","cljs.spec/tuple",500419708,null)),self__.forms)));
});

cljs.spec.t_cljs$spec29676.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta29677","meta29677",1919473920,null)], null);
});

cljs.spec.t_cljs$spec29676.cljs$lang$type = true;

cljs.spec.t_cljs$spec29676.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec29676";

cljs.spec.t_cljs$spec29676.cljs$lang$ctorPrWriter = (function (this__27609__auto__,writer__27610__auto__,opt__27611__auto__){
return cljs.core._write.call(null,writer__27610__auto__,"cljs.spec/t_cljs$spec29676");
});

cljs.spec.__GT_t_cljs$spec29676 = (function cljs$spec$__GT_t_cljs$spec29676(forms__$1,preds__$1,gfn__$1,meta29677){
return (new cljs.spec.t_cljs$spec29676(forms__$1,preds__$1,gfn__$1,meta29677));
});

}

return (new cljs.spec.t_cljs$spec29676(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.tuple_impl.cljs$lang$maxFixedArity = 3;

cljs.spec.tagged_ret = (function cljs$spec$tagged_ret(v){
var x29688 = v;
x29688.cljs$core$IMapEntry$ = true;

x29688.cljs$core$IMapEntry$_key$arity$1 = ((function (x29688){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(0));
});})(x29688))
;

x29688.cljs$core$IMapEntry$_val$arity$1 = ((function (x29688){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(1));
});})(x29688))
;

return x29688;
});
/**
 * Do not call this directly, use 'or'
 */
cljs.spec.or_spec_impl = (function cljs$spec$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid.call(null);
var kps = cljs.core.zipmap.call(null,keys,preds);
var cform = ((function (id,kps){
return (function (x){
var i = (0);
while(true){
if((i < cljs.core.count.call(null,preds))){
var pred = preds.call(null,i);
var ret = cljs.spec.dt.call(null,pred,x,cljs.core.nth.call(null,forms,i));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),ret)){
var G__29703 = (i + (1));
i = G__29703;
continue;
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,i),ret], null));
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
break;
}
});})(id,kps))
;
if(typeof cljs.spec.t_cljs$spec29696 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec29696 = (function (or_spec_impl,keys,forms,preds,gfn,id,kps,cform,meta29697){
this.or_spec_impl = or_spec_impl;
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.cform = cform;
this.meta29697 = meta29697;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec29696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,cform){
return (function (_29698,meta29697__$1){
var self__ = this;
var _29698__$1 = this;
return (new cljs.spec.t_cljs$spec29696(self__.or_spec_impl,self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.cform,meta29697__$1));
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec29696.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,cform){
return (function (_29698){
var self__ = this;
var _29698__$1 = this;
return self__.meta29697;
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec29696.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec29696.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec29696.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,p__29699){
var self__ = this;
var vec__29700 = p__29699;
var k = cljs.core.nth.call(null,vec__29700,(0),null);
var x = cljs.core.nth.call(null,vec__29700,(1),null);
var ___$1 = this;
return cljs.spec.unform.call(null,self__.kps.call(null,k),x);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec29696.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,kps,cform){
return (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,this$__$1,x))){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (this$__$1,id,kps,cform){
return (function (k,form,pred){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,pred,x))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,k),via,in$,x);
}
});})(this$__$1,id,kps,cform))
,self__.keys,self__.forms,self__.preds));
}
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec29696.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,kps,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,kps,cform){
return (function (k,p,f){
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,___$1,id,kps,cform){
return (function (){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,f);
});})(rmap__$1,___$1,id,kps,cform))
,null)));
}
});})(___$1,id,kps,cform))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_.call(null,gs)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gs);
}
}
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec29696.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec29696.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,kps,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null)),cljs.core.mapcat.call(null,cljs.core.vector,self__.keys,self__.forms))));
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec29696.getBasis = ((function (id,kps,cform){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"or-spec-impl","or-spec-impl",-1412945461,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'or'"], null)),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"kps","kps",-1157342767,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta29697","meta29697",-1222975189,null)], null);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec29696.cljs$lang$type = true;

cljs.spec.t_cljs$spec29696.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec29696";

cljs.spec.t_cljs$spec29696.cljs$lang$ctorPrWriter = ((function (id,kps,cform){
return (function (this__27609__auto__,writer__27610__auto__,opt__27611__auto__){
return cljs.core._write.call(null,writer__27610__auto__,"cljs.spec/t_cljs$spec29696");
});})(id,kps,cform))
;

cljs.spec.__GT_t_cljs$spec29696 = ((function (id,kps,cform){
return (function cljs$spec$or_spec_impl_$___GT_t_cljs$spec29696(or_spec_impl__$1,keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,cform__$1,meta29697){
return (new cljs.spec.t_cljs$spec29696(or_spec_impl__$1,keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,cform__$1,meta29697));
});})(id,kps,cform))
;

}

return (new cljs.spec.t_cljs$spec29696(cljs$spec$or_spec_impl,keys,forms,preds,gfn,id,kps,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.and_preds = (function cljs$spec$and_preds(x,preds,forms){
var ret = x;
var G__29730 = preds;
var vec__29732 = G__29730;
var seq__29733 = cljs.core.seq.call(null,vec__29732);
var first__29734 = cljs.core.first.call(null,seq__29733);
var seq__29733__$1 = cljs.core.next.call(null,seq__29733);
var pred = first__29734;
var preds__$1 = seq__29733__$1;
var G__29731 = forms;
var vec__29735 = G__29731;
var seq__29736 = cljs.core.seq.call(null,vec__29735);
var first__29737 = cljs.core.first.call(null,seq__29736);
var seq__29736__$1 = cljs.core.next.call(null,seq__29736);
var form = first__29737;
var forms__$1 = seq__29736__$1;
var ret__$1 = ret;
var G__29730__$1 = G__29730;
var G__29731__$1 = G__29731;
while(true){
var ret__$2 = ret__$1;
var vec__29738 = G__29730__$1;
var seq__29739 = cljs.core.seq.call(null,vec__29738);
var first__29740 = cljs.core.first.call(null,seq__29739);
var seq__29739__$1 = cljs.core.next.call(null,seq__29739);
var pred__$1 = first__29740;
var preds__$2 = seq__29739__$1;
var vec__29741 = G__29731__$1;
var seq__29742 = cljs.core.seq.call(null,vec__29741);
var first__29743 = cljs.core.first.call(null,seq__29742);
var seq__29742__$1 = cljs.core.next.call(null,seq__29742);
var form__$1 = first__29743;
var forms__$2 = seq__29742__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),nret)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__29744 = nret;
var G__29745 = preds__$2;
var G__29746 = forms__$2;
ret__$1 = G__29744;
G__29730__$1 = G__29745;
G__29731__$1 = G__29746;
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.explain_pred_list = (function cljs$spec$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
var G__29773 = forms;
var vec__29775 = G__29773;
var seq__29776 = cljs.core.seq.call(null,vec__29775);
var first__29777 = cljs.core.first.call(null,seq__29776);
var seq__29776__$1 = cljs.core.next.call(null,seq__29776);
var form = first__29777;
var forms__$1 = seq__29776__$1;
var G__29774 = preds;
var vec__29778 = G__29774;
var seq__29779 = cljs.core.seq.call(null,vec__29778);
var first__29780 = cljs.core.first.call(null,seq__29779);
var seq__29779__$1 = cljs.core.next.call(null,seq__29779);
var pred = first__29780;
var preds__$1 = seq__29779__$1;
var ret__$1 = ret;
var G__29773__$1 = G__29773;
var G__29774__$1 = G__29774;
while(true){
var ret__$2 = ret__$1;
var vec__29781 = G__29773__$1;
var seq__29782 = cljs.core.seq.call(null,vec__29781);
var first__29783 = cljs.core.first.call(null,seq__29782);
var seq__29782__$1 = cljs.core.next.call(null,seq__29782);
var form__$1 = first__29783;
var forms__$2 = seq__29782__$1;
var vec__29784 = G__29774__$1;
var seq__29785 = cljs.core.seq.call(null,vec__29784);
var first__29786 = cljs.core.first.call(null,seq__29785);
var seq__29785__$1 = cljs.core.next.call(null,seq__29785);
var pred__$1 = first__29786;
var preds__$2 = seq__29785__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),nret)){
var G__29787 = nret;
var G__29788 = forms__$2;
var G__29789 = preds__$2;
ret__$1 = G__29787;
G__29773__$1 = G__29788;
G__29774__$1 = G__29789;
continue;
} else {
return cljs.spec.explain_1.call(null,form__$1,pred__$1,path,via,in$,ret__$2);
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.and_spec_impl = (function cljs$spec$and_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec29795 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec29795 = (function (and_spec_impl,forms,preds,gfn,meta29796){
this.and_spec_impl = and_spec_impl;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta29796 = meta29796;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec29795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29797,meta29796__$1){
var self__ = this;
var _29797__$1 = this;
return (new cljs.spec.t_cljs$spec29795(self__.and_spec_impl,self__.forms,self__.preds,self__.gfn,meta29796__$1));
});

cljs.spec.t_cljs$spec29795.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29797){
var self__ = this;
var _29797__$1 = this;
return self__.meta29796;
});

cljs.spec.t_cljs$spec29795.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec29795.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.and_preds.call(null,x,self__.preds,self__.forms);
});

cljs.spec.t_cljs$spec29795.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.call(null,((function (___$1){
return (function (p1__29791_SHARP_,p2__29790_SHARP_){
return cljs.spec.unform.call(null,p2__29790_SHARP_,p1__29791_SHARP_);
});})(___$1))
,x,cljs.core.reverse.call(null,self__.preds));
});

cljs.spec.t_cljs$spec29795.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.explain_pred_list.call(null,self__.forms,self__.preds,path,via,in$,x);
});

cljs.spec.t_cljs$spec29795.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gensub.call(null,cljs.core.first.call(null,self__.preds),overrides,path,rmap,cljs.core.first.call(null,self__.forms));
}
});

cljs.spec.t_cljs$spec29795.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec29795.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","and","cljs.spec/and",-7296553,null)),self__.forms)));
});

cljs.spec.t_cljs$spec29795.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"and-spec-impl","and-spec-impl",1127339973,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'and'"], null)),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta29796","meta29796",230373800,null)], null);
});

cljs.spec.t_cljs$spec29795.cljs$lang$type = true;

cljs.spec.t_cljs$spec29795.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec29795";

cljs.spec.t_cljs$spec29795.cljs$lang$ctorPrWriter = (function (this__27609__auto__,writer__27610__auto__,opt__27611__auto__){
return cljs.core._write.call(null,writer__27610__auto__,"cljs.spec/t_cljs$spec29795");
});

cljs.spec.__GT_t_cljs$spec29795 = (function cljs$spec$and_spec_impl_$___GT_t_cljs$spec29795(and_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta29796){
return (new cljs.spec.t_cljs$spec29795(and_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta29796));
});

}

return (new cljs.spec.t_cljs$spec29795(cljs$spec$and_spec_impl,forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'every'
 */
cljs.spec.every_impl = (function cljs$spec$every_impl(var_args){
var args29800 = [];
var len__28078__auto___29809 = arguments.length;
var i__28079__auto___29810 = (0);
while(true){
if((i__28079__auto___29810 < len__28078__auto___29809)){
args29800.push((arguments[i__28079__auto___29810]));

var G__29811 = (i__28079__auto___29810 + (1));
i__28079__auto___29810 = G__29811;
continue;
} else {
}
break;
}

var G__29802 = args29800.length;
switch (G__29802) {
case 3:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29800.length)].join('')));

}
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,pred,opts){
return cljs.spec.every_impl.call(null,form,pred,opts,null);
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__29803,gfn){
var map__29804 = p__29803;
var map__29804__$1 = ((((!((map__29804 == null)))?((((map__29804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29804):map__29804);
var opts = map__29804__$1;
var count = cljs.core.get.call(null,map__29804__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var max_count = cljs.core.get.call(null,map__29804__$1,new cljs.core.Keyword(null,"max-count","max-count",1539185305));
var min_count = cljs.core.get.call(null,map__29804__$1,new cljs.core.Keyword(null,"min-count","min-count",1594709013));
var distinct = cljs.core.get.call(null,map__29804__$1,new cljs.core.Keyword(null,"distinct","distinct",-1788879121));
var gen_max = cljs.core.get.call(null,map__29804__$1,new cljs.core.Keyword(null,"gen-max","gen-max",-793680445),(20));
var gen_into = cljs.core.get.call(null,map__29804__$1,new cljs.core.Keyword(null,"gen-into","gen-into",-1047890542),cljs.core.PersistentVector.EMPTY);
var kfn = cljs.core.get.call(null,map__29804__$1,new cljs.core.Keyword("cljs.spec","kfn","cljs.spec/kfn",293196937));
var check_QMARK_ = ((function (map__29804,map__29804__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (p1__29798_SHARP_){
return cljs.spec.valid_QMARK_.call(null,pred,p1__29798_SHARP_);
});})(map__29804,map__29804__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;
var kfn__$1 = (function (){var or__27003__auto__ = kfn;
if(cljs.core.truth_(or__27003__auto__)){
return or__27003__auto__;
} else {
return ((function (or__27003__auto__,check_QMARK_,map__29804,map__29804__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (i,v){
return i;
});
;})(or__27003__auto__,check_QMARK_,map__29804,map__29804__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
}
})();
if(typeof cljs.spec.t_cljs$spec29806 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec29806 = (function (form,max_count,check_QMARK_,gfn,gen_max,p__29803,pred,map__29804,distinct,kfn,gen_into,count,min_count,opts,meta29807){
this.form = form;
this.max_count = max_count;
this.check_QMARK_ = check_QMARK_;
this.gfn = gfn;
this.gen_max = gen_max;
this.p__29803 = p__29803;
this.pred = pred;
this.map__29804 = map__29804;
this.distinct = distinct;
this.kfn = kfn;
this.gen_into = gen_into;
this.count = count;
this.min_count = min_count;
this.opts = opts;
this.meta29807 = meta29807;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec29806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (check_QMARK_,kfn__$1,map__29804,map__29804__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_29808,meta29807__$1){
var self__ = this;
var _29808__$1 = this;
return (new cljs.spec.t_cljs$spec29806(self__.form,self__.max_count,self__.check_QMARK_,self__.gfn,self__.gen_max,self__.p__29803,self__.pred,self__.map__29804,self__.distinct,self__.kfn,self__.gen_into,self__.count,self__.min_count,self__.opts,meta29807__$1));
});})(check_QMARK_,kfn__$1,map__29804,map__29804__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec29806.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (check_QMARK_,kfn__$1,map__29804,map__29804__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_29808){
var self__ = this;
var _29808__$1 = this;
return self__.meta29807;
});})(check_QMARK_,kfn__$1,map__29804,map__29804__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec29806.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec29806.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (check_QMARK_,kfn__$1,map__29804,map__29804__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var or__27003__auto__ = !(cljs.core.seqable_QMARK_.call(null,x));
if(or__27003__auto__){
return or__27003__auto__;
} else {
var or__27003__auto____$1 = (function (){var and__26991__auto__ = self__.distinct;
if(cljs.core.truth_(and__26991__auto__)){
return (!(cljs.core.empty_QMARK_.call(null,x))) && (cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core.distinct_QMARK_,x)));
} else {
return and__26991__auto__;
}
})();
if(cljs.core.truth_(or__27003__auto____$1)){
return or__27003__auto____$1;
} else {
var or__27003__auto____$2 = (function (){var and__26991__auto__ = self__.count;
if(cljs.core.truth_(and__26991__auto__)){
return cljs.core.not_EQ_.call(null,self__.count,cljs.core.bounded_count.call(null,(self__.count + (1)),x));
} else {
return and__26991__auto__;
}
})();
if(cljs.core.truth_(or__27003__auto____$2)){
return or__27003__auto____$2;
} else {
var and__26991__auto__ = (function (){var or__27003__auto____$3 = self__.min_count;
if(cljs.core.truth_(or__27003__auto____$3)){
return or__27003__auto____$3;
} else {
return self__.max_count;
}
})();
if(cljs.core.truth_(and__26991__auto__)){
return !((((function (){var or__27003__auto____$3 = self__.min_count;
if(cljs.core.truth_(or__27003__auto____$3)){
return or__27003__auto____$3;
} else {
return (0);
}
})() <= cljs.core.bounded_count.call(null,(cljs.core.truth_(self__.max_count)?(self__.max_count + (1)):self__.min_count),x))) && ((cljs.core.bounded_count.call(null,(cljs.core.truth_(self__.max_count)?(self__.max_count + (1)):self__.min_count),x) <= (function (){var or__27003__auto____$3 = self__.max_count;
if(cljs.core.truth_(or__27003__auto____$3)){
return or__27003__auto____$3;
} else {
return cljs.spec.MAX_INT;
}
})())));
} else {
return and__26991__auto__;
}
}
}
}
})())){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
if(cljs.core.indexed_QMARK_.call(null,x)){
var step = (function (){var x__27334__auto__ = (1);
var y__27335__auto__ = cljs.core.long$.call(null,(cljs.core.count.call(null,x) / cljs.spec._STAR_coll_check_limit_STAR_));
return ((x__27334__auto__ > y__27335__auto__) ? x__27334__auto__ : y__27335__auto__);
})();
var i = (0);
while(true){
if((i >= cljs.core.count.call(null,x))){
return x;
} else {
if(cljs.core.truth_(self__.check_QMARK_.call(null,cljs.core.nth.call(null,x,i)))){
var G__29813 = (i + step);
i = G__29813;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
break;
}
} else {
var or__27003__auto__ = (function (){var and__26991__auto__ = cljs.core.every_QMARK_.call(null,self__.check_QMARK_,cljs.core.take.call(null,cljs.spec._STAR_coll_check_limit_STAR_,x));
if(and__26991__auto__){
return x;
} else {
return and__26991__auto__;
}
})();
if(cljs.core.truth_(or__27003__auto__)){
return or__27003__auto__;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}

}
});})(check_QMARK_,kfn__$1,map__29804,map__29804__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec29806.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (check_QMARK_,kfn__$1,map__29804,map__29804__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return x;
});})(check_QMARK_,kfn__$1,map__29804,map__29804__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec29806.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (check_QMARK_,kfn__$1,map__29804,map__29804__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.seqable_QMARK_.call(null,x))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"seqable?","seqable?",72462495,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
if(cljs.core.truth_((function (){var and__26991__auto__ = self__.distinct;
if(cljs.core.truth_(and__26991__auto__)){
return (!(cljs.core.empty_QMARK_.call(null,x))) && (cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core.distinct_QMARK_,x)));
} else {
return and__26991__auto__;
}
})())){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"distinct?","distinct?",-1684357959,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
if(cljs.core.truth_((function (){var and__26991__auto__ = self__.count;
if(cljs.core.truth_(and__26991__auto__)){
return cljs.core.not_EQ_.call(null,self__.count,cljs.core.bounded_count.call(null,self__.count,x));
} else {
return and__26991__auto__;
}
})())){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__27837__auto__ = self__.count;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27837__auto__);
})(),(function (){var x__27837__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","%","cljs.spec/%",-1625123498,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27837__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
if(cljs.core.truth_((function (){var and__26991__auto__ = (function (){var or__27003__auto__ = self__.min_count;
if(cljs.core.truth_(or__27003__auto__)){
return or__27003__auto__;
} else {
return self__.max_count;
}
})();
if(cljs.core.truth_(and__26991__auto__)){
return !((((function (){var or__27003__auto__ = self__.min_count;
if(cljs.core.truth_(or__27003__auto__)){
return or__27003__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count.call(null,(cljs.core.truth_(self__.max_count)?(self__.max_count + (1)):self__.min_count),x))) && ((cljs.core.bounded_count.call(null,(cljs.core.truth_(self__.max_count)?(self__.max_count + (1)):self__.min_count),x) <= (function (){var or__27003__auto__ = self__.max_count;
if(cljs.core.truth_(or__27003__auto__)){
return or__27003__auto__;
} else {
return cljs.spec.MAX_INT;
}
})())));
} else {
return and__26991__auto__;
}
})())){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null)),(function (){var x__27837__auto__ = (function (){var or__27003__auto__ = self__.min_count;
if(cljs.core.truth_(or__27003__auto__)){
return or__27003__auto__;
} else {
return (0);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27837__auto__);
})(),(function (){var x__27837__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","%","cljs.spec/%",-1625123498,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27837__auto__);
})(),(function (){var x__27837__auto__ = (function (){var or__27003__auto__ = self__.max_count;
if(cljs.core.truth_(or__27003__auto__)){
return or__27003__auto__;
} else {
return new cljs.core.Symbol("js","Number.MAX_SAFE_INTEGER","js/Number.MAX_SAFE_INTEGER",-1535627560,null);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27837__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.take.call(null,cljs.spec._STAR_coll_error_limit_STAR_,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (___$1,check_QMARK_,kfn__$1,map__29804,map__29804__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (i,v){
var k = self__.kfn.call(null,i,v);
if(cljs.core.truth_(self__.check_QMARK_.call(null,v))){
return null;
} else {
var prob = cljs.spec.explain_1.call(null,self__.form,self__.pred,cljs.core.conj.call(null,path,k),via,cljs.core.conj.call(null,in$,k),v);
return prob;
}
});})(___$1,check_QMARK_,kfn__$1,map__29804,map__29804__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
,cljs.core.range.call(null),x))));

}
}
}
}
});})(check_QMARK_,kfn__$1,map__29804,map__29804__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec29806.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (check_QMARK_,kfn__$1,map__29804,map__29804__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var init = cljs.core.empty.call(null,self__.gen_into);
var pgen = cljs.spec.gensub.call(null,self__.pred,overrides,path,rmap,self__.form);
return cljs.spec.impl.gen.fmap.call(null,((function (init,pgen,___$1,check_QMARK_,kfn__$1,map__29804,map__29804__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (p1__29799_SHARP_){
if(cljs.core.vector_QMARK_.call(null,init)){
return p1__29799_SHARP_;
} else {
return cljs.core.into.call(null,init,p1__29799_SHARP_);
}
});})(init,pgen,___$1,check_QMARK_,kfn__$1,map__29804,map__29804__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
,(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-elements","num-elements",1960422107),self__.count,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null)):cljs.spec.impl.gen.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-elements","min-elements",949370780),(function (){var or__27003__auto__ = self__.min_count;
if(cljs.core.truth_(or__27003__auto__)){
return or__27003__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"max-elements","max-elements",433034073),(function (){var or__27003__auto__ = self__.max_count;
if(cljs.core.truth_(or__27003__auto__)){
return or__27003__auto__;
} else {
var x__27334__auto__ = self__.gen_max;
var y__27335__auto__ = ((2) * (function (){var or__27003__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__27003__auto____$1)){
return or__27003__auto____$1;
} else {
return (0);
}
})());
return ((x__27334__auto__ > y__27335__auto__) ? x__27334__auto__ : y__27335__auto__);
}
})(),new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null))):(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector.call(null,pgen,self__.count):(cljs.core.truth_((function (){var or__27003__auto__ = self__.min_count;
if(cljs.core.truth_(or__27003__auto__)){
return or__27003__auto__;
} else {
return self__.max_count;
}
})())?cljs.spec.impl.gen.vector.call(null,pgen,(function (){var or__27003__auto__ = self__.min_count;
if(cljs.core.truth_(or__27003__auto__)){
return or__27003__auto__;
} else {
return (0);
}
})(),(function (){var or__27003__auto__ = self__.max_count;
if(cljs.core.truth_(or__27003__auto__)){
return or__27003__auto__;
} else {
var x__27334__auto__ = self__.gen_max;
var y__27335__auto__ = ((2) * (function (){var or__27003__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__27003__auto____$1)){
return or__27003__auto____$1;
} else {
return (0);
}
})());
return ((x__27334__auto__ > y__27335__auto__) ? x__27334__auto__ : y__27335__auto__);
}
})()):cljs.spec.impl.gen.vector.call(null,pgen,(0),self__.gen_max)
))));
}
});})(check_QMARK_,kfn__$1,map__29804,map__29804__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec29806.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (check_QMARK_,kfn__$1,map__29804,map__29804__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.every_impl.call(null,self__.form,self__.pred,self__.opts,gfn__$1);
});})(check_QMARK_,kfn__$1,map__29804,map__29804__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec29806.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (check_QMARK_,kfn__$1,map__29804,map__29804__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","every","cljs.spec/every",-1899705480,null)),(function (){var x__27837__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27837__auto__);
})(),cljs.core.mapcat.call(null,cljs.core.identity,self__.opts))));
});})(check_QMARK_,kfn__$1,map__29804,map__29804__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec29806.getBasis = ((function (check_QMARK_,kfn__$1,map__29804,map__29804__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"max-count","max-count",-1115250464,null),new cljs.core.Symbol(null,"check?","check?",409539557,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"gen-max","gen-max",846851082,null),new cljs.core.Symbol(null,"p__29803","p__29803",-1139630516,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"map__29804","map__29804",1580790577,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"kfn","kfn",729311001,null),new cljs.core.Symbol(null,"gen-into","gen-into",592640985,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"min-count","min-count",-1059726756,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta29807","meta29807",2068052358,null)], null);
});})(check_QMARK_,kfn__$1,map__29804,map__29804__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.t_cljs$spec29806.cljs$lang$type = true;

cljs.spec.t_cljs$spec29806.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec29806";

cljs.spec.t_cljs$spec29806.cljs$lang$ctorPrWriter = ((function (check_QMARK_,kfn__$1,map__29804,map__29804__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function (this__27609__auto__,writer__27610__auto__,opt__27611__auto__){
return cljs.core._write.call(null,writer__27610__auto__,"cljs.spec/t_cljs$spec29806");
});})(check_QMARK_,kfn__$1,map__29804,map__29804__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

cljs.spec.__GT_t_cljs$spec29806 = ((function (check_QMARK_,kfn__$1,map__29804,map__29804__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn){
return (function cljs$spec$__GT_t_cljs$spec29806(form__$1,max_count__$1,check_QMARK___$1,gfn__$1,gen_max__$1,p__29803__$1,pred__$1,map__29804__$2,distinct__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,meta29807){
return (new cljs.spec.t_cljs$spec29806(form__$1,max_count__$1,check_QMARK___$1,gfn__$1,gen_max__$1,p__29803__$1,pred__$1,map__29804__$2,distinct__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,meta29807));
});})(check_QMARK_,kfn__$1,map__29804,map__29804__$1,opts,count,max_count,min_count,distinct,gen_max,gen_into,kfn))
;

}

return (new cljs.spec.t_cljs$spec29806(form,max_count,check_QMARK_,gfn,gen_max,p__29803,pred,map__29804__$1,distinct,kfn__$1,gen_into,count,min_count,opts,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.every_impl.cljs$lang$maxFixedArity = 4;

cljs.spec.accept = (function cljs$spec$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),new cljs.core.Keyword(null,"ret","ret",-468222814),x], null);
});
cljs.spec.accept_QMARK_ = (function cljs$spec$accept_QMARK_(p__29814){
var map__29817 = p__29814;
var map__29817__$1 = ((((!((map__29817 == null)))?((((map__29817.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29817.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29817):map__29817);
var op = cljs.core.get.call(null,map__29817__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
return cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),op);
});
cljs.spec.pcat_STAR_ = (function cljs$spec$pcat_STAR_(p__29819){
var map__29831 = p__29819;
var map__29831__$1 = ((((!((map__29831 == null)))?((((map__29831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29831):map__29831);
var vec__29832 = cljs.core.get.call(null,map__29831__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__29833 = cljs.core.seq.call(null,vec__29832);
var first__29834 = cljs.core.first.call(null,seq__29833);
var seq__29833__$1 = cljs.core.next.call(null,seq__29833);
var p1 = first__29834;
var pr = seq__29833__$1;
var ps = vec__29832;
var vec__29835 = cljs.core.get.call(null,map__29831__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__29836 = cljs.core.seq.call(null,vec__29835);
var first__29837 = cljs.core.first.call(null,seq__29836);
var seq__29836__$1 = cljs.core.next.call(null,seq__29836);
var k1 = first__29837;
var kr = seq__29836__$1;
var ks = vec__29835;
var vec__29838 = cljs.core.get.call(null,map__29831__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var seq__29839 = cljs.core.seq.call(null,vec__29838);
var first__29840 = cljs.core.first.call(null,seq__29839);
var seq__29839__$1 = cljs.core.next.call(null,seq__29839);
var f1 = first__29840;
var fr = seq__29839__$1;
var forms = vec__29838;
var ret = cljs.core.get.call(null,map__29831__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var rep_PLUS_ = cljs.core.get.call(null,map__29831__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ps)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
var rp = new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.call(null,ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.fromArray([k1,rp], true, false):rp));
if(pr){
return cljs$spec$pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),fr,new cljs.core.Keyword(null,"ret","ret",-468222814),ret__$1], null));
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"rep+","rep+",-281382396),rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.pcat = (function cljs$spec$pcat(var_args){
var args__28085__auto__ = [];
var len__28078__auto___29843 = arguments.length;
var i__28079__auto___29844 = (0);
while(true){
if((i__28079__auto___29844 < len__28078__auto___29843)){
args__28085__auto__.push((arguments[i__28079__auto___29844]));

var G__29845 = (i__28079__auto___29844 + (1));
i__28079__auto___29844 = G__29845;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});

cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY], null));
});

cljs.spec.pcat.cljs$lang$maxFixedArity = (0);

cljs.spec.pcat.cljs$lang$applyTo = (function (seq29842){
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29842));
});

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.cat_impl = (function cljs$spec$cat_impl(ks,ps,forms){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.rep_STAR_ = (function cljs$spec$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),new cljs.core.Keyword(null,"p2","p2",905500641),p2,new cljs.core.Keyword(null,"splice","splice",449588165),splice,new cljs.core.Keyword(null,"forms","forms",2045992350),form,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null)], null);
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p2,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)));
} else {
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p1,new cljs.core.Keyword(null,"ret","ret",-468222814),ret);
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.rep_impl = (function cljs$spec$rep_impl(form,p){
return cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.rep_PLUS_impl = (function cljs$spec$rep_PLUS_impl(form,p){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__27837__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27837__auto__);
})(),(function (){var x__27837__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null)),(function (){var x__27837__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27837__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27837__auto__);
})())))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"rep+","rep+",-281382396),form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.amp_impl = (function cljs$spec$amp_impl(re,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),new cljs.core.Keyword(null,"p1","p1",-936759954),re,new cljs.core.Keyword(null,"ps","ps",292358046),preds,new cljs.core.Keyword(null,"forms","forms",2045992350),pred_forms], null);
});
cljs.spec.filter_alt = (function cljs$spec$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__27003__auto__ = ks;
if(cljs.core.truth_(or__27003__auto__)){
return or__27003__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.call(null,(function (p1__29846_SHARP_){
return f.call(null,cljs.core.first.call(null,p1__29846_SHARP_));
}),cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__27003__auto__ = cljs.core.seq.call(null,ks);
if(or__27003__auto__){
return or__27003__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__27003__auto__ = cljs.core.seq.call(null,forms);
if(or__27003__auto__){
return or__27003__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq.call(null,cljs.core.map.call(null,((function (pks){
return (function (p1__29847_SHARP_){
return cljs.core.nth.call(null,p1__29847_SHARP_,(2));
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.filter.call(null,f,ps)),ks,forms], null);
}
});
cljs.spec.alt_STAR_ = (function cljs$spec$alt_STAR_(ps,ks,forms){
var vec__29857 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.core.identity);
var vec__29860 = cljs.core.nth.call(null,vec__29857,(0),null);
var seq__29861 = cljs.core.seq.call(null,vec__29860);
var first__29862 = cljs.core.first.call(null,seq__29861);
var seq__29861__$1 = cljs.core.next.call(null,seq__29861);
var p1 = first__29862;
var pr = seq__29861__$1;
var ps__$1 = vec__29860;
var vec__29863 = cljs.core.nth.call(null,vec__29857,(1),null);
var k1 = cljs.core.nth.call(null,vec__29863,(0),null);
var ks__$1 = vec__29863;
var forms__$1 = cljs.core.nth.call(null,vec__29857,(2),null);
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),new cljs.core.Keyword(null,"ps","ps",292358046),ps__$1,new cljs.core.Keyword(null,"ks","ks",1900203942),ks__$1,new cljs.core.Keyword(null,"forms","forms",2045992350),forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.spec.accept.call(null,cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)], null)));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alts = (function cljs$spec$alts(var_args){
var args__28085__auto__ = [];
var len__28078__auto___29867 = arguments.length;
var i__28079__auto___29868 = (0);
while(true){
if((i__28079__auto___29868 < len__28078__auto___29867)){
args__28085__auto__.push((arguments[i__28079__auto___29868]));

var G__29869 = (i__28079__auto___29868 + (1));
i__28079__auto___29868 = G__29869;
continue;
} else {
}
break;
}

var argseq__28086__auto__ = ((((0) < args__28085__auto__.length))?(new cljs.core.IndexedSeq(args__28085__auto__.slice((0)),(0),null)):null);
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__28086__auto__);
});

cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alt_STAR_.call(null,ps,null,null);
});

cljs.spec.alts.cljs$lang$maxFixedArity = (0);

cljs.spec.alts.cljs$lang$applyTo = (function (seq29866){
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29866));
});

cljs.spec.alt2 = (function cljs$spec$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__26991__auto__ = p1;
if(cljs.core.truth_(and__26991__auto__)){
return p2;
} else {
return and__26991__auto__;
}
})())){
return cljs.spec.alts.call(null,p1,p2);
} else {
var or__27003__auto__ = p1;
if(cljs.core.truth_(or__27003__auto__)){
return or__27003__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alt_impl = (function cljs$spec$alt_impl(ks,ps,forms){
return cljs.core.assoc.call(null,cljs.spec.alt_STAR_.call(null,ps,ks,forms),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null));
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.maybe_impl = (function cljs$spec$maybe_impl(p,form){
return cljs.core.assoc.call(null,cljs.spec.alt_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.accept.call(null,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718)], null)),new cljs.core.Keyword(null,"maybe","maybe",-314397560),form);
});
cljs.spec.noret_QMARK_ = (function cljs$spec$noret_QMARK_(p1,pret){
var or__27003__auto__ = cljs.core._EQ_.call(null,pret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718));
if(or__27003__auto__){
return or__27003__auto__;
} else {
var or__27003__auto____$1 = (function (){var and__26991__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),null], null), null).call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(cljs.spec.reg_resolve_BANG_.call(null,p1)));
if(cljs.core.truth_(and__26991__auto__)){
return cljs.core.empty_QMARK_.call(null,pret);
} else {
return and__26991__auto__;
}
})();
if(cljs.core.truth_(or__27003__auto____$1)){
return or__27003__auto____$1;
} else {
return null;
}
}
});
cljs.spec.accept_nil_QMARK_ = (function cljs$spec$accept_nil_QMARK_(p){
var map__29873 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__29873__$1 = ((((!((map__29873 == null)))?((((map__29873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29873):map__29873);
var p__$1 = map__29873__$1;
var op = cljs.core.get.call(null,map__29873__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__29873__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var p1 = cljs.core.get.call(null,map__29873__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__29873__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.call(null,map__29873__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__29875 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__29875)){
return true;
} else {
if(cljs.core._EQ_.call(null,null,G__29875)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__29875)){
var and__26991__auto__ = cljs$spec$accept_nil_QMARK_.call(null,p1);
if(cljs.core.truth_(and__26991__auto__)){
var or__27003__auto__ = cljs.spec.noret_QMARK_.call(null,p1,cljs.spec.preturn.call(null,p1));
if(cljs.core.truth_(or__27003__auto__)){
return or__27003__auto__;
} else {
var ret = cljs.spec.and_preds.call(null,cljs.spec.preturn.call(null,p1),ps,cljs.core.next.call(null,forms));
return cljs.core.not_EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
}
} else {
return and__26991__auto__;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__29875)){
var or__27003__auto__ = (p1 === p2);
if(or__27003__auto__){
return or__27003__auto__;
} else {
return cljs$spec$accept_nil_QMARK_.call(null,p1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__29875)){
return cljs.core.every_QMARK_.call(null,cljs$spec$accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__29875)){
return cljs.core.some.call(null,cljs$spec$accept_nil_QMARK_,ps);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.preturn = (function cljs$spec$preturn(p){
var map__29894 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__29894__$1 = ((((!((map__29894 == null)))?((((map__29894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29894):map__29894);
var p__$1 = map__29894__$1;
var vec__29895 = cljs.core.get.call(null,map__29894__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__29896 = cljs.core.seq.call(null,vec__29895);
var first__29897 = cljs.core.first.call(null,seq__29896);
var seq__29896__$1 = cljs.core.next.call(null,seq__29896);
var p0 = first__29897;
var pr = seq__29896__$1;
var ps = vec__29895;
var vec__29898 = cljs.core.get.call(null,map__29894__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__29898,(0),null);
var ks = vec__29898;
var op = cljs.core.get.call(null,map__29894__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__29894__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__29894__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__29894__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__29902 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__29902)){
return ret;
} else {
if(cljs.core._EQ_.call(null,null,G__29902)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__29902)){
var pret = cljs$spec$preturn.call(null,p1);
if(cljs.core.truth_(cljs.spec.noret_QMARK_.call(null,p1,pret))){
return new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718);
} else {
return cljs.spec.and_preds.call(null,pret,ps,forms);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__29902)){
return cljs.spec.add_ret.call(null,p1,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__29902)){
return cljs.spec.add_ret.call(null,p0,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__29902)){
var vec__29903 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.spec.accept_nil_QMARK_);
var vec__29906 = cljs.core.nth.call(null,vec__29903,(0),null);
var p0__$1 = cljs.core.nth.call(null,vec__29906,(0),null);
var vec__29909 = cljs.core.nth.call(null,vec__29903,(1),null);
var k0 = cljs.core.nth.call(null,vec__29909,(0),null);
var r = (((p0__$1 == null))?new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718):cljs$spec$preturn.call(null,p0__$1));
if(cljs.core.truth_(k0)){
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k0,r], null));
} else {
return r;
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.op_unform = (function cljs$spec$op_unform(p,x){
var map__29928 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__29928__$1 = ((((!((map__29928 == null)))?((((map__29928.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29928.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29928):map__29928);
var p__$1 = map__29928__$1;
var vec__29929 = cljs.core.get.call(null,map__29928__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__29930 = cljs.core.seq.call(null,vec__29929);
var first__29931 = cljs.core.first.call(null,seq__29930);
var seq__29930__$1 = cljs.core.next.call(null,seq__29930);
var p0 = first__29931;
var pr = seq__29930__$1;
var ps = vec__29929;
var vec__29932 = cljs.core.get.call(null,map__29928__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__29932,(0),null);
var ks = vec__29932;
var op = cljs.core.get.call(null,map__29928__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__29928__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__29928__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__29928__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var rep_PLUS_ = cljs.core.get.call(null,map__29928__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__29928__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
var kps = cljs.core.zipmap.call(null,ks,ps);
var G__29936 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__29936)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.call(null,null,G__29936)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform.call(null,p__$1,x)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__29936)){
var px = cljs.core.reduce.call(null,((function (G__29936,map__29928,map__29928__$1,p__$1,vec__29929,seq__29930,first__29931,seq__29930__$1,p0,pr,ps,vec__29932,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__29913_SHARP_,p2__29912_SHARP_){
return cljs.spec.unform.call(null,p2__29912_SHARP_,p1__29913_SHARP_);
});})(G__29936,map__29928,map__29928__$1,p__$1,vec__29929,seq__29930,first__29931,seq__29930__$1,p0,pr,ps,vec__29932,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse.call(null,ps));
return cljs$spec$op_unform.call(null,p1,px);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__29936)){
return cljs.core.mapcat.call(null,((function (G__29936,map__29928,map__29928__$1,p__$1,vec__29929,seq__29930,first__29931,seq__29930__$1,p0,pr,ps,vec__29932,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__29914_SHARP_){
return cljs$spec$op_unform.call(null,p1,p1__29914_SHARP_);
});})(G__29936,map__29928,map__29928__$1,p__$1,vec__29929,seq__29930,first__29931,seq__29930__$1,p0,pr,ps,vec__29932,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__29936)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.call(null,((function (G__29936,map__29928,map__29928__$1,p__$1,vec__29929,seq__29930,first__29931,seq__29930__$1,p0,pr,ps,vec__29932,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__29915_SHARP_){
return cljs$spec$op_unform.call(null,p0,p1__29915_SHARP_);
});})(G__29936,map__29928,map__29928__$1,p__$1,vec__29929,seq__29930,first__29931,seq__29930__$1,p0,pr,ps,vec__29932,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
return cljs.core.mapcat.call(null,((function (G__29936,map__29928,map__29928__$1,p__$1,vec__29929,seq__29930,first__29931,seq__29930__$1,p0,pr,ps,vec__29932,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (k__$1){
if(cljs.core.contains_QMARK_.call(null,x,k__$1)){
return cljs$spec$op_unform.call(null,kps.call(null,k__$1),cljs.core.get.call(null,x,k__$1));
} else {
return null;
}
});})(G__29936,map__29928,map__29928__$1,p__$1,vec__29929,seq__29930,first__29931,seq__29930__$1,p0,pr,ps,vec__29932,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,ks);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__29936)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform.call(null,p0,x)], null);
} else {
var vec__29937 = x;
var k__$1 = cljs.core.nth.call(null,vec__29937,(0),null);
var v = cljs.core.nth.call(null,vec__29937,(1),null);
return cljs$spec$op_unform.call(null,kps.call(null,k__$1),v);
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.add_ret = (function cljs$spec$add_ret(p,r,k){
var map__29943 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__29943__$1 = ((((!((map__29943 == null)))?((((map__29943.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29943.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29943):map__29943);
var p__$1 = map__29943__$1;
var op = cljs.core.get.call(null,map__29943__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__29943__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var splice = cljs.core.get.call(null,map__29943__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var prop = ((function (map__29943,map__29943__$1,p__$1,op,ps,splice){
return (function (){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core.empty_QMARK_.call(null,ret)){
return r;
} else {
return (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj).call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
});})(map__29943,map__29943__$1,p__$1,op,ps,splice))
;
var G__29945 = op;
if(cljs.core._EQ_.call(null,null,G__29945)){
return r;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__29945)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__29945)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__29945)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__29945)){
return prop.call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__29945)){
return prop.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.deriv = (function cljs$spec$deriv(p,x){
var map__29956 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__29956__$1 = ((((!((map__29956 == null)))?((((map__29956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29956):map__29956);
var p__$1 = map__29956__$1;
var vec__29957 = cljs.core.get.call(null,map__29956__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__29958 = cljs.core.seq.call(null,vec__29957);
var first__29959 = cljs.core.first.call(null,seq__29958);
var seq__29958__$1 = cljs.core.next.call(null,seq__29958);
var p0 = first__29959;
var pr = seq__29958__$1;
var ps = vec__29957;
var vec__29960 = cljs.core.get.call(null,map__29956__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__29961 = cljs.core.seq.call(null,vec__29960);
var first__29962 = cljs.core.first.call(null,seq__29961);
var seq__29961__$1 = cljs.core.next.call(null,seq__29961);
var k0 = first__29962;
var kr = seq__29961__$1;
var ks = vec__29960;
var op = cljs.core.get.call(null,map__29956__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__29956__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__29956__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__29956__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var splice = cljs.core.get.call(null,map__29956__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var forms = cljs.core.get.call(null,map__29956__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
if(cljs.core.truth_(p__$1)){
var G__29964 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__29964)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__29964)){
var ret__$1 = cljs.spec.dt.call(null,p__$1,x,p__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),ret__$1)){
return null;
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__29964)){
var temp__4425__auto__ = cljs$spec$deriv.call(null,p1,x);
if(cljs.core.truth_(temp__4425__auto__)){
var p1__$1 = temp__4425__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(p1__$1))){
var ret__$1 = cljs.spec.and_preds.call(null,cljs.spec.preturn.call(null,p1__$1),ps,cljs.core.next.call(null,forms));
if(cljs.core._EQ_.call(null,ret__$1,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return null;
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
return cljs.spec.amp_impl.call(null,p1__$1,ps,forms);
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__29964)){
return cljs.spec.alt2.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.cons.call(null,cljs$spec$deriv.call(null,p0,x),pr),new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),ret], null)),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p0))?cljs$spec$deriv.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.next.call(null,forms),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.spec.add_ret.call(null,p0,ret,k0)], null)),x):null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__29964)){
return cljs.spec.alt_STAR_.call(null,cljs.core.map.call(null,((function (G__29964,map__29956,map__29956__$1,p__$1,vec__29957,seq__29958,first__29959,seq__29958__$1,p0,pr,ps,vec__29960,seq__29961,first__29962,seq__29961__$1,k0,kr,ks,op,p1,p2,ret,splice,forms){
return (function (p1__29946_SHARP_){
return cljs$spec$deriv.call(null,p1__29946_SHARP_,x);
});})(G__29964,map__29956,map__29956__$1,p__$1,vec__29957,seq__29958,first__29959,seq__29958__$1,p0,pr,ps,vec__29960,seq__29961,first__29962,seq__29961__$1,k0,kr,ks,op,p1,p2,ret,splice,forms))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__29964)){
return cljs.spec.alt2.call(null,cljs.spec.rep_STAR_.call(null,cljs$spec$deriv.call(null,p1,x),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))?cljs$spec$deriv.call(null,cljs.spec.rep_STAR_.call(null,p2,p2,cljs.spec.add_ret.call(null,p1,ret,null),splice,forms),x):null));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_describe = (function cljs$spec$op_describe(p){
var map__29968 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__29968__$1 = ((((!((map__29968 == null)))?((((map__29968.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29968.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29968):map__29968);
var p__$1 = map__29968__$1;
var op = cljs.core.get.call(null,map__29968__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__29968__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__29968__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__29968__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__29968__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__29968__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var rep_PLUS_ = cljs.core.get.call(null,map__29968__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__29968__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
if(cljs.core.truth_(p__$1)){
var G__29970 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__29970)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__29970)){
return p__$1;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__29970)){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("clojure.spec","&","clojure.spec/&",-770935491,null),cljs$spec$op_describe.call(null,p1),forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__29970)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core._conj.call(null,(function (){var x__27837__auto__ = rep_PLUS_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27837__auto__);
})(),new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),cljs.core.mapcat.call(null,cljs.core.vector,(function (){var or__27003__auto__ = cljs.core.seq.call(null,ks);
if(or__27003__auto__){
return or__27003__auto__;
} else {
return cljs.core.repeat.call(null,new cljs.core.Keyword(null,"_","_",1453416199));
}
})(),(function (){var or__27003__auto__ = cljs.core.seq.call(null,forms);
if(or__27003__auto__){
return or__27003__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})()));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__29970)){
if(cljs.core.truth_(maybe)){
return cljs.core._conj.call(null,(function (){var x__27837__auto__ = maybe;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27837__auto__);
})(),new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","alt","cljs.spec/alt",157113396,null),cljs.core.mapcat.call(null,cljs.core.vector,ks,forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__29970)){
var x__27837__auto__ = (cljs.core.truth_(splice)?new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null):new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null));
return cljs.core._conj.call(null,(function (){var x__27837__auto____$1 = forms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27837__auto____$1);
})(),x__27837__auto__);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_explain = (function cljs$spec$op_explain(form,p,path,via,in$,input){
var vec__29984 = input;
var x = cljs.core.nth.call(null,vec__29984,(0),null);
var input__$1 = vec__29984;
var map__29987 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__29987__$1 = ((((!((map__29987 == null)))?((((map__29987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29987):map__29987);
var p__$1 = map__29987__$1;
var op = cljs.core.get.call(null,map__29987__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__29987__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__29987__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__29987__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__29987__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__29987__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__29987__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var via__$1 = (function (){var temp__4423__auto__ = cljs.spec.spec_name.call(null,p__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var name = temp__4423__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})();
var insufficient = ((function (vec__29984,x,input__$1,map__29987,map__29987__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return cljs.core.PersistentArrayMap.fromArray([path__$1,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),"Insufficient input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form__$1),new cljs.core.Keyword(null,"val","val",128701612),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"via","via",-1904457336),via__$1,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
});})(vec__29984,x,input__$1,map__29987,map__29987__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__29989 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__29989)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__29989)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,form);
} else {
return cljs.spec.explain_1.call(null,form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__29989)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))){
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1));
} else {
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p1));
}
} else {
var temp__4423__auto__ = cljs.spec.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__4423__auto__)){
var p1__$1 = temp__4423__auto__;
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1__$1));
} else {
return cljs$spec$op_explain.call(null,cljs.spec.op_describe.call(null,p1),p1,path,via__$1,in$,input__$1);
}
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__29989)){
var pkfs = cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__27003__auto__ = cljs.core.seq.call(null,ks);
if(or__27003__auto__){
return or__27003__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__27003__auto__ = cljs.core.seq.call(null,forms);
if(or__27003__auto__){
return or__27003__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
var vec__29990 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,pkfs)))?cljs.core.first.call(null,pkfs):cljs.core.first.call(null,cljs.core.remove.call(null,((function (pkfs,G__29989,vec__29984,x,input__$1,map__29987,map__29987__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__29993){
var vec__29994 = p__29993;
var p__$2 = cljs.core.nth.call(null,vec__29994,(0),null);
return cljs.spec.accept_nil_QMARK_.call(null,p__$2);
});})(pkfs,G__29989,vec__29984,x,input__$1,map__29987,map__29987__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.call(null,vec__29990,(0),null);
var k = cljs.core.nth.call(null,vec__29990,(1),null);
var form__$1 = cljs.core.nth.call(null,vec__29990,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path);
var form__$2 = (function (){var or__27003__auto__ = form__$1;
if(cljs.core.truth_(or__27003__auto__)){
return or__27003__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})();
if((cljs.core.empty_QMARK_.call(null,input__$1)) && (cljs.core.not.call(null,pred))){
return insufficient.call(null,path__$1,form__$2);
} else {
return cljs$spec$op_explain.call(null,form__$2,pred,path__$1,via__$1,in$,input__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__29989)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p__$1));
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (G__29989,vec__29984,x,input__$1,map__29987,map__29987__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
return cljs$spec$op_explain.call(null,(function (){var or__27003__auto__ = form__$1;
if(cljs.core.truth_(or__27003__auto__)){
return or__27003__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})(),pred,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),via__$1,in$,input__$1);
});})(G__29989,vec__29984,x,input__$1,map__29987,map__29987__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__27003__auto__ = cljs.core.seq.call(null,ks);
if(or__27003__auto__){
return or__27003__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__27003__auto__ = cljs.core.seq.call(null,forms);
if(or__27003__auto__){
return or__27003__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__29989)){
return cljs$spec$op_explain.call(null,(((p1 === p2))?forms:cljs.spec.op_describe.call(null,p1)),p1,path,via__$1,in$,input__$1);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.re_gen = (function cljs$spec$re_gen(p,overrides,path,rmap,f){
var map__30003 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__30003__$1 = ((((!((map__30003 == null)))?((((map__30003.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30003.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30003):map__30003);
var p__$1 = map__30003__$1;
var op = cljs.core.get.call(null,map__30003__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__30003__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__30003__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var p1 = cljs.core.get.call(null,map__30003__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__30003__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.call(null,map__30003__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__30003__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ret = cljs.core.get.call(null,map__30003__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var id = cljs.core.get.call(null,map__30003__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.inck.call(null,rmap,id):rmap);
var ggens = ((function (map__30003,map__30003__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__30003,map__30003__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1){
return (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__26991__auto__ = rmap__$1;
if(cljs.core.truth_(and__26991__auto__)){
var and__26991__auto____$1 = id;
if(cljs.core.truth_(and__26991__auto____$1)){
var and__26991__auto____$2 = k;
if(cljs.core.truth_(and__26991__auto____$2)){
return cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,path,k);
} else {
return and__26991__auto____$2;
}
} else {
return and__26991__auto____$1;
}
} else {
return and__26991__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (map__30003,map__30003__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1){
return (function (){
return cljs$spec$re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__27003__auto__ = f__$1;
if(cljs.core.truth_(or__27003__auto__)){
return or__27003__auto__;
} else {
return p__$2;
}
})());
});})(map__30003,map__30003__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1))
,null)));
} else {
return cljs$spec$re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__27003__auto__ = f__$1;
if(cljs.core.truth_(or__27003__auto__)){
return or__27003__auto__;
} else {
return p__$2;
}
})());
}
}
});})(map__30003,map__30003__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1))
;
return cljs.core.map.call(null,gen,ps__$1,(function (){var or__27003__auto__ = cljs.core.seq.call(null,ks__$1);
if(or__27003__auto__){
return or__27003__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__27003__auto__ = cljs.core.seq.call(null,forms__$1);
if(or__27003__auto__){
return or__27003__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
});})(map__30003,map__30003__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1))
;
var or__27003__auto__ = (function (){var temp__4425__auto__ = cljs.core.get.call(null,overrides,path);
if(cljs.core.truth_(temp__4425__auto__)){
var g = temp__4425__auto__;
var G__30006 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"accept","accept",1874130431),G__30006)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
if(cljs.core._EQ_.call(null,null,G__30006)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__27003__auto__)){
return or__27003__auto__;
} else {
if(cljs.core.truth_(p__$1)){
var G__30007 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__30007)){
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.spec.impl.gen.return$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null));
}
} else {
if(cljs.core._EQ_.call(null,null,G__30007)){
var temp__4425__auto__ = cljs.spec.gensub.call(null,p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__4425__auto__)){
var g = temp__4425__auto__;
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__30007)){
return cljs$spec$re_gen.call(null,p1,overrides,path,rmap__$1,cljs.spec.op_describe.call(null,p1));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__30007)){
var gens = ggens.call(null,ps,ks,forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gens)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__30007)){
var gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,ggens.call(null,ps,ks,forms));
if(cljs.core.empty_QMARK_.call(null,gens)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gens);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__30007)){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
var temp__4425__auto__ = cljs$spec$re_gen.call(null,p2,overrides,path,rmap__$1,forms);
if(cljs.core.truth_(temp__4425__auto__)){
var g = temp__4425__auto__;
return cljs.spec.impl.gen.fmap.call(null,((function (g,temp__4425__auto__,G__30007,or__27003__auto__,map__30003,map__30003__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1,ggens){
return (function (p1__29997_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__29997_SHARP_);
});})(g,temp__4425__auto__,G__30007,or__27003__auto__,map__30003,map__30003__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1,ggens))
,cljs.spec.impl.gen.vector.call(null,g));
} else {
return null;
}
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
});
cljs.spec.re_conform = (function cljs$spec$re_conform(p,p__30008){
while(true){
var vec__30012 = p__30008;
var seq__30013 = cljs.core.seq.call(null,vec__30012);
var first__30014 = cljs.core.first.call(null,seq__30013);
var seq__30013__$1 = cljs.core.next.call(null,seq__30013);
var x = first__30014;
var xs = seq__30013__$1;
var data = vec__30012;
if(cljs.core.empty_QMARK_.call(null,data)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p))){
var ret = cljs.spec.preturn.call(null,p);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return null;
} else {
return ret;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
var temp__4423__auto__ = cljs.spec.deriv.call(null,p,x);
if(cljs.core.truth_(temp__4423__auto__)){
var dp = temp__4423__auto__;
var G__30015 = dp;
var G__30016 = xs;
p = G__30015;
p__30008 = G__30016;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
break;
}
});
cljs.spec.re_explain = (function cljs$spec$re_explain(path,via,in$,re,input){
var p = re;
var G__30030 = input;
var vec__30031 = G__30030;
var seq__30032 = cljs.core.seq.call(null,vec__30031);
var first__30033 = cljs.core.first.call(null,seq__30032);
var seq__30032__$1 = cljs.core.next.call(null,seq__30032);
var x = first__30033;
var xs = seq__30032__$1;
var data = vec__30031;
var i = (0);
var p__$1 = p;
var G__30030__$1 = G__30030;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__30034 = G__30030__$1;
var seq__30035 = cljs.core.seq.call(null,vec__30034);
var first__30036 = cljs.core.first.call(null,seq__30035);
var seq__30035__$1 = cljs.core.next.call(null,seq__30035);
var x__$1 = first__30036;
var xs__$1 = seq__30035__$1;
var data__$1 = vec__30034;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_.call(null,data__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p__$2))){
return null;
} else {
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__4423__auto__ = cljs.spec.deriv.call(null,p__$2,x__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var dp = temp__4423__auto__;
var G__30037 = dp;
var G__30038 = xs__$1;
var G__30039 = (i__$2 + (1));
p__$1 = G__30037;
G__30030__$1 = G__30038;
i__$1 = G__30039;
continue;
} else {
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p__$2))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(p__$2),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649))){
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,re)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], true, false);
}
} else {
var or__27003__auto__ = cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
if(cljs.core.truth_(or__27003__auto__)){
return or__27003__auto__;
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,p__$2)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], true, false);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.regex_spec_impl = (function cljs$spec$regex_spec_impl(re,gfn){
if(typeof cljs.spec.t_cljs$spec30043 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec30043 = (function (regex_spec_impl,re,gfn,meta30044){
this.regex_spec_impl = regex_spec_impl;
this.re = re;
this.gfn = gfn;
this.meta30044 = meta30044;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec30043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30045,meta30044__$1){
var self__ = this;
var _30045__$1 = this;
return (new cljs.spec.t_cljs$spec30043(self__.regex_spec_impl,self__.re,self__.gfn,meta30044__$1));
});

cljs.spec.t_cljs$spec30043.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30045){
var self__ = this;
var _30045__$1 = this;
return self__.meta30044;
});

cljs.spec.t_cljs$spec30043.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec30043.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_conform.call(null,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});

cljs.spec.t_cljs$spec30043.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_unform.call(null,self__.re,x);
});

cljs.spec.t_cljs$spec30043.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_explain.call(null,path,via,in$,self__.re,cljs.core.seq.call(null,x));
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,self__.re)),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
}
});

cljs.spec.t_cljs$spec30043.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.re_gen.call(null,self__.re,overrides,path,rmap,cljs.spec.op_describe.call(null,self__.re));
}
});

cljs.spec.t_cljs$spec30043.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.regex_spec_impl.call(null,self__.re,gfn__$1);
});

cljs.spec.t_cljs$spec30043.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_describe.call(null,self__.re);
});

cljs.spec.t_cljs$spec30043.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"regex-spec-impl","regex-spec-impl",1541266692,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'spec' with a regex op argument"], null)),new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta30044","meta30044",-770898027,null)], null);
});

cljs.spec.t_cljs$spec30043.cljs$lang$type = true;

cljs.spec.t_cljs$spec30043.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec30043";

cljs.spec.t_cljs$spec30043.cljs$lang$ctorPrWriter = (function (this__27609__auto__,writer__27610__auto__,opt__27611__auto__){
return cljs.core._write.call(null,writer__27610__auto__,"cljs.spec/t_cljs$spec30043");
});

cljs.spec.__GT_t_cljs$spec30043 = (function cljs$spec$regex_spec_impl_$___GT_t_cljs$spec30043(regex_spec_impl__$1,re__$1,gfn__$1,meta30044){
return (new cljs.spec.t_cljs$spec30043(regex_spec_impl__$1,re__$1,gfn__$1,meta30044));
});

}

return (new cljs.spec.t_cljs$spec30043(cljs$spec$regex_spec_impl,re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.call_valid_QMARK_ = (function cljs$spec$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.core._EQ_.call(null,cargs,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return null;
} else {
var ret = cljs.core.apply.call(null,f,args);
var cret = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__26991__auto__ = cljs.core.not_EQ_.call(null,cret,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
if(and__26991__auto__){
if(cljs.core.truth_(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.valid_QMARK_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return true;
}
} else {
return and__26991__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.validate_fn = (function cljs$spec$validate_fn(f,specs,iters){
var g = cljs.spec.gen.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.impl.gen.for_all_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (g){
return (function (p1__30046_SHARP_){
return cljs.spec.call_valid_QMARK_.call(null,f,specs,p1__30046_SHARP_);
});})(g))
);
var ret = cljs.spec.impl.gen.quick_check.call(null,iters,prop);
var temp__4423__auto__ = new cljs.core.Keyword(null,"smallest","smallest",-152623883).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__4423__auto__)){
var vec__30050 = temp__4423__auto__;
var smallest = cljs.core.nth.call(null,vec__30050,(0),null);
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.fspec_impl = (function cljs$spec$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
var specs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),argspec,new cljs.core.Keyword(null,"ret","ret",-468222814),retspec,new cljs.core.Keyword(null,"fn","fn",-1175266204),fnspec], null);
if(typeof cljs.spec.t_cljs$spec30059 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
cljs.spec.t_cljs$spec30059 = (function (fspec_impl,argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta30060){
this.fspec_impl = fspec_impl;
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta30060 = meta30060;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec30059.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_30061,meta30060__$1){
var self__ = this;
var _30061__$1 = this;
return (new cljs.spec.t_cljs$spec30059(self__.fspec_impl,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta30060__$1));
});})(specs))
;

cljs.spec.t_cljs$spec30059.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_30061){
var self__ = this;
var _30061__$1 = this;
return self__.meta30060;
});})(specs))
;

cljs.spec.t_cljs$spec30059.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
return (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,self__.specs,k);
});})(specs))
;

cljs.spec.t_cljs$spec30059.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
return (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.call(null,self__.specs,k,not_found);
});})(specs))
;

cljs.spec.t_cljs$spec30059.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec30059.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
if((f === cljs.spec.validate_fn.call(null,f,self__.specs,cljs.spec._STAR_fspec_iterations_STAR_))){
return f;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(specs))
;

cljs.spec.t_cljs$spec30059.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
});})(specs))
;

cljs.spec.t_cljs$spec30059.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs){
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
var args = cljs.spec.validate_fn.call(null,f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.call(null,f,args);
}catch (e30062){if((e30062 instanceof Error)){
var t = e30062;
return t;
} else {
throw e30062;

}
}})();
if((ret instanceof Error)){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"fn","fn",465265323,null)),new cljs.core.Keyword(null,"val","val",128701612),args,new cljs.core.Keyword(null,"reason","reason",-2070751759),ret.message,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
var cret = cljs.spec.dt.call(null,self__.retspec,ret,self__.rform);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cret)){
return cljs.spec.explain_1.call(null,self__.rform,self__.retspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"ret","ret",-468222814)),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.conform.call(null,self__.argspec,args);
return cljs.spec.explain_1.call(null,self__.fform,self__.fnspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"fn","fn",-1175266204)),via,in$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return null;
}
}
}
}
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Keyword(null,"val","val",128701612),f,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
}
});})(specs))
;

cljs.spec.t_cljs$spec30059.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs){
return (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.return$.call(null,((function (___$4,specs){
return (function() { 
var G__30065__delegate = function (args){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,self__.argspec,args))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str((function (){var sb__27989__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_30063_30066 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_30064_30067 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_30063_30066,_STAR_print_fn_STAR_30064_30067,sb__27989__auto__,___$4,specs){
return (function (x__27990__auto__){
return sb__27989__auto__.append(x__27990__auto__);
});})(_STAR_print_newline_STAR_30063_30066,_STAR_print_fn_STAR_30064_30067,sb__27989__auto__,___$4,specs))
;

try{cljs.spec.explain.call(null,self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30064_30067;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30063_30066;
}
return [cljs.core.str(sb__27989__auto__)].join('');
})()),cljs.core.str("\n"),cljs.core.str("(valid? argspec args)")].join('')));
}

return cljs.spec.impl.gen.generate.call(null,cljs.spec.gen.call(null,self__.retspec));
};
var G__30065 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30068__i = 0, G__30068__a = new Array(arguments.length -  0);
while (G__30068__i < G__30068__a.length) {G__30068__a[G__30068__i] = arguments[G__30068__i + 0]; ++G__30068__i;}
  args = new cljs.core.IndexedSeq(G__30068__a,0);
} 
return G__30065__delegate.call(this,args);};
G__30065.cljs$lang$maxFixedArity = 0;
G__30065.cljs$lang$applyTo = (function (arglist__30069){
var args = cljs.core.seq(arglist__30069);
return G__30065__delegate(args);
});
G__30065.cljs$core$IFn$_invoke$arity$variadic = G__30065__delegate;
return G__30065;
})()
;})(___$4,specs))
);
}
});})(specs))
;

cljs.spec.t_cljs$spec30059.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1);
});})(specs))
;

cljs.spec.t_cljs$spec30059.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"args","args",1315556576)),(function (){var x__27837__auto__ = self__.aform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27837__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ret","ret",-468222814)),(function (){var x__27837__auto__ = self__.rform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27837__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fn","fn",-1175266204)),(function (){var x__27837__auto__ = self__.fform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__27837__auto__);
})())));
});})(specs))
;

cljs.spec.t_cljs$spec30059.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fspec-impl","fspec-impl",897021908,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'fspec'"], null)),new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"meta30060","meta30060",-1052282596,null)], null);
});})(specs))
;

cljs.spec.t_cljs$spec30059.cljs$lang$type = true;

cljs.spec.t_cljs$spec30059.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec30059";

cljs.spec.t_cljs$spec30059.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__27609__auto__,writer__27610__auto__,opt__27611__auto__){
return cljs.core._write.call(null,writer__27610__auto__,"cljs.spec/t_cljs$spec30059");
});})(specs))
;

cljs.spec.__GT_t_cljs$spec30059 = ((function (specs){
return (function cljs$spec$fspec_impl_$___GT_t_cljs$spec30059(fspec_impl__$1,argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta30060){
return (new cljs.spec.t_cljs$spec30059(fspec_impl__$1,argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta30060));
});})(specs))
;

}

return (new cljs.spec.t_cljs$spec30059(cljs$spec$fspec_impl,argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.def_impl.call(null,new cljs.core.Keyword("cljs.spec","any","cljs.spec/any",1039429974),cljs.core.list(new cljs.core.Symbol("cljs.spec","spec","cljs.spec/spec",775251713,null),cljs.core.list(new cljs.core.Symbol("cljs.core","constantly","cljs.core/constantly",119002258,null),true),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol("cljs.spec.impl.gen","any","cljs.spec.impl.gen/any",-1450752257,null)),cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.core","constantly","cljs.core/constantly",119002258,null),true),cljs.core.constantly.call(null,true),cljs.spec.impl.gen.any,null));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("cljs.spec","kvs->map","cljs.spec/kvs->map",-1189105441),cljs.core.list(new cljs.core.Symbol("cljs.spec","conformer","cljs.spec/conformer",-236330417,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30070#","p1__30070#",-946539064,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__30070#","p1__30070#",-946539064,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__30070#","p1__30070#",-946539064,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30071#","p1__30071#",-1967628932,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"p1__30071#","p1__30071#",-1967628932,null)))),cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30070#","p1__30070#",-946539064,null)], null),cljs.core.list(new cljs.core.Symbol(null,"zipmap","zipmap",-690049687,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__30070#","p1__30070#",-946539064,null)),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__30070#","p1__30070#",-946539064,null)))),(function (p1__30070_SHARP_){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),p1__30070_SHARP_),cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),p1__30070_SHARP_));
}),null,true,(function (p1__30071_SHARP_){
return cljs.core.map.call(null,(function (p__30072){
var vec__30073 = p__30072;
var k = cljs.core.nth.call(null,vec__30073,(0),null);
var v = cljs.core.nth.call(null,vec__30073,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),k,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),v], null);
}),p1__30071_SHARP_);
})));
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.exercise = (function cljs$spec$exercise(var_args){
var args30077 = [];
var len__28078__auto___30080 = arguments.length;
var i__28079__auto___30081 = (0);
while(true){
if((i__28079__auto___30081 < len__28078__auto___30080)){
args30077.push((arguments[i__28079__auto___30081]));

var G__30082 = (i__28079__auto___30081 + (1));
i__28079__auto___30081 = G__30082;
continue;
} else {
}
break;
}

var G__30079 = args30077.length;
switch (G__30079) {
case 1:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30077.length)].join('')));

}
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.exercise.call(null,spec,(10));
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.exercise.call(null,spec,n,null);
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.call(null,(function (p1__30076_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__30076_SHARP_,cljs.spec.conform.call(null,spec,p1__30076_SHARP_)],null));
}),cljs.spec.impl.gen.sample.call(null,cljs.spec.gen.call(null,spec,overrides),n));
});

cljs.spec.exercise.cljs$lang$maxFixedArity = 3;

/**
 * returns a predicate function that checks *coll-check-limit* items in a collection with pred
 */
cljs.spec.coll_checker = (function cljs$spec$coll_checker(pred){
var check_QMARK_ = (function (p1__30084_SHARP_){
return cljs.spec.valid_QMARK_.call(null,pred,p1__30084_SHARP_);
});
return ((function (check_QMARK_){
return (function (coll){
return ((coll == null)) || ((cljs.core.coll_QMARK_.call(null,coll)) && (cljs.core.every_QMARK_.call(null,check_QMARK_,cljs.core.take.call(null,cljs.spec._STAR_coll_check_limit_STAR_,coll))));
});
;})(check_QMARK_))
});
/**
 * returns a function of no args that returns a generator of
 *   collections of items conforming to pred, with the same shape as
 *   init-coll
 */
cljs.spec.coll_gen = (function cljs$spec$coll_gen(pred,init_coll){
var init = cljs.core.empty.call(null,init_coll);
return ((function (init){
return (function (){
return cljs.spec.impl.gen.fmap.call(null,((function (init){
return (function (p1__30085_SHARP_){
if(cljs.core.vector_QMARK_.call(null,init)){
return p1__30085_SHARP_;
} else {
return cljs.core.into.call(null,init,p1__30085_SHARP_);
}
});})(init))
,cljs.spec.impl.gen.vector.call(null,cljs.spec.gen.call(null,pred)));
});
;})(init))
});
/**
 * Return true if inst at or after start and before end
 */
cljs.spec.inst_in_range_QMARK_ = (function cljs$spec$inst_in_range_QMARK_(start,end,inst){
var and__26991__auto__ = cljs.core.inst_QMARK_.call(null,inst);
if(and__26991__auto__){
var t = cljs.core.inst_ms.call(null,inst);
return ((cljs.core.inst_ms.call(null,start) <= t)) && ((t < cljs.core.inst_ms.call(null,end)));
} else {
return and__26991__auto__;
}
});
/**
 * Return true if start <= val and val < end
 */
cljs.spec.int_in_range_QMARK_ = (function cljs$spec$int_in_range_QMARK_(start,end,val){
if(cljs.core.integer_QMARK_.call(null,val)){
return ((start <= val)) && ((val < end));
} else {
if((val instanceof goog.math.Long)){
var and__26991__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__26991__auto__)){
return val.lessThan(end);
} else {
return and__26991__auto__;
}
} else {
if((val instanceof goog.math.Integer)){
var and__26991__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__26991__auto__)){
return val.lessThan(end);
} else {
return and__26991__auto__;
}
} else {
return false;

}
}
}
});

//# sourceMappingURL=spec.js.map