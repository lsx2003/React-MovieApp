// import { useState } from "react";
// import styled from "styled-components";

// export const ModalContainer = styled.div`
//   display: flex;
//   width: 100wh;
//   height: 100vh;
//   justify-content: center;
//   align-items: center;
//   position: relative;
// `;

// export const ModalBackdrop = styled.div`
//   display: flex;
//   position: absolute;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   width: 100%;
//   height: 100%;
//   background: gray;
// `;

// export const ModalBtn = styled.button`
//   position: absolute;
//   background-color: var(--coz-purple-600);
//   text-decoration: none;
//   border: none;
//   padding: 20px;
//   color: white;
//   border-radius: 30px;
//   cursor: grab;
// `;

// export const ModalView = styled.div.attrs((props) => ({
//   // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
//   // className: "sc-hKwCoD kNUhNr",
//   role: "dialog",
// }))`
//   position: absolute;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   color: black;
//   width: 150px;
//   height: 50px;
//   padding: 20px;
//   background: white;
//   border: 1px solid;
//   border-radius: 20px;
//   font-size: 20px;
// `;
// export const Bsx = styled.div`
//   display: block;
//   font-size: 15px;
// `;

// export const Modal = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   const openModalHandler = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <ModalContainer>
//         <ModalBtn onClick={openModalHandler}>
//           {isOpen ? "Opend" : "Open Modal"}
//         </ModalBtn>
//         {isOpen ? (
//           <ModalBackdrop onClick={openModalHandler}>
//             <ModalView onClick={(event) => event.stopPropagation()}>
//               <Bsx onClick={openModalHandler}>X</Bsx>
//               Hello CodeStates!!
//             </ModalView>
//           </ModalBackdrop>
//         ) : null}
//       </ModalContainer>
//     </>
//   );
// };
