(self.webpackChunkjaimepinzon_github_io=self.webpackChunkjaimepinzon_github_io||[]).push([[160],{7298:(e,t,a)=>{"use strict";a.d(t,{Z:()=>Z});var l=a(3804),o=a.n(l),n=a(2318),r=a(7193),c=a(5816),s=a(1749),i=a(3629),d=a(6916),m=a(4617),u=a(2663),g=a(4837),p=a(282),v=a(9525),f=a(5709),h=a(6298),b=a(5435);const j=(0,d.Z)((()=>({modal:{background:"#1c1c1e"},actionGroup:{padding:[[5,0]],justifyContent:"center"},actions:{borderColor:"rgba(255,255,255,.3)",color:"#fff"},closeLabel:{justifyContent:"flex-end",padding:[[5,15]]},content:{borderColor:"rgba(255,255,255,.3)",textAlign:"center","& img, & video":{maxWidth:"150%"}},ratio:{"& img, & video":{maxWidth:"100%",maxHeight:"90%"}},iframeVid:{width:"100%",height:"90%"}})))((e=>{const{classes:t,callbackModal:a,modalInfo:n={},rootPath:r}=e,{open:c,src:s,isVideo:i}=n,[d,m]=(0,l.useState)("ratio"),j="ratio"===d?`${t.content} ${t.ratio}`:t.content;return o().createElement(u.Z,{classes:{paper:t.modal},fullScreen:!0,open:c},o().createElement(g.Z,{classes:{root:t.actionGroup,grouped:t.actions},size:"small"},!i&&o().createElement(p.Z,{classes:{root:t.close,label:t.closeLabel},onClick:()=>m("zoom"),endIcon:o().createElement(b.Z,null)},"Tamaño Real"),!i&&o().createElement(p.Z,{classes:{root:t.close,label:t.closeLabel},onClick:()=>m("ratio"),endIcon:o().createElement(h.Z,null)},"Ajustar en Pantalla"),o().createElement(p.Z,{classes:{root:t.close,label:t.closeLabel},onClick:()=>a(!1,void 0,!1),endIcon:o().createElement(f.Z,null)},"Cerrar Vista")),o().createElement(v.Z,{classes:{root:j}},s&&((e,t,a,l)=>{if(a)return e.indexOf("http")>-1?o().createElement("iframe",{src:e,frameBorder:0,className:l.iframeVid,allow:"accelerometer; autoplay; encrypted-media",allowFullScreen:!0}):o().createElement("video",{src:`${t}${e}`,controls:!0});return o().createElement("img",{src:`${t}${e}`})})(s,r,i,t)))}));var E=a(8414);const Z=(0,d.Z)((()=>({imgContainer:{background:"#1c1c1e",textAlign:"center"},quote:{color:"#1c1c1e",width:"90%",padding:10,margin:[[20,"auto"]],borderLeft:"3px solid rgba(36, 68, 116, .2)"},link:{position:"absolute",zIndex:10,width:"100%",height:"100%",top:0,left:0},videoOverlay:{position:"absolute",zIndex:5,width:"100%",height:"100%",top:0,left:0,background:"rgba(0,0,0, .5)",color:"#fff","& svg":{fontSize:60}},hide:{display:"none"}})))((e=>{const{classes:t,model:a={}}=e,{intro:d,rootPath:u,list:g=[]}=a,[p,v]=(0,l.useState)(!0),[f,h]=(0,l.useState)({open:!1,src:void 0,isVideo:!1}),b=(0,l.useCallback)(((e,t,a)=>{h({open:e,src:t,isVideo:a})}),[]);let Z=(0,l.useMemo)((()=>0),[a]),k=(0,l.useMemo)((()=>!1),[a]);return(0,l.useEffect)((()=>{setTimeout((()=>{v(!1)}),1500)}),[]),o().createElement("div",null,o().createElement(n.Z,{classes:{root:t.quote},variant:"body2"},d),o().createElement(E.Z,{className:`${!p&&t.hide}`}),o().createElement(r.Z,{cellHeight:150,className:`${p?t.hide:t.gridList}`,cols:3},g.map(((e,a)=>{const l=(a+1)%4==0,n="video"===e.type||"iframe"===e.type,r=n||l?2:1,d=n||k&&(Z+1)%3==0?2:1,g=n?e.thumb:e.value;return k=n,Z+=r,o().createElement(c.Z,{key:`${e.value}-${a}`,cols:r,rows:d,classes:{tile:t.imgContainer}},o().createElement("img",{src:`${u}thumbnails/${g}`}),n&&o().createElement(s.Z,{container:!0,alignItems:"center",justify:"center",classes:{root:t.videoOverlay}},o().createElement(m.Z,null)),o().createElement(i.Z,{classes:{root:t.link},onClick:()=>b(!0,e.value,n)}))}))),o().createElement(j,{modalInfo:f,callbackModal:b,rootPath:u}))}))},160:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>d});var l=a(3804),o=a.n(l),n=a(1749),r=a(6916),c=a(1543),s=a(7298);const i={intro:"Estas imagenes muestran el proceso de desgaste, para ampliarlas de click en cada una.",rootPath:"./assets/img/cascara/",list:[{value:"molde1.jpg"},{value:"molde2.jpg"},{value:"molde4.jpg"},{value:"molde5.jpg"},{type:"iframe",thumb:"video1.jpg",value:"https://www.youtube.com/embed/-69_DdooCto"},{value:"molde6.jpg"},{value:"molde7.jpg"},{value:"molde8.jpg"},{value:"molde9.jpg"},{value:"molde10.jpg"},{type:"iframe",thumb:"video2.jpg",value:"https://www.youtube.com/embed/KlFUxyeDOIE"},{value:"molde11.jpg"},{value:"molde12.jpg"},{value:"molde13.jpg"},{value:"molde14.jpg"},{value:"molde16.jpg"},{value:"molde17.jpg"},{value:"molde18.jpg"},{value:"molde19.jpg"},{value:"molde20.jpg"},{value:"molde21.jpg"},{value:"molde22.jpg"},{value:"molde23.jpg"},{value:"molde24.jpg"},{value:"molde25.jpg"},{value:"molde26.jpg"},{value:"molde27.jpg"},{value:"molde28.jpg"},{value:"molde29.jpg"}]},d=(0,r.Z)((()=>({contentContainer:{padding:[[10,30]],maxWidth:800,margin:[[0,"auto"]]}})))((e=>{const{classes:t}=e;return o().createElement(c.Z,e,o().createElement(n.Z,{container:!0,classes:{root:t.contentContainer}},o().createElement(s.Z,{model:i})))}))},1543:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var l=a(3804),o=a.n(l),n=a(1749),r=a(2318);const c=(0,a(6916).Z)((()=>({sectionContainer:{width:"100%",minHeight:"100%",background:"#fafde8",flex:"1"},header:{padding:[[50,30,0]],flex:"1"},content:{padding:[[25,30,30]]},title:{padding:[[15,0]],color:"#fff"},subtitle:{color:"#fff",margin:[[10,0,25]],fontWeight:300,fontSize:12,maxWidth:350},contentContainer:{}})))((e=>{const{title:t,background:a,children:l,classes:c}=e;return o().createElement("div",{className:c.sectionContainer},o().createElement(n.Z,{item:!0,classes:{root:c.header},style:{background:a}},o().createElement(r.Z,{variant:"h2",classes:{root:c.title}},t)),o().createElement("div",{className:c.content},l))}))}}]);