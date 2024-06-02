/* eslint-disable react/jsx-key */
import { useState } from "react";
import logo1 from "../assets/_5.png";
import logo2 from "../assets/_1.png";
import logo3 from "../assets/_15 1.png";
import logo4 from "../assets/_6.png";
import logo5 from "../assets/_3.png";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Box, Typography } from "@mui/material";

const items = [
  <Box
    className="item"
    data-value="1"
    sx={{
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    }}
  >
    <Box sx={{ width: "160px", height: "160px", borderRadius: "5rem" }}>
      <img width="100%" src={logo1} alt="" />
    </Box>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        textAlign: "center",
        marginTop: "3rem",
      }}
    >
      <Typography sx={{ color: "#fff", fontFamily: "CCMaladroit W00 Bold" }}>
        ArkiTech
      </Typography>
      <Typography sx={{ color: "#fff", fontFamily: "CCMaladroit W00 Bold" }}>
        TG Bots Developers, including the Guardian, BuyBot, ChatMate and Raidar.
      </Typography>
    </Box>
  </Box>,
  <Box
    className="item"
    data-value="2"
    sx={{
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    }}
  >
    <Box sx={{ width: "160px", height: "160px", borderRadius: "5rem" }}>
      <img width="100%" src={logo2} alt="" />
    </Box>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        textAlign: "center",
        marginTop: "3rem",
      }}
    >
      <Typography sx={{ color: "#fff", fontFamily: "CCMaladroit W00 Bold" }}>
        ArkiTech
      </Typography>
      <Typography sx={{ color: "#fff", fontFamily: "CCMaladroit W00 Bold" }}>
        TG Bots Developers, including the Guardian, BuyBot, ChatMate and Raidar.
      </Typography>
    </Box>
  </Box>,
  <Box
    className="item"
    data-value="3"
    sx={{
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    }}
  >
    <Box sx={{ width: "160px", height: "160px", borderRadius: "5rem" }}>
      <img width="100%" src={logo3} alt="" />
    </Box>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        textAlign: "center",
        marginTop: "3rem",
      }}
    >
      <Typography sx={{ color: "#fff", fontFamily: "CCMaladroit W00 Bold" }}>
        ArkiTech
      </Typography>
      <Typography sx={{ color: "#fff", fontFamily: "CCMaladroit W00 Bold" }}>
        TG Bots Developers, including the Guardian, BuyBot, ChatMate and Raidar.
      </Typography>
    </Box>
  </Box>,
  <Box
    className="item"
    data-value="4"
    sx={{
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    }}
  >
    <Box sx={{ width: "160px", height: "160px", borderRadius: "5rem" }}>
      <img width="100%" src={logo4} alt="" />
    </Box>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        textAlign: "center",
        marginTop: "3rem",
      }}
    >
      <Typography sx={{ color: "#fff", fontFamily: "CCMaladroit W00 Bold" }}>
        ArkiTech
      </Typography>
      <Typography sx={{ color: "#fff", fontFamily: "CCMaladroit W00 Bold" }}>
        TG Bots Developers, including the Guardian, BuyBot, ChatMate and Raidar.
      </Typography>
    </Box>
  </Box>,
  <Box
    className="item"
    data-value="5"
    sx={{
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
    }}
  >
    <Box sx={{ width: "160px", height: "160px", borderRadius: "5rem" }}>
      <img width="100%" src={logo5} alt="" />
    </Box>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        textAlign: "center",
        marginTop: "3rem",
      }}
    >
      <Typography sx={{ color: "#fff", fontFamily: "CCMaladroit W00 Bold" }}>
        ArkiTech
      </Typography>
      <Typography sx={{ color: "#fff", fontFamily: "CCMaladroit W00 Bold" }}>
        TG Bots Developers, including the Guardian, BuyBot, ChatMate and Raidar.
      </Typography>
    </Box>
  </Box>,
];

const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
  return items.map((item, i) => (
    <div
      key={i}
      className="thumb"
      onClick={() => (setThumbIndex(i), setThumbAnimation(true))}
    >
      {item}
    </div>
  ));
};

export default function Carousel() {
  const [thumbIndex, setThumbIndex] = useState(0);
  const [setThumbAnimation] = useState(false);
  const [thumbs] = useState(
    thumbItems(items, [setThumbIndex, setThumbAnimation])
  );

  const syncThumbs = (e) => {
    setThumbIndex(e.item);
    setThumbAnimation(false);
  };
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  return [
    <Box
      className="thumbs"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <AliceCarousel
        activeIndex={thumbIndex}
        responsive={responsive}
        items={thumbs}
        disableButtonsControls
        mouseTracking={true}
        onSlideChanged={syncThumbs}
      />
    </Box>,
  ];
}
