// Compiled by ClojureScript 1.9.89 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__28915){
var map__28940 = p__28915;
var map__28940__$1 = ((((!((map__28940 == null)))?((((map__28940.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28940.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28940):map__28940);
var m = map__28940__$1;
var n = cljs.core.get.call(null,map__28940__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__28940__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__28942_28964 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28943_28965 = null;
var count__28944_28966 = (0);
var i__28945_28967 = (0);
while(true){
if((i__28945_28967 < count__28944_28966)){
var f_28968 = cljs.core._nth.call(null,chunk__28943_28965,i__28945_28967);
cljs.core.println.call(null,"  ",f_28968);

var G__28969 = seq__28942_28964;
var G__28970 = chunk__28943_28965;
var G__28971 = count__28944_28966;
var G__28972 = (i__28945_28967 + (1));
seq__28942_28964 = G__28969;
chunk__28943_28965 = G__28970;
count__28944_28966 = G__28971;
i__28945_28967 = G__28972;
continue;
} else {
var temp__4425__auto___28973 = cljs.core.seq.call(null,seq__28942_28964);
if(temp__4425__auto___28973){
var seq__28942_28974__$1 = temp__4425__auto___28973;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28942_28974__$1)){
var c__27558__auto___28975 = cljs.core.chunk_first.call(null,seq__28942_28974__$1);
var G__28976 = cljs.core.chunk_rest.call(null,seq__28942_28974__$1);
var G__28977 = c__27558__auto___28975;
var G__28978 = cljs.core.count.call(null,c__27558__auto___28975);
var G__28979 = (0);
seq__28942_28964 = G__28976;
chunk__28943_28965 = G__28977;
count__28944_28966 = G__28978;
i__28945_28967 = G__28979;
continue;
} else {
var f_28980 = cljs.core.first.call(null,seq__28942_28974__$1);
cljs.core.println.call(null,"  ",f_28980);

var G__28981 = cljs.core.next.call(null,seq__28942_28974__$1);
var G__28982 = null;
var G__28983 = (0);
var G__28984 = (0);
seq__28942_28964 = G__28981;
chunk__28943_28965 = G__28982;
count__28944_28966 = G__28983;
i__28945_28967 = G__28984;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28985 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__26747__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__26747__auto__)){
return or__26747__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28985);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28985)))?cljs.core.second.call(null,arglists_28985):arglists_28985));
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
var seq__28946_28986 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28947_28987 = null;
var count__28948_28988 = (0);
var i__28949_28989 = (0);
while(true){
if((i__28949_28989 < count__28948_28988)){
var vec__28950_28990 = cljs.core._nth.call(null,chunk__28947_28987,i__28949_28989);
var name_28991 = cljs.core.nth.call(null,vec__28950_28990,(0),null);
var map__28953_28992 = cljs.core.nth.call(null,vec__28950_28990,(1),null);
var map__28953_28993__$1 = ((((!((map__28953_28992 == null)))?((((map__28953_28992.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28953_28992.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28953_28992):map__28953_28992);
var doc_28994 = cljs.core.get.call(null,map__28953_28993__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28995 = cljs.core.get.call(null,map__28953_28993__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28991);

cljs.core.println.call(null," ",arglists_28995);

if(cljs.core.truth_(doc_28994)){
cljs.core.println.call(null," ",doc_28994);
} else {
}

var G__28996 = seq__28946_28986;
var G__28997 = chunk__28947_28987;
var G__28998 = count__28948_28988;
var G__28999 = (i__28949_28989 + (1));
seq__28946_28986 = G__28996;
chunk__28947_28987 = G__28997;
count__28948_28988 = G__28998;
i__28949_28989 = G__28999;
continue;
} else {
var temp__4425__auto___29000 = cljs.core.seq.call(null,seq__28946_28986);
if(temp__4425__auto___29000){
var seq__28946_29001__$1 = temp__4425__auto___29000;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28946_29001__$1)){
var c__27558__auto___29002 = cljs.core.chunk_first.call(null,seq__28946_29001__$1);
var G__29003 = cljs.core.chunk_rest.call(null,seq__28946_29001__$1);
var G__29004 = c__27558__auto___29002;
var G__29005 = cljs.core.count.call(null,c__27558__auto___29002);
var G__29006 = (0);
seq__28946_28986 = G__29003;
chunk__28947_28987 = G__29004;
count__28948_28988 = G__29005;
i__28949_28989 = G__29006;
continue;
} else {
var vec__28955_29007 = cljs.core.first.call(null,seq__28946_29001__$1);
var name_29008 = cljs.core.nth.call(null,vec__28955_29007,(0),null);
var map__28958_29009 = cljs.core.nth.call(null,vec__28955_29007,(1),null);
var map__28958_29010__$1 = ((((!((map__28958_29009 == null)))?((((map__28958_29009.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28958_29009.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28958_29009):map__28958_29009);
var doc_29011 = cljs.core.get.call(null,map__28958_29010__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29012 = cljs.core.get.call(null,map__28958_29010__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29008);

cljs.core.println.call(null," ",arglists_29012);

if(cljs.core.truth_(doc_29011)){
cljs.core.println.call(null," ",doc_29011);
} else {
}

var G__29013 = cljs.core.next.call(null,seq__28946_29001__$1);
var G__29014 = null;
var G__29015 = (0);
var G__29016 = (0);
seq__28946_28986 = G__29013;
chunk__28947_28987 = G__29014;
count__28948_28988 = G__29015;
i__28949_28989 = G__29016;
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

var seq__28960 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28961 = null;
var count__28962 = (0);
var i__28963 = (0);
while(true){
if((i__28963 < count__28962)){
var role = cljs.core._nth.call(null,chunk__28961,i__28963);
var temp__4425__auto___29017__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4425__auto___29017__$1)){
var spec_29018 = temp__4425__auto___29017__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_29018));
} else {
}

var G__29019 = seq__28960;
var G__29020 = chunk__28961;
var G__29021 = count__28962;
var G__29022 = (i__28963 + (1));
seq__28960 = G__29019;
chunk__28961 = G__29020;
count__28962 = G__29021;
i__28963 = G__29022;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq.call(null,seq__28960);
if(temp__4425__auto____$1){
var seq__28960__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28960__$1)){
var c__27558__auto__ = cljs.core.chunk_first.call(null,seq__28960__$1);
var G__29023 = cljs.core.chunk_rest.call(null,seq__28960__$1);
var G__29024 = c__27558__auto__;
var G__29025 = cljs.core.count.call(null,c__27558__auto__);
var G__29026 = (0);
seq__28960 = G__29023;
chunk__28961 = G__29024;
count__28962 = G__29025;
i__28963 = G__29026;
continue;
} else {
var role = cljs.core.first.call(null,seq__28960__$1);
var temp__4425__auto___29027__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4425__auto___29027__$2)){
var spec_29028 = temp__4425__auto___29027__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_29028));
} else {
}

var G__29029 = cljs.core.next.call(null,seq__28960__$1);
var G__29030 = null;
var G__29031 = (0);
var G__29032 = (0);
seq__28960 = G__29029;
chunk__28961 = G__29030;
count__28962 = G__29031;
i__28963 = G__29032;
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