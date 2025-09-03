# Workout Tracker

This is a full-stack web application designed to be a personal workout companion. It provides users with personalized workout recommendations based on their mood, energy levels, and muscle soreness. Users can also log their workouts to track their progress over time.

---

## Features

* **User Authentication**: Secure user registration and login functionality.
* **Personalized Workout Recommendations**: Get workout suggestions tailored to your daily physical and mental state. The recommendation engine considers:
    * Mood and energy levels
    * Muscle soreness and sleep duration
    * Targeted muscle groups
* **Workout Logging**: Easily log your exercises, including sets, reps, and weights. (In progress)
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
