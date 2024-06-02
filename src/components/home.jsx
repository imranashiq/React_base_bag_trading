import { Box, Container, Stack } from "@mui/material";
import image1 from "../assets/6.gif";
import image2 from "../assets/logo.png";
import animationData from "../assets/scroll down.json";
import Lottie from "lottie-react";
import topRight from "../assets/topRight.png";
import leftBottom from "../assets/leftBottom.png";

const Home = ({ onClick }) => {
  return (
    <Box
      sx={{
        position: "relative",
        height: { md: "100vh", xs: "100%" },
      }}
    >
      <Container>
        <Stack
          sx={{
            padding: "5rem 1rem",
            height: { lg: "100vh", md: "100%" },
          }}
          direction="column"
          justifyContent={{ lg: "space-between" }}
          alignItems="center"
        >
          <Box>
            <img width="100%" src={image2} alt="" />
          </Box>
          <Box
            sx={{
              width: { md: "380px", xs: "290px" },
            }}
          >
            <img width="100%" src={image1} alt="" />
          </Box>
          <Box
            sx={{ width: { md: "39px", lg: "59px", xs: "39px" } }}
            onClick={onClick}
          >
            <Lottie
              style={{ cursor: "pointer", marginTop: "2rem" }}
              animationData={animationData}
            />
          </Box>
        </Stack>
      </Container>

      <img className="element1" src={topRight} alt="" />
      <img className="element2" src={leftBottom} alt="" />
    </Box>
  );
};

export default Home;
