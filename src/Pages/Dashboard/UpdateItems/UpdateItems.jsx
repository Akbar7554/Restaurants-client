import { useForm } from "react-hook-form"
import { useLoaderData } from "react-router-dom"
import useAxiosSecure from "../../../hooks/useAxiosSecure"
import useAxiosPublic from "../../../hooks/useAxiosPublic"
import Swal from "sweetalert2"
import SectionTitle from "../../../components/SectionTitle/SectionTitle"

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItems = () => {
  const { register, handleSubmit, reset } = useForm()
  const { _id, name, category, recipe, price } = useLoaderData()

  const AxiosPublic = useAxiosPublic()
  const AxiosSecure = useAxiosSecure()
  const onSubmit = async (data) => {
    console.log(data)
    const image_file = { image: data.image[0] }
    const res = await AxiosPublic.post(image_hosting_api, image_file, {
      headers: {
        "content-type": "multipart/form-data",
      },
    })
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      }
      const menuRes = await AxiosSecure.patch(`/menu/${_id}`, menuItem)
      console.log(menuRes.data)
      if (menuRes.data.modifiedCount > 0) {
        Swal.fire({
          position: "top",
          icon: "success",
          title: `${data.name} updated successfully to the menu!`,
          showConfirmButton: false,
          timer: 1500,
        })
        // reset()
      }
    }
    console.log(res.data)
  }
  return (
    <div>
      <SectionTitle
        heading="Update an Item"
        subHeading="What's Update here?"
      ></SectionTitle>
      <div className="px-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text">Recipe Name</span>
            </label>
            <input
              defaultValue={name}
              {...register("name")}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex gap-6">
            {/* Category */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                {...register("category")}
                className="select select-bordered w-full"
                defaultValue={category}
              >
                {" "}
                Select a Category
                <option disabled value="default">
                  Select a Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            {/* Price */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                {...register("price")}
                defaultValue={price}
                type="number"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </div>
          </div>
          {/* Recipe Details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details</span>
            </label>
            <textarea
              {...register("recipe")}
              defaultValue={recipe}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
            ></textarea>
          </div>
          <div className="form-control w-full my-6">
            <input
              {...register("image")}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>
          <button type="submit" className="btn btn-secondary">
            Add Item
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateItems
