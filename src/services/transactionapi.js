import axios from "axios";
const URL =process.env.REACT_APP_URL;
const api_key = process.env.REACT_APP_EMP_API_KEY


export const getAllTransactions = async (currPage) => {
    try{
        let response = await axios.get(`/transaction/alltransactions/${currPage}`,{
            headers:{
                'authorization':`EMP_API_KEY ${api_key}`
            }
        });
        return response;
    }catch(e){
        console.log('error while getting all transaction in frontend',e);
        return e;
    }
}

export const addTransaction = async (data) => {
    try{
        let response = await axios.post(`/transaction/addtransaction`,data,{
            headers:{
                'authorization':`EMP_API_KEY ${api_key}`
            }
        });
        return response;
    }catch(e){
        console.log('error while adding transaction in frontend',e);
        return e;
    }
}

export const updateTransaction = async (data,transactionId) => {
    try{
        let response = await axios.post(`/transaction/updatetransaction/${transactionId}`,data,{
            headers:{
                'authorization':`EMP_API_KEY ${api_key}`
            }
        });
        return response;
    }catch(e){
        console.log('error while updating transaction on front end',e);
        return e;
    }
}
