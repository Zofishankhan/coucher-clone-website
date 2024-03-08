let tl=gsap.timeline();
tl.from(".hr1",{
    opacity:0,
    duration:0.7,
    delay:0.3
})
tl.from("nav h1,nav p,.signup",{
    y:-80,
    opacity:0,
    duration:1,
    stagger:0.3,
})
tl.from(".container h1,.hr2,.text p",{
    scale:0,
    opacity:0,
    duration:1,
    stagger:0.5,
})
tl.from(".container img",{
    x:-90,
    opacity:0,
    duration:1,
    stagger:0.5,
})
tl.from(".scroller",{
    y:90,
    opacity:0,
    duration:1,
    repeat:-1,
    stagger:0.5,
})
gsap.from(".para1",{
    scale:0,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"page2 .para1",
        scroller:"body",
        marker:true,
    }
})
gsap.from(".div1,.div2,.div3",{
    y:100,
    opacity:0,
    duration:1,
    delay:1.2,
    stagger:0.5,
    scrollTrigger:{
        trigger:"page2 .para2",
        scroller:"body",
    }
})
gsap.from(".box1,.box2,.box3",{
    y:-100,
    opacity:0,
    duration:1,
    delay:2.7,
    stagger:0.5,
    scrollTrigger:{
        trigger:"page2 .box1",
        scroller:"body",
       
    }
})
            