(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8966],{40826:function(t,e,n){Promise.resolve().then(n.bind(n,16308))},96384:function(t,e,n){"use strict";n.d(e,{Z:function(){return r}});class r{static toParams(t){let e="";for(let n in t)t.hasOwnProperty(n)&&(e+="".concat(n,"=").concat(t[n],"&"));return e.substring(0,e.length-1)}static toFormData(t){let e=new FormData;for(let n in t)t.hasOwnProperty(n)&&e.append(n,t[n]);return e}}},4147:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var r=n(97684),a=n(96384);class s{request(t,e,n,a){let s={...this.config,url:t,method:e,data:n,headers:a},i=r.Z.create();return i.interceptors.response.use(this.responseInterceptor,this.errorInterceptor),i.request(s)}get(t,e){return this.request("".concat(t,"?").concat(a.Z.toParams(e)),"get")}post(t,e,n){return this.request(t,"post",e,n)}responseInterceptor(t){switch(t.status){case 200:case 201:return t.data;default:return console.log(t),Promise.reject(t)}}errorInterceptor(t){let e={message:"服务器错误",...t.response.data};return Promise.reject(e)}constructor(t){this.config={},this.config.baseURL="https://web-evo.bulv.life/service/",t&&(this.config.baseURL=t)}}},24602:function(t,e,n){"use strict";n.d(e,{Z:function(){return C}});var r=n(32003),a=n(23426),s=n(18326),i=n(64840),c=n(95511),o=n(86383),l=n(97060),u=n(97684),h=n(4147),p=n(96384),v=n(63722),d=n(65225),f=n(9770),m=n(74204),g=n(87270),Z=n(60948),w=n(69646),x=n(46054),b=n(55060);n(51848),n(73072),n(59013);let j=()=>({editorEffect(t){t.editor.getInputField().addEventListener("onpaste",t=>{t.preventDefault()})}});var C=t=>{let[e,n]=(0,a.useState)(t.value||""),[C,k]=(0,a.useState)(t.title||""),[y,A]=(0,a.useState)({pathName:t.pathName||""}),N=[(0,c.Z)(),(0,o.Z)(),j(),{actions:[{title:"将选择的图片转换为可控制大小",icon:'<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0Zm-8-3v.551a3.5 3.5 0 1 1-.187 4.691C3.55 8.427 3.811 8 4.221 8c.176 0 .339.085.46.213A2.5 2.5 0 1 0 4.5 5H5.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 1 0Z" fill="#9A9CA3"/><path d="M18.75 5.5h-5.826a6.451 6.451 0 0 0-.422-1.5h6.248A3.25 3.25 0 0 1 22 7.25v11.5A3.25 3.25 0 0 1 18.75 22H7.25A3.25 3.25 0 0 1 4 18.75v-6.248c.474.198.977.34 1.5.422v5.826c0 .208.036.408.103.594l5.823-5.701a2.25 2.25 0 0 1 3.02-.116l.128.116 5.822 5.702c.067-.186.104-.386.104-.595V7.25a1.75 1.75 0 0 0-1.75-1.75Zm.58 14.901-5.805-5.686a.75.75 0 0 0-.966-.071l-.084.07-5.807 5.687c.182.064.378.099.582.099h11.5c.203 0 .399-.035.58-.099Z" fill="#9A9CA3"/><path d="M16.252 7.5a2.252 2.252 0 1 1 0 4.504 2.252 2.252 0 0 1 0-4.504Zm0 1.5a.752.752 0 1 0 0 1.504.752.752 0 0 0 0-1.504Z" fill="#9A9CA3"/></svg>',handler:{type:"action",click(t){var e;let n=null===(e=window.getSelection())||void 0===e?void 0:e.toString(),r=function(t){let e=/!\[.*\]\((.*?)\)/.exec(t);return e&&e.length>=2?e[1]:null}(n);r&&t.appendBlock('<featur>\n  <img width="100%" src="'.concat(r,'">\n</featur>'))}}}]},(0,x.Z)(),(0,b.Z)()],E=!!t.id,{enqueueSnackbar:P}=(0,v.Ds)(),_=async t=>{let e=[];try{if(t.length>1)throw Error("一次只能上传一张图片");let n=t[0].name;if(-1!==n.indexOf(" "))throw Error("文件名不允许包含空格");let r=new h.Z("https://web-evo.bulv.life/service/"),a=await r.get("/ali/oss/policy",{}),{dir:s}=a,i=p.Z.toFormData({key:s.length?"".concat(s,"/").concat(t[0].name):t[0].name,...a,file:t[0]}),{filepath:c}=await r.post(a.host,i,{"Content-Type":"multipart/form-data"});return e.push({url:c,alt:"",title:""}),e}catch(t){throw P(t.message,{variant:"error"}),new DOMException(t.message)}};return(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"",children:(0,r.jsxs)(d.Z,{children:[(0,r.jsx)(f.Z,{title:(0,r.jsxs)(m.Z,{sx:{flex:1,display:"flex"},mr:2,children:[(0,r.jsx)(g.Z,{label:"标题",size:"small",fullWidth:!0,value:C,sx:{mr:2},onChange:t=>{let{target:{value:e}}=t;return k(e)}}),(0,r.jsx)(g.Z,{label:"路径",size:"small",value:y.pathName,onChange:t=>{let{target:{value:e}}=t;return A({...y,pathName:e})}})]}),action:(0,r.jsxs)(m.Z,{sx:{display:"flex",alignItems:"center",mt:"6px",mb:"4px"},children:[(0,r.jsx)(Z.Z,{variant:"outlined",sx:{mr:2},onClick:()=>{l.Z.write(JSON.stringify({title:C,mark_content:e})).then(()=>P("内容已复制到剪贴板",{variant:"success"}))},children:"复制到剪贴板"}),(0,r.jsx)(Z.Z,{variant:"outlined",onClick:E?()=>{let n="".concat("https://web-evo.bulv.life/service/").concat("blogs"),r={_id:t.id,title:C,markContent:e};u.Z.put(n,r).then(()=>P("文章修改成功",{variant:"success"})).catch(t=>P(t.message,{variant:"error"}))}:()=>{let t="".concat("https://web-evo.bulv.life/service/").concat("blogs"),n={title:C,markContent:e,...y};u.Z.post(t,n).then(()=>P("文章发布成功",{variant:"success"})).catch(t=>P(t.message,{variant:"error"}))},children:E?"保存修改":"发布"})]})}),(0,r.jsx)(w.Z,{children:(0,r.jsx)(s.M,{value:e,plugins:N,locale:i,onChange:t=>n(t),uploadImages:_})})]})})})}},16308:function(t,e,n){"use strict";n.r(e),n.d(e,{Publish:function(){return s}});var r=n(32003);n(23426);var a=n(24602);let s=()=>(0,r.jsx)(a.Z,{})},59013:function(){}},function(t){t.O(0,[4215,8953,295,4173,6779,3504,2720,6221,3722,8769,9578,9095,8971,9065,8850,1744],function(){return t(t.s=40826)}),_N_E=t.O()}]);