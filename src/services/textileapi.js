import axios from "axios";
const URL =process.env.REACT_APP_URL;
const api_key = process.env.REACT_APP_EMP_API_KEY


export const getTextileDirect = async (currPage) => {
    try{
        let response = await axios.get(`/textile/directsaletextile/${currPage}`,{
            headers:{
                'authorization':`EMP_API_KEY ${api_key}`
            }
        });
        return response
    }catch(e){
        console.log('error while retrievig all the textile direct list',e)
        return e;
    }
}

export const getTextileAuction = async (currPage) => {
    try{
        let response = await axios.get(`/textile/auctiontextile/${currPage}`,{
            headers:{
                'authorization':`EMP_API_KEY ${api_key}`
            }
        });
        return response
    }catch(e){
        console.log('error while retrievig all the textile auction list',e)
        return e;
    }
}

export const addProductTextile = async (data) => {
    try{
        let response = await axios.post(`/textile/addtextile/`,data,{
            headers:{
                'authorization':`EMP_API_KEY ${api_key}`,
                'Content-Type':'multipart/form-data'
            }
        });
        return response
    }catch(e){
        console.log('error while adding textile product',e)
        return e;
    }
}
export const updateProductTextile = async (data,id) => {
    try{
        let response = await axios.post(`/textile/edittextile/${id}`,data,{
            headers:{
                'authorization':`EMP_API_KEY ${api_key}`,
                'Content-Type':'multipart/form-data'
            }
        });
        return response
    }catch(e){
        console.log('error while updating textile product',e)
        return e;
    }
}

export const deleteTextileImage = async (id,filename) => {
    try{
        let response = await axios.delete(`/textile/deletetextileimage/${id}/${filename}`,{
            headers:{
                'authorization':`EMP_API_KEY ${api_key}`
            }
        });
        return response
    }catch(e){
        console.log('error while deleting the image',e)
        return e;
    }
}

