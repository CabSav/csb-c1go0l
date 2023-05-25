(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{31:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]')},76:function(e,t){},84:function(e,t){},87:function(e,t){},88:function(e,t){},89:function(e,t){},90:function(e,t){},91:function(e,t){},92:function(e,t){},93:function(e,t,n){"use strict";n.r(t);var a=n(15),s=n(46),r=n.n(s),c=n(3),i=n(33),l=n(18),o=n(24),d=n(19),u=n(31),p=n(5);function b(e){var t=e.txs;return 0===t.length?null:Object(p.jsx)(p.Fragment,{children:t.map((function(e){return Object(p.jsx)("div",{className:"alert-info mt-5 rounded-xl py-2 px-4",children:Object(p.jsxs)("div",{children:[Object(p.jsxs)("p",{children:["From: ",e.from]}),Object(p.jsxs)("p",{children:["To: ",e.to]}),Object(p.jsxs)("p",{children:["Amount: ",e.amount]}),Object(p.jsx)("a",{href:"https://rinkeby.etherscan.io/tx/".concat(e.txHash),children:"Check in block explorer"})]})},e.txHash)}))})}function m(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(),m=Object(o.a)(r,2),j=m[0],y=m[1],x=Object(a.useState)(),h=Object(o.a)(x,2),f=(h[0],h[1],Object(a.useState)({address:"-",tokenName:"-",tokenSymbol:"-",totalSupply:"-"})),O=Object(o.a)(f,2),w=O[0],v=O[1],g=Object(a.useState)({address:"-",balance:"-"}),N=Object(o.a)(g,2),T=N[0],S=N[1];Object(a.useEffect)((function(){if("-"!==w.address){var e=new d.a.providers.Web3Provider(window.ethereum),t=new d.a.Contract(w.address,u,e);return t.on("Transfer",(function(e,t,n,a){console.log({from:e,to:t,amount:n,event:a}),s((function(s){return[].concat(Object(l.a)(s),[{txHash:a.transactionHash,from:e,to:t,amount:String(n)}])}))})),y(t),function(){j.removeAllListeners()}}}),[w.address]);var k=function(){var e=Object(i.a)(Object(c.a)().mark((function e(t){var n,a,s,r,i,l;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=new FormData(t.target),a=new d.a.providers.Web3Provider(window.ethereum),s=new d.a.Contract(n.get("addr"),u,a),e.next=6,s.name();case 6:return r=e.sent,e.next=9,s.symbol();case 9:return i=e.sent,e.next=12,s.totalSupply();case 12:l=e.sent,v({address:n.get("addr"),tokenName:r,tokenSymbol:i,totalSupply:l});case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(i.a)(Object(c.a)().mark((function e(){var t,n,a,s,r;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new d.a.providers.Web3Provider(window.ethereum),e.next=3,t.send("eth_requestAccounts",[]);case 3:return n=new d.a.Contract(w.address,u,t),e.next=6,t.getSigner();case 6:return a=e.sent,e.next=9,a.getAddress();case 9:return s=e.sent,e.next=12,n.balanceOf(s);case 12:r=e.sent,S({address:s,balance:String(r)});case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(i.a)(Object(c.a)().mark((function e(t){var n,a,s,r;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=new FormData(t.target),a=new d.a.providers.Web3Provider(window.ethereum),e.next=5,a.send("eth_requestAccounts",[]);case 5:return e.next=7,a.getSigner();case 7:return s=e.sent,r=new d.a.Contract(w.address,u,s),e.next=11,r.transfer(n.get("recipient"),n.get("amount"));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-2",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("form",{className:"m-4",onSubmit:k,children:Object(p.jsxs)("div",{className:"credit-card w-full lg:w-3/4 sm:w-auto shadow-lg mx-auto rounded-xl bg-white",children:[Object(p.jsxs)("main",{className:"mt-4 p-4",children:[Object(p.jsx)("h1",{className:"text-xl font-semibold text-gray-700 text-center",children:"Read from smart contract"}),Object(p.jsx)("div",{className:"",children:Object(p.jsx)("div",{className:"my-3",children:Object(p.jsx)("input",{type:"text",name:"addr",className:"input input-bordered block w-full focus:ring focus:outline-none",placeholder:"ERC20 contract address"})})})]}),Object(p.jsx)("footer",{className:"p-4",children:Object(p.jsx)("button",{type:"submit",className:"btn btn-primary submit-button focus:ring focus:outline-none w-full",children:"Get token info"})}),Object(p.jsx)("div",{className:"px-4",children:Object(p.jsx)("div",{className:"overflow-x-auto",children:Object(p.jsxs)("table",{className:"table w-full",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Name"}),Object(p.jsx)("th",{children:"Symbol"}),Object(p.jsx)("th",{children:"Total supply"})]})}),Object(p.jsx)("tbody",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:w.tokenName}),Object(p.jsx)("td",{children:w.tokenSymbol}),Object(p.jsx)("td",{children:String(w.totalSupply)}),Object(p.jsx)("td",{children:w.deployedAt})]})})]})})}),Object(p.jsx)("div",{className:"p-4",children:Object(p.jsx)("button",{onClick:M,type:"submit",className:"btn btn-primary submit-button focus:ring focus:outline-none w-full",children:"Get my balance"})}),Object(p.jsx)("div",{className:"px-4",children:Object(p.jsx)("div",{className:"overflow-x-auto",children:Object(p.jsxs)("table",{className:"table w-full",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Address"}),Object(p.jsx)("th",{children:"Balance"})]})}),Object(p.jsx)("tbody",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:T.address}),Object(p.jsx)("td",{children:T.balance})]})})]})})})]})}),Object(p.jsx)("div",{className:"m-4 credit-card w-full lg:w-3/4 sm:w-auto shadow-lg mx-auto rounded-xl bg-white",children:Object(p.jsxs)("div",{className:"mt-4 p-4",children:[Object(p.jsx)("h1",{className:"text-xl font-semibold text-gray-700 text-center",children:"Write to contract"}),Object(p.jsxs)("form",{onSubmit:A,children:[Object(p.jsx)("div",{className:"my-3",children:Object(p.jsx)("input",{type:"text",name:"recipient",className:"input input-bordered block w-full focus:ring focus:outline-none",placeholder:"Recipient address"})}),Object(p.jsx)("div",{className:"my-3",children:Object(p.jsx)("input",{type:"text",name:"amount",className:"input input-bordered block w-full focus:ring focus:outline-none",placeholder:"Amount to transfer"})}),Object(p.jsx)("footer",{className:"p-4",children:Object(p.jsx)("button",{type:"submit",className:"btn btn-primary submit-button focus:ring focus:outline-none w-full",children:"Transfer"})})]})]})})]}),Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:"m-4 credit-card w-full lg:w-3/4 sm:w-auto shadow-lg mx-auto rounded-xl bg-white",children:Object(p.jsxs)("div",{className:"mt-4 p-4",children:[Object(p.jsx)("h1",{className:"text-xl font-semibold text-gray-700 text-center",children:"Recent transactions"}),Object(p.jsx)("p",{children:Object(p.jsx)(b,{txs:n})})]})})})]})}var j=document.getElementById("root");r.a.render(Object(p.jsx)(a.StrictMode,{children:Object(p.jsx)(m,{})}),j)}},[[93,1,2]]]);
//# sourceMappingURL=main.8101df3a.chunk.js.map