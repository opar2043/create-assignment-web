import { useContext } from "react";
import { AuthContex } from "./AuthProvider";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Login = () => {

  const { handleSignin,handleGoogleLogin,user,setUser} = useContext(AuthContex)
   const navigate = useNavigate()

  function handleLogin(e){
    e.preventDefault()
    const form = e.target;

    // const name = form.name.value;
    const email = form.email.value;
    // const photo = form.photo.value;
    const pass = form.pass.value;

    handleSignin(email,pass)
    .then((userCredential) => {
   
      const logged = userCredential.user;
      console.log(logged);
      setUser(logged)
      Swal.fire({
                title: "Created Assignment Successfully!",
                icon: "success",
                draggable: true
              }) 
              navigate('/')
    })
    .catch((error) => {    
      const errorMessage = error.message;
      console.log(errorMessage);
    
    });

    // const userObj = {
    //   name,
    //   email,
    //   // photo,
    //   // pass
    // }

    
    // console.log(userObj);
  }


  return (
    <div>
       <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
      
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="pass" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary mb-3">LogIn</button>
          <button className="btn btn-outline" onClick={()=>handleGoogleLogin()}>Google LogIn</button>
        </div>
        <p className="text-center font-bold">Don't Have An Account? <NavLink className={'text-red-500 text-lg'} to={'/register'}>Register</NavLink></p>
      </form>
    </div>
  </div>
        </div>
    </div>
  )
}

export default Login