import axios from "axios";
const URL =process.env.REACT_APP_URL;
const api_key = process.env.REACT_APP_EMP_API_KEY


export const getAllResources = async (currPage) => {
    try{
        let response = await axios.get(`/resources/allresources/${currPage}`,{
            headers:{
                'authorization':`EMP_API_KEY ${api_key}`
            }
        });
        return response;
    }catch(e){
        console.log('error while retrievig all the resources',e)
        return e;
    }
}

export const addNewResource = async (data) => {
    try{
        let response = await axios.post(`/resources/addresource`,data,{
            headers:{
                'authorization':`EMP_API_KEY ${api_key}`
            }
        });
        return response;
    }catch(e){
        console.log('error while adding resource on front end',e);
        return e;
    }
}

export const updateResource = async (data,resourceId) => {
    try{
        let response = await axios.post(`/resources/updateresource/${resourceId}`,data,{
            headers:{
                'authorization':`EMP_API_KEY ${api_key}`
            }
        });
        return response;
    }catch(e){
        console.log('error while updating resource on front end',e);
        return e;
    }
}
