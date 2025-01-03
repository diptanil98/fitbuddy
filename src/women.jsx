import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './component/nav';

const Women = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/video', {
      state: {
        workout: "Knee Push-Ups",
        title:"Chest Workouts",
        name: 'Knee Push-Ups',
        video: 'https://www.youtube.com/embed/jWxvty2KROs?si=FdsK6R7t168f0wKZ',
        l1: "Core muscles (abdominals, obliques)",
        l2: "Serratus anterior",
        l3: "Quadriceps and glutes (for stabilization)",
        info: "The knee push-up is an excellent exercise for building upper body strength, especially in the chest, shoulders, and triceps, while being more accessible than a standard push-up."
      }
    });
  };

  const handleClick2 = () => {
    navigate('/video', {
      state: {
        workout: "Plank Shoulder Taps",
        title:"Chest Workouts",
        name: 'Plank Shoulder Taps',
        video: 'https://www.youtube.com/embed/8F-SW8XTbE8?si=lFsDp0FUgMv2Zuoc',
        l1: " Core muscles (stabilization)",
        l2: "Serratus anterior",
        l3: " Rhomboids and traps (back muscles)",
        info: "Plank shoulder taps are a core-strengthening exercise where you alternate tapping your shoulders while holding a plank position. This move enhances core stability, improves balance, and works your shoulders, arms, and glutes."
      }
    });
  };
  const handleClick3 = () => {
    navigate('/video', {
      state: {
        workout: "Resistance Band Arm Pulses",
        title:"CHest Workouts",
        name: 'Resistance Band Arm Pulses',
        video: "https://www.youtube.com/embed/UuM26K0Qeis?si=IFynReiOcz4-xBIm",
        l1: "Pectoralis major (chest)",
        l2: "Serratus anterior (side of the chest)",
        l3: "Anterior deltoids (front of the shoulders)",
        info: "Resistance band arm pulses are a simple yet effective exercise to strengthen and tone the shoulders, arms, and upper back. They involve holding a resistance band taut and performing small, controlled pulses to maintain constant tension in the muscles."
      }
    });
  };
  const handleClick4 = () => {
    navigate('/video', {
      state: {
        workout: "Front Arm Raises",
        title:"Arms Workouts",
        name: 'Front Arm Raises',
        video: "https://www.youtube.com/embed/SFh3f8c8a4Q?si=-TlKW_MEHw73tZVf",
        l1: "Upper pectorals (upper chest)",
        l2: "Trapezius (upper back)",
        l3: "Anterior deltoids (front of the shoulders)",
        info: "Front arm raises are an effective exercise for strengthening and toning the shoulders, particularly the anterior deltoid (front of the shoulder). They also engage the core for stability and improve shoulder mobility."
      }
    });
  };
  const handleClick5 = () => {
    navigate('/video', {
      state: {
        workout: "Zottman Curls",
        title:"Arms Workouts",
        name: 'Zottman Curls',
        video: "https://www.youtube.com/embed/FSGDM9-dZ9w?si=Ebys1x4N5F8ahgkY",
        l1: "Flexor carpi radialis",
        l2: "Flexor carpi ulnaris",
        l3: "Palmaris longus",
        info: "Zottman curls are a highly effective arm exercise that target both the biceps and forearms. This unique move combines a standard bicep curl with a reverse curl, making it excellent for building balanced arm strength."
      }
    });
  };
  const handleClick6 = () => {
    navigate('/video', {
      state: {
        workout: "Standing overhead triceps extension",
        title:"Arms Workouts",
        name: "Standing overhead triceps extension",
        video: "https://www.youtube.com/embed/YM8iX9BJWjA?si=bWQlFZid_PX3G8d0",
        l1: "Triceps Brachii: The main muscle targeted, located on the back of your upper arm, responsible for elbow extension.",
        l2: "Deltoids (Shoulders): The shoulder muscles help stabilize the movement, especially if you are performing a standing extension.",
        l3: "Anconeus: A small muscle in the elbow that assists in the triceps extension.",
        info: "The standing overhead triceps extension is an effective exercise for targeting the triceps (the muscles on the back of the upper arm), helping to build strength and tone."
      }
    });
  };
  const handleClick7 = () => {
    navigate('/video', {
      state: {
        workout: "Crunches",
        title:"Abs Workouts",
        name: 'Crunches',
        video: "https://www.youtube.com/embed/0t4t3IpiEao?si=xnUiqxuW9wC385QA",
        l1: "Rectus abdominis (six-pack muscles)",
        l2: "Obliques (side abs)",
        l3: "Transverse abdominis (deep core muscles)",
        info: "Crunches are a classic core exercise that primarily target the rectus abdominis (the six-pack muscles). They help strengthen and tone the abdominal muscles, improving core stability and posture."
      }
    });
  };
  const handleClick8 = () => {
    navigate('/video', {
      state: {
        workout: "Bicycle Crunch",
        title:"Abs Workouts",
        name: 'Bicycle Crunch',
        video: "https://www.youtube.com/embed/wpRI3xBhJmo?si=lXidGZNtq6BNBEHj",
        l1: "Rectus abdominis (lower abs)",
        l2: "Obliques (side abs)",
        l3: "Transverse abdominis (deep core)",
        info: "The bicycle crunch is a dynamic core exercise that targets the rectus abdominis (front abs), obliques (side abs), and hip flexors. It mimics a pedaling motion, providing a full-core workout while improving coordination."
      }
    });
  };
  const handleClick9 = () => {
    navigate('/video', {
      state: {
        workout: "Russian Twists",
        title:"Abs Workouts",
        name: 'Russian Twists',
        video: "https://www.youtube.com/embed/DJQGX2J4IVw?si=e_6INJrWLfV2Gy81",
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
        workout: "Front Raise To Lateral Raise",
        title:"Back Workouts",
        name: 'Front Raise To Lateral Raise',
        video: "https://www.youtube.com/embed/SqTLytmDy_8?si=TIKliAouAJYZPr_I" ,
        l1: "Trapezius (upper back)",
        l2: "Rhomboids (middle back)",
        l3: "Deltoids (shoulders)",
        info: "The front raise to lateral raise is a compound shoulder exercise that targets the deltoid muscles (shoulders) through two different angles. It combines a front raise (for the front delts) and a lateral raise (for the middle delts), providing a full shoulder workout."
      }
    });
  };
  const handleClick11 = () => {
    navigate('/video', {
      state: {
        workout: "Superman",
        title:"Back Workouts",
        name: 'Superman',
        video: "https://www.youtube.com/embed/z6PJMT2y8GQ?si=LEUzLNNkcDa0k6IX",
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
        workout: "Bird Dog",
        title:"Back Workouts",
        name: 'Bird Dog',
        video: "https://www.youtube.com/embed/QABW99qPiNM?si=wDbcecka74cZ0oLA",
        l1: "Erector spinae (lower back): Helps with spinal extension and back bending.",
        l2: "Gluteus maximus: Activated to stabilize the hips and assist with lifting the lower torso.",
        l3: "Core muscles (rectus abdominis, obliques): Engaged to support the back and maintain stability.",
        info: "The bird dog is a core exercise that targets the lower back, abdominals, and glutes, while also improving balance, stability, and coordination. It’s an effective move for strengthening the entire core and enhancing functional movement."
      }
    });
  };
  const handleClick13 = () => {
    navigate('/video', {
      state: {
        workout: "Goblet Squat",
        title:"Leg Workouts",
        name: 'Goblet Squat',
        video: "https://www.youtube.com/embed/CkFzgR55gho?si=Py_FF10N1N-TRlYm",
        l1: " Core muscles (stabilization)",
        l2: "Serratus anterior",
        l3: " Rhomboids and traps (back muscles)",
        info: "Dips are a bodyweight exercise that target the upper body, focusing on the chest, shoulders, and triceps. They involve lowering and raising the body using parallel bars, rings, or sturdy surfaces like a bench or chair. Dips are excellent for building strength and muscle definition in the upper body."
      }
    });
  };
  const handleClick14 = () => {
    navigate('/video', {
      state: {
        workout: "Squat to Oblique Crunch",
        title:"Leg Workouts",
        name:'Squat to Oblique Crunch',
        video: "https://www.youtube.com/embed/GUazWuQoqRs?si=CtBy3bqbLaeCFBnf",
        l1: "Hamstrings: The main muscle worked during the lowering and lifting phases, as they are responsible for bending the hip and extending the knee.",
        l2: "Glutes: Activated to help extend the hip as you return to the standing position.",
        l3: "Lower Back (Erector Spinae): Helps maintain a neutral spine during the movement.",
        info: "The squat to oblique crunch is a dynamic exercise that combines the squat (lower body) and oblique crunch (core) to strengthen the legs, glutes, and core, while improving coordination and balance."
      }
    });
  };
  const handleClick15 = () => {
    navigate('/video', {
      state: {
        workout: "Lateral Lunge",
        title:"Leg Workouts",
        name: "Lateral Lunge",
        video: "https://www.youtube.com/embed/rvqLVxYqEvo?si=JtAm7xI3JiXyfZqv",
        l1: "Gastrocnemius: The large muscle at the back of the lower leg, responsible for the majority of calf muscle strength and size.",
        l2: "Soleus: Located beneath the gastrocnemius, it also contributes to plantar flexion, especially when the knee is bent.",
        l3: "Core: While not the primary target, your core helps maintain balance and posture during the movement.",
        info: "The lateral lunge is a lower-body exercise that targets the quadriceps, glutes, hamstrings, and adductors (inner thighs). It also helps improve balance, flexibility, and hip mobility."
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
                        src="https://www.verywellfit.com/thmb/IDuQbCnwwwnfhXF1mClYVQF0GPA=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/woman-doing-push-ups-on-knees-at-gym-629102185-5ae308b33de42300374fca85.jpg"
                        alt="Push-Up"
                        className="h-50 w-50 mb-4 object-cover rounded-md border-2 border-white"
                    />
                     <button className="text-lg font-medium " onClick={handleClick}>Knee Push-Ups</button>
                </div>
                <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-[0px_20px_40px_rgba(0,0,0,0.5)]">
                    <img
                        src="https://thumbs.dreamstime.com/z/woman-doing-plank-shoulder-taps-exercise-flat-vector-illustration-isolated-white-background-woman-doing-plank-shoulder-taps-237132134.jpg"
                        alt="Push-Up"
                        className="h-50 w-50 mb-4 object-cover rounded-md border-2 border-white"
                    />
                     <button className="text-lg font-medium bg-blue" onClick={handleClick2}>Plank Shoulder Taps</button>
                </div>
                <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-[0px_20px_40px_rgba(0,0,0,0.5)]">
                    <img
                        src="https://cdn2.stylecraze.com/wp-content/uploads/2018/04/Which-Full-Body-Resistance-Band-Exercises-Can-I-Do-1.jpg"
                        alt="Push-Up"
                        className="h-50 w-50 mb-4 object-cover rounded-md border-2 border-white"
                    />
                     <button className="text-lg font-medium" onClick={handleClick3}>Resistance Band Arm Pulses</button>
                </div>
            </div>
        </div>
        <div className="my-10"></div>
        <div className="text-white bg-red-500 p-8 w-full sm:w-3/4 lg:w-2/3 rounded-lg">
            <h1 className="text-4xl font-bold mb-8">Arm Workouts</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-[0px_20px_40px_rgba(0,0,0,0.5)]">
                    <img
                        src="https://s3.amazonaws.com/prod.skimble/assets/867336/image_iphone.jpg"
                        alt="Push-Up"
                        className="h-50 w-50 mb-4 object-cover rounded-md border-2 border-white"
                    />
                    <button className="text-lg font-medium" onClick={handleClick4}>Front Arm Raises</button>
                </div>
                <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-[0px_20px_40px_rgba(0,0,0,0.5)]">
                    <img
                        src="https://i.pinimg.com/474x/d9/3b/80/d93b80f9ca727081fff81ad5346177f9--hack-biceps.jpg"
                        alt="Push-Up"
                        className="h-50 w-50 mb-4 object-cover rounded-md border-2 border-white"
                    />
                     <button className="text-lg font-medium" onClick={handleClick5}>Zottman curl</button>
                </div>
                <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-[0px_20px_40px_rgba(0,0,0,0.5)]">
                    <img
                        src="https://gethealthyu.com/wp-content/uploads/2014/08/Tricep-Overhead-Extension_Exercise1.jpg"
                        alt="Push-Up"
                        className="h-50 w-50 mb-4 object-cover rounded-md border-2 border-white"
                    />
                     <button className="text-lg font-medium" onClick={handleClick6}>Standing overhead triceps extension</button>
                </div>
            </div>
        </div>
        <div className="my-10"></div>
        <div className="text-white bg-red-500 p-8 w-full sm:w-3/4 lg:w-2/3 rounded-lg">
            <h1 className="text-4xl font-bold mb-8">ABs Workouts</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-[0px_20px_40px_rgba(0,0,0,0.5)]">
                    <img
                        src="https://www.verywellfit.com/thmb/l7XjEdXvr3bkOGl888gdYPdJMpE=/2122x1415/filters:fill(FFDB5D,1)/75627328-56a2b6765f9b58b7d0cdad68.jpg"
                        alt="Push-Up"
                        className="h-50 w-50 mb-4 object-cover rounded-md border-2 border-white"
                    />
                     <button className="text-lg font-medium" onClick={handleClick7}>Crunches</button>
                </div>
                <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-[0px_20px_40px_rgba(0,0,0,0.5)]">
                    <img
                        src="https://images.healthshots.com/healthshots/en/uploads/2021/06/24101911/bicycle-crunches-1.jpg"
                        alt="Push-Up"
                        className="h-50 w-50 mb-4 object-cover rounded-md border-2 border-white"
                    />
                     <button className="text-lg font-medium" onClick={handleClick8}>Bicycle Crunch</button>
                </div>
                <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-[0px_20px_40px_rgba(0,0,0,0.5)]">
                    <img
                        src="https://media1.popsugar-assets.com/files/thumbor/nT7nNaL82QUSiP7rvZg68oA-FlQ/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2017/08/25/861/n/40863086/d9f8993c2cbd8cc4_45429147abe1ea26d53f90ba47be0f390/i/Advanced-Russian-Twist-Weight.jpg"
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
                        src="https://julielohre.com/wp-content/uploads/2017/11/Dumbbell-Lateral-Raise-1024x943.jpg"
                        alt="Push-Up"
                        className="h-50 w-50 mb-4 object-cover rounded-md border-2 border-white"
                    />
                     <button className="text-lg font-medium" onClick={handleClick10}>Front Raise To Lateral Raise</button>
                </div>
                <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-[0px_20px_40px_rgba(0,0,0,0.5)]">
                    <img
                        src="https://th.bing.com/th/id/OIP.DGPCqSAuwCAy-ChOTbzdJAHaHa?rs=1&pid=ImgDetMain"
                        alt="Push-Up"
                        className="h-50 w-50 mb-4 object-cover rounded-md border-2 border-white"
                    />
                     <button className="text-lg font-medium" onClick={handleClick11}>Superman</button>
                </div>
                <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-[0px_20px_40px_rgba(0,0,0,0.5)]">
                    <img
                        src="https://movegarden.fr/wp-content/uploads/2019/02/AdobeStock_132185293-scaled.jpeg"
                        alt="Push-Up"
                        className="h-50 w-50 mb-4 object-cover rounded-md border-2 border-white"
                    />
                    <button className="text-lg font-medium" onClick={handleClick12}>Bird Dog</button>
                </div>
            </div>
        </div>
        <div className="my-10"></div>
        <div className="text-white bg-red-500 p-8 w-full sm:w-3/4 lg:w-2/3 rounded-lg">
            <h1 className="text-4xl font-bold mb-8">Leg Workouts</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-[0px_20px_40px_rgba(0,0,0,0.5)]">
                    <img
                        src="https://3.bp.blogspot.com/-cleI-vIHptE/Vf-Cdc0typI/AAAAAAAAAFI/cHjql0_xpI4/s1600/women%2527s%2Bhealth%2B-%2BGOBLET%2BSQUAT%2B00021.jpeg"
                        alt="Push-Up"
                        className="h-50 w-50 mb-4 object-cover rounded-md border-2 border-white"
                    />
                     <button className="text-lg font-medium" onClick={handleClick13}>Goblet Squat</button>
                </div>
                <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-[0px_20px_40px_rgba(0,0,0,0.5)]">
                    <img
                        src="https://th.bing.com/th/id/OIP.US7abAfPdq6RmDW7NDabXwHaEK?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                        alt="Push-Up"
                        className="h-50 w-50 mb-4 object-cover rounded-md border-2 border-white"
                    />
                     <button className="text-lg font-medium" onClick={handleClick14}>Squat to Oblique Crunch</button>
                </div>
                <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-[0px_20px_40px_rgba(0,0,0,0.5)]">
                    <img
                        src="https://th.bing.com/th/id/OIP.KOawknELLdnAQCQV1laMMQHaEx?rs=1&pid=ImgDetMain"
                        alt="Push-Up"
                        className="h-50 w-50 mb-4 object-cover rounded-md border-2 border-white"
                    />
                     <button className="text-lg font-medium" onClick={handleClick15}>Lateral Lunge</button>
                </div>
            </div>
        </div>
    </div>
    
    
</>

  );
};

export default Women;