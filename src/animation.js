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

  // let x = 1000; // 1000일 때 가운데
  // let y = 0; // 일때 whell 제일 위에 위치, 값이 높아 질수록 중심으로 이동
  // set 메소드는 속성을 즉시 설정한다.(세팅)
  //  test 클래스 요소가 opacity가 1일때  gsap.to(test, 0.5, {opacity : 1});   opacity가 0에서 0.5초 동안 1로 변함
  //
  //  test 클래스 요소가 opacity가 1일때  gsap.from(test, 0.5, {opacity : 1});   opacity가 0에서 0.5초 동안 1로 변함

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

  let cards = gsap.utils.toArray(".wheel__card");
  let header = document.querySelector(".header");
  // let fragment = document.createElement("div");
  let lastClickedCard;

  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      if (lastClickedCard) {
        putBack(e);
      }
      flip(e);
    });
  });

  header.addEventListener("click", (e) => {
    if (!lastClickedCard) return;
    putBack(e);
  });

  function putBack(e) {
    let image = header.querySelector("img");
    let state = Flip.getState(image);

    lastClickedCard.appendChild(image);

    Flip.from(state, {
      duration: 0.6,
      ease: "sine.out",
      absolute: true,
    });

    lastClickedCard = null;
    // header.removeChild(fragment);
  }

  function flip(e) {
    // fragment.classList.add("content");

    let image = e.target.querySelector("img");

    let state = Flip.getState(image);
    header.appendChild(image);
    // header.appendChild(fragment);

    image.classList.add("select");
    Flip.from(state, {
      duration: 0.6,
      ease: "sine.out",
      absolute: true,
    });

    lastClickedCard = e.target;
  }
};
