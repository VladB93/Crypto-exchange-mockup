(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(62),s=n.n(r),c=(n(71),n(15)),o=n(16),u=n(32),l=n(29),p=n(31),d=n(10),h=["ADA/USD","EOS/USD","QTUM/USD","ETH/USD","LTC/USD"],b=function(){function e(t){var n=this;Object(c.a)(this,e),this.store=t,this.socket=new WebSocket("wss://ws-sandbox.kraken.com"),this.socket.onopen=function(){n.socket.send(JSON.stringify({event:"subscribe",pair:h,subscription:{name:"spread"}}))},this.socket.onmessage=this.handleMessage.bind(this)}return Object(o.a)(e,[{key:"handleMessage",value:function(e){this.handleEvents(JSON.parse(e.data))}},{key:"handleEvents",value:function(e){switch(e.event){case"heartbeat":break;case"subscriptionStatus":this.store.dispatch({type:"CREATE_PAIR",payload:{channelID:e.channelID,pair:e.pair,bid:[],ask:[]}});break;case void 0:this.store.dispatch({type:"UPDATE_PAIR",payload:{channelID:e[0],bid:e[1][0],ask:e[1][1]}})}}},{key:"subscribe",value:function(e){this.socket.send(JSON.stringify({event:"subscribe",pair:[e],subscription:{name:"spread"}}))}}]),e}(),m=n(30),k=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.pairs;return i.a.createElement("table",null,i.a.createElement("thead",null,i.a.createElement("tr",null,e.map(function(e){return i.a.createElement("td",{key:e.channelID},i.a.createElement("p",{className:"title"},e.pair),i.a.createElement("span",null,"ASK"),i.a.createElement("span",{className:"right"},"BID"))}))),i.a.createElement("tbody",null,i.a.createElement("tr",null,e.map(function(e,t){var n=e.ask[1]>=e.ask[0]?"green":"red";return i.a.createElement("td",{key:t,className:n},i.a.createElement("span",null,e.ask[1],"|"),i.a.createElement("span",null,e.bid[1]))}))))}}]),t}(i.a.Component);var E=Object(m.b)(function(e){return{pairs:e.pairs}},null)(k),f=n(65),v=n(33),O=n.n(v),y=(n(124),n(126),O.a.initializeApp({apiKey:"AIzaSyCzzIbgLOLRWdWrSVVIopYTwr4H7HDnn00",authDomain:"crypto-site-mockup.firebaseapp.com",databaseURL:"https://crypto-site-mockup.firebaseio.com",projectId:"crypto-site-mockup",storageBucket:"crypto-site-mockup.appspot.com",messagingSenderId:"104291122356"}),O.a.firestore());var g=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).socket=new b(I),n.state={input:""},n.addPair=n.addPair.bind(Object(d.a)(Object(d.a)(n))),n.inputChange=n.inputChange.bind(Object(d.a)(Object(d.a)(n))),n}return Object(p.a)(t,e),Object(o.a)(t,[{key:"addPair",value:function(){this.socket.subscribe(this.state.input)}},{key:"inputChange",value:function(e){this.setState({input:e.target.value})}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("button",{onClick:function(){var e,t,n;y.collection(n).doc(e).set(Object(f.a)({},t)).then(function(e){console.log("Document written with ID: ",e.id)},function(e){console.error("Error adding document: ",e)})}},"Register User"),i.a.createElement(E,null),"Pair name",i.a.createElement("input",{onChange:this.inputChange}),i.a.createElement("button",{onClick:this.addPair},"Add Pair"))}}]),t}(a.Component),w=n(17),D=n(64),j=Object(w.b)({pairs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PAIR":return[].concat(Object(D.a)(e),[t.payload]);case"UPDATE_PAIR":var n=t.payload,a=n.channelID,i=n.bid,r=n.ask;return e.map(function(e){return a===e.channelID&&(0===e.bid.length?(e.bid=[i,i],e.ask=[r,r]):(e.bid[1]!==i&&(e.bid.shift(),e.bid.push(i)),e.ask[1]!==r&&(e.ask.shift(),e.ask.push(r)))),e});default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.d(t,"store",function(){return I});var I=Object(w.c)(j,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(i.a.createElement(m.a,{store:I},i.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},66:function(e,t,n){e.exports=n(131)},71:function(e,t,n){}},[[66,2,1]]]);
//# sourceMappingURL=main.840430f4.chunk.js.map