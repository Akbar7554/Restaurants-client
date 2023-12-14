import { Box } from "@mui/material";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";


const Home = () => {
    return (
      <Box>
        <Helmet>
          <title>BISTRO BOSS | HOME</title>
        </Helmet>
        <Banner></Banner>
        <Category></Category>
        <PopularMenu></PopularMenu>
        <Featured></Featured>
        <Testimonials></Testimonials>
      </Box>
    )
};

export default Home;