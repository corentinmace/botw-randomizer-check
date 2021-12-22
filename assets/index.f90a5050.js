import{r as a,o as q,a as G,b as l,c as s,d as o,n as u,e as n,F as h,f as m,g as w,t as g,h as J,i as Q}from"./vendor.0db312c8.js";const U=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))e(f);new MutationObserver(f=>{for(const x of f)if(x.type==="childList")for(const t of x.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&e(t)}).observe(document,{childList:!0,subtree:!0});function _(f){const x={};return f.integrity&&(x.integrity=f.integrity),f.referrerpolicy&&(x.referrerPolicy=f.referrerpolicy),f.crossorigin==="use-credentials"?x.credentials="include":f.crossorigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function e(f){if(f.ep)return;f.ep=!0;const x=_(f);fetch(f.href,x)}};U();var X=(v,c)=>{const _=v.__vccOpts||v;for(const[e,f]of c)_[e]=f;return _};const Y={setup(){const v=a([]),c=a([]),_=a([]),e=a([]),f=a([]),x=a([]),t=a([]),d=a([]),i=a([]),b=a([]),V=a(""),k=a(!1),p=a(!1),y=a(!1),j=a(!1),C=a(!1),S=a(!1),O=a(!1),z=a(!1),R=a(!1),N=a(!1),T=a(!1),I=a(!1),P=a(!1),F=a(!1),E=a(!1),L=a(!1),B=a(!1),H=a(!1),M=a(!1),A=a(!1),K=a(!1),D=a(!1),W=a(!0);return q(()=>{G.get("api/api.json").then(r=>{console.log(r.data),v.value=r.data.weapons,c.value=r.data.bows,_.value=r.data.shields,e.value=r.data.armors,f.value=r.data.key_items,x.value=r.data.runes,t.value=r.data.materials,d.value=r.data.enemies,i.value=r.data.food,V.value="en"}).catch(r=>console.log(r))}),{completeObjectives:r=>{console.log(r),r.srcElement.parentElement.classList.contains("grayscale")?r.srcElement.parentElement.classList.remove("grayscale"):r.srcElement.parentElement.classList.add("grayscale")},showNames:W,showOptions:D,addToObjectives:r=>{b.value.push(r)},removeFromObjectives:r=>{b.value.splice(r,1)},weapons:v,lang:V,showWeapons:k,showOneHanded:p,showTwoHanded:y,showSpear:j,toggleShow:r=>{r=="weapons"?k.value=!k.value:r=="one-handed"?p.value=!p.value:r=="two-handed"?y.value=!y.value:r=="spear"?j.value=!j.value:r=="bows"?C.value=!C.value:r=="shields"?S.value=!S.value:r=="armors"?O.value=!O.value:r=="heads"?z.value=!z.value:r=="bodies"?R.value=!R.value:r=="legs"?N.value=!N.value:r=="key-items"?T.value=!T.value:r=="saddles"?I.value=!I.value:r=="runes"?P.value=!P.value:r=="materials"?F.value=!F.value:r=="enemies"?E.value=!E.value:r=="material-food"?L.value=!L.value:r=="cooked-food"?B.value=!B.value:r=="food"?H.value=!H.value:r=="roasted"?M.value=!M.value:r=="frozen"?A.value=!A.value:r=="elixir"?K.value=!K.value:r=="options"?D.value=!D.value:r=="names"&&(W.value=!W.value)},bows:c,showBows:C,shields:_,showShields:S,armors:e,showArmors:O,showHeads:z,showBodies:R,showLegs:N,keys:f,showKeys:T,showSaddles:I,runes:x,showRunes:P,objectives:b,materials:t,showMaterials:F,enemies:d,showEnemies:E,showMaterialFood:L,showCookedFood:B,showFood:H,foods:i,showRoasted:M,showFrozen:A,showElixir:K}}},Z={class:"flex flex-col lg:flex-row"},$={class:"lg:min-h-screen lg:max-h-screen min-h-[50vh] justify-center overflow-auto lg:w-9/12 w-full border-solid border-neutral-900 border-r"},ee={class:"backdrop-blur text-left flex justify-between items-center text-m font-bold text-white px-5 py-2"},te=o("h1",null,"Objectives",-1),oe={key:0,class:"flex flex-row flex-wrap w-full text-white p-5 backdrop-blur-md"},le=o("h1",null,"Names",-1),se={class:"flex flex-row flex-wrap w-full text-white py-5"},ne={class:"flex justify-center items-center"},ce=["onDblclick"],re={class:"border p-3 rounded lg:w-20 lg:h-20 w-14 h-14 bg-emerald-700 grayscale"},ae={key:0,class:"py-2"},ie={class:"lg:w-3/12 w-full max-h-screen overflow-auto text-center"},de=o("h1",null,"Weapons",-1),ue={key:0},fe=o("h1",null,"One Handed",-1),he={key:0,class:"flex flex-row flex-wrap w-full text-white py-5 justify-center"},me={class:"flex justify-center items-center"},we=["onClick"],ge={class:"border p-3 backdrop-blur rounded w-14 h-14"},xe={key:0,class:"pt-2"},_e=o("h1",null,"Two Handed",-1),ve={key:1,class:"flex flex-row flex-wrap w-full text-white py-5 justify-center"},be={class:"flex justify-center items-center"},ke=["onClick"],pe={class:"border p-3 backdrop-blur rounded w-14 h-14"},ye={key:0,class:"pt-2"},je=o("h1",null,"Spear",-1),Ce={key:2,class:"flex flex-row flex-wrap w-full text-white py-5 justify-center"},Se={class:"flex justify-center items-center"},Oe=["onClick"],ze={class:"border p-3 backdrop-blur rounded w-14 h-14"},Re={key:0,class:"pt-2"},Ne=o("h1",null,"Bows",-1),Te={key:1},Ie={key:0,class:"flex flex-row flex-wrap w-full text-white py-5 justify-center"},Pe={class:"flex justify-center items-center"},Fe=["onClick"],Ee={class:"border p-3 backdrop-blur rounded w-14 h-14"},Le={key:0,class:"pt-2"},Be=o("h1",null,"Shields",-1),He={key:2},Me={key:0,class:"flex flex-row flex-wrap w-full text-white py-5 justify-center"},Ae={class:"flex justify-center items-center"},Ke=["onClick"],De={class:"border p-3 backdrop-blur rounded w-14 h-14"},We={key:0,class:"pt-2"},Ve=o("h1",null,"Armors",-1),qe={key:3},Ge=o("h1",null,"Head",-1),Je={key:0,class:"flex flex-row flex-wrap w-full text-white py-5 justify-center"},Qe={class:"flex justify-center items-center"},Ue=["onClick"],Xe={class:"border p-3 backdrop-blur rounded w-14 h-14"},Ye={key:0,class:"pt-2"},Ze=o("h1",null,"Body",-1),$e={key:1,class:"flex flex-row flex-wrap w-full text-white py-5 justify-center"},et={class:"flex justify-center items-center"},tt=["onClick"],ot={class:"border p-3 backdrop-blur rounded w-14 h-14"},lt={key:0,class:"pt-2"},st=o("h1",null,"Legs",-1),nt={key:2,class:"flex flex-row flex-wrap w-full text-white py-5 justify-center"},ct={class:"flex justify-center items-center"},rt=["onClick"],at={class:"border p-3 backdrop-blur rounded w-14 h-14"},it={key:0,class:"pt-2"},dt=o("h1",null,"Key Items",-1),ut={key:4},ft={class:"flex flex-row flex-wrap w-full text-white py-5 justify-center"},ht={class:"flex justify-center items-center"},mt=["onClick"],wt={class:"border p-3 backdrop-blur rounded w-14 h-14"},gt={key:0,class:"pt-2"},xt=o("h1",null,"Saddles",-1),_t={key:0,class:"flex flex-row flex-wrap w-full text-white py-5 justify-center"},vt={class:"flex justify-center items-center"},bt=["onClick"],kt={class:"border p-3 backdrop-blur rounded w-14 h-14"},pt={key:0,class:"pt-2"},yt=o("h1",null,"Runes",-1),jt={key:5},Ct={key:0,class:"flex flex-row flex-wrap w-full text-white py-5 justify-center"},St={class:"flex justify-center items-center"},Ot=["onClick"],zt={class:"border p-3 backdrop-blur rounded w-14 h-14"},Rt={key:0,class:"pt-2"},Nt=o("h1",null,"Materials",-1),Tt={key:6},It={class:"flex flex-row flex-wrap w-full text-white py-5 justify-center"},Pt={class:"flex justify-center items-center"},Ft=["onClick"],Et={class:"border p-3 backdrop-blur rounded w-14 h-14"},Lt={key:0,class:"pt-2"},Bt=o("h1",null,"Enemies",-1),Ht={key:7},Mt={key:0,class:"flex flex-row flex-wrap w-full text-white py-5 justify-center"},At={class:"flex justify-center items-center"},Kt=["onClick"],Dt={class:"border p-3 backdrop-blur rounded w-14 h-14"},Wt={key:0,class:"pt-2"},Vt=o("h1",null,"Food",-1),qt={key:8},Gt=o("h1",null,"Raw",-1),Jt={key:0,class:"flex flex-row flex-wrap w-full text-white py-5 justify-center"},Qt={class:"flex justify-center items-center"},Ut=["onClick"],Xt={class:"border p-3 backdrop-blur rounded w-14 h-14"},Yt={key:0,class:"pt-2"},Zt=o("h1",null,"Cooked",-1),$t={key:1,class:"flex flex-row flex-wrap w-full text-white py-5 justify-center"},eo={class:"flex justify-center items-center"},to=["onClick"],oo={class:"border p-3 backdrop-blur rounded w-14 h-14"},lo={key:0,class:"pt-2"},so=o("h1",null,"Roasted",-1),no={key:2,class:"flex flex-row flex-wrap w-full text-white py-5 justify-center"},co={class:"flex justify-center items-center"},ro=["onClick"],ao={class:"border p-3 backdrop-blur rounded w-14 h-14"},io={key:0,class:"pt-2"},uo=o("h1",null,"Frozen",-1),fo={key:3,class:"flex flex-row flex-wrap w-full text-white py-5 justify-center"},ho={class:"flex justify-center items-center"},mo=["onClick"],wo={class:"border p-3 backdrop-blur rounded w-14 h-14"},go={key:0,class:"pt-2"},xo=o("h1",null,"Elixir",-1),_o={key:4,class:"flex flex-row flex-wrap w-full text-white py-5 justify-center"},vo={class:"flex justify-center items-center"},bo=["onClick"],ko={class:"border p-3 backdrop-blur rounded w-14 h-14"},po={key:0,class:"pt-2"},yo=o("p",{class:"text-xs bottom-0 right-6 fixed"},"v.Beta-0.2.0",-1),jo=o("p",{class:"text-xs bottom-4 left-2 fixed text-white"},"Click on the objective to complete it",-1),Co=o("p",{class:"text-xs bottom-0 left-2 fixed text-white"},"Double click to remove it",-1);function So(v,c,_,e,f,x){return l(),s(h,null,[o("div",Z,[o("div",$,[o("div",ee,[te,o("span",{onClick:c[0]||(c[0]=t=>e.toggleShow("options")),class:"icon-equalizer2 cursor-pointer"})]),e.showOptions?(l(),s("div",oe,[o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:c[1]||(c[1]=t=>e.toggleShow("names"))},[o("span",{class:u(["icon-eye px-5",{"icon-eye-blocked":!e.showNames}])},null,2),le])])):n("",!0),o("div",se,[(l(!0),s(h,null,m(e.objectives,(t,d)=>(l(),s("div",ne,[o("div",{class:"flex flex-col items-center w-44 lg:w-56 py-3",onDblclick:i=>e.removeFromObjectives(d)},[o("div",re,[o("div",{class:"w-full h-full",onClick:c[2]||(c[2]=i=>e.completeObjectives(i)),style:w({backgroundImage:"url("+t.image.replace("'","")+")",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"})},null,4)]),e.showNames&&t.names[e.lang]?(l(),s("p",ae,g(t.names[e.lang].replace(/_/g," ")),1)):n("",!0)],40,ce)]))),256))])]),o("div",ie,[o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:c[3]||(c[3]=t=>e.toggleShow("weapons"))},[o("span",{class:u(["icon-menu3 px-5",{"icon-menu4":e.showWeapons}])},null,2),de]),e.showWeapons?(l(),s("div",ue,[o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:c[4]||(c[4]=t=>e.toggleShow("one-handed"))},[o("span",{class:u(["icon-menu3 pr-5 pl-10",{"icon-menu4":e.showOneHanded}])},null,2),fe]),e.showOneHanded?(l(),s("div",he,[(l(!0),s(h,null,m(e.weapons,(t,d)=>(l(),s("div",me,[t.category=="one-handed"?(l(),s("div",{key:0,class:"flex flex-col items-center w-40 py-2",onClick:i=>e.addToObjectives(t)},[o("div",ge,[o("div",{class:"w-full h-full",style:w({backgroundImage:"url("+t.image.replace("'","")+")",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"})},null,4)]),e.showNames&&t.names[e.lang]?(l(),s("p",xe,g(t.names[e.lang].replace(/_/g," ")),1)):n("",!0)],8,we)):n("",!0)]))),256))])):n("",!0),o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:c[5]||(c[5]=t=>e.toggleShow("two-handed"))},[o("span",{class:u(["icon-menu3 pr-5 pl-10",{"icon-menu4":e.showTwoHanded}])},null,2),_e]),e.showTwoHanded?(l(),s("div",ve,[(l(!0),s(h,null,m(e.weapons,(t,d)=>(l(),s("div",be,[t.category=="two-handed"?(l(),s("div",{key:0,class:"flex flex-col items-center w-40 py-2",onClick:i=>e.addToObjectives(t)},[o("div",pe,[o("div",{class:"w-full h-full",style:w({backgroundImage:"url("+t.image.replace("'","")+")",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"})},null,4)]),e.showNames&&t.names[e.lang]?(l(),s("p",ye,g(t.names[e.lang].replace(/_/g," ")),1)):n("",!0)],8,ke)):n("",!0)]))),256))])):n("",!0),o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:c[6]||(c[6]=t=>e.toggleShow("spear"))},[o("span",{class:u(["icon-menu3 pr-5 pl-10",{"icon-menu4":e.showSpear}])},null,2),je]),e.showSpear?(l(),s("div",Ce,[(l(!0),s(h,null,m(e.weapons,(t,d)=>(l(),s("div",Se,[t.category=="spear"?(l(),s("div",{key:0,class:"flex flex-col items-center w-40 py-2",onClick:i=>e.addToObjectives(t)},[o("div",ze,[o("div",{class:"w-full h-full",style:w({backgroundImage:"url("+t.image.replace("'","")+")",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"})},null,4)]),e.showNames&&t.names[e.lang]?(l(),s("p",Re,g(t.names[e.lang].replace(/_/g," ")),1)):n("",!0)],8,Oe)):n("",!0)]))),256))])):n("",!0)])):n("",!0),o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:c[7]||(c[7]=t=>e.toggleShow("bows"))},[o("span",{class:u(["icon-menu3 px-5",{"icon-menu4":e.showBows}])},null,2),Ne]),e.showBows?(l(),s("div",Te,[e.showBows?(l(),s("div",Ie,[(l(!0),s(h,null,m(e.bows,(t,d)=>(l(),s("div",Pe,[o("div",{class:"flex flex-col items-center w-40 py-2",onClick:i=>e.addToObjectives(t)},[o("div",Ee,[o("div",{class:"w-full h-full",style:w({backgroundImage:"url("+t.image.replace("'","")+")",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"})},null,4)]),e.showNames&&t.names[e.lang]?(l(),s("p",Le,g(t.names[e.lang].replace(/_/g," ")),1)):n("",!0)],8,Fe)]))),256))])):n("",!0)])):n("",!0),o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:c[8]||(c[8]=t=>e.toggleShow("shields"))},[o("span",{class:u(["icon-menu3 px-5",{"icon-menu4":e.showShields}])},null,2),Be]),e.showShields?(l(),s("div",He,[e.showShields?(l(),s("div",Me,[(l(!0),s(h,null,m(e.shields,(t,d)=>(l(),s("div",Ae,[o("div",{class:"flex flex-col items-center w-40 py-2",onClick:i=>e.addToObjectives(t)},[o("div",De,[o("div",{class:"w-full h-full",style:w({backgroundImage:"url("+t.image.replace("'","")+")",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"})},null,4)]),e.showNames&&t.names[e.lang]?(l(),s("p",We,g(t.names[e.lang].replace(/_/g," ")),1)):n("",!0)],8,Ke)]))),256))])):n("",!0)])):n("",!0),o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:c[9]||(c[9]=t=>e.toggleShow("armors"))},[o("span",{class:u(["icon-menu3 px-5",{"icon-menu4":e.showArmors}])},null,2),Ve]),e.showArmors?(l(),s("div",qe,[o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:c[10]||(c[10]=t=>e.toggleShow("heads"))},[o("span",{class:u(["icon-menu3 pr-5 pl-10",{"icon-menu4":e.showHeads}])},null,2),Ge]),e.showHeads?(l(),s("div",Je,[(l(!0),s(h,null,m(e.armors,(t,d)=>(l(),s("div",Qe,[t.category=="head"?(l(),s("div",{key:0,class:"flex flex-col items-center w-40 py-2",onClick:i=>e.addToObjectives(t)},[o("div",Xe,[o("div",{class:"w-full h-full",style:w({backgroundImage:"url("+t.image.replace("'","")+")",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"})},null,4)]),e.showNames&&t.names[e.lang]?(l(),s("p",Ye,g(t.names[e.lang].replace(/_/g," ")),1)):n("",!0)],8,Ue)):n("",!0)]))),256))])):n("",!0),o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:c[11]||(c[11]=t=>e.toggleShow("bodies"))},[o("span",{class:u(["icon-menu3 pr-5 pl-10",{"icon-menu4":e.showBodies}])},null,2),Ze]),e.showBodies?(l(),s("div",$e,[(l(!0),s(h,null,m(e.armors,(t,d)=>(l(),s("div",et,[t.category=="body"?(l(),s("div",{key:0,class:"flex flex-col items-center w-40 py-2",onClick:i=>e.addToObjectives(t)},[o("div",ot,[o("div",{class:"w-full h-full",style:w({backgroundImage:"url("+t.image.replace("'","")+")",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"})},null,4)]),e.showNames&&t.names[e.lang]?(l(),s("p",lt,g(t.names[e.lang].replace(/_/g," ")),1)):n("",!0)],8,tt)):n("",!0)]))),256))])):n("",!0),o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:c[12]||(c[12]=t=>e.toggleShow("legs"))},[o("span",{class:u(["icon-menu3 pr-5 pl-10",{"icon-menu4":e.showLegs}])},null,2),st]),e.showLegs?(l(),s("div",nt,[(l(!0),s(h,null,m(e.armors,(t,d)=>(l(),s("div",ct,[t.category=="leg"?(l(),s("div",{key:0,class:"flex flex-col items-center w-40 py-2",onClick:i=>e.addToObjectives(t)},[o("div",at,[o("div",{class:"w-full h-full",style:w({backgroundImage:"url("+t.image.replace("'","")+")",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"})},null,4)]),e.showNames&&t.names[e.lang]?(l(),s("p",it,g(t.names[e.lang].replace(/_/g," ")),1)):n("",!0)],8,rt)):n("",!0)]))),256))])):n("",!0)])):n("",!0),o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:c[13]||(c[13]=t=>e.toggleShow("key-items"))},[o("span",{class:u(["icon-menu3 px-5",{"icon-menu4":e.showKeys}])},null,2),dt]),e.showKeys?(l(),s("div",ut,[o("div",ft,[(l(!0),s(h,null,m(e.keys,(t,d)=>(l(),s("div",ht,[t.category=="key"?(l(),s("div",{key:0,class:"flex flex-col items-center w-40 py-2",onClick:i=>e.addToObjectives(t)},[o("div",wt,[o("div",{class:"w-full h-full",style:w({backgroundImage:"url("+t.image.replace("'","")+")",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"})},null,4)]),e.showNames&&t.names[e.lang]?(l(),s("p",gt,g(t.names[e.lang].replace(/_/g," ")),1)):n("",!0)],8,mt)):n("",!0)]))),256))]),o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:c[14]||(c[14]=t=>e.toggleShow("saddles"))},[o("span",{class:u(["icon-menu3 pr-5 pl-10",{"icon-menu4":e.showSaddles}])},null,2),xt]),e.showSaddles?(l(),s("div",_t,[(l(!0),s(h,null,m(e.keys,(t,d)=>(l(),s("div",vt,[t.category=="saddles"?(l(),s("div",{key:0,class:"flex flex-col items-center w-40 py-2",onClick:i=>e.addToObjectives(t)},[o("div",kt,[o("div",{class:"w-full h-full",style:w({backgroundImage:"url("+t.image.replace("'","")+")",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"})},null,4)]),e.showNames&&t.names[e.lang]?(l(),s("p",pt,g(t.names[e.lang].replace(/_/g," ")),1)):n("",!0)],8,bt)):n("",!0)]))),256))])):n("",!0)])):n("",!0),o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:c[15]||(c[15]=t=>e.toggleShow("runes"))},[o("span",{class:u(["icon-menu3 px-5",{"icon-menu4":e.showRunes}])},null,2),yt]),e.showRunes?(l(),s("div",jt,[e.showRunes?(l(),s("div",Ct,[(l(!0),s(h,null,m(e.runes,(t,d)=>(l(),s("div",St,[o("div",{class:"flex flex-col items-center w-40 py-2",onClick:i=>e.addToObjectives(t)},[o("div",zt,[o("div",{class:"w-full h-full",style:w({backgroundImage:"url("+t.image.replace("'","")+")",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"})},null,4)]),e.showNames&&t.names[e.lang]?(l(),s("p",Rt,g(t.names[e.lang].replace(/_/g," ")),1)):n("",!0)],8,Ot)]))),256))])):n("",!0)])):n("",!0),o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:c[16]||(c[16]=t=>e.toggleShow("materials"))},[o("span",{class:u(["icon-menu3 px-5",{"icon-menu4":e.showMaterials}])},null,2),Nt]),e.showMaterials?(l(),s("div",Tt,[o("div",It,[(l(!0),s(h,null,m(e.materials,(t,d)=>(l(),s("div",Pt,[t.category=="material"?(l(),s("div",{key:0,class:"flex flex-col items-center w-40 py-2",onClick:i=>e.addToObjectives(t)},[o("div",Et,[o("div",{class:"w-full h-full",style:w({backgroundImage:"url("+t.image.replace("'","")+")",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"})},null,4)]),e.showNames&&t.names[e.lang]?(l(),s("p",Lt,g(t.names[e.lang].replace(/_/g," ")),1)):n("",!0)],8,Ft)):n("",!0)]))),256))])])):n("",!0),o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:c[17]||(c[17]=t=>e.toggleShow("enemies"))},[o("span",{class:u(["icon-menu3 px-5",{"icon-menu4":e.showEnemies}])},null,2),Bt]),e.showEnemies?(l(),s("div",Ht,[e.showEnemies?(l(),s("div",Mt,[(l(!0),s(h,null,m(e.enemies,(t,d)=>(l(),s("div",At,[o("div",{class:"flex flex-col items-center w-40 py-2",onClick:i=>e.addToObjectives(t)},[o("div",Dt,[o("div",{class:"w-full h-full",style:w({backgroundImage:"url("+t.image.replace("'","")+")",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"})},null,4)]),e.showNames&&t.names[e.lang]?(l(),s("p",Wt,g(t.names[e.lang].replace(/_/g," ")),1)):n("",!0)],8,Kt)]))),256))])):n("",!0)])):n("",!0),o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:c[18]||(c[18]=t=>e.toggleShow("food"))},[o("span",{class:u(["icon-menu3 px-5",{"icon-menu4":e.showFood}])},null,2),Vt]),e.showFood?(l(),s("div",qt,[o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:c[19]||(c[19]=t=>e.toggleShow("material-food"))},[o("span",{class:u(["icon-menu3 pr-5 pl-10",{"icon-menu4":e.showMaterialFood}])},null,2),Gt]),e.showMaterialFood?(l(),s("div",Jt,[(l(!0),s(h,null,m(e.materials,(t,d)=>(l(),s("div",Qt,[t.category=="food"?(l(),s("div",{key:0,class:"flex flex-col items-center w-40 py-2",onClick:i=>e.addToObjectives(t)},[o("div",Xt,[o("div",{class:"w-full h-full",style:w({backgroundImage:"url("+t.image.replace("'","")+")",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"})},null,4)]),e.showNames&&t.names[e.lang]?(l(),s("p",Yt,g(t.names[e.lang].replace(/_/g," ")),1)):n("",!0)],8,Ut)):n("",!0)]))),256))])):n("",!0),o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:c[20]||(c[20]=t=>e.toggleShow("cooked-food"))},[o("span",{class:u(["icon-menu3 pr-5 pl-10",{"icon-menu4":e.showCookedFood}])},null,2),Zt]),e.showCookedFood?(l(),s("div",$t,[(l(!0),s(h,null,m(e.foods,(t,d)=>(l(),s("div",eo,[t.category=="cooked"?(l(),s("div",{key:0,class:"flex flex-col items-center w-40 py-2",onClick:i=>e.addToObjectives(t)},[o("div",oo,[o("div",{class:"w-full h-full",style:w({backgroundImage:"url("+t.image.replace("'","")+")",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"})},null,4)]),e.showNames&&t.names[e.lang]?(l(),s("p",lo,g(t.names[e.lang].replace(/_/g," ")),1)):n("",!0)],8,to)):n("",!0)]))),256))])):n("",!0),o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:c[21]||(c[21]=t=>e.toggleShow("roasted"))},[o("span",{class:u(["icon-menu3 pr-5 pl-10",{"icon-menu4":e.showRoasted}])},null,2),so]),e.showRoasted?(l(),s("div",no,[(l(!0),s(h,null,m(e.foods,(t,d)=>(l(),s("div",co,[t.category=="roasted"?(l(),s("div",{key:0,class:"flex flex-col items-center w-40 py-2",onClick:i=>e.addToObjectives(t)},[o("div",ao,[o("div",{class:"w-full h-full",style:w({backgroundImage:"url("+t.image.replace("'","")+")",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"})},null,4)]),e.showNames&&t.names[e.lang]?(l(),s("p",io,g(t.names[e.lang].replace(/_/g," ")),1)):n("",!0)],8,ro)):n("",!0)]))),256))])):n("",!0),o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:c[22]||(c[22]=t=>e.toggleShow("frozen"))},[o("span",{class:u(["icon-menu3 pr-5 pl-10",{"icon-menu4":e.showFrozen}])},null,2),uo]),e.showFrozen?(l(),s("div",fo,[(l(!0),s(h,null,m(e.foods,(t,d)=>(l(),s("div",ho,[t.category=="frozen"?(l(),s("div",{key:0,class:"flex flex-col items-center w-40 py-2",onClick:i=>e.addToObjectives(t)},[o("div",wo,[o("div",{class:"w-full h-full",style:w({backgroundImage:"url("+t.image.replace("'","")+")",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"})},null,4)]),e.showNames&&t.names[e.lang]?(l(),s("p",go,g(t.names[e.lang].replace(/_/g," ")),1)):n("",!0)],8,mo)):n("",!0)]))),256))])):n("",!0),o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:c[23]||(c[23]=t=>e.toggleShow("elixir"))},[o("span",{class:u(["icon-menu3 pr-5 pl-10",{"icon-menu4":e.showElixir}])},null,2),xo]),e.showElixir?(l(),s("div",_o,[(l(!0),s(h,null,m(e.foods,(t,d)=>(l(),s("div",vo,[t.category=="elixir"?(l(),s("div",{key:0,class:"flex flex-col items-center w-40 py-2",onClick:i=>e.addToObjectives(t)},[o("div",ko,[o("div",{class:"w-full h-full",style:w({backgroundImage:"url("+t.image.replace("'","")+")",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"})},null,4)]),e.showNames&&t.names[e.lang]?(l(),s("p",po,g(t.names[e.lang].replace(/_/g," ")),1)):n("",!0)],8,bo)):n("",!0)]))),256))])):n("",!0)])):n("",!0)])]),yo,jo,Co],64)}var Oo=X(Y,[["render",So]]);const zo={class:"min-h-screen"},Ro={setup(v){return(c,_)=>(l(),s("div",zo,[J(Oo)]))}};Q(Ro).mount("#app");
