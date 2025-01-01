import React, { useState } from "react";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";

const DietChartPage = () => {
  const [customDiet, setCustomDiet] = useState({
    gender: "",
    mealType: "",
    preference: "",
    description: "",
  });
  const [customCharts, setCustomCharts] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomDiet({ ...customDiet, [name]: value });
  };

  const addCustomChart = () => {
    setCustomCharts([...customCharts, customDiet]);
    setCustomDiet({ gender: "", mealType: "", preference: "", description: "" });
  };

  const generateWordDocument = () => {
    const doc = new Document({
      sections: [
        {
          children: [
            // Document Title
            new Paragraph({
              children: [
                new TextRun({ text: "Custom Diet Charts", bold: true, size: 40 }),
              ],
              spacing: { after: 400 },
              alignment: "center",
            }),
            // Iterate through custom charts
            ...customCharts.map((chart, index) => {
              return new Paragraph({
                children: [
                  // Chart Title
                  new TextRun({
                    text: `Chart ${index + 1}`,
                    bold: true,
                    size: 28,
                    color: "0000FF",
                  }),
                  new TextRun("\n\n"),
                  // Chart Details
                  new TextRun({ text: `Gender: `, bold: true }),
                  new TextRun(chart.gender),
                  new TextRun("\n"),
                  new TextRun({ text: `Meal Type: `, bold: true }),
                  new TextRun(chart.mealType),
                  new TextRun("\n"),
                  new TextRun({ text: `Preference: `, bold: true }),
                  new TextRun(chart.preference),
                  new TextRun("\n"),
                  new TextRun({ text: `Description: `, bold: true }),
                  new TextRun(chart.description),
                  new TextRun("\n\n"),
                ],
                spacing: { after: 200 },
              });
            }),
          ],
        },
      ],
    });
  
    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "Custom_Diet_Charts.docx");
    });
  };
  
  

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 p-8">
    <header className="text-center mb-12">
      <h1 className="text-5xl font-extrabold text-green-800 drop-shadow-xl animate-text bg-gradient-to-r from-green-700 via-blue-700 to-purple-700 bg-clip-text text-transparent">
        Personalized Diet Charts
      </h1>
      <p className="text-gray-900 mt-4 text-lg">
        Choose or create a diet plan that aligns with your fitness aspirations!
      </p>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
      {/* Men's Diet Chart */}
      <div className="bg-white shadow-xl rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-6 animate-gradient">
          <h2 className="text-3xl font-bold">Men's Diet Chart</h2>
        </div>
        <div className="p-8 space-y-6">
          {[
            ['Breakfast', 'Oatmeal with milk, boiled eggs, and a banana.'],
            ['Lunch', 'Grilled chicken, quinoa, and steamed broccoli.'],
            ['Snack', 'Greek yogurt with nuts.'],
            ['Dinner', 'Salmon, sweet potato, and green beans.'],
          ].map(([title, description], idx) => (
            <div key={idx} className="flex items-start">
              <span className="text-blue-500 font-bold">{title}:</span>
              <p className="ml-2">{description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Women's Diet Chart */}
      <div className="bg-white shadow-xl rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
        <div className="bg-gradient-to-r from-pink-600 to-red-600 text-white text-center py-6 animate-gradient">
          <h2 className="text-3xl font-bold">Women's Diet Chart</h2>
        </div>
        <div className="p-8 space-y-6">
          {[
            ['Breakfast', 'Smoothie with spinach, berries, and almond milk.'],
            ['Lunch', 'Grilled tofu, brown rice, and mixed greens.'],
            ['Snack', 'Hummus with carrot and cucumber sticks.'],
            ['Dinner', 'Grilled chicken, roasted vegetables, and a side salad.'],
          ].map(([title, description], idx) => (
            <div key={idx} className="flex items-start">
              <span className="text-pink-500 font-bold">{title}:</span>
              <p className="ml-2">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>



      {/* Custom Diet Chart Section */}
      <div className="bg-white shadow-2xl rounded-lg p-10 mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Add Your Custom Diet Chart</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            ["Gender", "Select Gender", "gender", ["Men", "Women"]],
            ["Meal Type", "e.g., Breakfast, Lunch, Snack, Dinner", "mealType", []],
            ["Preference", "Select Preference", "preference", ["Veg", "Non-Veg"]],
            ["Description", "Describe the meal", "description", []],
          ].map(([label, placeholder, name, options], idx) => (
            <div key={idx}>
              <label className="block text-gray-700 font-bold mb-2">{label}:</label>
              {options.length > 0 ? (
                <select
                  name={name}
                  value={customDiet[name]}
                  onChange={handleInputChange}
                  className="w-full border-gray-300 rounded-lg shadow-md focus:ring focus:ring-green-400 transition duration-300"
                >
                  <option value="">{placeholder}</option>
                  {options.map((option, i) => (
                    <option key={i} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type="text"
                  name={name}
                  value={customDiet[name]}
                  onChange={handleInputChange}
                  placeholder={placeholder}
                  className="w-full border-gray-300 rounded-lg shadow-md focus:ring focus:ring-green-400 transition duration-300"
                />
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={addCustomChart}
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300"
          >
            Add Diet Chart
          </button>
        </div>
      </div>

      {/* Display Custom Diet Charts */}
      <div className="bg-gray-50 p-10 rounded-lg shadow-lg mb-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Your Custom Diet Charts</h2>
        {customCharts.length === 0 ? (
          <p className="text-center text-gray-600">No custom diet charts added yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customCharts.map((chart, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6 space-y-4">
                {["Gender", "Meal Type", "Preference", "Description"].map((field, idx) => (
                  <p key={idx} className="font-bold">
                    {field}:{" "}
                    <span className="text-gray-700">
                      {chart[field.toLowerCase().replace(" ", "")]}
                    </span>
                  </p>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Export to Word Button */}
      <div className="text-center">
        <button
          onClick={generateWordDocument}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300"
        >
          Export to Word
        </button>
      </div>
    </div>
  );
};

export default DietChartPage;
