var position = 1;
var wrapper = document.querySelector(".wrapper");

function handler() {
    var lists = document.querySelectorAll(".wrapper li");
    prevHeight = getComputedStyle(wrapper).height;

    position = (position < lists.length) ? position+1 : 1;

    lists.forEach(element => {
        element.removeAttribute("id");
        element.style.visibility = "hidden";
    });

    var show = document.querySelector(`.wrapper li:nth-child(${position})`);
    show.id = "show";
    endHeight = getComputedStyle(wrapper).height;

    if (prevHeight != endHeight) {
        wrapper.style.height = prevHeight;
        wrapper.offsetWidth;
        wrapper.style.height = endHeight;
    }

    wrapper.addEventListener('transitionend', function (e) {
        wrapper.removeEventListener('transitionend', arguments.callee);
        wrapper.style.height = null;
    });
    show.style.visibility = "visible";
}


gsap.from(".wrapper", {
    duration: 0.6,
    y: -20,
    opacity: 0
});

var tl = gsap.timeline({
    repeat: -1,
    yoyo: true,
    delay: 1.5,
    repeatDelay: 0.5
});

tl.to(".cover", {
    duration: 1,
    width: "100%",
    stagger: {
        amount: 0.2,
        from: 1
    },
    onComplete: handler
}, "+=2");