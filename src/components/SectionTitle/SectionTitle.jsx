import { Box, Typography } from "@mui/material"

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <Box sx={{ textAlign: "center", my: 5 }}>
      <Typography
        sx={{
          color: ["#D99904"],
          fontFamily: "Inter",
          fontStyle: "italic",
          fontSize: 20,
          my: 2,
        }}
      >
        ---{subHeading}---
      </Typography>
          <Typography sx={{ fontSize: 40, textTransform: "uppercase" }}>{heading}</Typography>
    </Box>
  )
}

export default SectionTitle
