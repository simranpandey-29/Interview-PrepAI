const questionAnswerPrompt = (role, experience, topicsToFocus, numberOfQuestions) => (`
You are an AI trained to generate technical interview questions and answers.

Task:
- Role: ${role}
- Candidate Experience: ${experience} years
- Focus Topics: ${topicsToFocus}
- Write ${numberOfQuestions} interview questions.
- For each question, generate a detailed but beginner-friendly answer.
- If the answer needs a code example, add a small code block inside.
- Keep formatting very clean.
- Return a pure JSON array like:

[
  {
    "question": "Question here?",
    "answer": "Answer here."
  },
  ...
]

Important: Do NOT add any extra text. Only return valid JSON.
`);
const conceptExplainPrompt = (question) => (`
You are an AI tutor for beginner developers.

Explain the following interview question in simple terms:
"${question}"

Format your response strictly like this:

TITLE:
<short clear title>

EXPLANATION:
<detailed beginner-friendly explanation>

If needed, include code examples using markdown code blocks.

Do not return JSON. Do not add extra labels.
`);


module.exports = { questionAnswerPrompt, conceptExplainPrompt };
