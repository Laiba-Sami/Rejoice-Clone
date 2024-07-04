function lososcroll() {
  // locomotive scroll trigger
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    // follwoing line is not required to work pinning on touch screen

    /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

lososcroll();
// cursor animation
var contents = document.querySelector("#content");
var crsr = document.querySelector(".cursor");

contents.addEventListener("mousemove", function (dets) {
  gsap.to(crsr, {
    x: dets.x,
    y: dets.y,
  });
});
contents.addEventListener("mouseenter", function () {
  gsap.to(crsr, {
    scale: 1,
    opacity: 1,
  });
});
contents.addEventListener("mouseleave", function () {
  gsap.to(crsr, {
    scale: 0,
    opacity: 0,
  });
});
// page2 animation
var t = gsap.timeline()
t.from(".head h1,.mpara p, hr", {
  y: 120,
  stagger: 0.4,
  duration: 1.2,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    start: "top 40%",
    end: "top 37%",
    // markers: true,
    scrub: 2,
  },
});

// page3 animation

t.from(".footp , .footp p", {
    y: 120,
    stagger: 0.4,
    duration: 1.2,
    scrollTrigger: {
      trigger: "#page3",
      scroller: "#main",
      start: "top 40%",
      end: "top 37%",
      // markers: true,
      scrub: 2,
    },
  });

// circle counter
let counter = 9;
const seatCounterElement = document.getElementById("seatCounter");

function countdown() {
  const interval = setInterval(() => {
    if (counter > 2) {
      counter--;
      seatCounterElement.textContent = `${counter} seats`;
    } else {
      clearInterval(interval);
    }
  }, 700); // Speed of counting down (100ms per decrement)
}

countdown();

function swipernoswiping(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
          },
        speed: 3000, // Adjust the speed of the transition
        effect: 'slide', // Choose an effect like 'slide', 'fade', 'cube', 'coverflow', or 'flip'
        grabCursor: false, // Shows a grab cursor on hover
      });
}
swipernoswiping()



var tl = gsap.timeline()

tl.from("#loader h2",{
    x:100,
    opacity:0,
    duration:1.2,
    stagger:0.3,
   
})
tl.to("#loader h2",{
    x:-80,
    opacity:0,
    duration:1.2,
    stagger:0.3,
   
})
tl.to("#loader",{
    opacity:0,
})

tl.to("#loader",{
    display:"none",
})
// page6 animation
gsap.registerPlugin(ScrollTrigger);

// Timeline for moving elements upward

tl.from("#page6 .head1 h1", {
    y: 50,  // move upward
    duration: 0.6,
    opacity: 0,
    stagger: 0.1
})
.to("#page6 .mpara p", {
    y: -10,  // move upward
    duration: 0.6,
    opacity: 1
}, "-=0.5");



        // page8 animation
gsap.registerPlugin(ScrollTrigger);

        gsap.timeline()
        tl.from("#page8 .aboutus p", {
            y: 50,
            duration: 0.6,
            opacity: 0
        })
        .from("#page8 .aboutus h2", {
            y: 50,
            duration: 0.6,
            opacity: 0
        }, "-=0.10");
        
// tl.from("#page9top .topl h3",{
//     y:10,
//     duration:0.4,
//     opacity:0,
//     stagger:0.1,
//     // delay:-0.6
// })

// page9 animation
gsap.registerPlugin(ScrollTrigger);
        tl.from("#page9top .topl h3, #page9top .topl button", {
            y: -50,
            duration: 0.6,
            opacity: 0,
            stagger: 0.1
        })
        .from("#page9top .topr h5, #page9top .topr a", {
            y: -50,
            duration: 0.6,
            opacity: 0,
            stagger: 0.1
        }, "-=0.5")
        .from("#page9mid .topm h5, #page9mid .topr h5", {
            y: -50,
            duration: 0.6,
            opacity: 0,
            stagger: 0.1
        }, "-=0.5")
        .from("#page9bottom h1 span", {
            y: -50,
            duration: 0.6,
            opacity: 0,
            stagger: 0.1
        }, "-=0.5");



