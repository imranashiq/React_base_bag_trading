import { Box, Button, Container, Grid, Typography } from "@mui/material";
import element3 from "../assets/bubble1.png";
import element4 from "../assets/bubble2.png";
import image2 from "../assets/1.gif";

export default function MemeBag({ targetRef }) {
  return (
    <Box
      ref={targetRef}
      sx={{
        position: "relative",
        overflow: "hidden",
        margin: { md: "5rem 0rem 0rem", xs: "3rem 0rem" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: { md: "100vh", xs: "100%" },
        maxHeight: "700px",
      }}
    >
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: { xs: "center" } }}
          >
            <Box sx={{ width: { md: "480px", xs: "320px" } }}>
              <img width="100%" src={image2} alt="" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: { md: "start", sm: "center", xs: "center" },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "CCMaladroit W00 Bold",
                  fontSize: { md: "39px", xs: "27px" },
                  color: "#3267FF",
                  fontWeight: "700",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                The Degenerate Meme Bag on Basechain
              </Typography>
              <Typography
                sx={{
                  color: "#797979",
                  fontFamily: "Carter One",
                  fontSize: { xs: "18px", md: "24px" },
                  textAlign: { md: "left", xs: "center" },
                }}
              >
                Keep your bag stuffed with the freshest meme loot and be part of
                the degen revolution on Basechainin! Our vault is overflowing
                with the wildest memes like Brett, Toshi, Byte, and Mochi. If
                you thrive on high-stakes meme trading and pure chaos, youve hit
                the jackpot!
              </Typography>
              <Button
                variant="contained"
                sx={{
                  background: "#3267FF",
                  color: "#fff",
                  border: "3px solid #000",
                  boxShadow: "0px 4px 4px rgba(0,0,0, .25)",
                  padding: ".5rem 4rem",
                  borderRadius: "5rem",
                  marginTop: "2rem",
                  fontFamily: "CCMaladroit W00 Bold",
                }}
              >
                Press Here
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <img className="element3" src={element3} alt="" />
      <img className="element4" src={element4} alt="" />
    </Box>
  );
}
