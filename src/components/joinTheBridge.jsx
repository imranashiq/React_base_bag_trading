import { Box, Button, Container, Stack, Typography } from "@mui/material";
import image7 from "../assets/10 1.png";

export default function JoinTheBridge() {
  return (
    <Container sx={{ padding: { md: "5rem 1rem", xs: "3rem 1rem" } }}>
      <Stack
        spacing={2}
        direction={{ md: "row", xs: "column" }}
        sx={{ alignItems: { xs: "center", md: "unset" } }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { md: "flex-start", xs: "center" },
            textAlign: { md: "unset", xs: "center" },
            gap: "20px",
          }}
        >
          <Typography
            sx={{
              textTransform: "uppercase",
              fontFamily: "CCMaladroit W00 Bold",
              fontSize: { md: "39px", xs: "50px" },
              color: "#3267FF",
              fontWeight: "700",
            }}
          >
            Join the Brigade:
          </Typography>
          <Box
            sx={{
              width: { md: "590px", xs: "300px" },
              display: { md: "none", xs: "block" },
            }}
          >
            <img width="100%" src={image7} alt="" />
          </Box>
          <Typography
            sx={{ color: "#797979", fontFamily: "CCMaladroit W00 Bold" }}
          >
            Dive into our meme-crazed community on social media. Keep your bag
            stuffed with the freshest meme loot and be part of the degen
            revolution on Basechain!
          </Typography>
          <Button
            variant="contained"
            sx={{
              background: "#3267FF",
              fontFamily: "CCMaladroit W00 Bold",
              color: "#fff",
              border: "3px solid #000",
              boxShadow: "0px 4px 4px rgba(0,0,0, .25)",
              padding: ".5rem 4rem",
              borderRadius: "5rem",
              marginTop: "2rem",
            }}
          >
            Press here
          </Button>
        </Box>
        <Box
          sx={{
            width: { md: "590px", xs: "280px" },
            display: { md: "block", xs: "none" },
          }}
        >
          <img width="100%" src={image7} alt="" />
        </Box>
      </Stack>
    </Container>
  );
}
