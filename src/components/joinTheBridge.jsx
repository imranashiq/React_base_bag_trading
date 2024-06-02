import { Box, Button, Container, Stack, Typography } from "@mui/material";
import image7 from "../assets/10 1.png";

export default function JoinTheBridge() {
  return (
    <Container>
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
            gap: "10px",
          }}
        >
          <Typography
            sx={{
              textTransform: "uppercase",
              fontFamily: "CCMaladroit W00 Bold",
              fontSize: "39px",
              color: "#3267FF",
              fontWeight: "700",
            }}
          >
            Join the Brigade:
          </Typography>
          <Typography sx={{ color: "#797979" }}>
            Dive into our meme-crazed community on social media. Keep your bag
            stuffed with the freshest meme loot and be part of the degen
            revolution on Basechain!
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
              marginTop: "2rem",
            }}
          >
            Press here
          </Button>
        </Box>
        <Box sx={{ width: { md: "590px", xs: "280px" } }}>
          <img width="100%" src={image7} alt="" />
        </Box>
      </Stack>
    </Container>
  );
}
