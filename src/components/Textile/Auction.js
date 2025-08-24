import React, { useEffect, useState } from 'react'
import { Link,useSearchParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight,faSort,faPen,faTrash } from '@fortawesome/free-solid-svg-icons'
import { useSearchParams } from 'react-router-dom'
import { getTextileAuction } from '../../services/textileapi'


function Auction() {

    const [products,setProducts] = useState([])
    const [productCount,setPRoductCount] = useState(0)
    const [searchParams] = useSearchParams()
    const [pageFromParams,setPageFromParams] = useState(searchParams.get('page') ? searchParams.get('page') : 1)

    useEffect(()=> {
        const fetchAuctionsales = async () => {
            let res = await getTextileAuction(pageFromParams)
            if(res.status === 200){
                setProducts(res.data.data)
                setPRoductCount(Math.ceil(res.data.dataCount/10))
            }
        }
        fetchAuctionsales();
    },[pageFromParams])

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
        <p className='text-xl font-bold'>Textile Auction Sale</p>
        <div className="flex gap-3">
        <button className='m-0 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400 hover:text-white' >Add Auction</button>
        <input type="text" placeholder='search' className='px-2 outline-none rounded-md bg-white border hover:border-blue-400 focus:border-blue-600' />
        </div>
        </div>
        {/* {addElectronicsModal && (<AddElectronic onClose={handleonClose} />)} */}
        <div className="overflow-auto border rounded-2xl mt-3 bg-white shadow-xl">
            <table className="table-auto w-full ">
                <thead className=''>
                    <tr className='border text-left bg-gray-300 rounded-3xl'>
                        <th className="px-4 py-2 ">S. No. <FontAwesomeIcon className="ml-2 cursor-pointer" icon={faSort} /></th>
                        <th className="px-4 py-2 ">Type of Sale <FontAwesomeIcon className="ml-2 cursor-pointer" icon={faSort} /></th>
                        <th className="px-4 py-2 ">Product Id</th>
                        <th className="px-4 py-2 ">Material</th>
                        <th className="px-4 py-2 ">Weight</th>
                        <th className="px-4 py-2 ">Vendor Id <FontAwesomeIcon className="ml-2 cursor-pointer" icon={faSort} /></th>
                        <th className="px-4 py-2 ">Status</th>
                        <th className="px-4 py-2 ">Actions</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {products.map((product,index) => (
                        <tr className="">
                        <td className="px-4  py-3 font-medium">{(pageFromParams-1)*10+index+1}</td>
                        <td className="px-4  py-3 font-medium">{product.type_of_sale}</td>
                        <td className="px-4  py-3 font-medium text-blue-500 hover:text-blue-400 cursor-pointer" onClick={() => {handleView(product)}}>{product._id}</td>
                        <td className="px-4  py-3 font-medium">{product.material}</td>
                        <td className="px-4  py-3 font-medium">{product.weight}</td>
                        <td className="px-4  py-3 font-medium">{product.vendor_id}</td>
                        <td className="px-4  py-3 font-medium">{product.status}</td>
                        <td className="px-4  py-3 font-medium"><FontAwesomeIcon icon={faPen} className='cursor-pointer hover:text-blue-500' onClick={() => handleEdit(product)} /><FontAwesomeIcon icon={faTrash} className='mx-5 cursor-pointer hover:text-red-400' /></td>
                    </tr>
                    ))}
                </tbody>
            </table>
            {/* {editElectronicsModal && (<EditElectronic onClose={handleonClose} data={editElectronicsDetail}/>)}
            {viewElectronicsModal && (<ViewElectronic onClose={handleonClose} data={viewElectronicsDetail}/>)} */}
        </div>
    </div>
    <div className="flex justify-center px-3 mx-auto my-4 mb-0 gap-3 items-center w-fit">
        {
            pageFromParams !== 1 && (
                <Link to = {`/textileauctionlist/?page=${pageFromParams-1}`}>
                    <div className="border bg-white pb-2 pt-1 px-3 rounded-full font-bold hover:border-black cursor-pointer" onClick={prevPage}><FontAwesomeIcon icon={faChevronLeft}/></div>
                </Link>
            )
        }
        <div className={`w-fit px-3 rounded-full bg-white my-4 py-1 `}>
        {
            [...Array(productCount)].map((_,index) => <Link className='mx-2' to={`/textileauctionlist/?page=${index+1}`}><button className={`px-3 py-1 border border-white font-bold rounded-full hover:border-gray-900 ${index+1 === parseInt(pageFromParams) ? 'bg-gray-700 text-white' : ''} `} onClick={() =>handlePaginationClick(index)}>{index+1}</button></Link>)
        }
        </div>
        {
            pageFromParams !== productCount && (
                <Link to={`/textileauctionlist/?page=${pageFromParams+1}`}>
        <div className="border bg-white pb-2 pt-1 px-3 rounded-full font-bold hover:border-black cursor-pointer" onClick={nextPage}><FontAwesomeIcon icon={faChevronRight}/></div>
        </Link>
            )
        }

    </div>
</div>
  )
}

export default Auction