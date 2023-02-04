import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const effect = () => {
  gsap.registerPlugin(Flip);
  gsap.registerPlugin(ScrollTrigger);

  let wheel = document.querySelector(".wheel");
  let images = gsap.utils.toArray(".wheel__card"); // image 들을 배열로 만들어 변수에 할당
  gsap.to(".title", { x: 5, ease: "power1.inOut", repeat: -1, yoyo: true });
  gsap.to(".title", { y: 5, ease: "power1.inOut", repeat: -1, yoyo: true });
  gsap.to(".arrow", { y: 5, ease: "power1.inOut", repeat: -1, yoyo: true });

  // arrow 클래스를 y방향으로 5만큼 이동
  function setup() {
    let radius = wheel.offsetWidth / 2; // wheel.offsetWidth : wheel 요소의 전체 크기
    let center = wheel.offsetWidth / 2;
    let total = images.length;
    let slice = (2 * Math.PI) / total; // image 갯수로 slice 할당

    images.forEach((item, i) => {
      let angle = i * slice;

      let x = center + radius * Math.sin(angle);
      let y = center - radius * Math.cos(angle);

      gsap.set(item, {
        rotation: angle + "_rad",
        xPercent: -50,
        yPercent: -50,
        x: x,
        y: y,
      });
    });
  }
  setup();

  window.addEventListener("resize", setup);
  // 스크롤 회전
  gsap.to(".wheel", {
    rotate: () => -360,
    ease: "none",
    duration: images.length,
    scrollTrigger: {
      start: 0,
      end: "max",
      scrub: 1,
      snap: 1 / images.length,
      invalidateOnRefresh: true,
    },
  });
};
