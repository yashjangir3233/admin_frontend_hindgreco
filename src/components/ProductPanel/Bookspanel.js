import React, { useEffect, useState } from 'react';
import { getAllBooks } from '../../services/productApi';
import { Link,useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight,faSort,faPen,faTrash } from '@fortawesome/free-solid-svg-icons'
import Addbook from '../Modals/productModals/BookModals/Addbook';
import Editbook from '../Modals/productModals/BookModals/Editbook';
import Viewbook from '../Modals/productModals/BookModals/Viewbook';

const Bookspanel = () => {
    const [searchParams] = useSearchParams();
    const [pageFromParams,setPageFromParams] = useState(parseInt(searchParams.get('page')) ? parseInt(searchParams.get('page')) : 1);
    const [books,setBooks] = useState([]);
    const [addBookModal,setAddBookModal] = useState(false);
    const [editBookModal,setEditBookModal] = useState(false);
    const [viewBookModal,setViewBookModal] = useState(false);
    const [booksCount,setBooksCount] = useState(0);
    const [editBookDetails,setEditBookDetails] = useState({});
    const [viewBookDetail,setViewBookDetail] = useState({});

    useEffect(() => {
        const fetchBooks = async () => {
            let response = await getAllBooks(pageFromParams);
            // console.log(response);
            if(response.status === 200){
                setBooks(response.data.data);
                setBooksCount(Math.ceil(response.data.booksCount/10));
            }
        }
        fetchBooks();
    },[pageFromParams]);

    const handleonClose = () => {
        setAddBookModal(false);
        setEditBookModal(false); 
        setViewBookModal(false);
        // setRefreshFlag(!refreshFlag);
    }
    const handleModalShow = () => {
        setAddBookModal(true);
    }
    const handleEdit = (book) => {
        setEditBookModal(true);
        setEditBookDetails(book);
    }
    const handleView = (book) => {
        setViewBookModal(true);
        setViewBookDetail(book);
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
    <div className='pt-14 '>
        <div className="flex justify-between items-end">
        <p className='text-xl font-bold'>Books</p>
        <div className="flex gap-3">
        <button className='m-0 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-400 hover:text-white' onClick={handleModalShow}>Add Books</button>
        <input type="text" placeholder='search' className='px-2 outline-none rounded-md bg-white border hover:border-blue-400 focus:border-blue-600' />
        </div>
        </div>
        {addBookModal && (<Addbook onClose={handleonClose} />)}
        <div className="min-w-fit border rounded-2xl mt-3 bg-white shadow-xl">
            <table className="table-auto w-full ">
                <thead className=''>
                    <tr className='border text-left bg-gray-300 rounded-3xl'>
                        <th className="px-4 py-2 ">S. No. <FontAwesomeIcon className="ml-2 cursor-pointer" icon={faSort} /></th>
                        <th className="px-4 py-2 ">Book Id</th>
                        <th className="px-4 py-2 ">Name</th>
                        <th className="px-4 py-2 ">Author</th>
                        <th className="px-4 py-2 ">Publisher</th>
                        <th className="px-4 py-2 ">Price <FontAwesomeIcon className="ml-2 cursor-pointer" icon={faSort} /></th>
                        <th className="px-4 py-2 ">year</th>
                        <th className="px-4 py-2 ">Actions</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {books.map((book,index) => (
                        <tr className="">
                        <td className="px-4  py-3 font-medium">{(pageFromParams-1)*10+index+1}</td>
                        <td className="px-4  py-3 font-medium text-blue-500 hover:text-blue-400 cursor-pointer" onClick={() => {handleView(book)}}>{book._id}</td>
                        <td className="px-4  py-3 font-medium">{book.name}</td>
                        <td className="px-4  py-3 font-medium">{book.author}</td>
                        <td className="px-4  py-3 font-medium">{book.publisher}</td>
                        <td className="px-4  py-3 font-medium">{book.price}</td>
                        <td className="px-4  py-3 font-medium">{book.year}</td>
                        <td className="px-4  py-3 font-medium"><FontAwesomeIcon icon={faPen} className='cursor-pointer hover:text-blue-500' onClick={() => handleEdit(book)} /><FontAwesomeIcon icon={faTrash} className='mx-5 cursor-pointer hover:text-red-400' /></td>
                    </tr>
                    ))}
                </tbody>
            </table>
            {editBookModal && (<Editbook onClose={handleonClose} data={editBookDetails}/>)}
            {viewBookModal && (<Viewbook onClose={handleonClose} data={viewBookDetail}/>)}
        </div>
    </div>
    <div className="flex justify-center px-3 mx-auto my-4 mb-0 gap-3 items-center w-fit">
        {
            pageFromParams !== 1 && (
                <Link to = {`/booklist/?page=${pageFromParams-1}`}>
                    <div className="border bg-white pb-2 pt-1 px-3 rounded-full font-bold hover:border-black cursor-pointer" onClick={prevPage}><FontAwesomeIcon icon={faChevronLeft}/></div>
                </Link>
            )
        }
        <div className={`w-fit px-3 rounded-full bg-white my-4 py-1 `}>
        {
            [...Array(booksCount)].map((_,index) => <Link className='mx-2' to={`/booklist/?page=${index+1}`}><button className={`px-3 py-1 border border-white font-bold rounded-full hover:border-gray-900 ${index+1 === parseInt(pageFromParams) ? 'bg-gray-700 text-white' : ''} `} onClick={() =>handlePaginationClick(index)}>{index+1}</button></Link>)
        }
        </div>
        {
            pageFromParams !== booksCount && (
                <Link to={`/booklist/?page=${pageFromParams+1}`}>
        <div className="border bg-white pb-2 pt-1 px-3 rounded-full font-bold hover:border-black cursor-pointer" onClick={nextPage}><FontAwesomeIcon icon={faChevronRight}/></div>
        </Link>
            )
        }

    </div>
</div>
  )
}

export default Bookspanel