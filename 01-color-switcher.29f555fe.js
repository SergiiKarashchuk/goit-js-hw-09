const t=document.querySelector(".js-btnStart"),e=document.querySelector(".js-btnStop");t.addEventListener("click",(function(){timerId=setInterval((()=>{t.disabled=!0,document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`,console.log(document.body.style.background)}),1e3)})),e.addEventListener("click",(function(){clearInterval(timerId),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.29f555fe.js.map
