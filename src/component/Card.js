import React, { useLayoutEffect, useState } from "react";
import { effect } from "../animation";
import styled from "styled-components";
// import { ModalView } from "./Modal";

export const Content = styled.div`
  width: 100%;
  height: 5%;
  background: black;
  font-size: 1rem;
  font-weight: 800;
`;

function Card({ newData, poster, setSelect, isSelect, clickHandler }) {
  useLayoutEffect(effect, []); // 의존성 배열 내부의 값이 변할 때 마다 LayoutEffect 실행
  console.log(poster);

  return (
    <>
      <div className="wheel__card">
        <img src={poster[0]} alt="pic"></img>
      </div>

      <div className="wheel__card">
        <img src={poster[1]} alt="pic"></img>
      </div>
      <div className="wheel__card">
        <img src={poster[2]} alt="pic"></img>
      </div>
      <div className="wheel__card">
        <img src={poster[3]} alt="pic"></img>
      </div>
      <div className="wheel__card">
        <img src={poster[4]} alt="pic"></img>
      </div>
      <div className="wheel__card">
        <img src={poster[5]} alt="pic"></img>
      </div>
      <div className="wheel__card">
        <img src={poster[6]} alt="pic"></img>
      </div>
      <div className="wheel__card">
        <img src={poster[7]} alt="pic"></img>
      </div>
      <div className="wheel__card">
        <img src={poster[8]} alt="pic"></img>
      </div>
      <div className="wheel__card">
        <img src={poster[9]} alt="pic"></img>
      </div>
    </>
  );
}

export default React.memo(Card);
