(this["webpackJsonplsm-react"]=this["webpackJsonplsm-react"]||[]).push([[5],{25:function(e,c,t){},26:function(e,c,t){"use strict";t(25);var a=t(0);c.a=function(e){var c=e.bg,t=(e.buttonName,e.content),n=e.footer;return Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("header",{className:"card-header",style:{backgroundImage:"url(".concat(c,")")}}),Object(a.jsx)("div",{className:"container",children:t}),Object(a.jsx)("footer",{className:"w3-container w3-purple",children:Object(a.jsx)("div",{className:"container",children:n})})]})}},31:function(e,c,t){"use strict";c.a=t.p+"static/media/calc-05.c7f8b9a3.jpg"},55:function(e,c,t){"use strict";t.r(c);var a=t(1),n=t.n(a),s=t(26),l=t(31),i=t(0);function d(){function e(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}var c=parseFloat(document.getElementById("atkBase").value),t=parseFloat(document.getElementById("atkBono").value);t+=parseFloat(document.getElementById("atkVerde").value);var a=(2.5462*(1+parseFloat(document.getElementById("mult").value)/100)-1)*c,n=2.31006*c;a=Math.round(100*a)/100,n=Math.round(100*n)/100,document.getElementById("danioBase").innerHTML="L\xedmite: <b>"+e(a)+"</b> de Ataque C\xf3smico de Bono",document.getElementById("danioMax").innerHTML="M\xe1ximo: <b>"+e(n)+"</b> Bono de ataque a buscar",document.getElementById("danioFinal").innerHTML=t>a?"Es mejor buscar <b>Da\xf1o C\xf3smico</b> ":"Es mejor buscar <b>Ataque C\xf3smico</b>"}c.default=function(){return Object(a.useEffect)((function(){window.scroll(0,0)}),[]),Object(i.jsx)("section",{id:"section",className:"d-flex",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"content justify-content-center",children:Object(i.jsx)(s.a,{bg:l.a,content:Object(i.jsxs)(n.a.Fragment,{children:[Object(i.jsx)("h1",{children:"Atributos"}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col",children:Object(i.jsx)("label",{children:"C.Atk Blanco"})}),Object(i.jsx)("div",{className:"col",children:Object(i.jsx)("input",{type:"number",name:"atk",id:"atkBase",defaultValue:"0"})})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col",children:Object(i.jsx)("label",{children:"C.Atk Amarillo"})}),Object(i.jsx)("div",{className:"col",children:Object(i.jsx)("input",{type:"number",name:"atk",id:"atkBono",defaultValue:"0"})})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col",children:Object(i.jsx)("label",{children:"C.Atk Verde/PvE"})}),Object(i.jsx)("div",{className:"col",children:Object(i.jsx)("input",{type:"number",name:"atk",id:"atkVerde",defaultValue:"0"})})]}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col",children:Object(i.jsx)("label",{children:"C. Dmg"})}),Object(i.jsx)("div",{className:"col",children:Object(i.jsx)("input",{type:"number",name:"mult",id:"mult",defaultValue:"0"})})]}),Object(i.jsx)("center",{children:Object(i.jsx)("button",{className:"btn",type:"button",onClick:d,children:"Calcular Proporci\xf3n"})})]}),footer:Object(i.jsxs)(n.a.Fragment,{children:[Object(i.jsx)("h1",{children:"Qu\xe9 conviene usar"}),Object(i.jsx)("p",{id:"danioFinal",children:"Es mejor usar"}),Object(i.jsx)("p",{id:"danioBase",children:"L\xedmite"}),Object(i.jsx)("p",{id:"danioMax",children:"M\xe1ximo de Bono de ataque a buscar"}),Object(i.jsx)("small",{children:Object(i.jsxs)("p",{children:["* El M\xe1ximo es considerando un Da\xf1o C\xf3smico de 30% ",Object(i.jsx)("br",{}),"** Solo usar el ataque verde para unidades exclusivas de PvE"]})})]})})})})})}}}]);
//# sourceMappingURL=5.00141b66.chunk.js.map