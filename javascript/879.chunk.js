(self.webpackChunkjaimepinzon_github_io=self.webpackChunkjaimepinzon_github_io||[]).push([[879],{7298:(e,t,a)=>{"use strict";a.d(t,{Z:()=>Z});var l=a(3804),o=a.n(l),n=a(2318),r=a(7193),s=a(5816),c=a(1749),i=a(3629),d=a(6916),u=a(4617),m=a(2663),g=a(4837),p=a(282),_=a(9525),f=a(5709),v=a(6298),h=a(5435);const b=(0,d.Z)((()=>({modal:{background:"#1c1c1e"},actionGroup:{padding:[[5,0]],justifyContent:"center"},actions:{borderColor:"rgba(255,255,255,.3)",color:"#fff"},closeLabel:{justifyContent:"flex-end",padding:[[5,15]]},content:{borderColor:"rgba(255,255,255,.3)",textAlign:"center","& img, & video":{maxWidth:"150%"}},ratio:{"& img, & video":{maxWidth:"100%",maxHeight:"90%"}},iframeVid:{width:"100%",height:"90%"}})))((e=>{const{classes:t,callbackModal:a,modalInfo:n={},rootPath:r}=e,{open:s,src:c,isVideo:i}=n,[d,u]=(0,l.useState)("ratio"),b="ratio"===d?`${t.content} ${t.ratio}`:t.content;return o().createElement(m.Z,{classes:{paper:t.modal},fullScreen:!0,open:s},o().createElement(g.Z,{classes:{root:t.actionGroup,grouped:t.actions},size:"small"},!i&&o().createElement(p.Z,{classes:{root:t.close,label:t.closeLabel},onClick:()=>u("zoom"),endIcon:o().createElement(h.Z,null)},"Tamaño Real"),!i&&o().createElement(p.Z,{classes:{root:t.close,label:t.closeLabel},onClick:()=>u("ratio"),endIcon:o().createElement(v.Z,null)},"Ajustar en Pantalla"),o().createElement(p.Z,{classes:{root:t.close,label:t.closeLabel},onClick:()=>a(!1,void 0,!1),endIcon:o().createElement(f.Z,null)},"Cerrar Vista")),o().createElement(_.Z,{classes:{root:b}},c&&((e,t,a,l)=>{if(a)return e.indexOf("http")>-1?o().createElement("iframe",{src:e,frameBorder:0,className:l.iframeVid,allow:"accelerometer; autoplay; encrypted-media",allowFullScreen:!0}):o().createElement("video",{src:`${t}${e}`,controls:!0});return o().createElement("img",{src:`${t}${e}`})})(c,r,i,t)))}));var E=a(8414);function j(e){return e&&("video"===e.type||"iframe"===e.type)}const Z=(0,d.Z)((()=>({imgContainer:{background:"#1c1c1e",textAlign:"center"},quote:{color:"#1c1c1e",width:"90%",padding:10,margin:[[20,"auto"]],borderLeft:"3px solid rgba(36, 68, 116, .2)"},link:{position:"absolute",zIndex:10,width:"100%",height:"100%",top:0,left:0},videoOverlay:{position:"absolute",zIndex:5,width:"100%",height:"100%",top:0,left:0,background:"rgba(0,0,0, .5)",color:"#fff","& svg":{fontSize:60}},videoCaption:{position:"absolute",bottom:0,left:0,padding:8,width:"100%",textAlign:"left"},hide:{display:"none"}})))((e=>{const{classes:t,model:a={}}=e,{intro:d,rootPath:m,list:g=[]}=a,[p,_]=(0,l.useState)(!0),[f,v]=(0,l.useState)({open:!1,src:void 0,isVideo:!1}),h=(0,l.useCallback)(((e,t,a)=>{v({open:e,src:t,isVideo:a})}),[]);let Z=(0,l.useMemo)((()=>1),[a]);return(0,l.useEffect)((()=>{setTimeout((()=>{_(!1)}),1500)}),[]),o().createElement("div",null,o().createElement(n.Z,{classes:{root:t.quote},variant:"body2"},d),o().createElement(E.Z,{className:`${!p&&t.hide}`}),o().createElement(r.Z,{cellHeight:150,className:`${p?t.hide:t.gridList}`,cols:3},g.map(((e,a,l)=>{const r=(Z-(Z%2==0?4:11))/12,d=r>=0&&Number.isInteger(r),g=j(e),p=function(e,t,a){const l=e%3==0?"left":(e-1)%3==0&&"right";return!!l&&j(a["left"===l?t-1:t+1])}(Z,a,l),_=g||d?2:1,f=g||p?2:1,v=g?e.thumb:e.value;return Z+=_,o().createElement(s.Z,{key:`${e.value}-${a}`,cols:_,rows:f,classes:{tile:t.imgContainer}},o().createElement("img",{src:`${m}thumbnails/${v}`}),g&&o().createElement(c.Z,{container:!0,alignItems:"center",justify:"center",classes:{root:t.videoOverlay}},o().createElement(u.Z,null),e.caption&&o().createElement(n.Z,{classes:{root:t.videoCaption}},e.caption)),o().createElement(i.Z,{classes:{root:t.link},onClick:()=>h(!0,e.value,g)}))}))),o().createElement(b,{modalInfo:f,callbackModal:h,rootPath:m}))}))},6879:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>d});var l=a(3804),o=a.n(l),n=a(1749),r=a(6916),s=a(1543),c=a(7298);const i={intro:"Estas imagenes muestran el proceso de desgaste, para ampliarlas de click en cada una.",rootPath:"./assets/img/roca/",list:[{value:"lados_de_la_roca_1.jpg"},{value:"lados_de_la_roca_2.jpg"},{value:"lados_de_la_roca_3.jpg"},{value:"lados_de_la_roca_4.jpg"},{value:"lados_de_la_roca_5.jpg"},{value:"lados_de_la_roca_6.jpg"},{value:"lados_de_la_roca_7.jpg"},{value:"lados_de_la_roca_8.jpg"},{value:"lados_de_la_roca_9.jpg"},{value:"detalles.jpg"},{value:"detalles_1.jpg"},{value:"detalles_2.jpg"},{value:"detalles_3.jpg"},{value:"detalles_4.jpg"},{value:"detalles_5.jpg"},{value:"detalles_6.jpg"},{value:"detalles_7.jpg"},{value:"detalles_8.jpg"},{value:"detalles_9.jpg"},{value:"detalles_10.jpg"},{value:"IMG_3403.jpg"},{value:"IMG_3390.jpg"}]},d=(0,r.Z)((()=>({contentContainer:{padding:[[10,30]],maxWidth:800,margin:[[0,"auto"]]}})))((e=>{const{classes:t}=e;return o().createElement(s.Z,e,o().createElement(n.Z,{container:!0,classes:{root:t.contentContainer}},o().createElement(c.Z,{model:i})))}))},1543:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var l=a(3804),o=a.n(l),n=a(1749),r=a(2318);const s=(0,a(6916).Z)((()=>({sectionContainer:{width:"100%",minHeight:"100%",background:"#fafde8",flex:"1"},header:{padding:[[50,30,0]],flex:"1"},content:{padding:[[25,30,30]]},title:{padding:[[15,0]],color:"#fff"},subtitle:{color:"#fff",margin:[[10,0,25]],fontWeight:300,fontSize:12,maxWidth:350},contentContainer:{}})))((e=>{const{title:t,background:a,children:l,classes:s}=e;return o().createElement("div",{className:s.sectionContainer},o().createElement(n.Z,{item:!0,classes:{root:s.header},style:{background:a}},o().createElement(r.Z,{variant:"h2",classes:{root:s.title}},t)),o().createElement("div",{className:s.content},l))}))}}]);