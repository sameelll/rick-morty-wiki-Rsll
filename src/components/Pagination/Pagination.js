import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ setPageNumber, pageNumber, info }) => {

    return (
        <ReactPaginate 
            className="pagination justify-content-center gap-4 my-3"
            nextLabel="Next"
            nextClassName="btn btn-warning fs-5 next"           
            previousLabel="Prev"
            previousClassName="btn btn-warning fs-5 prev"
            forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
            activeClassName="active"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            pageRangeDisplayed={1}
            marginPagesDisplayed={2}            
            onPageChange={(data) => {
                setPageNumber(data.selected + 1)}}
            pageCount={info?.pages} />
    )
}

export default Pagination
