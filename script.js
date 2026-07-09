document.querySelectorAll(".menu a").forEach(link=>{

link.addEventListener("mouseenter",()=>{

link.style.letterSpacing="2px";

});

link.addEventListener("mouseleave",()=>{

link.style.letterSpacing="0";

});

});
