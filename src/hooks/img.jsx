import { useState } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import "@tensorflow/tfjs";

const useLocalImageRecognition = () => {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const recognizeImage = async (imageFile) => {
    setLoading(true);
    setError(null);

    try {
      // Load the MobileNet model
      const model = await mobilenet.load();
 
      // Create an image element to process the file
      const image = new Image();
      const imageUrl = URL.createObjectURL(imageFile);
      image.src = imageUrl;

      // Wait for the image to load before prediction
      await new Promise((resolve, reject) => {
        image.onload = resolve;
        image.onerror = reject;
      });

      // Run the model on the image
      const predictions = await model.classify(image);
      setPrediction(predictions[0]); // Get the top prediction

    } catch (err) {
      setError("Failed to recognize the image. Please try again.");
      console.error("Error in local image recognition:", err);
    } finally {
      setLoading(false);
    }
  };

  return { prediction, recognizeImage, loading, error };
};

export default useLocalImageRecognition;
