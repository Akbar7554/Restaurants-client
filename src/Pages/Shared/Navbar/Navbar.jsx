import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material"
import { grey } from "@mui/material/colors"
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import LocalDiningIcon from "@mui/icons-material/LocalDining"
import LogoutIcon from "@mui/icons-material/Logout"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../../providers/AuthProvider"
import useCart from "../../../hooks/useCart"
import useAdmin from "../../../hooks/useAdmin"
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isAdmin] = useAdmin()
  const [cart] = useCart()
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error))
  }
  return (
    <AppBar position="fixed" sx={{ zIndex: 30, position: "sticky" }}>
      <Toolbar
        sx={{
          bgcolor: grey[500],
          display: "flex",
          justifyContent: "space-between",
          p: 1.5,
        }}
      >
        <IconButton
          sx={{ display: "flex", justifyContent: "space-around", gap: 2 }}
        >
          <LocalDiningIcon
            sx={{ color: "white", fontSize: 40 }}
          ></LocalDiningIcon>
          <Typography
            sx={{ fontSize: 35, fontFamily: "fantasy", color: grey[300] }}
          >
            <Link>BISTRO BOSS</Link>
          </Typography>
        </IconButton>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Typography>
            <Link>HOME</Link>
          </Typography>
          <Typography>
            <Link to="/dashboard/cart">My Carts</Link>
          </Typography>
          <Typography>
            <Link to="/menu">OUR MENU</Link>
          </Typography>
          <Typography>
            <Link to="/order/salad">ORDER</Link>
          </Typography>
          {user && isAdmin && (
            <Typography>
              <Link to="/dashboard/adminHome">DASHBOARD</Link>
            </Typography>
          )}
          {user && !isAdmin && (
            <Typography>
              <Link to="/dashboard/userHome">DASHBOARD</Link>
            </Typography>
          )}
          <Typography>
            <Link to="/">
              <button className="btn bg-gray-600">
                <IconButton>
                  <LocalGroceryStoreIcon
                    sx={{ color: "white", fontSize: 30 }}
                  ></LocalGroceryStoreIcon>
                </IconButton>
                <div className="badge badge-secondary">+{cart.length}</div>
              </button>
            </Link>
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {user ? (
              <>
                {" "}
                <IconButton>
                  <LogoutIcon
                    sx={{ color: "white" }}
                    onClick={handleLogout}
                ></LogoutIcon>
                </IconButton>
              </>
            ) : (
              <>
                <IconButton>
                  <Link to="/login">
                    <AccountCircleIcon
                      sx={{ color: "white", fontSize: 30 }}
                    ></AccountCircleIcon>
                  </Link>
                </IconButton>
              </>
            )}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
