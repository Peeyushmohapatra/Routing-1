import React from 'react'
import { CustomContext } from './Context'

const Login = () => {
  const {state,setState} = CustomContext()

  return (
    <div style={{height:"300px",width:"20%",boxShadow:"0 0 10px black",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"flex-start",padding:"10px 15px",marginTop:"50px"}}>
        <label>User Name</label>
        <input type="text" />
        <label>Password</label>
        <input type="password" />
        <button onClick={() => {
          setState(true)
        }}>Login</button>
    </div>
  )
}

export default Login