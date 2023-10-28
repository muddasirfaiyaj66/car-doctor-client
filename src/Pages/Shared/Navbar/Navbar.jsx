import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";


const Navbar = () => {
  const {logOut,user} = useContext(AuthContext);
  const handleLogOut = ()=>{
    logOut()
    .then(()=>{
      Swal.fire({
        icon: 'success',
        title: 'See you again🥹',
        text: 'Successfully Log Out ',})
      
     

    })
    .catch(error => console.log(error.message))
  }

    const navlinks = <>
     <li> <NavLink to='/' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-[#FF3811]  text-white " : ""
  }>Home</NavLink></li>
     <li> <NavLink to='/about' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-[#FF3811]  text-white " : ""
  }>About</NavLink></li>
     <li> <NavLink to='/service' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-[#FF3811]  text-white " : ""
  }>Service</NavLink></li>
     <li> <NavLink to='/blog' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-[#FF3811]  text-white " : ""
  }>Blog</NavLink></li>
     <li> <NavLink to='/contact' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-[#00BA9C]  text-white " : ""
  }>Contact</NavLink></li>

  {
    user ? <button className="btn btn-warning bg-red-600 text-white" onClick={handleLogOut}>Log Out</button> :  <li> <NavLink to='/login' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-[#00BA9C]  text-white " : ""
  }>Log In</NavLink></li>
  }
    
    </>
    return (
        <div >
            <div className="navbar bg-base-100 h-28 mb-5">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm  text-black font-bold dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navlinks}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost hidden lg:flex normal-case text-xl">
        <img src="/src/assets/logo.svg" alt="" />
    </Link>
  </div>
  <div className="navbar-center ">

 <div className="flex justify-center text-center mr-12 items-center lg:hidden">
 <Link to='/' className="btn btn-ghost  lg:hidden normal-case text-xl">
        <img src="/src/assets/logo.svg" className="w-[50px]" alt="" />
    </Link>
 </div>

    <ul className="menu menu-horizontal hidden text-black font-bold lg:flex px-1  gap-4">
        {navlinks}
      
     
    </ul>
  </div>
  
  <div className="navbar-end">
  <button className="btn btn-outline border-[#FF3811] hover:bg-[#FF3811] hover:text-white  text-[#FF3811]  font-bold">Appointment</button>
  </div>
</div>
        </div>
    );
};

export default Navbar;