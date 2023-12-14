import useAuth from "../../hooks/useAuth"
import Swal from "sweetalert2"
import { useLocation, useNavigate } from "react-router-dom"
import useAxiosSecure from "../../hooks/useAxiosSecure"
import useCart from "../../hooks/useCart"
const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item
  const { user } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const axiosSecure = useAxiosSecure()
  const [, refetch] = useCart()
  const handleAddToCart = (food) => {
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      }
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data)
        if (res.data.insertedId) {
          Swal.fire({
            title: `${name} Added Successfully!`,
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          })
          refetch()
        }
      })
    } else {
      Swal.fire({
        title: "You are not logged In",
        text: "Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } })
        }
      })
    }
  }

  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 mr-10 bg-gray-700 text-white px-2 py-1 mt-5">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-primary"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default FoodCard
