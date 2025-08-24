import React, { useEffect, useState } from "react";
import {
  addNewRequest,
  getallRequests,
  deleteRequest,
} from "../../services/requestapis"; // Import the deleteRequest function
import AddRequest from "../Modals/AddRequest";
import EditRequest from "../Modals/EditRequest";
import ViewRequest from "../Modals/ViewRequest";
import { Link, useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faSort,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const RequestPanel = () => {
  const [searchParams] = useSearchParams();
  const [pageFromParams, setPageFromParams] = useState(
    parseInt(searchParams.get("page")) ? parseInt(searchParams.get("page")) : 1
  );
  const [requests, setRequests] = useState([]);
  const [filteredRequests, setFilteredRequests] = useState([]);
  const [addRequestModal, setAddRequestModal] = useState(false);
  const [editRequestModal, setEditRequestModal] = useState(false);
  const [viewRequestModal, setViewRequestModal] = useState(false);
  const [requestsCount, setRequestsCount] = useState(0);
  const [editRequestDetails, setEditRequestDetails] = useState({});
  const [viewRequestDetails, setViewRequestDetails] = useState({});
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [showSearchOptions, setShowSearchOptions] = useState(false);

  useEffect(() => {
    const fetchRequests = async () => {
      let response = await getallRequests(pageFromParams);
      console.log(response);
      if (response.status === 200) {
        setRequests(response.data.allRequests);
        setRequestsCount(Math.ceil(response.data.requestsCount / 10));
        setFilteredRequests(response.data.allRequests);
      }
    };
    fetchRequests();
  }, [pageFromParams]);

  useEffect(() => {
    if (selectedStatus) {
      const filtered = requests.filter(
        (request) => request.status === selectedStatus
      );
      setFilteredRequests(filtered);
    } else {
      setFilteredRequests(requests);
    }
  }, [selectedStatus, requests]);

  const handleonClose = () => {
    setAddRequestModal(false);
    setEditRequestModal(false);
    setViewRequestModal(false);
    setShowSearchOptions(false);
    setSelectedStatus(null); // Reset selected status when closing
  };

  const handleModalShow = () => {
    setAddRequestModal(true);
  };

  const handleEdit = (request) => {
    setEditRequestModal(true);
    setEditRequestDetails(request);
  };

  const handleView = (request) => {
    setViewRequestModal(true);
    setViewRequestDetails(request);
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

  const handleStatusFilter = (status) => {
    setSelectedStatus(status);
    setShowSearchOptions(false);
  };

  const handleAllFilter = () => {
    setSelectedStatus(null);
    setShowSearchOptions(false);
  };

  const handleDelete = async (requestId) => {
    const response = await deleteRequest(requestId);
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
          <p className="text-xl font-bold">Requests</p>
          <div className="flex gap-3 relative">
            <div className="relative">
              <select
                className="py-2 px-6 outline-none rounded-md bg-white border cursor-pointer hover:border-blue-400 focus:border-blue-600"
                onChange={(e) => handleStatusFilter(e.target.value)}
                value={selectedStatus || ""}
              >
                <option value="">All</option>
                <option value="failed">Failed</option>
                <option value="active">Active</option>
                <option value="done">Done</option>
              </select>
            </div>
            <button
              className="m-0 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400 hover:text-white"
              onClick={handleModalShow}
            >
              Add Request
            </button>
            <input
              type="text"
              placeholder="search"
              className="px-2 outline-none rounded-md bg-white border hover:border-blue-400 focus:border-blue-600"
            />
          </div>
        </div>
        {addRequestModal && <AddRequest onClose={handleonClose} />}
        <div className="min-w-fit border rounded-2xl mt-3 bg-white shadow-xl">
          <table className="table-auto w-full ">
            <thead className="">
              <tr className="border text-left bg-gray-300 rounded-3xl">
                <th className="px-4 py-2 ">
                  S. No.{" "}
                  <FontAwesomeIcon
                    className="ml-2 cursor-pointer"
                    icon={faSort}
                  />
                </th>
                <th className="px-4 py-2 ">Request Id</th>
                <th className="px-4 py-2 ">User Id</th>
                <th className="px-4 py-2 ">Request Type</th>
                <th className="px-4 py-2 ">Service Name</th>
                <th className="px-4 py-2 ">
                  Price{" "}
                  <FontAwesomeIcon
                    className="ml-2 cursor-pointer"
                    icon={faSort}
                  />
                </th>
                <th className="px-4 py-2 ">Status</th>
                <th className="px-4 py-2 ">Actions</th>
              </tr>
            </thead>
            <tbody className="">
              {filteredRequests.map((request, index) => (
                <tr className="" key={request._id}>
                  <td className="px-4  py-3 font-medium">
                    {(pageFromParams - 1) * 10 + index + 1}
                  </td>
                  <td
                    className="px-4  py-3 font-medium"
                    onClick={() => handleEdit(request)}
                    target="_blank"
                  >
                    {request._id}
                  </td>
                  <td className="px-4  py-3 font-medium">{request.user_id}</td>
                  <td className="px-4  py-3 font-medium">
                    {request.request_type}
                  </td>
                  <td className="px-4  py-3 font-medium">
                    {request.service_name}
                  </td>
                  <td className="px-4  py-3 font-medium">{request.price}</td>
                  <td className="px-4  py-3 font-medium">{request.status}</td>
                  <td className="px-4  py-3 font-medium">
                    <FontAwesomeIcon
                      icon={faPen}
                      className="cursor-pointer hover:text-blue-500"
                      onClick={() => handleEdit(request)}
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="mx-5 cursor-pointer hover:text-red-400"
                      onClick={() => handleDelete(request._id)} // Call handleDelete function with request ID
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {editRequestModal && (
            <EditRequest onClose={handleonClose} data={editRequestDetails} />
          )}
          {viewRequestModal && (
            <ViewRequest onClose={handleonClose} data={viewRequestDetails} />
          )}
        </div>
      </div>
      <div className="flex justify-center px-3 mx-auto my-4 mb-0 gap-3 items-center w-fit">
        {pageFromParams !== 1 && (
          <Link to={`/requestlist/?page=${pageFromParams - 1}`}>
            <div
              className="border bg-white pb-2 pt-1 px-3 rounded-full font-bold hover:border-black cursor-pointer"
              onClick={prevPage}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
          </Link>
        )}
        <div className={`w-fit px-3 rounded-full bg-white my-4 py-1 `}>
          {[...Array(requestsCount)].map((_, index) => (
            <Link key={index} to={`/requestlist/?page=${index + 1}`}>
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
        {pageFromParams !== requestsCount && (
          <Link to={`/requestlist/?page=${pageFromParams + 1}`}>
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

export default RequestPanel;
