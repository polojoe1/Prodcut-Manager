import React from 'react'
import { Link } from 'react-router-dom';

const OneProduct = ({product}) => {
    
    
  return (<>
    <hr />

    
    <Link to={"/products/"+product._id}><h3>Title: {product.title}</h3></Link>
    <hr />
  </>)
}

export default OneProduct