import React from "react";
import loading from "../loading.gif";
import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #34495e;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled.div`
  font: 1.5rem "Noto Sans KR";
  text-align: center;
`;

export default function Loading() {
  return (
    <Background>
      <img src={loading} alt="로딩중" width="5%"></img>
      <LoadingText>로딩 중 입니다.</LoadingText>
    </Background>
  );
}
