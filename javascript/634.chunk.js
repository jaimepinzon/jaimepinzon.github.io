(self.webpackChunkjaimepinzon_github_io=self.webpackChunkjaimepinzon_github_io||[]).push([[634],{7298:(e,t,a)=>{"use strict";a.d(t,{Z:()=>k});var n=a(3804),o=a.n(n),l=a(2318),r=a(7193),s=a(5816),i=a(1749),c=a(3629),d=a(6916),m=a(4617),u=a(2663),g=a(4837),p=a(282),f=a(9525),h=a(5709),b=a(6298),v=a(5435);const E=(0,d.Z)((()=>({modal:{background:"#1c1c1e"},actionGroup:{padding:[[5,0]],justifyContent:"center"},actions:{borderColor:"rgba(255,255,255,.3)",color:"#fff"},closeLabel:{justifyContent:"flex-end",padding:[[5,15]]},content:{borderColor:"rgba(255,255,255,.3)",textAlign:"center","& img, & video":{maxWidth:"150%"}},ratio:{"& img, & video":{maxWidth:"100%",maxHeight:"90%"}},iframeVid:{width:"100%",height:"90%"}})))((e=>{const{classes:t,callbackModal:a,modalInfo:l={},rootPath:r}=e,{open:s,src:i,isVideo:c}=l,[d,m]=(0,n.useState)("ratio"),E="ratio"===d?`${t.content} ${t.ratio}`:t.content;return o().createElement(u.Z,{classes:{paper:t.modal},fullScreen:!0,open:s},o().createElement(g.Z,{classes:{root:t.actionGroup,grouped:t.actions},size:"small"},!c&&o().createElement(p.Z,{classes:{root:t.close,label:t.closeLabel},onClick:()=>m("zoom"),endIcon:o().createElement(v.Z,null)},"Tamaño Real"),!c&&o().createElement(p.Z,{classes:{root:t.close,label:t.closeLabel},onClick:()=>m("ratio"),endIcon:o().createElement(b.Z,null)},"Ajustar en Pantalla"),o().createElement(p.Z,{classes:{root:t.close,label:t.closeLabel},onClick:()=>a(!1,void 0,!1),endIcon:o().createElement(h.Z,null)},"Cerrar Vista")),o().createElement(f.Z,{classes:{root:E}},i&&((e,t,a,n)=>{if(a)return e.indexOf("http")>-1?o().createElement("iframe",{src:e,frameBorder:0,className:n.iframeVid,allow:"accelerometer; autoplay; encrypted-media",allowFullScreen:!0}):o().createElement("video",{src:`${t}${e}`,controls:!0});return o().createElement("img",{src:`${t}${e}`})})(i,r,c,t)))}));var Z=a(8414);function C(e){return e&&("video"===e.type||"iframe"===e.type)}const k=(0,d.Z)((()=>({imgContainer:{background:"#1c1c1e",textAlign:"center"},quote:{color:"#1c1c1e",width:"90%",padding:10,margin:[[20,"auto"]],borderLeft:"3px solid rgba(36, 68, 116, .2)"},link:{position:"absolute",zIndex:10,width:"100%",height:"100%",top:0,left:0},videoOverlay:{position:"absolute",zIndex:5,width:"100%",height:"100%",top:0,left:0,background:"rgba(0,0,0, .5)",color:"#fff","& svg":{fontSize:60}},videoCaption:{position:"absolute",bottom:0,left:0,padding:8,width:"100%",textAlign:"left"},hide:{display:"none"}})))((e=>{const{classes:t,model:a={}}=e,{intro:d,rootPath:u,list:g=[]}=a,[p,f]=(0,n.useState)(!0),[h,b]=(0,n.useState)({open:!1,src:void 0,isVideo:!1}),v=(0,n.useCallback)(((e,t,a)=>{b({open:e,src:t,isVideo:a})}),[]);let k=(0,n.useMemo)((()=>1),[a]);return(0,n.useEffect)((()=>{setTimeout((()=>{f(!1)}),1500)}),[]),o().createElement("div",null,o().createElement(l.Z,{classes:{root:t.quote},variant:"body2"},d),o().createElement(Z.Z,{className:`${!p&&t.hide}`}),o().createElement(r.Z,{cellHeight:150,className:`${p?t.hide:t.gridList}`,cols:3},g.map(((e,a,n)=>{const r=(k-(k%2==0?4:11))/12,d=r>=0&&Number.isInteger(r),g=C(e),p=function(e,t,a){const n=e%3==0?"left":(e-1)%3==0&&"right";return!!n&&C(a["left"===n?t-1:t+1])}(k,a,n),f=g||d?2:1,h=g||p?2:1,b=g?e.thumb:e.value;return k+=f,o().createElement(s.Z,{key:`${e.value}-${a}`,cols:f,rows:h,classes:{tile:t.imgContainer}},o().createElement("img",{src:`${u}thumbnails/${b}`}),g&&o().createElement(i.Z,{container:!0,alignItems:"center",justify:"center",classes:{root:t.videoOverlay}},o().createElement(m.Z,null),e.caption&&o().createElement(l.Z,{classes:{root:t.videoCaption}},e.caption)),o().createElement(c.Z,{classes:{root:t.link},onClick:()=>v(!0,e.value,g)}))}))),o().createElement(E,{modalInfo:h,callbackModal:v,rootPath:u}))}))},7634:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>d});var n=a(3804),o=a.n(n),l=a(1749),r=a(6916),s=a(1543),i=a(7298);const c={intro:"Litografías, grafito, lapices de colores, pigmentos minerales, frottage, intaglio en papel.",rootPath:"./assets/img/registro/",list:[{value:"1transp.png"},{value:"2transp.png"},{value:"11transp.png"},{value:"0transp.png"},{value:"10transp.png"},{value:"3transp.png"},{value:"4transp.png"},{value:"9transp.png"},{value:"5transp.png"},{value:"6transp.png"},{value:"7transp.png"},{value:"8transp.png"}]},d=(0,r.Z)((()=>({contentContainer:{padding:[[10,30]],maxWidth:800,margin:[[0,"auto"]]},imgContainer:{background:"none"}})))((e=>{const{classes:t}=e;return o().createElement(s.Z,e,o().createElement(l.Z,{container:!0,classes:{root:t.contentContainer}},o().createElement(i.Z,{classes:{imgContainer:t.imgContainer},model:c})))}))},1543:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var n=a(3804),o=a.n(n),l=a(1749),r=a(2318);const s=(0,a(6916).Z)((()=>({sectionContainer:{width:"100%",minHeight:"100%",background:"#fafde8",flex:"1"},header:{padding:[[50,30,0]],flex:"1"},content:{padding:[[25,30,30]]},title:{padding:[[15,0]],color:"#fff"},subtitle:{color:"#fff",margin:[[10,0,25]],fontWeight:300,fontSize:12,maxWidth:350},contentContainer:{}})))((e=>{const{title:t,background:a,children:n,classes:s}=e;return o().createElement("div",{className:s.sectionContainer},o().createElement(l.Z,{item:!0,classes:{root:s.header},style:{background:a}},o().createElement(r.Z,{variant:"h2",classes:{root:s.title}},t)),o().createElement("div",{className:s.content},n))}))}}]);