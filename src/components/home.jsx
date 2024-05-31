import { Box, Container, Stack } from "@mui/material";
import image1 from "../assets/logo1.png";
import image2 from "../assets/logo.png";
import animationData from "../assets/scroll down.json";
import Lottie from "lottie-react";

const Home = () => {
  return (
    <Container>
      <Stack mt={5} direction="column" spacing={4} alignItems="center">
        <Box
          sx={{
            width: { md: "700px", sm: "450px", xs: "270px" },
          }}
        >
          <img width="100%" src={image2} alt="" />
        </Box>
        <Box sx={{ width: { md: "263px", xs: "290px" } }}>
          <img width="100%" height="100%" src={image1} alt="" />
        </Box>
        <Box sx={{ width: "39px" }}>
          <Lottie
            style={{ cursor: "pointer", marginTop: "2rem" }}
            animationData={animationData}
          />
        </Box>
      </Stack>
    </Container>
  );
};

export default Home;
