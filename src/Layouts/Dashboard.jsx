import { NavLink, Outlet } from "react-router-dom"
import useCart from "../hooks/useCart"
import useAdmin from "../hooks/useAdmin"

const Dashboard = () => {
    const [isAdmin] = useAdmin()
  const [cart] = useCart()
  return (
    <div className="flex max-w-6xl mx-auto my-10">
      <div className="w-64 min-h-screen bg-orange-500">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">Admin Home</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">Add Items</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">Manage Items</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">Manage Bookings</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">All Users</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">User Home</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">My Cart {cart.length}</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">Review</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">Real Payment History</NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Dashboard
