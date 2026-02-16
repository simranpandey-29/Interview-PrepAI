const Groq = require("groq-sdk");
const { conceptExplainPrompt, questionAnswerPrompt } = require("../utils/prompts");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const generateInterviewQuestions = async (req, res) => {
  try {
    const { role, experience, topicsToFocus, numberOfQuestions } = req.body;

    if (!role || !experience || !topicsToFocus || !numberOfQuestions) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const prompt = questionAnswerPrompt(
      role,
      experience,
      topicsToFocus,
      numberOfQuestions
    );

    const chatCompletion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant", 
      messages: [
        { role: "system", content: "You are a helpful technical interview assistant." },
        { role: "user", content: prompt },
      ],
      temperature: 0.3,
    });

    const rawText = chatCompletion.choices[0]?.message?.content;
    const data = JSON.parse(rawText); // Groq gives cleaner JSON usually

    res.status(200).json(data);
  } catch (error) {
    console.error("Groq error:", error);
    res.status(500).json({
      message: "Failed to generate questions",
      error: error.message,
    });
  }
};

const generateConceptExplanation = async (req, res) => {
  try {
    const { question } = req.body;

    const prompt = conceptExplainPrompt(question);

    const chatCompletion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "user", content: prompt },
      ],
      temperature: 0.2,
    });

    const rawText = chatCompletion.choices[0]?.message?.content;

    // Extract title & explanation safely
    const titleMatch = rawText.match(/TITLE:\s*(.*)/);
    const explanationMatch = rawText.match(/EXPLANATION:\s*([\s\S]*)/);

    const data = {
      title: titleMatch ? titleMatch[1].trim() : "Explanation",
      explanation: explanationMatch ? explanationMatch[1].trim() : rawText,
    };

    res.status(200).json(data);
  } catch (error) {
    console.error("Groq explanation error:", error);
    res.status(500).json({ message: "Failed to generate explanation" });
  }
};



module.exports = { generateInterviewQuestions, generateConceptExplanation };
