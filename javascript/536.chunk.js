(self.webpackChunkjaimepinzon_github_io=self.webpackChunkjaimepinzon_github_io||[]).push([[536],{7298:(e,t,a)=>{"use strict";a.d(t,{Z:()=>k});var o=a(3804),n=a.n(o),l=a(2318),r=a(7193),s=a(5816),i=a(1749),c=a(3629),d=a(6916),m=a(4617),u=a(2663),g=a(4837),p=a(282),h=a(9525),f=a(5709),v=a(6298),b=a(5435);const E=(0,d.Z)((()=>({modal:{background:"#1c1c1e"},actionGroup:{padding:[[5,0]],justifyContent:"center"},actions:{borderColor:"rgba(255,255,255,.3)",color:"#fff"},closeLabel:{justifyContent:"flex-end",padding:[[5,15]]},content:{borderColor:"rgba(255,255,255,.3)",textAlign:"center","& img, & video":{maxWidth:"200%"}},ratio:{"& img, & video":{maxWidth:"100%",maxHeight:"90%"}},iframeVid:{width:"100%",height:"90%"}})))((e=>{const{classes:t,callbackModal:a,modalInfo:l={},rootPath:r}=e,{open:s,src:i,isVideo:c}=l,[d,m]=(0,o.useState)("ratio"),E="ratio"===d?`${t.content} ${t.ratio}`:t.content;return n().createElement(u.Z,{classes:{paper:t.modal},fullScreen:!0,open:s},n().createElement(g.Z,{classes:{root:t.actionGroup,grouped:t.actions},size:"small"},!c&&n().createElement(p.Z,{classes:{root:t.close,label:t.closeLabel},onClick:()=>m("zoom"),endIcon:n().createElement(b.Z,null)},"Tamaño Real"),!c&&n().createElement(p.Z,{classes:{root:t.close,label:t.closeLabel},onClick:()=>m("ratio"),endIcon:n().createElement(v.Z,null)},"Ajustar en Pantalla"),n().createElement(p.Z,{classes:{root:t.close,label:t.closeLabel},onClick:()=>a(!1,void 0,!1),endIcon:n().createElement(f.Z,null)},"Cerrar Vista")),n().createElement(h.Z,{classes:{root:E}},i&&((e,t,a,o)=>{if(a)return e.indexOf("http")>-1?n().createElement("iframe",{src:e,frameBorder:0,className:o.iframeVid,allow:"accelerometer; autoplay; encrypted-media",allowFullScreen:!0}):n().createElement("video",{src:`${t}${e}`,controls:!0});return n().createElement("img",{src:`${t}${e}`})})(i,r,c,t)))}));var Z=a(8414);const k=(0,d.Z)((()=>({imgContainer:{background:"#1c1c1e",textAlign:"center"},quote:{color:"#1c1c1e",width:"90%",padding:10,margin:[[20,"auto"]],borderLeft:"3px solid rgba(36, 68, 116, .2)"},link:{position:"absolute",zIndex:10,width:"100%",height:"100%",top:0,left:0},videoOverlay:{position:"absolute",zIndex:5,width:"100%",height:"100%",top:0,left:0,background:"rgba(0,0,0, .5)",color:"#fff","& svg":{fontSize:60}},hide:{display:"none"}})))((e=>{const{classes:t,model:a={}}=e,{intro:d,rootPath:u,list:g=[]}=a,[p,h]=(0,o.useState)(!0),[f,v]=(0,o.useState)({open:!1,src:void 0,isVideo:!1}),b=(0,o.useCallback)(((e,t,a)=>{v({open:e,src:t,isVideo:a})}),[]);let k=(0,o.useMemo)((()=>0),[a]),C=(0,o.useMemo)((()=>!1),[a]);return(0,o.useEffect)((()=>{setTimeout((()=>{h(!1)}),1500)}),[]),n().createElement("div",null,n().createElement(l.Z,{classes:{root:t.quote},variant:"body2"},d),n().createElement(Z.Z,{className:`${!p&&t.hide}`}),n().createElement(r.Z,{cellHeight:150,className:`${p?t.hide:t.gridList}`,cols:3},g.map(((e,a)=>{const o=(a+1)%4==0,l="video"===e.type||"iframe"===e.type,r=l||o?2:1,d=l||C&&(k+1)%3==0?2:1,g=l?e.thumb:e.value;return C=l,k+=r,n().createElement(s.Z,{key:`${e.value}-${a}`,cols:r,rows:d,classes:{tile:t.imgContainer}},n().createElement("img",{src:`${u}thumbnails/${g}`}),l&&n().createElement(i.Z,{container:!0,alignItems:"center",justify:"center",classes:{root:t.videoOverlay}},n().createElement(m.Z,null)),n().createElement(c.Z,{classes:{root:t.link},onClick:()=>b(!0,e.value,l)}))}))),n().createElement(E,{modalInfo:f,callbackModal:b,rootPath:u}))}))},1536:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>d});var o=a(3804),n=a.n(o),l=a(1543),r=a(7298),s=a(1749),i=a(6916);const c={intro:"Estas imagenes muestran el proceso de desgaste, para ampliarlas de click en cada una.",rootPath:"./assets/img/historia/",list:[{value:"detalle_de_cantera.jpg"},{value:"encantera.jpg"},{value:"historia1.jpg"},{value:"sobrelaroca.jpg"},{value:"vista1.jpg"},{type:"iframe",thumb:"video1.jpg",value:"https://www.youtube.com/embed/OQQhOgZ3pxg"},{value:"vista2.jpg"},{value:"vista3.jpg"},{value:"vista4.jpg"},{type:"iframe",thumb:"video2.jpg",value:"https://www.youtube.com/embed/y4w4x4dbbws"},{value:"vista5.jpg"},{value:"vista6.jpg"}]},d=(0,i.Z)((()=>({contentContainer:{padding:[[10,30]],maxWidth:800,margin:[[0,"auto"]]}})))((e=>{const{classes:t}=e;return n().createElement(l.Z,e,n().createElement(s.Z,{container:!0,classes:{root:t.contentContainer}},n().createElement(r.Z,{model:c})))}))},1543:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var o=a(3804),n=a.n(o),l=a(1749),r=a(2318);const s=(0,a(6916).Z)((()=>({sectionContainer:{width:"100%",minHeight:"100%",background:"#fafde8",flex:"1"},header:{padding:[[50,30,0]],flex:"1"},content:{padding:[[25,30,30]]},title:{padding:[[15,0]],color:"#fff"},subtitle:{color:"#fff",margin:[[10,0,25]],fontWeight:300,fontSize:12,maxWidth:350},contentContainer:{}})))((e=>{const{title:t,background:a,children:o,classes:s}=e;return n().createElement("div",{className:s.sectionContainer},n().createElement(l.Z,{item:!0,classes:{root:s.header},style:{background:a}},n().createElement(r.Z,{variant:"h2",classes:{root:s.title}},t)),n().createElement("div",{className:s.content},o))}))}}]);