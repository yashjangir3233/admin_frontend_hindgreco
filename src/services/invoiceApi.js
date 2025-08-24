import axios from 'axios';
const URL =process.env.REACT_APP_URL;
const api_key = process.env.REACT_APP_EMP_API_KEY


export const createInvoice = async (data) => {
    try {
      let response = await axios.post(`/invoice-billing/createinvoice`, data,{
        headers:{
            'authorization':`EMP_API_KEY ${api_key}`
        }
    });
     
      return response;
    } catch (e) {
      console.log("error while adding new invoice on frontend: ", e);
      return e;
    }
  };
  
export const getInvoices=async(data)=>{
    try {
        let response = await axios.get(`/invoice-billing/getinvoices`, data,{
          headers:{
              'authorization':`EMP_API_KEY ${api_key}`
          }
      });
       
        return response;
      } catch (e) {
        console.log("error while getting invoice on frontend: ", e);
        return e;
      }
}

export const getInvoiceById=async(data,invoiceId)=>{
    try {
        let response = await axios.get(`/invoice-billing/getinvoicebyid/${invoiceId}`, data,{
          headers:{
              'authorization':`EMP_API_KEY ${api_key}`
          }
      });
       
        return response;
      } catch (e) {
        console.log("error while getting invoice by id on frontend: ", e);
        return e;
      }
}

export const updateInvoice = async (data,invoiceId) => {
    try{
        let response = await axios.post(`/invoice-billing/updateinvoice/${invoiceId}`,data,{
          headers:{
              'authorization':`EMP_API_KEY ${api_key}`
          }
      });
        return response;
    }catch(e){
        console.log('error while updating invoice',e)
        return e;
    }
}

export const deleteInvoice = async (invoiceId) => {
    try {
      let response = await axios.delete(`/invoice-billing/deleteinvoice/${invoiceId}`,{
        headers:{
            'authorization':`EMP_API_KEY ${api_key}`
        }
    });
      return response;
    } catch (er) {
      console.log("error while counting invoice on front end", er);
      return er;
    }
  };

  export const countInvoices = async () => {
    try {
      let response = await axios.get(`/invoice-billing/countinvoice`,{
        headers:{
            'authorization':`EMP_API_KEY ${api_key}`
        }
    });
      return response;
    } catch (e) {
      return e;
    }
  };
