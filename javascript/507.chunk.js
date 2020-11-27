(self.webpackChunkjaimepinzon_github_io=self.webpackChunkjaimepinzon_github_io||[]).push([[507],{7298:(e,t,a)=>{"use strict";a.d(t,{Z:()=>Z});var o=a(3804),n=a.n(o),c=a(2318),s=a(7193),l=a(5816),r=a(1749),i=a(3629),m=a(6916),u=a(4617),d=a(2663),p=a(4837),g=a(282),b=a(9525),f=a(5709),h=a(6298),v=a(5435);const w=(0,m.Z)((()=>({modal:{background:"#1c1c1e"},actionGroup:{padding:[[5,0]],justifyContent:"center"},actions:{borderColor:"rgba(255,255,255,.3)",color:"#fff"},closeLabel:{justifyContent:"flex-end",padding:[[5,15]]},content:{borderColor:"rgba(255,255,255,.3)",textAlign:"center","& img, & video":{maxWidth:"150%"}},ratio:{"& img, & video":{maxWidth:"100%",maxHeight:"90%"}},iframeVid:{width:"100%",height:"90%"}})))((e=>{const{classes:t,callbackModal:a,modalInfo:c={},rootPath:s}=e,{open:l,src:r,isVideo:i}=c,[m,u]=(0,o.useState)("ratio"),w="ratio"===m?`${t.content} ${t.ratio}`:t.content;return n().createElement(d.Z,{classes:{paper:t.modal},fullScreen:!0,open:l},n().createElement(p.Z,{classes:{root:t.actionGroup,grouped:t.actions},size:"small"},!i&&n().createElement(g.Z,{classes:{root:t.close,label:t.closeLabel},onClick:()=>u("zoom"),endIcon:n().createElement(v.Z,null)},"Tamaño Real"),!i&&n().createElement(g.Z,{classes:{root:t.close,label:t.closeLabel},onClick:()=>u("ratio"),endIcon:n().createElement(h.Z,null)},"Ajustar en Pantalla"),n().createElement(g.Z,{classes:{root:t.close,label:t.closeLabel},onClick:()=>a(!1,void 0,!1),endIcon:n().createElement(f.Z,null)},"Cerrar Vista")),n().createElement(b.Z,{classes:{root:w}},r&&((e,t,a,o)=>{if(a)return e.indexOf("http")>-1?n().createElement("iframe",{src:e,frameBorder:0,className:o.iframeVid,allow:"accelerometer; autoplay; encrypted-media",allowFullScreen:!0}):n().createElement("video",{src:`${t}${e}`,controls:!0});return n().createElement("img",{src:`${t}${e}`})})(r,s,i,t)))}));var y=a(8414);function E(e){return e&&("video"===e.type||"iframe"===e.type)}const Z=(0,m.Z)((()=>({imgContainer:{background:"#1c1c1e",textAlign:"center"},quote:{color:"#1c1c1e",width:"90%",padding:10,margin:[[20,"auto"]],borderLeft:"3px solid rgba(36, 68, 116, .2)"},link:{position:"absolute",zIndex:10,width:"100%",height:"100%",top:0,left:0},videoOverlay:{position:"absolute",zIndex:5,width:"100%",height:"100%",top:0,left:0,background:"rgba(0,0,0, .5)",color:"#fff","& svg":{fontSize:60}},videoCaption:{position:"absolute",bottom:0,left:0,padding:8,width:"100%",textAlign:"left"},hide:{display:"none"}})))((e=>{const{classes:t,model:a={}}=e,{intro:m,rootPath:d,list:p=[]}=a,[g,b]=(0,o.useState)(!0),[f,h]=(0,o.useState)({open:!1,src:void 0,isVideo:!1}),v=(0,o.useCallback)(((e,t,a)=>{h({open:e,src:t,isVideo:a})}),[]);let Z=(0,o.useMemo)((()=>1),[a]);return(0,o.useEffect)((()=>{setTimeout((()=>{b(!1)}),1500)}),[]),n().createElement("div",null,n().createElement(c.Z,{classes:{root:t.quote},variant:"body2"},m),n().createElement(y.Z,{className:`${!g&&t.hide}`}),n().createElement(s.Z,{cellHeight:150,className:`${g?t.hide:t.gridList}`,cols:3},p.map(((e,a,o)=>{const s=(Z-(Z%2==0?4:11))/12,m=s>=0&&Number.isInteger(s),p=E(e),g=function(e,t,a){const o=e%3==0?"left":(e-1)%3==0&&"right";return!!o&&E(a["left"===o?t-1:t+1])}(Z,a,o),b=p||m?2:1,f=p||g?2:1,h=p?e.thumb:e.value;return Z+=b,n().createElement(l.Z,{key:`${e.value}-${a}`,cols:b,rows:f,classes:{tile:t.imgContainer}},n().createElement("img",{src:`${d}thumbnails/${h}`}),p&&n().createElement(r.Z,{container:!0,alignItems:"center",justify:"center",classes:{root:t.videoOverlay}},n().createElement(u.Z,null),e.caption&&n().createElement(c.Z,{classes:{root:t.videoCaption}},e.caption)),n().createElement(i.Z,{classes:{root:t.link},onClick:()=>v(!0,e.value,p)}))}))),n().createElement(w,{modalInfo:f,callbackModal:v,rootPath:d}))}))},2507:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>m});var o=a(3804),n=a.n(o),c=a(1749),s=a(6916),l=a(1543),r=a(7298);const i={intro:"Son tres cuerpos los que entran en juego: Estoy yo, como sujeto que efectúa una acción. Esta la roca ígnea, como medio para des-acumular capas. Está la roca sedimentaria, como cuerpo cambiante supeditado a transformarse en tiempos ajenos a ella. Registros de distintos momentos de mimesis, acción de des-acumular, recoger, esperar.",rootPath:"./assets/img/desacumulacion/",list:[{type:"iframe",thumb:"desacum1.jpg",value:"https://www.youtube.com/embed/aKKJsySlsK4",caption:"Des-acumulación #1"},{value:"desac1.jpg"},{type:"iframe",thumb:"desacum30.jpg",value:"https://www.youtube.com/embed/oIz0ao8PVsQ",caption:"Des-acumulación #30"},{value:"desac2.jpg"},{type:"iframe",thumb:"desacum37video.jpg",value:"https://www.youtube.com/embed/WO5tmfngerc"},{value:"desac3.jpg"},{type:"iframe",thumb:"desacum33.jpg",value:"https://www.youtube.com/embed/T6C1pYtomZI",caption:"Des-acumulación #33"},{value:"desacumular2.jpg"},{type:"iframe",thumb:"desacum41video.jpg",value:"https://www.youtube.com/embed/K5MLJLkUjXc"},{value:"desac5.jpg"},{type:"iframe",thumb:"desacum35.jpg",value:"https://www.youtube.com/embed/kxpxTBGys6g",caption:"Des-acumulación #35"},{value:"desac6.jpg"},{type:"iframe",thumb:"desacum42video.jpg",value:"https://www.youtube.com/embed/dA-K3-1EMHg"},{value:"desacumular1.jpg"},{type:"iframe",thumb:"desacum43video.jpg",value:"https://www.youtube.com/embed/1yFy7yGw_bw"},{value:"desacumular3.jpg"},{type:"iframe",thumb:"desacum44.jpg",value:"https://www.youtube.com/embed/Sy3r0cLzCuU",caption:"Des-acumulación #44"},{value:"desac4.jpg"}]},m=(0,s.Z)((()=>({contentContainer:{padding:[[10,30]],maxWidth:800,margin:[[0,"auto"]]}})))((e=>{const{classes:t}=e;return n().createElement(l.Z,e,n().createElement(c.Z,{container:!0,classes:{root:t.contentContainer}},n().createElement(r.Z,{model:i})))}))},1543:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var o=a(3804),n=a.n(o),c=a(1749),s=a(2318);const l=(0,a(6916).Z)((()=>({sectionContainer:{width:"100%",minHeight:"100%",background:"#fafde8",flex:"1"},header:{padding:[[50,30,0]],flex:"1"},content:{padding:[[25,30,30]]},title:{padding:[[15,0]],color:"#fff"},subtitle:{color:"#fff",margin:[[10,0,25]],fontWeight:300,fontSize:12,maxWidth:350},contentContainer:{}})))((e=>{const{title:t,background:a,children:o,classes:l}=e;return n().createElement("div",{className:l.sectionContainer},n().createElement(c.Z,{item:!0,classes:{root:l.header},style:{background:a}},n().createElement(s.Z,{variant:"h2",classes:{root:l.title}},t)),n().createElement("div",{className:l.content},o))}))}}]);