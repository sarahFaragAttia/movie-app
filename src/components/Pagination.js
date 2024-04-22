import ReactPaginate from "react-paginate"
import { useEffect, useState } from 'react'




const Pagination = ({ onAdd }) => {

   const [pageNumber, setPageNumber] = useState(1)
   const changePage = ({ selected }) => {
      setPageNumber(selected+1)

   }
  
   useEffect(() => { return onAdd(pageNumber) }, [pageNumber])

   return (
      <ReactPaginate
         breakLabel="..."
         pageCount={43494}
         onPageChange={changePage}
         pageRangeDisplayed={5}
         nextLabel=">"
         previousLabel="<"
         renderonZeroPageCount={null}
         containerClassName='paginate '
         marginPagesDisplayed={0}
         activeClassName="active"
      />

   )


}

export default Pagination;