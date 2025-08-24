import React, { useEffect, useState } from 'react';
import { getAllElectronics } from '../../services/productApi';
import { Link,useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight,faSort,faPen,faTrash } from '@fortawesome/free-solid-svg-icons'
import AddElectronic from '../Modals/productModals/ElectronicModals/AddElectronic';
import EditElectronic from '../Modals/productModals/ElectronicModals/EditElectronic';
import ViewElectronic from '../Modals/productModals/ElectronicModals/ViewElectronic';

const Electronicspanel = () => {
  const [searchParams] = useSearchParams();
  const [pageFromParams,setPageFromParams] = useState(parseInt(searchParams.get('page')) ? parseInt(searchParams.get('page')) : 1);
  const [electronics,setElectronics] = useState([]);
  const [addElectronicsModal,setAddElectronicsModal] = useState(false);
  const [editElectronicsModal,setEditElectronicsModal] = useState(false);
  const [viewElectronicsModal,setViewElectronicsModal] = useState(false);
  const [electronicsCount,setElectronicsCount] = useState(0);
  const [editElectronicsDetail,setEditElectronicsDetail] = useState({});
  const [viewElectronicsDetail,setViewElectronicsDetail] = useState({});

  useEffect(() => {
    const fetchElectronics = async () => {
        let response = await getAllElectronics(pageFromParams);
        // console.log(response);
        if(response.status === 200){
            setElectronics(response.data.data);
            setElectronicsCount(Math.ceil(response.data.electronicsCount/10));
        }
    }
    fetchElectronics();
},[pageFromParams]);

const handleonClose = () => {
    setAddElectronicsModal(false);
    setEditElectronicsModal(false); 
    setViewElectronicsModal(false);
    // setRefreshFlag(!refreshFlag);
}
const handleModalShow = () => {
    setAddElectronicsModal(true);
}
const handleEdit = (electronic) => {
    setEditElectronicsModal(true);
    setEditElectronicsDetail(electronic);
}
const handleView = (electronic) => {
    setViewElectronicsModal(true);
    setViewElectronicsDetail(electronic);
}
const handlePaginationClick = (index) => {
    setPageFromParams(index+1);
}
const nextPage = () => {
    setPageFromParams(pageFromParams+1);
}
const prevPage = () => {
    setPageFromParams(pageFromParams-1);
}

  return (
    <div className='w-full px-7 pb-0 bg-[#edece8] h-screen overflow-y-auto'>
    {/* <h1 className='text-center text-3xl'>All Requests Lists</h1> */}
    <div className='pt-14'>
        <div className="flex justify-between items-end">
        <p className='text-xl font-bold'>Electronics</p>
        <div className="flex gap-3">
        <button className='m-0 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400 hover:text-white' onClick={handleModalShow}>Add Electronics</button>
        <input type="text" placeholder='search' className='px-2 outline-none rounded-md bg-white border hover:border-blue-400 focus:border-blue-600' />
        </div>
        </div>
        {addElectronicsModal && (<AddElectronic onClose={handleonClose} />)}
        <div className="overflow-auto border rounded-2xl mt-3 bg-white shadow-xl">
            <table className="table-auto w-full ">
                <thead className=''>
                    <tr className='border text-left bg-gray-300 rounded-3xl'>
                        <th className="px-4 py-2 ">S. No. <FontAwesomeIcon className="ml-2 cursor-pointer" icon={faSort} /></th>
                        <th className="px-4 py-2 ">Electronic Id</th>
                        <th className="px-4 py-2 ">Name</th>
                        <th className="px-4 py-2 ">Brand</th>
                        <th className="px-4 py-2 ">Price <FontAwesomeIcon className="ml-2 cursor-pointer" icon={faSort} /></th>
                        <th className="px-4 py-2 ">year</th>
                        <th className="px-4 py-2 ">Actions</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {electronics.map((electronic,index) => (
                        <tr className="">
                        <td className="px-4  py-3 font-medium">{(pageFromParams-1)*10+index+1}</td>
                        <td className="px-4  py-3 font-medium text-blue-500 hover:text-blue-400 cursor-pointer" onClick={() => {handleView(electronic)}}>{electronic._id}</td>
                        <td className="px-4  py-3 font-medium">{electronic.name}</td>
                        <td className="px-4  py-3 font-medium">{electronic.brand}</td>
                        <td className="px-4  py-3 font-medium">{electronic.price}</td>
                        <td className="px-4  py-3 font-medium">{electronic.year}</td>
                        <td className="px-4  py-3 font-medium"><FontAwesomeIcon icon={faPen} className='cursor-pointer hover:text-blue-500' onClick={() => handleEdit(electronic)} /><FontAwesomeIcon icon={faTrash} className='mx-5 cursor-pointer hover:text-red-400' /></td>
                        {/* <td className=" px-4 py-2 font-medium"><button className='border border-blue-400 text-blue-400 px-4 py-1 rounded-md w-fit mr-4 hover:bg-blue-400 hover:text-white' onClick={() => {handleEdit(request)}} >Edit</button><button className='border border-red-400 text-red-400 px-4 py-1 rounded-md w-fit hover:bg-red-400 hover:text-white'>Delete</button></td> */}
                    </tr>
                    ))}
                </tbody>
            </table>
            {editElectronicsModal && (<EditElectronic onClose={handleonClose} data={editElectronicsDetail}/>)}
            {viewElectronicsModal && (<ViewElectronic onClose={handleonClose} data={viewElectronicsDetail}/>)}
        </div>
    </div>
    <div className="flex justify-center px-3 mx-auto my-4 mb-0 gap-3 items-center w-fit">
        {
            pageFromParams !== 1 && (
                <Link to = {`/electronicslist/?page=${pageFromParams-1}`}>
                    <div className="border bg-white pb-2 pt-1 px-3 rounded-full font-bold hover:border-black cursor-pointer" onClick={prevPage}><FontAwesomeIcon icon={faChevronLeft}/></div>
                </Link>
            )
        }
        <div className={`w-fit px-3 rounded-full bg-white my-4 py-1 `}>
        {
            [...Array(electronicsCount)].map((_,index) => <Link className='mx-2' to={`/electronicslist/?page=${index+1}`}><button className={`px-3 py-1 border border-white font-bold rounded-full hover:border-gray-900 ${index+1 === parseInt(pageFromParams) ? 'bg-gray-700 text-white' : ''} `} onClick={() =>handlePaginationClick(index)}>{index+1}</button></Link>)
        }
        </div>
        {
            pageFromParams !== electronicsCount && (
                <Link to={`/electronicslist/?page=${pageFromParams+1}`}>
        <div className="border bg-white pb-2 pt-1 px-3 rounded-full font-bold hover:border-black cursor-pointer" onClick={nextPage}><FontAwesomeIcon icon={faChevronRight}/></div>
        </Link>
            )
        }

    </div>
</div>
  )
}

export default Electronicspanel