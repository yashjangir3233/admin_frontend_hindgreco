import axios from "axios";
const URL =process.env.REACT_APP_URL;
const api_key = process.env.REACT_APP_EMP_API_KEY

export const getAllRedeemPoints = async (currPage) => {
    try{
        let response = await axios.get(`/redeempoints/allredeempoints/${currPage}`,{
            headers:{
                'authorization':`EMP_API_KEY ${api_key}`
            }
        });
        return response;
    }catch(e){
        console.log('error while retrievig all the redeempoints',e)
        return e;
    }
}
