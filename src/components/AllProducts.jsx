import React, {useState, useEffect} from 'react'
import axios from 'axios';
import OneProduct from './OneProduct';
import Form from './Form';

const AllProducts = (props) => {
    const [allProducts,setAllProducts]= useState([]);
    useEffect(()=>{
    axios.get('http://localhost:8000/api/products')
    .then(res=>setAllProducts(res.data))
    .catch(err=>console.log(err))
    },[allProducts]);
  return (
    <div>
        <Form/>
        <br />
        <br />
        {
            allProducts.map((product)=>{
                return(
                    <div key={product._id}>
                        
                        <OneProduct product={product}/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default AllProducts