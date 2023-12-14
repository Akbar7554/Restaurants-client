import { Box, Typography } from "@mui/material"
import { grey } from "@mui/material/colors"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
                  justifyContent: "space-between",
          
        }}
      >
        <Box>
          <Typography>CONTACT US</Typography>
          <Typography>123 ABS Street, Uni 21, Bangladesh</Typography>
          <Typography>+88 123456789</Typography>
          <Typography>Mon - Fri: 08:00 - 22:00</Typography>
          <Typography>Sat - Sun: 10:00 - 23:00</Typography>
        </Box>
              <Box sx={{ 
                  bgcolor: grey[800],
                  color: "white",
                  p: 4,
         }}>
          <Typography>Follow US</Typography>
          <Typography>Join us on social media</Typography>
          <Box>
            <Link></Link>
            <Link></Link>
            <Link></Link>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            textAlign: "center",
            bgcolor: grey[900],
            color: grey[50],
            p: 2,
          }}
        >
          Copyright © CulinaryCloud. All rights reserved.
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer
