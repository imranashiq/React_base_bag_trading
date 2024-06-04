import { Box, Typography } from "@mui/material";

const Crossings = () => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        height: { lg: "40vh", md: "60vh", xs: "20vh" },
        maxHeight: "500px",
        overflow: "hidden",
        display: "flex",
        flexDirection: " column",
        justifyContent: "center",
        alignItems: "center",
        margin: "0px",
      }}
    >
      <Box
        sx={{
          width: "120%",
          height: { md: "70px", xs: "50px" },
          background: "#3267FF",
          position: "absolute",
          transform: "rotate(8deg)",
          boxShadow: "0px 6px 10px rgba(0,0,0, .06)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderTop: "2px solid #000",
          borderBottom: "2px solid #000",
        }}
      >
        <Typography
          className="animated-text"
          sx={{
            fontFamily: "CCMaladroit W00 Bold",
            color: "#fff",
            fontSize: { md: "2rem", xs: "1rem" },
          }}
        >
          BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.
        </Typography>
      </Box>
      <Box
        sx={{
          width: "120%",
          height: { md: "70px", xs: "50px" },
          background: "#fff",
          position: "absolute",
          transform: "rotate(-8deg)",
          boxShadow: "0px 6px 10px rgba(0,0,0, .06)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderTop: "2px solid #000",
          borderBottom: "2px solid #000",
        }}
      >
        <Typography
          className="animated-text2"
          sx={{
            fontFamily: "CCMaladroit W00 Bold",
            color: "#3267FF",
            fontSize: { md: "2rem", xs: "1rem" },
          }}
        >
          BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.
          BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.BaseBag.
        </Typography>
      </Box>
    </Box>
  );
};

export default Crossings;
