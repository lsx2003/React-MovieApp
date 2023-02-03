import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import { effect } from "../animation";
import { v4 } from "uuid";

const Number = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 26px;
  font-size: 18px;
  background-color: #e17055;
  padding: 0;
  color: white;
  font-weight: bold;
  font-family: serif;
`;

function Card({ poster }) {
  let id = v4();
  console.log(id);
  useLayoutEffect(effect, [[]]); // 의존성 배열 내부의 값이 변할 때 마다 LayoutEffect 실행
  console.log("poster", poster[0]);

  return (
    <>
      {/* {poster.map((el) => (
        <div key={id} className="wheel__card">
          <img src={el} alt="pic"></img>
        </div>
      ))} */}

      <div className="wheel__card">
        <Number>1</Number>
        <img src={poster[0]} alt="pic"></img>
      </div>

      <div className="wheel__card">
        <Number>2</Number>
        <img src={poster[1]} alt="pic"></img>
      </div>
      <div className="wheel__card">
        <Number>3</Number>
        <img src={poster[2]} alt="pic"></img>
      </div>
      <div className="wheel__card">
        <Number>4</Number>
        <img src={poster[3]} alt="pic"></img>
      </div>
      <div className="wheel__card">
        <Number> 5</Number>
        <img src={poster[4]} alt="pic"></img>
      </div>
      <div className="wheel__card">
        <Number>6</Number>
        <img src={poster[5]} alt="pic"></img>
      </div>
      <div className="wheel__card">
        <Number>7</Number>
        <img src={poster[6]} alt="pic"></img>
      </div>
      <div className="wheel__card">
        <Number>8</Number>
        <img src={poster[7]} alt="pic"></img>
      </div>
      <div className="wheel__card">
        <Number>9</Number>
        <img src={poster[8]} alt="pic"></img>
      </div>

      <div className="wheel__card">
        <Number>10</Number>
        <img src={poster[9]} alt="pic"></img>
      </div>
    </>
  );
}

export default React.memo(Card);
