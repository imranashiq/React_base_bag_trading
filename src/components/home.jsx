import { Box, Container, Stack } from "@mui/material";
import image1 from "../assets/6.gif";
import image2 from "../assets/logo.png";
import animationData from "../assets/scroll down.json";
import Lottie from "lottie-react";
import topRight from "../assets/topRight.png";
import leftBottom from "../assets/leftBottom.png";

const Home = ({ onClick }) => {
  return (
    <Box className="wrapper">
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img className="heading" src={image2} alt="" />
            <img className="gif1" src={image1} alt="" />
          </Box>
          <Lottie
            onClick={onClick}
            className="lottie"
            animationData={animationData}
          />
        </Box>
      </Container>
      <img className="element1" src={topRight} alt="" />
      <img className="element2" src={leftBottom} alt="" />
    </Box>
  );
};

export default Home;
