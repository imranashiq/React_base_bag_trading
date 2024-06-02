import { Box, Card, Container, Grid, Typography } from "@mui/material";
import image4 from "../assets/5.gif";
import image5 from "../assets/here image.png";
export default function MemeMadness() {
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
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box sx={{ width: "300px" }}>
            <img width="100%" src={image4} alt="" />
          </Box>
        </Grid>
        <Grid item xs={12}>
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
      </Grid>
    </Container>
  );
}
