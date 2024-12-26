import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,  signOut, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import  { createContext, useEffect, useState } from 'react'
import auth from '../Firebase/Firebase.config';
import axios from "axios";
export const AuthContex = createContext(null)

const AuthProvider = ({children}) => {

   const [loading,setLoading] = useState(true)
   const [user,setUser] = useState(null)
  //  console.log(user);
   
    //  register user
    function handleRegister(email,pass){
      setLoading(true)
      return createUserWithEmailAndPassword(auth,email,pass)
    }

    // Log In user 
    function handleSignin(email,pass){
      setLoading(true)
      return signInWithEmailAndPassword(auth,email,pass)
    }

    // sign Out 
    function handleLogout(){
      setLoading(true)
      return signOut(auth)
    }

  //  google provoider

        const googleProvider = new GoogleAuthProvider()
        function signInGoogle(){
          setLoading(true)
          return signInWithPopup(auth,googleProvider)
        }

   

    // Update User Profile
   function updateUserProfile(updatedata){
    return updateProfile(auth.currentUser,updatedata);
   }

    // on outh state 
    
    useEffect(()=>{
     const unSub = onAuthStateChanged(auth, (createUser) => {
        if (createUser?.email) {
           setUser(createUser)
           console.log(createUser,'here i am user');
           const user = {email: createUser?.email}

           axios.post('https://assignment-crub-fullstack.vercel.app/jwt', user,{withCredentials: true })
           .then(res => {
            console.log(res.data,'log in token');
            setLoading(false)

           })
        } 
        else {
          setUser(null)
          axios.post('https://assignment-crub-fullstack.vercel.app/logout',{},{
            withCredentials: true
          })
          .then(res => {
            setLoading(false)
            console.log(res.data , "user Logged Out")
          })
          
        }
      });

      return ()=> unSub()
    },[])

 

    const obj = {
       handleRegister,
       handleSignin,
       signInGoogle,
       handleLogout,
       user,setUser,
       updateUserProfile,
       loading,
       setLoading
    }

  return <AuthContex.Provider value={obj}>
     {children}
  </AuthContex.Provider>
}

export default AuthProvider