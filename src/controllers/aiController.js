import { GoogleGenerativeAI } from "@google/generative-ai";
import { getMimeTypeFromUri } from "../services/commonFuctions.js";

export const getCalorieDetails = async (req, res) => {
  const { imageBase64 = "" } = req.body;
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" }); // Or "gemini-pro-vision" for multimodal
  const prompt = `
You are a nutrition analysis assistant.
Analyze the provided food image and return detailed information in strict JSON format, following this schema:

{
  "food_name": "string",
  "estimated_calories_kcal": "number",
  "serving_size": "string",
  "macronutrients": {
    "protein_g": "number",
    "carbohydrates_g": "number",
    "fat_g": "number",
    "fiber_g": "number",
    "sugar_g": "number"
  },
  "micronutrients": {
    "calcium_mg": "number",
    "iron_mg": "number",
    "vitamin_c_mg": "number",
    "vitamin_a_µg": "number",
    "potassium_mg": "number"
  },
  "health_score": "number (0-100)",
  "confidence_score": "number (0-1)",
  "notes": "string"
}
Rules for health_score:
- 80–100 → Very healthy (balanced, nutrient-dense)
- 60–79 → Moderately healthy
- 40–59 → Average
- 20–39 → Unhealthy
- 0–19 → Very unhealthy


If multiple foods are visible, return an array of JSON objects.
Only output valid JSON — no explanations or markdown.
`;
  let schemaText = {
    role: "food item",
    content: [
      {
        type: "text",
        text: "Analyze the provided food image and extract detailed nutritional information. Estimate total calories, macronutrients (protein, fat, carbohydrates), micronutrients (vitamins, minerals), and an overall health score for the entire dish. The health score should be between 0 and 100, where 100 is the healthiest also extract ingredients and their images urls with extensions from google search if they are not found then return urls as empty and how the health score has generated and give some points related to protien, fat, carbs and vitamins in the food. Return the result strictly following the given JSON schema.",
      },
      {
        type: "text",
        text: 'JSON Schema:\n{\n  "dishName": string, // Name of the dish or best guess\n  "totalCalories": number, // Estimated total calories for the full dish\n  "servingSize": string, // e.g., \'1 bowl\', \'1 plate\', \'250g\'\n  "macronutrients": {\n    "protein_g": number,\n    "fat_g": number,\n    "carbohydrates_g": number\n  },\n  "micronutrients": {\n    "fiber_g": number,\n    "sugar_g": number,\n    "vitaminA_mg": number,\n    "vitaminC_mg": number,\n    "calcium_mg": number,\n    "iron_mg": number\n  },\n  "healthScore": number, // 0 to 100 — overall dish health rating\n  "summary": string // short explanation of why this health score was given\n "ingredients": [{name:string,imageUrl:string}] // list of identified ingredients with their images and name\n "detailedSummary":{"healthScoreBreakdown":{description:string,status:string // only this status high, low, moderate, good},"proteinPoints":{description:string,status:string // only this status high, low, moderate, good},"fatPoints":{description:string,status:string // only this status high, low, moderate, good},"carbsPoints":{description:string,status:string // lonly this status high, low, moderate, good},"vitaminsPoints":{description:string,status:string // only this status high, low, moderate, good}} // detailed summary of health score breakdown and points related to protein, fat, carbs and vitamins in the food\n}\n',
      },
    ],
  };

  try {
    const mimeType = getMimeTypeFromUri(imageBase64);
    console.log("mimeType", mimeType);
    const result = await model.generateContent({
      contents: [
        {
          //   role: "food item",
          parts: [
            // { text: prompt },
            {
              text: "Analyze the food image and return output in the JSON schema below.",
            },
            { text: JSON.stringify(schemaText) },
            {
              inlineData: {
                mimeType: mimeType,
                data: imageBase64,
              },
            },
          ],
        },
      ],
    });
    const response = await result.response;
    let text = response.text();
    text = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .replace(/^[^{\[]*/, "") // remove leading text before JSON
      .replace(/[^}\]]*$/, "");
    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch (e) {
      parsed = { rawText: text, error: "Failed to parse JSON response" };
    }
    res.status(200).json(parsed);
  } catch (error) {
    console.error("Error generating content:", error);
    res.status(500).json({ error: error.message });
  }
};
