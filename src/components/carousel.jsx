import { Box, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { carousel } from "../data";

const Carousel = () => {
  return (
    <Box
      sx={{
        background: "#3267FF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "460px",
      }}
    >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={5}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 50,
          modifier: 5,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {carousel.map((item) => (
          <SwiperSlide key={item?.id}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "2rem",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  width: "160px",
                  height: "160px",
                  borderRadius: "4rem",
                  overflow: "hidden",
                }}
              >
                <img width="100%" src={item?.logo} alt="" />
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Typography>{item?.title}</Typography>
                <Typography>{item?.desc}</Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Carousel;
