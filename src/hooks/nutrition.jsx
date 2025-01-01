import { useState } from "react";

const useNutrition = (apiKey) => {
  const [nutrition, setNutrition] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNutritionData = (predictionClassName) => {
    setLoading(true);
    setError(null);

    fetch(`https://api.api-ninjas.com/v1/nutrition?query=${encodeURIComponent(predictionClassName)}`, {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.length > 0) {
          setNutrition(data[0]); // Use the first result
        } else {
          setError("No nutrition data found for this food item.");
        }
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  };

  return { nutrition, fetchNutritionData, loading, error };
};

export default useNutrition;
