import { Container } from '@mui/material';
import React, { useContext, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import FilterBlock from '../components/FilterBlock';
import ErbolPagination from '../components/ErbolPagination';
import ProductCard from '../components/ProductCard';
import { clientContext } from '../contexts/ClientContext'

const MainPage = () => {
  const data = useContext(clientContext)
  const {getProducts,products,handlePagination} = data;


  useEffect(()=>{
    getProducts()
  },[])

return (<div>
  <Container>
  <div>
    <FilterBlock getProducts={getProducts}/>
  </div>
  <InfiniteScroll 
  dataLength = {products.length}
  next ={handlePagination}
  hasMore = {true}
  loader = {<h3>Loading..</h3>}
  >

    <div className='products-list'>
      {
        products.map((item)=>(
          <ProductCard key = {item.id} item = {item}/>

        ))
      }
    </div>
  </InfiniteScroll>
  </Container>
  </div>
)
    }

export default MainPage;
