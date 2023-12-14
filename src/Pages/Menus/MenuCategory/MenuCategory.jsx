import { Box } from "@mui/material";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({items, title, coverImg}) => {
    return (
      <div>
        {title && <Cover img={coverImg} title={title}></Cover>}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2,1fr)",
            gap: 3,
            width: "80%",
            mx: "auto",
          }}
        >
          {items.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </Box>
        <Link to={`/order/${title}`}>
          <button className="ml-80 btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
        </Link>
      </div>
    )
};

export default MenuCategory;