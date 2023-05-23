import{b as U,a as N,u as ae,v as d,L as E,o as p,g as M,I as q,z as x,Y as w,Q as A,a1 as _,h as m,j as t,ab as Z,R as j,aB as Y,_ as G,T as re,a7 as le,d as O,m as ie,bq as K,bt as ue,bm as ce,r as B,bn as F,x as de,w as pe,af as me,e as fe,a9 as C,k as ge,S as T,E as H,aa as ve,av as ye,Z as be,bk as Ce,aE as he,D as Te,bu as R,K as P,i as Q,aY as $,br as V,bs as we,bv as Ne}from"./index-f94ac9b9.js";const Se=U({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),ke=["textContent"],Be=N({name:"ElBadge"}),Ee=N({...Be,props:Se,setup(s,{expose:n}){const e=s,o=ae("badge"),a=d(()=>e.isDot?"":E(e.value)&&E(e.max)?e.max<e.value?`${e.max}+`:`${e.value}`:`${e.value}`);return n({content:a}),(l,u)=>(p(),M("div",{class:m(t(o).b())},[q(l.$slots,"default"),x(Y,{name:`${t(o).namespace.value}-zoom-in-center`,persisted:""},{default:w(()=>[A(_("sup",{class:m([t(o).e("content"),t(o).em("content",l.type),t(o).is("fixed",!!l.$slots.default),t(o).is("dot",l.isDot)]),textContent:Z(t(a))},null,10,ke),[[j,!l.hidden&&(t(a)||l.isDot)]])]),_:1},8,["name"])],2))}});var Me=G(Ee,[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);const _e=re(Me),J=["success","info","warning","error"],i=ie({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:K?document.body:void 0}),$e=U({customClass:{type:String,default:i.customClass},center:{type:Boolean,default:i.center},dangerouslyUseHTMLString:{type:Boolean,default:i.dangerouslyUseHTMLString},duration:{type:Number,default:i.duration},icon:{type:le,default:i.icon},id:{type:String,default:i.id},message:{type:O([String,Object,Function]),default:i.message},onClose:{type:O(Function),required:!1},showClose:{type:Boolean,default:i.showClose},type:{type:String,values:J,default:i.type},offset:{type:Number,default:i.offset},zIndex:{type:Number,default:i.zIndex},grouping:{type:Boolean,default:i.grouping},repeatNum:{type:Number,default:i.repeatNum}}),xe={destroy:()=>!0},c=ue([]),ze=s=>{const n=c.findIndex(a=>a.id===s),e=c[n];let o;return n>0&&(o=c[n-1]),{current:e,prev:o}},Ie=s=>{const{prev:n}=ze(s);return n?n.vm.exposed.bottom.value:0},Le=(s,n)=>c.findIndex(o=>o.id===s)>0?20:n,De=["id"],Oe=["innerHTML"],Fe=N({name:"ElMessage"}),He=N({...Fe,props:$e,emits:xe,setup(s,{expose:n}){const e=s,{Close:o}=Ce,{ns:a,zIndex:l}=ce("message"),{currentZIndex:u,nextZIndex:f}=l,g=B(),y=B(!1),b=B(0);let S;const X=d(()=>e.type?e.type==="error"?"danger":e.type:"info"),ee=d(()=>{const r=e.type;return{[a.bm("icon",r)]:r&&F[r]}}),z=d(()=>e.icon||F[e.type]||""),se=d(()=>Ie(e.id)),I=d(()=>Le(e.id,e.offset)+se.value),ne=d(()=>b.value+I.value),te=d(()=>({top:`${I.value}px`,zIndex:u.value}));function k(){e.duration!==0&&({stop:S}=he(()=>{h()},e.duration))}function L(){S==null||S()}function h(){y.value=!1}function oe({code:r}){r===Te.esc&&h()}return de(()=>{k(),f(),y.value=!0}),pe(()=>e.repeatNum,()=>{L(),k()}),me(document,"keydown",oe),fe(g,()=>{b.value=g.value.getBoundingClientRect().height}),n({visible:y,bottom:ne,close:h}),(r,D)=>(p(),C(Y,{name:t(a).b("fade"),onBeforeLeave:r.onClose,onAfterLeave:D[0]||(D[0]=Ae=>r.$emit("destroy")),persisted:""},{default:w(()=>[A(_("div",{id:r.id,ref_key:"messageRef",ref:g,class:m([t(a).b(),{[t(a).m(r.type)]:r.type&&!r.icon},t(a).is("center",r.center),t(a).is("closable",r.showClose),r.customClass]),style:ge(t(te)),role:"alert",onMouseenter:L,onMouseleave:k},[r.repeatNum>1?(p(),C(t(_e),{key:0,value:r.repeatNum,type:t(X),class:m(t(a).e("badge"))},null,8,["value","type","class"])):T("v-if",!0),t(z)?(p(),C(t(H),{key:1,class:m([t(a).e("icon"),t(ee)])},{default:w(()=>[(p(),C(ve(t(z))))]),_:1},8,["class"])):T("v-if",!0),q(r.$slots,"default",{},()=>[r.dangerouslyUseHTMLString?(p(),M(ye,{key:1},[T(" Caution here, message could've been compromised, never use user's input as message "),_("p",{class:m(t(a).e("content")),innerHTML:r.message},null,10,Oe)],2112)):(p(),M("p",{key:0,class:m(t(a).e("content"))},Z(r.message),3))]),r.showClose?(p(),C(t(H),{key:2,class:m(t(a).e("closeBtn")),onClick:be(h,["stop"])},{default:w(()=>[x(t(o))]),_:1},8,["class","onClick"])):T("v-if",!0)],46,De),[[j,y.value]])]),_:3},8,["name","onBeforeLeave"]))}});var Re=G(He,[["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);let Pe=1;const W=s=>{const n=!s||P(s)||Q(s)||$(s)?{message:s}:s,e={...i,...n};if(!e.appendTo)e.appendTo=document.body;else if(P(e.appendTo)){let o=document.querySelector(e.appendTo);we(o)||(o=document.body),e.appendTo=o}return e},Ve=s=>{const n=c.indexOf(s);if(n===-1)return;c.splice(n,1);const{handler:e}=s;e.close()},Ue=({appendTo:s,...n},e)=>{const o=`message_${Pe++}`,a=n.onClose,l=document.createElement("div"),u={...n,id:o,onClose:()=>{a==null||a(),Ve(b)},onDestroy:()=>{V(null,l)}},f=x(Re,u,$(u.message)||Q(u.message)?{default:$(u.message)?u.message:()=>u.message}:null);f.appContext=e||v._context,V(f,l),s.appendChild(l.firstElementChild);const g=f.component,b={id:o,vnode:f,vm:g,handler:{close:()=>{g.exposed.visible.value=!1}},props:f.component.props};return b},v=(s={},n)=>{if(!K)return{close:()=>{}};if(E(R.max)&&c.length>=R.max)return{close:()=>{}};const e=W(s);if(e.grouping&&c.length){const a=c.find(({vnode:l})=>{var u;return((u=l.props)==null?void 0:u.message)===e.message});if(a)return a.props.repeatNum+=1,a.props.type=e.type,a.handler}const o=Ue(e,n);return c.push(o),o.handler};J.forEach(s=>{v[s]=(n={},e)=>{const o=W(n);return v({...o,type:s},e)}});function qe(s){for(const n of c)(!s||s===n.props.type)&&n.handler.close()}v.closeAll=qe;v._context=null;const je=Ne(v,"$message");export{je as E};
