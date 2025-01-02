import React from "react";
import Navbar from "./component/nav";
import { Link } from "react-router-dom";
import Men from "./men";

function Home() {
  return (
    <>
    <div className="bg-black">
      <Navbar /> 

      <div
        className="bg-cover bg-center h-screen flex items-center justify-center text-white overflow-hidden mt-20"
        style={{
          backgroundImage:
            "url('https://www.healthkart.com/connect/wp-content/uploads/2016/11/banner-2.jpg')",
        }}
      >
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold mb-4 text-white">Welcome to Fitbuddy</h1>
          <p className="text-xl">
            Transform your fitness, transform your life every step forward is a step towards greatness!
          </p>
        </div>
      </div>


      <div className="bg-gray-800 text-white py-16 columns-3xs">
        <div className="size-full">
        <img src="https://i.pinimg.com/236x/30/c5/3c/30c53cd247252235655aefc5338062b7.jpg" alt="fitness" className="w-full h-auto mb-[10px] rounded-[30px]  shadow-lg " />
        <img src="https://i.pinimg.com/474x/74/24/34/7424342c64dafa61c814ee82590b9117.jpg" alt="fitness" className="w-full h-[250px] rounded-[30px] mb-[10px] shadow-lg " />
        <img src="https://i.pinimg.com/236x/63/2b/6a/632b6a58fa0da953a9281af6476679da.jpg" alt="fitness" className="w-full h-[350px] rounded-[30px] mb-[10px] shadow-lg " />
        <img src="https://i.pinimg.com/236x/30/c5/3c/30c53cd247252235655aefc5338062b7.jpg" alt="fitness" className="w-full h-[400px] rounded-[30px] mb-[10px] shadow-lg " />
        <img src="https://i.pinimg.com/474x/59/08/f2/5908f26c2e49fbf8df8bf4c6399cc292.jpg" alt="fitness" className="w-full h-[300px] rounded-[30px] mb-[10px] shadow-lg " />
        <img src="https://i.pinimg.com/236x/aa/cf/a5/aacfa5d6136341d4fc53f15e0d0abfcc.jpg" alt="fitness" className="w-full h-[500px] rounded-[30px] mb-[10px] shadow-lg " />
        <img src="https://i.pinimg.com/474x/41/c1/05/41c1058235945f36ff7ea14b69b58ecc.jpg" alt="fitness" className="w-full h-[500px] rounded-[30px] mb-[10px]  shadow-lg " />
        <img src="https://i.pinimg.com/236x/40/a8/23/40a823efaeab2222c3c9a2d48ee22208.jpg" alt="fitness" className="w-full h-[200px] rounded-[30px] mb-[10px]  shadow-lg " />
        <img src="https://i.pinimg.com/236x/01/ce/67/01ce67f515bb1c70549b0f9a7e3abbd4.jpg" alt="fitness" className="w-full h-[300px] rounded-[30px] mb-[10px]  shadow-lg " />
        <img src="https://i.pinimg.com/236x/4d/8f/9d/4d8f9d9f4806ed1c5a2ccad775245e1d.jpg" alt="fitness" className="w-full h-[500px] rounded-[30px] mb-[10px]  shadow-lg " />
        <img src="https://i.pinimg.com/474x/dc/24/bd/dc24bdd540ab4709349113dda99b216d.jpg" alt="fitness" className="w-full h-[250px] rounded-[30px] mb-[10px]  shadow-lg " />
        <img src="https://i.pinimg.com/236x/51/96/3a/51963ad8ab8c695b31b3c53378c92c2e.jpg" alt="fitness" className="w-full h-[500px] rounded-[30px] mb-[10px]  shadow-lg " />
        <img src="https://i.pinimg.com/236x/46/2d/29/462d29ef67665d1f50fff07ea9c190d6.jpg" alt="fitness" className="w-full h-[400px] rounded-[30px] mb-[10px]  shadow-lg " />
        <img src="https://i.pinimg.com/236x/cf/bd/10/cfbd1025e4bc35d2bfa7c5391485fd5d.jpg" alt="fitness" className="w-full h-[500px] rounded-[30px] mb-[10px]  shadow-lg " />
        <img src="https://i.pinimg.com/236x/a4/c2/98/a4c29828cb1ad01d161e801dcfa05979.jpg" alt="fitness" className="w-full h-[300px] rounded-[30px] mb-[10px]  shadow-lg " />
        <img src="https://i.pinimg.com/236x/f2/31/17/f231175cc4af23ccb0e07f3db7900397.jpg" alt="fitness" className="w-full h-[450px] rounded-[30px] mb-[10px]  shadow-lg " />
        <img src="https://i.pinimg.com/236x/4d/53/67/4d53671777647ed4c1ec6bd49c54bafa.jpg" alt="fitness" className="w-full h-[500px] rounded-[30px] mb-[10px]  shadow-lg " />
        </div>
      </div>

      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
              <div className="mb-4">
                <i className="fas fa-dumbbell text-4xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Personalized Fitness Plans</h3>
              <p className="text-gray-600 mt-2">
                Get customized workout plans based on your goals and fitness levels.
              </p>
            </div>
            
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
              <div className="mb-4">
                <i className="fas fa-heartbeat text-4xl text-pink-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Health Monitoring</h3>
              <p className="text-gray-600 mt-2">
                Track your progress and monitor vital health stats with ease.
              </p>
            </div>
            
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
              <div className="mb-4">
                <i className="fas fa-utensils text-4xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Nutrition Guidance</h3>
              <p className="text-gray-600 mt-2">
                Get expert advice on nutrition and meal planning for optimal results.
              </p>
            </div>
            
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
              <div className="mb-4">
                <i className="fas fa-calendar-check text-4xl text-orange-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Flexible Scheduling</h3>
              <p className="text-gray-600 mt-2">
                Choose your workout times and fit your fitness journey into your schedule.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Men Section with Custom Gradient Overlay */}
        <div
          className="relative bg-blue-500 text-white p-8 transition duration-300 w-1/2 h-60 flex justify-center items-center bg-no-repeat bg-cover hover:scale-105 transform"
          style={{
            backgroundImage:
              "url('https://th.bing.com/th/id/OIP.sWf99QLKB4-QxULXS8Ct3AHaE7?rs=1&pid=ImgDetMain')",
          }}
        >
          {/* Gradient Overlay with Custom Colors for Men */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 opacity-0 hover:opacity-50 transition-opacity duration-300 pointer-events-none">
          </div>
          <Link to="/men" className="text-2xl font-semibold text-center">Men</Link>
        </div>

        
        <div
          className="relative bg-red-500 text-white p-8 transition duration-300 w-1/2 h-60 flex justify-center items-center bg-no-repeat bg-cover hover:scale-105 transform"
          style={{
            backgroundImage:
              "url('https://static.wixstatic.com/media/11062b_68c4606969d942618bfb44c9f89a8f73~mv2.jpg/v1/fit/w_1000%2Ch_1000%2Cal_c%2Cq_80/file.jpg')",
          }}
        >
          {/* Gradient Overlay with 45-degree angle */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-yellow-500 to-orange-600 opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
          <h1 className="text-2xl font-semibold text-center">Women</h1>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-semibold">
              <img
                src="/fitbuddy logo.jpg"
                alt="FitBuddy"
                className="h-24 w-24 inline-block"
              />
            </div>

            <div className="flex space-x-6">
              <a href="#" className="hover:text-gray-400 transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-gray-400 transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-gray-400 transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-gray-400 transition duration-300">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm">
              © 2024 FitBuddy. All rights reserved. | Empowering your fitness journey.
            </p>
          </div>
        </div>
      </footer>
      </div>
    
    </>
  );
}

export default Home;
