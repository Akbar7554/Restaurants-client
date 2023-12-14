import { createBrowserRouter } from "react-router-dom"
import Root from "../Layouts/Root"
import Home from "../Pages/Homes/Home/Home"
import Menu from "../Pages/Menus/Menu/Menu"
import Order from "../Pages/Orders/Order/Order"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
import PrivateRoute from "./PrivateRoute"
import Secret from "../Pages/Shared/Secret/Secret"
import Dashboard from "../Layouts/Dashboard"
import Cart from "../Pages/Dashboard/Cart/Cart"
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers"
import AddItems from "../Pages/Dashboard/AddItems/AddItems"
import AdminRoute from "./AdminRoute"
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems"
import UpdateItems from "../Pages/Dashboard/UpdateItems/UpdateItems"
import Payment from "../Pages/Dashboard/Payment/Payment"
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory"
import UserHome from "../Pages/Dashboard/UserHome/UserHome"
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "register",
    element: <Register></Register>,
  },
  {
    path: "secret",
    element: (
      <PrivateRoute>
        <Secret></Secret>
      </PrivateRoute>
    ),
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },

      // Admin Route
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "addItems",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <AdminRoute>
            <UpdateItems></UpdateItems>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
      {
        path: "allUsers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
    ],
  },
])