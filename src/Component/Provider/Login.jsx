import { useContext } from "react";
import { AuthContex } from "./AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import login from '../../assets/public/login.json'

const Login = () => {

  const { handleSignin,signInGoogle,setUser} = useContext(AuthContex)
   const navigate = useNavigate()
   const location = useLocation();

   const from = location?.state

  //  console.log(from,'from');

    function handleGoogleLogin(){
      signInGoogle()
      .then((result) => {
        setUser(result.user)
        Swal.fire({
          title: "Logged In!",
          icon: "success",
          draggable: true
        }) 
        navigate(from || '/')
      }).catch((error) => {  
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Sorry! Something Happen Wrong!",
          showConfirmButton: false,
          timer: 1500
        });
     
      });
    }

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
                title: "Logged In!",
                icon: "success",
                draggable: true
              }) 
              navigate(from || '/')
    })
    .catch((error) => {    
      const errorMessage = error.message;
      console.log(errorMessage);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Sorry! Something Happen Wrong!",
        showConfirmButton: false,
        timer: 1500
      });
    
    });

    from.reset()
  }


  return (
    <div>
       <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">

  <div className="text-center p-6 ">
      <h1 className="text-5xl font-bold">Log In now!</h1>
    <div className="w-2/3 py-6 mx-auto">
        <Lottie animationData={login}></Lottie>
    </div>
    </div>

    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleLogin}>
      <h2 className="text-3xl font-bold text-center text-blue-700">Login Your Account</h2>
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
          <button className="btn btn-outline" onClick={handleGoogleLogin}>Google LogIn</button>
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