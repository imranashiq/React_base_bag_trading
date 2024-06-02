import { Box, Container, Stack } from "@mui/material";
import image1 from "../assets/6.gif";
import image2 from "../assets/logo.png";
import animationData from "../assets/scroll down.json";
import Lottie from "lottie-react";
import topRight from "../assets/topRight.png";
import leftBottom from "../assets/leftBottom.png";

const Home = ({ onClick }) => {
  return (
    <Box sx={{ position: "relative", minHeight: { md: "100vh", xs: "100%" } }}>
      <Container>
        <Stack pt={{ md: 5, xs: 8 }} direction="column" alignItems="center">
          <Box
            sx={{
              width: { md: "900px", sm: "450px", xs: "270px" },
            }}
          >
            <img width="100%" src={image2} alt="" />
          </Box>
          <Box sx={{ width: { md: "380px", xs: "290px" } }}>
            <img width="100%" height="100%" src={image1} alt="" />
          </Box>
          <Box sx={{ width: "39px" }} onClick={onClick}>
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
