import React from "react";
import "../../../App.css";
import styled from "styled-components";
import Footer from "../../Footer";
import NFTpageHero from "./NFTHeader";
import NFTpageDetails from "./NFTDetails";

const Container = styled.div`
  height: 100vh;
  background-color: #7149c6;
  /* scroll-snap-type: y mandatory; */
  scroll-behavior: smooth;
  overflow-y: auto;
`;

function NFTpage() {
  return (
    <Container>
      <NFTpageHero/>
      <NFTpageDetails/>
      <Footer/>
    </Container>
  );
}

export default NFTpage;
