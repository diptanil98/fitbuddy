import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './nav';

const Content = () => {
  const location = useLocation();
  const { name, video, l1, l2, l3, info,title,workout } = location.state || {};                

  if (!name) return <p>Loading or no data available...</p>;

  return (
    <>
    <Navbar />
    <div className="flex flex-col text-white py-10 min-h-screen my-14 bg-black overflow-hidden bg-cover">
        <div className="items-center text-center">
            <h1 className="text-4xl font-bold mb-8 ">{title}</h1>
            <div className="flex items-center justify-center">
                <iframe 
                    width="800" 
                    height="400" 
                    src={video} 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
            </div>
        </div>
        <main className="max-w-4xl mx-auto my-8 p-6 rounded-lg shadow-md">
            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-blue-600 mb-2">{name}</h2>
                <p>{info}</p>
            </section>
            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-blue-600 mb-2">Muscles Worked</h2>
                <p>Push-ups target the following muscles:</p>
                <h3 className="text-xl font-medium mt-4">Secondary Muscles</h3>
                <ul className="list-disc list-inside pl-4 space-y-1">
                    <li>{l1}</li>
                    <li>{l2}</li>
                    <li>{l3}</li>
                </ul>
            </section>
            <section>
                <h2 className="text-2xl font-semibold text-blue-600 mb-2">Benefits of {workout}</h2>
                <ul className="list-disc list-inside pl-4 space-y-1">
                    <li>
                        <strong>Strength Building:</strong> Targets multiple muscle groups, improving upper-body strength and stability.
                    </li>
                    <li>
                        <strong>Core Activation:</strong> Engages the abs and lower back muscles for balance and stability.
                    </li>
                    <li>
                        <strong>Improved Posture:</strong> Strengthens back and shoulder muscles, which can lead to better posture.
                    </li>
                    <li>
                        <strong>Versatility:</strong> Can be modified to target specific muscles or increase intensity.
                    </li>
                    <li>
                        <strong>No Equipment Required:</strong> Can be performed anywhere and requires only your body weight.
                    </li>
                    <li>
                        <strong>Cardiovascular Benefits:</strong> Improves endurance and heart health when done in higher repetitions.
                    </li>
                </ul>
            </section>
        </main>
    </div>
    <footer className="bg-gray-800 text-white py-6 ">
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
};
export default Content