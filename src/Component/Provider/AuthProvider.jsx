import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import  { createContext, useEffect, useState } from 'react'
import auth from '../Firebase/Firebase.config';
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

   

    const googleProvider = new GoogleAuthProvider();
    function handleGoogleLogin() {
      setLoading(true);
      return signInWithPopup(auth, googleProvider)
    
    }

    // Update User Profile
   function updateUserProfile(updatedata){
    return updateProfile(auth.currentUser,updatedata);
   }

    // on outh state 
    
    useEffect(()=>{
     const unSub = onAuthStateChanged(auth, (createUser) => {
        if (createUser) {
           setUser(createUser)
           console.log(createUser,'here i am user');
        } else {
          setUser(null)
          // console.log(user,'null');
        }
        setLoading(false)
      });

      return ()=> unSub()
    },[])

 

    const obj = {
       handleRegister,
       handleSignin,
       handleGoogleLogin,
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