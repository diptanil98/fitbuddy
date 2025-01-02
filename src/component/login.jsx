import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");  // To store error messages

  const signinUser = (e) => {
    e.preventDefault();  // Prevent form reload
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        alert("Signin success");
      })
      .catch((err) => {
        alert(err);
        setErrorMessage("Failed to sign in. Please check your credentials.");  // Show error message
      });
  };

  return (
    <div className="bg-cover bg-center h-screen flex items-center justify-center text-white overflow-hidden" style={{ backgroundImage: "url('/bg.jpg')" }}>
      <div className="w-96 p-6 bg-opacity-75 bg-gray-800 rounded-lg">
        <h2 className="text-white text-2xl font-semibold text-center mb-4">Log In</h2>
        <form className="space-y-4" onSubmit={signinUser}>  {/* Use onSubmit instead of onClick */}
          <div>
            <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
              Email address:
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="w-full px-4 py-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-white text-sm font-medium mb-2">
              Password:
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className="w-full px-4 py-2 border border-gray-600 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="password"
            />
          </div>
          {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}  {/* Display error message */}
          <button
          onClick={signinUser}
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SigninPage;  {/* Changed to match component name */}
