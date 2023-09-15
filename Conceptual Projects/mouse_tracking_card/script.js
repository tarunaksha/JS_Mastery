window.addEventListener("mousemove", (dets) => {
  let rect = document.querySelector("#rect");
  let xValue = gsap.utils.mapRange(
    0,
    window.innerWidth,
    200+rect.getBoundingClientRect().width/2,
    window.innerWidth - (200+rect.getBoundingClientRect().width/2),
    dets.clientX
  );
  gsap.to("#rect", {
    left: xValue + "px",
    ease: Power3,
  });
});
