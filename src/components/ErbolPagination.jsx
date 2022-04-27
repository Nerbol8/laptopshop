import React, {useContext} from 'react';
import {Button, Pagination } from '@mui/material'
import { clientContext } from '../contexts/ClientContext';

const ErbolPagination = ()=>{
  const data =useContext(clientContext)
  const {totalCount,productsPerPage,handlePagination} = data
  const totalPages = Math.ceil(totalCount/productsPerPage)
  return (
    <div className='erbol-pagination'>
      <Button variant='outlined' onClick={handlePagination}>Показать еще</Button>
    </div>
  )
}
export default ErbolPagination