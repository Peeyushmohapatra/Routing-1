import React from 'react'
import {Link, Outlet} from "react-router-dom"

const Technologies = () => {
  return (
    <div style={{height:"90vh",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <div style={{height:"70%",width:"70%",boxShadow:"0 0 10px black",display:"flex"}}>
        <div style={{height:"100%",width:"30%",backgroundColor:"black",color:"white",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"}}>
          <Link to="html">HTML</Link>
          <Link to="css">CSS</Link>
          <Link to="js">JS</Link>
          <Link to="react">React</Link>
        </div>
        <div style={{height:"100%",width:"70%",padding:"10px 20px"}}>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Technologies