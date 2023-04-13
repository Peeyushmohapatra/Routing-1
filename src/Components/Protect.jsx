import React, { Children } from 'react'
import { CustomContext } from './Context'
import { Navigate } from 'react-router-dom';

const Protect = ({children}) => {
    const {state} = CustomContext();
    if(state){
        return children
    }else{
        return <Navigate to='/'/>
    }
}

export default Protect