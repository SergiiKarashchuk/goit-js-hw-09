const t=document.querySelector(".js-btnStart"),e=document.querySelector(".js-btnStop");t.addEventListener("click",(function(){t.disabled=!0,timerId=setInterval((()=>{document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`,console.log(document.body.style.background)}),1e3)})),e.addEventListener("click",(function(){clearInterval(timerId),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.d3e66974.js.map