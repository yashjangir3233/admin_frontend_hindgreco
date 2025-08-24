import React, { useEffect, useState, useRef } from "react";
import Chart from "chart.js/auto"; // Import Chart directly
import { countRequest } from "../../services/requestapis";
import { countCustomer, countVendor } from "../../services/usersApi";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [requestCount, setRequestCount] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);
  const [vendorCount, setVendorCount] = useState(0);
  const [weightCollected, setWeightCollected] = useState(0);
  const [co2Reduced, setCo2Reduced] = useState(0);
  const [totalResources, setTotalResources] = useState(0);

  // Use useRef to create references to the chart canvas elements
  const weightChartRef = useRef(null);
  const countChartRef = useRef(null);
  const weightChartInstanceRef = useRef(null); // Store the Chart instances
  const countChartInstanceRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestRes = await countRequest();
        const customerRes = await countCustomer();
        const vendorRes = await countVendor();

        if (requestRes.status === 200) setRequestCount(requestRes.data);
        if (customerRes.status === 200) setCustomerCount(customerRes.data);
        if (vendorRes.status === 200) setVendorCount(vendorRes.data);

        // Simulate fetching data for weight collected, CO2 reduced, and total resources
        setWeightCollected(5000); // Example value for weight collected
        setCo2Reduced(1000); // Example value for CO2 reduced
        setTotalResources(200); // Example value for total resources
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (weightChartRef.current) {
      const ctx = weightChartRef.current.getContext("2d");

      // Destroy the previous chart instance if it exists
      if (weightChartInstanceRef.current) {
        weightChartInstanceRef.current.destroy();
      }

      // Create the new chart instance
      weightChartInstanceRef.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: [
            "Total Weight Collected",
            "Total CO2 Reduced",
            "Total Resources",
          ],
          datasets: [
            {
              label: "Counts",
              backgroundColor: ["#d1b9ff", "#98fcca", "#ffeaca"],

              hoverBackgroundColor: "rgba(255,99,132,0.4)",
              hoverBorderColor: "rgba(255,99,132,1)",
              data: [weightCollected, co2Reduced, totalResources],
            },
          ],
        },
      });
    }

    if (countChartRef.current) {
      const ctx = countChartRef.current.getContext("2d");

      // Destroy the previous chart instance if it exists
      if (countChartInstanceRef.current) {
        countChartInstanceRef.current.destroy();
      }

      // Create the new chart instance
      countChartInstanceRef.current = new Chart(ctx, {
        type: "pie",
        data: {
          labels: ["Total Customers", "Total Vendors", "Total Requests"],
          datasets: [
            {
              label: "Counts",
              backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
              borderColor: "rgba(255,99,132,1)",
              borderWidth: 1,
              hoverBackgroundColor: "rgba(255,99,132,0.4)",
              hoverBorderColor: "rgba(255,99,132,1)",
              data: [customerCount, vendorCount, requestCount],
            },
          ],
        },
      });
    }

    // Cleanup function to destroy the chart instances when component unmounts or data changes
    return () => {
      if (weightChartInstanceRef.current) {
        weightChartInstanceRef.current.destroy();
      }

      if (countChartInstanceRef.current) {
        countChartInstanceRef.current.destroy();
      }
    };
  }, [
    customerCount,
    vendorCount,
    requestCount,
    weightCollected,
    co2Reduced,
    totalResources,
  ]);
  
  const handleLogOut = (e) => {
    e.preventDefault()
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    navigate('/')
    window.location.reload();
  }

  return (
    <div className="w-full py-5 overflow-y-auto h-screen">
      <div className="font-semibold mx-5 text-3xl">Overview <button className="border border-black" onClick={handleLogOut}>Logout</button></div>
      <div className="flex justify-between mx-5 my-5">
        <div className="bg-[#87CEFA] font-semibold p-4 rounded-md ">
          <div className="bgb">Total Vendors</div>
          <div className="text-4xl mt-5 text-center">{vendorCount}</div>
        </div>

        <div className="bg-[#FF6384] font-semibold p-4 rounded-md">
          <div className="">Total Customers</div>
          <div className="text-4xl mt-5 text-center">{customerCount}</div>
        </div>

        <div className="bg-[#FFCE56] font-semibold p-4 rounded-md">
          <div className="">Total Requests</div>
          <div className="text-4xl mt-5 text-center">{requestCount}</div>
        </div>
        <div className="bg-[#d1b9ff] ml-4  font-semibold p-4  rounded-md">
          <div className="">Total Weight Collected</div>
          <div className="text-4xl mt-5 text-center">{weightCollected}</div>
        </div>
        <div className="bg-[#98fcca] font-semibold p-4 ml-4 rounded-md -mx-6">
          <div className="">Total CO2 Reduced</div>
          <div className="text-4xl mt-5 text-center">{co2Reduced}</div>
        </div>
        <div className="bg-[#ffeaca] font-semibold p-4 rounded-md ml-4">
          <div className="">Total Resources</div>
          <div className="text-4xl mt-5 text-center">{totalResources}</div>
                  
        </div>
      </div>
      {/* Canvas for the weight chart */}
      <div className="flex flex-col md:flex-row justify-between items-center p-8 gap-4 -mt-10">
        <div className="flex justify-center my-5 p-6 w-6/12 border-2 rounded-2xl shadow-lg">
          <canvas ref={countChartRef} width="400" height="400" />
        </div>

        <div className="flex justify-center my-5 p-6 w-6/12 border-2 rounded-2xl shadow-lg">
          <canvas ref={weightChartRef} width="400" height="400" />
        </div>
        {/* Canvas for the count chart */}
      </div>
    </div>
  );
};

export default Dashboard;
//-----------------------------------------------------------------------------
