import Swal from "sweetalert2"
import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import DeleteIcon from "@mui/icons-material/Delete"
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline"
import useAxiosSecure from "../../../hooks/useAxiosSecure"
import useMenu from "../../../hooks/useMenu"
import { Link } from "react-router-dom"

const ManageItems = () => {
    const [menu, refetch] = useMenu()
  const AxiosSecure = useAxiosSecure()
  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await AxiosSecure.delete(`/menu/${item._id}`)
        // console.log(res.data)
          if (res?.data?.deletedCount > 0) {
            refetch()
            
          Swal.fire({
            title: "Deleted!",
            text: `${item.name} has been deleted successfully!`,
            icon: "success",
            timer: 1500,
            showConfirmButton: false,
          })
        }
      }
    })
  }
  return (
    <div>
      <SectionTitle
        heading="Manage all Items"
        subHeading="Hurry Up!"
      ></SectionTitle>
      <div>
        <div className="overflow-x-auto px-5">
          <table className="table">
            {/* head */}
            <thead className="bg-orange-500">
              <tr className="text-base text-white">
                <th>#</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}.</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>$ {item.price}</td>
                  <td>
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                      <DriveFileRenameOutlineIcon
                        sx={{ color: "green", fontSize: 25, marginLeft: 2 }}
                      ></DriveFileRenameOutlineIcon>
                    </Link>
                  </td>
                  <td>
                    <button onClick={() => handleDeleteItem(item)} className="">
                      <DeleteIcon
                        sx={{
                          color: "red",
                          fontSize: 25,
                          textAlign: "center",
                          marginLeft: 2,
                        }}
                      ></DeleteIcon>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ManageItems
