import{j as e,B as p,L as m,i as n,a as i,R as u,c as f,d as g}from"../chunks/chunk-CbAb6pUq.js";const l=void 0,d={id:"c8702e74fca7343d84b85dcc60fe3f89b7ad1ab252a630d2a155eb9f5ccedca9",name:"favicon_bAwOUQyCBMegUYsrDhdEP.ico",description:null,projectId:"20a0e9ee-4f0f-4fdb-a5ce-e8428f3eb706",size:256,type:"image",format:"png",createdAt:"2024-10-10T15:24:06.183+00:00",meta:{width:32,height:32}},x=[],h=[],y=({})=>e.jsx(p,{className:"w-body cy7x6bf c1wbduu5 c1mkyt2q cuykltx",children:e.jsx(m,{href:"/",className:"w-link c1vbzyyo",children:"home"})}),j=({data:o})=>{const{pageMeta:t}=o,{origin:s}=new URL(o.url);let r=t.socialImageUrl;return t.socialImageAssetName&&(r=`${s}${n({src:t.socialImageAssetName,format:"raw"})}`),e.jsxs(e.Fragment,{children:[o.url&&e.jsx("meta",{property:"og:url",content:o.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),l,r&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),l,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:a,content:c})=>e.jsx("meta",{property:a,content:c},a)),d&&e.jsx("link",{rel:"icon",href:n({src:d.name,width:144,height:144,fit:"pad",quality:100,format:"auto"})}),x.map(a=>e.jsx("link",{rel:"preload",href:`${i}${a.name}`,as:"font",crossOrigin:"anonymous"},a.id)),h.map(a=>e.jsx("link",{rel:"preload",href:`${i}${a.name}`,as:"image"},a.id))]})},b=Object.freeze(Object.defineProperty({__proto__:null,Head:j},Symbol.toStringTag,{value:"Module"})),v=({data:o})=>{const{system:t,resources:s,url:r}=o;return e.jsx(u.Provider,{value:{imageLoader:n,assetBaseUrl:i,imageBaseUrl:f,resources:s},children:e.jsx(y,{system:t},r)})},S=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"})),P={onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:g}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/rnbo/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:b}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/rnbo/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}}};export{P as configValuesSerialized};