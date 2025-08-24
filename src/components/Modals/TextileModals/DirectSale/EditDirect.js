import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight,faSort,faPen,faTrash } from '@fortawesome/free-solid-svg-icons'
import { deleteTextileImage, updateProductTextile } from '../../../../services/textileapi'

const EditDirect = ({onClose,data}) => {
    console.log(data)
    const {pics, ...remainingFields} = data
    const [editDetails,setEditDetails] = useState(remainingFields);
    const [images,setImages] = useState([]);
    const handleTextChange = (e) => {
        setEditDetails({...editDetails,[e.target.name]:e.target.value});
    }
    const handleImageDelete = async (image) => {

        const parts = image.split('/')
        const filename = parts[parts.length - 1]
        console.log(filename)
        let res = await deleteTextileImage(data._id,filename)
        if(res.status === 200){
            alert(res.data.message)
        }else{
            alert('error')
        }
    }

    const handleImagesChange = (e) => {
        setImages(e.target.files);
    }

    const handleEditSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData();

        for (let i =0;i<images.length;i++){
            formData.append('images',images[i])
        }

        for (const key in editDetails) {
            formData.append(key,editDetails[key]);
        }
       
        const requiredFields = ['material', 'title', 'weight', 'condition', 'start_price', 'vendor_id', 'vendor_name'];
        const emptyFields = requiredFields.filter(field => editDetails[field] === "");
        if(emptyFields.length > 0) {
            alert(`please fill in all required fields ${emptyFields.join(", ")}`);
            return;
        }

        let res = await updateProductTextile(formData,data._id);
        if(res.status === 200){
            alert('direct sale of textile updated successfully');
            window.location.reload();
            onClose();
        }else{
            // alert(res.response.data)
            console.log(res.response.data);
        }
    }
  return (
    <div className='fixed inset-0 text-white bg-opacity-30 flex justify-center items-center bg-black '>
        <div className="relative bg-[#fffefe] text-black p-[50px] rounded overflow-scroll">
            <h1 className='text-center mb-7 text-2xl font-semibold'>New Textile Product</h1>
            <form onSubmit={handleEditSubmit} className='flex flex-col '>
                <div className="flex">
                    {/* <div className="relative"> */}
                        {/* <p className={`absolute text-sm text-red-600 bg-white px-1 ${newDirectSale.material === "" ? 'left-4 -top-1' : 'hidden'}`}>required</p> */}
                        <input name='material' value={data.material} type="text" className={`w-[200px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm `} placeholder='Material' onChange={handleTextChange} />
                    {/* </div> */}
                    {/* <div className="relative">
                        <p className={`absolute text-sm text-red-600 bg-white px-1 ${newDirectSale.title === "" ? 'left-4 -top-1' : 'hidden'}`}>required</p> */}
                        <input name='title' value={data.title} type="text" className={`w-[200px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm `} placeholder='Title' onChange={handleTextChange} />
                    {/* </div> */}

                    {/* <div className="relative">
                        <p className={`absolute text-sm text-red-600 bg-white px-1 ${newDirectSale.weight === NaN ? 'left-4 -top-1' : 'hidden'}`}>required</p> */}
                        <input name='weight' value={data.weight} type="number" className={`w-[200px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm `} placeholder='Weight' onChange={handleTextChange} />
                    {/* </div> */}
                    
                    {/* <div className="relative">
                        <p className={`absolute text-sm text-red-600 bg-white px-1 ${newDirectSale.condition === "" ? 'left-4 -top-1' : 'hidden'}`}>required</p> */}
                        <input name='condition' value={data.condition} type="text" className={`w-[200px] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm `} placeholder='condition' onChange={handleTextChange} />
                    {/* </div> */}
                </div>

                <input name='description' value={data.description} type="text" className='w-[97%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Description' onChange={handleTextChange}/>
                
                <div className="flex">
                    <input name='other_details' value={data.other_details} type="text" className='w-[98%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Other Details' onChange={handleTextChange}/>
                </div>
                <div className="flex justify-between">
                    {data.images.map((image,index) => (
                        <div key={index} className="flex border border-black items-center">
                            {/* <div className=""></div> */}
                            <img src={image} alt="" className='w-32'/>
                            <FontAwesomeIcon icon={faTrash} className='mx-5 cursor-pointer hover:text-red-400' onClick={() => handleImageDelete(image)}/>
                        </div>
                    ))}
                </div>
                <div className="flex">
                    <input name='images' type="file" multiple className='w-[98%] outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md' placeholder='Images' onChange={handleImagesChange}/>
                </div>
                <div className="flex gap-5">
                    {/* <div className="relative w-[31%]">
                        <p className={`absolute text-sm text-red-600 bg-white px-1 ${newDirectSale.start_price === "" ? 'left-4 -top-1' : 'hidden'}`}>required</p> */}
                        <input name='start_price' value={data.start_price} type="number" className={`w-full outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm `} placeholder='Start Price' onChange={handleTextChange} />
                    {/* </div> */}
                    {/* <div className="relative w-[31%]">
                        <p className={`absolute text-sm text-red-600 bg-white px-1 ${newDirectSale.vendor_id === "" ? 'left-4 -top-1' : 'hidden'}`}>required</p> */}
                        <input name='vendor_id' value={data.vendor_id} type="text" className={`w-full outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm `} placeholder='Vendor Id' onChange={handleTextChange} />
                    {/* </div> */}
                    {/* <div className="relative w-[31%]">
                        <p className={`absolute text-sm text-red-600 bg-white px-1 ${newDirectSale.vendor_name === "" ? 'left-4 -top-1' : 'hidden'}`}>required</p> */}
                        <input name='vendor_name' value={data.vendor_name} type="text" className={`w-full outline-none border border-gray-400 h-8 ml-3 mr-3 mt-2 mb-4 p-2 rounded-md text-sm `} placeholder='Vendor Name' onChange={handleTextChange} />
                    {/* </div> */}
                </div>
            <div className='flex justify-between px-3'>
              <button type='submit' className='px-4 py-2 bg-blue-500 text-white rounded-md w-[47%] hover:bg-blue-400'>Update</button>
              <button className=' text-white bg-red-500 px-4 py-2 rounded-md w-[48%] hover:bg-red-400' onClick={onClose}>Cancel</button>
            </div>
            </form>
            
        </div>
    </div>
  )
}

export default EditDirect