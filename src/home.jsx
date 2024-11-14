import React from "react";
import Navbar from "./component/nav";

function Home() {
  return (
    <>
      <Navbar />

      <div
        className="bg-cover bg-center h-screen flex items-center justify-center text-white overflow-hidden"
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
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
          <h1 className="text-2xl font-semibold text-center">Men</h1>
        </div>

        {/* Women Section with 45-degree Gradient Overlay */}
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
    </>
  );
}

export default Home;
