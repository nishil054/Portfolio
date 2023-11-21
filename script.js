gsap.to("#nav",{
    backgroundColor : "#000",
    height :"60px",
    duration :0.7,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller: "body",
        start:"top -30%",
        end:"top -100%",
        scrub:2
    }
})