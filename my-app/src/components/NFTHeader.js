import React from "react";
import styled from "styled-components";
import Cards from "./NFTCards";
import Details from "./NFTDetails";



// const Section = styled.div`
//   height: 100vh;
//   background-color: #7149c6;
//   scroll-snap-align: center;
//   scroll-behavior: smooth;
// `;

// const Container = styled.div`
//   height: 100vh;
//   width: 1400px;
//   scroll-snap-align: center;
//   background-color: white;
//   display: flex;
//   /* flex-direction: column;
//   align-items: center; */
//   justify-content: space-between;
// `;

const Left = styled.div`
  flex: 2;
  display: flex;
  animation: animate 2s infinite ease alternate;
  max-width: 600px;

  @keyframes animate {
    to {
      transform: translateY(10px);
    }
  }
`;


const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: Left;
  position: relative;
  background-color: white;
  flex: 3;
  max-width: 800px;
  max-height: 600px;
  gap: 5px;
  margin: 2rem;
  padding-top: 10px;
`;

const Favs = styled.div`
  font-size: 22px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Description = styled.p`
  font-size: 22px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Button = styled.button`
  background-color: #1f98f4;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const NFTHeader = () => {
  return (
    <Container>
      <Left>
        <Cards />
      </Left>
      <Right>
        <Details />
      </Right>
    </Container>
  );
};

export default NFTHeader;