import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = (props)=>{

    const {Component} = props;

    const token = Cookies.get("jwt_token")
    const navigate = useNavigate()
    
    useEffect(()=>{
        if(token === undefined){
          navigate("/login")
        }
      },[])

      return(
        <>
            <Component/>
        </>
      )
}

export default ProtectedRoute;