import { useEffect, useState } from "react";
import {
  getAllCustomers,
  addUser,
  searchCustomer,
  deleteCustomer,
} from "../../services/usersApi";
import AddUser from "../Modals/usersModals/AddUser";
import Edituser from "../Modals/usersModals/Edituser";
import Viewuser from "../Modals/usersModals/Viewuser";
import { useSearchParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faSort,
  faPen,
  faTrash,
  faFilter,
  faLocationDot
} from "@fortawesome/free-solid-svg-icons";
import Hotels_maps from "../google_maps/Hotels_maps";
// import Papa, { parse } from 'papaparse'


const CustomerList = () => {
  const [searchParams] = useSearchParams();
  const [pageFromParams, setPageFromParams] = useState(
    parseInt(searchParams.get("page")) ? parseInt(searchParams.get("page")) : 1
  );
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]); // New state for filtered customers
  const [addUserModal, setAddUserModal] = useState(false);
  const [editUserModal, setEditUserModal] = useState(false);
  const [editUserDetails, setEditUserDetails] = useState({});
  const [viewUserModal, setViewUserModal] = useState(false);
  const [viewUserDetails, setViewUserDetails] = useState({});
  const [customersCount, setCustomersCount] = useState(0);
  const [filterOption, setFilterOption] = useState("All"); // State for selected filter option
  const [showMap,setShowMap] = useState(false);

  // csv file reading
//   const allowedExtensions = ["csv"];
//   // const [data, setData] = useState([]);
//   const [error, setError] = useState("");
//   const [file, setFile] = useState("");
//   const handleFileChange = (e) => {
//     setError("");

//     if (e.target.files.length) {
//         const inputFile = e.target.files[0];

//         const fileExtension =
//             inputFile?.type.split("/")[1];
//         if (
//             !allowedExtensions.includes(fileExtension)
//         ) {
//             setError("Please input a csv file");
//             return;
//         }

//         setFile(inputFile);
//     }
// };

// const [locations,setLocations] = useState([]);

// const handleParse = () => {
     
//   if (!file) return alert("Enter a valid file");
//   const reader = new FileReader();

//   reader.onload = async ({ target }) => {
//       const csv = Papa.parse(target.result, {
//           header: true,
//       });
//       const parsedData = csv?.data;
//       // const rows = Object.keys(parsedData[0]);
//       setLocations((prevLocations) => [
//         ...prevLocations,
//         ...parsedData.map(data => ({
//           lat: data.Latitude,
//           lng: data.Longitude
//         }))
//       ]);
//       console.log(locations)

//       // const columns = Object.values(parsedData[0]);
//       // console.log(columns)
//       // const res = rows.reduce((acc, e, i) => {
//       //     return [...acc, [[e], columns[i]]];
//       // }, []);
//       // console.log(res);
//       // setData(res);
//   };
//   reader.readAsText(file);
// };
  // csv file reading


