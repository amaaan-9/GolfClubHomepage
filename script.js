var cursor = document.querySelector("#cursor");
var blu = document.querySelector("#cursor-blur");

document.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x+"px";
    cursor.style.top = dets.y+"px";
    blu.style.left = dets.x-200+"px";
    blu.style.top = dets.y-200+"px";

});



gsap.to("#nav",{
    backgroundColor:"#000",
    height:"110px",
    duration:0.6,
    scrollTrigger:{
        trigger:"#nav",
        scroller : "body",
        start:"top -10%",
        end: "top -11%",
        scrub:1,
    }
});

gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller: "body",
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    }

});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach((elem)=>{
    elem.addEventListener("mouseenter",()=>{
        cursor.style.scale = 3;
        cursor.style.border = "1px solid #fff";
        cursor.style.backgroundColor = "transparent";
    });
    elem.addEventListener("mouseleave",()=>{
        cursor.style.scale = 1;
        cursor.style.border = "0px solid #95c11e";
        cursor.style.backgroundColor = "#95c11e";
    })
});
gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.6,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 63%",
        end:"top 55%",
        scrub:3
    }
});
gsap.from(".card",{
    scale:0.7,
    opacity:0,
    duration:1,
    // stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
});
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})





