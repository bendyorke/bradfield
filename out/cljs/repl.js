// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29171){
var map__29196 = p__29171;
var map__29196__$1 = ((((!((map__29196 == null)))?((((map__29196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29196):map__29196);
var m = map__29196__$1;
var n = cljs.core.get.call(null,map__29196__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29196__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29198_29220 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29199_29221 = null;
var count__29200_29222 = (0);
var i__29201_29223 = (0);
while(true){
if((i__29201_29223 < count__29200_29222)){
var f_29224 = cljs.core._nth.call(null,chunk__29199_29221,i__29201_29223);
cljs.core.println.call(null,"  ",f_29224);

var G__29225 = seq__29198_29220;
var G__29226 = chunk__29199_29221;
var G__29227 = count__29200_29222;
var G__29228 = (i__29201_29223 + (1));
seq__29198_29220 = G__29225;
chunk__29199_29221 = G__29226;
count__29200_29222 = G__29227;
i__29201_29223 = G__29228;
continue;
} else {
var temp__4425__auto___29229 = cljs.core.seq.call(null,seq__29198_29220);
if(temp__4425__auto___29229){
var seq__29198_29230__$1 = temp__4425__auto___29229;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29198_29230__$1)){
var c__27814__auto___29231 = cljs.core.chunk_first.call(null,seq__29198_29230__$1);
var G__29232 = cljs.core.chunk_rest.call(null,seq__29198_29230__$1);
var G__29233 = c__27814__auto___29231;
var G__29234 = cljs.core.count.call(null,c__27814__auto___29231);
var G__29235 = (0);
seq__29198_29220 = G__29232;
chunk__29199_29221 = G__29233;
count__29200_29222 = G__29234;
i__29201_29223 = G__29235;
continue;
} else {
var f_29236 = cljs.core.first.call(null,seq__29198_29230__$1);
cljs.core.println.call(null,"  ",f_29236);

var G__29237 = cljs.core.next.call(null,seq__29198_29230__$1);
var G__29238 = null;
var G__29239 = (0);
var G__29240 = (0);
seq__29198_29220 = G__29237;
chunk__29199_29221 = G__29238;
count__29200_29222 = G__29239;
i__29201_29223 = G__29240;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29241 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__27003__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27003__auto__)){
return or__27003__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29241);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29241)))?cljs.core.second.call(null,arglists_29241):arglists_29241));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29202_29242 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29203_29243 = null;
var count__29204_29244 = (0);
var i__29205_29245 = (0);
while(true){
if((i__29205_29245 < count__29204_29244)){
var vec__29206_29246 = cljs.core._nth.call(null,chunk__29203_29243,i__29205_29245);
var name_29247 = cljs.core.nth.call(null,vec__29206_29246,(0),null);
var map__29209_29248 = cljs.core.nth.call(null,vec__29206_29246,(1),null);
var map__29209_29249__$1 = ((((!((map__29209_29248 == null)))?((((map__29209_29248.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29209_29248.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29209_29248):map__29209_29248);
var doc_29250 = cljs.core.get.call(null,map__29209_29249__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29251 = cljs.core.get.call(null,map__29209_29249__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29247);

cljs.core.println.call(null," ",arglists_29251);

if(cljs.core.truth_(doc_29250)){
cljs.core.println.call(null," ",doc_29250);
} else {
}

var G__29252 = seq__29202_29242;
var G__29253 = chunk__29203_29243;
var G__29254 = count__29204_29244;
var G__29255 = (i__29205_29245 + (1));
seq__29202_29242 = G__29252;
chunk__29203_29243 = G__29253;
count__29204_29244 = G__29254;
i__29205_29245 = G__29255;
continue;
} else {
var temp__4425__auto___29256 = cljs.core.seq.call(null,seq__29202_29242);
if(temp__4425__auto___29256){
var seq__29202_29257__$1 = temp__4425__auto___29256;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29202_29257__$1)){
var c__27814__auto___29258 = cljs.core.chunk_first.call(null,seq__29202_29257__$1);
var G__29259 = cljs.core.chunk_rest.call(null,seq__29202_29257__$1);
var G__29260 = c__27814__auto___29258;
var G__29261 = cljs.core.count.call(null,c__27814__auto___29258);
var G__29262 = (0);
seq__29202_29242 = G__29259;
chunk__29203_29243 = G__29260;
count__29204_29244 = G__29261;
i__29205_29245 = G__29262;
continue;
} else {
var vec__29211_29263 = cljs.core.first.call(null,seq__29202_29257__$1);
var name_29264 = cljs.core.nth.call(null,vec__29211_29263,(0),null);
var map__29214_29265 = cljs.core.nth.call(null,vec__29211_29263,(1),null);
var map__29214_29266__$1 = ((((!((map__29214_29265 == null)))?((((map__29214_29265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29214_29265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29214_29265):map__29214_29265);
var doc_29267 = cljs.core.get.call(null,map__29214_29266__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29268 = cljs.core.get.call(null,map__29214_29266__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29264);

cljs.core.println.call(null," ",arglists_29268);

if(cljs.core.truth_(doc_29267)){
cljs.core.println.call(null," ",doc_29267);
} else {
}

var G__29269 = cljs.core.next.call(null,seq__29202_29257__$1);
var G__29270 = null;
var G__29271 = (0);
var G__29272 = (0);
seq__29202_29242 = G__29269;
chunk__29203_29243 = G__29270;
count__29204_29244 = G__29271;
i__29205_29245 = G__29272;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4425__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4425__auto__)){
var fnspec = temp__4425__auto__;
cljs.core.print.call(null,"Spec");

var seq__29216 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29217 = null;
var count__29218 = (0);
var i__29219 = (0);
while(true){
if((i__29219 < count__29218)){
var role = cljs.core._nth.call(null,chunk__29217,i__29219);
var temp__4425__auto___29273__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4425__auto___29273__$1)){
var spec_29274 = temp__4425__auto___29273__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_29274));
} else {
}

var G__29275 = seq__29216;
var G__29276 = chunk__29217;
var G__29277 = count__29218;
var G__29278 = (i__29219 + (1));
seq__29216 = G__29275;
chunk__29217 = G__29276;
count__29218 = G__29277;
i__29219 = G__29278;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__29216);
if(temp__4425__auto____$1){
var seq__29216__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29216__$1)){
var c__27814__auto__ = cljs.core.chunk_first.call(null,seq__29216__$1);
var G__29279 = cljs.core.chunk_rest.call(null,seq__29216__$1);
var G__29280 = c__27814__auto__;
var G__29281 = cljs.core.count.call(null,c__27814__auto__);
var G__29282 = (0);
seq__29216 = G__29279;
chunk__29217 = G__29280;
count__29218 = G__29281;
i__29219 = G__29282;
continue;
} else {
var role = cljs.core.first.call(null,seq__29216__$1);
var temp__4425__auto___29283__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4425__auto___29283__$2)){
var spec_29284 = temp__4425__auto___29283__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_29284));
} else {
}

var G__29285 = cljs.core.next.call(null,seq__29216__$1);
var G__29286 = null;
var G__29287 = (0);
var G__29288 = (0);
seq__29216 = G__29285;
chunk__29217 = G__29286;
count__29218 = G__29287;
i__29219 = G__29288;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map