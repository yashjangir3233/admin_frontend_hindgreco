import React,{useEffect,useState} from 'react';
import { getAllResources } from '../../services/resourceapi';
import Addresource from '../Modals/resourceModals/Addresource';
import Editresource from '../Modals/resourceModals/Editresource';
import Viewresource from '../Modals/resourceModals/Viewresource';
import { Link,useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight,faSort,faPen,faTrash } from '@fortawesome/free-solid-svg-icons'

const Resources = () => {

  const [searchParams] = useSearchParams();
  const [pageFromParams,setPageFromParams] = useState(parseInt(searchParams.get('page')) ? parseInt(searchParams.get('page')) : 1);
  const [resources,setResources] = useState([]);
  const [addResourceModal,setAddResourceModal] = useState(false);
  const [editResourceModal,setEditResourceModal] = useState(false);
  const [viewResourceModal,setViewResourceModal] = useState(false);
  const [resourceCount,setResourceCount] = useState(0);
  const [editResourceDetails,setEditResourceDetails] = useState({});
  const [viewResourceDetails,setViewResourceDetails] = useState({});

  useEffect(() => {
    const fetchResources = async () => {
        let response = await getAllResources(pageFromParams);
        if(response.status === 200){
            setResources(response.data.data);
            setResourceCount(Math.ceil(response.data.resourceCount/10));
        }
    }
    fetchResources();
},[pageFromParams])

const handleonClose = () => {
  setAddResourceModal(false);
  setEditResourceModal(false); 
  setViewResourceModal(false);
  // setRefreshFlag(!refreshFlag);
}
const handleModalShow = () => {
  setAddResourceModal(true);
}
const handleEdit = (resource) => {
  setEditResourceModal(true);
  setEditResourceDetails(resource);
}
const handleView = (resource) => {
  setViewResourceModal(true);
  setViewResourceDetails(resource);
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
        {/* <h1 className='text-center text-3xl'>All Transactions Lists</h1> */}
        <div className='pt-14'>
            <div className="flex justify-between items-end">
                <p className='text-xl font-bold'>Resources</p>
                <div className="flex gap-3">
                <button className='m-0 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400 hover:text-white' onClick={handleModalShow}>Add Resource</button>
                <input type="text" placeholder='search' className='px-2 outline-none rounded-md bg-white border hover:border-blue-400 focus:border-blue-600' />
                </div>
                </div>
            {addResourceModal && (<Addresource onClose={handleonClose} />)}
            <div className="min-w-fit border rounded-2xl mt-3 bg-white shadow-xl">
                <table className="table-auto w-full">
                    <thead className=''>
                        <tr className='border text-left bg-gray-300'>
                            <th className="px-4 py-2 ">S. No. <FontAwesomeIcon className="ml-2 cursor-pointer" icon={faSort} /></th>
                            <th className="px-4 py-2 ">Resource Id</th>
                            <th className="px-4 py-2 ">Name</th>
                            <th className="px-4 py-2 ">Type of Resource <FontAwesomeIcon className="ml-2 cursor-pointer" icon={faSort} /></th>
                            <th className="px-4 py-2 ">Current Price <FontAwesomeIcon className="ml-2 cursor-pointer" icon={faSort} /></th>
                            <th className="px-4 py-2 ">Last Price <FontAwesomeIcon className="ml-2 cursor-pointer" icon={faSort} /></th>
                            <th className="px-4 py-2 ">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {resources.map((resource,index) => (
                            <tr className="">
                            <td className=" px-4 py-3 font-medium">{(pageFromParams-1)*10+index+1}</td>
                            <td className=" px-4 py-3 font-medium text-blue-500 hover:text-blue-400 cursor-pointer" onClick={() => {handleView(resource)}}>{resource._id}</td>
                            <td className=" px-4 py-3 font-medium">{resource.name}</td>
                            <td className=" px-4 py-3 font-medium">{resource.type_of_resource}</td>
                            <td className=" px-4 py-3 font-medium">{resource.current_price}</td>
                            <td className=" px-4 py-3 font-medium">{resource.last_price}</td>
                            <td className=" px-4 py-3 font-medium"><FontAwesomeIcon icon={faPen} className='cursor-pointer hover:text-blue-500' onClick={() => handleEdit(resource)} /><FontAwesomeIcon icon={faTrash} className='mx-5 cursor-pointer hover:text-red-400' /></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                {editResourceModal && (<Editresource onClose={handleonClose} data={editResourceDetails}/>)}
                {viewResourceModal && (<Viewresource onClose={handleonClose} data={viewResourceDetails}/>)}
            </div>
        </div>
        <div className="flex justify-center px-3 mx-auto my-4 mb-0 gap-3 items-center w-fit">
            {
                pageFromParams !== 1 && (
                    <Link to = {`/resourcelist/?page=${pageFromParams-1}`}>
                        <div className="border bg-white pb-2 pt-1 px-3 rounded-full font-bold hover:border-black cursor-pointer" onClick={prevPage}><FontAwesomeIcon icon={faChevronLeft}/></div>
                    </Link>
                )
            }
            <div className={`w-fit px-3 rounded-full bg-white my-4 py-1 `}>
            {
                [...Array(resourceCount)].map((_,index) => <Link className='mx-2' to={`/resourcelist/?page=${index+1}`}><button className={`px-3 py-1 border border-white font-bold rounded-full hover:border-gray-900 ${index+1 === parseInt(pageFromParams) ? 'bg-gray-700 text-white' : ''} `} onClick={() =>handlePaginationClick(index)}>{index+1}</button></Link>)
            }
            </div>
            {
                pageFromParams !== resourceCount && (
                    <Link to={`/resourcelist/?page=${pageFromParams+1}`}>
            <div className="border bg-white pb-2 pt-1 px-3 rounded-full font-bold hover:border-black cursor-pointer" onClick={nextPage}><FontAwesomeIcon icon={faChevronRight}/></div>
            </Link>
                )
            }

        </div>
    </div>
  )
}

export default Resources