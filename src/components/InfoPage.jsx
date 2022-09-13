import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { Link, useParams } from "react-router-dom";

const InfoPage = (props) => {
    const { id } = useParams();
    const [product,setProduct]=useState({});
    useEffect(()=>{

        axios.get('http://localhost:8000/api/products/'+id)
            .then(res=>setProduct(res.data.user))
            .catch(err=>console.log(err))
    },[])
  return (
    <div> 
        <h1>Info</h1>
        <h1>Title: {product.title}</h1>
        <h1>Price: ${product.price}</h1>
        <h1>Description: {product.description}</h1>
        <br />
        <br />
        <Link to={"/"}>Back</Link>
    </div>

  )
}

export default InfoPage