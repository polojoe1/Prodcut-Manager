import React ,{useState}from 'react'
import axios from 'axios'
const Form = (props) => {
    const [title,setTitle]=useState("");
    const [price,setPrice]=useState(0);
    const [description,setDescription]=useState("");
    const [errors, setErrors] = useState([]); 

    const createProduct = (e)=>{
        e.preventDefault();
        let newProduct = {title,price,description};
        axios.post("http://localhost:8000/api/products/",newProduct)
        .then(res=>console.log(res))
        .catch(err=>{
          const errorResponse = err.response.data.errors;
          const errorArr = [];
          for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
            errorArr.push(errorResponse[key].message)
        }
        // Set Errors
        setErrors(errorArr);
    })
        setTitle("");
        setPrice(0);
        setDescription("");
    }
  return (
    <div>
        <form onSubmit={createProduct}>
        {errors.map((err, index) => <p key={index}>{err}</p>)}
            Title: <input type="text" onChange={(e)=>{setTitle(e.target.value)}} value={title}/><br /><br />
            Price: <input type="number" onChange={(e)=>{setPrice(e.target.value)}} value={price}/><br /><br />
            Description: <input type="text" onChange={(e)=>{setDescription(e.target.value)}} value={description} /><br /><br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form