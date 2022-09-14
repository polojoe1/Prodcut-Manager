import React,{useState, useEffect} from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';


const Update = (props) => {
    const [title,setTitle]=useState("");
    const [price,setPrice]=useState(0);
    const [description,setDescription]=useState("");
    const {id}=useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        
        
        axios.get("http://localhost:8000/api/products/"+id)
        .then(res=>{
            setTitle(res.data.user.title)
        setPrice(res.data.user.price)
        setDescription(res.data.user.description)
    })
        
    },[])
    const updateProduct = (e)=>{
        e.preventDefault();
        let newProduct = {title,price,description};
        axios.put("http://localhost:8000/api/products/"+id,newProduct)
        .then(navigate("/"))
        .catch(err=>console.log(err))
    }
  return (
    <div>
        <form onSubmit={updateProduct}>
            Title: <input type="text" onChange={(e)=>{setTitle(e.target.value)}} value={title}/><br /><br />
            Price: <input type="number" onChange={(e)=>{setPrice(e.target.value)}} value={price}/><br /><br />
            Description: <input type="text" onChange={(e)=>{setDescription(e.target.value)}} value={description} /><br /><br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Update