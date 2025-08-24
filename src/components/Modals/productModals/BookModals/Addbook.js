import React, { useState } from 'react'
import { addProduct } from '../../../../services/productApi';

const Addbook = ({onClose}) => {
    const [newBook,setNewBook] = useState({
        name:"",description:"",author:"",publisher:"",year:"",tags:"",price:"",product_type:"books"
    })

    const handleAddBookChange = (e) => {
        setNewBook({...newBook,[e.target.name]:e.target.value});
    }

    const handleAddBookSubmit = async (e) => {
        e.preventDefault();
        const requiredFields = ['name', 'price'];
        const emptyFields = requiredFields.filter(field => newBook[field] === "");
        if(emptyFields.length > 0) {
            alert(`please fill in all required fields ${emptyFields.join(", ")}`);
            return;
        }
        let res = await addProduct(newBook);
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
                        <p className={`absolute text-sm text-red-600 bg-white px-1 ${newBook.name === "" ? 'left-4 -top-1' : 'hidden'}`}>required</p>
                        <input name='name' type="text" className={`w-[200px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm ${newBook.name === "" ? "border-red-600" : ""}`} placeholder='Name' onChange={handleAddBookChange} />
                    </div>
                    <input name='author' type="text" className={`w-[200px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm }`} placeholder='Author' onChange={handleAddBookChange} />
                    <input name='publisher' type="publisher" className={`w-[200px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm`} placeholder='Publisher' onChange={handleAddBookChange} />
                </div>
                <input name='description' type="text" className='w-[97%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Description' onChange={handleAddBookChange}/>
                <div className="flex">
                    <input name='tags' type="text" className={`w-[30%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm`} placeholder='Tags' onChange={handleAddBookChange} />
                    <input name='year' type="number" className='w-[30%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Year' onChange={handleAddBookChange}/>
                    <div className="relative w-[30%]">
                        <p className={`absolute text-sm text-red-600 bg-white px-1 ${newBook.price === "" ? 'left-4 -top-1' : 'hidden'}`}>required</p>
                        <input name='price' type="number" className={`w-full outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm ${newBook.price === "" ? "border-red-600" : ""}`} placeholder='Price' onChange={handleAddBookChange} />
                    </div>
                </div>
            <div className='flex justify-between px-3'>
              <button className=' text-white bg-red-500 px-4 py-2 rounded-md w-[48%] hover:bg-red-400' onClick={onClose} >Cancel</button>
              <button className='px-4 py-2 bg-blue-500 text-white rounded-md w-[47%] hover:bg-blue-400' onClick={handleAddBookSubmit}>Add</button>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Addbook