import "./App.css";
import Home from "./components/home";

import { Box, Typography } from "@mui/material";
import Carousel from "./components/carousel";

import vector from "./assets/Vector.png";
import vector2 from "./assets/Vector2.png";
import MemeBag from "./components/memeBag";
import BaseBagTrading from "./components/basebagTrading";
import MemeMadness from "./components/memeMadness";
import Tokenomics from "./components/tokenomics";
import JoinTheBridge from "./components/joinTheBridge";
import SocialMedia from "./components/socialMedia";
import Footer from "./components/footer";
import { useRef } from "react";
import Crossings from "./components/crossings";

function App() {
  const targetRef = useRef(null);

  const handleScroll = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Home onClick={handleScroll} />

      <Crossings />
      <MemeBag targetRef={targetRef} />
      <BaseBagTrading />
      <Box
        sx={{
          backgroundImage: "linear-gradient(#3267FF, #0009)",
          backgroundColor: "#3267FF",
          padding: "5rem .5rem",
          position: "relative",
          overflow: "hidden",
          minHeight: { lg: "100%", md: "100vh", xs: "100%" },
        }}
      >
        <img className="element5" src={vector} alt="" />
        <img className="element51" src={vector2} alt="" />

        <Carousel />
      </Box>
      <MemeMadness />
      <Tokenomics />
      <JoinTheBridge />
      <SocialMedia />
      <Footer />
    </>
  );
}

export default App;
