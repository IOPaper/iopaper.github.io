import{h as n,_ as r,r as t,o as c,c as l,w as u,b as i,g as _}from"./index.c32cfabd.js";const d={name:"NotFound",setup(){let e=n("medium");return{resultSize:e,LeZi(){switch(e.value){case"medium":e.value="large";break;case"large":e.value="huge";break;case"huge":e.value="medium";default:e.value="medium"}}}}},m=_("\u627E\u70B9\u4E50\u5B50\u5427");function p(e,f,B,o,h,k){const s=t("n-button"),a=t("n-result");return c(),l(a,{style:{transform:"translate(0, 50%)"},status:"404",title:"404 \u8D44\u6E90\u4E0D\u5B58\u5728",description:"\u751F\u6D3B\u603B\u5F52\u5E26\u70B9\u8352\u8C2C",size:o.resultSize},{footer:u(()=>[i(s,{onClick:e.LeZi},{default:u(()=>[m]),_:1},8,["onClick"])]),_:1},8,["size"])}const C=r(d,[["render",p]]);export{C as default};
