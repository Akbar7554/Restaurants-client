import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import category01 from "../../../assets/home/slide1.jpg"
import category02 from "../../../assets/home/slide2.jpg"
import category03 from "../../../assets/home/slide3.jpg"
import category04 from "../../../assets/home/slide4.jpg"
import category05 from "../../../assets/home/slide5.jpg"
import { Box, Typography } from "@mui/material"
import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import { grey } from "@mui/material/colors"
const Category = () => {
  return (
    <Box sx={{ width: "80%", mx: "auto", my: 10 }}>
      <SectionTitle
        heading={"Order Online"}
        subHeading={"From 11:00 am to 10:00 pm"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={category01} />
          <Typography
            sx={{
              color: "white",
              fontSize: 25,
              textAlign: "center",
              marginTop: -10,
                          textTransform: "uppercase",
                          bgcolor: "black",
              zIndex: 30
            }}
          >
            Salads
          </Typography>
        </SwiperSlide>
        <SwiperSlide>
          <img src={category02} />
          <Typography
            sx={{
              color: "white",
              fontSize: 25,
              textAlign: "center",
              marginTop: -10,
              textTransform: "uppercase",
            }}
          >
            Soups
          </Typography>
        </SwiperSlide>
        <SwiperSlide>
          <img src={category03} />
          <Typography
            sx={{
              color: "white",
              fontSize: 25,
              textAlign: "center",
              marginTop: -10,
              textTransform: "uppercase",
            }}
          >
            pizzas
          </Typography>
        </SwiperSlide>
        <SwiperSlide>
          <img src={category04} />
          <Typography
            sx={{
              color: "white",
              fontSize: 25,
              textAlign: "center",
              marginTop: -10,
              textTransform: "uppercase",
            }}
          >
            desserts
          </Typography>
        </SwiperSlide>
        <SwiperSlide>
          <img src={category05} />
          <Typography
            sx={{
              color: "white",
              fontSize: 25,
              textAlign: "center",
              marginTop: -10,
              textTransform: "uppercase",
            }}
          >
            Salads
          </Typography>
        </SwiperSlide>
        <SwiperSlide>
          <img src={category05} />
          <Typography
            sx={{
              color: "white",
              fontSize: 25,
              textAlign: "center",
              marginTop: -10,
              textTransform: "uppercase",
            }}
          >
            Salads
          </Typography>
        </SwiperSlide>
        <SwiperSlide>
          <img src={category05} />
          <Typography
            sx={{
              color: "white",
              fontSize: 25,
              textAlign: "center",
              marginTop: -10,
              textTransform: "uppercase",
            }}
          >
            Salads
          </Typography>
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}

export default Category
