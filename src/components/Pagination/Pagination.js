import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ setPageNumber, pageNumber, info }) => {
    // States
    const [width, setWidth] = useState(window.innerWidth);
    // Function for width handling
    const updateDimension = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimension);
        return () =>  window.removeEventListener("resize", updateDimension);
    }, [])

    return (
        <>
            <style jsx>               
                {`
                    @media (max-width: 768px){
                        .next, 
                        .prev {
                            display: none;
                        }
                    }   .pagination {
                            font-size: 14px;
                    }             
                `}               
            </style>
            <ReactPaginate 
                className="pagination justify-content-center gap-4 my-3"
                nextLabel="Next"
                nextClassName="btn btn-info fs-5 next"           
                previousLabel="Prev"
                previousClassName="btn btn-info fs-5 prev"
                forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
                activeClassName="active"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                pageRangeDisplayed={1}
                marginPagesDisplayed={width < 576 ? 1 : 2}            
                onPageChange={(data) => {
                    setPageNumber(data.selected + 1)}}
                pageCount={info?.pages} />
        </>
    )
}

export default Pagination
