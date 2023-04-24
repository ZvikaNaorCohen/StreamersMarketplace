// import React from "react";
// import styled from "styled-components";
// import Cards from "./NFTCards";
// import Details from "./NFTDetails";
// import Pricing from "./NFTPrice";
// import NFTImg from "../images/NFTpageImages/doge.jpg";

// const Left = styled.div`
//   flex: 2;
//   display: flex;
//   animation: animate 2s infinite ease alternate;
//   max-width: 600px;

//   @keyframes animate {
//     to {
//       transform: translateY(5px);
//     }
//   }
// `;

// const Right = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: Left;
//   position: relative;
//   background-color: white;
//   flex: 3;
//   max-width: 800px;
//   max-height: 600px;
//   gap: 5px;
//   margin: 2rem;
//   padding-top: 10px;
// `;

// const Container = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

// const NFTHeader = () => {
//   return (
//     <Container>
//       <Left>
//         <Cards title={"Doge"} image={NFTImg} />
//       </Left>
//       <Right>
//         <Details
//           NFTName={"Doge"}
//           creatorName={"someone"}
//           NFTDescription={"This is a description about a very special doge."}
//         />
//         <Pricing Price={"0.35"}/>
//       </Right>
//     </Container>
//   );
// };

// export default NFTHeader;

// works up

// import React from "react";
// import styled from "styled-components";
// import Cards from "./NFTCards";
// import Details from "./NFTDetails";
// import Pricing from "./NFTPrice";

// const Left = styled.div`
//   flex: 2;
//   display: flex;
//   animation: animate 2s infinite ease alternate;
//   max-width: 600px;

//   @keyframes animate {
//     to {
//       transform: translateY(5px);
//     }
//   }
// `;

// const Right = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: left;
//   position: relative;
//   background-color: white;
//   flex: 3;
//   max-width: 800px;
//   max-height: 600px;
//   gap: 5px;
//   margin: 2rem;
//   padding-top: 10px;
// `;

// const Container = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

// const NFTHeader = ({ title, image, creatorName, NFTDescription, price }) => {
//   return (
//     <Container>
//       <Left>
//         <Cards title={title} image={image} />
//       </Left>
//       <Right>
//         <Details
//           NFTName={title}
//           creatorName={creatorName}
//           NFTDescription={NFTDescription}
//         />
//         <Pricing Price={price} />
//       </Right>
//     </Container>
//   );
// };

// export default NFTHeader;

import React from "react";
import styled from "styled-components";
import Cards from "./NFTCards";
import Details from "./NFTDetails";
import Pricing from "./NFTPrice";
import NFTImg from "../images/NFTpageImages/doge.jpg";

const Left = styled.div`
  flex: 2;
  display: flex;
  animation: animate 2s infinite ease alternate;
  max-width: 600px;

  @keyframes animate {
    to {
      transform: translateY(5px);
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

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const NFTHeader = () => {
  return (
    <Container>
      <Left>
        <Cards title={"Title"} image={NFTImg} />
      </Left>
      <Right>
        <Details
          NFTName={"Title"}
          creatorName={"creatorName"}
          NFTDescription={"This is a description about a very special doge."}
        />
        <Pricing Price={"0.35"} />
      </Right>
    </Container>
  );
};

export default NFTHeader;