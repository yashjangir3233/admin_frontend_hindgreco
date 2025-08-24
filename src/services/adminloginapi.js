import axios from 'axios';
const URL =process.env.REACT_APP_URL;
const api_key = process.env.REACT_APP_EMP_API_KEY

export const adminloginapi = async (adminData) => {
    try{
        let response = await axios.post(`/admin/loginAdmin`,adminData);
        return response;    
    }catch(e){
        console.log('error while signing up admin',e);
        return e;
    }
}
