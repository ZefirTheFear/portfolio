(window.webpackJsonpportfolio=window.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/portrait.ef93b85f.jpg"},,,,,function(e,a,t){e.exports=t(52)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/HTML5_logo.525f317f.svg"},function(e,a,t){e.exports=t.p+"static/media/CSS3_logo.7415a70a.svg"},function(e,a,t){e.exports=t.p+"static/media/Sass_logo.e0f651ac.svg"},function(e,a,t){e.exports=t.p+"static/media/Boostrap_logo.06596577.svg"},function(e,a,t){e.exports=t.p+"static/media/JavaScript_logo.dd60b11e.svg"},function(e,a,t){e.exports=t.p+"static/media/React_logo.8e26f220.svg"},function(e,a,t){e.exports=t.p+"static/media/JQuery_logo.03d78f02.svg"},function(e,a,t){e.exports=t.p+"static/media/Node.js_logo.89ccb090.svg"},function(e,a,t){e.exports=t.p+"static/media/Mongodb_logo.8f1222a8.svg"},function(e,a,t){e.exports=t.p+"static/media/Mongoose_logo.514acb44.svg"},function(e,a,t){e.exports=t.p+"static/media/Git_logo.aaec9219.svg"},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/project1.2efd960d.jpg"},function(e,a,t){e.exports=t.p+"static/media/project2.473d9f55.jpg"},function(e,a,t){e.exports=t.p+"static/media/project3.139308d7.jpg"},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(16),s=t.n(c),r=(t(24),t(25),t(26),t(9)),m=t(6),o=t(5),i=l.a.createContext({language:""}),u=(t(27),function(){var e=Object(n.useContext)(i),a=Object(n.useRef)(),c=Object(n.useRef)(),s=Object(n.useRef)(),o=Object(n.useRef)(),u=Object(n.useState)(!1),_=Object(r.a)(u,2),g=_[0],E=_[1],d=function(){a.current.classList.remove("menu__btn_close"),c.current.classList.remove("menu__nav_show"),s.current.classList.remove("menu__branding_show"),o.current.classList.remove("menu__list_show"),document.querySelectorAll(".menu__nav-item").forEach(function(e){return e.classList.remove("menu__nav-item_show")}),E(!1)};return l.a.createElement("header",{className:"menu"},l.a.createElement("div",{className:"menu__languages"},l.a.createElement("button",{className:"menu__language-btn menu__language-btn_ru",title:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439",onClick:function(){localStorage.setItem("language","ru"),e.setLanguage("ru")}}),l.a.createElement("button",{className:"menu__language-btn menu__language-btn_en",title:"English",onClick:function(){localStorage.setItem("language","en"),e.setLanguage("en")}})),l.a.createElement("div",{className:"menu__btn",onClick:function(){g?d():(a.current.classList.add("menu__btn_close"),c.current.classList.add("menu__nav_show"),s.current.classList.add("menu__branding_show"),o.current.classList.add("menu__list_show"),document.querySelectorAll(".menu__nav-item").forEach(function(e){return e.classList.add("menu__nav-item_show")}),E(!0))},ref:a,title:"ru"===e.language?"\u041c\u0435\u043d\u044e":"Menu"},l.a.createElement("div",{className:"menu__btn-line"}),l.a.createElement("div",{className:"menu__btn-line"}),l.a.createElement("div",{className:"menu__btn-line"})),l.a.createElement("nav",{className:"menu__nav",ref:c},l.a.createElement("div",{className:"menu__branding",ref:s},l.a.createElement("div",{className:"menu__portrait"},l.a.createElement("img",{className:"menu__portrait-img",src:t(14),alt:"portrait"}))),l.a.createElement("ul",{className:"menu__list",ref:o},l.a.createElement("li",{className:"menu__nav-item"},l.a.createElement(m.b,{to:"/",exact:!0,className:"menu__nav-link",activeClassName:"menu__nav-link_active",onClick:d},"ru"===e.language?"\u0413\u043b\u0430\u0432\u043d\u0430\u044f":"Home")),l.a.createElement("li",{className:"menu__nav-item"},l.a.createElement(m.b,{to:"/about",className:"menu__nav-link",activeClassName:"menu__nav-link_active",onClick:d},"ru"===e.language?"\u041e\u0431\u043e \u043c\u043d\u0435":"About me")),l.a.createElement("li",{className:"menu__nav-item"},l.a.createElement(m.b,{to:"/work",className:"menu__nav-link",activeClassName:"menu__nav-link_active",onClick:d},"ru"===e.language?"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u043a\u043e\u0434\u0430":"Code examples")),l.a.createElement("li",{className:"menu__nav-item"},l.a.createElement(m.b,{to:"/contact",className:"menu__nav-link",activeClassName:"menu__nav-link_active",onClick:d},"ru"===e.language?"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b":"Contact me")))))}),_=(t(33),function(e){return l.a.createElement("div",{className:"home"},l.a.createElement("h1",{className:"home__lg-heading"},"ru"===e.language?"\u0410\u043b\u0435\u043a\u0441\u0435\u0439":"Alexey"," ",l.a.createElement("span",{className:"home__text-secondary"},"ru"===e.language?"\u041a\u043b\u0438\u043c\u0435\u043d\u043a\u043e":"Klimenko")),l.a.createElement("h2",{className:"home__sm-heading"},"ru"===e.language?"\u0412\u0435\u0431 \u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a":"Web Developer"),l.a.createElement("div",{className:"home__icons"},l.a.createElement("a",{className:"home__icon-link",href:"https://github.com/ZefirTheFear",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("div",{className:"home__icon-gitnub"})),l.a.createElement("a",{className:"home__icon-link",href:"https://www.linkedin.com/in/alexey-klimenko-a0019b192/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("div",{className:"home__icon-linkedin"}))))}),g=(t(34),function(e){return l.a.createElement("div",{className:"about"},l.a.createElement("h1",{className:"about__lg-heading"},"ru"===e.language?"\u041e\u0431\u043e":"About"," ",l.a.createElement("span",{className:"about__text-secondary"},"ru"===e.language?"\u041c\u043d\u0435":"Me")),l.a.createElement("h2",{className:"about__sm-heading"},"ru"===e.language?"\u0438 \u043e \u043c\u043e\u0438\u0445 \u043d\u0430\u0432\u044b\u043a\u0430\u0445":"and my skills"),l.a.createElement("div",{className:"about__info"},l.a.createElement("img",{className:"about__img",src:t(14),alt:"portrait"}),l.a.createElement("div",{className:"about__bio"},l.a.createElement("h3",{className:"about__text-secondary"},"ru"===e.language?"\u0410\u043b\u0435\u043a\u0441\u0435\u0439 \u041a\u043b\u0438\u043c\u0435\u043d\u043a\u043e":"Alexey Klimenko"),l.a.createElement("div",{className:"about__about-me"},l.a.createElement("p",null,"ru"===e.language?"\u0412\u0435\u0431-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u043e\u0441\u0440\u0435\u0434\u043e\u0442\u043e\u0447\u0435\u043d \u043d\u0430 \u0447\u0438\u0441\u0442\u043e\u043c, \u043f\u043e\u043d\u044f\u0442\u043d\u043e\u043c \u0438 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u043c\u043e\u043c \u043a\u043e\u0434\u0435.":"A web developer who focused on clean, understandable and scalable code."),l.a.createElement("p",null,"ru"===e.language?"\u041b\u044e\u0431\u043b\u044e \u043e\u0431\u0443\u0447\u0430\u0442\u044c\u0441\u044f, \u0443\u0437\u043d\u0430\u0432\u0430\u0442\u044c \u0438 \u043f\u0440\u0430\u043a\u0442\u0438\u043a\u043e\u0432\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438.":"I like to learn, find out and practice new technologies."),l.a.createElement("p",null,"ru"===e.language?"\u0426\u0435\u043b\u044c - \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b \u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u043e\u0441\u0442.":"My goal is to create interesting projects and gain professional growth."))),l.a.createElement("div",{className:"about__education"},l.a.createElement("h3",{className:"about__subtitle"},"ru"===e.language?"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435":"Education"),l.a.createElement("h6",{className:"about__education-title"},"2004-2010"),l.a.createElement("div",{className:"about__skills-description"},"ru"===e.language?"\u041d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442 \u0423\u043a\u0440\u0430\u0438\u043d\u044b '\u041a\u0438\u0435\u0432\u0441\u043a\u0438\u0439 \u041f\u043e\u043b\u0438\u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0418\u043d\u0441\u0442\u0438\u0442\u0443\u0442' (\u0418\u043d\u0441\u0442\u0438\u0442\u0443\u0442 \u044d\u043d\u0435\u0440\u0433\u043e\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0438 \u044d\u043d\u0435\u0440\u0433\u043e\u043c\u0435\u043d\u0435\u0434\u0436\u043c\u0435\u043d\u0442\u0430)":"National Technical University of Ukraine 'Igor Sikorsky Kyiv Polytechnic Institute' (Institute of Energy Saving and Energy Management)")),l.a.createElement("div",{className:"about__experience"},l.a.createElement("h3",{className:"about__subtitle"},"ru"===e.language?"\u041e\u043f\u044b\u0442":"Experience"),l.a.createElement("h6",{className:"about__experience-title"},"Full Stack Web Developer"),l.a.createElement("div",{className:"about__experience-description"},"ru"===e.language?"\u0414\u0435\u0441\u044f\u0442\u043a\u0438 \u043f\u043b\u0430\u0442\u043d\u044b\u0445 \u0438 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0445 \u043e\u043d\u043b\u0430\u0439\u043d \u043a\u0443\u0440\u0441\u043e\u0432. \u0412 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u043c, \u043d\u0430 Udemy.":"Dozens of paid and free online courses. On Udemy, mostly")),l.a.createElement("div",{className:"about__skills"},l.a.createElement("h3",{className:"about__subtitle"},"ru"===e.language?"\u041d\u0430\u0432\u044b\u043a\u0438":"Skills"),l.a.createElement("div",{className:"about__skills-description"},l.a.createElement("div",{className:"about__logos"},l.a.createElement("img",{className:"about__logo",src:t(35),alt:"html5"}),l.a.createElement("img",{className:"about__logo",src:t(36),alt:"html5"}),l.a.createElement("img",{className:"about__logo",src:t(37),alt:"html5"}),l.a.createElement("img",{className:"about__logo",src:t(38),alt:"html5"}),l.a.createElement("img",{className:"about__logo",src:t(39),alt:"html5"}),l.a.createElement("img",{className:"about__logo",src:t(40),alt:"html5"}),l.a.createElement("img",{className:"about__logo",src:t(41),alt:"html5"}),l.a.createElement("img",{className:"about__logo",src:t(42),alt:"html5"}),l.a.createElement("img",{className:"about__logo",src:t(43),alt:"html5"}),l.a.createElement("img",{className:"about__logo",src:t(44),alt:"html5"}),l.a.createElement("img",{className:"about__logo",src:t(45),alt:"html5"})),l.a.createElement("ul",{className:"about__skill-list"},l.a.createElement("li",null,"HTML"),l.a.createElement("li",null,"CSS"),l.a.createElement("li",null,"Sass"),l.a.createElement("li",null,"Bootstap 4"),l.a.createElement("li",null,"JS"),l.a.createElement("li",null,"React JS"),l.a.createElement("li",null,"JQuery"),l.a.createElement("li",null,"Node JS (Express)"),l.a.createElement("li",null,"Mongo DB (Mongoose)"),l.a.createElement("li",null,"Git"),l.a.createElement("li",null,"English (intermediate)"))))))}),E=(t(46),function(e){return l.a.createElement("div",{className:"work"},l.a.createElement("h1",{className:"work__lg-heading"},"ru"===e.language?"\u041f\u0440\u0438\u043c\u0435\u0440\u044b":"Code"," ",l.a.createElement("span",{className:"work__text-secondary"},"ru"===e.language?"\u041a\u043e\u0434\u0430":"Examples")),l.a.createElement("h2",{className:"work__sm-heading"},"ru"===e.language?"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043c\u043e\u0438 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u044b...":"Check out some of my projects..."),l.a.createElement("div",{className:"work__projects"},l.a.createElement("div",{className:"work__project"},l.a.createElement("img",{className:"work__project-img",src:t(47),alt:"project1"}),l.a.createElement("a",{href:"#!",className:"work__project-link"},"ru"===e.language?"\u0414\u0435\u043c\u043e":"Demo"),l.a.createElement("a",{href:"#!",className:"work__project-github-link"},"Github")),l.a.createElement("div",{className:"work__project"},l.a.createElement("img",{className:"work__project-img",src:t(48),alt:"project2"}),l.a.createElement("a",{href:"#!",className:"work__project-link"},"ru"===e.language?"\u0414\u0435\u043c\u043e":"Demo"),l.a.createElement("a",{href:"#!",className:"work__project-github-link"},"Github")),l.a.createElement("div",{className:"work__project"},l.a.createElement("img",{className:"work__project-img",src:t(49),alt:"project3"}),l.a.createElement("a",{href:"#!",className:"work__project-link"},"ru"===e.language?"\u0414\u0435\u043c\u043e":"Demo"),l.a.createElement("a",{href:"#!",className:"work__project-github-link"},"Github"))))}),d=(t(50),function(e){return l.a.createElement("div",{className:"contact"},l.a.createElement("h1",{className:"contact__lg-heading"},"ru"===e.language?"\u041c\u043e\u0438":"Contact"," ",l.a.createElement("span",{className:"contact__text-secondary"},"ru"===e.language?"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b":"Me")),l.a.createElement("h2",{className:"contact__sm-heading"},"ru"===e.language?"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043e \u043c\u043d\u043e\u0439 \u0441\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f...":"This is how you can reach me..."),l.a.createElement("div",{className:"contact__contacts"},l.a.createElement("div",{className:"contact__contact"},l.a.createElement("span",{className:"contact__text-secondary"},"ru"===e.language?"\u041f\u043e\u0447\u0442\u0430:":"Email:")," ","alexeyklimenkojs@gmail.com"),l.a.createElement("div",{className:"contact__contact"},l.a.createElement("span",{className:"contact__text-secondary"},"ru"===e.language?"\u0422\u0435\u043b\u0435\u0444\u043e\u043d:":"Phone:")," ","(555) 555-5555")))});t(51);var p=function(){var e=Object(n.useState)(localStorage.getItem("language")?localStorage.getItem("language"):"en"),a=Object(r.a)(e,2),t=a[0],c=a[1];return l.a.createElement(i.Provider,{value:{language:t,setLanguage:c}},l.a.createElement(m.a,null,l.a.createElement("main",{className:"app"},l.a.createElement(u,null),l.a.createElement("div",{className:"app__inner"},l.a.createElement(o.d,null,l.a.createElement(o.b,{exact:!0,path:"/",render:function(e){return l.a.createElement(_,Object.assign({},e,{language:t}))}}),l.a.createElement(o.b,{exact:!0,path:"/about",render:function(e){return l.a.createElement(g,Object.assign({},e,{language:t}))}}),l.a.createElement(o.b,{exact:!0,path:"/work",render:function(e){return l.a.createElement(E,Object.assign({},e,{language:t}))}}),l.a.createElement(o.b,{exact:!0,path:"/contact",render:function(e){return l.a.createElement(d,Object.assign({},e,{language:t}))}}),l.a.createElement(o.a,{to:"/"}))))))};s.a.render(l.a.createElement(p,null),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.029e84d4.chunk.js.map