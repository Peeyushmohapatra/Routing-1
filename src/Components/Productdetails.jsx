import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Productdetails = () => {
    
    useEffect(() => {
        apiCall();
    },[])
    
    const {id} = useParams();
    const [apiData,setApidata] = useState("")

    async function apiCall(){
        const api = await fetch(`https://fakestoreapi.com/products/${id}`);
        const apiResponse = await api.text();
        const jsonData = JSON.parse(apiResponse)
        setApidata(jsonData);
    }

    const navigate = useNavigate()
  return (
    <div style={{width:"100%",height:"87vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div style={{height:"60%",width:"60%",boxShadow:"0 0 10px black",display:"flex",alignItems:"center",gap:"10px"}}>
            <img height="80%" width="40%" src={apiData.image} alt="" />
            <div style={{height:"100%",width:"60%",display:"flex",justifyContent:"space-evenly",flexDirection:"column"}}>
                <div>
                <b>Category</b>
                <p>{apiData.category}</p>
                </div>
                <div>
                <b>Price</b>
                <p>$ {apiData.price}</p>
                </div>
                <div>
                <b>Description</b>
                <p>{apiData.description}</p>
                </div>
                
                <button onClick={() => {
                    navigate("/product")
                }}>Back</button>
            </div>
        </div>
    </div>
  )
}

export default Productdetails