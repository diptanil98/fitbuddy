import React, { useState } from "react";
import Navbar from "./nav";
import useLocalImageRecognition from "../hooks/img";
import useNutrition from "../hooks/nutrition";

function Calorie() {
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState(null);
  const { prediction, recognizeImage, loading: imageLoading, error: imageError } = useLocalImageRecognition();
  const { nutrition, fetchNutritionData, loading: nutritionLoading, error: nutritionError } = useNutrition("0AVoY5kEHzF7EgW/B5IKXg==eKZb9Kdp3UGPLiJV");

  const handleSelect = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
    if (file) {
      recognizeImage(file); // Call the TensorFlow model
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleFetchNutrition = () => {
    if (prediction && prediction.className) {
      fetchNutritionData(prediction.className); // Fetch nutrition for the detected class
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
        <h1 className="text-4xl font-bold mb-4">Calorie Calculator</h1>

        {/* Image Input */}
        <form className="mb-6">
          <input type="file" accept="image/*" onChange={handleSelect} className="mb-4" />
        </form>

        {/* Image Preview */}
        {preview && (
          <div className="mt-6">
            <h3 className="text-xl font-medium mb-2">Image Preview:</h3>
            <img src={preview} alt="Selected" className="w-72 rounded-lg shadow-lg" />
          </div>
        )}

        {/* Detected Food */}
        {imageLoading && <p>Detecting food item...</p>}
        {imageError && <p className="text-red-500">{imageError}</p>}
        {prediction && <h2 className="text-xl font-semibold">Detected Food: {prediction.className}</h2>}

        {/* Fetch Nutrition Data */}
        <button
          onClick={handleFetchNutrition}
          disabled={imageLoading || nutritionLoading}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4"
        >
          {nutritionLoading ? "Fetching Nutrition..." : "Get Nutrition Data"}
        </button>

        {/* Nutrition Data */}
        {nutrition && (
  <div className="mt-4">
    <h3 className="text-xl font-medium mb-4">Nutrition Details</h3>
    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-300 px-4 py-2">Nutrient</th>
          <th className="border border-gray-300 px-4 py-2">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Calories</td>
          <td className="border border-gray-300 px-4 py-2">{nutrition.calories || "N/A"} kcal</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Protein</td>
          <td className="border border-gray-300 px-4 py-2">{nutrition.protein_g || "N/A"} g</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Fat</td>
          <td className="border border-gray-300 px-4 py-2">{nutrition.fat_total_g || "N/A"} g</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Carbohydrates</td>
          <td className="border border-gray-300 px-4 py-2">{nutrition.carbohydrates_total_g || "N/A"} g</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Fiber</td>
          <td className="border border-gray-300 px-4 py-2">{nutrition.fiber_g || "N/A"} g</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Sugar</td>
          <td className="border border-gray-300 px-4 py-2">{nutrition.sugar_g || "N/A"} g</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Cholesterol</td>
          <td className="border border-gray-300 px-4 py-2">{nutrition.cholesterol_mg || "N/A"} mg</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Sodium</td>
          <td className="border border-gray-300 px-4 py-2">{nutrition.sodium_mg || "N/A"} mg</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Potassium</td>
          <td className="border border-gray-300 px-4 py-2">{nutrition.potassium_mg || "N/A"} mg</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Iron</td>
          <td className="border border-gray-300 px-4 py-2">{nutrition.iron_mg || "N/A"} mg</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Vitamin C</td>
          <td className="border border-gray-300 px-4 py-2">{nutrition.vitamin_c_mg || "N/A"} mg</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">Calcium</td>
          <td className="border border-gray-300 px-4 py-2">{nutrition.calcium_mg || "N/A"} mg</td>
        </tr>
      </tbody>
    </table>
  </div>
)}


      </div>
    </>
  );
}

export default Calorie;
