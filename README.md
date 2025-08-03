React Quiz App
A dynamic and engaging quiz application built with React. This project uses modern React features, including the useReducer hook for state management, to create an interactive quiz experience.

Table of Contents
Features

Technologies Used

Getting Started

Prerequisites

Installation

Usage

Project Structure

How It Works

Features
Dynamic Question Fetching: Loads quiz questions from a local API endpoint.

Interactive Quiz Interface: Users can select answers and receive immediate visual feedback.

Timed Questions: A countdown timer adds a challenging element to the quiz.

Progress Tracking: A visual progress bar shows the user's current question, total questions, and score.

Scoring System: Points are awarded for correct answers, and a final score is displayed.

High Score: The app keeps track of the user's highest score.

Restart Quiz: Users can restart the quiz after finishing.

Robust State Management: Utilizes the useReducer hook for predictable and centralized state logic.

Technologies Used
React: A JavaScript library for building user interfaces.

React Hooks:

useReducer: For managing complex component state.

useEffect: For handling side effects like data fetching and timers.

Fetch API: For making network requests to the questions server.

JSON Server: (Or any backend) to serve the questions.json data.

Getting Started
Follow these instructions to get a copy of the project up and running on your local machine.

Prerequisites
You need to have Node.js and npm (or yarn) installed on your machine. You will also need a local server to provide the quiz questions. A simple way to do this is with json-server.

Install json-server globally if you don't have it:

npm install -g json-server

Create a questions.json file in the root of your project with your quiz questions. The structure should look like this:

{
  "questions": [
    {
      "question": "Which is the most popular JavaScript framework?",
      "options": ["Angular", "React", "Svelte", "Vue"],
      "correctOption": 1,
      "points": 10
    }
  ]
}

Installation
Clone the repository:

git clone https://github.com/shoaib713343/react-quiz.git

Navigate to the project directory:

cd react-quiz

Install NPM packages:

npm install

Usage
Start the JSON server:
Open a new terminal window in your project's root directory and run:

json-server --watch questions.json --port 8000

This will start a server on http://localhost:8000.

Start the React application:
In your original terminal window, run:

npm start

The application will open in your browser at http://localhost:3000.

Project Structure
The application is structured into logical, reusable components:

src/
|-- App.js             # Main application component with state logic
|-- Header.js          # Application header
|-- Main.js            # Main content container
|-- Loader.js          # Loading spinner component
|-- Error.js           # Error message component
|-- StartScreen.js     # Initial screen to start the quiz
|-- Question.js        # Displays the current question text
|-- Options.js         # Displays the answer options for a question
|-- NextButton.js      # Button to move to the next question or finish
|-- Progress.js        # Displays quiz progress (score, question number)
|-- FinishedScreen.js  # Screen shown at the end of the quiz
|-- Footer.js          # Footer container for timer and next button
|-- Timer.js           # Countdown timer component

How It Works
The core logic of the application is managed within the App.js component using a reducer function and the useReducer hook.

State Management: The initialState object defines the shape of the application's state, including the questions, quiz status (loading, ready, active, finished), current question index, score, and more.

Actions: The reducer function handles different actions (dataReceived, start, newAnswer, nextQuestion, etc.) to update the state in a predictable manner.

Data Fetching: The useEffect hook fetches the quiz questions from the local server when the application first loads.

Component Rendering: The App component conditionally renders different UI components based on the current status of the quiz.
