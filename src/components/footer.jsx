import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import image8 from "../assets/7.gif";

export default function Footer() {
  return (
    <Container sx={{ padding: { md: "5rem 1rem", xs: "3rem 1rem" } }}>
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
            <Box sx={{ width: { md: "180px", xs: "100px" } }}>
              <img width="100%" src={image8} alt="" />
            </Box>
            <Box
              sx={{
                boxShadow: "4px 4px 12px rgba(0,0,0, .27)",
                padding: ".6rem 1.2rem",
                position: "absolute",
                left: { md: "180px", xs: "100px" },
              }}
            >
              <Typography
                sx={{
                  textTransform: "uppercase",
                  fontFamily: "CCMaladroit W00 Bold",
                  fontSize: { md: "19px", xs: "10px" },
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
        <Grid item xs={12} mt={{ md: 3, xs: 1 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <Typography
              sx={{
                color: "#3267FF",
                fontSize: { md: "12px", xs: "8px" },
                fontFamily: "CCMaladroit W00 Bold",
              }}
            >
              © 2024 All Rights Reserved.
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { md: "16px", xs: "10px" },
                color: "#3267FF",
              }}
            >
              <Typography
                sx={{
                  fontSize: { md: "12px", xs: "8px" },
                  cursor: "pointer",
                  fontFamily: "CCMaladroit W00 Bold",
                }}
              >
                Privacy Policy
              </Typography>
              <Typography
                sx={{
                  fontSize: { md: "12px", xs: "8px" },
                  cursor: "pointer",
                  fontFamily: "CCMaladroit W00 Bold",
                }}
              >
                Terms & Conditions
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
