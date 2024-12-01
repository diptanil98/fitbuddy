import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './component/nav';

const Men = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/video', {
      state: {
        name: 'Push-Ups',
        video: 'https://www.youtube.com/embed/SwDe1e7Pz60',
        l1: "Core muscles (abdominals, obliques)",
        l2: "Serratus anterior",
        l3: "Quadriceps and glutes (for stabilization)",
        info: "Push-ups are a bodyweight exercise that primarily target the upper body and core muscles. They involve lowering and raising the body using the arms while maintaining a plank position. Push-ups are one of the most basic and effective strength-training exercises."
      }
    });
  };

  const handleClick2 = () => {
    navigate('/video', {
      state: {
        name: 'Dips',
        video: 'https://www.youtube.com/embed/SwDe1e7Pz60',
        l1: " Core muscles (stabilization)",
        l2: "Serratus anterior",
        l3: " Rhomboids and traps (back muscles)",
        info: "Dips are a *bodyweight exercise* that target the upper body, focusing on the chest, shoulders, and triceps. They involve lowering and raising the body using parallel bars, rings, or sturdy surfaces like a bench or chair. Dips are excellent for building strength and muscle definition in the upper body."
      }
    });
  };
  const handleClick3 = () => {
    navigate('/video', {
      state: {
        name: 'Resistance Band Chest Press',
        video: "https://www.youtube.com/embed/Rn-hf5iauTc",
        l1: "Pectoralis major (chest)",
        l2: "Serratus anterior (side of the chest)",
        l3: "Anterior deltoids (front of the shoulders)",
        info: "The Resistance Chest Press is a strength-training exercise that targets the chest, shoulders, and triceps using resistance bands, cables, or a machine. It mimics the motion of a bench press but relies on resistance rather than weights, making it a versatile exercise for building upper body strength and improving muscle endurance."
      }
    });
  };
  const handleClick4 = () => {
    navigate('/video', {
      state: {
        name: 'Front Arm Raises',
        video: "https://www.youtube.com/embed/ugPIPY7j-GM",
        l1: "Upper pectorals (upper chest)",
        l2: "Trapezius (upper back)",
        l3: "Anterior deltoids (front of the shoulders)",
        info: "Front Raises are an isolation exercise that targets the anterior deltoids (front of the shoulders). They involve lifting weights, resistance bands, or similar equipment in front of the body, focusing on developing shoulder strength, stability, and definition. Front raises are commonly used to enhance shoulder aesthetics and improve upper-body strength."
      }
    });
  };
  const handleClick5 = () => {
    navigate('/video', {
      state: {
        name: 'Dumbell Wrist Curls',
        video: "https://www.youtube.com/embed/u61QWKYgbxI",
        l1: "Flexor carpi radialis",
        l2: "Flexor carpi ulnaris",
        l3: "Palmaris longus",
        info: "Dumbbell Wrist Curls are an isolation exercise that strengthens the forearm flexor muscles by curling the wrists upward while holding dumbbells. This exercise is ideal for developing grip strength, wrist stability, and forearm muscle definition."
      }
    });
  };
  const handleClick6 = () => {
    navigate('/video', {
      state: {
        name: "Tricep Extension",
        video: "https://www.youtube.com/embed/XiSA-87wYBg",
        l1: "Triceps Brachii: The main muscle targeted, located on the back of your upper arm, responsible for elbow extension.",
        l2: "Deltoids (Shoulders): The shoulder muscles help stabilize the movement, especially if you are performing a standing extension.",
        l3: "Anconeus: A small muscle in the elbow that assists in the triceps extension.",
        info: "A Tricep Extension is an exercise that targets the triceps brachii, the large muscle located on the back of your upper arm. This muscle is responsible for the extension of the elbow joint, and strengthening it helps improve upper body strength and definition. The exercise involves extending the arm at the elbow joint, using a weight or resistance to provide resistance through the motion."
      }
    });
  };
  const handleClick7 = () => {
    navigate('/video', {
      state: {
        name: 'Crunches',
        video: "https://www.youtube.com/embed/5ER5Of4MOPI",
        l1: "Rectus abdominis (six-pack muscles)",
        l2: "Obliques (side abs)",
        l3: "Transverse abdominis (deep core muscles)",
        info: "Crunches are a classic core-strengthening exercise that primarily target the abdominal muscles. They involve a controlled, partial sit-up motion where the upper back lifts off the floor while the lower back remains grounded. Crunches help develop the rectus abdominis (the 'six-pack' muscles) and improve core stability."
      }
    });
  };
  const handleClick8 = () => {
    navigate('/video', {
      state: {
        name: 'Leg Raises',
        video: "https://www.youtube.com/embed/gz-VmPNR2VQ",
        l1: "Rectus abdominis (lower abs)",
        l2: "Obliques (side abs)",
        l3: "Transverse abdominis (deep core)",
        info: "Leg Raises are a core-strengthening exercise that primarily target the lower abdominal muscles. They involve lifting your legs while keeping your torso stable, making them effective for developing the rectus abdominis, hip flexors, and improving core stability. They can be performed lying on the floor, hanging from a bar, or using a dip station."
      }
    });
  };
  const handleClick9 = () => {
    navigate('/video', {
      state: {
        name: 'Russian Twists',
        video: "https://www.youtube.com/embed/7kypwrhNGWM",
        l1: "Obliques (internal and external)",
        l2: "Rectus abdominis (upper and lower abs)",
        l3: "Transverse abdominis (deep core)",
        info: "Russian Twists are a core-strengthening exercise that target the obliques (side abdominal muscles) and help improve rotational strength and stability. This exercise involves twisting the torso side-to-side while holding a weight or without, often performed seated on the floor. Russian Twists are effective for building a strong core, enhancing balance, and toning the waist."
      }
    });
  };
  const handleClick10 = () => {
    navigate('/video', {
      state: {
        name: 'Reverse Snow Angles',
        video: "https://www.youtube.com/embed/0qLP2RNKX4A" ,
        l1: "Trapezius (upper back)",
        l2: "Rhomboids (middle back)",
        l3: "Deltoids (shoulders)",
        info: "Reverse Snow Angels are a bodyweight exercise designed to strengthen the posterior chain, particularly targeting the upper back, shoulders, and glutes. Unlike traditional snow angels where arms and legs move on the ground, reverse snow angels involve lying face down and lifting the arms and legs off the ground while mimicking the motion of creating a snow angel. This exercise is excellent for improving posture and developing upper body endurance."
      }
    });
  };
  const handleClick11 = () => {
    navigate('/video', {
      state: {
        name: 'Superman Hold',
        video: "https://www.youtube.com/embed/J9zXkxUAfUA",
        l1: "Erector Spinae (lower back)",
        l2: "Glutes (buttocks)",
        l3: "Shoulders (deltoids)",
        info: "The Superman Hold is a bodyweight exercise that targets the lower back, glutes, shoulders, and core. It is a static hold where you lift your arms and legs off the ground while lying face down, mimicking the posture of Superman flying. This exercise is excellent for improving core strength, lower back endurance, and overall stability, particularly for the posterior chain (back and glutes)."
      }
    });
  };
  const handleClick12 = () => {
    navigate('/video', {
      state: {
        name: 'Cobra Stretch Lifts',
        video: "https://www.youtube.com/embed/k48O2CxvZ3o",
        l1: "Erector spinae (lower back): Helps with spinal extension and back bending.",
        l2: "Gluteus maximus: Activated to stabilize the hips and assist with lifting the lower torso.",
        l3: "Core muscles (rectus abdominis, obliques): Engaged to support the back and maintain stability.",
        info: "The Cobra Stretch Lift is a dynamic stretch and mobility exercise that targets the lower back, chest, and abdominal muscles. It combines a traditional Cobra Stretch (a yoga pose) with a lifting motion, helping to improve flexibility, spinal extension, and core strength. This exercise is often used to improve posture, increase back flexibility, and relieve tension in the lower back."
      }
    });
  };
  const handleClick13 = () => {
    navigate('/video', {
      state: {
        name: 'Body Weight Squats',
        video: "https://www.youtube.com/embed/8uoaYwS6iFM",
        l1: " Core muscles (stabilization)",
        l2: "Serratus anterior",
        l3: " Rhomboids and traps (back muscles)",
        info: "Dips are a *bodyweight exercise* that target the upper body, focusing on the chest, shoulders, and triceps. They involve lowering and raising the body using parallel bars, rings, or sturdy surfaces like a bench or chair. Dips are excellent for building strength and muscle definition in the upper body."
      }
    });
  };
  const handleClick14 = () => {
    navigate('/video', {
      state: {
        name: 'Single leg Romanian Deadlift',
        video: "https://www.youtube.com/embed/TVUX-rX8xmE",
        l1: "Hamstrings: The main muscle worked during the lowering and lifting phases, as they are responsible for bending the hip and extending the knee.",
        l2: "Glutes: Activated to help extend the hip as you return to the standing position.",
        l3: "Lower Back (Erector Spinae): Helps maintain a neutral spine during the movement.",
        info: "The Single Leg Romanian Deadlift (SLRDL) is a lower-body exercise that primarily targets the hamstrings, glutes, and lower back while also engaging the core for stability. It's a variation of the traditional Romanian Deadlift (RDL) but performed on one leg, which increases the challenge to balance and stability. This exercise helps improve posterior chain strength and flexibility, making it a great addition to strength training or rehabilitation routines."
      }
    });
  };
  const handleClick15 = () => {
    navigate('/video', {
      state: {
        name: "Calf Raises",
        video: "https://www.youtube.com/embed/CtyIVeJH6lI",
        l1: "Gastrocnemius: The large muscle at the back of the lower leg, responsible for the majority of calf muscle strength and size.",
        l2: "Soleus: Located beneath the gastrocnemius, it also contributes to plantar flexion, especially when the knee is bent.",
        l3: "Core: While not the primary target, your core helps maintain balance and posture during the movement.",
        info: "Calf Raises are a simple but effective exercise targeting the calf muscles, primarily the gastrocnemius and soleus. These muscles are responsible for the plantar flexion of the ankle, allowing you to stand on tiptoe, jump, or walk. Calf raises are great for strengthening and toning the lower legs, improving balance, and enhancing overall athletic performance."
      }
    });
  };
  return (
    <>
    <Navbar />
    <div className="flex flex-col items-center text-center py-10 min-h-screen my-14 bg-black">
        <div className="text-white bg-red-500 p-8 w-full sm:w-3/4 lg:w-2/3 rounded-lg">
            <h1 className="text-4xl font-bold mb-8">Chest Workouts</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-[0px_20px_40px_rgba(0,0,0,0.5)] transition duration-300">
                    <img
                        src="https://th.bing.com/th/id/OIP.CRbvByMOO6_hjyFFQC-8tgHaE8?rs=1&pid=ImgDetMain"
                        alt="Push-Up"
                        className="h-50 w-50 mb-4 object-cover rounded-md border-2 border-white"
                    />
                     <button className="text-lg font-medium " onClick={handleClick}>Push-Up</button>
                </div>
                <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-[0px_20px_40px_rgba(0,0,0,0.5)]">
                    <img
                        src="https://th.bing.com/th/id/OIP.IfUY-syKcCR1wC6rctcs6gAAAA?rs=1&pid=ImgDetMain"
                        alt="Push-Up"
                        className="h-50 w-50 mb-4 object-cover rounded-md border-2 border-white"
                    />
                     <button className="text-lg font-medium bg-blue" onClick={handleClick2}>Dips</button>
                </div>
                <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-[0px_20px_40px_rgba(0,0,0,0.5)]">
                    <img
                        src="https://hips.hearstapps.com/hmg-prod/images/mh-stickmen-mobility-matrix-tall-kneeling-banded-rotation-40633-1548254498.jpg?crop=1.00xw:0.334xh;0,0.212xh&resize=1200:*"
                        alt="Push-Up"
                        className="h-50 w-50 mb-4 object-cover rounded-md border-2 border-white"
                    />
                     <button className="text-lg font-medium" onClick={handleClick3}>Resistance Band Chest Press</button>
                </div>
            </div>
        </div>
        <div className="my-10"></div>
        <div className="text-white bg-red-500 p-8 w-full sm:w-3/4 lg:w-2/3 rounded-lg">
            <h1 className="text-4xl font-bold mb-8">Arm Workouts</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-[0px_20px_40px_rgba(0,0,0,0.5)]">
                    <img
                        src="https://www.barbellfrontraise.com/wp-content/uploads/2022/03/front-arm-raises-with-a-dumbbell.png"
                        alt="Push-Up"
                        className="h-50 w-50 mb-4 object-cover rounded-md border-2 border-white"
                    />
                    <button className="text-lg font-medium" onClick={handleClick4}>Front Arm Raises</button>
                </div>
                <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-[0px_20px_40px_rgba(0,0,0,0.5)]">
                    <img
                        src="https://www.inspireusafoundation.org/wp-content/uploads/2021/11/dumbbell-reverse-wrist-curl-benefits.jpg"
                        alt="Push-Up"
                        className="h-50 w-50 mb-4 object-cover rounded-md border-2 border-white"
                    />
                     <button className="text-lg font-medium" onClick={handleClick5}>Dumbell Wrist Curls</button>
                </div>
                <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-[0px_20px_40px_rgba(0,0,0,0.5)]">
                    <img
                        src="https://th.bing.com/th/id/OIP.lgpQNvzVpMFvtwuAnLUbtwHaF2?rs=1&pid=ImgDetMain"
                        alt="Push-Up"
                        className="h-50 w-50 mb-4 object-cover rounded-md border-2 border-white"
                    />
                     <button className="text-lg font-medium" onClick={handleClick6}>Tricep Extension</button>
                </div>
            </div>
        </div>
        <div className="my-10"></div>
        <div className="text-white bg-red-500 p-8 w-full sm:w-3/4 lg:w-2/3 rounded-lg">
            <h1 className="text-4xl font-bold mb-8">ABs Workouts</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-[0px_20px_40px_rgba(0,0,0,0.5)]">
                    <img
                        src="https://betterme.world/articles/wp-content/uploads/2021/04/shutterstock_1149846959.jpg"
                        alt="Push-Up"
                        className="h-50 w-50 mb-4 object-cover rounded-md border-2 border-white"
                    />
                     <button className="text-lg font-medium" onClick={handleClick7}>Crunches</button>
                </div>
                <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-[0px_20px_40px_rgba(0,0,0,0.5)]">
                    <img
                        src="https://i.ytimg.com/vi/X6nuqilg-Qc/maxresdefault.jpg"
                        alt="Push-Up"
                        className="h-50 w-50 mb-4 object-cover rounded-md border-2 border-white"
                    />
                     <button className="text-lg font-medium" onClick={handleClick8}>Leg Raises</button>
                </div>
                <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-[0px_20px_40px_rgba(0,0,0,0.5)]">
                    <img
                        src="https://th.bing.com/th/id/OIP.FZc7sUQqTk9qgx0Q7P1xfAHaE_?w=800&h=540&rs=1&pid=ImgDetMain"
                        alt="Push-Up"
                        className="h-50 w-50 mb-4 object-cover rounded-md border-2 border-white"
                    />
                     <button className="text-lg font-medium" onClick={handleClick9}>Russian Twists</button>
                </div>
            </div>
        </div>
        <div className="my-10"></div>
        <div className="text-white bg-red-500 p-8 w-full sm:w-3/4 lg:w-2/3 rounded-lg">
            <h1 className="text-4xl font-bold mb-8">Back Workouts</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-[0px_20px_40px_rgba(0,0,0,0.5)]">
                    <img
                        src="https://i.ytimg.com/vi/447wYjo97nU/maxresdefault.jpg"
                        alt="Push-Up"
                        className="h-50 w-50 mb-4 object-cover rounded-md border-2 border-white"
                    />
                     <button className="text-lg font-medium" onClick={handleClick10}>Reverse Snow Angles</button>
                </div>
                <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-[0px_20px_40px_rgba(0,0,0,0.5)]">
                    <img
                        src="https://th.bing.com/th/id/OIP.oKWQcYEPXcRwiNT05WPpXQHaGK?w=550&h=458&rs=1&pid=ImgDetMain"
                        alt="Push-Up"
                        className="h-50 w-50 mb-4 object-cover rounded-md border-2 border-white"
                    />
                     <button className="text-lg font-medium" onClick={handleClick11}>Superman Hold</button>
                </div>
                <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-[0px_20px_40px_rgba(0,0,0,0.5)]">
                    <img
                        src="https://th.bing.com/th/id/OIP.4B21PHtTJTD8FziPft_ykAHaE9?rs=1&pid=ImgDetMain"
                        alt="Push-Up"
                        className="h-50 w-50 mb-4 object-cover rounded-md border-2 border-white"
                    />
                    <button className="text-lg font-medium" onClick={handleClick12}>Cobra Stretch Lift</button>
                </div>
            </div>
        </div>
        <div className="my-10"></div>
        <div className="text-white bg-red-500 p-8 w-full sm:w-3/4 lg:w-2/3 rounded-lg">
            <h1 className="text-4xl font-bold mb-8">Leg Workouts</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-[0px_20px_40px_rgba(0,0,0,0.5)]">
                    <img
                        src="https://bodybuilding-wizard.com/wp-content/uploads/2019/03/basic-bodyweight-squat-exercise-3.jpg"
                        alt="Push-Up"
                        className="h-50 w-50 mb-4 object-cover rounded-md border-2 border-white"
                    />
                     <button className="text-lg font-medium" onClick={handleClick13}>Body Weight Squats</button>
                </div>
                <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-[0px_20px_40px_rgba(0,0,0,0.5)]">
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/5d31ed671abe780001b2964d/4ac409fa-6f55-444f-b258-60a30c0b09e3/image-asset.jpeg"
                        alt="Push-Up"
                        className="h-50 w-50 mb-4 object-cover rounded-md border-2 border-white"
                    />
                     <button className="text-lg font-medium" onClick={handleClick14}>Single leg Romanian Deadlift</button>
                </div>
                <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-[0px_20px_40px_rgba(0,0,0,0.5)]">
                    <img
                        src="https://th.bing.com/th/id/OIP.fIn4NeujzwoCZyXFWKWCXQAAAA?rs=1&pid=ImgDetMain"
                        alt="Push-Up"
                        className="h-50 w-50 mb-4 object-cover rounded-md border-2 border-white"
                    />
                     <button className="text-lg font-medium" onClick={handleClick15}>Calf Raises</button>
                </div>
            </div>
        </div>
    </div>
    
    
</>

  );
};

export default Men;
