import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import image8 from "../assets/7.gif";

export default function Footer() {
  return (
    <Container sx={{ marginTop: { md: "5rem", xs: "3rem" } }}>
      <Grid container>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
              position: "relative",
            }}
          >
            <Box sx={{ width: { md: "180px", xs: "130px" } }}>
              <img width="100%" src={image8} alt="" />
            </Box>
            <Box
              sx={{
                boxShadow: "4px 4px 12px rgba(0,0,0, .27)",
                padding: ".6rem 1.2rem",
                position: "absolute",
                left: { md: "180px", xs: "120px" },
              }}
            >
              <Typography
                sx={{
                  textTransform: "uppercase",
                  fontFamily: "CCMaladroit W00 Bold",
                  fontSize: "19px",
                  color: "#3267FF",
                  fontWeight: "700",
                }}
              >
                don't forget follow
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Divider
          sx={{
            width: "100%",
            background: "#3267FF",
            height: "2px",
            my: { md: 4, xs: 2 },
          }}
        />
        <Grid item xs={12} mt={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { md: "row", xs: "column" },
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <Typography sx={{ color: "#3267FF", fontSize: "12px" }}>
              © 2024 All Rights Reserved.
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                color: "#3267FF",
              }}
            >
              <Typography sx={{ fontSize: "12px", cursor: "pointer" }}>
                Privacy Policy
              </Typography>
              <Typography sx={{ fontSize: "12px", cursor: "pointer" }}>
                Terms & Conditions
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
