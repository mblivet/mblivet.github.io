import{i,j as e,s as l,f as d,p as c,a as n,b as m,R as u,c as g,P as f,d as x}from"../chunks/chunk-CbAb6pUq.js";const j=({data:o})=>{const{pageMeta:t}=o,{origin:s}=new URL(o.url);let r=t.socialImageUrl;return t.socialImageAssetName&&(r=`${s}${i({src:t.socialImageAssetName,format:"raw"})}`),e.jsxs(e.Fragment,{children:[o.url&&e.jsx("meta",{property:"og:url",content:o.url}),e.jsx("title",{children:t.title}),e.jsx("meta",{property:"og:title",content:t.title}),t.description&&e.jsxs(e.Fragment,{children:[e.jsx("meta",{name:"description",content:t.description}),e.jsx("meta",{property:"og:description",content:t.description})]}),e.jsx("meta",{property:"og:type",content:"website"}),l,r&&e.jsx("meta",{property:"og:image",content:t.socialImageUrl}),l,t.excludePageFromSearch&&e.jsx("meta",{name:"robots",content:"noindex, nofollow"}),t.custom.map(({property:a,content:p})=>e.jsx("meta",{property:a,content:p},a)),d&&e.jsx("link",{rel:"icon",href:i({src:d.name,width:144,height:144,fit:"pad",quality:100,format:"auto"})}),c.map(a=>e.jsx("link",{rel:"preload",href:`${n}${a.name}`,as:"font",crossOrigin:"anonymous"},a.id)),m.map(a=>e.jsx("link",{rel:"preload",href:`${n}${a.name}`,as:"image"},a.id))]})},h=Object.freeze(Object.defineProperty({__proto__:null,Head:j},Symbol.toStringTag,{value:"Module"})),y=({data:o})=>{const{system:t,resources:s,url:r}=o;return e.jsx(u.Provider,{value:{imageLoader:i,assetBaseUrl:n,imageBaseUrl:g,resources:s},children:e.jsx(f,{system:t},r)})},S=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"})),P={onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:x}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/index/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:h}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/index/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:S}}};export{P as configValuesSerialized};
