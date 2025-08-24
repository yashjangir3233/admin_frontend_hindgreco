import React, { useState } from 'react'
import { addProductTextile } from '../../../../services/textileapi'

const AddDirect = ({onClose}) => {

    const [newDirectSale,setNewDirectSale] = useState({
        type_of_sale:'direct sale',material:'',title:'',description:'',weight:NaN,condition:'',other_details:'',start_price:NaN,vendor_id:'',vendor_name:''
    })
    const [images,setImages] = useState([])

    const handleImagesChange = (e) => {
        setImages(e.target.files)
    }

    const handleTextChange = (e) => {
        setNewDirectSale({...newDirectSale,[e.target.name]:e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()

        for (let i =0;i<images.length;i++){
            formData.append('images',images[i])
        }

        for (const key in newDirectSale) {
            formData.append(key,newDirectSale[key]);
        }

        const requiredFields = ['material', 'title', 'weight', 'condition', 'start_price', 'vendor_id', 'vendor_name'];
        const emptyFields = requiredFields.filter(field => newDirectSale[field] === "");
        if(emptyFields.length > 0) {
            alert(`please fill in all required fields ${emptyFields.join(", ")}`);
            return;
        }
        let res = await addProductTextile(formData)   
        console.log(res)
        if(res.status === 200)   {
            alert(res.data.message)
            window.location.reload();
            onClose();
        }
    }

  return (
    <div className='fixed inset-0 text-white bg-opacity-30 flex justify-center items-center bg-black '>
        <div className="relative bg-[#fffefe] text-black p-[50px] rounded overflow-scroll">
            <h1 className='text-center mb-7 text-2xl font-semibold'>New Textile Product</h1>
            <form onSubmit={handleSubmit} className='flex flex-col '>
                <div className="flex">
                    <div className="relative">
                        <p className={`absolute text-sm text-red-600 bg-white px-1 ${newDirectSale.material === "" ? 'left-4 -top-1' : 'hidden'}`}>required</p>
                        <input name='material' type="text" className={`w-[200px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm ${newDirectSale.material === "" ? "border-red-600" : ""}`} placeholder='Material' onChange={handleTextChange} />
                    </div>
                    <div className="relative">
                        <p className={`absolute text-sm text-red-600 bg-white px-1 ${newDirectSale.title === "" ? 'left-4 -top-1' : 'hidden'}`}>required</p>
                        <input name='title' type="text" className={`w-[200px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm ${newDirectSale.title === "" ? "border-red-600" : ""}`} placeholder='Title' onChange={handleTextChange} />
                    </div>

                    <div className="relative">
                        <p className={`absolute text-sm text-red-600 bg-white px-1 ${newDirectSale.weight === NaN ? 'left-4 -top-1' : 'hidden'}`}>required</p>
                        <input name='weight' type="number" value={newDirectSale.weight} className={`w-[200px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm ${newDirectSale.weight === NaN ? "border-red-600" : ""}`} placeholder='Weight' onChange={handleTextChange} />
                    </div>
                    
                    <div className="relative">
                        <p className={`absolute text-sm text-red-600 bg-white px-1 ${newDirectSale.condition === "" ? 'left-4 -top-1' : 'hidden'}`}>required</p>
                        <input name='condition' type="text" className={`w-[200px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm ${newDirectSale.condition === "" ? "border-red-600" : ""}`} placeholder='condition' onChange={handleTextChange} />
                    </div>
                </div>

                <input name='description' type="text" className='w-[97%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Description' onChange={handleTextChange}/>
                
                <div className="flex">
                    <input name='other_details' type="text" className='w-[98%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Other Details' onChange={handleTextChange}/>
                </div>
                <div className="flex">
                    <input name='images' type="file" multiple className='w-[98%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Images' onChange={handleImagesChange}/>
                </div>
                <div className="flex gap-5">
                    <div className="relative w-[31%]">
                        <p className={`absolute text-sm text-red-600 bg-white px-1 ${newDirectSale.start_price === "" ? 'left-4 -top-1' : 'hidden'}`}>required</p>
                        <input name='start_price' type="number" className={`w-full outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm ${newDirectSale.memberType === "" ? "border-red-600" : ""}`} placeholder='Start Price' onChange={handleTextChange} />
                    </div>
                    <div className="relative w-[31%]">
                        <p className={`absolute text-sm text-red-600 bg-white px-1 ${newDirectSale.vendor_id === "" ? 'left-4 -top-1' : 'hidden'}`}>required</p>
                        <input name='vendor_id' type="text" className={`w-full outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm ${newDirectSale.vendor_id === "" ? "border-red-600" : ""}`} placeholder='Vendor Id' onChange={handleTextChange} />
                    </div>
                    <div className="relative w-[31%]">
                        <p className={`absolute text-sm text-red-600 bg-white px-1 ${newDirectSale.vendor_name === "" ? 'left-4 -top-1' : 'hidden'}`}>required</p>
                        <input name='vendor_name' type="text" className={`w-full outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm ${newDirectSale.vendor_name === "" ? "border-red-600" : ""}`} placeholder='Vendor Name' onChange={handleTextChange} />
                    </div>
                </div>
            <div className='flex justify-between px-3'>
              <button type='submit' className='px-4 py-2 bg-blue-500 text-white rounded-md w-[47%] hover:bg-blue-400'>Add</button>
              <button className=' text-white bg-red-500 px-4 py-2 rounded-md w-[48%] hover:bg-red-400' onClick={onClose}>Cancel</button>
            </div>
            </form>
            
        </div>
    </div>
  )
}

export default AddDirect