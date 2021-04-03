(this.webpackJsonpscoreboard=this.webpackJsonpscoreboard||[]).push([[0],{14:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),a=r(8),s=r.n(a),i=r(2),o=r(3),l=r(0),u=c.a.createContext({players:[],setPlayers:function(){}}),j=function(e){var t=e.children,r=c.a.useState([]),n=Object(o.a)(r,2),a=n[0],s=n[1];return Object(l.jsx)(u.Provider,{value:{players:a,setPlayers:s},children:t})},d=function(){var e=c.a.useContext(u),t=e.players,r=e.setPlayers,n=c.a.useCallback((function(e,t){r((function(r){var n=Object(i.a)(r);return(n.find((function(t){return t.id===e}))||{score:0}).score+=t,n}))}),[r]),a=c.a.useCallback((function(e){r((function(t){return t.filter((function(t){return t.id!==e}))}))}),[r]);return{players:t,handleScoreChange:n,handleRemovePlayer:a,handleAddPlayer:c.a.useCallback((function(e,t){r((function(r){var n={name:e,id:t,score:0};return[].concat(Object(i.a)(r),[n])}))}),[r])}};var b=function(){var e,t=d().players,r=null!==(e=null===t||void 0===t?void 0:t.length)&&void 0!==e?e:0,n=Object(i.a)(t).reduce((function(e,t){return e+t.score}),0);return Object(l.jsx)("table",{className:"stats",children:Object(l.jsxs)("tbody",{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Players:"}),Object(l.jsx)("td",{children:r})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Total Points:"}),Object(l.jsx)("td",{children:n})]})]})})};var h=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)({elapsedTime:0,previousTime:0}),s=Object(o.a)(a,2),i=s[0],u=s[1];Object(n.useEffect)((function(){if(r){var e=setInterval(j,100);return function(){clearInterval(e)}}}));var j=function(){if(r){var e=Date.now();u((function(t){return{previousTime:e,elapsedTime:t.elapsedTime+(e-t.previousTime)}}))}};return Object(l.jsxs)("div",{className:"stopwatch",children:[Object(l.jsx)("h2",{children:"Stopwatch"}),Object(l.jsx)("span",{className:"stopwatch-time",children:Math.floor(i.elapsedTime/1e3)}),Object(l.jsx)("button",{onClick:function(){!r&&u((function(e){return{elapsedTime:e.elapsedTime,previousTime:Date.now()}})),c((function(e){return!e}))},children:r?"Stop":"Start"}),Object(l.jsx)("button",{onClick:function(){u((function(e){return{elapsedTime:0,previousTime:Date.now()}}))},children:"Reset"})]})},O=c.a.memo((function(){return console.log("rendered header"),Object(l.jsxs)("header",{children:[Object(l.jsx)(b,{}),Object(l.jsx)("h1",{children:"Scoreboard"}),Object(l.jsx)(h,{})]})})),f=r(5),m=function(e){var t=e.id,r=e.score,n=d().handleScoreChange;return Object(l.jsxs)("div",{className:"counter",children:[Object(l.jsx)("button",{className:"counter-action decrement",onClick:function(){return n(t,-1)},children:"-"}),Object(l.jsx)("span",{className:"counter-score",children:r}),Object(l.jsx)("button",{className:"counter-action increment",onClick:function(){return n(t,1)},children:"+"})]})};var v=function(e){var t=e.leader;return Object(l.jsxs)("svg",{className:t?"is-high-score":"",viewBox:"0 0 44 35",children:[Object(l.jsx)("path",{d:"M26.7616 10.6207L21.8192 0L16.9973 10.5603C15.3699 14.1207 10.9096 15.2672 7.77534 12.9741L0 7.24138L6.56986 28.8448H37.0685L43.5781 7.72414L35.7425 13.0948C32.6685 15.2672 28.3288 14.0603 26.7616 10.6207Z",transform:"translate(0 0.301727)"}),Object(l.jsx)("rect",{width:"30.4986",height:"3.07759",transform:"translate(6.56987 31.5603)"})]})},p=function(e){var t=e.name,r=e.removePlayer,n=e.id,c=e.leader;return Object(l.jsxs)("div",{className:"player",children:[Object(l.jsxs)("span",{className:"player-name",children:[Object(l.jsx)("button",{className:"remove-player",onClick:function(){return r(n)},children:"\u2716"}),Object(l.jsx)(v,{leader:c}),t]}),Object(l.jsx)(m,Object(f.a)({},e))]})};var x=function(){var e=d(),t=e.players,r=e.handleRemovePlayer,a=Math.max.apply(Math,Object(i.a)(t.map((function(e){return e.score}))));return Object(l.jsx)(c.a.Fragment,{children:t.map((function(e){return Object(n.createElement)(p,Object(f.a)(Object(f.a)({},e),{},{leader:e.score===a&&a>0,key:e.id.toString(),removePlayer:r}))}))})},y=function(){var e=d().handleAddPlayer,t=c.a.useState(0),r=Object(o.a)(t,2),n=r[0],a=r[1],s=function(){return a((function(e){return e+1})),n},i=c.a.createRef();return Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault();var r=i.current||{value:""};e(r.value,s()),t.currentTarget.reset()},children:[Object(l.jsx)("input",{type:"text",ref:i,placeholder:"Enter a player's name"}),Object(l.jsx)("input",{type:"submit",value:"Add Player"})]})};var C=function(){return Object(l.jsxs)("div",{className:"scoreboard",children:[Object(l.jsx)(O,{}),Object(l.jsx)(x,{}),Object(l.jsx)(y,{})]})};r(14);s.a.render(Object(l.jsx)(j,{children:Object(l.jsx)(C,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.1395e58c.chunk.js.map