import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import marketStore from "../../assets/market-store.png";
import customer from "../../assets/customer.png";
import request from "../../assets/request.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState();
  const [currRoute, setCurrRoute] = useState([]);
  const handleItemClick = (itemname) => {
    setActiveItem(itemname);
  };
  // const urlParams = new URLSearchParams(window.location.search);
  // let currRoute = "";
  useEffect(() => {
    const fetchcurrRoute = () => {
      const currUrl = window.location.href;
      const urlParts = currUrl.split("/");
      setCurrRoute(urlParts.slice(urlParts.indexOf("admin.keemti.in") + 1));
      console.log(urlParts.slice(urlParts.indexOf("admin.keemti.in") + 1));
      // currRoute = urlParts.slice(urlParts.indexOf('localhost:1234') + 1) ;
      console.log(currRoute[0]);
      // console.log(typeof(currRoute[0]));
    };
    fetchcurrRoute();
  }, [activeItem]);
  return (
    <div className="bg-black text-white rounded-r-md min-w-[13rem] max-w-[16rem] p-4 shadow-xl shadow-blue-gray-900 w-[18%] h-screen">
      <Link to={"/dashboard"}>
        <h1 className=" p-2 m-2 font-semibold">Hindgreco Admin</h1>
      </Link>
      <ul className="p-2 mt-7">
        <Link to="/vendorlist" className="">
          <li
            className={`flex py-2 px-3 my-2 items-center gap-4 hover:bg-slate-800 hover:rounded-md text-gray-300 active:bg-gray-700 ${
              currRoute[0] === "vendorlist"
                ? "bg-gray-700 rounded-md text-white"
                : ""
            }`}
            onClick={() => handleItemClick("vendors")}
          >
            <img
              src={marketStore}
              className={`filter w-6 ${
                currRoute[0] === "vendorlist"
                  ? "brightness-0 invert grayscale contrast-100"
                  : "brightness-75 invert grayscale contrast-50"
              }`}
              alt=""
            />
            Vendors
          </li>
        </Link>
        <Link to="/customerlist" className="">
          <li
            className={`flex items center gap-4 py-2 px-3 my-2 hover:bg-slate-800 hover:rounded-md text-gray-300 active:bg-gray-700 ${
              currRoute[0] === "customerlist"
                ? "bg-gray-700 rounded-md text-white"
                : ""
            }`}
            onClick={() => handleItemClick("customers")}
          >
            <img
              src={customer}
              className={`filter w-6 ${
                currRoute[0] === "customerlist"
                  ? "brightness-0 invert grayscale contrast-100"
                  : "brightness-75 invert grayscale contrast-50"
              }`}
              alt=""
            />
            Customers
          </li>
        </Link>
        <Link to="/requestlist" className="">
          <li
            className={`flex items-center gap-4 py-2 px-3 my-2 hover:bg-gray-800 active:bg-gray-700 hover:rounded-md text-gray-300 ${
              currRoute[0] === "requestlist"
                ? "bg-gray-700 rounded-md text-white"
                : ""
            }`}
            onClick={() => handleItemClick("requests")}
          >
            <img
              src={request}
              className={`filter w-6 ${
                currRoute[0] === "requestlist"
                  ? "brightness-0 invert grayscale contrast-100"
                  : "brightness-75 invert grayscale contrast-50"
              }`}
              alt=""
            />
            Requests
          </li>
        </Link>
        <Link to="/transactionlist" className="">
          <li
            className={`flex items-center gap-4 py-2 px-3 my-2 hover:bg-gray-800 active:bg-gray-700 hover:rounded-md text-gray-300 ${
              currRoute[0] === "transactionlist"
                ? "bg-gray-700 rounded-md text-white"
                : ""
            }`}
            onClick={() => handleItemClick("transactions")}
          >
            <FontAwesomeIcon
              icon={faCoins}
              color={`${
                currRoute[0] === "transactionlist"
                  ? "text-white"
                  : "text-gray-300"
              }`}
              size="lg"
            />
            Transactions
          </li>
        </Link>
        <Link to="/resourcelist" className="">
          <li
            className={`flex items-center gap-4 py-2 px-3 my-2 hover:bg-gray-800 active:bg-gray-700 hover:rounded-md text-gray-300 ${
              currRoute[0] === "resourcelist"
                ? "bg-gray-700 rounded-md text-white"
                : ""
            }`}
            onClick={() => handleItemClick("resources")}
          >
            <img
              src={request}
              className={`filter w-6 ${
                currRoute[0] === "resourcelist"
                  ? "brightness-0 invert grayscale contrast-100"
                  : "brightness-75 invert grayscale contrast-50"
              }`}
              alt=""
            />
            Resources
          </li>
        </Link>
        <Link to="/redeempointslist" className="">
          <li
            className={`flex items-center gap-4 py-2 px-3 my-2 hover:bg-gray-800 active:bg-gray-700 hover:rounded-md text-gray-300 ${
              currRoute[0] === "redeempointslist"
                ? "bg-gray-700 rounded-md text-white"
                : ""
            }`}
            onClick={() => handleItemClick("redeempoints")}
          >
            <img
              src={request}
              className={`filter w-6 ${
                currRoute[0] === "redeempointslist"
                  ? "brightness-0 invert grayscale contrast-100"
                  : "brightness-75 invert grayscale contrast-50"
              }`}
              alt=""
            />
            RedeemPoints
          </li>
        </Link>
        <Link to="/booklist" className="">
          <li
            className={`flex items-center gap-4 py-2 px-3 my-2 hover:bg-gray-800 active:bg-gray-700 hover:rounded-md text-gray-300 ${
              currRoute[0] === "booklist"
                ? "bg-gray-700 rounded-md text-white"
                : ""
            }`}
            onClick={() => handleItemClick("book")}
          >
            <img
              src={request}
              className={`filter w-6 ${
                currRoute[0] === "booklist"
                  ? "brightness-0 invert grayscale contrast-100"
                  : "brightness-75 invert grayscale contrast-50"
              }`}
              alt=""
            />
            Books
          </li>
        </Link>
        <Link to="/electronicslist" className="">
          <li
            className={`flex items-center gap-4 py-2 px-3 my-2 hover:bg-gray-800 active:bg-gray-700 hover:rounded-md text-gray-300 ${
              currRoute[0] === "electronicslist"
                ? "bg-gray-700 rounded-md text-white"
                : ""
            }`}
            onClick={() => handleItemClick("electronics")}
          >
            <img
              src={request}
              className={`filter w-6 ${
                currRoute[0] === "electronicslist"
                  ? "brightness-0 invert grayscale contrast-100"
                  : "brightness-75 invert grayscale contrast-50"
              }`}
              alt=""
            />
            Electronics
          </li>
        </Link>
        <Link to="/textiledirectlist" className="">
          <li
            className={`flex items-center gap-4 py-2 px-3 my-2 hover:bg-gray-800 active:bg-gray-700 hover:rounded-md text-gray-300 ${
              currRoute[0] === "textiledirectlist"
                ? "bg-gray-700 rounded-md text-white"
                : ""
            }`}
            onClick={() => handleItemClick("textilesdirect")}
          >
            <img
              src={request}
              className={`filter w-6 ${
                currRoute[0] === "textiledirectlist"
                  ? "brightness-0 invert grayscale contrast-100"
                  : "brightness-75 invert grayscale contrast-50"
              }`}
              alt=""
            />
            Direct Sale
          </li>
        </Link>
        <Link to="/textileauctionlist" className="">
          <li
            className={`flex items-center gap-4 py-2 px-3 my-2 hover:bg-gray-800 active:bg-gray-700 hover:rounded-md text-gray-300 ${
              currRoute[0] === "textileauctionlist"
                ? "bg-gray-700 rounded-md text-white"
                : ""
            }`}
            onClick={() => handleItemClick("textilesauction")}
          >
            <img
              src={request}
              className={`filter w-6 ${
                currRoute[0] === "textileauctionlist"
                  ? "brightness-0 invert grayscale contrast-100"
                  : "brightness-75 invert grayscale contrast-50"
              }`}
              alt=""
            />
            Auction
          </li>
        </Link>
        <Link to="/invoicelist" className="">
          <li
            className={`flex items-center gap-4 py-2 px-3 my-2 hover:bg-gray-800 active:bg-gray-700 hover:rounded-md text-gray-300 ${
              currRoute[0] === "textileauctionlist"
                ? "bg-gray-700 rounded-md text-white"
                : ""
            }`}
            onClick={() => handleItemClick("invoice")}
          >
            <img
              src={request}
              className={`filter w-6 ${
                currRoute[0] === "textileauctionlist"
                  ? "brightness-0 invert grayscale contrast-100"
                  : "brightness-75 invert grayscale contrast-50"
              }`}
              alt=""
            />
            Invoice
          </li>
        </Link>
      </ul>
    </div>
  );
};
export default Sidebar;
