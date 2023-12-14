import { Box } from "@mui/material";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menus] = useMenu()
    const popular = menus.filter(item => item.category === "popular")
    // const [menus, setMenus] = useState([])
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular')
    //         setMenus(popularItems)
    //     })
    // },[])
    return (
      <Box>
        <SectionTitle
          heading={"FROM OUR MENU"}
          subHeading={"Check it out"}
        ></SectionTitle>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: 3,
            width: "80%",
            mx: "auto",
          }}
        >
          {popular.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </Box>
      </Box>
    )
};

export default PopularMenu;