# Unichat Application

![Chat Application](https://i.ibb.co/GJwyy9m/Bv9-Js3-QLOLY-HD.jpg)

## Introduction

This is a code repository for Realtime Chat Application with Social Auth and dedicated chat APIs/sockets.

Built this react chat app using [https://chatengine.io](https://chatengine.io)

Firebase and Chat Engine are greats tools to setup apps fast and easily.

- **Google Authentication:** Users can sign in securely with their Google accounts.
- **Real-Time Chat:** Instant messaging with real-time updates.
- **User Profiles:** Usernames and avatars enhance the chat experience.
- **Message History:** View past conversations and messages.
- **Easy Deployment:** Simple setup and deployment to get your chat app running quickly.

## Getting Started

1. Clone the repository to your local machine or download the source code.
2. Navigate to the project directory.

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.
- Firebase project set up with Authentication and Realtime Database.
- Chat Engine account and chat configuration.

### Installation

1. Install project dependencies by running:

   ```
   npm install
   ```

2. Create a `.env` file in your project directory and add the necessary environment variables for Firebase and Chat Engine. For example:

   ```
   REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
   REACT_APP_AUTH_DOMAIN=your-firebase-auth-domain
   REACT_APP_PROJECT_ID=your-firebase-project-id
   REACT_APP_STORAGE_BUCKET=your-firebase-storage-bucket
   REACT_APP_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
   REACT_APP_APP_ID=your-firebase-app-id
   REACT_APP_CHAT_ENGINE_PROJECT_ID=your-chat-engine-project-id
   REACT_APP_CHAT_ENGINE_USER_NAME=your-chat-engine-username
   REACT_APP_CHAT_ENGINE_USER_SECRET=your-chat-engine-secret
   ```

3. Start the development server:

   ```
   npm start
   ```

4. Open your web browser and navigate to `http://localhost:3000` to access the application.

## Tech Stack

- **Frontend Framework:** React.js
- **Authentication:** Firebase Authentication with Google
- **Real-Time Database:** Firebase Realtime Database
- **Chat Functionality:** Chat Engine API
- **Styling:** CSS (you can also use CSS-in-JS libraries like styled-components)

## Customization

- Modify the application's appearance and user interface by editing the CSS styles.
- Extend the functionality with additional features such as message editing, file sharing, or group chats based on your requirements.

## License

This project is licensed under the [MIT License](LICENSE).

---

**Note:** This is a basic README template for a React Chat Application with Firebase and Chat Engine. Depending on the features and complexity of your application, you may want to provide more details and explanations about the code structure and usage.

