(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),i=(n(16),n(6)),u=n.n(i),s=n(9),l=n(1),p=n(2),h=n(4),m=n(3),f=n(5),b=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.props.formMethod},r.a.createElement("input",{type:"text",name:"token",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u043e\u043a\u0435\u043d"}),r.a.createElement("button",null,"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e"))}}]),t}(r.a.Component),d=function(e){function t(){return Object(l.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"test")}}]),t}(r.a.Component),v=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).gettingUser=function(){var e=Object(s.a)(u.a.mark(function e(t){var n,a,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=t.target.elements.token.value,e.next=4,fetch("http://api.vk.com/method/users.get?access_token=".concat(n,"&v=5.95"));case 4:return a=e.sent,e.next=7,a.jsonp();case 7:r=e.sent,console.log(r);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,{formMethod:this.gettingUser}),r.a.createElement(d,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.69f0a535.chunk.js.map