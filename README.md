<div align="center">
  
# 💻 DevTalk
### The Ultimate Social Network for Developers

[![React](https://img.shields.io/badge/React-18.3-blue?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Socket.io](https://img.shields.io/badge/Socket.io-4.8-010101?logo=socket.io&logoColor=white)](https://socket.io/)

A modern, fast, and feature-rich networking platform where software engineers can connect, share skills, and build professional relationships through a seamless and highly interactive interface. 

---
</div>

## ✨ Key Features

- 🔐 **Secure Authentication**: Robust JWT & bcrypt-based authentication with secure HTTP-only cookies.
- 🧑‍💻 **Developer Profiles**: Comprehensive user profiles featuring avatars, bio, skills, age, and gender. Fully editable.
- 📱 **Interactive Smart Feed**: Discover developers around the world based on common interests and stack.
- 🤝 **Connection System**: LinkedIn/Tinder-style connection requests. Send "Interested" or "Ignore" to curate your network.
- 💬 **Real-time Chat**: Integrated instant messaging powered by Socket.io. Chat live with your accepted connections.
- 🎨 **Premium UI/UX**: Stunning Glassmorphism aesthetic, sleek dark mode native design, built with Tailwind CSS and DaisyUI.
- 🛡️ **Robust Backend API**: Secure RESTful architecture with thorough server-side validation.

---

## 🏗️ Technology Stack

### Frontend Architecture
- **Framework**: React 18 (bootstrapped with Vite for instant server start and lightning-fast HMR)
- **State Management**: Redux Toolkit for predictable state management.
- **Routing**: React Router Dom v7 for seamless client-side navigation.
- **Styling**: Tailwind CSS combined with DaisyUI components for rapid, beautiful, and responsive UI development.
- **Real-time**: Socket.io-client for instant messaging delivery.
- **HTTP Client**: Axios configured with interceptors and credential support.

### Backend Architecture
- **Runtime & Framework**: Node.js and Express.js.
- **Database**: MongoDB (NoSQL) with Mongoose ODM for structured schemas and efficient queries.
- **Authentication**: JWT (JSON Web Tokens) for stateless authentication.
- **Real-time Engine**: Socket.io attached to the Express HTTP server.
- **Security**: Password hashing via bcrypt and robust custom data validation using the `validator` library.
- **Middleware**: CORS, cookie-parser, and custom authorization middlewares.

---

## 🔄 Application Flow & Core Modules

### 1. Registration & Authentication
- Users can sign up providing essential details (name, email, password).
- Upon successful login, the server issues a signed JWT stored securely in an HTTP-only cookie.
- Protected routes (Feed, Profile, Chat) verify this cookie via authorization middleware before serving data.

### 2. User Profiles
- Upon onboarding, developers are encouraged to complete their profiles.
- Profile editing interface allows dynamic updates to the user's `photoUrl`, `bio`, `skills`, etc.

### 3. Discovery & Networking Feed
- The **Smart Feed** serves profiles of developers that the user has not yet interacted with.
- **Interactions**: 
  - Click **Ignore** to pass on a profile.
  - Click **Interested** to send a connection request.
- The **Requests Module** displays all incoming connection requests, allowing users to "Accept" or "Reject".

### 4. Connections & Real-time Chat
- Accepting a request moves the user to the **Connections** list.
- Users can view detailed profiles of their connections.
- Clicking on a connection opens the **Chat Interface** where users can exchange messages instantly via WebSockets (`Socket.io`).

---

## 🚀 Getting Started

Follow these instructions to set up the project locally for development and testing.

### Prerequisites
- [Node.js](https://nodejs.org/en/) (v16+ recommended)
- [MongoDB](https://www.mongodb.com/) (Local instance or MongoDB Atlas cluster)
- Git

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd DevTalk
```

### 2. Backend Setup
Navigate to the `backend` directory and install dependencies:
```bash
cd backend
npm install
```

Create a `.env` file in the root of the `backend` directory and add the following environment variables:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key
```

Start the backend development server:
```bash
npm run dev
```

### 3. Frontend Setup
Open a new terminal, navigate to the `frontend` directory, and install dependencies:
```bash
cd frontend
npm install
```

*(Optional)* If your backend is running on a different port than 5000, you may need to update the `BASE_URL` in `frontend/src/utils/constants.js`.

Start the frontend Vite development server:
```bash
npm run dev
```

### 4. Open Application
Visit `http://localhost:5173` in your browser.

---

## 📁 Project Structure

```
DevTalk/
├── backend/                  # Express/Node API Server
│   ├── src/
│   │   ├── app.js            # Express application entry point
│   │   ├── routes/           # API Endpoints (auth, user, profile, request, chat)
│   │   └── ...               # Models, Middlewares, Utils
│   └── package.json
└── frontend/                 # React UI Application
    ├── src/
    │   ├── component/        # React components (Feed, Login, Chat, Profile, etc.)
    │   ├── utils/            # Redux Slices, Constants, Helpers
    │   ├── App.jsx           # Main Application Router
    │   ├── main.jsx          # React Root
    │   └── index.css         # Tailwind & Global Styles
    ├── tailwind.config.js    # Tailwind UI configuration
    └── package.json
```

---

<div align="center">
  <i>Built with ❤️ for the Developer Community.</i>
</div>
