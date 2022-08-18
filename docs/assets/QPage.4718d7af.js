import{c as m,r as A,w as I,s as W,h,Q as ke,g as Z,a as ae,R as Re,S as Fe,U as Be,V as Ve,y as Ae,A as H,D as Ee,E as $e,o as xe,z as ze,L as X,x as Oe,W as Te,O as se,H as Pe,I as Ie}from"./index.21ccbf86.js";import{a as Ce}from"./QBtn.c60bc557.js";import{c as J,b as K,u as Ne,a as je,h as De,Q as ce}from"./Ripple.4ce448b0.js";const Le={ratio:[String,Number]};function Qe(e,t){return m(()=>{const r=Number(e.ratio||(t!==void 0?t.value:void 0));return isNaN(r)!==!0&&r>0?{paddingBottom:`${100/r}%`}:null})}const Ue=16/9;var Mt=J({name:"QImg",props:{...Le,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:Ue},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:t,emit:r}){const o=A(e.initialRatio),v=Qe(e,o);let g;const i=[A(null),A(e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null)],C=A(0),x=A(!1),k=A(!1),B=m(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),_=m(()=>({width:e.width,height:e.height})),M=m(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),V=m(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));I(()=>F(),N);function F(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function N(n){if(clearTimeout(g),k.value=!1,n===null){x.value=!1,i[0].value=null,i[1].value=null;return}x.value=!0,i[C.value].value=n}function R({target:n}){g!==null&&(clearTimeout(g),o.value=n.naturalHeight===0?.5:n.naturalWidth/n.naturalHeight,z(n,1))}function z(n,s){g===null||s===1e3||(n.complete===!0?P(n):g=setTimeout(()=>{z(n,s+1)},50))}function P(n){g!==null&&(C.value=C.value===1?0:1,i[C.value].value=null,x.value=!1,k.value=!1,r("load",n.currentSrc||n.src))}function O(n){clearTimeout(g),x.value=!1,k.value=!0,i[0].value=null,i[1].value=null,r("error",n)}function E(n,s){return h("div",{class:"q-img__container absolute-full",key:n},s)}function p(n){const s=i[n].value,c={key:"img_"+n,class:M.value,style:V.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...s};return C.value===n?(c.class+=" q-img__image--waiting",Object.assign(c,{onLoad:R,onError:O})):c.class+=" q-img__image--loaded",E("img"+n,h("img",c))}function l(){return x.value!==!0?h("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},K(t[k.value===!0?"error":"default"])):h("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},t.loading!==void 0?t.loading():e.noSpinner===!0?void 0:[h(Ce,{color:e.spinnerColor,size:e.spinnerSize})])}return N(F()),W(()=>{clearTimeout(g),g=null}),()=>{const n=[];return v.value!==null&&n.push(h("div",{key:"filler",style:v.value})),k.value!==!0&&(i[0].value!==null&&n.push(p(0)),i[1].value!==null&&n.push(p(1))),n.push(h(ke,{name:"q-transition--fade"},l)),h("div",{class:B.value,style:_.value,role:"img","aria-label":e.alt},n)}}});const Se={dark:{type:Boolean,default:null}};function we(e,t){return m(()=>e.dark===null?t.dark.isActive:e.dark)}var _t=J({name:"QCard",props:{...Se,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const r=Z(),o=we(e,r.proxy.$q),v=m(()=>"q-card"+(o.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>h(e.tag,{class:v.value},K(t.default))}});function Ze({validate:e,resetValidation:t,requiresQForm:r}){const o=ae(Re,!1);if(o!==!1){const{props:v,proxy:g}=Z();Object.assign(g,{validate:e,resetValidation:t}),I(()=>v.disable,i=>{i===!0?(typeof t=="function"&&t(),o.unbindComponent(g)):o.bindComponent(g)}),v.disable!==!0&&o.bindComponent(g),W(()=>{v.disable!==!0&&o.unbindComponent(g)})}else r===!0&&console.error("Parent QForm not found on useFormChild()!")}const de=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,fe=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,ve=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,Y=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,G=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ge={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>de.test(e),hexaColor:e=>fe.test(e),hexOrHexaColor:e=>ve.test(e),rgbColor:e=>Y.test(e),rgbaColor:e=>G.test(e),rgbOrRgbaColor:e=>Y.test(e)||G.test(e),hexOrRgbColor:e=>de.test(e)||Y.test(e),hexaOrRgbaColor:e=>fe.test(e)||G.test(e),anyColor:e=>ve.test(e)||Y.test(e)||G.test(e)};"Boolean Number String Function Array Date RegExp Object".split(" ").forEach(e=>{e.toLowerCase()});const He={...Ne,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean};function Ke(e,t,r){return r<=t?t:Math.min(r,Math.max(t,e))}const re=50,pe=2*re,qe=pe*Math.PI,We=Math.round(qe*1e3)/1e3;J({name:"QCircularProgress",props:{...He,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:t}){const{proxy:{$q:r}}=Z(),o=je(e),v=m(()=>{const M=(r.lang.rtl===!0?-1:1)*e.angle;return{transform:e.reverse!==(r.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-M}deg)`:`rotate3d(0, 0, 1, ${M-90}deg)`}}),g=m(()=>e.instantFeedback!==!0&&e.indeterminate!==!0?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:""),i=m(()=>pe/(1-e.thickness/2)),C=m(()=>`${i.value/2} ${i.value/2} ${i.value} ${i.value}`),x=m(()=>Ke(e.value,e.min,e.max)),k=m(()=>qe*(1-(x.value-e.min)/(e.max-e.min))),B=m(()=>e.thickness/2*i.value);function _({thickness:M,offset:V,color:F,cls:N}){return h("circle",{class:"q-circular-progress__"+N+(F!==void 0?` text-${F}`:""),style:g.value,fill:"transparent",stroke:"currentColor","stroke-width":M,"stroke-dasharray":We,"stroke-dashoffset":V,cx:i.value,cy:i.value,r:re})}return()=>{const M=[];e.centerColor!==void 0&&e.centerColor!=="transparent"&&M.push(h("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:re-B.value/2,cx:i.value,cy:i.value})),e.trackColor!==void 0&&e.trackColor!=="transparent"&&M.push(_({cls:"track",thickness:B.value,offset:0,color:e.trackColor})),M.push(_({cls:"circle",thickness:B.value,offset:k.value,color:e.color}));const V=[h("svg",{class:"q-circular-progress__svg",style:v.value,viewBox:C.value,"aria-hidden":"true"},M)];return e.showValue===!0&&V.push(h("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},t.default!==void 0?t.default():[h("div",x.value)])),h("div",{class:`q-circular-progress q-circular-progress--${e.indeterminate===!0?"in":""}determinate`,style:o.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.indeterminate===!0?void 0:x.value},De(t.internal,V))}}});const Je=["rejected"],Xe=[...Je,"start","finish","added","removed"],Ye=()=>!0;function Ge(e){const t={};return e.forEach(r=>{t[r]=Ye}),t}Ge(Xe);let le,ee=0;const T=new Array(256);for(let e=0;e<256;e++)T[e]=(e+256).toString(16).substring(1);const et=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const r=new Uint8Array(t);return e.getRandomValues(r),r}}return t=>{const r=[];for(let o=t;o>0;o--)r.push(Math.floor(Math.random()*256));return r}})(),me=4096;function tt(){(le===void 0||ee+16>me)&&(ee=0,le=et(me));const e=Array.prototype.slice.call(le,ee,ee+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,T[e[0]]+T[e[1]]+T[e[2]]+T[e[3]]+"-"+T[e[4]]+T[e[5]]+"-"+T[e[6]]+T[e[7]]+"-"+T[e[8]]+T[e[9]]+"-"+T[e[10]]+T[e[11]]+T[e[12]]+T[e[13]]+T[e[14]]+T[e[15]]}const nt=[!0,!1,"ondemand"],lt={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>nt.includes(e)}};function at(e,t){const{props:r,proxy:o}=Z(),v=A(!1),g=A(null),i=A(null);Ze({validate:F,resetValidation:V});let C=0,x;const k=m(()=>r.rules!==void 0&&r.rules!==null&&r.rules.length>0),B=m(()=>r.disable!==!0&&k.value===!0),_=m(()=>r.error===!0||v.value===!0),M=m(()=>typeof r.errorMessage=="string"&&r.errorMessage.length>0?r.errorMessage:g.value);I(()=>r.modelValue,()=>{N()}),I(()=>r.reactiveRules,z=>{z===!0?x===void 0&&(x=I(()=>r.rules,()=>{N(!0)})):x!==void 0&&(x(),x=void 0)},{immediate:!0}),I(e,z=>{z===!0?i.value===null&&(i.value=!1):i.value===!1&&(i.value=!0,B.value===!0&&r.lazyRules!=="ondemand"&&t.value===!1&&R())});function V(){C++,t.value=!1,i.value=null,v.value=!1,g.value=null,R.cancel()}function F(z=r.modelValue){if(B.value!==!0)return!0;const P=++C;t.value!==!0&&r.lazyRules!==!0&&(i.value=!0);const O=(p,l)=>{v.value!==p&&(v.value=p);const n=l||void 0;g.value!==n&&(g.value=n),t.value=!1},E=[];for(let p=0;p<r.rules.length;p++){const l=r.rules[p];let n;if(typeof l=="function"?n=l(z):typeof l=="string"&&ge[l]!==void 0&&(n=ge[l](z)),n===!1||typeof n=="string")return O(!0,n),!1;n!==!0&&n!==void 0&&E.push(n)}return E.length===0?(O(!1),!0):(t.value=!0,Promise.all(E).then(p=>{if(p===void 0||Array.isArray(p)===!1||p.length===0)return P===C&&O(!1),!0;const l=p.find(n=>n===!1||typeof n=="string");return P===C&&O(l!==void 0,l),l===void 0},p=>(P===C&&(console.error(p),O(!0)),!1)))}function N(z){B.value===!0&&r.lazyRules!=="ondemand"&&(i.value===!0||r.lazyRules!==!0&&z!==!0)&&R()}const R=Fe(F,0);return W(()=>{x!==void 0&&x(),R.cancel()}),Object.assign(o,{resetValidation:V,validate:F}),Be(o,"hasError",()=>_.value),{isDirtyModel:i,hasRules:k,hasError:_,errorMessage:M,validate:F,resetValidation:V}}const he=/^on[A-Z]/;function rt(e,t){const r={listeners:A({}),attributes:A({})};function o(){const v={},g={};for(const i in e)i!=="class"&&i!=="style"&&he.test(i)===!1&&(v[i]=e[i]);for(const i in t.props)he.test(i)===!0&&(g[i]=t.props[i]);r.attributes.value=v,r.listeners.value=g}return Ve(o),o(),r}let oe=[],ot=[];function Me(e){ot.length===0?e():oe.push(e)}function ut(e){oe=oe.filter(t=>t!==e)}function ue(e){return e===void 0?`f_${tt()}`:e}function ie(e){return e!=null&&(""+e).length>0}const it={...Se,...lt,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},st=["update:modelValue","clear","focus","blur","popup-show","popup-hide"];function ct(){const{props:e,attrs:t,proxy:r,vnode:o}=Z();return{isDark:we(e,r.$q),editable:m(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:A(!1),focused:A(!1),hasPopupOpen:!1,splitAttrs:rt(t,o),targetUid:A(ue(e.for)),rootRef:A(null),targetRef:A(null),controlRef:A(null)}}function dt(e){const{props:t,emit:r,slots:o,attrs:v,proxy:g}=Z(),{$q:i}=g;let C;e.hasValue===void 0&&(e.hasValue=m(()=>ie(t.modelValue))),e.emitValue===void 0&&(e.emitValue=a=>{r("update:modelValue",a)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:c,onFocusout:f}),Object.assign(e,{clearValue:d,onControlFocusin:c,onControlFocusout:f,focus:n}),e.computedCounter===void 0&&(e.computedCounter=m(()=>{if(t.counter!==!1){const a=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,y=t.maxlength!==void 0?t.maxlength:t.maxValues;return a+(y!==void 0?" / "+y:"")}}));const{isDirtyModel:x,hasRules:k,hasError:B,errorMessage:_,resetValidation:M}=at(e.focused,e.innerLoading),V=e.floatingLabel!==void 0?m(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):m(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),F=m(()=>t.bottomSlots===!0||t.hint!==void 0||k.value===!0||t.counter===!0||t.error!==null),N=m(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),R=m(()=>`q-field row no-wrap items-start q-field--${N.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(V.value===!0?" q-field--float":"")+(P.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(B.value===!0?" q-field--error":"")+(B.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&F.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),z=m(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(B.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length>0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),P=m(()=>t.labelSlot===!0||t.label!==void 0),O=m(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&B.value!==!0?` text-${t.labelColor}`:"")),E=m(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:V.value,modelValue:t.modelValue,emitValue:e.emitValue})),p=m(()=>{const a={for:e.targetUid.value};return t.disable===!0?a["aria-disabled"]="true":t.readonly===!0&&(a["aria-readonly"]="true"),a});I(()=>t.for,a=>{e.targetUid.value=ue(a)});function l(){const a=document.activeElement;let y=e.targetRef!==void 0&&e.targetRef.value;y&&(a===null||a.id!==e.targetUid.value)&&(y.hasAttribute("tabindex")===!0||(y=y.querySelector("[tabindex]")),y&&y!==a&&y.focus({preventScroll:!0}))}function n(){Me(l)}function s(){ut(l);const a=document.activeElement;a!==null&&e.rootRef.value.contains(a)&&a.blur()}function c(a){clearTimeout(C),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,r("focus",a))}function f(a,y){clearTimeout(C),C=setTimeout(()=>{document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1)||(e.focused.value===!0&&(e.focused.value=!1,r("blur",a)),y!==void 0&&y())})}function d(a){Ae(a),i.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),r("update:modelValue",null),r("clear",t.modelValue),H(()=>{M(),i.platform.is.mobile!==!0&&(x.value=!1)})}function S(){const a=[];return o.prepend!==void 0&&a.push(h("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:X},o.prepend())),a.push(h("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},b())),B.value===!0&&t.noErrorIcon===!1&&a.push(j("error",[h(ce,{name:i.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?a.push(j("inner-loading-append",o.loading!==void 0?o.loading():[h(Ce,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&a.push(j("inner-clearable-append",[h(ce,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||i.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:d})])),o.append!==void 0&&a.push(h("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:X},o.append())),e.getInnerAppend!==void 0&&a.push(j("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&a.push(e.getControlChild()),a}function b(){const a=[];return t.prefix!==void 0&&t.prefix!==null&&a.push(h("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&a.push(e.getShadowControl()),e.getControl!==void 0?a.push(e.getControl()):o.rawControl!==void 0?a.push(o.rawControl()):o.control!==void 0&&a.push(h("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},o.control(E.value))),P.value===!0&&a.push(h("div",{class:O.value},K(o.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&a.push(h("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),a.concat(K(o.default))}function q(){let a,y;B.value===!0?_.value!==null?(a=[h("div",{role:"alert"},_.value)],y=`q--slot-error-${_.value}`):(a=K(o.error),y="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(a=[h("div",t.hint)],y=`q--slot-hint-${t.hint}`):(a=K(o.hint),y="q--slot-hint"));const u=t.counter===!0||o.counter!==void 0;if(t.hideBottomSpace===!0&&u===!1&&a===void 0)return;const w=h("div",{key:y,class:"q-field__messages col"},a);return h("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale")},[t.hideBottomSpace===!0?w:h(ke,{name:"q-transition--field-message"},()=>w),u===!0?h("div",{class:"q-field__counter"},o.counter!==void 0?o.counter():e.computedCounter.value):null])}function j(a,y){return y===null?null:h("div",{key:a,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},y)}Object.assign(g,{focus:n,blur:s});let L=!1;return Ee(()=>{L=!0}),$e(()=>{L===!0&&t.autofocus===!0&&g.focus()}),xe(()=>{ze.value===!0&&t.for===void 0&&(e.targetUid.value=ue()),t.autofocus===!0&&g.focus()}),W(()=>{clearTimeout(C)}),function(){const y=e.getControl===void 0&&o.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...p.value}:p.value;return h("label",{ref:e.rootRef,class:[R.value,v.class],style:v.style,...y},[o.before!==void 0?h("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:X},o.before()):null,h("div",{class:"q-field__inner relative-position col self-stretch"},[h("div",{ref:e.controlRef,class:z.value,tabindex:-1,...e.controlEvents},S()),F.value===!0?q():null]),o.after!==void 0?h("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:X},o.after()):null])}}const ye={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},te={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},_e=Object.keys(te);_e.forEach(e=>{te[e].regex=new RegExp(te[e].pattern)});const ft=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+_e.join("")+"])|(.)","g"),be=/[.*+?^${}()|[\]\\]/g,$=String.fromCharCode(1),vt={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function gt(e,t,r,o){let v,g,i,C;const x=A(null),k=A(_());function B(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}I(()=>e.type+e.autogrow,V),I(()=>e.mask,l=>{if(l!==void 0)F(k.value,!0);else{const n=E(k.value);V(),e.modelValue!==n&&t("update:modelValue",n)}}),I(()=>e.fillMask+e.reverseFillMask,()=>{x.value===!0&&F(k.value,!0)}),I(()=>e.unmaskedValue,()=>{x.value===!0&&F(k.value)});function _(){if(V(),x.value===!0){const l=P(E(e.modelValue));return e.fillMask!==!1?p(l):l}return e.modelValue}function M(l){if(l<v.length)return v.slice(-l);let n="",s=v;const c=s.indexOf($);if(c>-1){for(let f=l-s.length;f>0;f--)n+=$;s=s.slice(0,c)+n+s.slice(c)}return s}function V(){if(x.value=e.mask!==void 0&&e.mask.length>0&&B(),x.value===!1){C=void 0,v="",g="";return}const l=ye[e.mask]===void 0?e.mask:ye[e.mask],n=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",s=n.replace(be,"\\$&"),c=[],f=[],d=[];let S=e.reverseFillMask===!0,b="",q="";l.replace(ft,(y,u,w,Q,U)=>{if(Q!==void 0){const D=te[Q];d.push(D),q=D.negate,S===!0&&(f.push("(?:"+q+"+)?("+D.pattern+"+)?(?:"+q+"+)?("+D.pattern+"+)?"),S=!1),f.push("(?:"+q+"+)?("+D.pattern+")?")}else if(w!==void 0)b="\\"+(w==="\\"?"":w),d.push(w),c.push("([^"+b+"]+)?"+b+"?");else{const D=u!==void 0?u:U;b=D==="\\"?"\\\\\\\\":D.replace(be,"\\\\$&"),d.push(D),c.push("([^"+b+"]+)?"+b+"?")}});const j=new RegExp("^"+c.join("")+"("+(b===""?".":"[^"+b+"]")+"+)?$"),L=f.length-1,a=f.map((y,u)=>u===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+y):u===L?new RegExp("^"+y+"("+(q===""?".":q)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+y));i=d,C=y=>{const u=j.exec(y);u!==null&&(y=u.slice(1).join(""));const w=[],Q=a.length;for(let U=0,D=y;U<Q;U++){const ne=a[U].exec(D);if(ne===null)break;D=D.slice(ne.shift().length),w.push(...ne)}return w.length>0?w.join(""):y},v=d.map(y=>typeof y=="string"?y:$).join(""),g=v.split($).join(n)}function F(l,n,s){const c=o.value,f=c.selectionEnd,d=c.value.length-f,S=E(l);n===!0&&V();const b=P(S),q=e.fillMask!==!1?p(b):b,j=k.value!==q;c.value!==q&&(c.value=q),j===!0&&(k.value=q),document.activeElement===c&&H(()=>{if(q===g){const a=e.reverseFillMask===!0?g.length:0;c.setSelectionRange(a,a,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const a=f-1;R.right(c,a,a);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)>-1){const a=e.reverseFillMask===!0?f===0?q.length>b.length?1:0:Math.max(0,q.length-(q===g?0:Math.min(b.length,d)+1))+1:f;c.setSelectionRange(a,a,"forward");return}if(e.reverseFillMask===!0)if(j===!0){const a=Math.max(0,q.length-(q===g?0:Math.min(b.length,d+1)));a===1&&f===1?c.setSelectionRange(a,a,"forward"):R.rightReverse(c,a,a)}else{const a=q.length-d;c.setSelectionRange(a,a,"backward")}else if(j===!0){const a=Math.max(0,v.indexOf($),Math.min(b.length,f)-1);R.right(c,a,a)}else{const a=f-1;R.right(c,a,a)}});const L=e.unmaskedValue===!0?E(q):q;String(e.modelValue)!==L&&r(L,!0)}function N(l,n,s){const c=P(E(l.value));n=Math.max(0,v.indexOf($),Math.min(c.length,n)),l.setSelectionRange(n,s,"forward")}const R={left(l,n,s,c){const f=v.slice(n-1).indexOf($)===-1;let d=Math.max(0,n-1);for(;d>=0;d--)if(v[d]===$){n=d,f===!0&&n++;break}if(d<0&&v[n]!==void 0&&v[n]!==$)return R.right(l,0,0);n>=0&&l.setSelectionRange(n,c===!0?s:n,"backward")},right(l,n,s,c){const f=l.value.length;let d=Math.min(f,s+1);for(;d<=f;d++)if(v[d]===$){s=d;break}else v[d-1]===$&&(s=d);if(d>f&&v[s-1]!==void 0&&v[s-1]!==$)return R.left(l,f,f);l.setSelectionRange(c?n:s,s,"forward")},leftReverse(l,n,s,c){const f=M(l.value.length);let d=Math.max(0,n-1);for(;d>=0;d--)if(f[d-1]===$){n=d;break}else if(f[d]===$&&(n=d,d===0))break;if(d<0&&f[n]!==void 0&&f[n]!==$)return R.rightReverse(l,0,0);n>=0&&l.setSelectionRange(n,c===!0?s:n,"backward")},rightReverse(l,n,s,c){const f=l.value.length,d=M(f),S=d.slice(0,s+1).indexOf($)===-1;let b=Math.min(f,s+1);for(;b<=f;b++)if(d[b-1]===$){s=b,s>0&&S===!0&&s--;break}if(b>f&&d[s-1]!==void 0&&d[s-1]!==$)return R.leftReverse(l,f,f);l.setSelectionRange(c===!0?n:s,s,"forward")}};function z(l){if(Oe(l)===!0)return;const n=o.value,s=n.selectionStart,c=n.selectionEnd;if(l.keyCode===37||l.keyCode===39){const f=R[(l.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];l.preventDefault(),f(n,s,c,l.shiftKey)}else l.keyCode===8&&e.reverseFillMask!==!0&&s===c?R.left(n,s,c,!0):l.keyCode===46&&e.reverseFillMask===!0&&s===c&&R.rightReverse(n,s,c,!0)}function P(l){if(l==null||l==="")return"";if(e.reverseFillMask===!0)return O(l);const n=i;let s=0,c="";for(let f=0;f<n.length;f++){const d=l[s],S=n[f];if(typeof S=="string")c+=S,d===S&&s++;else if(d!==void 0&&S.regex.test(d))c+=S.transform!==void 0?S.transform(d):d,s++;else return c}return c}function O(l){const n=i,s=v.indexOf($);let c=l.length-1,f="";for(let d=n.length-1;d>=0&&c>-1;d--){const S=n[d];let b=l[c];if(typeof S=="string")f=S+f,b===S&&c--;else if(b!==void 0&&S.regex.test(b))do f=(S.transform!==void 0?S.transform(b):b)+f,c--,b=l[c];while(s===d&&b!==void 0&&S.regex.test(b));else return f}return f}function E(l){return typeof l!="string"||C===void 0?typeof l=="number"?C(""+l):l:C(l)}function p(l){return g.length-l.length<=0?l:e.reverseFillMask===!0&&l.length>0?g.slice(0,-l.length)+l:l+g.slice(l.length)}return{innerValue:k,hasMask:x,moveCursorForPaste:N,updateMaskValue:F,onMaskedKeydown:z}}const mt={name:String};function ht(e){return m(()=>e.name||e.for)}function yt(e,t){function r(){const o=e.modelValue;try{const v="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(o)===o&&("length"in o?Array.from(o):[o]).forEach(g=>{v.items.add(g)}),{files:v.files}}catch{return{files:void 0}}}return t===!0?m(()=>{if(e.type==="file")return r()}):m(r)}const bt=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,kt=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,xt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Ct=/[a-z0-9_ -]$/i;function St(e){return function(r){if(r.type==="compositionend"||r.type==="change"){if(r.target.qComposing!==!0)return;r.target.qComposing=!1,e(r)}else r.type==="compositionupdate"&&r.target.qComposing!==!0&&typeof r.data=="string"&&(Te.is.firefox===!0?Ct.test(r.data)===!1:bt.test(r.data)===!0||kt.test(r.data)===!0||xt.test(r.data)===!0)===!0&&(r.target.qComposing=!0)}}var Rt=J({name:"QInput",inheritAttrs:!1,props:{...it,...vt,...mt,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...st,"paste","change"],setup(e,{emit:t,attrs:r}){const o={};let v=NaN,g,i,C,x;const k=A(null),B=ht(e),{innerValue:_,hasMask:M,moveCursorForPaste:V,updateMaskValue:F,onMaskedKeydown:N}=gt(e,t,S,k),R=yt(e,!0),z=m(()=>ie(_.value)),P=St(d),O=ct(),E=m(()=>e.type==="textarea"||e.autogrow===!0),p=m(()=>E.value===!0||["text","search","url","tel","password"].includes(e.type)),l=m(()=>{const u={...O.splitAttrs.listeners.value,onInput:d,onPaste:f,onChange:q,onBlur:j,onFocus:se};return u.onCompositionstart=u.onCompositionupdate=u.onCompositionend=P,M.value===!0&&(u.onKeydown=N),e.autogrow===!0&&(u.onAnimationend=b),u}),n=m(()=>{const u={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:B.value,...O.splitAttrs.attributes.value,id:O.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return E.value===!1&&(u.type=e.type),e.autogrow===!0&&(u.rows=1),u});I(()=>e.type,()=>{k.value&&(k.value.value=e.modelValue)}),I(()=>e.modelValue,u=>{if(M.value===!0){if(i===!0&&(i=!1,String(u)===v))return;F(u)}else _.value!==u&&(_.value=u,e.type==="number"&&o.hasOwnProperty("value")===!0&&(g===!0?g=!1:delete o.value));e.autogrow===!0&&H(b)}),I(()=>e.autogrow,u=>{u===!0?H(b):k.value!==null&&r.rows>0&&(k.value.style.height="auto")}),I(()=>e.dense,()=>{e.autogrow===!0&&H(b)});function s(){Me(()=>{const u=document.activeElement;k.value!==null&&k.value!==u&&(u===null||u.id!==O.targetUid.value)&&k.value.focus({preventScroll:!0})})}function c(){k.value!==null&&k.value.select()}function f(u){if(M.value===!0&&e.reverseFillMask!==!0){const w=u.target;V(w,w.selectionStart,w.selectionEnd)}t("paste",u)}function d(u){if(!u||!u.target)return;if(e.type==="file"){t("update:modelValue",u.target.files);return}const w=u.target.value;if(u.target.qComposing===!0){o.value=w;return}if(M.value===!0)F(w,!1,u.inputType);else if(S(w),p.value===!0&&u.target===document.activeElement){const{selectionStart:Q,selectionEnd:U}=u.target;Q!==void 0&&U!==void 0&&H(()=>{u.target===document.activeElement&&w.indexOf(u.target.value)===0&&u.target.setSelectionRange(Q,U)})}e.autogrow===!0&&b()}function S(u,w){x=()=>{e.type!=="number"&&o.hasOwnProperty("value")===!0&&delete o.value,e.modelValue!==u&&v!==u&&(v=u,w===!0&&(i=!0),t("update:modelValue",u),H(()=>{v===u&&(v=NaN)})),x=void 0},e.type==="number"&&(g=!0,o.value=u),e.debounce!==void 0?(clearTimeout(C),o.value=u,C=setTimeout(x,e.debounce)):x()}function b(){const u=k.value;if(u!==null){const w=u.parentNode.style,{overflow:Q}=u.style;w.marginBottom=u.scrollHeight-1+"px",u.style.height="1px",u.style.overflow="hidden",u.style.height=u.scrollHeight+"px",u.style.overflow=Q,w.marginBottom=""}}function q(u){P(u),clearTimeout(C),x!==void 0&&x(),t("change",u.target.value)}function j(u){u!==void 0&&se(u),clearTimeout(C),x!==void 0&&x(),g=!1,i=!1,delete o.value,e.type!=="file"&&setTimeout(()=>{k.value!==null&&(k.value.value=_.value!==void 0?_.value:"")})}function L(){return o.hasOwnProperty("value")===!0?o.value:_.value!==void 0?_.value:""}W(()=>{j()}),xe(()=>{e.autogrow===!0&&b()}),Object.assign(O,{innerValue:_,fieldClass:m(()=>`q-${E.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:m(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:k,emitValue:S,hasValue:z,floatingLabel:m(()=>z.value===!0||ie(e.displayValue)),getControl:()=>h(E.value===!0?"textarea":"input",{ref:k,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...n.value,...l.value,...e.type!=="file"?{value:L()}:R.value}),getShadowControl:()=>h("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(E.value===!0?"":" text-no-wrap")},[h("span",{class:"invisible"},L()),h("span",e.shadowText)])});const a=dt(O),y=Z();return Object.assign(y.proxy,{focus:s,select:c,getNativeElement:()=>k.value}),a}}),Ft=J({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:t}){const{proxy:{$q:r}}=Z(),o=ae(Pe);ae(Ie,()=>{console.error("QPage needs to be child of QPageContainer")});const v=m(()=>{const i=(o.header.space===!0?o.header.size:0)+(o.footer.space===!0?o.footer.size:0);if(typeof e.styleFn=="function"){const C=o.isContainer.value===!0?o.containerHeight.value:r.screen.height;return e.styleFn(i,C)}return{minHeight:o.isContainer.value===!0?o.containerHeight.value-i+"px":r.screen.height===0?i!==0?`calc(100vh - ${i}px)`:"100vh":r.screen.height-i+"px"}}),g=m(()=>`q-page ${e.padding===!0?" q-layout-padding":""}`);return()=>h("main",{class:g.value,style:v.value},K(t.default))}});export{Ft as Q,Mt as a,_t as b,Rt as c,we as d,Se as u};