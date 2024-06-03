import { Box, Container, Typography } from "@mui/material";
import image3 from "../assets/3.gif";

export default function BaseBagTrading() {
  return (
    <Container
      sx={{
        height: { md: "100vh", xs: "100%" },
        maxHeight: "700px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: "5rem 1rem" },
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
          sx={{ fontSize: { md: "100px", xs: "50px" } }}
        >
          basebag trading
        </Typography>
        <Box sx={{ width: { md: "700px", xs: "320px" } }}>
          <img width="100%" src={image3} alt="" />
        </Box>
      </Box>
    </Container>
  );
}