const locations = [
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5513981",
      "lng": "77.1224891"
  },
  {
      "lat": "28.5537733",
      "lng": "77.1223716"
  },
  {
      "lat": "28.5538674",
      "lng": "77.123638"
  },
  {
      "lat": "28.554137",
      "lng": "77.123272"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5505079",
      "lng": "77.1218287"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5547513",
      "lng": "77.1217234"
  },
  {
      "lat": "28.5547123",
      "lng": "77.1217818"
  },
  {
      "lat": "28.554137",
      "lng": "77.123272"
  },
  {
      "lat": "28.5532608",
      "lng": "77.12130320000001"
  },
  {
      "lat": "28.5535649",
      "lng": "77.1232224"
  },
  {
      "lat": "28.5525925",
      "lng": "77.1237314"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5509536",
      "lng": "77.120589"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5505554",
      "lng": "77.12137030000001"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5513981",
      "lng": "77.1224891"
  },
  {
      "lat": "28.5537733",
      "lng": "77.1223716"
  },
  {
      "lat": "28.5538674",
      "lng": "77.123638"
  },
  {
      "lat": "28.554137",
      "lng": "77.123272"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5505079",
      "lng": "77.1218287"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5547513",
      "lng": "77.1217234"
  },
  {
      "lat": "28.5547123",
      "lng": "77.1217818"
  },
  {
      "lat": "28.554137",
      "lng": "77.123272"
  },
  {
      "lat": "28.5532608",
      "lng": "77.12130320000001"
  },
  {
      "lat": "28.5535649",
      "lng": "77.1232224"
  },
  {
      "lat": "28.5525925",
      "lng": "77.1237314"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5509536",
      "lng": "77.120589"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5505554",
      "lng": "77.12137030000001"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5513981",
      "lng": "77.1224891"
  },
  {
      "lat": "28.5537733",
      "lng": "77.1223716"
  },
  {
      "lat": "28.5538674",
      "lng": "77.123638"
  },
  {
      "lat": "28.554137",
      "lng": "77.123272"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5505079",
      "lng": "77.1218287"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5547513",
      "lng": "77.1217234"
  },
  {
      "lat": "28.5547123",
      "lng": "77.1217818"
  },
  {
      "lat": "28.554137",
      "lng": "77.123272"
  },
  {
      "lat": "28.5532608",
      "lng": "77.12130320000001"
  },
  {
      "lat": "28.5535649",
      "lng": "77.1232224"
  },
  {
      "lat": "28.5525925",
      "lng": "77.1237314"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5509536",
      "lng": "77.120589"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5505554",
      "lng": "77.12137030000001"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5513981",
      "lng": "77.1224891"
  },
  {
      "lat": "28.5537733",
      "lng": "77.1223716"
  },
  {
      "lat": "28.5538674",
      "lng": "77.123638"
  },
  {
      "lat": "28.554137",
      "lng": "77.123272"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5505079",
      "lng": "77.1218287"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5547513",
      "lng": "77.1217234"
  },
  {
      "lat": "28.5547123",
      "lng": "77.1217818"
  },
  {
      "lat": "28.554137",
      "lng": "77.123272"
  },
  {
      "lat": "28.5532608",
      "lng": "77.12130320000001"
  },
  {
      "lat": "28.5535649",
      "lng": "77.1232224"
  },
  {
      "lat": "28.5525925",
      "lng": "77.1237314"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5509536",
      "lng": "77.120589"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5505554",
      "lng": "77.12137030000001"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5513981",
      "lng": "77.1224891"
  },
  {
      "lat": "28.5537733",
      "lng": "77.1223716"
  },
  {
      "lat": "28.5538674",
      "lng": "77.123638"
  },
  {
      "lat": "28.554137",
      "lng": "77.123272"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5505079",
      "lng": "77.1218287"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5547513",
      "lng": "77.1217234"
  },
  {
      "lat": "28.5547123",
      "lng": "77.1217818"
  },
  {
      "lat": "28.554137",
      "lng": "77.123272"
  },
  {
      "lat": "28.5532608",
      "lng": "77.12130320000001"
  },
  {
      "lat": "28.5535649",
      "lng": "77.1232224"
  },
  {
      "lat": "28.5525925",
      "lng": "77.1237314"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5509536",
      "lng": "77.120589"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5505554",
      "lng": "77.12137030000001"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5513981",
      "lng": "77.1224891"
  },
  {
      "lat": "28.5537733",
      "lng": "77.1223716"
  },
  {
      "lat": "28.5538674",
      "lng": "77.123638"
  },
  {
      "lat": "28.554137",
      "lng": "77.123272"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5505079",
      "lng": "77.1218287"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5547513",
      "lng": "77.1217234"
  },
  {
      "lat": "28.5547123",
      "lng": "77.1217818"
  },
  {
      "lat": "28.554137",
      "lng": "77.123272"
  },
  {
      "lat": "28.5532608",
      "lng": "77.12130320000001"
  },
  {
      "lat": "28.5535649",
      "lng": "77.1232224"
  },
  {
      "lat": "28.5525925",
      "lng": "77.1237314"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5509536",
      "lng": "77.120589"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5505554",
      "lng": "77.12137030000001"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5513981",
      "lng": "77.1224891"
  },
  {
      "lat": "28.5537733",
      "lng": "77.1223716"
  },
  {
      "lat": "28.5538674",
      "lng": "77.123638"
  },
  {
      "lat": "28.554137",
      "lng": "77.123272"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5505079",
      "lng": "77.1218287"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5547513",
      "lng": "77.1217234"
  },
  {
      "lat": "28.5547123",
      "lng": "77.1217818"
  },
  {
      "lat": "28.554137",
      "lng": "77.123272"
  },
  {
      "lat": "28.5532608",
      "lng": "77.12130320000001"
  },
  {
      "lat": "28.5535649",
      "lng": "77.1232224"
  },
  {
      "lat": "28.5525925",
      "lng": "77.1237314"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5509536",
      "lng": "77.120589"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5505554",
      "lng": "77.12137030000001"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5513981",
      "lng": "77.1224891"
  },
  {
      "lat": "28.5537733",
      "lng": "77.1223716"
  },
  {
      "lat": "28.5538674",
      "lng": "77.123638"
  },
  {
      "lat": "28.554137",
      "lng": "77.123272"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5505079",
      "lng": "77.1218287"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5547513",
      "lng": "77.1217234"
  },
  {
      "lat": "28.5547123",
      "lng": "77.1217818"
  },
  {
      "lat": "28.554137",
      "lng": "77.123272"
  },
  {
      "lat": "28.5532608",
      "lng": "77.12130320000001"
  },
  {
      "lat": "28.5535649",
      "lng": "77.1232224"
  },
  {
      "lat": "28.5525925",
      "lng": "77.1237314"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5509536",
      "lng": "77.120589"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5505554",
      "lng": "77.12137030000001"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5513981",
      "lng": "77.1224891"
  },
  {
      "lat": "28.5537733",
      "lng": "77.1223716"
  },
  {
      "lat": "28.5538674",
      "lng": "77.123638"
  },
  {
      "lat": "28.554137",
      "lng": "77.123272"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5505079",
      "lng": "77.1218287"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5547513",
      "lng": "77.1217234"
  },
  {
      "lat": "28.5547123",
      "lng": "77.1217818"
  },
  {
      "lat": "28.554137",
      "lng": "77.123272"
  },
  {
      "lat": "28.5532608",
      "lng": "77.12130320000001"
  },
  {
      "lat": "28.5535649",
      "lng": "77.1232224"
  },
  {
      "lat": "28.5525925",
      "lng": "77.1237314"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5509536",
      "lng": "77.120589"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5505554",
      "lng": "77.12137030000001"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5513981",
      "lng": "77.1224891"
  },
  {
      "lat": "28.5537733",
      "lng": "77.1223716"
  },
  {
      "lat": "28.5538674",
      "lng": "77.123638"
  },
  {
      "lat": "28.554137",
      "lng": "77.123272"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5505079",
      "lng": "77.1218287"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5547513",
      "lng": "77.1217234"
  },
  {
      "lat": "28.5547123",
      "lng": "77.1217818"
  },
  {
      "lat": "28.554137",
      "lng": "77.123272"
  },
  {
      "lat": "28.5532608",
      "lng": "77.12130320000001"
  },
  {
      "lat": "28.5535649",
      "lng": "77.1232224"
  },
  {
      "lat": "28.5525925",
      "lng": "77.1237314"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5509536",
      "lng": "77.120589"
  },
  {
      "lat": "28.549642",
      "lng": "77.1211905"
  },
  {
      "lat": "28.5505554",
      "lng": "77.12137030000001"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6550458",
      "lng": "77.1888201"
  },
  {
      "lat": "28.6332616",
      "lng": "77.2222604"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6332616",
      "lng": "77.2222604"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6311456",
      "lng": "77.2200373"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6311456",
      "lng": "77.2200373"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6550458",
      "lng": "77.1888201"
  },
  {
      "lat": "28.6332616",
      "lng": "77.2222604"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6332616",
      "lng": "77.2222604"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6311456",
      "lng": "77.2200373"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6311456",
      "lng": "77.2200373"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6550458",
      "lng": "77.1888201"
  },
  {
      "lat": "28.6332616",
      "lng": "77.2222604"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6332616",
      "lng": "77.2222604"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6311456",
      "lng": "77.2200373"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6311456",
      "lng": "77.2200373"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6550458",
      "lng": "77.1888201"
  },
  {
      "lat": "28.6332616",
      "lng": "77.2222604"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6332616",
      "lng": "77.2222604"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6311456",
      "lng": "77.2200373"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6311456",
      "lng": "77.2200373"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6550458",
      "lng": "77.1888201"
  },
  {
      "lat": "28.6332616",
      "lng": "77.2222604"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6332616",
      "lng": "77.2222604"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6311456",
      "lng": "77.2200373"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6311456",
      "lng": "77.2200373"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6550458",
      "lng": "77.1888201"
  },
  {
      "lat": "28.6332616",
      "lng": "77.2222604"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6332616",
      "lng": "77.2222604"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6311456",
      "lng": "77.2200373"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6311456",
      "lng": "77.2200373"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6550458",
      "lng": "77.1888201"
  },
  {
      "lat": "28.6332616",
      "lng": "77.2222604"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6332616",
      "lng": "77.2222604"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6311456",
      "lng": "77.2200373"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6311456",
      "lng": "77.2200373"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6550458",
      "lng": "77.1888201"
  },
  {
      "lat": "28.6332616",
      "lng": "77.2222604"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6332616",
      "lng": "77.2222604"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6311456",
      "lng": "77.2200373"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6311456",
      "lng": "77.2200373"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6550458",
      "lng": "77.1888201"
  },
  {
      "lat": "28.6332616",
      "lng": "77.2222604"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6332616",
      "lng": "77.2222604"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6311456",
      "lng": "77.2200373"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6311456",
      "lng": "77.2200373"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6550458",
      "lng": "77.1888201"
  },
  {
      "lat": "28.6332616",
      "lng": "77.2222604"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6332616",
      "lng": "77.2222604"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6311456",
      "lng": "77.2200373"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
  {
      "lat": "28.6311456",
      "lng": "77.2200373"
  },
  {
      "lat": "28.6304203",
      "lng": "77.2177216"
  },
]

  useEffect(() => {
    const fetchUsers = async () => {
      let response = await getAllCustomers(pageFromParams);
      if (response?.status === 200) {
        setCustomers(response?.data?.data);
        setFilteredCustomers(response?.data?.data); // Initially set filtered customers to all customers
        setCustomersCount(Math.ceil(response?.data?.customersCount / 10));
      }
    };
    fetchUsers();
  }, [pageFromParams]);

  const handleAddUserModal = () => {
    setAddUserModal(true);
  };

  const handleonClose = () => {
    setViewUserModal(false);
    setAddUserModal(false);
    setEditUserModal(false);
    setShowMap(false);
  };

  const handleEdit = (customer) => {
    setEditUserModal(true);
    setEditUserDetails(customer);
  };

  const handleView = (customer) => {
    setViewUserModal(true);
    setViewUserDetails(customer);
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
      setFilteredCustomers(customers); // Show all customers
    } else {
      const filtered = customers.filter(
        (customer) => customer.userSubtype === option
      );
      setFilteredCustomers(filtered);
    }
  };
  const handleDelete = async (customerId) => {
    const response = await deleteCustomer(customerId);
    console.log(response);
    if (response.status === 200) {
      window.location.reload();
    } else {
      console.log("Failed to delete");
    }
  };


  const handleShowMap = () => {
    setShowMap(true);
  }
  return (
    <div className="w-full px-7 pb-0 bg-[#edece8] h-screen overflow-y-auto">
      <div className="pt-14">
        <div className="flex justify-between items-end">
          <div className="flex gap-2">
            <p className="text-xl font-bold">Customers</p>
          </div>
          <div className="flex gap-3 items-center">
            <button className="m-0 px-4 py-2 bg-green-500 rounded-md hover:bg-green-400 " onClick={handleShowMap}><FontAwesomeIcon className="mx-1" icon={faLocationDot} /> locations</button>
            {showMap && <Hotels_maps locations={locations} onClose={handleonClose}/>}
            <div className="">
              <select
                className="p-2 outline-none rounded-md bg-white border cursor-pointer hover:border-blue-400 focus:border-blue-600"
                onChange={(e) => handleFilterChange(e.target.value)}
                value={filterOption}
              >
                <option value="All">All</option>
                <option value="Households">Households</option>
                <option value="Industry">Industry</option>
                <option value="Hotel">Hotel</option>
                <option value="Hospital">Hospital</option>
                <option value="School">School</option>
                <option value="Shop">Shop</option>
                <option value="Mandi">Mandi</option>
                <option value="Cattle-Farm">Cattle-Farm</option>
              </select>
            </div>
            <button
              className="m-0 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400 hover:text-white"
              onClick={handleAddUserModal}
            >
              Add Customer
            </button>
          </div>
        </div>
        {addUserModal && <AddUser onClose={handleonClose} type="customer" />}
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
                <th className="px-4 py-2 ">Customer Id</th>
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
                <th className="px-4 py-2 ">Status </th>
                <th className="px-4 py-2 ">User Subtype</th>
                <th className="px-4 py-2 ">Actions</th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="">
              {filteredCustomers.map((customer, index) => (
                <tr className="" key={customer._id}>
                  <td className=" px-4 py-3 font-medium">
                    {(pageFromParams - 1) * 10 + index + 1}
                  </td>
                  <td
                    className=" px-4 py-3 font-medium text-blue-500 hover:text-blue-400 cursor-pointer"
                    onClick={() => handleView(customer)}
                  >
                    {`${customer.name.split(" ")[0]}${customer.phone
                      .toString()
                      .slice(-4)}${customer.dob.replace(/-/g, "")}`}
                  </td>
                  <td className=" px-4 py-3 font-medium">{customer.name}</td>
                  <td className=" px-4 py-3 font-medium">{customer.email}</td>
                  <td className=" px-4 py-3 font-medium">
                    {customer.userStatus}
                  </td>
                  <td className=" px-4 py-3 font-medium ">
                    {customer.userSubtype}
                  </td>
                  <td className=" px-4 py-3 font-medium">
                    <FontAwesomeIcon
                      icon={faPen}
                      className="cursor-pointer hover:text-blue-500"
                      onClick={() => handleEdit(customer)}
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => handleDelete(customer._id)}
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
          {viewUserModal && (
            <Viewuser onClose={handleonClose} data={viewUserDetails} />
          )}
        </div>
      </div>
      {/* Pagination */}
      <div className="flex justify-center px-3 mx-auto my-4 mb-0 gap-3 items-center w-fit">
        {pageFromParams !== 1 && (
          <Link to={`/customerlist/?page=${pageFromParams - 1}`}>
            <div
              className="border bg-white pb-2 pt-1 px-3 rounded-full font-bold hover:border-black cursor-pointer"
              onClick={prevPage}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
          </Link>
        )}
        <div className={`w-fit px-3 rounded-full bg-white my-4 py-1 `}>
          {[...Array(customersCount)].map((_, index) => (
            <Link className="mx-2" to={`/customerlist/?page=${index + 1}`}>
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
        {pageFromParams !== customersCount && (
          <Link to={`/customerlist/?page=${pageFromParams + 1}`}>
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
export default CustomerList;
