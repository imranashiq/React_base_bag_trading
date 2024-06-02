/* eslint-disable react/jsx-key */
import {
  Box,
  Card,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import image4 from "../assets/5.gif";
import image5 from "../assets/here image.png";
import AliceCarousel from "react-alice-carousel";
import { useRef, useState } from "react";
import Iconify from "./iconify/iconify";
import Vector5 from "../assets/Vector5.png";

const items = [
  <div className="item" data-value="1">
    <Card
      sx={{
        padding: "1.5rem",
        boxShadow: "0px 5px 20px #64646F20",
        borderRadius: "20px",
        position: { md: "absolute", xs: "unset" },
        top: { md: "-50px", xs: "0px" },
      }}
    >
      <Typography
        sx={{
          textTransform: "uppercase",
          fontFamily: "Carter One",
          fontSize: "25px",
          color: "#3267FF",
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        freshest meme loot
      </Typography>
      <Typography
        sx={{
          color: "#797979",
          marginTop: "10px",
          fontSize: "14px",
          fontFamily: "Carter One",
        }}
      >
        Keep your bag stuffed with the freshest meme loot and be part of the
        degen revolution on Basechainin! Our vault is overflowing with the
        wildest memes like Brett, Toshi, Byte, and Mochi. If you thrive on
        high-stakes meme trading and pure chaos, youve hit the jackpot!
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <img style={{ width: "158px", height: "168px" }} src={image5} alt="" />
      </Box>
    </Card>
  </div>,
  <div className="item" data-value="2">
    <Card
      sx={{
        padding: "1.5rem",
        borderRadius: "20px",
        boxShadow: "0px 5px 20px #64646F20",

        position: { md: "absolute", xs: "unset" },
        top: { md: "-50px", xs: "0px" },
      }}
    >
      <Typography
        sx={{
          textTransform: "uppercase",
          fontFamily: "Carter One",
          fontSize: "25px",
          color: "#3267FF",
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        freshest meme loot
      </Typography>
      <Typography
        sx={{
          color: "#797979",
          marginTop: "10px",
          fontSize: "14px",
          fontFamily: "Carter One",
        }}
      >
        Keep your bag stuffed with the freshest meme loot and be part of the
        degen revolution on Basechainin! Our vault is overflowing with the
        wildest memes like Brett, Toshi, Byte, and Mochi. If you thrive on
        high-stakes meme trading and pure chaos, youve hit the jackpot!
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <img style={{ width: "158px", height: "168px" }} src={image5} alt="" />
      </Box>
    </Card>
  </div>,
  <div className="item" data-value="3">
    <Card
      sx={{
        padding: "1.5rem",
        borderRadius: "20px",
        boxShadow: "0px 5px 20px #64646F20",

        position: { md: "absolute", xs: "unset" },
        top: { md: "-50px", xs: "0px" },
      }}
    >
      <Typography
        sx={{
          textTransform: "uppercase",
          fontFamily: "Carter One",
          fontSize: "25px",
          color: "#3267FF",
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        freshest meme loot
      </Typography>
      <Typography
        sx={{
          color: "#797979",
          marginTop: "10px",
          fontSize: "14px",
          fontFamily: "Carter One",
        }}
      >
        Keep your bag stuffed with the freshest meme loot and be part of the
        degen revolution on Basechainin! Our vault is overflowing with the
        wildest memes like Brett, Toshi, Byte, and Mochi. If you thrive on
        high-stakes meme trading and pure chaos, youve hit the jackpot!
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <img style={{ width: "158px", height: "168px" }} src={image5} alt="" />
      </Box>
    </Card>
  </div>,
];

export default function MemeMadness() {
  const [mainIndex, setMainIndex] = useState(0);
  console.log(mainIndex);
  const carouselRef = useRef(null);

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const syncMainAfterChange = (e) => {
    if (e.type === "action") {
      setMainIndex(e.item);
    } else {
      setMainIndex(mainIndex);
    }
  };

  return (
    <Container sx={{ marginTop: { md: "5rem", xs: "3rem" } }}>
      <Typography
        sx={{
          fontSize: "39px",
          fontFamily: "CCMaladroit W00 Bold",
          color: "#3267FF",
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        meme madness
      </Typography>
      <Grid mt={2} container spacing={3}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: { md: "flex-end", xs: "center" },
          }}
        >
          <Box sx={{ width: { md: "300px", xs: "150px" } }}>
            <img width="100%" src={image4} alt="" />
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ display: { md: "block", xs: "none" } }}>
          <Box>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4} sx={{ position: "relative" }}>
                <Card
                  sx={{
                    padding: "1.5rem",
                    borderRadius: "20px",
                    position: { md: "absolute", xs: "unset" },
                    top: { md: "-50px", xs: "0px" },
                  }}
                >
                  <Typography
                    sx={{
                      textTransform: "uppercase",
                      fontFamily: "Carter One",
                      fontSize: "28px",
                      color: "#3267FF",
                      fontWeight: "700",
                      textAlign: "center",
                    }}
                  >
                    freshest meme loot
                  </Typography>
                  <Typography
                    sx={{
                      color: "#797979",
                      marginTop: "10px",
                      fontSize: "14px",
                      fontFamily: "Carter One",
                    }}
                  >
                    Keep your bag stuffed with the freshest meme loot and be
                    part of the degen revolution on Basechainin! Our vault is
                    overflowing with the wildest memes like Brett, Toshi, Byte,
                    and Mochi. If you thrive on high-stakes meme trading and
                    pure chaos, youve hit the jackpot!
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <img
                      style={{ width: "158px", height: "168px" }}
                      src={image5}
                      alt=""
                    />
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={12} md={4}>
                <Card sx={{ padding: "1.5rem", borderRadius: "20px" }}>
                  <Typography
                    sx={{
                      textTransform: "uppercase",
                      fontFamily: "Carter One",
                      fontSize: "28px",
                      color: "#3267FF",
                      fontWeight: "700",
                      textAlign: "center",
                    }}
                  >
                    freshest meme loot
                  </Typography>
                  <Typography
                    sx={{
                      color: "#797979",
                      marginTop: "10px",
                      fontSize: "14px",
                      fontFamily: "Carter One",
                    }}
                  >
                    Keep your bag stuffed with the freshest meme loot and be
                    part of the degen revolution on Basechainin! Our vault is
                    overflowing with the wildest memes like Brett, Toshi, Byte,
                    and Mochi. If you thrive on high-stakes meme trading and
                    pure chaos, youve hit the jackpot!
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <img
                      style={{ width: "158px", height: "168px" }}
                      src={image5}
                      alt=""
                    />
                  </Box>
                </Card>
              </Grid>
              <Grid item xs={12} md={4} sx={{ position: "relative" }}>
                <Card
                  sx={{
                    padding: "1.5rem",
                    borderRadius: "20px",
                    position: { md: "absolute", xs: "unset" },
                    top: { md: "100px", xs: "0px" },
                  }}
                >
                  <Typography
                    sx={{
                      textTransform: "uppercase",
                      fontFamily: "Carter One",
                      fontSize: "28px",
                      color: "#3267FF",
                      fontWeight: "700",
                      textAlign: "center",
                    }}
                  >
                    freshest meme loot
                  </Typography>
                  <Typography
                    sx={{
                      color: "#797979",
                      marginTop: "10px",
                      fontSize: "14px",
                      fontFamily: "Carter One",
                    }}
                  >
                    Keep your bag stuffed with the freshest meme loot and be
                    part of the degen revolution on Basechainin! Our vault is
                    overflowing with the wildest memes like Brett, Toshi, Byte,
                    and Mochi. If you thrive on high-stakes meme trading and
                    pure chaos, youve hit the jackpot!
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <img
                      style={{ width: "158px", height: "168px" }}
                      src={image5}
                      alt=""
                    />
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: { xs: "block", md: "none", position: "relative" } }}
        >
          <Box sx={{ position: "absolute", left: "0px" }}>
            <img src={Vector5} alt="" />
          </Box>
          <Box
            className="thumbs"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                padding: "1rem 2rem",
              }}
            >
              <Box className="btn-prev">
                <IconButton onClick={slidePrev}>
                  <Iconify
                    sx={{
                      color: "#3267ff ",
                    }}
                    icon="fa:chevron-left"
                  />
                </IconButton>
              </Box>
              <Box className="btn-next">
                <IconButton onClick={slideNext}>
                  <Iconify
                    sx={{
                      color: "#3267ff ",
                    }}
                    icon="fa:chevron-right"
                  />
                </IconButton>
              </Box>
            </Box>
            <AliceCarousel
              activeIndex={mainIndex}
              responsive={responsive}
              items={items}
              ref={carouselRef}
              disableButtonsControls
              disableDotsControls
              mouseTracking={false}
              onSlideChange={syncMainAfterChange}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
