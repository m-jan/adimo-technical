(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(30)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(8),c=a.n(r),i=(a(16),a(2)),o=a(3),l=a(5),m=a(4),u=a(6),d=a(1),v=(a(18),a(20),function(e){return n.a.createElement("div",{className:"banner"},n.a.createElement("img",{className:"banner-img",src:"https://buildv2.adimo.co/Static/Views/displayAds-preview/mpu.jpg",alt:""}),n.a.createElement("button",{onClick:e.nextStep,className:"add"},"Adimo"))}),p=(a(22),function(e){return n.a.createElement("div",{className:"retailers"},n.a.createElement("button",{className:"back",onClick:e.prevStep},n.a.createElement("i",{className:"fas fa-arrow-left"})),n.a.createElement("h1",{className:"heading"},"Select who you would like to shop with"),n.a.createElement("button",{className:"retailer-button",onClick:e.nextStep},n.a.createElement("span",{className:"retailer-logo"},"Asda")),n.a.createElement("p",{className:"account"},"Don't have an account? Create one"),n.a.createElement("p",{className:"privacy"},"Privacy Policy"))}),h=a(9),f=a.n(h),g=(a(24),a(26),a(28),function(e){var t=Object.values(e.basket).map(function(t){return n.a.createElement("tr",{key:f()()},n.a.createElement("td",{className:"remove"},n.a.createElement("button",{onClick:function(a){return e.removeFromBasket(t.title,a)}},n.a.createElement("i",{className:"fas fa-times"}))),n.a.createElement("td",{className:"title"},t.title),n.a.createElement("td",{className:"quantity"},"x",t.quantity),n.a.createElement("td",{className:"total-price"},"\xa3",Number.parseFloat(t.totalPrice).toFixed(2)))});return n.a.createElement("table",{className:"basket-table"},n.a.createElement("tbody",null,t))}),b=function(e){return n.a.createElement("div",{className:"basket-overlay"},n.a.createElement("button",{className:"back",onClick:e.close},n.a.createElement("i",{className:"fas fa-times"})),n.a.createElement("h1",{className:"total"},"Total: \xa3",Number.parseFloat(e.totalPrice).toFixed(2)),n.a.createElement(g,{basket:e.basket,removeFromBasket:e.removeFromBasket}))},E=function(e){return n.a.createElement("footer",{className:"footer"},n.a.createElement("button",{className:"basket",onClick:e.openBasket},e.basketSize," items",n.a.createElement("i",{className:"fas fa-shopping-cart"})),n.a.createElement("button",{className:"add",onClick:e.addToBasket},"Add",n.a.createElement("i",{className:"fas fa-plus"})),n.a.createElement("button",{className:"next"},n.a.createElement("span",{className:"retailer-logo"},"Asda"),n.a.createElement("i",{className:"fas fa-chevron-right"})))},k=function(e){return n.a.createElement("div",{className:"carousel"},n.a.createElement("div",{className:"product-image far-left-product"},n.a.createElement("img",{id:"far-left-product-img",src:e.products[0].img,alt:""})),n.a.createElement("div",{className:"product-image left-product"},n.a.createElement("img",{id:"left-product-img",src:e.products[1].img,alt:""})),n.a.createElement("div",{className:"product-image primary-product"},n.a.createElement("img",{id:"primary-product-img",src:e.products[2].img,alt:""})),n.a.createElement("div",{className:"product-image right-product"},n.a.createElement("img",{id:"right-product-img",src:e.products[3].img,alt:""})),n.a.createElement("div",{className:"product-image far-right-product"},n.a.createElement("img",{id:"far-right-product-img",src:e.products[4].img,alt:""})))};function N(e){return e.unshift(e.pop()),e}function y(e){return e.push(e.shift()),e}function O(e,t){return e+t}var B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={products:a.props.products,basket:{}},a.handleMoveLeft=a.handleMoveLeft.bind(Object(d.a)(Object(d.a)(a))),a.handleMoveRight=a.handleMoveRight.bind(Object(d.a)(Object(d.a)(a))),a.handleAddToBasket=a.handleAddToBasket.bind(Object(d.a)(Object(d.a)(a))),a.handleRemoveFromBasket=a.handleRemoveFromBasket.bind(Object(d.a)(Object(d.a)(a))),a.handleOpenOverlay=a.handleOpenOverlay.bind(Object(d.a)(Object(d.a)(a))),a.handleCloseOverlay=a.handleCloseOverlay.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleMoveLeft",value:function(){var e=this;document.getElementsByClassName("carousel")[0].classList.add("move-left"),setTimeout(function(){document.getElementsByClassName("carousel")[0].classList.remove("move-left"),e.setState(function(e){return{products:y(e.products)}})},500)}},{key:"handleMoveRight",value:function(){var e=this;document.getElementsByClassName("carousel")[0].classList.add("move-right"),setTimeout(function(){document.getElementsByClassName("carousel")[0].classList.remove("move-right"),e.setState(function(e){return{products:N(e.products)}})},500)}},{key:"handleAddToBasket",value:function(){var e=Object.assign({},this.state.basket),t=this.state.products[2].title,a=Number(this.state.products[2].price.slice(1));e[t]?(e[t].quantity+=1,e[t].totalPrice=e[t].quantity*e[t].price):e[t]={quantity:1,price:a,totalPrice:a,title:t},this.setState({basket:e})}},{key:"handleRemoveFromBasket",value:function(e,t){var a=Object.assign({},this.state.basket);delete a[e],this.setState({basket:a})}},{key:"handleOpenOverlay",value:function(){document.getElementsByClassName("basket-overlay")[0].classList.add("active")}},{key:"handleCloseOverlay",value:function(){document.getElementsByClassName("basket-overlay")[0].classList.remove("active")}},{key:"render",value:function(){var e=this.state.products[2],t=Object.values(this.state.basket),a=t.length>0?t.map(function(e){return e.quantity}).reduce(O):0,s=t.length>0?t.map(function(e){return e.totalPrice}).reduce(O):0;return n.a.createElement("div",{className:"products-container"},n.a.createElement("div",{className:"products"},n.a.createElement("header",{className:"header"},n.a.createElement("button",{className:"back",onClick:this.props.prevStep},n.a.createElement("i",{className:"fas fa-arrow-left"})),n.a.createElement("h1",{className:"title"},e.title)),n.a.createElement("main",null,n.a.createElement("div",{className:"product-carousel-container"},n.a.createElement("button",{onClick:this.handleMoveLeft,className:"previous"},n.a.createElement("i",{className:"fas fa-chevron-left"})),n.a.createElement(k,{products:this.state.products}),n.a.createElement("button",{onClick:this.handleMoveRight,className:"next"},n.a.createElement("i",{className:"fas fa-chevron-right"})),e.offer&&n.a.createElement("div",{className:"offer"},e.offer)),n.a.createElement("div",{className:"price"},e.price)),n.a.createElement(E,{primary:e,basketSize:a,addToBasket:this.handleAddToBasket,openBasket:this.handleOpenOverlay}),n.a.createElement(b,{close:this.handleCloseOverlay,totalPrice:s,basket:this.state.basket,removeFromBasket:this.handleRemoveFromBasket})))}}]),t}(s.Component),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={products:C},a.navigateFromBannerToRetailers=a.navigateFromBannerToRetailers.bind(Object(d.a)(Object(d.a)(a))),a.navigateFromRetailersToBanner=a.navigateFromRetailersToBanner.bind(Object(d.a)(Object(d.a)(a))),a.navigateFromRetailersToProducts=a.navigateFromRetailersToProducts.bind(Object(d.a)(Object(d.a)(a))),a.navigateFromProductsToRetailers=a.navigateFromProductsToRetailers.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("./data/products.json").then(function(e){return e.json()}).then(function(t){return e.setState({products:F(t.products)})}).catch(function(e){return console.log(e)})}},{key:"navigateFromBannerToRetailers",value:function(){document.getElementsByClassName("retailers")[0].classList.add("active")}},{key:"navigateFromRetailersToBanner",value:function(){document.getElementsByClassName("retailers")[0].classList.remove("active")}},{key:"navigateFromRetailersToProducts",value:function(){document.getElementsByClassName("products-container")[0].classList.add("active")}},{key:"navigateFromProductsToRetailers",value:function(){document.getElementsByClassName("products-container")[0].classList.remove("active")}},{key:"render",value:function(){return n.a.createElement("div",{className:"mpu"},n.a.createElement(v,{nextStep:this.navigateFromBannerToRetailers}),n.a.createElement(p,{prevStep:this.navigateFromRetailersToBanner,nextStep:this.navigateFromRetailersToProducts}),n.a.createElement(B,{prevStep:this.navigateFromProductsToRetailers,products:this.state.products}))}}]),t}(s.Component),C=[{title:"KitKat 2 Finger Cookies & Cream Chocolate Biscuit Bar, 16 Pack 16x20g",price:"\xa32.50",img:"https://ui.assets-asda.com/g/v5/536/593/7613035536593_280_IDShot_3.jpeg",offer:""},{title:"KitKat 2 Finger Lemon Drizzle Chocolate Biscuit Bar, 9 Pack 9x20.7",price:"\xa31.00",img:"https://ui.assets-asda.com/g/v5/187/824/7613036187824_280_IDShot_3.jpeg",offer:"Save \xa30.99"},{title:"KitKat 2 Finger Dark Chocolate Biscuit Bar, 9 Pack 9x20.7",price:"\xa31.00",img:"https://ui.assets-asda.com/g/v5/099/387/7613036099387_280_IDShot_3.jpeg",offer:"Save \xa30.99"},{title:"KitKat 2 Finger Cookies & Cream Chocolate Biscuit Bar, 16 Pack 16x20g",price:"\xa32.50",img:"https://ui.assets-asda.com/g/v5/536/593/7613035536593_280_IDShot_3.jpeg",offer:""},{title:"KitKat 2 Finger Lemon Drizzle Chocolate Biscuit Bar, 9 Pack 9x20.7",price:"\xa31.00",img:"https://ui.assets-asda.com/g/v5/187/824/7613036187824_280_IDShot_3.jpeg",offer:"Save \xa30.99"}];function F(e){return e.length>=5?e.slice(0,5):F(e.concat(e))}var S=j;c.a.render(n.a.createElement(S,null),document.getElementById("root"))}],[[10,2,1]]]);
//# sourceMappingURL=main.8faf6109.chunk.js.map