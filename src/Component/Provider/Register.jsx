import { useContext } from "react";
import { AuthContex } from "./AuthProvider";
import { NavLink } from "react-router-dom";
import lotti from '../../assets/animation-registration.json'
import Swal from "sweetalert2";
import Lottie from "lottie-react";


const Register = () => {

  const {handleRegister,setUser,updateUserProfile} = useContext(AuthContex)

  function handleSubmit(e){
    e.preventDefault()
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const pass = form.pass.value;

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (!passwordRegex.test(pass)) {
      Swal.fire({
        title: "Invalid Password!",
        text: "Password must have an uppercase letter, a lowercase letter, and be at least 6 characters long.",
        icon: "error",
        draggable: true,
      });
      return;
    }

     handleRegister(email,pass)
     .then((userCredential) => {
      const create = userCredential.user;
      setUser(create)
      // console.log(create)
      updateUserProfile({
        displayName: name, photoURL: photo
      })
      .then((data)=>{
        setUser(data)
        console.log('update user');
        Swal.fire({
                  title: "Registered Successfully!",
                  icon: "success",
                  draggable: true
                });
      })
      .catch(err=> Swal.fire(err.message))
    })
    .catch((error) => {
     
      const errorMessage = error.message;
      console.log(errorMessage);
       Swal.fire({
              position: "top-end",
              icon: "error",
              title: "Sorry! Can't Logged In!",
              showConfirmButton: false,
              timer: 1500
            });
    });

    const userObj = {
      name,
      email,
      photo,
      pass
    }

    console.log(userObj);
  }

;

  return (
    <div>
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">

    <div className="text-center p-6 lg:text-left">
      <h1 className="text-5xl font-bold text-red-600">Register now!</h1>
    <div className="w-2/3 py-6 mx-auto">
        <Lottie animationData={lotti}></Lottie>
    </div>
    </div>

    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleSubmit}>
      <h2 className="text-3xl font-bold text-center text-green-700">Create Your Account</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="text" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="url" name="photo" placeholder="Photo URL" className="input input-bordered" defaultValue={'https://i.ibb.co.com/W2fXTxK/clothes3.jpg'} required />
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
          <button className="btn btn-success">Register</button>
        </div>
        <p className="text-center font-bold">All-Ready Have An Account? <NavLink className={'text-green-700 text-lg'} to={'/login'}>Log In</NavLink></p>
      </form>
    </div>
  </div>
        </div>
    </div>
  )
}

export default Register


