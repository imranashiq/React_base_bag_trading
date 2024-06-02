import { Box, Container, Typography } from "@mui/material";
import image3 from "../assets/3.gif";

export default function BaseBagTrading() {
  return (
    <Container
      sx={{
        marginTop: { md: "5rem", xs: "3rem" },
        marginBottom: { md: "5rem", xs: "3rem" },
        minHeight: { md: "100vh", xs: "100%" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
          sx={{ fontSize: { md: "100px", xs: "45px" } }}
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
