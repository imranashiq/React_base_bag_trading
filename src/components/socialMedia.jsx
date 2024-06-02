import { Box, Container, Stack, Typography } from "@mui/material";
import insta from "../assets/Instagram.png";
import twitter from "../assets/Twitter.png";
import fb from "../assets/Facebook.png";
export default function SocialMedia() {
  return (
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
          gap: "10px",
        }}
      >
        <Typography
          className="grad_text"
          sx={{ fontSize: { md: "100px", xs: "45px" } }}
        >
          Social Media
        </Typography>
        <Stack direction={{ md: "row", xs: "column" }} spacing={3}>
          <Box
            sx={{
              width: { md: "100px", xs: "60px" },
              height: { md: "90px", xs: "50px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: { md: "16px", xs: "8px" },
              boxShadow: "4px 4px 8px rgba(0,0,0, .32)",
              transform: "rotate(-17deg)",
            }}
          >
            <img width="60%" src={insta} alt="" />
          </Box>
          <Box
            sx={{
              width: { md: "100px", xs: "60px" },
              height: { md: "90px", xs: "50px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: { md: "16px", xs: "8px" },
              boxShadow: "4px 4px 8px rgba(0,0,0, .32)",
              transform: "rotate(17deg)",
            }}
          >
            <img width="60%" src={twitter} alt="" />
          </Box>
          <Box
            sx={{
              width: { md: "100px", xs: "60px" },
              height: { md: "90px", xs: "50px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: { md: "16px", xs: "8px" },
              boxShadow: "4px 4px 8px rgba(0,0,0, .32)",
              transform: "rotate(-17deg)",
            }}
          >
            <img width="60%" src={fb} alt="" />
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}
