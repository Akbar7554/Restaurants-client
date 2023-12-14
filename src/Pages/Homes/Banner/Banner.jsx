import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"


import BannerImg1 from "../../../assets/home/01.jpg"
import BannerImg2 from "../../../assets/home/02.jpg"
import BannerImg3 from "../../../assets/home/03.png"
import BannerImg4 from "../../../assets/home/04.jpg"
import BannerImg5 from "../../../assets/home/05.png"
import BannerImg6 from "../../../assets/home/06.png"
import { Box } from "@mui/material"
const Banner = () => {
    return (
      <Carousel>
            <Box>
          <img src={BannerImg1} />
        </Box>
        <Box>
          <img src={BannerImg2} />
        </Box>
        <Box>
          <img src={BannerImg3} />
        </Box>
        <Box>
          <img src={BannerImg4} />
        </Box>
        <Box>
          <img src={BannerImg5} />
        </Box>
        <Box>
          <img src={BannerImg6} />
        </Box>
      </Carousel>
    )
}

export default Banner
