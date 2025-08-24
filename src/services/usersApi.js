import axios from "axios";
const URL =process.env.REACT_APP_URL;
console.log(URL)
const api_key = process.env.REACT_APP_EMP_API_KEY


export const getAllUsers = async () => {
  try {
    let response = await axios.get(`/user/getAllUsers`,{
      headers:{
          'authorization':`EMP_API_KEY ${api_key}`
      }
  });
    return response;
  } catch (e) {
    console.log("eeeeee", e);
    return e;
  }
};
export const getAllVendors = async (currPage) => {
  try {
    console.log(URL)
    let response = await axios.get(`/user/getAllVendors/${currPage}`,{
      headers:{
          'authorization':`EMP_API_KEY ${api_key}`
      }
  });
    return response;
  } catch (e) {
    console.log("eeeeee", e);
    return e;
  }
};
export const getAllCustomers = async (currPage) => {
  try {
    let response = await axios.get(`/user/getAllCustomers/${currPage}`,{
      headers:{
          'authorization':`EMP_API_KEY ${api_key}`
      }
  });
    return response;
  } catch (e) {
    console.log("eeeeee", e);
    return e;
  }
};

export const addUser = async (data) => {
  try {
    let response = await axios.post(`/user/addUser`, data,{
      headers:{
          'authorization':`EMP_API_KEY ${api_key}`
      }
  });
    // console.log("jiuasdf ",response);
    return response;
  } catch (e) {
    console.log("error while adding new user on frontend: ", e);
    return e;
  }
};

export const editUser = async (data, userId) => {
  try {
    let response = await axios.post(`/user/editUser/${userId}`, data,{
      headers:{
          'authorization':`EMP_API_KEY ${api_key}`
      }
  });
    return response;
  } catch (e) {
    console.log("error while updating user in frontend", e);
    return e;
  }
};

export const countCustomer = async () => {
  try {
    let response = await axios.get(`/user/countcustomers`,{
      headers:{
          'authorization':`EMP_API_KEY ${api_key}`
      }
  });
    return response;
  } catch (e) {
    return e;
  }
};

export const countVendor = async () => {
  try {
    let response = await axios.get(`/user/countvendors`,{
      headers:{
          'authorization':`EMP_API_KEY ${api_key}`
      }
  });
    return response;
  } catch (e) {
    return e;
  }
};

export const searchCustomer = async (searchQuery, currPage) => {
  try {
    // console.log(searchQuery);
    // console.log(currPage);
    let response = await axios.get(
      `/user/searchcustomer?q=${searchQuery}&searchpage=${currPage}`,{
        headers:{
            'authorization':`EMP_API_KEY ${api_key}`
        }
    }
    );
    return response;
  } catch (e) {
    console.log(
      "error while fetching search results of customer in frontend",
      e
    );
    return e;
  }
};
export const searchVendor = async (searchQuery) => {
  try {
    console.log(searchQuery);
    let response = await axios.get(`/user/searchvendor?q=${searchQuery}`,{
      headers:{
          'authorization':`EMP_API_KEY ${api_key}`
      }
  });
    return response;
  } catch (e) {
    console.log("error while fetching search results of vendor in frontend", e);
    return e;
  }
};
export const deleteCustomer = async (customerId) => {
  try {
    let response = await axios.delete(`/user/delete/${customerId}`,{
      headers:{
          'authorization':`EMP_API_KEY ${api_key}`
      }
  });
    return response;
  } catch (er) {
    console.log("error while counting request on front end", er);
    return er;
  }
};
export const deleteVendor = async (customerId) => {
  try {
    let response = await axios.delete(`/user/delete/${customerId}`,{
      headers:{
          'authorization':`EMP_API_KEY ${api_key}`
      }
  });
    return response;
  } catch (er) {
    console.log("error while counting request on front end", er);
    return er;
  }
};
