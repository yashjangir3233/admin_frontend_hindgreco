import React,{useEffect,useState} from 'react'
import { Link,useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight,faSort,faPen,faTrash } from '@fortawesome/free-solid-svg-icons'
import { getAllRedeemPoints } from '../../services/redeempointsapi';

const Redeempoints = () => {

  const [searchParams] = useSearchParams();
    const [pageFromParams,setPageFromParams] = useState(parseInt(searchParams.get('page')) ? parseInt(searchParams.get('page')) : 1);
    const [redeemPoints,setredeemPoints] = useState([]);
    // const [addTransactionModal,setAddTransactionModal] = useState(false);
    // const [editTransactionModal,setEditTransactionModal] = useState(false);
    // const [viewTransactionModal,setViewTransactionModal] = useState(false);
    const [redeemPointsCount,setRedeemPointsCount] = useState(0);
    // const [editTransactionDetails,setEditTransactionDetails] = useState({});
    // const [viewTransactionDetails,setViewTransactionDetails] = useState({});
    
    useEffect(() => {
        const fetchRedeemPoints = async () => {
            let response = await getAllRedeemPoints(pageFromParams);
            console.log(response);
            if(response.status === 200){
                setredeemPoints(response.data.data);
                setRedeemPointsCount(Math.ceil(response.data.redeemPointsCount/10));
            }
        }
        fetchRedeemPoints();
    },[pageFromParams])

    const handleonClose = () => {
        // setAddTransactionModal(false);
        // setEditTransactionModal(false); 
        // setViewTransactionModal(false);
        // setRefreshFlag(!refreshFlag);
    }
    const handleModalShow = () => {
        // setAddTransactionModal(true);
    }
    const handleEdit = (transaction) => {
        // setEditTransactionModal(true);
        // setEditTransactionDetails(transaction);
    }
    const handleView = (transaction) => {
        // setViewTransactionModal(true);
        // setViewTransactionDetails(transaction);
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
        <div className='pt-14'>
            <div className="flex justify-between items-end">
                <p className='text-xl font-bold'>RedeemPoints</p>
                <div className="flex gap-3">
                <button className='m-0 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400 hover:text-white' onClick={handleModalShow}>Add RedeemPoints</button>
                <input type="text" placeholder='search' className='px-2 outline-none rounded-md bg-white border hover:border-blue-400 focus:border-blue-600' />
                </div>
                </div>
            {/* {addTransactionModal && (<Addtransaction onClose={handleonClose} />)} */}
            <div className="min-w-fit border rounded-2xl mt-3 bg-white shadow-xl">
                <table className="table-auto w-full">
                    <thead className=''>
                        <tr className='border text-left bg-gray-300'>
                            <th className="px-4 py-2 ">S. No. <FontAwesomeIcon className="ml-2 cursor-pointer" icon={faSort} /></th>
                            <th className="px-4 py-2 ">Id</th>
                            <th className="px-4 py-2 ">User Id</th>
                            <th className="px-4 py-2 ">Request Id</th>
                            <th className="px-4 py-2 ">Points <FontAwesomeIcon className="ml-2 cursor-pointer" icon={faSort} /></th>
                            <th className="px-4 py-2 ">CO2 reduced</th>
                            <th className="px-4 py-2 ">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {redeemPoints.map((redeemPoint,index) => (
                            <tr className="">
                            <td className=" px-4 py-3 font-medium">{(pageFromParams-1)*10+index+1}</td>
                            <td className=" px-4 py-3 font-medium text-blue-500 hover:text-blue-400 cursor-pointer" onClick={() => {handleView(redeemPoint)}}>{redeemPoint._id}</td>
                            <td className=" px-4 py-3 font-medium">{redeemPoint.user_id}</td>
                            <td className=" px-4 py-3 font-medium">{redeemPoint.request_id}</td>
                            <td className=" px-4 py-3 font-medium">{redeemPoint.totalPoints}</td>
                            <td className=" px-4 py-3 font-medium">{redeemPoint.CO2_reduced}</td>
                            <td className=" px-4 py-3 font-medium"><FontAwesomeIcon icon={faPen} className='cursor-pointer hover:text-blue-500' onClick={() => handleEdit(redeemPoint)} /><FontAwesomeIcon icon={faTrash} className='mx-5 cursor-pointer hover:text-red-400' /></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                {/* {editTransactionModal && (<Edittransaction onClose={handleonClose} data={editTransactionDetails}/>)}
                {viewTransactionModal && (<Viewtransaction onClose={handleonClose} data={viewTransactionDetails}/>)} */}
            </div>
        </div>
        <div className="flex justify-center px-3 mx-auto my-4 mb-0 gap-3 items-center w-fit">
            {
                pageFromParams !== 1 && (
                    <Link to = {`/redeempointslist/?page=${pageFromParams-1}`}>
                        <div className="border bg-white pb-2 pt-1 px-3 rounded-full font-bold hover:border-black cursor-pointer" onClick={prevPage}><FontAwesomeIcon icon={faChevronLeft}/></div>
                    </Link>
                )
            }
            <div className={`w-fit px-3 rounded-full bg-white my-4 py-1 `}>
            {
                [...Array(redeemPointsCount)].map((_,index) => <Link className='mx-2' to={`/redeempointslist/?page=${index+1}`}><button className={`px-3 py-1 border border-white font-bold rounded-full hover:border-gray-900 ${index+1 === parseInt(pageFromParams) ? 'bg-gray-700 text-white' : ''} `} onClick={() =>handlePaginationClick(index)}>{index+1}</button></Link>)
            }
            </div>
            {
                pageFromParams !== redeemPointsCount && (
                    <Link to={`/redeempointslist/?page=${pageFromParams+1}`}>
            <div className="border bg-white pb-2 pt-1 px-3 rounded-full font-bold hover:border-black cursor-pointer" onClick={nextPage}><FontAwesomeIcon icon={faChevronRight}/></div>
            </Link>
                )
            }

        </div>
    </div>
  )
}

export default Redeempoints