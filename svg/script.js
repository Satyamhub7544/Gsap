let pathValue = `M 10 80 Q 500 80 1000 80`;
let finalValue = `M 10 80 Q 500 80 1000 80`;

let object = document.querySelector(".box");

object.addEventListener("mousemove", function (dets) {
  pathValue = `M 10 80 Q 500 ${dets.y} 1000 80`;
  gsap.to("svg path", {
    attr: { d: pathValue },
    ease: "power3.out",
  });
});

object.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: { d: finalValue },
      duration:1,
     ease: "elastic.out(1,0.2)",
  });
});
