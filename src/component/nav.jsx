import React from "react"
import { useNavigate } from 'react-router-dom';



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
          <nav className="bg-black-100 p-1 flex justify-between items-center">
            <div className="flex items-center">
                <img className="h-16 w-16 object-contain"  src="/fitbuddy logo.jpg"/>
            </div>
            <div>
            <button onClick={handleClick}className="text-white bg-red-600 hover:bg-red-700 py-2 px-4 rounded mr-3">Sign Up</button>
            <button onClick={handleClick2}className="text-white bg-red-600 hover:bg-red-700 py-2 px-4 rounded ">log In</button>
            </div>
          </nav> 
</>
    )
}
export default Navbar