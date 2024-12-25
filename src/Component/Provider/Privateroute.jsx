import { useContext } from "react"
import { AuthContex } from "./AuthProvider"
import { Navigate, useLocation } from "react-router-dom"
import Spiner from "../Pages/Spiner"


const Privateroute = ({children}) => {
    const location = useLocation()
    console.log(location,'private route');
    console.log(location?.pathname);  
     
    const {user,loading} = useContext(AuthContex)

    if (loading) {
      return <Spiner />;
    }

    if(user){
         return children 
    }
  return <Navigate to={'/login'} state={  location?.pathname }></Navigate>

}

export default Privateroute