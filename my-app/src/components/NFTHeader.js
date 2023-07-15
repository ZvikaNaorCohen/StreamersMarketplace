import React from "react";
import styled from "styled-components";
import Cards from "./NFTCards";
import Details from "./NFTDetails";
import Pricing from "./NFTPrice";

const Left = styled.div`
  flex: 2;
  display: flex;
  max-width: 600px;
  /* animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(5px);
    }
  } */
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

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const NFTHeader = ({ title, image, creator, creatorID, NFTDescription, price, id, item }) => {
  return (
    <Container>
      <Left>
        <Cards title={title} image={image} />
      </Left>
      <Right>
        <Details
          NFTName={title}
          creator={creator}
          creatorID={creatorID}
          NFTDescription={NFTDescription}
        />
        <Pricing creator={creator} price={price} id={id} item={item} />
      </Right>
    </Container>
  );
};

export default NFTHeader;
