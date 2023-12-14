import { Box } from "@mui/material"
import { Helmet } from "react-helmet-async"
import Cover from "../../Shared/Cover/Cover"
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import MenuCategory from "../MenuCategory/MenuCategory";
const Menu = () => {
    const [menus] = useMenu()
    const dessert = menus.filter((item) => item.category === "dessert")
    const salad = menus.filter((item) => item.category === "salad")
    const pizza = menus.filter((item) => item.category === "pizza")
    const soup = menus.filter((item) => item.category === "soup")
    const offered = menus.filter((item) => item.category === "offered")

    return (
      <Box>
        <Helmet>
          <title>BISTRO BOSS | MENU</title>
        </Helmet>
        <Cover img={menuImg} title="our menu"></Cover>
        <SectionTitle
          subHeading="Don't miss"
          heading="TODAY'S OFFER"
        ></SectionTitle>
        <MenuCategory items={offered}></MenuCategory>
        <MenuCategory
          items={dessert}
          title="dessert"
          coverImg={dessertImg}
        ></MenuCategory>
        <MenuCategory
          items={pizza}
          title="pizza"
          coverImg={pizzaImg}
        ></MenuCategory>
        <MenuCategory
          items={salad}
          title="salad"
          coverImg={saladImg}
        ></MenuCategory>
        <MenuCategory
          items={soup}
          title="soup"
          coverImg={soupImg}
        ></MenuCategory>
      </Box>
    )
}

export default Menu
