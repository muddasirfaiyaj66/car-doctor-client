import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const SignUp = () => {
    const {createUser}=useContext(AuthContext)
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const user ={name,email,password};
        createUser(email, password)
        .then(result =>{
            const user = result.user
            console.log(user);
        })
        .then(error=> {
            console.log(error);
        })
    }
    return (
        <div className="my-10">
        <div className="hero min-h-screen ">
<div className="hero-content flex-col lg:flex-row">
<div className="mr-12 w-1/2 ">
  <figure>
    <img src={img} alt="" />
  </figure>
</div>
<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
<h1 className="text-4xl my-10 font-medium text-center">Sign Up</h1>
  <form onSubmit={handleSignUp} className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Name</span>
      </label>
      <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" name="email" placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Confirm Password</span>
      </label>
      <input type="password" name="password" placeholder="password" className="input input-bordered" required />
     
    </div>
    <div className="form-control mt-6">
      <button className="btn hover:bg-[#FF3880] bg-[#FF3811] text-white">Sign Up</button>
    </div>

  </form>
  <div >
    <h3 className="text-center font-bold mb-5">Or Sign Up with</h3>
    <div className="flex justify-center items-center gap-4 my-4">
        <button> <img src="/src/assets/icons/facebook.svg" className="rounded-full w-[55px] h-[55px] btn btn-sm " alt="" /></button>
        
        <button> <img src="/src/assets/icons/linkedin.svg" className="rounded-full w-[55px] h-[55px] btn btn-sm " alt="" /></button>
        
        <button> <img src="/src/assets/icons/google.svg" className="rounded-full w-[55px] h-[55px] btn  btn-sm" alt="" /></button>
        
    </div>
    <h3 className="font-medium text-center mt-4 mb-10 text-[#737373]">Already have an account? <span className="text-[#FF3811]"><Link to='/login'>Sign In</Link></span></h3>
  </div>
</div>
</div>
</div>
    </div>
    );
};

export default SignUp;