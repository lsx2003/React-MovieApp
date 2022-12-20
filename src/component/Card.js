import React, { useLayoutEffect } from "react";
import { effect } from "../animation";

export default function Card({ newData }) {
  useLayoutEffect(effect, [window.scrollY]); // 의존성 배열 내부의 값이 변할 때 마다 LayoutEffect 실행
  return (
    <>
      {newData.map((el) => {
        return (
          <div className="wheel__card" key={el.rnum}>
            <div>{el.rank}</div>
            <div></div>
            <img
              src="https://w.namu.la/s/59bbf73b123d0f9f693be3c3de9506b24a1f2a3067b4ffd0207a3a08eee32d750ebf1ca3e33084aa3bbcd6916bd0a8a187cc4556b87fa269c25f1a7ff3ea279f1e372d23aa0a6eee8d5932c70d5dac0e775cb479146a5c95b4596a83f8dfcc64675534264ec5a1dab1a9744809c8f965"
              alt=""
            ></img>
          </div>
        );
      })}
    </>
  );
}
