(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var o=t.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&!n;)n=o[a--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})();const n=[{section:"About Us",content:"Welcome to our haven of Japanese culinary excellence, where passion and tradition converge to create a unique ramen experience. At our ramen shop, we are committed to delivering authentic flavors and meticulous craftsmanship in every bowl. Our journey began with a love for the rich heritage of Japanese cuisine, and we strive to share that love with you through each carefully curated dish."},{section:"Meet the Team",content:[{image:"/src/assets/about/jouwen-wang-5-u7C5gy8r4-unsplash.jpg",name:"Chef Hiroshi Tanaka",role:"Head Chef",bio:"With over two decades of experience perfecting the art of ramen, Chef Hiroshi Tanaka brings his expertise and creativity to our kitchen. His dedication to using only the finest ingredients and time-honored techniques ensures that every bowl surpasses expectations."},{image:"/src/assets/about/pexels-maksim-goncharenok-5506098.jpg",name:"Sakura Yamamoto",role:"Managing Partner",bio:"As the heart and soul behind our ramen shop, Sakura Yamamoto is passionate about creating a welcoming and memorable dining experience. Her vision is to share the authentic flavors of Japan while fostering a sense of community within our cozy establishment."}]},{section:"Our Mission",content:"Our mission is to transport you to the bustling ramen stalls of Tokyo, where the aroma of simmering broth and the sound of slurping noodles fill the air. We invite you to join us on this gastronomic journey, where each bowl tells a story of dedication, flavor, and a commitment to preserving the essence of Japanese culinary traditions."},{section:"Contact Us",content:{email:"info@ramenhouse.com",phone:"+81 90-1234-5678",address:"123 Ramen Street, Cityville, Japan"}}],t=e.p+"85ca58d969443f2fe981.jpg",o=[{image:"/src/assets/menu/cards/pexels-photo-698549.webp",name:"Hakata Classic Tonkotsu",description:"Immerse yourself in the velvety richness of slow-cooked pork bone broth, chashu slices, al dente noodles, and traditional toppings.",price:12},{image:"/src/assets/menu/cards/pexels-photo-12984979.jpeg",name:"Karai Miso Temptation",description:"Bold and flavorful fusion ramen with spicy miso broth, succulent chicken or pork, and a blend of heat and umami. Topped with corn, green onions, and sesame seeds.",price:14},{image:"/src/assets/menu/cards/pexels-photo-6645911.jpeg",name:"Shojin Zen Bowl",description:"Plant-based goodness with miso-infused vegetable broth, organic tofu, and a vibrant assortment of seasonal vegetables.",price:11},{image:"/src/assets/menu/cards/pexels-photo-4083578.jpeg",name:"Yakitori Shoyu Chicken Ramen",description:"Soy-glazed chicken in a unique broth, paired with perfectly seared chicken, bamboo shoots, nori, and a soft-boiled egg.",price:13},{image:"/src/assets/menu/cards/pexels-photo-1395319.webp",name:"Kaisen Seafood Umi Bowl",description:"Seafood lover's dream with shrimp, mussels, calamari, and a seafood broth. Crowned with enoki mushrooms, seaweed, and chili oil.",price:15},{image:"/src/assets/menu/cards/pexels-photo-12984983.jpeg",name:"Truffle Shoyu Delicacy",description:"Luxurious ramen with soy-based broth, truffle oil-infused beef slices, bean sprouts, green onions, and a dash of truffle salt.",price:16}],a=()=>{const e=document.getElementById("content");e.innerHTML="";const n=document.createElement("h1");n.textContent="Menu",e.appendChild(n);const t=document.createElement("div");t.className="menu-container",o.forEach((e=>{t.innerHTML+=`\n      <div class="card">\n        <img class="menu-img" src="${e.image}" />\n        <h2 class="title">${e.name}</h2>\n        <p>${e.description}</p>\n        <p class="price">${e.price}</p>\n        <button class="btn">Add To Cart</button>\n      </div>\n    `})),e.appendChild(t)};a();const i=document.getElementById("home"),s=document.getElementById("menu"),r=document.getElementById("about");i.addEventListener("click",(()=>{const e=document.getElementById("content");e.innerHTML="";const n=document.createElement("section"),o=document.createElement("h1");o.textContent="Savour the Soul of Japan",n.appendChild(o);const a=document.createElement("p");a.textContent="Indulge in a Symphony of Flavors with Handcrafted Noodles, Rich Broths, and Irresistible Toppings – Your Culinary Journey Begins Here!",n.appendChild(a);const i=document.createElement("img");i.src=t,i.className="hero";const s=document.createElement("button");s.textContent="Place Order",n.appendChild(s),e.appendChild(n),e.appendChild(i)})),s.addEventListener("click",a),r.addEventListener("click",(()=>{const e=document.getElementById("content");e.innerHTML="";const t=document.createElement("div");t.className="about-container",n.forEach((e=>{var n;t.innerHTML+=`\n    <section>\n      <h2>${e.section}</h2>\n      ${n=e.content,"string"==typeof n?`<p>${n}</p>`:Array.isArray(n)?n.map((e=>`\n          <article>\n            <img src="${e.image}" />\n              <div>\n                <h3>${e.name}</h3>\n                <p><strong>${e.role}</strong></p>\n                <p>${e.bio}</p>\n              </div>\n          </article>\n          `)).join(""):"object"==typeof n?`\n      <p>Email: <a href="mailto:${n.email}">${n.email}</a></p>\n      <p>Phone: <a href="tel:${n.phone}">${n.phone}</a></p>\n      <p>Address: ${n.address}</p>\n    `:""}\n    </section>`})),e.appendChild(t)}))})();