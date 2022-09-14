import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { Link, useParams, useNavigate } from "react-router-dom";

const InfoPage = (props) => {
    const { id } = useParams();
    const [product,setProduct]=useState({});
    const navigate = useNavigate();
    useEffect(()=>{

        axios.get('http://localhost:8000/api/products/'+id)
            .then(res=>setProduct(res.data.user))
            .catch(err=>console.log(err))
    },[])
    const updateNote = (id)=>{
      navigate("/update/products/"+id)
    }
    const deleteNote = (id)=>{
      axios.delete('http://localhost:8000/api/products/'+id)
      .then(res=>navigate("/"))
      .catch(err=>console.log(err))
    }
  return (
    <div> 
        <h1>Info</h1>
        <h1>Title: {product.title}</h1>
        <h1>Price: ${product.price}</h1>
        <h1>Description: {product.description}</h1>
        <br />
        <br />
        <Link to={"/"}>Back</Link>
        <hr />
        <button onClick={()=>{updateNote(product._id)}}>Edit</button>
        <p></p>
        <button onClick={()=>{deleteNote(product._id)}} style={{backgroundColor:"black",color:"white"}}>Delete</button>
    </div>

  )
}

export default InfoPage