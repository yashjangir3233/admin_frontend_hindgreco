import React,{useState} from 'react'
import { updateProduct } from '../../../../services/productApi';

const EditElectronic = ({onClose,data}) => {
    const [editDetails,setEditDetails] = useState(data);
    
    const handleEditChange = (e) => {
        setEditDetails({...editDetails,[e.target.name]:e.target.value});
    }
    const handleEditSubmit = async (e) => {
        e.preventDefault();
        let res = await updateProduct(editDetails,editDetails._id);
        if(res.status === 200){
            alert('successfully updated');
            window.location.reload();
            onClose();
        }
        else{
            alert(res.response.data.error);
        }
    }
  return (
    <div className='fixed inset-0 text-white bg-opacity-30 flex justify-center items-center bg-black '>
        <div className="relative bg-[#fffefe] text-black p-[50px] rounded overflow-scroll">
            <h1 className='text-center mb-7 text-2xl font-semibold'>Add New Book</h1>
            <div className='flex flex-col '>
                <div className="flex">
                    {/* <div className="relative">
                        <p className={`absolute text-sm text-red-600 bg-white px-1 ${newElectronic.name === "" ? 'left-4 -top-1' : 'hidden'}`}>required</p> */}
                    <input name='name' type="text" value={editDetails.name} className={`w-[300px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm`} placeholder='Name' onChange={handleEditChange} />
                    {/* </div> */}
                    <input name='brand' type="text" value={editDetails.brand} className={`w-[300px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm }`} placeholder='Brand' onChange={handleEditChange} />
                    {/* <input name='publisher' type="publisher" className={`w-[200px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm`} placeholder='Publisher' onChange={handleEditChange} /> */}
                </div>
                <input name='description' type="text" value={editDetails.description} className='w-[97%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Description' onChange={handleEditChange}/>
                <div className="flex">
                    <input name='tags' type="text" value={editDetails.tags} className={`w-[30%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm`} placeholder='Tags' onChange={handleEditChange} />
                    <input name='year' type="number" value={editDetails.year} className='w-[30%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Year' onChange={handleEditChange}/>
                    {/* <div className="relative w-[30%]">
                        <p className={`absolute text-sm text-red-600 bg-white px-1 ${newElectronic.price === "" ? 'left-4 -top-1' : 'hidden'}`}>required</p> */}
                    <input name='price' type="number" value={editDetails.price} className={`w-[32%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm`} placeholder='Price' onChange={handleEditChange} />
                    {/* </div> */}
                </div>
            <div className='flex justify-between px-3'>
              <button className=' text-white bg-red-500 px-4 py-2 rounded-md w-[48%] hover:bg-red-400' onClick={onClose} >Cancel</button>
              <button className='px-4 py-2 bg-blue-500 text-white rounded-md w-[47%] hover:bg-blue-400' onClick={handleEditSubmit}>Add</button>
            </div>
            </div>     
        </div>
    </div>
  )
}

export default EditElectronic