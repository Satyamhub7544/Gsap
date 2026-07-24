gsap.to(".second h1", {
  transform: "translateX(-350%)",
  scrollTrigger: {
    trigger: ".second",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -300%",
    scrub: 2,
    pin: true,
  },
});
