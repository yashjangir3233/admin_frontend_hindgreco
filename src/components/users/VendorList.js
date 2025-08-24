import { useEffect, useState } from "react";
import { getAllVendors, deleteVendor } from "../../services/usersApi"; // Adjust the import as per your file structure
import AddUser from "../Modals/usersModals/AddUser";
import Edituser from "../Modals/usersModals/Edituser";
import Viewuser from "../Modals/usersModals/Viewuser";
import { Link, useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faSort,
  faPen,
  faTrash,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";

const VendorList = () => {
  const [searchParams] = useSearchParams();
  const [pageFromParams, setPageFromParams] = useState(
    parseInt(searchParams.get("page")) ? parseInt(searchParams.get("page")) : 1
  );
  const [vendors, setVendors] = useState([]);
  const [filteredVendors, setFilteredVendors] = useState([]); // New state for filtered vendors
  const [addUserModal, setAddUserModal] = useState(false);
  const [editUserModal, setEditUserModal] = useState(false);
  const [editUserDetails, setEditUserDetails] = useState({});
  const [viewVendorModal, setViewVendorModal] = useState(false);
  const [viewVendorDetails, setViewVendorDetails] = useState({});
  const [vendorsCount, setVendorsCount] = useState(0);
  const [filterOption, setFilterOption] = useState("All"); // State for selected filter option

  useEffect(() => {
    const fetchVendors = async () => {
      let response = await getAllVendors(pageFromParams);
      if (response?.status === 200) {
        setVendors(response?.data?.data);
        setFilteredVendors(response?.data?.data); // Initially set filtered vendors to all vendors
        setVendorsCount(Math.ceil(response?.data?.vendorsCount / 10));
      }
    };
    fetchVendors();
  }, [pageFromParams]);

  const handleAddUserModal = () => {
    setAddUserModal(true);
  };

  const handleonClose = () => {
    setViewVendorModal(false);
    setAddUserModal(false);
    setEditUserModal(false);
  };

  const handleEdit = (vendor) => {
    setEditUserModal(true);
    setEditUserDetails(vendor);
  };

  const handleView = (vendor) => {
    setViewVendorModal(true);
    setViewVendorDetails(vendor);
  };

  const handlePaginationClick = (index) => {
    setPageFromParams(index + 1);
  };

  const nextPage = () => {
    setPageFromParams(pageFromParams + 1);
  };

  const prevPage = () => {
    setPageFromParams(pageFromParams - 1);
  };

  const handleFilterChange = (option) => {
    setFilterOption(option);
    if (option === "All") {
      setFilteredVendors(vendors); // Show all vendors
    } else {
      const filtered = vendors.filter(
        (vendor) => vendor.userSubtype === option
      );
      setFilteredVendors(filtered);
    }
  };

  const handleDelete = async (vendorId) => {
    const response = await deleteVendor(vendorId);
    console.log(response);
    if (response.status === 200) {
      window.location.reload();
    } else {
      console.log("Failed to delete");
    }
  };

  return (
    <div className="w-full px-7 pb-0 bg-[#edece8] h-screen overflow-y-auto">
      <div className="pt-14">
        <div className="flex justify-between items-end">
          <div className="flex gap-2">
            <p className="text-xl font-bold">Vendors</p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="relative">
              <select
                className="p-2 outline-none rounded-md bg-white border cursor-pointer hover:border-blue-400 focus:border-blue-600"
                onChange={(e) => handleFilterChange(e.target.value)}
                value={filterOption}
              >
                <option value="All">All</option>
                <option value="Driver">Driver</option>
                <option value="Scrap-collector">Scrap-collector</option>
                <option value="Cleaner">Cleaner</option>
                <option value="Repair-service">Repair-service</option>
                <option value="Refurbished">Refurbished</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <button
              className="m-0 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400 hover:text-white"
              onClick={handleAddUserModal}
            >
              Add Vendor
            </button>
          </div>
        </div>
        {addUserModal && <AddUser onClose={handleonClose} type="vendor" />}
        <div className="min-w-fit border rounded-2xl mt-3 bg-white shadow-xl">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead>
              <tr className="border text-left bg-gray-300 rounded-3xl">
                <th className="px-4 py-2 w-fit">
                  S.No.{" "}
                  <FontAwesomeIcon
                    className="ml-2 cursor-pointer"
                    icon={faSort}
                  />
                </th>
                <th className="px-4 py-2 ">Vendor Id</th>
                <th className="px-4 py-2 ">
                  Name{" "}
                  <FontAwesomeIcon
                    className="ml-2 cursor-pointer"
                    icon={faSort}
                  />
                </th>
                <th className="px-4 py-2 ">
                  email{" "}
                  <FontAwesomeIcon
                    className="ml-2 cursor-pointer"
                    icon={faSort}
                  />
                </th>
                <th className="px-4 py-2 ">User Subtype</th>
                <th className="px-4 py-2 ">Status</th>
                <th className="px-4 py-2 ">Actions</th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="">
              {filteredVendors?.map((vendor, index) => (
                <tr className="" key={vendor._id}>
                  <td className=" px-4 py-3 font-medium">
                    {(pageFromParams - 1) * 10 + index + 1}
                  </td>
                  <td
                    className=" px-4 py-3 font-medium text-blue-500 hover:text-blue-400 cursor-pointer"
                    onClick={() => handleEdit(vendor)}
                  >
                    {`${vendor.name.split(" ")[0]}${vendor.phone
                      .toString()
                      .slice(-4)}${vendor.dob.replace(/-/g, "")}`}
                  </td>
                  <td className=" px-4 py-3 font-medium">{vendor.name}</td>
                  <td className=" px-4 py-3 font-medium">{vendor.email}</td>
                  <td className=" px-4 py-3 font-medium">
                    {vendor.userSubtype}
                  </td>
                  <td className=" px-4 py-3 font-medium">
                    {vendor.userStatus}
                  </td>
                  <td className=" px-4 py-3 font-medium">
                    <FontAwesomeIcon
                      icon={faPen}
                      className="cursor-pointer hover:text-blue-500"
                      onClick={() => handleEdit(vendor)}
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => handleDelete(vendor._id)}
                      className="mx-5 cursor-pointer hover:text-red-400"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {editUserModal && (
            <Edituser onClose={handleonClose} data={editUserDetails} />
          )}
          {viewVendorModal && (
            <Viewuser onClose={handleonClose} data={viewVendorDetails} />
          )}
        </div>
      </div>
      {/* Pagination */}
      <div className="flex justify-center px-3 mx-auto my-4 mb-0 gap-3 items-center w-fit">
        {pageFromParams !== 1 && (
          <Link to={`/vendorlist/?page=${pageFromParams - 1}`}>
            <div
              className="border bg-white pb-2 pt-1 px-3 rounded-full font-bold hover:border-black cursor-pointer"
              onClick={prevPage}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
          </Link>
        )}
        <div className={`w-fit px-3 rounded-full bg-white my-4 py-1 `}>
          {[...Array(vendorsCount)].map((_, index) => (
            <Link className="mx-2" to={`/vendorlist/?page=${index + 1}`}>
              <button
                className={`px-3 py-1 border border-white font-bold rounded-full hover:border-gray-900 ${
                  index + 1 === parseInt(pageFromParams)
                    ? "bg-gray-700 text-white"
                    : ""
                } `}
                onClick={() => handlePaginationClick(index)}
              >
                {index + 1}
              </button>
            </Link>
          ))}
        </div>
        {pageFromParams !== vendorsCount && (
          <Link to={`/vendorlist/?page=${pageFromParams + 1}`}>
            <div
              className="border bg-white pb-2 pt-1 px-3 rounded-full font-bold hover:border-black cursor-pointer"
              onClick={nextPage}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default VendorList;
