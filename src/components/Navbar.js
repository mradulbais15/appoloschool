import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (






   <nav class="navbar navbar-expand-lg  mynavbg " style={{backgroundColor:'#fcd469'}}>
  <div class="container-fluid" style={{marginTop:'5em'}}>
    <a class="navbar-brand logotxt" href="#"><span>APPOLO</span>SCHOOL</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Tools</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Support</a>
        </li>

        <li class="nav-item">
          <a class="nav-link " id="inlog" aria-disabled="true">Login</a>
        </li>

        
      </ul>
      
    </div>
  </div>
</nav>
    // <nav className="bg-blue-600 text-white  mynav">
    //   <div className="container mx-auto flex justify-between items-center p-4">
    //     <div className="text-xl font-bold">
    //       <Link to="/">Springdale Public School</Link>
    //     </div>
    //     <div className="md:hidden">
    //       <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
    //         <svg
    //           className="w-6 h-6"
    //           fill="none"
    //           stroke="currentColor"
    //           viewBox="0 0 24 24"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           {isOpen ? (
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M6 18L18 6M6 6l12 12"
    //             />
    //           ) : (
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M4 6h16M4 12h16m-7 6h7"
    //             />
    //           )}
    //         </svg>
    //       </button>
    //     </div>
    //     <div className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
    //       <Link to="/" className="block px-4 py-2 text-sm md:text-base hover:bg-blue-700 md:hover:bg-transparent">
    //         Home
    //       </Link>
    //       <Link to="/about" className="block px-4 py-2 text-sm md:text-base hover:bg-blue-700 md:hover:bg-transparent">
    //         About Us
    //       </Link>
    //       <Link to="/academics" className="block px-4 py-2 text-sm md:text-base hover:bg-blue-700 md:hover:bg-transparent">
    //         Academics
    //       </Link>
    //       <Link to="/admissions" className="block px-4 py-2 text-sm md:text-base hover:bg-blue-700 md:hover:bg-transparent">
    //         Admissions
    //       </Link>
    //       <Link to="/faculty" className="block px-4 py-2 text-sm md:text-base hover:bg-blue-700 md:hover:bg-transparent">
    //         Faculty
    //       </Link>
    //       <Link to="/students" className="block px-4 py-2 text-sm md:text-base hover:bg-blue-700 md:hover:bg-transparent">
    //         Students
    //       </Link>
    //       <Link to="/gallery" className="block px-4 py-2 text-sm md:text-base hover:bg-blue-700 md:hover:bg-transparent">
    //         Gallery
    //       </Link>
    //       <Link to="/contact" className="block px-4 py-2 text-sm md:text-base hover:bg-blue-700 md:hover:bg-transparent">
    //         Contact Us
    //       </Link>
    //     </div>
    //   </div>
    // </nav>
  );
};

export default Navbar;
