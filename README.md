This project is an AI-powered interview preparation platform built using the MERN stack (MongoDB, Express, React, and Node.js) with integration of the GROQ API for fast and low-latency large language model responses. The platform helps users prepare for technical and behavioral interviews by generating role-based interview questions, providing clear explanations for each question, and offering a “learn more” option when users want a deeper understanding of any concept.

The main objective of this project is to make interview preparation more interactive and effective compared to traditional static question lists. Instead of relying only on predefined content, users can dynamically generate questions based on their target role and immediately learn the reasoning and concepts behind them.

Project Overview

Users can select the role or domain they are preparing for, such as frontend developer, backend developer, or full-stack developer. Based on this input, the application generates relevant interview questions using the GROQ API. For every question, a detailed explanation is shown so the user can understand not just the answer but also the underlying concept. If the user finds a topic difficult, the “learn more” feature allows them to explore the concept in greater depth. The application is designed with a responsive frontend and a clean backend architecture to ensure a smooth user experience.

Tech Stack

The frontend of the application is built using React to create a responsive and interactive user interface. The backend is developed using Node.js and Express to handle API requests and integrate with the GROQ API. MongoDB is used as the database to store user-related information and application data. The GROQ API powers the AI functionality by generating role-based interview questions and explanations in real time.

How the System Works

When a user selects a role or topic, the frontend sends a request to the backend server. The backend constructs a prompt and sends it to the GROQ API. The response from the GROQ API contains the interview questions and explanations, which are then processed and returned to the frontend. The frontend displays this content in a structured and user-friendly format. If the user clicks on the “learn more” option, an additional request is sent to fetch more detailed explanations for the selected topic.
