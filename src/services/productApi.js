import axios from 'axios';
const URL =process.env.REACT_APP_URL;
const api_key = process.env.REACT_APP_EMP_API_KEY

export const getAllBooks = async (currPage) => {
    try{
        let response = await axios.get(`/product/allbooks/${currPage}`,{
            headers:{
                'authorization':`EMP_API_KEY ${api_key}`
            }
        });
        return response;
    }catch(e){
        console.log('error while retrievig all the books',e)
        return e;
    }
}

export const getAllElectronics = async (currPage) => {
    try{
        let response = await axios.get(`/product/allelectronics/${currPage}`,{
            headers:{
                'authorization':`EMP_API_KEY ${api_key}`
            }
        });
        return response;
    }catch(e){
        console.log('error while retrievig all the electronics',e)
        return e;
    }
}

export const addProduct = async (data) => {
    try{
        let response = await axios.post(`/product/addproduct`,data,{
            headers:{
                'authorization':`EMP_API_KEY ${api_key}`
            }
        });
        return response;
    }catch(e){
        console.log('error while adding product',e)
        return e;
    }
}

export const updateProduct = async (data,productId) => {
    try{
        let response = await axios.post(`/product/updateproduct/${productId}`,data,{
            headers:{
                'authorization':`EMP_API_KEY ${api_key}`
            }
        });
        return response;
    }catch(e){
        console.log('error while updating product',e)
        return e;
    }
}
