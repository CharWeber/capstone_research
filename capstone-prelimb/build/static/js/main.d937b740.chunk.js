(this["webpackJsonpcapstone-prelimb"]=this["webpackJsonpcapstone-prelimb"]||[]).push([[0],{252:function(e,t,n){},253:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(32),i=n(33),l=n(57),s=n(70),d=n(31),o=n(186),j=n(29),u=n(295),b=n(296),O=n(297),x=n(2),h=n(5),p=n(12),f=n(13),v=n(83),m=n.n(v),g=n(6),y=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(x.a)(this,n),(a=t.call(this,e)).state={},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=m.a.Engine,t=m.a.Render,n=m.a.World,a=m.a.Bodies,r=m.a.Mouse,c=m.a.MouseConstraint,i=e.create({}),l=t.create({element:this.refs.scene,engine:i,options:{width:1e3,height:600,wireframes:!1}});n.add(i.world,[a.rectangle(200,0,1e4,50,{isStatic:!0}),a.rectangle(200,600,1e4,50,{isStatic:!0})]);var s=r.create(l.canvas),d=c.create(i,{mouse:s,constraint:{stiffness:.2,render:{visible:!1}}});n.add(i.world,d),m.a.Events.on(d,"mousedown",(function(e){n.add(i.world,a.circle(550,50,30,{restitution:.5}))})),e.run(i),t.run(l)}},{key:"render",value:function(){return Object(g.jsx)("div",{ref:"scene"})}}]),n}(r.a.Component);function D(){return Object(g.jsxs)(u.a,{children:[Object(g.jsx)("div",{children:Object(g.jsx)(b.a,{sx:{height:"100px",width:"100%",marginTop:"5%"},children:Object(g.jsx)(O.a,{variant:"h1",component:"div",children:"Home Court"})})}),Object(g.jsx)(y,{})]})}var C=n(40),E=n(0),S=n.n(E),I=n(4),k=n(14),A=n(293),_=n(292),w=n(298),R=n(299),T=n(300);function B(e){var t=e.handleSelect,n=null;return null!==t&&(n=Object(g.jsx)(A.a,{onClick:function(){return t(e.id)},children:"See Reservations"})),Object(g.jsx)("div",{children:Object(g.jsx)(_.a,{sx:{padding:"10px",width:"100%",height:"10%",borderColor:"994B68",borderStyle:"solid",backgroundColor:"#E0C9D1",borderRadius:"5px",margin:"10px",textAlign:"center"},children:Object(g.jsxs)(w.a,{children:[Object(g.jsx)(O.a,{variant:"h6",component:"div",children:e.name}),Object(g.jsx)(R.a,{}),Object(g.jsx)(T.a,{children:n})]})})})}var F=n(294),L=n(301);function P(e){var t,n=e.department,a=e.onClickFacility,r=Object(i.b)(Object(d.f)(),"facilities"),c=Object(d.g)(r),l=c.data,s=c.status,o=null,j=null;o=n?null===l||void 0===l?void 0:l.filter((function(e){return e.department===n})):l;return a&&(j=function(e){a(e)}),Object(g.jsxs)("div",{children:["loading"===s?Object(g.jsx)(L.a,{color:"secondary"}):null,Object(g.jsx)(F.a,{container:!0,children:null===(t=o)||void 0===t?void 0:t.map((function(e,t){return Object(g.jsx)(F.a,{item:!0,xs:12,children:Object(g.jsx)(B,{id:e.NO_ID_FIELD,name:e.name,handleSelect:j},e.NO_ID_FIELD)},t)}))})]})}function N(){var e=Object(i.b)(Object(d.f)(),"facilities"),t=Object(d.i)(),n=t.status2,r=t.data,c=Object(a.useState)({name:"",department:"general"}),l=Object(k.a)(c,2),s=l[0],o=l[1],j=Object(a.useState)(!1),O=Object(k.a)(j,2),x=O[0],h=O[1],p=null,f=function(){var t=Object(I.a)(S.a.mark((function t(){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(i.a)(e,s);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),alert("Error "+t.t0.message);case 8:h(!1);case 9:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(){return t.apply(this,arguments)}}();return"loading"===n?Object(g.jsx)("div",{children:"Loading..."}):!1===r?Object(g.jsx)("div",{children:"You must be signed In to view this page"}):(x&&(p=Object(g.jsxs)("div",{children:[Object(g.jsx)("input",{type:"text",placeholder:"Name Of Facility",id:"name",style:{width:"20%",marginRight:"10px"},value:s.name,onChange:function(e){return o(Object(C.a)(Object(C.a)({},s),{},{name:e.target.value}))}}),Object(g.jsxs)("select",{id:"deaprtment",name:"department",defaultValue:"athletic",onChange:function(e){return o(Object(C.a)(Object(C.a)({},s),{},{department:e.target.value}))},children:[Object(g.jsx)("option",{value:"athletic",children:"Athletic"}),Object(g.jsx)("option",{value:"craft",children:"Crafts"}),Object(g.jsx)("option",{value:"theatre",children:"Theatre"})]}),Object(g.jsx)(A.a,{variant:"contained",onClick:Object(I.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",f());case 1:case"end":return e.stop()}}),e)}))),children:"ADD"})]})),Object(g.jsx)("div",{children:Object(g.jsxs)(u.a,{children:[p,Object(g.jsx)(b.a,{sx:{textAlign:"center"},children:Object(g.jsx)(A.a,{variant:"outlined",onClick:function(){return h(!x)},children:"Add Facility"})}),Object(g.jsx)(P,{})]})}))}var U=n(161),H=n(154),M=n(159),W=n(80),z=n(289),K=n(291),G=n(167),q=n(82),J=n.n(q),V=(n(209),n(210),{"en-US":n(110)}),Y=Object(G.b)({format:U.default,parse:M.default,startOfWeek:W.default,getDay:H.default,locales:V}),X=function(e){var t=e.className,n=e.children;return Object(g.jsx)("div",{style:{padding:"16px",background:"#216ba5",color:"#fff",zIndex:"2"},children:Object(g.jsx)(q.CalendarContainer,{className:t,children:Object(g.jsx)("div",{style:{position:"relative"},children:n})})})};function Q(e){var t=e.facilityId,n=e.department,r=Object(d.j)(),c=Object(i.b)(Object(d.f)(),"reservations"),l=Object(d.g)(c),s=l.status,o=l.data,j=Object(a.useState)(!1),u=Object(k.a)(j,2),O=u[0],x=u[1],h=Object(a.useState)({title:"",start:new Date,end:new Date,allDay:!1,createdBy:(null===r||void 0===r?void 0:r.data)?r.data.uid:null,facilityId:t||"general",resource:null,department:n||null}),p=Object(k.a)(h,2),f=p[0],v=p[1];Object(a.useEffect)((function(){v({title:"",start:"",end:"",allDay:!1,createdBy:r.data?r.data.uid:null,facilityId:t||"general",department:n||null})}),[t,r,n]);var m=null,y=null,D=null,E=function(){var e=Object(I.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(i.a)(c,f);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert("Error: "+e.t0.message);case 8:R();case 9:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),R=function(){x(!1),v({title:"",start:"",end:"",createdBy:r.data?r.data.uid:null,facilityId:t||"general",department:n||null})};if("loading"===s)return Object(g.jsx)(L.a,{color:"secondary"});if(D=n?null===o||void 0===o?void 0:o.filter((function(e){return e.department===n})):o,null!==t){var T,B=[];(null===(T=D)||void 0===T?void 0:T.filter((function(e){return e.facilityId===t}))).forEach((function(e){var t={title:e.title,start:e.start.toDate(),end:e.end.toDate(),createdBy:e.createdBy,facilityId:e.facilityId,resource:e.resource,NO_ID_FIELD:e.NO_ID_FIELD,allDay:e.allDay};B.push(t)})),m=B}else{var P=[];D.forEach((function(e){var t={title:e.title,start:e.start.toDate(),end:e.end.toDate(),createdBy:e.createdBy,facilityId:e.facilityId,resource:e.resource,NO_ID_FIELD:e.NO_ID_FIELD,allDay:e.allDay};P.push(t)})),m=P}return r.data&&!O&&t?y=Object(g.jsx)(b.a,{sx:{padding:"10px",width:"fit-content",borderColor:"994B68",borderStyle:"solid",backgroundColor:"#E0C9D1",borderRadius:"5px",margin:"5%",marginTop:"100px"},children:Object(g.jsx)(A.a,{variant:"outlined",onClick:function(){return x(!O)},children:"Add Reservation"})}):r.data&&O&&(y=Object(g.jsxs)("div",{style:{padding:"10px",width:"fit-content",height:"fit-content",borderColor:"994B68",borderStyle:"solid",backgroundColor:"#E0C9D1",borderRadius:"5px",margin:"10px",textAlign:"center"},children:[Object(g.jsx)(z.a,{type:"text",placeholder:"Add Title",style:{marginRight:"10px"},value:f.title,onChange:function(e){return v(Object(C.a)(Object(C.a)({},f),{},{title:e.target.value}))}}),Object(g.jsxs)("p",{children:[Object(g.jsx)(K.a,{name:"allDay",value:f.allDay,onChange:function(){return v(Object(C.a)(Object(C.a)({},f),{},{allDay:!f.allDay}))}}),"all day?"]}),Object(g.jsx)(J.a,{required:!0,placeholderText:"Start Time",showTimeSelect:!0,calendarContainer:X,selected:f.start,onChange:function(e){return v(Object(C.a)(Object(C.a)({},f),{},{start:e}))}}),Object(g.jsx)(J.a,{placeholderText:"End Time",showTimeSelect:!0,calendarContainer:X,selected:f.end,onChange:function(e){return v(Object(C.a)(Object(C.a)({},f),{},{end:e}))}}),Object(g.jsxs)(b.a,{sx:{textAlign:"right",justifyContent:"even"},children:[Object(g.jsx)(A.a,{variant:"outlined",onClick:function(){return E()},children:"Confirm Reservation"}),Object(g.jsx)(A.a,{variant:"outlined",onClick:function(){return x(!O)},children:"Return"})]})]})),Object(g.jsx)("div",{children:Object(g.jsxs)(F.a,{container:!0,spacing:1,columns:16,children:[Object(g.jsx)(F.a,{item:!0,xs:13,children:Object(g.jsx)(_.a,{sx:{backgroundColor:"white",margin:"5%"},children:Object(g.jsx)(w.a,{children:Object(g.jsx)(G.a,{localizer:Y,events:m,startAccessor:"start",endAccessor:"end",titleAccessor:"title",allDayAccessor:"allDay",views:["month","day","week"],style:{height:500,margin:"50px"}})})})}),Object(g.jsx)(F.a,{item:!0,xs:3,children:y})]})})}function Z(){var e=Object(a.useState)(null),t=Object(k.a)(e,2),n=t[0],r=t[1],c=null,i=function(e){r(e)};return null!==n&&(c=Object(g.jsx)(A.a,{variant:"contained",onClick:function(){return i(null)},children:"See All Reservations"})),Object(g.jsx)("div",{children:Object(g.jsxs)(F.a,{container:!0,spacing:1,columns:16,children:[Object(g.jsxs)(F.a,{item:!0,xs:3,children:[Object(g.jsx)(P,{department:"athletic",onClickFacility:i}),c]}),Object(g.jsx)(F.a,{item:!0,xs:13,children:Object(g.jsx)(Q,{department:"athletic",facilityId:n})})]})})}function $(){var e=Object(a.useState)(null),t=Object(k.a)(e,2),n=t[0],r=t[1],c=null,i=function(e){r(e)};return null!==n&&(c=Object(g.jsx)(A.a,{style:{marginLeft:"15px"},variant:"contained",onClick:function(){return i(null)},children:"See All Reservations"})),Object(g.jsx)("div",{children:Object(g.jsxs)(F.a,{container:!0,spacing:1,columns:16,children:[Object(g.jsxs)(F.a,{item:!0,xs:3,children:[Object(g.jsx)(P,{department:"craft",onClickFacility:i}),c]}),Object(g.jsx)(F.a,{item:!0,xs:13,children:Object(g.jsx)(Q,{department:"craft",facilityId:n})})]})})}var ee=function(e){var t=e.className,n=e.children;return Object(g.jsx)("div",{style:{padding:"16px",background:"#216ba5",color:"#fff",zIndex:"2"},children:Object(g.jsxs)(q.CalendarContainer,{className:t,children:[Object(g.jsx)("div",{style:{background:"#f0f0f0"},children:"What is your favorite day?"}),Object(g.jsx)("div",{style:{position:"relative"},children:n})]})})};function te(e){var t=e.reservationId,n=e.handleDelete,r=e.onClickReturn,c=Object(i.d)(Object(d.f)(),"reservations",t),l=Object(d.h)(c),s=l.status,o=l.data,j=Object(a.useState)(!1),u=Object(k.a)(j,2),b=u[0],x=u[1],h=Object(a.useState)(!1),p=Object(k.a)(h,2),f=p[0],v=p[1],m=Object(a.useState)({title:"",start:new Date,end:new Date,allDay:!1,createdBy:null,facilityId:null,resource:null,department:(null===o||void 0===o?void 0:o.department)?o.department:null}),y=Object(k.a)(m,2),D=y[0],E=y[1],B=null;if("loading"===s)return Object(g.jsx)("div",{children:"loading..."});console.log(o),b||(E({title:o.title,start:o.start.toDate(),end:o.end.toDate(),allDay:o.allDay,createdBy:o.createdBy,facilityId:o.facilityId,resource:null,department:o.department}),x(!0));var F=function(){var e=Object(I.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(i.i)(c,D);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),alert("Error: "+e.t0.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return f&&(B=Object(g.jsxs)("div",{children:[Object(g.jsx)(z.a,{type:"text",placeholder:"Add Title",style:{width:"20%",marginRight:"10px"},defaultValue:o.title,onChange:function(e){return E(Object(C.a)(Object(C.a)({},D),{},{title:e.target.value}))}}),Object(g.jsx)(K.a,{name:"allDay",value:o.allDay,onChange:function(){return E(Object(C.a)(Object(C.a)({},D),{},{allDay:!D.allDay}))}}),Object(g.jsx)(J.a,{placeholderText:"Start Time",showTimeSelect:!0,calendarContainer:ee,selected:o.start.toDate(),onChange:function(e){return E(Object(C.a)(Object(C.a)({},D),{},{start:e}))}}),Object(g.jsx)(J.a,{placeholderText:"End Time",showTimeSelect:!0,calendarContainer:ee,selected:o.end.toDate(),onChange:function(e){return E(Object(C.a)(Object(C.a)({},D),{},{end:e}))}}),Object(g.jsx)(A.a,{variant:"outlined",onClick:function(){return F()},children:"Confirm Edits"})]})),Object(g.jsx)(_.a,{sx:{padding:"10px",width:"fit-content",minWidth:"30vw",height:"10%",borderColor:"994B68",borderStyle:"solid",backgroundColor:"#E0C9D1",borderRadius:"5px",margin:"10px",textAlign:"left"},children:Object(g.jsxs)(w.a,{children:[Object(g.jsx)(O.a,{variant:"h5",component:"div",children:o.title}),Object(g.jsx)(R.a,{}),Object(g.jsxs)(O.a,{variant:"h6",component:"div",children:["Begins: ",o.start.toDate().toDateString()+" at "+o.start.toDate().toLocaleTimeString("en-US")]}),Object(g.jsxs)(O.a,{variant:"h6",component:"div",children:["Ends: ",o.end.toDate().toDateString()+" at "+o.end.toDate().toLocaleTimeString("en-US")]}),B,Object(g.jsxs)(T.a,{children:[Object(g.jsx)(A.a,{onClick:function(){return v(!f)},children:"Edit"}),Object(g.jsx)(A.a,{variant:"outlined",onClick:function(){return r(null)},children:"Return"}),Object(g.jsx)(A.a,{variant:"contained",onClick:function(){n(t)},children:"Delete Reservation"})]})]})})}function ne(e){var t=e.handleSelect,n=e.title,a=e.start,r=e.end,c=null;return null!==t&&(c=Object(g.jsx)(A.a,{style:{display:"block"},onClick:function(){return t(e.id)},children:"Detail"})),Object(g.jsx)("div",{children:Object(g.jsx)(_.a,{sx:{padding:"10px",width:"fit-content",minWidth:"30vw",height:"10%",borderColor:"994B68",borderStyle:"solid",backgroundColor:"#E0C9D1",borderRadius:"5px",margin:"10px",textAlign:"left"},children:Object(g.jsxs)(w.a,{children:[Object(g.jsx)(O.a,{variant:"h5",component:"div",children:n}),Object(g.jsx)(R.a,{}),Object(g.jsxs)(O.a,{variant:"h6",component:"div",children:["Begins: ",a.toDateString()+" at "+a.toLocaleTimeString("en-US")]}),Object(g.jsxs)(O.a,{variant:"h6",component:"div",children:["Ends: ",r.toDateString()+" at "+r.toLocaleTimeString("en-US")]}),Object(g.jsx)(T.a,{children:c})]})})})}function ae(e){var t=e.user,n=e.onClickReservation,a=Object(i.b)(Object(d.f)(),"reservations"),r=Object(d.g)(a),c=r.data,l=r.status,s=null,o=null;if("loading"===l)return Object(g.jsx)("div",{children:"Loading..."});s=t.data?null===c||void 0===c?void 0:c.filter((function(e){return e.createdBy===t.data.uid})):c;var j=[];return s.forEach((function(e){var t={title:e.title,start:e.start.toDate(),end:e.end.toDate(),createdBy:e.createdBy,facilityId:e.facilityId,resource:e.resource,NO_ID_FIELD:e.NO_ID_FIELD,allDay:e.allDay};j.push(t)})),console.log(j),n&&(o=function(e){n(e)}),Object(g.jsx)("div",{children:Object(g.jsx)(F.a,{container:!0,spacing:2,children:j.map((function(e){return Object(g.jsx)(F.a,{item:!0,xs:4,children:Object(g.jsx)(ne,{id:e.NO_ID_FIELD,title:e.title,start:e.start,end:e.end,handleSelect:o},e.NO_ID_FIELD)})}))})})}var re=function(){var e=function(){var e=Object(I.a)(S.a.mark((function e(t){var n,a,r,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=Object(l.b)(),e.prev=2,a=t.target.elements,r=a.email,c=a.password,e.next=6,Object(l.f)(n,r.value,c.value);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert("ERROR: "+e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{style:{padding:"20px"},children:Object(g.jsxs)("form",{onSubmit:e,children:[Object(g.jsx)("input",{type:"text",name:"email",placeholder:"email",style:{display:"block",margin:"10px"}}),Object(g.jsx)("input",{type:"password",name:"password",placeholder:"password",style:{display:"block",margin:"10px"}}),Object(g.jsx)("button",{type:"submit",style:{margin:"10px"},children:"LOGIN"})]})})};function ce(){var e=Object(l.b)();return Object(g.jsx)(A.a,{variant:"contained",color:"secondary",onClick:Object(I.a)(S.a.mark((function t(){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.signOut();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),children:"LogOut"})}function ie(){var e=function(){var e=Object(I.a)(S.a.mark((function e(t){var n,a,r,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=Object(l.b)(),e.prev=2,a=t.target.elements,r=a.email,c=a.password,e.next=6,Object(l.a)(n,r.value,c.value);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),alert("ERROR: "+e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)("div",{style:{padding:"20px"},children:Object(g.jsxs)("form",{onSubmit:e,children:[Object(g.jsx)("input",{type:"text",name:"email",placeholder:"email",style:{display:"block",margin:"10px"}}),Object(g.jsx)("input",{type:"password",name:"password",placeholder:"password",style:{display:"block",margin:"10px"}}),Object(g.jsx)("button",{type:"submit",style:{margin:"10px"},children:"Sign Up"})]})})}function le(){var e,t=Object(a.useState)(!1),n=Object(k.a)(t,2),r=n[0],c=n[1],i=Object(d.i)(),l=i.status,s=i.data,o=Object(d.j)();return"loading"===l?Object(g.jsx)(L.a,{color:"secondary"}):!0===s.signedIn?Object(g.jsxs)("div",{style:{textAlign:"center"},children:[Object(g.jsxs)(O.a,{variant:"h4",component:"div",children:["welcome ",null===(e=o.data)||void 0===e?void 0:e.email]}),Object(g.jsx)(ce,{}),Object(g.jsx)(R.a,{}),Object(g.jsx)(O.a,{variant:"body",component:"div",children:"Your Reservations"})]}):!1===s.signedIn&&!1===r?Object(g.jsxs)("div",{children:[Object(g.jsx)(O.a,{variant:"h4",component:"div",children:"Log in"}),Object(g.jsx)(re,{}),Object(g.jsx)(A.a,{variant:"outlined",onClick:function(){return c(!r)},children:"Register"})]}):Object(g.jsxs)("div",{children:[Object(g.jsx)(O.a,{variant:"h4",component:"div",children:"Register"}),Object(g.jsx)(ie,{}),Object(g.jsx)(A.a,{variant:"outlined",onClick:function(){return c(!r)},children:"Sign In"})]})}function se(){var e=Object(d.j)(),t=Object(d.f)(),n=Object(a.useState)(null),r=Object(k.a)(n,2),c=r[0],l=r[1],s=null,o=function(e){l(e)},j=function(){var e=Object(I.a)(S.a.mark((function e(n){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(null),e.prev=1,e.next=4,Object(i.c)(Object(i.d)(t,"reservations",n));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),alert("Error: "+e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}();return e.data&&(s=null===c?Object(g.jsx)(ae,{user:e,onClickReservation:o}):Object(g.jsx)(te,{user:e,onClickReturn:o,reservationId:c,handleDelete:j})),Object(g.jsxs)("div",{children:[Object(g.jsx)(le,{}),s]})}function de(){var e=Object(a.useState)(null),t=Object(k.a)(e,2),n=t[0],r=t[1],c=null,i=function(e){r(e)};return null!==n&&(c=Object(g.jsx)(A.a,{variant:"contained",onClick:function(){return i(null)},children:"See All Reservations"})),Object(g.jsx)("div",{children:Object(g.jsxs)(F.a,{container:!0,spacing:1,columns:16,children:[Object(g.jsxs)(F.a,{item:!0,xs:3,children:[Object(g.jsx)(P,{department:"theatre",onClickFacility:i}),c]}),Object(g.jsx)(F.a,{item:!0,xs:13,children:Object(g.jsx)(Q,{department:"theatre",facilityId:n})})]})})}var oe=n(166),je=n.n(oe),ue=n(185),be=n.n(ue),Oe=n(288),xe=n(302),he=n(287);function pe(){var e,t=null,n=Object(d.j)(),a=Object(d.i)(),r=a.status,c=a.data;if("loading"===r)return Object(g.jsx)(L.a,{color:"secondary"});!0===c.signedIn?t=Object(g.jsxs)("div",{children:[Object(g.jsx)(A.a,{href:"/facility",children:"facilities"}),Object(g.jsx)(Oe.a,{title:"user",children:Object(g.jsx)(xe.a,{href:"/user","aria-label":"fingerprint",color:"secondary",children:Object(g.jsx)(je.a,{})})}),Object(g.jsx)("span",{style:{paddingTop:"10px"},children:null===(e=n.data)||void 0===e?void 0:e.email})]}):t=Object(g.jsxs)("div",{children:[Object(g.jsx)(Oe.a,{title:"user",children:Object(g.jsx)(xe.a,{href:"/user","aria-label":"fingerprint",color:"secondary",children:Object(g.jsx)(je.a,{})})}),Object(g.jsx)("span",{style:{paddingTop:"10px"},children:"Log in"})]});return Object(g.jsx)("div",{children:Object(g.jsxs)(he.a,{direction:"row",spacing:2,style:{borderColor:"994B68",borderStyle:"solid",backgroundColor:"#E0C9D1",marginTop:"3vh"},children:[Object(g.jsx)(xe.a,{href:"/",children:Object(g.jsx)(be.a,{})}),Object(g.jsx)(A.a,{href:"/athletics",children:"Athletics"}),Object(g.jsx)(A.a,{href:"/crafts",children:"Crafts"}),Object(g.jsx)(A.a,{href:"/theatre",children:"Theatre"}),t]})})}function fe(){return Object(g.jsxs)(o.a,{children:[Object(g.jsx)(pe,{}),Object(g.jsxs)(j.c,{children:[Object(g.jsx)(j.a,{path:"/facility",element:Object(g.jsx)(N,{})}),Object(g.jsx)(j.a,{path:"/theatre",element:Object(g.jsx)(de,{})}),Object(g.jsx)(j.a,{path:"/crafts",element:Object(g.jsx)($,{})}),Object(g.jsx)(j.a,{path:"/athletics",element:Object(g.jsx)(Z,{})}),Object(g.jsx)(j.a,{path:"/user",element:Object(g.jsx)(se,{})}),Object(g.jsx)(j.a,{path:"/",element:Object(g.jsx)(D,{})})]})]})}var ve=function(){var e=Object(i.e)(Object(d.e)()),t=Object(s.b)(),n=Object(l.b)();return Object(g.jsx)(d.a,{sdk:n,children:Object(g.jsx)(d.d,{sdk:e,children:Object(g.jsx)(d.b,{sdk:t,children:Object(g.jsx)(fe,{})})})})},me=(n(252),{apiKey:"AIzaSyC3lUbAH999gzERjMeXitrM0D1PwHqD0Ak",authDomain:"capstone-test-3f714.firebaseapp.com",projectId:"capstone-test-3f714",storageBucket:"capstone-test-3f714.appspot.com",messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_FIREBASE_API_KEY:"AIzaSyC3lUbAH999gzERjMeXitrM0D1PwHqD0Ak",REACT_APP_FIREBASE_AUTH_DOMAIN:"capstone-test-3f714.firebaseapp.com",REACT_APP_FIREBASE_DATABASE_URL:"https://capstone-test-3f714-default-rtdb.firebaseio.com/",REACT_APP_FIREBASE_PROJECT_ID:"capstone-test-3f714",REACT_APP_FIREBASE_STORAGE_BUCKET:"capstone-test-3f714.appspot.com",REACT_APP_FIREBASE_MESSAGING_SENDER_ID:"149028726961",REACT_APP_FIREBASE_APP_ID:"1:149028726961:web:6d13bf806de01639425a90"}).REACT_APP_FIREBASE_SENDER_ID,appId:"1:149028726961:web:6d13bf806de01639425a90",databaseURL:"https://capstone-test-3f714-default-rtdb.firebaseio.com/"});Object(c.render)(Object(g.jsx)(d.c,{firebaseConfig:me,children:Object(g.jsx)(ve,{})}),document.getElementById("root"))}},[[253,1,2]]]);
//# sourceMappingURL=main.d937b740.chunk.js.map