"use strict";(self.webpackChunkrent_car_easy=self.webpackChunkrent_car_easy||[]).push([[744],{3934:function(n,e,r){r.d(e,{H:function(){return Rn}});var t,i=r(9439),o=r(2791),a=r(9434),l=r(6351),c=r(8020),d=r(4164),s=function(n){var e={},r=n.split("\n")[0].split(" ");return e.conditionText=r.slice(0,2).join(" "),e.minAge=r[r.length-1],e},p=["title","titleId"];function x(){return x=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},x.apply(this,arguments)}function u(n,e){if(null==n)return{};var r,t,i=function(n,e){if(null==n)return{};var r,t,i={},o=Object.keys(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||(i[r]=n[r]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(i[r]=n[r])}return i}function h(n,e){var r=n.title,i=n.titleId,a=u(n,p);return o.createElement("svg",x({width:24,height:24,xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":i},a),r?o.createElement("title",{id:i},r):null,t||(t=o.createElement("path",{d:"M18 6 6 18M6 6l12 12",stroke:"#121417",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"})))}var f,m,g,b,v,w,j,y,Z,k,O,z,C,S,P,E,I=o.forwardRef(h),L=(r.p,r(168)),M=r(6088),F=M.Z.div(f||(f=(0,L.Z)(["\n    position: fixed;\n    top: 0;\n    width: 100vw;\n    height: 100vh;\n    background-color: var( --secondary-text-color);\n"]))),R=M.Z.div(m||(m=(0,L.Z)(["\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\n    border-radius: 14px;\n    background-color: var(--text-button-color);\n    padding: 30px;\n    width: calc(100% - 20px);\n    max-height: calc(100% - 20px);\n    overflow: auto;\n\n    @media screen and (min-width: 480px) {\n        width: 450px;\n        padding: 32px;\n    }\n    \n    @media screen and (min-width: 768px) {\n        width: 541px;\n        padding: 34px;\n        max-height: 830px;\n    }\n"]))),T={position:"absolute",stroke:"transparent",fill:"#121417",top:12,right:12,width:22,height:22},A=M.Z.img(g||(g=(0,L.Z)(["\n    width: 100%;\n    height: 314px;\n    display: block;\n    object-fit: cover;\n    border-radius: 14px;\n"]))),B=M.Z.div(b||(b=(0,L.Z)(["\n    margin-top: 14px;\n    margin-bottom: 24px;\n"]))),W=M.Z.div(v||(v=(0,L.Z)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-top: 14px;\n    padding-bottom: 8px;\n"]))),H=M.Z.h2(w||(w=(0,L.Z)(["\n    font-weight: 500;\n    font-size: 18px;\n    line-height: 1.33;\n    color: var(--primary-text-color);\n"]))),_=M.Z.span(j||(j=(0,L.Z)(["\n    color: var(--accent-color);\n"]))),N=M.Z.ul(y||(y=(0,L.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n"]))),D=M.Z.li(Z||(Z=(0,L.Z)(["\n    font-size: 12px;\n    color: var(--secondary-text-color);\n    display: flex;\n    align-items: center;\n\n    &:not(:last-child)::after {\n        content: '';\n        display: inline-block;\n        width: 1px;\n        height: 16px;\n        background-color: var(--lines-background-color);\n        margin-left: 6px;\n        margin-right: 6px;\n    }\n"]))),U=M.Z.p(k||(k=(0,L.Z)(["\n    line-height: 1.43;\n    margin-top: 14px;\n\n    @media screen and (min-width: 480px) {\n        width: 361px;\n    }\n\n    @media screen and (min-width: 768px) {\n        width: 461px;\n    }\n"]))),$=M.Z.h3(O||(O=(0,L.Z)(["\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 1.43;\n    color: var(--primary-text-color);\n    margin-top: 24px;\n    margin-bottom: 8px;\n"]))),q=M.Z.ul(z||(z=(0,L.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    gap: 8px;\n    font-family: 'Montserrat', sans-serif;\n    font-size: 12px;\n    letter-spacing: -0.24px;\n\n    @media screen and (min-width: 768px) {\n        width: 461px;\n    }\n"]))),V=M.Z.li(C||(C=(0,L.Z)(["\n    border-radius: 35px;\n    color: var(--text-conditions-color);\n    background-color: var(--conditions-background-color);\n    padding: 7px 14px;\n"]))),G=M.Z.span(S||(S=(0,L.Z)(["\n    color: var(--accent-color);\n    font-weight: 600;\n"]))),J=M.Z.a(P||(P=(0,L.Z)(["\n    width: 168px;\n    height: 44px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    border-radius: 12px;\n    background-color: var(--accent-color);\n    color: var(--text-button-color);\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 1.43;\n    transition: background-color var(--transition);\n\n        &:hover,\n        &:focus {\n        background-color: var(--hover-color);\n"]))),K=r(3329),Y=document.getElementById("modal-root"),Q=function(n){var e=n.carId,r=n.onClose,t=(0,a.v9)(l.Wz).find((function(n){return n.id===e})),i=t.id,c=t.make,p=t.model,x=t.year,u=t.rentalPrice,h=t.address,f=t.type,m=t.accessories,g=t.mileage,b=t.img,v=t.fuelConsumption,w=t.engineSize,j=t.description,y=t.functionalities,Z=t.rentalConditions,k=h.split(",")[1],O=h.split(",")[2],z=s(Z);(0,o.useEffect)((function(){var n=function(n){"Escape"===n.code&&r()};return window.addEventListener("keydown",n),document.body.style.overflow="hidden",function(){window.removeEventListener("keydown",n),document.body.style.overflow="visible"}}),[r]);return(0,d.createPortal)((0,K.jsx)(F,{onClick:function(n){n.target===n.currentTarget&&r()},children:(0,K.jsxs)(R,{children:[(0,K.jsx)(I,{style:T,onClick:r}),(0,K.jsx)(A,{src:b,alt:c,loading:"lazy",width:"469",height:"314"}),(0,K.jsxs)(B,{children:[(0,K.jsx)(W,{children:(0,K.jsxs)(H,{children:[c," ",(0,K.jsxs)(_,{children:[p,", "]}),x]})}),(0,K.jsxs)(N,{children:[(0,K.jsx)(D,{children:k}),(0,K.jsx)(D,{children:O}),(0,K.jsxs)(D,{children:["Id: ",i]}),(0,K.jsxs)(D,{children:["Year: ",x]}),(0,K.jsxs)(D,{children:["Type: ",f]})]}),(0,K.jsxs)(N,{children:[(0,K.jsxs)(D,{children:["Fuel Consumption: ",v]}),(0,K.jsxs)(D,{children:["Engine Size: ",w]})]}),(0,K.jsx)(U,{children:j}),(0,K.jsx)($,{children:"Accessories and functionalities:"}),(0,K.jsx)(N,{children:m.map((function(n){return(0,K.jsx)(D,{children:n},n)}))}),(0,K.jsx)(N,{children:y.map((function(n){return(0,K.jsx)(D,{children:n},n)}))}),(0,K.jsx)($,{children:"Rental Conditions:"}),(0,K.jsxs)(q,{children:[(0,K.jsx)(V,{children:(0,K.jsxs)("p",{children:[z.conditionText,(0,K.jsxs)(G,{children:[" ",z.minAge]})]})}),(0,K.jsx)(V,{children:Z.split("\n")[1]}),(0,K.jsx)(V,{children:Z.split("\n")[2]}),(0,K.jsxs)(V,{children:["Mileage: ",(0,K.jsx)(G,{children:g.toLocaleString("en-US")})]}),(0,K.jsxs)(V,{children:["Price: ",(0,K.jsx)(G,{children:u})]})]})]}),(0,K.jsx)(J,{href:"tel:+380730000000",children:"Rental car"})]})}),Y)},X=["title","titleId"];function nn(){return nn=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},nn.apply(this,arguments)}function en(n,e){if(null==n)return{};var r,t,i=function(n,e){if(null==n)return{};var r,t,i={},o=Object.keys(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||(i[r]=n[r]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(i[r]=n[r])}return i}function rn(n,e){var r=n.title,t=n.titleId,i=en(n,X);return o.createElement("svg",nn({width:18,height:18,xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":t},i),r?o.createElement("title",{id:t},r):null,E||(E=o.createElement("path",{d:"M15.63 3.458a4.125 4.125 0 0 0-5.835 0L9 4.253l-.795-.795A4.126 4.126 0 0 0 2.37 9.293l.795.795L9 15.922l5.835-5.835.795-.795a4.125 4.125 0 0 0 0-5.835Z",stroke:"#fff",strokeOpacity:.8,strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var tn,on=o.forwardRef(rn),an=(r.p,["title","titleId"]);function ln(){return ln=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},ln.apply(this,arguments)}function cn(n,e){if(null==n)return{};var r,t,i=function(n,e){if(null==n)return{};var r,t,i={},o=Object.keys(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||(i[r]=n[r]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(i[r]=n[r])}return i}function dn(n,e){var r=n.title,t=n.titleId,i=cn(n,an);return o.createElement("svg",ln({width:18,height:18,fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":t},i),r?o.createElement("title",{id:t},r):null,tn||(tn=o.createElement("path",{d:"M15.63 3.458a4.125 4.125 0 0 0-5.835 0L9 4.253l-.795-.795A4.126 4.126 0 0 0 2.37 9.293l.795.795L9 15.922l5.835-5.835.795-.795a4.125 4.125 0 0 0 0-5.835Z",fill:"#3470FF",stroke:"#3470FF",strokeLinecap:"round",strokeLinejoin:"round"})))}var sn,pn,xn,un,hn,fn,mn,gn,bn,vn,wn,jn=o.forwardRef(dn),yn=(r.p,M.Z.li(sn||(sn=(0,L.Z)(["\n  width: 100%;\n  @media screen and (min-width: 768px) {\n    width: calc((100% - 29px) / 2);\n  }\n\n  @media screen and (min-width: 1200px) {\n    flex-basis: calc((100% - 3 * 29px) / 4);\n  }\n\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"])))),Zn=M.Z.img(pn||(pn=(0,L.Z)(["\n  width: 100%;\n  height: 268px;\n  display: block;\n  object-fit: cover;\n  border-radius: 14px;\n"]))),kn=M.Z.div(xn||(xn=(0,L.Z)(["\n  padding-bottom: 28px;\n"]))),On={position:"absolute",stroke:"#3470FF",fill:"transparent",top:14,right:14,cursor:"pointer"},zn=M.Z.div(un||(un=(0,L.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 14px;\n  padding-bottom: 8px;\n"]))),Cn=M.Z.h2(hn||(hn=(0,L.Z)(["\n  font-weight: 500;\n  font-size: 14px;\n  color: var(--primary-text-color);\n"]))),Sn=M.Z.span(fn||(fn=(0,L.Z)(["\n  color: var(--accent-color);\n"]))),Pn=M.Z.ul(mn||(mn=(0,L.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),En=M.Z.li(gn||(gn=(0,L.Z)(['\n  font-size: 12px;\n  color: var(--secondary-text-color);\n  display: flex;\n  align-items: center;\n\n  &:not(:last-child)::after {\n    content: "";\n    display: inline-block;\n    width: 1px;\n    height: 16px;\n    background-color: var(--lines-background-color);\n    margin-left: 6px;\n    margin-right: 6px;\n  }\n']))),In=M.Z.button(bn||(bn=(0,L.Z)(["\n    width: 100%;\n    height: 44px;\n\n    border-radius: 12px;\n    background-color: var(--accent-color);\n    color: var(--text-button-color);\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 1.43;\n    cursor: pointer;\n    transition: background-color var(--transition);\n\n        &:hover,\n        &:focus {\n        background-color: var(--hover-color);\n"]))),Ln=function(n){var e=n.id,r=n.make,t=n.model,d=n.year,s=n.rentalPrice,p=n.address,x=n.rentalCompany,u=n.type,h=n.accessories,f=n.mileage,m=n.img,g=(0,a.v9)(l.Tc),b=(0,o.useState)(!1),v=(0,i.Z)(b,2),w=v[0],j=v[1],y=(0,a.I0)(),Z=function(){return j((function(n){return!n}))};return(0,K.jsxs)(K.Fragment,{children:[(0,K.jsxs)(yn,{children:[(0,K.jsxs)(kn,{children:[g.includes(e)?(0,K.jsx)(jn,{width:"18",height:"18",style:On,onClick:function(){return n=e,void y((0,c.r7)(n));var n}}):(0,K.jsx)(on,{width:"18",height:"18",style:On,onClick:function(){return n=e,void y((0,c.a3)(n));var n}}),(0,K.jsx)(Zn,{src:m||"../../images/backgrounds/no-image.jpg",alt:r,loading:"lazy",width:"274"}),(0,K.jsxs)(zn,{children:[(0,K.jsxs)(Cn,{children:[r," ",(0,K.jsxs)(Sn,{children:[t,", "]}),d]}),(0,K.jsx)("p",{children:s})]}),(0,K.jsxs)(Pn,{children:[(0,K.jsx)(En,{children:p.split(",")[1]}),(0,K.jsx)(En,{children:p.split(",")[2]}),(0,K.jsx)(En,{children:x})]}),(0,K.jsxs)(Pn,{children:[(0,K.jsx)(En,{children:u}),(0,K.jsx)(En,{children:t}),(0,K.jsx)(En,{children:f}),(0,K.jsx)(En,{children:h[0]})]})]}),(0,K.jsx)(In,{type:"button",onClick:Z,children:"Learn more"})]}),w&&(0,K.jsx)(Q,{onClose:Z,carId:e,children:(0,K.jsx)("img",{alt:r,src:m})})]})},Mn=M.Z.div(vn||(vn=(0,L.Z)(["\n    max-width: 100%;\n    padding-left: 15px;\n    padding-right: 15px;\n    margin-left: auto;\n    margin-right: auto;\n    // outline: 2px solid tomato;\n\n    @media screen and (min-width: 480px) {\n        max-width: 480px;\n    } \n\n    @media screen and (min-width: 768px) {\n        max-width: 768px;\n    }    \n\n    @media screen and (min-width: 1200px) {\n        max-width: 1200px;\n    }\n"]))),Fn=M.Z.ul(wn||(wn=(0,L.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    row-gap: 50px;\n    column-gap: 29px;\n    padding-top: 50px;\n    padding-bottom: 50px;\n\n    @media screen and (min-width: 768px) {\n        padding-bottom: 100px;\n    }\n"]))),Rn=function(n){var e=n.cars;return(0,K.jsx)(Mn,{children:(0,K.jsx)(Fn,{children:e.map((function(n){var e=n.id,r=n.make,t=n.model,i=n.year,o=n.rentalPrice,a=n.address,l=n.rentalCompany,c=n.type,d=n.accessories,s=n.mileage,p=n.img;return(0,K.jsx)(Ln,{id:e,make:r,model:t,year:i,rentalPrice:o,address:a,rentalCompany:l,type:c,accessories:d,mileage:s,img:p},e)}))})})}},9010:function(n,e,r){r.d(e,{w:function(){return X}});var t,i,o=r(2791),a=r(9434),l=r(5218),c=r(2526),d=r(1429),s=r(1413),p=r(1062),x=r(3329),u={control:function(n,e){return(0,s.Z)((0,s.Z)({},n),{},{height:"48px",padding:"0",paddingLeft:"14px",backgroundColor:"var(--input-color)",borderRadius:"14px",borderColor:(e.isSelected,"transparent"),fontSize:"16px",fontWeight:"500",lineHeight:"1.1","&:hover":{borderColor:"var(--input-border-hover-color)"},"@media screen and (min-width: 768px)":{fontSize:"18px"}})},option:function(n,e){return(0,s.Z)((0,s.Z)({},n),{},{borderRadius:"14px",paddingBottom:"8px",backgroundColor:e.isSelected?"var(--accent-color)":"white",color:e.isSelected?"white":"var(--text-filter-options-color)",fontSize:"14px",fontWeight:"500",lineHeight:"1.25",cursor:"pointer","@media screen and (min-width: 768px)":{fontSize:"16px"}})},dropdownIndicator:function(n,e){return(0,s.Z)((0,s.Z)({},n),{},{color:"var(--primary-text-color)",cursor:"pointer",transform:e.isFocused?"rotate(180deg)":null})},indicatorSeparator:function(n){return(0,s.Z)((0,s.Z)({},n),{},{backgroundColor:"var(--input-color)"})},placeholder:function(n){return(0,s.Z)((0,s.Z)({},n),{},{backgroundColor:"var(--input-color)",color:"var(--primary-text-color)",fontSize:"16px",fontWeight:"500",lineHeight:"1.11","@media screen and (min-width: 768px)":{fontSize:"18px"}})},menu:function(n){return(0,s.Z)((0,s.Z)({},n),{},{borderRadius:"14px",padding:"14px 8px 14px 18px"})},menuList:function(n){return(0,s.Z)((0,s.Z)({},n),{},{"::-webkit-scrollbar":{width:"8px",height:"130px"},"::-webkit-scrollbar-thumb":{background:"var(--scroll-background-color)",borderRadius:"10px"}})}},h=function(n){var e=n.name,r=n.options,t=n.placeholder,i=n.refProp;return(0,x.jsx)(p.ZP,{required:!0,name:e,options:r,styles:u,placeholder:t,ref:i})},f=function(n){return n.map((function(n){return{value:n,label:n}}))},m=JSON.parse('["Dacia","Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land","Renault"]'),g=["title","titleId"];function b(){return b=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},b.apply(this,arguments)}function v(n,e){if(null==n)return{};var r,t,i=function(n,e){if(null==n)return{};var r,t,i={},o=Object.keys(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||(i[r]=n[r]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)r=o[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(i[r]=n[r])}return i}function w(n,e){var r=n.title,a=n.titleId,l=v(n,g);return o.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",ref:e,"aria-labelledby":a},l),r?o.createElement("title",{id:a},r):null,t||(t=o.createElement("g",{id:"icomoon-ignore"})),i||(i=o.createElement("path",{d:"M128 512h-60c0.022-245.198 198.799-443.961 444-443.961 140.612 0 265.958 65.364 347.31 167.365l0.69 0.896v-66.3h60v210h-210v-60h134.54c-67.689-115.526-191.184-191.903-332.526-192h-0.014c-211.74 0-384 172.26-384 384zM896 512c0 211.74-172.26 384-384 384-141.356-0.097-264.851-76.474-331.559-190.19l-0.981-1.81h134.54v-60h-210v210h60v-66.3c82.042 102.897 207.388 168.261 348 168.261 245.201 0 443.978-198.763 444-443.959v-0.002z"})))}var j,y,Z,k,O,z,C,S,P,E,I,L,M,F=o.forwardRef(w),R=(r.p,r(168)),T=r(6088),A=T.Z.div(j||(j=(0,R.Z)(["\n    max-width: 100%;\n    padding-left: 15px;\n    padding-right: 15px;\n    padding-top: 50px;\n    margin-left: auto;\n    margin-right: auto;\n    // outline: 2px solid tomato;\n\n    @media screen and (min-width: 480px) {\n        max-width: 480px;\n    } \n\n    @media screen and (min-width: 768px) {\n        max-width: 768px;\n    }    \n\n    @media screen and (min-width: 1200px) {\n        max-width: 1200px;\n        padding-top: 80px;\n    }\n"]))),B=T.Z.form(y||(y=(0,R.Z)(["\n    display: flex;\n    gap: 18px;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    flex-direction: column;\n\n    @media screen and (min-width: 1200px) {\n        flex-wrap: nowrap;\n        flex-direction: row;\n    } \n"]))),W=T.Z.label(Z||(Z=(0,R.Z)(["\n    display: block;\n    margin-bottom: 8px;\n    color: var(--text-filter-title-color);\n    font-size: 14px;\n    position: relative;\n"]))),H=T.Z.div(k||(k=(0,R.Z)(["\n    @media screen and (min-width: 768px) {\n        display: flex;\n    gap: 18px;\n    }\n"]))),_=T.Z.div(O||(O=(0,R.Z)(["\n    width: 250px;\n    @media screen and (min-width: 768px) {\n        width: 224px;\n    }\n"]))),N=T.Z.div(z||(z=(0,R.Z)(["\n    width: 250px;\n    @media screen and (min-width: 768px) {\n        width: 125px;\n    }\n"]))),D=T.Z.div(C||(C=(0,R.Z)(["\n    display: flex;\n    position: relative;\n    width: 250px;\n    \n    @media screen and (min-width: 768px) {\n        width: 320px;\n    }\n"]))),U=T.Z.p(S||(S=(0,R.Z)(["\n    position: absolute;\n    top: 35px;\n    left: 22px;\n    color: var(--input-placeholder-text-color);\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 1.11;\n\n    @media screen and (min-width: 768px) {\n        font-size: 18px;\n    }\n"]))),$=T.Z.input(P||(P=(0,R.Z)(["\n    box-sizing: border-box;\n    width: 125px;     \n    height: 48px;\n    padding: 14px 14px 14px 70px;\n    background-color: var(--input-color);\n    outline: transparent;\n    font-size: 16px;\n    border-color: transparent;\n    border-radius: 14px 0px 0px 14px;\n    border-right: 1px solid rgba(138, 138, 137, 0.20);\n    transition: border-color var(--transition);\n\n    &:hover,\n    :focus {\n        border-color: var(--input-border-hover-color);\n    }\n\n    &::-webkit-inner-spin-button,\n    ::-webkit-outer-spin-button {\n        -webkit-appearance: none;\n        appearance: none;\n        margin: 0;\n    }\n\n    @media screen and (min-width: 768px) {\n        width: 160px;\n        padding: 14px 14px 14px 86px;\n    }\n"]))),q=T.Z.input(E||(E=(0,R.Z)(["\n    box-sizing: border-box;\n    width: 125px; \n    height: 48px;\n    padding: 14px 14px 14px 70px;\n    background-color: var(--input-color);\n    outline: transparent;\n    font-size: 16px;\n    border-color: transparent;\n    border-radius: 0px 14px 14px 0px;\n    transition: border-color var(--transition);\n    \n\n    &:hover,\n    &:focus {\n        border-color: var(--input-border-hover-color);\n    }\n\n    &::-webkit-inner-spin-button,\n    ::-webkit-outer-spin-button {\n        -webkit-appearance: none;\n        appearance: none;\n        margin: 0;\n    }\n\n    @media screen and (min-width: 768px) {\n        width: 160px;\n        padding: 14px 14px 14px 86px;\n    }\n"]))),V=T.Z.div(I||(I=(0,R.Z)(["\n    display: flex;\n    gap: 20px;\n    align-items: center;\n    justify-content: center;\n    @media screen and (min-width: 1200px) {\n        margin-top: 4px;\n    }\n"]))),G=T.Z.button(L||(L=(0,R.Z)(["\n    min-width: 200px;\n    height: 48px;\n    \n\n    border-radius: 12px;\n    background-color: var(--accent-color);\n    color: var(--text-button-color);\n    font-size: 14px;\n    font-weight: 600;\n    cursor: pointer;\n    transition: background-color var(--transition);\n\n    &:hover,\n    &:focus {\n        background-color: var(--hover-color);\n    }\n    :disabled {\n        background-color: var(--text-filter-title-color);\n    }\n\n    @media screen and (min-width: 1200px) {\n        min-width: 136px;\n        margin-top: 10px;\n    }\n"]))),J=T.Z.div(M||(M=(0,R.Z)(["\n    display: flex;\n    @media screen and (min-width: 1200px) {\n        margin-top: 10px;\n    }\n"]))),K={fill:"var(--hover-color)",cursor:"pointer"},Y=f(m),Q=Array.from({length:38},(function(n,e){return{value:String(10*(e+3)),label:String(10*(e+3))}})),X=function(){var n=(0,a.I0)(),e=(0,o.useRef)(null),r=(0,o.useRef)(null);return(0,x.jsx)(A,{children:(0,x.jsxs)(B,{onSubmit:function(t){t.preventDefault();var i=t.target,o=i.elements.brand.value.trim(),a=i.elements.mileageFrom.value,s=i.elements.mileageTo.value,p=i.elements.price.value;""!==o&&""!==p&&""!==a&&""!==s?(n((0,d.a8)({brand:o,price:p,mileageFrom:a,mileageTo:s})),n((0,c.x)()),i.reset(),e.current.clearValue(),r.current.clearValue()):l.Am.error("Fields cannot be empty. Enter some data!")},children:[(0,x.jsxs)(H,{children:[(0,x.jsxs)(W,{children:["Car brand",(0,x.jsx)(_,{children:(0,x.jsx)(h,{name:"brand",options:Y,refProp:e,placeholder:"Enter the text"})})]}),(0,x.jsxs)(W,{children:["Price/ 1 hour",(0,x.jsx)(N,{children:(0,x.jsx)(h,{name:"price",options:Q,refProp:r,placeholder:"To $"})})]})]}),(0,x.jsxs)(D,{children:[(0,x.jsxs)(W,{children:["\u0421ar mileage / km",(0,x.jsx)(U,{children:"From"}),(0,x.jsx)($,{required:!0,type:"number",name:"mileageFrom",min:"4000",max:"6000",title:"Enter a number from 4000 to 6000"})]}),(0,x.jsxs)(W,{style:{color:"white"},children:["\u0421ar mileage / km",(0,x.jsx)(U,{children:"To"}),(0,x.jsx)(q,{required:!0,type:"number",name:"mileageTo",min:"4001",max:"7000",title:"Enter a number from 4001 to 7000"})]})]}),(0,x.jsxs)(V,{children:[(0,x.jsx)(G,{type:"submit",children:"Search"}),(0,x.jsx)(J,{children:(0,x.jsx)(F,{width:"24",height:"24",style:K,onClick:function(){n((0,d.sx)())}})})]})]})})}},2881:function(n,e,r){r.d(e,{a:function(){return t.a}});var t=r(748)},455:function(n,e,r){r.d(e,{g:function(){return x}});var t,i,o,a=r(886),l=r(168),c=r(6088),d=c.Z.div(t||(t=(0,l.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    // outline: 2px solid tomato;\n\n    max-width: 100%;\n    padding-left: 25px;\n    padding-right: 25px;\n    padding-bottom: 50px;\n    margin-left: auto;\n    margin-right: auto;\n\n    @media screen and (min-width: 480px) {\n        max-width: 480px;\n    } \n\n    @media screen and (min-width: 768px) {\n        max-width: 768px;\n    }    \n\n    @media screen and (min-width: 1200px) {\n        max-width: 1200px;\n    }\n"]))),s=c.Z.p(i||(i=(0,l.Z)(["\n    margin-top: 50px;\n    margin-bottom: 25px;\n    color: var(--primary-text-color);\n    text-align: center;\n    font-size: 14px;\n\n    @media screen and (min-width: 768px) {\n        font-size: 16px;\n    }\n"]))),p=(c.Z.button(o||(o=(0,l.Z)(["\n    width: 270px;\n    height: 44px;\n\n    border-radius: 12px;\n    background-color: var(--accent-color);\n    color: var(--text-button-color);\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 1.43;\n    cursor: pointer;\n    transition: background-color var(--transition);\n\n    &:hover,\n    &:focus {\n        background-color: var(--hover-color);\n"]))),r(3329)),x=function(){return(0,p.jsxs)(d,{children:[(0,p.jsx)("img",{src:a,alt:"No results found",width:"400"}),(0,p.jsxs)(s,{children:["Sorry, there are no results. ",(0,p.jsx)("br",{}),"Try to search something else"]})]})}},6351:function(n,e,r){r.d(e,{$D:function(){return p},$U:function(){return a},AO:function(){return s},Dw:function(){return x},Tc:function(){return d},Wz:function(){return i},xU:function(){return l},zh:function(){return c}});var t=r(6916),i=function(n){return n.cars.items},o=function(n){return n.cars.allCars},a=function(n){return n.filter.isFiltred},l=function(n){return n.cars.isLoading},c=function(n){return n.cars.error},d=function(n){return n.favorites.favorites},s=(0,t.P1)([o,function(n){return n.filter.filterBrand},function(n){return n.filter.filterPrice},function(n){return n.filter.filterMileage.from},function(n){return n.filter.filterMileage.to}],(function(n,e,r,t,i){return n.filter((function(n){var o=parseInt(n.rentalPrice.replace("$","")),a=parseInt(r);return(!e||n.make.toLowerCase()===e.toLowerCase())&&(!(r&&o>a)&&!(t&&i&&(n.mileage<t||n.mileage>i)))}))})),p=(0,t.P1)([o,d],(function(n,e){return n.filter((function(n){return e.includes(n.id)}))})),x=(0,t.P1)([s,d],(function(n,e){if(n)return n.filter((function(n){return e.includes(n.id)}))}))},886:function(n,e,r){n.exports=r.p+"static/media/No_results_found.8c760407be35134a6fef.jpg"}}]);
//# sourceMappingURL=744.5847530a.chunk.js.map