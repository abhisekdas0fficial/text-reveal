position = 1;

function handler() {
    var elements = document.querySelectorAll(".wrapper li");

    if (position < elements.length) {
        position += 1;
    } else {
        position = 1
    }

    elements.forEach(element => {
        element.removeAttribute("id");
    });

    document.querySelector(`.wrapper li:nth-child(${position})`).id = "show";
}


gsap.from(".wrapper", {
    duration: 0.6,
    y: -20,
    opacity: 0
})

var tl = gsap.timeline({
    repeat: -1,
    yoyo: true,
    delay: 1.5,
    repeatDelay: 0.5
});

tl
  .to(".cover", {
      duration: 1,
      width: "100%",
      stagger: {
          amount: 0.2,
          from: 1
      },
      onComplete: handler
  }, "+=2")