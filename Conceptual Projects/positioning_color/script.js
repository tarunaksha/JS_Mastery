let rect = document.querySelector('#position');

rect.addEventListener('mousemove',(dets)=>{
    let rectPos = rect.getBoundingClientRect();
    let insideRectValue = dets.clientX - rectPos.left;

    if (insideRectValue < rectPos.width/2) {
        let redColor = gsap.utils.mapRange(0,rectPos.width/2,255,0,insideRectValue);
        gsap.to(rect, {
            backgroundColor: `rgb(${redColor},0,0)`,
            ease: Power4
        })
    } else if (insideRectValue > rectPos.width/2) {
        let blueColor = gsap.utils.mapRange(rectPos.width/2,rectPos.width,0,255,insideRectValue);
        gsap.to(rect, {
            backgroundColor: `rgb(0,0,${blueColor})`,
            ease: Power4
        })
    }
})
rect.addEventListener('mouseleave',()=>{
    gsap.to(rect, {
        backgroundColor: 'white'
    })
})