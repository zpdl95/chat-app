(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[658],{9856:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/chats/[room]",function(){return c(5174)}])},5174:function(p,c,a){"use strict";a.r(c),a.d(c,{default:function(){return Y}});var q=a(4924),r=a(6042),s=a(9396),t=a(828),u=a(9815),v=a(5893),w=a(7294),x=a(4480),d=a(3264),y=a(2239),e=a(1664),z=a.n(e),A=a(7814),B=a(7072),C=a(1163),f=a(5675),D=a.n(f),E=function(){var a=(0,x.Zl)(y.Mt);return(0,v.jsx)("li",{className:"chat-channel ; h-[40px] pt-4 group",children:(0,v.jsxs)("div",{className:"chat-channel__header ; h-full w-full grid grid-cols-[18px_1fr_18px] pr-2",children:[(0,v.jsx)("div",{className:"chevron ; flex justify-center items-center group-hover:text-white-300",children:(0,v.jsx)(A.G,{className:"text-[8px]",icon:B.ptq})}),(0,v.jsx)("div",{className:"header__title ; flex items-center group-hover:text-white-300",children:(0,v.jsx)("h2",{className:"text-xs",children:"\uCC44\uD305 \uCC44\uB110"})}),(0,v.jsx)("div",{onClick:function(){return a(!0)},className:"header__add icon ; flex justify-center items-center cursor-pointer",children:(0,v.jsx)(F,{})})]})})},F=function(){return(0,v.jsxs)("div",{className:"\uC544\uC774\uCF58\uC704\uCE58 ; relative flex flex-col cursor-pointer group z-20",children:[(0,v.jsx)(A.G,{icon:B.r8p}),(0,v.jsx)("div",{className:"\uD234\uD301\uC704\uCE58 ; absolute w-full -top-12 flex justify-center pointer-events-none",children:(0,v.jsxs)("div",{className:"\uAF2D\uC9D3\uC810\uC704\uCE58 ; fixed flex flex-col items-center ; scale-0 group-last:group-hover:scale-100 transition-all ease-in-out duration-75",children:[(0,v.jsx)("span",{className:"px-3 py-2 rounded-md shadow-md text-sm text-white-200 bg-black",children:"\uCC44\uD305 \uCC44\uB110 \uB9CC\uB4E4\uAE30"}),(0,v.jsx)("div",{className:"border-solid border-transparent border-[5px] border-t-black"})]})})]})},G=function(b){var a=b.rN,e=b.socket,f=(0,x.Zl)(y.yw),c=(0,t.Z)((0,x.FV)(y.db),2),g=c[0],h=c[1],d=(0,C.useRouter)();return(0,v.jsx)("li",{className:"chat-channel ; h-[34px]",children:(0,v.jsx)("div",{className:"list__room ; h-full py-[1px]",children:(0,v.jsxs)("div",{className:"h-full flex ml-2 px-2 rounded-md group  ".concat(d.query.room===a?"text-white-100 bg-gray-200":"hover:bg-gray-300"),children:[(0,v.jsx)(z(),{href:"/chats/".concat(a),children:(0,v.jsxs)("a",{className:"h-full flex py-[6px] items-center flex-1 overflow-hidden",onClick:function(){f(a),e.emit("join_room",a),g[a]||h(function(b){return(0,s.Z)((0,r.Z)({},b),(0,q.Z)({},a,[]))})},children:[(0,v.jsx)("div",{className:"mr-[6px] text-gray-200",children:(0,v.jsx)(A.G,{icon:B.olY})}),(0,v.jsx)("div",{className:"whitespace-nowrap overflow-hidden overflow-ellipsis ".concat(d.query.room===a?"":"group-hover:text-white-300"," "),children:a})]})}),(0,v.jsx)("div",{})]})})})},H=function(){var a=(0,x.sJ)(y.yo),b=(0,x.sJ)(y.fU),c=(0,x.sJ)(y.No);return(0,v.jsxs)("div",{className:"left-section__user-info ; grid grid-cols-[1.1fr_1fr] bg-gray-800",children:[(0,v.jsxs)("div",{className:"user-info ; grid grid-cols-[1fr_1.5fr]",children:[(0,v.jsx)("div",{className:"user-image ; place-self-center rounded-full w-2/3 h-2/3 bg-white",children:b&&(0,v.jsx)(D(),{className:"rounded-full",src:"".concat(c,"/avatar/").concat(b,".jpg"),alt:"avatar",width:48,height:48})}),(0,v.jsxs)("div",{className:"user-name ; self-center",children:[(0,v.jsx)("div",{className:"user-id ; text-white-100",children:a&&a}),(0,v.jsx)("div",{className:"socketId ; text-xs text-gray-100"})]})]}),(0,v.jsx)("div",{})]})},I=function(a){var b=a.allRooms,c=a.socket;return(0,v.jsxs)("div",{className:"left-section ; grid grid-rows-[3rem_1fr_3.3rem] bg-gray-700",children:[(0,v.jsx)("div",{className:"left-section__header ; shadow-[0px_1px_2px_-.5px] shadow-gray-900 z-10",children:(0,v.jsx)("h1",{className:""})}),(0,v.jsx)("div",{className:"left-section__area ; relative",children:(0,v.jsx)("div",{className:"left-section__channel-list ; w-full h-full absolute overflow-y-scroll overflow-x-hidden text-gray-400",children:(0,v.jsxs)("ul",{className:"",children:[(0,v.jsx)(E,{}),b&&b.map(function(a,b){return(0,v.jsx)(G,{rN:a,socket:c},b)})]})})}),(0,v.jsx)(H,{})]})},J=a(6005),g=a(7484),b=a.n(g);a(9132);var h=a(6176),i=a.n(h),j=a(4110),k=a.n(j),l=a(7124),m=a.n(l),n=a(356),o=a.n(n);b().locale("ko"),b().extend(i()),b().extend(k()),b().extend(m()),b().extend(o());var K=function(a){var d,f=a.nickName,g=a.chat,c=a.day,e=a.avatar,h=b()(c).format("LT"),i=b()(c).format("L"),j=b()(c).fromNow(),k=(0,x.sJ)(y.No);return(0,v.jsx)("li",{className:"chat-message ; w-full mt-[17px] animate-[wiggle_1s_ease-in-out_infinite] hover:bg-gray-700/90",children:(0,v.jsxs)("div",{className:"message__grid ; w-full pt-1 pb-2 grid grid-cols-[72px_1fr_48px]",children:[(0,v.jsx)("div",{className:"message__avatar ; relative",children:(0,v.jsx)("div",{className:"avatar ; absolute left-1/2 translate-x-[-50%] rounded-full w-[40px] h-[40px] bg-white",children:e&&(0,v.jsx)(D(),{className:"rounded-full",src:"".concat(k,"/avatar/").concat(e,".jpg"),alt:"avatar",width:48,height:48})})}),(0,v.jsxs)("div",{className:"message__content ; grid grid-rows-[22px_1fr]",children:[(0,v.jsxs)("h2",{children:[(0,v.jsx)("span",{className:"nickName ; mr-1 text-white-100",children:f}),(0,v.jsx)("span",{className:"time ; ml-1 text-xs text-gray-300",children:(d=c,b()(d).isToday()||b()(d).isYesterday())?"".concat(j," ").concat(h):i})]}),(0,v.jsx)("div",{className:"text-white-300",children:g})]}),(0,v.jsx)("div",{})]})})},L=function(){var a,b=(0,x.sJ)(y.db),c=(0,t.Z)((0,x.FV)(y.yw),2),d=c[0];c[1];var e=(0,w.useState)(!0),i=e[0],j=e[1],f=(0,w.useRef)(null),g=(0,w.useRef)(null),h=(0,w.useCallback)(J.ZP.debounce(function(){var b,c,d,a=null===(b=g.current)|| void 0===b?void 0:b.scrollTop,e=null===(c=g.current)|| void 0===c?void 0:c.clientHeight,f=null===(d=g.current)|| void 0===d?void 0:d.scrollHeight;0===a&&(a=1),a&&e&&f&&j(a+e>=f-30)},100),[]);return(0,w.useEffect)(function(){var a;null===(a=g.current)|| void 0===a||a.addEventListener("scroll",h)},[h]),(0,w.useEffect)(function(){if(i){var a;null===(a=f.current)|| void 0===a||a.scrollIntoView(!1)}},[b[d]]),(0,v.jsx)("div",{className:"messagesWrapper ; relative",children:(0,v.jsxs)("div",{ref:g,className:"scroller ; w-full h-full absolute top-0 left-0 overflow-y-scroll overflow-x-hidden",children:[null===(a=b[d])|| void 0===a?void 0:a.map(function(a,b){return(0,v.jsx)(K,{nickName:a.nickName,chat:a.text,avatar:a.avatar,day:a.day},b)}),(0,v.jsx)("div",{className:"h-[30px]"}),(0,v.jsx)("div",{ref:f})]})})},M=function(b){var a=b.allSockets,c=(0,x.sJ)(y.No);return(0,v.jsx)("div",{className:"content__user-container ; bg-gray-700",children:(0,v.jsx)("div",{className:"user-container__list ; w-full h-full relative",children:(0,v.jsx)("ul",{className:"list__scroller ; w-full h-full absolute top-0 left-0 overflow-y-hidden overflow-x-hidden hover:overflow-y-scroll",children:null==a?void 0:a.map(function(a,b){return(0,v.jsx)("li",{className:"h-[44px] ml-2 py-[1px]",children:(0,v.jsxs)("div",{className:"user-grid-box ; h-full px-2 grid grid-cols-[44px_1fr] rounded-md hover:bg-gray-300 group",children:[(0,v.jsx)("div",{className:"user-avatar ; w-[32px] h-[32px] self-center rounded-full bg-white",children:a.avatar&&(0,v.jsx)(D(),{className:"rounded-full",src:"".concat(c,"/avatar/").concat(a.avatar,".jpg"),alt:"avatar",width:48,height:48})}),(0,v.jsx)("div",{className:"user-nickName ; self-center text-gray-400 group-hover:text-white-300",children:a.nickName})]})},b)})})})})},N=a(7536),O=function(b){var f=b.socket,g=(0,x.sJ)(y.yw),h=(0,x.sJ)(y.yo),i=(0,x.sJ)(y.fU),a=(0,N.cI)(),j=a.setValue,c=a.register,d=a.handleSubmit,e=(0,w.useRef)(null);return(0,v.jsx)("form",{ref:e,onSubmit:d(function(a){f.emit("send_message",g,h,i,a.textarea)}),children:(0,v.jsx)("div",{className:"channel-text-area ; w-full h-full px-4",children:(0,v.jsx)("div",{className:"h-[65%] flex px-10 rounded-lg bg-gray-500",children:(0,v.jsx)("div",{className:"w-full",children:(0,v.jsx)("textarea",(0,s.Z)((0,r.Z)({},c("textarea",{required:!0})),{placeholder:"\uBA54\uC2DC\uC9C0 \uC791\uC131...",onKeyDown:function(b){if("Enter"===b.key){var a;b.preventDefault(),null===(a=e.current)|| void 0===a||a.requestSubmit(),j("textarea","")}},rows:1,className:"w-full text-base outline-none overflow-y-auto resize-none py-3 placeholder-gray-200 text-white-300 bg-transparent"}))})})})})},P=a(9417),Q=a(3024),R=function(a){var c=a.icon,d=a.bg,e=a.iconColor,b=a.text;return(0,v.jsxs)("div",{className:"\uC544\uC774\uCF58\uC704\uCE58 ; relative flex flex-col cursor-pointer ; justify-center h-12 w-12 mb-2 mx-auto rounded-3xl hover:rounded-2xl ".concat("gray"===e?"text-gray-100":"text-icon-green"," hover:text-white-200 bg-gray-600 ").concat("blue"===d?"hover:bg-blue-200":"hover:bg-green"," transition-all duration-100 ease-linear ; before:absolute before:-left-3 before:w-1 before:h-5 before:rounded-tr-full before:rounded-br-full before:bg-white before:scale-0 hover:before:scale-100 before:transition-all before:ease-in-out before:origin-left before:duration-200 before:pointer-events-none ; group"),children:[c,(0,v.jsx)("div",{className:"\uD234\uD301\uC704\uCE58 ; absolute w-full h-full left-[60px] flex items-center pointer-events-none z-10",children:(0,v.jsxs)("div",{className:"\uAF2D\uC9D3\uC810\uC704\uCE58 ; fixed flex flex-row-reverse items-center ; scale-0 group-hover:scale-100 transition-all ease-in-out origin-left duration-75",children:[(0,v.jsx)("span",{className:"whitespace-nowrap px-3 py-2 rounded-md shadow-md text-sm text-white-200 bg-black",children:void 0===b?"tooltip \uD83D\uDCA1":b}),(0,v.jsx)("div",{className:"border-solid border-transparent border-[5px] border-r-black"})]})})]})},S=function(){return(0,v.jsx)("hr",{className:"border border-gray-300 rounded-full mx-5 mb-2"})},T=function(){return(0,v.jsx)("nav",{className:"left-namespace ; relative bg-gray-900",children:(0,v.jsxs)("div",{className:"w-full h-full absolute flex flex-col pt-3",children:[(0,v.jsx)(R,{bg:"blue",iconColor:"gray",icon:(0,v.jsx)(A.G,{icon:Q.omb,className:"text-2xl"})}),(0,v.jsx)(S,{}),(0,v.jsx)(R,{bg:"green",iconColor:"green",icon:(0,v.jsx)(A.G,{icon:B.r8p,className:"text-xl"})}),(0,v.jsx)(R,{bg:"green",iconColor:"green",icon:(0,v.jsx)(A.G,{icon:B.GTN,className:"text-xl"})}),(0,v.jsx)(S,{}),(0,v.jsx)(R,{bg:"green",iconColor:"green",icon:(0,v.jsx)(A.G,{icon:B.fuY,className:"text-xl"})})]})})},U=(0,d.io)({path:"/api/socket"}),V=function(a){var b=a.rN;return(0,v.jsxs)("section",{className:"title ; flex items-center px-2 shadow-[0_1px_2px_-.5px] shadow-gray-900 z-10",children:[(0,v.jsxs)("div",{className:"h-[24px] flex flex-auto items-center",children:[(0,v.jsx)("div",{className:"w-[24px] mx-2",children:(0,v.jsx)(A.G,{icon:B.olY,className:"w-full h-full text-[24px] text-gray-200"})}),(0,v.jsx)("div",{className:"mr-2",children:(0,v.jsx)("h1",{className:"whitespace-nowrap text-[17px] leading-[22px] font-medium text-white-100",children:b})})]}),(0,v.jsxs)("div",{className:"h-[24px] flex items-center",children:[(0,v.jsx)("div",{className:"flex items-center justify-center mx-2 w-6 h-6 group",children:(0,v.jsx)(W,{icon:(0,v.jsx)(A.G,{icon:B.olY})})}),(0,v.jsx)("div",{className:"flex items-center justify-center mx-2 w-6 h-6 group",children:(0,v.jsx)(W,{icon:(0,v.jsx)(A.G,{icon:P.qmU})})}),(0,v.jsx)("div",{className:"flex items-center justify-center mx-2 w-6 h-6 group",children:(0,v.jsx)(W,{icon:(0,v.jsx)(A.G,{icon:P.Lad})})}),(0,v.jsx)("div",{className:"flex items-center justify-center mx-2 w-6 h-6 group",children:(0,v.jsx)(W,{icon:(0,v.jsx)(A.G,{icon:P.FVb})})}),(0,v.jsx)("div",{className:"h-full w-36 mx-2",children:(0,v.jsxs)("div",{className:"h-full w-full flex items-center rounded-md p-[2px] bg-gray-900",children:[(0,v.jsx)("input",{type:"text",placeholder:" \uAC80\uC0C9\uD558\uAE30",className:"w-full p-[2px] flex-1 text-base outline-none bg-transparent caret-white placeholder-gray-100/60 text-gray-100"}),(0,v.jsx)("div",{className:"w-[24px] h-[24px] flex justify-center items-center cursor-text text-sm text-gray-100",children:(0,v.jsx)(A.G,{icon:P.Y$T})})]})}),(0,v.jsx)("div",{className:"flex items-center justify-center mx-2 w-6 h-6 group",children:(0,v.jsx)(W,{icon:(0,v.jsx)(A.G,{icon:P.wK3})})}),(0,v.jsx)("div",{className:"flex items-center justify-center mx-2 w-6 h-6 group",children:(0,v.jsx)(W,{icon:(0,v.jsx)(A.G,{icon:P.FDd})})})]})]})},W=function(a){var b=a.icon;return(0,v.jsxs)("div",{className:"\uC544\uC774\uCF58\uC704\uCE58 ; w-full h-full relative flex flex-col justify-center cursor-pointer text-xl text-gray-100 group-hover:text-gray-50 group",children:[b,(0,v.jsx)("div",{className:"\uD234\uD301\uC704\uCE58 ; absolute w-full top-5 flex justify-center pointer-events-none z-10",children:(0,v.jsxs)("div",{className:"\uAF2D\uC9D3\uC810\uC704\uCE58 ; fixed flex flex-col-reverse items-center ; scale-0 group-last:group-hover:scale-100 transition-all ease-in-out duration-75",children:[(0,v.jsx)("span",{className:"px-3 py-2 rounded-md shadow-md text-sm text-white-200 bg-black",children:"\uB123\uACE0\uC2F6\uC740 \uD14D\uC2A4\uD2B8"}),(0,v.jsx)("div",{className:"border-solid border-transparent border-[5px] border-b-black"})]})})]})},X=function(){var a,c=function(){l(!1),setTimeout(function(){return m(!1)},200)},d=(0,w.useState)(!0),e=d[0],l=d[1],m=(0,x.Zl)(y.Mt),f=(0,t.Z)((0,x.FV)(y.yw),2),n=(f[0],f[1]),g=(0,t.Z)((0,x.FV)(y.F5),2),o=g[0];g[1];var b=(0,N.cI)(),i=b.register,j=b.handleSubmit,k=b.formState,p=(0,C.useRouter)(),h=(0,t.Z)((0,x.FV)(y.db),2),u=(h[0],h[1]);return(0,v.jsxs)("div",{className:"layerContainer ; absolute top-0 left-0 bottom-0 right-0 z-20",children:[(0,v.jsx)("div",{onClick:c,className:"backdrop ; fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-80 ".concat(e?"animate-bgOpen":"animate-bgClose")}),(0,v.jsx)("div",{className:"layer ; w-full h-full flex flex-col justify-center items-center",children:(0,v.jsx)("form",{onSubmit:j(function(a){n(a.roomName),u(function(b){return(0,s.Z)((0,r.Z)({},b),(0,q.Z)({},a.roomName,[]))}),p.push({pathname:"/chats/".concat(a.roomName)}),c()}),className:"".concat(e?"animate-formOpen":"animate-formClose"),children:(0,v.jsx)("div",{className:"w-[460px] h-[500px] relative rounded-xl bg-gray-600",children:(0,v.jsxs)("div",{className:"absolute w-full h-full grid grid-rows-[1fr_3fr_1fr]",children:[(0,v.jsxs)("div",{className:"flex p-4",children:[(0,v.jsx)("div",{className:"flex-auto text-2xl text-white-200",children:(0,v.jsx)("h1",{children:"Room \uB9CC\uB4E4\uAE30"})}),(0,v.jsx)("div",{className:"text-2xl text-gray-500",children:(0,v.jsx)("div",{onClick:c,className:"cursor-pointer hover:text-gray-100",children:(0,v.jsx)(A.G,{icon:P.g82})})})]}),(0,v.jsxs)("div",{className:"px-4",children:[(0,v.jsx)("div",{className:"mb-3 text-white-300",children:(0,v.jsx)("h2",{children:"Room \uC774\uB984"})}),(0,v.jsxs)("div",{children:[(0,v.jsxs)("div",{className:"flex rounded-sm p-3 bg-gray-900",children:[(0,v.jsx)("div",{className:"mr-2 text-white-300",children:(0,v.jsx)(A.G,{icon:B.olY})}),(0,v.jsx)("input",(0,s.Z)((0,r.Z)({},i("roomName",{required:"\uBC29 \uC774\uB984\uC744 \uC791\uC131\uD574\uC8FC\uC138\uC694",validate:{existsRoom:function(a){return!o.includes(a)||"\uC774\uBBF8 \uC874\uC7AC\uD558\uB294 \uBC29\uC785\uB2C8\uB2E4."}}})),{type:"text",placeholder:"\uC0C8\uB85C\uC6B4 Room",className:"flex-auto text-white-300 placeholder-gray-200 outline-none bg-transparent"}))]}),(0,v.jsx)("span",{className:"text-red-600",children:null===(a=k.errors.roomName)|| void 0===a?void 0:a.message})]})]}),(0,v.jsx)("div",{className:"p-4 bg-gray-700 rounded-b-xl",children:(0,v.jsxs)("div",{className:"h-full flex flex-row-reverse items-center",children:[(0,v.jsx)("button",{className:"px-4 py-2 rounded-sm text-sm text-white-200 bg-blue-200 hover:bg-blue-200/70",type:"submit",children:(0,v.jsx)("div",{children:"\uCC44\uB110 \uB9CC\uB4E4\uAE30"})}),(0,v.jsx)("button",{onClick:function(a){a.preventDefault(),c()},className:"px-4 py-2 text-sm hover:underline text-white-200",children:(0,v.jsx)("div",{className:"mx-4",children:"\uCDE8\uC18C"})})]})})]})})})})]})},Y=function(){var m=function(a,b){a.emit("join_room",b)},n=function(a,b,c){a.emit("set_user_data",b,c)},o=function(a){a.emit("show_all_sockets")},a=(0,t.Z)((0,x.FV)(y.yo),2),g=a[0],h=a[1],i=(0,x.sJ)(y.Mt),j=(0,x.sJ)(y.fU),b=(0,t.Z)((0,x.FV)(y.db),2),p=(b[0],b[1]),c=(0,t.Z)((0,x.FV)(y.yw),2),d=c[0];c[1];var e=(0,w.useState)(),k=e[0],z=e[1],f=(0,t.Z)((0,x.FV)(y.F5),2),l=f[0],A=f[1];return(0,w.useEffect)(function(){n(U,g,j)},[g,j]),(0,w.useEffect)(function(){m(U,d)},[d]),(0,w.useEffect)(function(){o(U)},[]),(0,w.useEffect)(function(){U.off("recevied_message"),U.on("recevied_message",function(a,b,c,d,e){console.log("\uBA54\uC2DC\uC9C0 \uBC1B\uC74C"),p(function(f){return(0,s.Z)((0,r.Z)({},f),(0,q.Z)({},a,(0,u.Z)(f[a]).concat([{nickName:b,avatar:c,text:d,day:e}])))})}),U.on("show_all_sockets",z),U.on("room_change",A)},[]),(0,w.useEffect)(function(){h(JSON.parse(localStorage.getItem("nickName")))},[h]),(0,v.jsxs)("div",{className:"background ; w-full h-full relative grid grid-cols-[4.5rem_1fr] overflow-hidden",children:[(0,v.jsx)(T,{}),(0,v.jsxs)("section",{className:"main-section ; h-full w-full grid grid-cols-[15rem_1fr] bg-zinc-800",children:[(0,v.jsx)(I,{allRooms:l,socket:U}),(0,v.jsxs)("div",{className:"chat ; grid grid-rows-[3rem_1fr] bg-gray-600",children:[(0,v.jsx)(V,{rN:d}),(0,v.jsxs)("div",{className:"content ; grid grid-cols-[1fr_15rem]",children:[(0,v.jsxs)("main",{className:"content__chat-content ; grid grid-rows-[1fr_4.5rem]",children:[(0,v.jsx)(L,{}),(0,v.jsx)(O,{socket:U})]}),(0,v.jsx)(M,{allSockets:k})]})]})]}),i&&(0,v.jsx)(X,{})]})}},2239:function(d,c,b){"use strict";b.d(c,{F5:function(){return k},Mt:function(){return h},No:function(){return e},db:function(){return i},fU:function(){return g},yo:function(){return f},yw:function(){return j}});var a=b(4480),e=(0,a.cn)({key:"prefix",default:"http://zpdl95.github.io/chat-app"}),f=(0,a.cn)({key:"nickName",default:""}),g=(0,a.cn)({key:"avatar",default:""}),h=(0,a.cn)({key:"makeRoomLayer",default:!1}),i=(0,a.cn)({key:"db",default:{일반:[]}}),j=(0,a.cn)({key:"roomName",default:"\uC77C\uBC18"}),k=(0,a.cn)({key:"roomList",default:[]})}},function(a){a.O(0,[913,976,948,224,886,774,888,179],function(){var b;return a(a.s=9856)}),_N_E=a.O()}])