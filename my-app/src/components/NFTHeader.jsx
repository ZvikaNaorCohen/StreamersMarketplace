import React from "react";
import styled from "styled-components";
import Navbar from "../../Navbar";
import Cards from "./Cards";
import Stats from "./NFTstats";

const Section = styled.div`
  height: 100vh;
  background-color: white;
  scroll-snap-align: center;
  scroll-behavior: smooth;
`;

const Container = styled.div`
  height: 100vh;
  width: 1400px;
  scroll-snap-align: center;
  background-color: white;
  display: flex;
  /* flex-direction: column;
  align-items: center; */
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 3;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(10px);
    }
  }
`;

const Right = styled.div`
  position: relative;
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: Left;
  gap: 5px;
  margin: 2rem;
`;
const Title = styled.h1`
  font-size: 32px;
  gap: 20px;
  margin: 2rem;
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

const NFTpageHero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Cards />
        </Left>
        <Right>
          <Title>The name of the NFT</Title>
          <Stats />
          <Favs></Favs>
          <Description>Some words about the NFT</Description>
          <Button>Buy now</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default NFTpageHero;
