# Workout Tracker

This is a full-stack web application designed to be a personal workout companion. It provides users with personalized workout recommendations based on their mood, energy levels, and muscle soreness. Users can also log their workouts to track their progress over time.

---

## Features

* **User Authentication**: Secure user registration and login functionality.
* <img width="1656" height="717" alt="image" src="https://github.com/user-attachments/assets/c2946c0f-0264-46c7-949b-7b73093b6568" />

* **Personalized Workout Recommendations**: Get workout suggestions tailored to your daily physical and mental state. The recommendation engine considers:
    * Mood and energy levels
    * Muscle soreness and sleep duration
    * Targeted muscle groups
    * <img width="1093" height="771" alt="image" src="https://github.com/user-attachments/assets/a6b32a54-971f-40ac-bf32-7f7fe162c4ea" />

    * <img width="1648" height="985" alt="image" src="https://github.com/user-attachments/assets/a30f2a09-423f-46af-887d-3087d6587f9b" />

* **Workout Logging**: Easily log your exercises, including sets, reps, and weights. (In progress)
* <img width="1682" height="995" alt="image" src="https://github.com/user-attachments/assets/45d13f02-280f-4d80-8ac3-bb8e0b0e287d" />

* **Dynamic User Interface**: A responsive and user-friendly interface built with React.

---

## Tech Stack

### Frontend

* **React**: A JavaScript library for building user interfaces.
* **Vite**: A fast build tool for modern web development.
* **React Router**: For declarative routing in the React application.
* **CSS**: For styling the application.

### Backend

* **Node.js**: A JavaScript runtime for building the server-side application.
* **Express**: A web application framework for Node.js.
* **MongoDB**: A NoSQL database for storing user data and workout information.
* **JWT (JSON Web Tokens)**: For secure user authentication.
* **bcrypt**: A library for hashing passwords.
* **Dotenv**: For managing environment variables.

---

## Getting Started

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

* Node.js and npm (or yarn)
* MongoDB

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/nidhukrishna/workouttracker.git](https://github.com/nidhukrishna/workouttracker.git)
    ```
2.  **Install backend dependencies:**
    ```bash
    cd backend
    npm install
    ```
3.  **Install frontend dependencies:**
    ```bash
    cd ../frontend
    npm install
    ```

### Running the Application

1.  **Start the backend server:**
    ```bash
    cd backend
    npm run dev
    ```
2.  **Start the frontend development server:**
    ```bash
    cd ../frontend
    npm run dev
    ```

---

## API Endpoints

### Authentication

* `POST /api/auth/register`: Register a new user.
* `POST /api/auth/login`: Log in an existing user.

### User Data

* `POST /api/user-data`: Save user's mood, energy, sleep, and soreness data.

### Recommendations

* `POST /api/recommendations`: Get personalized workout recommendations.
