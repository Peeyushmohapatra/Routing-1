import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Product = () => {
    useEffect(() => {
        apiCall()
    },[]);

    const [apiData,setApidata] = useState([]);

    async function apiCall(){
        const api = await fetch("https://fakestoreapi.com/products");
        const apiResponse = await api.json();
        setApidata(apiResponse)
    }
  return (
    <div style={{display: "grid",gridTemplateColumns: "1fr 1fr 1fr",gridGap: "15px",marginTop:"20px"}}>
        
            {apiData.length > 0 ? apiData.map((ele) => {
                return (
                    <div style={{height:"300px" , width:"300px",boxShadow:"0 0 10px black",padding:"5px 1rem"}} className="card">
                    <img height="70%" width="100%" src={ele.image} alt="" />
                    <p>{ele.category}</p>
                    <p>$ {ele.price}</p>
                    <Link to={`/productdetails/${ele.id}`}><button>Product Details</button></Link>
                    
                    </div>
                )
            }) :<h1>Error</h1> }
        
    </div>
  )
}

export default Product