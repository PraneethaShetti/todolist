(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(8),r=n.n(i),c=(n(14),n(2)),s=n(3),u=n(6),l=n(4),m=n(5),d=n(1),b=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("h1",null,"Todo list")}}]),t}(a.Component),h=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).onClickClose=n.onClickClose.bind(Object(d.a)(Object(d.a)(n))),n.onClickDone=n.onClickDone.bind(Object(d.a)(Object(d.a)(n))),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"onClickClose",value:function(){var e=parseInt(this.props.index);this.props.removeItem(e)}},{key:"onClickDone",value:function(){var e=parseInt(this.props.index);this.props.markTodoDone(e)}},{key:"render",value:function(){var e=this.props.item.done?"done":"undone";return o.a.createElement("li",{className:"list-group-item "},o.a.createElement("div",{className:e},o.a.createElement("span",{className:"glyphicon glyphicon-ok icon","aria-hidden":"true",onClick:this.onClickDone}),this.props.item.value,o.a.createElement("button",{type:"button",className:"close",onClick:this.onClickClose},"\xd7")))}}]),t}(a.Component),p=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.items.map(function(t,n){return o.a.createElement(h,{key:n,item:t,index:n,removeItem:e.props.removeItem,markTodoDone:e.props.markTodoDone})});return o.a.createElement("ul",{className:"list-group"}," ",t," ")}}]),t}(a.Component),f=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).onSubmit=n.onSubmit.bind(Object(d.a)(Object(d.a)(n))),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.refs.itemName.focus()}},{key:"onSubmit",value:function(e){e.preventDefault();var t=this.refs.itemName.value;t&&(this.props.addItem({newItemValue:t}),this.refs.form.reset())}},{key:"render",value:function(){return o.a.createElement("form",{ref:"form",onSubmit:this.onSubmit,className:"form-inline"},o.a.createElement("input",{type:"text",ref:"itemName",className:"form-control",placeholder:"add a new todo..."}),o.a.createElement("button",{type:"submit",className:"btn btn-default"},"Add"))}}]),t}(a.Component),v=[];v.push({index:1,value:"learn react",done:!0}),v.push({index:2,value:"learn Angular",done:!1}),v.push({index:3,value:"learn JQuery",done:!0});var j=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).addItem=n.addItem.bind(Object(d.a)(Object(d.a)(n))),n.removeItem=n.removeItem.bind(Object(d.a)(Object(d.a)(n))),n.markTodoDone=n.markTodoDone.bind(Object(d.a)(Object(d.a)(n))),n.state={todoItems:v},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"addItem",value:function(e){v.unshift({index:v.length+1,value:e.newItemValue,done:!1}),this.setState({todoItems:v})}},{key:"removeItem",value:function(e){v.splice(e,1),this.setState({todoItems:v})}},{key:"markTodoDone",value:function(e){var t=v[e];v.splice(e,1),t.done=!t.done,t.done?v.push(t):v.unshift(t),this.setState({todoItems:v})}},{key:"render",value:function(){return o.a.createElement("div",{id:"main"},o.a.createElement(b,null),o.a.createElement(p,{items:this.state.todoItems,removeItem:this.removeItem,markTodoDone:this.markTodoDone}),o.a.createElement(f,{addItem:this.addItem}))}}]),t}(a.Component),O=(n(16),n(18),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(j,null)}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(20)}},[[9,2,1]]]);
//# sourceMappingURL=main.b6a629a4.chunk.js.map