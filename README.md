# DevTalk - Developer Networking Platform

DevTalk is a full-stack social networking application specifically designed for developers. It allows users to connect with other developers, share skills, and build a professional network through a seamless interface.

## 🚀 Features

- **User Authentication**: Secure signup and login using JWT and bcrypt.
- **Developer Profile**: Create and manage your professional profile with bio, skills, age, and gender.
- **Smart Feed**: Discover other developers based on common interests and skills.
- **Connection System**: Send and receive connection requests. Support for "Interested" and "Ignored" actions.
- **Real-time Chat**: Integrated real-time messaging using Socket.io for instant communication with connections.
- **Responsive UI**: Modern, premium design built with React, Tailwind CSS, and DaisyUI.
- **Secure API**: Robust Express.js backend with thorough data validation and secure cookie-based session management.

## 💻 Tech Stack

### Frontend
- **React**: Library for building the user interface.
- **Redux Toolkit**: For efficient state management across the application.
- **Tailwind CSS & DaisyUI**: For styling and premium UI components.
- **React Router Dom**: For navigation and routing.
- **Socket.io-client**: For real-time chat functionality.
- **Axios**: For making API requests to the backend.

### Backend
- **Node.js & Express.js**: Runtime and framework for the RESTful API.
- **MongoDB & Mongoose**: Database and ODM for storing user data, connections, and chats.
- **JWT (JSON Web Tokens)**: For secure user authentication.
- **Socket.io**: For real-time, bi-directional communication.
- **Validation**: Strict server-side validation using custom logic and `validator` library.

## 🔄 Application Flow

### 1. Registration & Authentication
- User signs up with name, email, and password.
- Upon login, a secure HTTP-only cookie containing a JWT is issued to the browser.
- All protected routes verify this JWT for authorization.

### 2. Profile Setup
- Users are encouraged to complete their profiles.
- Profile data includes: `photoUrl`, `bio`, `skills`, `age`, and `gender`.
- Profile editing allows users to keep their information up-to-date.

### 3. Discovery & Connection
- The **Feed** displays profiles of other developers you haven't interacted with yet.
- Use the **Interested** button to send a connection request.
- Use the **Ignore** button to skip a profile.
- The **Requests** page shows incoming requests where you can "Accept" or "Reject".

### 4. Networking
- Once a request is accepted, the developer is added to your **Connections** list.
- You can now see their full details and initiate a chat.

### 5. Real-time Communication
- Integrated chat system allows instant messaging.
- Messages are stored in MongoDB and delivered in real-time via Socket.io.

## 🛠️ Installation & Setup

### Prerequisites
- Node.js installed
- MongoDB instance (local or Atlas)

### Backend Setup
1. Navigate to the `backend` directory.
2. Install dependencies: `npm install`
3. Create a `.env` file with `JWT_SECRET`, `MONGO_URI`, and `PORT`.
4. Start the server: `npm run dev`

### Frontend Setup
1. Navigate to the `frontend` directory.
2. Install dependencies: `npm install`
3. Start the Vite development server: `npm run dev`

