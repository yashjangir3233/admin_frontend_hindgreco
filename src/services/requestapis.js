import axios from "axios";
const URL =process.env.REACT_APP_URL;
const api_key = process.env.REACT_APP_EMP_API_KEY


export const getallRequests = async (currPage) => {
  try {
    let response = await axios.get(`/request/allrequests/${currPage}`,{
      headers:{
          'authorization':`EMP_API_KEY ${api_key}`
      }
  });
    return response;
  } catch (e) {
    console.log("error while retrievig all the requests", e);
    return e;
  }
};

export const addNewRequest = async (data) => {
  try {
    let response = await axios.post(`/request/addrequest`, data,{
      headers:{
          'authorization':`EMP_API_KEY ${api_key}`
      }
  });
    return response;
  } catch (e) {
    console.log("error while adding request on front end", e);
    return e;
  }
};

export const updateRequest = async (data, requestId) => {
  try {
    let response = await axios.post(
      `/request/updaterequest/${requestId}`,
      data,{
        headers:{
            'authorization':`EMP_API_KEY ${api_key}`
        }
    }
    );
    return response;
  } catch (e) {
    console.log("error while updating request on front end", e);
    return e;
  }
};

export const countRequest = async () => {
  try {
    let response = await axios.get(`/request/requestcount/`,{
      headers:{
          'authorization':`EMP_API_KEY ${api_key}`
      }
  });
    return response;
  } catch (e) {
    console.log("error while counting request on front end", e);
    return e;
  }
};
export const deleteRequest = async (requestId) => {
  try {
    let response = await axios.delete(`/request/delete/${requestId}`,{
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
