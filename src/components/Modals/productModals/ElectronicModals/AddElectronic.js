import React,{useState} from 'react';
import { addProduct } from '../../../../services/productApi';

const AddElectronic = ({onClose}) => {
    const [newElectronic,setNewElectronic] = useState({
        name:"",description:"",tags:"",year:"",price:"",brand:"",product_type:"electronics"
    })
    
    const handleAddElectronicChange = (e) => {
        setNewElectronic({...newElectronic,[e.target.name]:e.target.value});
    }

    const handleAddElectronicSubmit = async (e) => {
        e.preventDefault();
        const requiredFields = ['name', 'price'];
        const emptyFields = requiredFields.filter(field => newElectronic[field] === "");
        if(emptyFields.length > 0) {
            alert(`please fill in all required fields ${emptyFields.join(", ")}`);
            return;
        }
        let res = await addProduct(newElectronic);
        if(res.status === 200){
            alert(res.data.message);
            window.location.reload();
            onClose();
        }else{
            alert(res.response.data.error);
        }
    }
  return (
    <div className='fixed inset-0 text-white bg-opacity-30 flex justify-center items-center bg-black '>
        <div className="relative bg-[#fffefe] text-black p-[50px] rounded overflow-scroll">
            <h1 className='text-center mb-7 text-2xl font-semibold'>Add New Book</h1>
            <div className='flex flex-col '>
                <div className="flex">
                    <div className="relative">
                        <p className={`absolute text-sm text-red-600 bg-white px-1 ${newElectronic.name === "" ? 'left-4 -top-1' : 'hidden'}`}>required</p>
                        <input name='name' type="text" className={`w-[300px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm ${newElectronic.name === "" ? "border-red-600" : ""}`} placeholder='Name' onChange={handleAddElectronicChange} />
                    </div>
                    <input name='brand' type="text" className={`w-[300px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm }`} placeholder='Brand' onChange={handleAddElectronicChange} />
                    {/* <input name='publisher' type="publisher" className={`w-[200px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm`} placeholder='Publisher' onChange={handleAddElectronicChange} /> */}
                </div>
                <input name='description' type="text" className='w-[97%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Description' onChange={handleAddElectronicChange}/>
                <div className="flex">
                    <input name='tags' type="text" className={`w-[30%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm`} placeholder='Tags' onChange={handleAddElectronicChange} />
                    <input name='year' type="number" className='w-[30%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Year' onChange={handleAddElectronicChange}/>
                    <div className="relative w-[30%]">
                        <p className={`absolute text-sm text-red-600 bg-white px-1 ${newElectronic.price === "" ? 'left-4 -top-1' : 'hidden'}`}>required</p>
                        <input name='price' type="number" className={`w-full outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm ${newElectronic.price === "" ? "border-red-600" : ""}`} placeholder='Price' onChange={handleAddElectronicChange} />
                    </div>
                </div>
            <div className='flex justify-between px-3'>
              <button className=' text-white bg-red-500 px-4 py-2 rounded-md w-[48%] hover:bg-red-400' onClick={onClose} >Cancel</button>
              <button className='px-4 py-2 bg-blue-500 text-white rounded-md w-[47%] hover:bg-blue-400' onClick={handleAddElectronicSubmit}>Add</button>
            </div>
            </div>     
        </div>
    </div>
  )
}

export default AddElectronic