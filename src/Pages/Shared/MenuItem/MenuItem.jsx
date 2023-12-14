import { Box, Typography } from "@mui/material"

const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item
    return (
      <Box sx={{ display: "flex" }}>
        <Box sx={{ marginRight: 2 }}>
          <img style={{ borderRadius: '0px 200px 200px 200px' }} className="w-[118px] h-[104px] " src={image} />
        </Box>
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography>{name} --------</Typography>
            <Typography sx={{ color: ["#BB8506"] }}>${price}</Typography>
          </Box>
          <Typography>{recipe}</Typography>
        </Box>
      </Box>
    )
}

export default MenuItem
