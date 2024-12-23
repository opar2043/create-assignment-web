import { useContext } from "react"
import { AuthContex } from "./AuthProvider"
import { Navigate } from "react-router-dom"


const Privateroute = ({children}) => {
    
    const {user,loading} = useContext(AuthContex)

    if(loading){
        <span className="loading loading-spinner loading-3xl text-center mx-auto"></span>
    }

    if(user){
         return children 
    }
  return <Navigate to={'/'}></Navigate>

}

export default Privateroute