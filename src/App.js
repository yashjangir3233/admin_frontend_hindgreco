import ReactDOM from "react-dom/client";
import { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet,useNavigate } from "react-router-dom";
import Adminlogin from "./components/admin_login/adminlogin";
// import Adminlogin from "./components/admin_login/Adminlogin";
import Sidebar from "./components/sidebar/Sidebar";
// import UserList from "./components/users/VendorList";
// import RequestList from "./components/admin_login/requestList";
import RequestPanel from "./components/RequestsPanel/requestpanel";
// import RequestPanel from "./components/RequestsPanel/RequestPanel";
// import CustomerList from "./components/users/CustomerList";
// import VendorList from "./components/users/VendorList";
import VendorList from "./components/users/VendorList";
import CustomerList from "./components/users/CustomerList";
import Transaction from "./components/TransactionPanel/Transaction";
import Resources from "./components/ResourcesPanel/Resources";
import Dashboard from "./components/Dashboard/Dashboard";
import Redeempoints from "./components/Redeempointspanel/Redeempoints";
import Bookspanel from "./components/ProductPanel/Bookspanel";
import Electronicspanel from "./components/ProductPanel/Electronicspanel";
import DirectSale from "./components/Textile/DirectSale";
import Invoice from "./components/invoice/Invoice";
import Auction from "./components/Textile/Auction";

const AppLayout = () => {

  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('accessToken');

  const handleLogin = () => {
    // setIsLoggedIn(true);
    navigate('/dashboard');
  }

  return (
        !token
        ?
        (
          <Adminlogin onLogin={handleLogin} />
        )
        :
        (
          <div className="app flex">
            <Sidebar />
            <Outlet />
          </div>
        )
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/requestlist",
        element: <RequestPanel />,
      },
      {
        path: "/vendorlist",
        element: <VendorList />,
      },
      {
        path: "/customerlist",
        element: <CustomerList />,
      },
      {
        path: "/transactionlist",
        element: <Transaction />,
      },
      {
        path: "/resourcelist",
        element: <Resources />,
      },
      {
        path: "/redeempointslist",
        element: <Redeempoints />,
      },
      {
        path: "/booklist",
        element: <Bookspanel />,
      },
      {
        path: "/electronicslist",
        element: <Electronicspanel />,
      },
      {
        path:'/textiledirectlist',
        element:<DirectSale />
      },
      {
        path:'/invoicelist',
        element:<Invoice />
      },
      {
        path:'/textileauctionlist',
        element:<Auction />
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
