var pos = 2

function onCompleteHandler() {
    if (pos < 4) {
        pos +=1
    } else {
        pos = 1
    }
}

function animate() {
    var tl = gsap.timeline();

    tl
    .set(`.wrapper ul li:nth-child(${pos})`, {
        display: "block"
    })
    .set(`.wrapper ul li:nth-child(${pos})`, {
        display: "none",
    }, "+=6.6");

    onCompleteHandler();
    return tl;
}

var master = gsap.timeline({
    repeat: -1
});

master
    .to(".cover-2", {
        duration: 1,
        width: "100%"
    }, "+=4")
    .to(".cover-1", {
        duration: 1,
        width: "100%"
    }, "-=0.7")
    .add(animate)
    .to(".cover-1", {
        duration: 1,
        width: "20px"
    })
    .to(".cover-2", {
        duration: 1,
        width: "20px"
    }, "-=0.7");

gsap.set("#hello", {
    display: "none",
    delay: 5.3
})