import React from "react"
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";



function Navbar() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/signup');
  };
  const handleClick2 = () => {
    navigate('/login');
  };



    return (
      <>
         <nav className="bg-black p-4 flex justify-between items-center fixed top-0 left-0 w-full shadow-lg z-50">
        <div className="flex items-center space-x-4">
          <img
            className="h-16 w-16 object-contain"
            src="/fitbuddy logo.jpg"
            alt="Fitbuddy Logo"
          />
          <span className="text-white text-xl font-bold">FitBuddy</span>
        </div>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex">
            <Link to="../home" className="text-white block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="../feedback" className="text-white block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link to="/diet" className="text-white block px-3 py-2 rounded-md text-base font-medium">
              Diet Chart
            </Link>
            <Link to="/calculator" className="text-white block px-3 py-2 rounded-md text-base font-medium">
              Calorie Calculator
            </Link>
          </div>
        {/* Buttons Section */}
        <div className="flex space-x-3">
          <button
            onClick={handleClick}
            className="text-white bg-red-600 hover:bg-red-700 py-2 px-4 rounded"
          >
            Sign Up
          </button>
          <button
            onClick={handleClick2}
            className="text-white bg-red-600 hover:bg-red-700 py-2 px-4 rounded"
          >
            Log In
          </button>
        </div>
      </nav>
</>
    )
}
export default Navbar