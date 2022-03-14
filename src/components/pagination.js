import React from 'react'
import { Pagination } from 'antd';


const PaginationComponent = ({pageChange}) => {



  return (
    <>
    
    <Pagination className='d-flex mt-4 ' style={{margin:'0',padding:0,listStyleType:'none',textDecoration:'none'}} onChange={pageChange} defaultCurrent={1} total={50} />
    </>
  )
}

export default PaginationComponent