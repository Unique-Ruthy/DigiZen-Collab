import { UserContext } from "../context/useContext"
import { useContext } from "react"
import { Outlet,Navigate } from "react-router-dom"

const Auth = ()=>{
    const {data} = useContext(UserContext)
    return(
        <div>
            {data ? <Outlet/> :
             <Navigate to ='/LoginForm'/> }
        </div>
    )
}

export default Auth