import "./App.css";
import Home from "./components/home";
import crossings from "./assets/crossings.png";
import image2 from "./assets/3 1.png";
import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import image3 from "./assets/12 1.png";
import Carousel from "./components/carousel";
import image4 from "./assets/3 4.png";
import image5 from "./assets/here image.png";

function App() {
  return (
    <>
      <Home />
      <Box>
        <img width="100%" src={crossings} alt="" />
      </Box>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box sx={{ width: { md: "439px", xs: "320px" } }}>
              <img width="100%" src={image2} alt="" />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: "self-start",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "CCMaladroit W00 Bold",
                  fontSize: "39px",
                  color: "#3267FF",
                  fontWeight: "700",
                }}
              >
                The Degenerate Meme Bag on Basechain
              </Typography>
              <Typography sx={{ color: "#797979", fontFamily: "Carter One" }}>
                Keep your bag stuffed with the freshest meme loot and be part of
                the degen revolution on Basechainin! Our vault is overflowing
                with the wildest memes like Brett, Toshi, Byte, and Mochi. If
                you thrive on high-stakes meme trading and pure chaos, you've
                hit the jackpot!
              </Typography>
              <Button
                variant="contained"
                sx={{
                  background: "#3267FF",
                  color: "#fff",
                  border: "2px solid #fff",
                  boxShadow: "0px 4px 4px rgba(0,0,0, .25)",
                  padding: ".5rem 4rem",
                  borderRadius: "5rem",
                }}
              >
                Press Here
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container
        sx={{
          marginTop: { md: "5rem", xs: "3rem" },
          marginBottom: { md: "5rem", xs: "3rem" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            className="grad_text"
            sx={{ fontSize: { md: "70px", xs: "45px" } }}
          >
            basebag trading
          </Typography>
          <Box sx={{ width: { md: "700px", xs: "320px" } }}>
            <img width="100%" src={image3} alt="" />
          </Box>
        </Box>
      </Container>
      <Carousel />
      <Container sx={{ marginTop: "5rem" }}>
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
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <img src={image4} alt="" />
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <Card sx={{ padding: "1.5rem", borderRadius: "20px" }}>
                    <Typography
                      sx={{
                        textTransform: "uppercase",
                        // fontFamily: "Carter one",
                        fontSize: "28px",
                        color: "#3267FF",
                        fontWeight: "700",
                        textAlign: "center",
                      }}
                    >
                      freshest meme loot
                    </Typography>
                    <Typography sx={{ color: "#797979", marginTop: "10px" }}>
                      Keep your bag stuffed with the freshest meme loot and be
                      part of the degen revolution on Basechainin! Our vault is
                      overflowing with the wildest memes like Brett, Toshi,
                      Byte, and Mochi. If you thrive on high-stakes meme trading
                      and pure chaos, youve hit the jackpot!
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginTop: "16px",
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
                <Grid item xs={4}>
                  <Card sx={{ padding: "1.5rem", borderRadius: "20px" }}>
                    <Typography
                      sx={{
                        textTransform: "uppercase",
                        // fontFamily: "Carter one",
                        fontSize: "28px",
                        color: "#3267FF",
                        fontWeight: "700",
                        textAlign: "center",
                      }}
                    >
                      freshest meme loot
                    </Typography>
                    <Typography sx={{ color: "#797979", marginTop: "10px" }}>
                      Keep your bag stuffed with the freshest meme loot and be
                      part of the degen revolution on Basechainin! Our vault is
                      overflowing with the wildest memes like Brett, Toshi,
                      Byte, and Mochi. If you thrive on high-stakes meme trading
                      and pure chaos, youve hit the jackpot!
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginTop: "16px",
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
                <Grid item xs={4}>
                  <Card sx={{ padding: "1.5rem", borderRadius: "20px" }}>
                    <Typography
                      sx={{
                        textTransform: "uppercase",
                        // fontFamily: "Carter one",
                        fontSize: "28px",
                        color: "#3267FF",
                        fontWeight: "700",
                        textAlign: "center",
                      }}
                    >
                      freshest meme loot
                    </Typography>
                    <Typography sx={{ color: "#797979", marginTop: "10px" }}>
                      Keep your bag stuffed with the freshest meme loot and be
                      part of the degen revolution on Basechainin! Our vault is
                      overflowing with the wildest memes like Brett, Toshi,
                      Byte, and Mochi. If you thrive on high-stakes meme trading
                      and pure chaos, youve hit the jackpot!
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        marginTop: "16px",
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
        </Grid>
      </Container>
    </>
  );
}

export default App;
