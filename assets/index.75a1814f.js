import{r as i,o as G,a as J,b as l,c as s,d as o,n as u,e as n,F as f,f as w,g,t as m,h as Q,i as U}from"./vendor.0db312c8.js";const X=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))e(h);new MutationObserver(h=>{for(const _ of h)if(_.type==="childList")for(const t of _.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&e(t)}).observe(document,{childList:!0,subtree:!0});function b(h){const _={};return h.integrity&&(_.integrity=h.integrity),h.referrerpolicy&&(_.referrerPolicy=h.referrerpolicy),h.crossorigin==="use-credentials"?_.credentials="include":h.crossorigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function e(h){if(h.ep)return;h.ep=!0;const _=b(h);fetch(h.href,_)}};X();var Y=(x,r)=>{const b=x.__vccOpts||x;for(const[e,h]of r)b[e]=h;return b};const Z={setup(){const x=i([]),r=i([]),b=i([]),e=i([]),h=i([]),_=i([]),t=i([]),a=i([]),d=i([]),p=i([]),q=i(""),k=i(!1),v=i(!1),y=i(!1),C=i(!1),j=i(!1),S=i(!1),O=i(!1),z=i(!1),R=i(!1),N=i(!1),I=i(!1),T=i(!1),P=i(!1),E=i(!1),F=i(!1),B=i(!1),L=i(!1),H=i(!1),M=i(!1),A=i(!1),K=i(!1),D=i(!1),V=i(!0);return G(()=>{J.get("api/api.json").then(c=>{console.log(c.data),x.value=c.data.weapons,r.value=c.data.bows,b.value=c.data.shields,e.value=c.data.armors,h.value=c.data.key_items,_.value=c.data.runes,t.value=c.data.materials,a.value=c.data.enemies,d.value=c.data.food,q.value="en"}).catch(c=>console.log(c))}),{completeObjectives:c=>{console.log(c),c.srcElement.parentElement.classList.contains("grayscale")?c.srcElement.parentElement.classList.remove("grayscale"):c.srcElement.parentElement.classList.add("grayscale")},showNames:V,showOptions:D,addToObjectives:c=>{console.log(c);let W;document.getElementById(c.names.en)&&(document.getElementById(c.names.en).value==""?W=1:W=document.getElementById(c.names.en).value,c.counter=W),p.value.push(c)},removeFromObjectives:c=>{p.value.splice(c,1)},weapons:x,lang:q,showWeapons:k,showOneHanded:v,showTwoHanded:y,showSpear:C,toggleShow:c=>{c=="weapons"?k.value=!k.value:c=="one-handed"?v.value=!v.value:c=="two-handed"?y.value=!y.value:c=="spear"?C.value=!C.value:c=="bows"?j.value=!j.value:c=="shields"?S.value=!S.value:c=="armors"?O.value=!O.value:c=="heads"?z.value=!z.value:c=="bodies"?R.value=!R.value:c=="legs"?N.value=!N.value:c=="key-items"?I.value=!I.value:c=="saddles"?T.value=!T.value:c=="runes"?P.value=!P.value:c=="materials"?E.value=!E.value:c=="enemies"?F.value=!F.value:c=="material-food"?B.value=!B.value:c=="cooked-food"?L.value=!L.value:c=="food"?H.value=!H.value:c=="roasted"?M.value=!M.value:c=="frozen"?A.value=!A.value:c=="elixir"?K.value=!K.value:c=="options"?D.value=!D.value:c=="names"&&(V.value=!V.value)},bows:r,showBows:j,shields:b,showShields:S,armors:e,showArmors:O,showHeads:z,showBodies:R,showLegs:N,keys:h,showKeys:I,showSaddles:T,runes:_,showRunes:P,objectives:p,materials:t,showMaterials:E,enemies:a,showEnemies:F,showMaterialFood:B,showCookedFood:L,showFood:H,foods:d,showRoasted:M,showFrozen:A,showElixir:K}}},$={class:"flex flex-col lg:flex-row"},ee={class:"lg:min-h-screen lg:max-h-screen min-h-[50vh] justify-center overflow-auto lg:w-9/12 w-full border-solid border-neutral-900 border-r"},te={class:"backdrop-blur text-left flex justify-between items-center text-m font-bold text-white px-5 py-2"},oe=o("h1",null,"Objectives",-1),le={key:0,class:"flex flex-row flex-wrap w-full text-white p-5 backdrop-blur-md"},se=o("h1",null,"Names",-1),ne={class:"flex flex-row flex-wrap w-full text-white py-5"},re={class:"flex justify-center items-center"},ce=["onDblclick"],ie={class:"relative border p-3 rounded lg:w-20 lg:h-20 w-14 h-14 bg-emerald-700 grayscale"},ae={key:0,style:{right:"-15px",top:"-10px"},class:"absolute backdrop-blur-md bg-neutral-900 border h-7 px-2 flex items-center justify-center rounded-full"},de={key:0,class:"py-2"},ue={class:"lg:w-3/12 w-full max-h-screen overflow-auto text-center"},he=o("h1",null,"Weapons",-1),fe={key:0},me=o("h1",null,"One Handed",-1),we={key:0,class:"flex flex-row flex-wrap w-full text-white py-5 justify-center"},ge={class:"flex justify-center items-center"},_e=["onClick"],be={class:"border p-3 backdrop-blur rounded w-14 h-14"},xe={key:0,class:"pt-2"},pe=o("h1",null,"Two Handed",-1),ke={key:1,class:"flex flex-row flex-wrap w-full text-white py-5 justify-center"},ve={class:"flex justify-center items-center"},ye=["onClick"],Ce={class:"border p-3 backdrop-blur rounded w-14 h-14"},je={key:0,class:"pt-2"},Se=o("h1",null,"Spear",-1),Oe={key:2,class:"flex flex-row flex-wrap w-full text-white py-5 justify-center"},ze={class:"flex justify-center items-center"},Re=["onClick"],Ne={class:"border p-3 backdrop-blur rounded w-14 h-14"},Ie={key:0,class:"pt-2"},Te=o("h1",null,"Bows",-1),Pe={key:1},Ee={key:0,class:"flex flex-row flex-wrap w-full text-white py-5 justify-center"},Fe={class:"flex justify-center items-center"},Be=["onClick"],Le={class:"border p-3 backdrop-blur rounded w-14 h-14"},He={key:0,class:"pt-2"},Me=o("h1",null,"Shields",-1),Ae={key:2},Ke={key:0,class:"flex flex-row flex-wrap w-full text-white py-5 justify-center"},De={class:"flex justify-center items-center"},Ve=["onClick"],We={class:"border p-3 backdrop-blur rounded w-14 h-14"},qe={key:0,class:"pt-2"},Ge=o("h1",null,"Armors",-1),Je={key:3},Qe=o("h1",null,"Head",-1),Ue={key:0,class:"flex flex-row flex-wrap w-full text-white py-5 justify-center"},Xe={class:"flex justify-center items-center"},Ye=["onClick"],Ze={class:"border p-3 backdrop-blur rounded w-14 h-14"},$e={key:0,class:"pt-2"},et=o("h1",null,"Body",-1),tt={key:1,class:"flex flex-row flex-wrap w-full text-white py-5 justify-center"},ot={class:"flex justify-center items-center"},lt=["onClick"],st={class:"border p-3 backdrop-blur rounded w-14 h-14"},nt={key:0,class:"pt-2"},rt=o("h1",null,"Legs",-1),ct={key:2,class:"flex flex-row flex-wrap w-full text-white py-5 justify-center"},it={class:"flex justify-center items-center"},at=["onClick"],dt={class:"border p-3 backdrop-blur rounded w-14 h-14"},ut={key:0,class:"pt-2"},ht=o("h1",null,"Key Items",-1),ft={key:4},mt={class:"flex flex-row flex-wrap w-full text-white py-5 justify-center"},wt={class:"flex justify-center items-center"},gt={key:0,class:"flex flex-col items-center w-40 py-2"},_t=["onClick"],bt={key:0,class:"pt-2"},xt=["id"],pt=o("h1",null,"Saddles",-1),kt={key:0,class:"flex flex-row flex-wrap w-full text-white py-5 justify-center"},vt={class:"flex justify-center items-center"},yt=["onClick"],Ct={class:"border p-3 backdrop-blur rounded w-14 h-14"},jt={key:0,class:"pt-2"},St=o("h1",null,"Runes",-1),Ot={key:5},zt={key:0,class:"flex flex-row flex-wrap w-full text-white py-5 justify-center"},Rt={class:"flex justify-center items-center"},Nt=["onClick"],It={class:"border p-3 backdrop-blur rounded w-14 h-14"},Tt={key:0,class:"pt-2"},Pt=o("h1",null,"Materials",-1),Et={key:6},Ft={class:"flex flex-row flex-wrap w-full text-white py-5 justify-center"},Bt={class:"flex justify-center items-center"},Lt={key:0,class:"flex flex-col items-center w-40 py-2"},Ht=["onClick"],Mt={key:0,class:"pt-2"},At=["id"],Kt=o("h1",null,"Enemies",-1),Dt={key:7},Vt={key:0,class:"flex flex-row flex-wrap w-full text-white py-5 justify-center"},Wt={class:"flex justify-center items-center"},qt={class:"flex flex-col items-center w-40 py-2"},Gt=["onClick"],Jt={key:0,class:"pt-2"},Qt=["id"],Ut=o("h1",null,"Food",-1),Xt={key:8},Yt=o("h1",null,"Raw",-1),Zt={key:0,class:"flex flex-row flex-wrap w-full text-white py-5 justify-center"},$t={class:"flex justify-center items-center"},eo={key:0,class:"flex flex-col items-center w-40 py-2"},to=["onClick"],oo={key:0,class:"pt-2"},lo=["id"],so=o("h1",null,"Cooked",-1),no={key:1,class:"flex flex-row flex-wrap w-full text-white py-5 justify-center"},ro={class:"flex justify-center items-center"},co={key:0,class:"flex flex-col items-center w-40 py-2"},io=["onClick"],ao={key:0,class:"pt-2"},uo=["id"],ho=o("h1",null,"Roasted",-1),fo={key:2,class:"flex flex-row flex-wrap w-full text-white py-5 justify-center"},mo={class:"flex justify-center items-center"},wo={key:0,class:"flex flex-col items-center w-40 py-2"},go=["onClick"],_o={key:0,class:"pt-2"},bo=["id"],xo=o("h1",null,"Frozen",-1),po={key:3,class:"flex flex-row flex-wrap w-full text-white py-5 justify-center"},ko={class:"flex justify-center items-center"},vo={key:0,class:"flex flex-col items-center w-40 py-2"},yo=["onClick"],Co={key:0,class:"pt-2"},jo=["id"],So=o("h1",null,"Elixir",-1),Oo={key:4,class:"flex flex-row flex-wrap w-full text-white py-5 justify-center"},zo={class:"flex justify-center items-center"},Ro={key:0,class:"flex flex-col items-center w-40 py-2"},No=["onClick"],Io={key:0,class:"pt-2"},To=["id"],Po=o("p",{class:"text-xs bottom-0 right-6 fixed"},"v.Beta-0.3.0",-1),Eo=o("p",{class:"text-xs bottom-4 left-2 fixed text-white"},"Click on the objective to complete it",-1),Fo=o("p",{class:"text-xs bottom-0 left-2 fixed text-white"},"Double click to remove it",-1);function Bo(x,r,b,e,h,_){return l(),s(f,null,[o("div",$,[o("div",ee,[o("div",te,[oe,o("span",{onClick:r[0]||(r[0]=t=>e.toggleShow("options")),class:"icon-equalizer2 cursor-pointer"})]),e.showOptions?(l(),s("div",le,[o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:r[1]||(r[1]=t=>e.toggleShow("names"))},[o("span",{class:u(["icon-eye px-5",{"icon-eye-blocked":!e.showNames}])},null,2),se])])):n("",!0),o("div",ne,[(l(!0),s(f,null,w(e.objectives,(t,a)=>(l(),s("div",re,[o("div",{class:"flex flex-col items-center w-44 lg:w-56 py-3",onDblclick:d=>e.removeFromObjectives(a)},[o("div",ie,[o("div",{class:"w-full h-full",onClick:r[2]||(r[2]=d=>e.completeObjectives(d)),style:g({backgroundImage:"url("+t.image.replace("'","")+")",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"})},null,4),t.counter?(l(),s("p",ae,m(t.counter),1)):n("",!0)]),e.showNames&&t.names[e.lang]?(l(),s("p",de,m(t.names[e.lang].replace(/_/g," ")),1)):n("",!0)],40,ce)]))),256))])]),o("div",ue,[o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:r[3]||(r[3]=t=>e.toggleShow("weapons"))},[o("span",{class:u(["icon-menu3 px-5",{"icon-menu4":e.showWeapons}])},null,2),he]),e.showWeapons?(l(),s("div",fe,[o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:r[4]||(r[4]=t=>e.toggleShow("one-handed"))},[o("span",{class:u(["icon-menu3 pr-5 pl-10",{"icon-menu4":e.showOneHanded}])},null,2),me]),e.showOneHanded?(l(),s("div",we,[(l(!0),s(f,null,w(e.weapons,(t,a)=>(l(),s("div",ge,[t.category=="one-handed"?(l(),s("div",{key:0,class:"flex flex-col items-center w-40 py-2",onClick:d=>e.addToObjectives(t)},[o("div",be,[o("div",{class:"w-full h-full",style:g({backgroundImage:"url("+t.image.replace("'","")+")",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"})},null,4)]),e.showNames&&t.names[e.lang]?(l(),s("p",xe,m(t.names[e.lang].replace(/_/g," ")),1)):n("",!0)],8,_e)):n("",!0)]))),256))])):n("",!0),o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:r[5]||(r[5]=t=>e.toggleShow("two-handed"))},[o("span",{class:u(["icon-menu3 pr-5 pl-10",{"icon-menu4":e.showTwoHanded}])},null,2),pe]),e.showTwoHanded?(l(),s("div",ke,[(l(!0),s(f,null,w(e.weapons,(t,a)=>(l(),s("div",ve,[t.category=="two-handed"?(l(),s("div",{key:0,class:"flex flex-col items-center w-40 py-2",onClick:d=>e.addToObjectives(t)},[o("div",Ce,[o("div",{class:"w-full h-full",style:g({backgroundImage:"url("+t.image.replace("'","")+")",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"})},null,4)]),e.showNames&&t.names[e.lang]?(l(),s("p",je,m(t.names[e.lang].replace(/_/g," ")),1)):n("",!0)],8,ye)):n("",!0)]))),256))])):n("",!0),o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:r[6]||(r[6]=t=>e.toggleShow("spear"))},[o("span",{class:u(["icon-menu3 pr-5 pl-10",{"icon-menu4":e.showSpear}])},null,2),Se]),e.showSpear?(l(),s("div",Oe,[(l(!0),s(f,null,w(e.weapons,(t,a)=>(l(),s("div",ze,[t.category=="spear"?(l(),s("div",{key:0,class:"flex flex-col items-center w-40 py-2",onClick:d=>e.addToObjectives(t)},[o("div",Ne,[o("div",{class:"w-full h-full",style:g({backgroundImage:"url("+t.image.replace("'","")+")",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"})},null,4)]),e.showNames&&t.names[e.lang]?(l(),s("p",Ie,m(t.names[e.lang].replace(/_/g," ")),1)):n("",!0)],8,Re)):n("",!0)]))),256))])):n("",!0)])):n("",!0),o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:r[7]||(r[7]=t=>e.toggleShow("bows"))},[o("span",{class:u(["icon-menu3 px-5",{"icon-menu4":e.showBows}])},null,2),Te]),e.showBows?(l(),s("div",Pe,[e.showBows?(l(),s("div",Ee,[(l(!0),s(f,null,w(e.bows,(t,a)=>(l(),s("div",Fe,[o("div",{class:"flex flex-col items-center w-40 py-2",onClick:d=>e.addToObjectives(t)},[o("div",Le,[o("div",{class:"w-full h-full",style:g({backgroundImage:"url("+t.image.replace("'","")+")",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"})},null,4)]),e.showNames&&t.names[e.lang]?(l(),s("p",He,m(t.names[e.lang].replace(/_/g," ")),1)):n("",!0)],8,Be)]))),256))])):n("",!0)])):n("",!0),o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:r[8]||(r[8]=t=>e.toggleShow("shields"))},[o("span",{class:u(["icon-menu3 px-5",{"icon-menu4":e.showShields}])},null,2),Me]),e.showShields?(l(),s("div",Ae,[e.showShields?(l(),s("div",Ke,[(l(!0),s(f,null,w(e.shields,(t,a)=>(l(),s("div",De,[o("div",{class:"flex flex-col items-center w-40 py-2",onClick:d=>e.addToObjectives(t)},[o("div",We,[o("div",{class:"w-full h-full",style:g({backgroundImage:"url("+t.image.replace("'","")+")",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"})},null,4)]),e.showNames&&t.names[e.lang]?(l(),s("p",qe,m(t.names[e.lang].replace(/_/g," ")),1)):n("",!0)],8,Ve)]))),256))])):n("",!0)])):n("",!0),o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:r[9]||(r[9]=t=>e.toggleShow("armors"))},[o("span",{class:u(["icon-menu3 px-5",{"icon-menu4":e.showArmors}])},null,2),Ge]),e.showArmors?(l(),s("div",Je,[o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:r[10]||(r[10]=t=>e.toggleShow("heads"))},[o("span",{class:u(["icon-menu3 pr-5 pl-10",{"icon-menu4":e.showHeads}])},null,2),Qe]),e.showHeads?(l(),s("div",Ue,[(l(!0),s(f,null,w(e.armors,(t,a)=>(l(),s("div",Xe,[t.category=="head"?(l(),s("div",{key:0,class:"flex flex-col items-center w-40 py-2",onClick:d=>e.addToObjectives(t)},[o("div",Ze,[o("div",{class:"w-full h-full",style:g({backgroundImage:"url("+t.image.replace("'","")+")",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"})},null,4)]),e.showNames&&t.names[e.lang]?(l(),s("p",$e,m(t.names[e.lang].replace(/_/g," ")),1)):n("",!0)],8,Ye)):n("",!0)]))),256))])):n("",!0),o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:r[11]||(r[11]=t=>e.toggleShow("bodies"))},[o("span",{class:u(["icon-menu3 pr-5 pl-10",{"icon-menu4":e.showBodies}])},null,2),et]),e.showBodies?(l(),s("div",tt,[(l(!0),s(f,null,w(e.armors,(t,a)=>(l(),s("div",ot,[t.category=="body"?(l(),s("div",{key:0,class:"flex flex-col items-center w-40 py-2",onClick:d=>e.addToObjectives(t)},[o("div",st,[o("div",{class:"w-full h-full",style:g({backgroundImage:"url("+t.image.replace("'","")+")",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"})},null,4)]),e.showNames&&t.names[e.lang]?(l(),s("p",nt,m(t.names[e.lang].replace(/_/g," ")),1)):n("",!0)],8,lt)):n("",!0)]))),256))])):n("",!0),o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:r[12]||(r[12]=t=>e.toggleShow("legs"))},[o("span",{class:u(["icon-menu3 pr-5 pl-10",{"icon-menu4":e.showLegs}])},null,2),rt]),e.showLegs?(l(),s("div",ct,[(l(!0),s(f,null,w(e.armors,(t,a)=>(l(),s("div",it,[t.category=="leg"?(l(),s("div",{key:0,class:"flex flex-col items-center w-40 py-2",onClick:d=>e.addToObjectives(t)},[o("div",dt,[o("div",{class:"w-full h-full",style:g({backgroundImage:"url("+t.image.replace("'","")+")",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"})},null,4)]),e.showNames&&t.names[e.lang]?(l(),s("p",ut,m(t.names[e.lang].replace(/_/g," ")),1)):n("",!0)],8,at)):n("",!0)]))),256))])):n("",!0)])):n("",!0),o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:r[13]||(r[13]=t=>e.toggleShow("key-items"))},[o("span",{class:u(["icon-menu3 px-5",{"icon-menu4":e.showKeys}])},null,2),ht]),e.showKeys?(l(),s("div",ft,[o("div",mt,[(l(!0),s(f,null,w(e.keys,(t,a)=>(l(),s("div",wt,[t.category=="key"?(l(),s("div",gt,[o("div",{class:"border p-3 backdrop-blur rounded w-14 h-14",onClick:d=>e.addToObjectives(t)},[o("div",{class:"w-full h-full",style:g({backgroundImage:"url("+t.image.replace("'","")+")",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"})},null,4)],8,_t),e.showNames&&t.names[e.lang]?(l(),s("p",bt,m(t.names[e.lang].replace(/_/g," ")),1)):n("",!0),a=="Heart_Container"||a=="Stamina_Vessel"||a=="Korok_Seed"?(l(),s("input",{key:1,id:a,placeholder:"1",class:"w-10 right-44 rounded bg-transparent border border-white text-sm w-[25%]",type:"number"},null,8,xt)):n("",!0)])):n("",!0)]))),256))]),o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:r[14]||(r[14]=t=>e.toggleShow("saddles"))},[o("span",{class:u(["icon-menu3 pr-5 pl-10",{"icon-menu4":e.showSaddles}])},null,2),pt]),e.showSaddles?(l(),s("div",kt,[(l(!0),s(f,null,w(e.keys,(t,a)=>(l(),s("div",vt,[t.category=="saddles"?(l(),s("div",{key:0,class:"flex flex-col items-center w-40 py-2",onClick:d=>e.addToObjectives(t)},[o("div",Ct,[o("div",{class:"w-full h-full",style:g({backgroundImage:"url("+t.image.replace("'","")+")",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"})},null,4)]),e.showNames&&t.names[e.lang]?(l(),s("p",jt,m(t.names[e.lang].replace(/_/g," ")),1)):n("",!0)],8,yt)):n("",!0)]))),256))])):n("",!0)])):n("",!0),o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:r[15]||(r[15]=t=>e.toggleShow("runes"))},[o("span",{class:u(["icon-menu3 px-5",{"icon-menu4":e.showRunes}])},null,2),St]),e.showRunes?(l(),s("div",Ot,[e.showRunes?(l(),s("div",zt,[(l(!0),s(f,null,w(e.runes,(t,a)=>(l(),s("div",Rt,[o("div",{class:"flex flex-col items-center w-40 py-2",onClick:d=>e.addToObjectives(t)},[o("div",It,[o("div",{class:"w-full h-full",style:g({backgroundImage:"url("+t.image.replace("'","")+")",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"})},null,4)]),e.showNames&&t.names[e.lang]?(l(),s("p",Tt,m(t.names[e.lang].replace(/_/g," ")),1)):n("",!0)],8,Nt)]))),256))])):n("",!0)])):n("",!0),o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:r[16]||(r[16]=t=>e.toggleShow("materials"))},[o("span",{class:u(["icon-menu3 px-5",{"icon-menu4":e.showMaterials}])},null,2),Pt]),e.showMaterials?(l(),s("div",Et,[o("div",Ft,[(l(!0),s(f,null,w(e.materials,(t,a)=>(l(),s("div",Bt,[t.category=="material"?(l(),s("div",Lt,[o("div",{class:"border p-3 backdrop-blur rounded w-14 h-14",onClick:d=>e.addToObjectives(t)},[o("div",{class:"w-full h-full",style:g({backgroundImage:"url("+t.image.replace("'","")+")",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"})},null,4)],8,Ht),e.showNames&&t.names[e.lang]?(l(),s("p",Mt,m(t.names[e.lang].replace(/_/g," ")),1)):n("",!0),o("input",{id:a,placeholder:"1",class:"w-10 right-44 rounded bg-transparent border border-white text-sm w-[25%]",type:"number"},null,8,At)])):n("",!0)]))),256))])])):n("",!0),o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:r[17]||(r[17]=t=>e.toggleShow("enemies"))},[o("span",{class:u(["icon-menu3 px-5",{"icon-menu4":e.showEnemies}])},null,2),Kt]),e.showEnemies?(l(),s("div",Dt,[e.showEnemies?(l(),s("div",Vt,[(l(!0),s(f,null,w(e.enemies,(t,a)=>(l(),s("div",Wt,[o("div",qt,[o("div",{class:"border p-3 backdrop-blur rounded w-14 h-14",onClick:d=>e.addToObjectives(t)},[o("div",{class:"w-full h-full",style:g({backgroundImage:"url("+t.image.replace("'","")+")",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"})},null,4)],8,Gt),e.showNames&&t.names[e.lang]?(l(),s("p",Jt,m(t.names[e.lang].replace(/_/g," ")),1)):n("",!0),o("input",{id:a,placeholder:"1",class:"w-10 right-44 rounded bg-transparent border border-white text-sm w-[25%]",type:"number"},null,8,Qt)])]))),256))])):n("",!0)])):n("",!0),o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:r[18]||(r[18]=t=>e.toggleShow("food"))},[o("span",{class:u(["icon-menu3 px-5",{"icon-menu4":e.showFood}])},null,2),Ut]),e.showFood?(l(),s("div",Xt,[o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:r[19]||(r[19]=t=>e.toggleShow("material-food"))},[o("span",{class:u(["icon-menu3 pr-5 pl-10",{"icon-menu4":e.showMaterialFood}])},null,2),Yt]),e.showMaterialFood?(l(),s("div",Zt,[(l(!0),s(f,null,w(e.materials,(t,a)=>(l(),s("div",$t,[t.category=="food"?(l(),s("div",eo,[o("div",{class:"border p-3 backdrop-blur rounded w-14 h-14",onClick:d=>e.addToObjectives(t)},[o("div",{class:"w-full h-full",style:g({backgroundImage:"url("+t.image.replace("'","")+")",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"})},null,4)],8,to),e.showNames&&t.names[e.lang]?(l(),s("p",oo,m(t.names[e.lang].replace(/_/g," ")),1)):n("",!0),o("input",{id:a,placeholder:"1",class:"w-10 right-44 rounded bg-transparent border border-white text-sm w-[25%]",type:"number"},null,8,lo)])):n("",!0)]))),256))])):n("",!0),o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:r[20]||(r[20]=t=>e.toggleShow("cooked-food"))},[o("span",{class:u(["icon-menu3 pr-5 pl-10",{"icon-menu4":e.showCookedFood}])},null,2),so]),e.showCookedFood?(l(),s("div",no,[(l(!0),s(f,null,w(e.foods,(t,a)=>(l(),s("div",ro,[t.category=="cooked"?(l(),s("div",co,[o("div",{class:"border p-3 backdrop-blur rounded w-14 h-14",onClick:d=>e.addToObjectives(t)},[o("div",{class:"w-full h-full",style:g({backgroundImage:"url("+t.image.replace("'","")+")",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"})},null,4)],8,io),e.showNames&&t.names[e.lang]?(l(),s("p",ao,m(t.names[e.lang].replace(/_/g," ")),1)):n("",!0),o("input",{id:a,placeholder:"1",class:"w-10 right-44 rounded bg-transparent border border-white text-sm w-[25%]",type:"number"},null,8,uo)])):n("",!0)]))),256))])):n("",!0),o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:r[21]||(r[21]=t=>e.toggleShow("roasted"))},[o("span",{class:u(["icon-menu3 pr-5 pl-10",{"icon-menu4":e.showRoasted}])},null,2),ho]),e.showRoasted?(l(),s("div",fo,[(l(!0),s(f,null,w(e.foods,(t,a)=>(l(),s("div",mo,[t.category=="roasted"?(l(),s("div",wo,[o("div",{class:"border p-3 backdrop-blur rounded w-14 h-14",onClick:d=>e.addToObjectives(t)},[o("div",{class:"w-full h-full",style:g({backgroundImage:"url("+t.image.replace("'","")+")",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"})},null,4)],8,go),e.showNames&&t.names[e.lang]?(l(),s("p",_o,m(t.names[e.lang].replace(/_/g," ")),1)):n("",!0),o("input",{id:a,placeholder:"1",class:"w-10 right-44 rounded bg-transparent border border-white text-sm w-[25%]",type:"number"},null,8,bo)])):n("",!0)]))),256))])):n("",!0),o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:r[22]||(r[22]=t=>e.toggleShow("frozen"))},[o("span",{class:u(["icon-menu3 pr-5 pl-10",{"icon-menu4":e.showFrozen}])},null,2),xo]),e.showFrozen?(l(),s("div",po,[(l(!0),s(f,null,w(e.foods,(t,a)=>(l(),s("div",ko,[t.category=="frozen"?(l(),s("div",vo,[o("div",{class:"border p-3 backdrop-blur rounded w-14 h-14",onClick:d=>e.addToObjectives(t)},[o("div",{class:"w-full h-full",style:g({backgroundImage:"url("+t.image.replace("'","")+")",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"})},null,4)],8,yo),e.showNames&&t.names[e.lang]?(l(),s("p",Co,m(t.names[e.lang].replace(/_/g," ")),1)):n("",!0),o("input",{id:a,placeholder:"1",class:"w-10 right-44 rounded bg-transparent border border-white text-sm w-[25%]",type:"number"},null,8,jo)])):n("",!0)]))),256))])):n("",!0),o("div",{class:"backdrop-blur text-left flex items-center text-m font-bold text-white py-2 cursor-pointer",onClick:r[23]||(r[23]=t=>e.toggleShow("elixir"))},[o("span",{class:u(["icon-menu3 pr-5 pl-10",{"icon-menu4":e.showElixir}])},null,2),So]),e.showElixir?(l(),s("div",Oo,[(l(!0),s(f,null,w(e.foods,(t,a)=>(l(),s("div",zo,[t.category=="elixir"?(l(),s("div",Ro,[o("div",{class:"border p-3 backdrop-blur rounded w-14 h-14",onClick:d=>e.addToObjectives(t)},[o("div",{class:"w-full h-full",style:g({backgroundImage:"url("+t.image.replace("'","")+")",backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center"})},null,4)],8,No),e.showNames&&t.names[e.lang]?(l(),s("p",Io,m(t.names[e.lang].replace(/_/g," ")),1)):n("",!0),o("input",{id:a,placeholder:"1",class:"w-10 right-44 rounded bg-transparent border border-white text-sm w-[25%]",type:"number"},null,8,To)])):n("",!0)]))),256))])):n("",!0)])):n("",!0)])]),Po,Eo,Fo],64)}var Lo=Y(Z,[["render",Bo]]);const Ho={class:"min-h-screen"},Mo={setup(x){return(r,b)=>(l(),s("div",Ho,[Q(Lo)]))}};U(Mo).mount("#app");
