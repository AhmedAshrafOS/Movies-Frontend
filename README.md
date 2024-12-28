# Movies Frontend Project

## Overview
The Movies Frontend project is a React-based web application that provides a user interface for interacting with the Movies Backend. It allows users to:

- Browse a list of movies.
- View detailed information about individual movies.
- Rate movies.
- Authenticate and manage sessions via a secure login.

This project complements the [Movies Backend](https://github.com/AhmedAshrafOS/Movies-backend), providing a complete system for movie management.

---

## Technologies Used

- **Frontend Framework**: React.js
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **HTTP Client**: Axios
- **Environment Management**: `.env`

---

## Features

1. **User Authentication**
   - A secure login form is integrated with the Movies Backend API.
   - Token storage in localStorage for session management.

2. **Movie Browsing**
   - Display a paginated list of movies with details like title, description, and average ratings.

3. **Movie Ratings**
   - Logged-in users can submit ratings for movies.

4. **Responsive Design**
   - Fully responsive layout using Tailwind CSS.

---

## Installation Instructions

### Prerequisites

- **Node.js**: Version 14 or higher.
- **npm** or **yarn**: For package management.

### Steps to Install and Run

1. **Clone the Repository**

   ```bash
   git clone https://github.com/AhmedAshrafOS/Movies-Frontend.git
   cd Movies-Frontend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   - Create a `.env` file in the root directory.
   - Add the following variable to connect to the backend:

     ```env
     REACT_APP_API_URL=http://localhost:8080/api
     ```

4. **Run the Application**

   ```bash
   npm start
   ```

   - The application will be available at `http://localhost:3000`.

5. **Build for Production**

   - To create a production-ready build:

     ```bash
     npm run build
     ```

   - The build files will be located in the `build/` directory.

---

## Project Structure

- `src/components/`
  - Reusable React components (e.g., MovieCard, Navbar).
- `src/pages/`
  - Main application pages (e.g., Home, Login, MovieDetails).
- `src/context/`
  - React Context API files are used to manage the global state.
- `src/services/`
  - API service files (e.g., Axios configurations).

---

## Notes for Reviewers

- **Purpose**: This frontend application demonstrates user-centric features for interacting with the Movies Backend API.
- **Focus Areas**:
  - Integration with backend APIs for authentication and CRUD operations.
  - Responsive and user-friendly design.
- **Recommendation**: Test the frontend alongside the backend for a seamless experience.

Contributions and feedback are welcome!

