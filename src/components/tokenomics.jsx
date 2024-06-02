import { Box, Container, Stack, Typography } from "@mui/material";
import image6 from "../assets/TRADING IMAGE.png";

export default function Tokenomics() {
  return (
    <Container
      sx={{
        marginTop: { md: "15rem", xs: "5rem" },
        marginBottom: { md: "10rem", xs: "5rem" },
        minHeight: { md: "100vh", xs: "100%" },
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${image6})`,
          height: { md: "500px", xs: "300px" },
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          borderRadius: { md: "100px", xs: "60px" },
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Stack direction="column" alignItems="center" spacing={2}>
          <Typography
            sx={{
              textTransform: "uppercase",
              fontFamily: "CCMaladroit W00 Bold",
              fontSize: { md: "70px", xs: "26px" },
              color: "#fff",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            tokenomics
          </Typography>
          <Box
            sx={{
              background: "#fff",
              borderRadius: "40px",
              padding: { md: "2rem 4rem", xs: "1rem 1rem" },
              color: "3267FF",
            }}
          >
            <Typography
              sx={{
                textTransform: "uppercase",
                fontFamily: "CCMaladroit W00 Bold",
                fontSize: { md: "35px", xs: "13px" },
                color: "#3267FF",
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              Total Supply: 555,555,555 $Basebage
            </Typography>
          </Box>
          <Typography
            sx={{
              alignSelf: "flex-end",
              color: "#fff",
              marginTop: "1.5rem",
              textAlign: { xs: "center", md: "unset" },
            }}
          >
            Tax: 6% (used for meme buybacks and holder distributions)
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
}
