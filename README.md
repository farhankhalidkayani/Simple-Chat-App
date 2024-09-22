

# Chat Application

A simple chat application built using **Node.js**, **Express**, **MongoDB**, and **EJS**. This app allows users to create, view, edit, and delete chat messages between users. It's designed as a small-scale project to demonstrate full-stack development with a focus on the backend and server-side rendering.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [License](#license)

## Features
- Create new chat messages
- View all existing chats
- Edit existing chat messages
- Delete chat messages
- Responsive design using EJS templates and CSS

## Project Structure
```
📦chat-app
 ┣ 📂models
 ┃ ┗ 📜chat.js        # Mongoose model for Chat
 ┣ 📂public           # Static files like CSS, images, etc.
 ┃ ┗ 📜styles.css     # CSS file for styling
 ┣ 📂views            # EJS templates
 ┃ ┣ 📜welcome.ejs    # Welcome page
 ┃ ┣ 📜chats.ejs      # View all chats
 ┃ ┣ 📜newForm.ejs    # Create a new chat
 ┃ ┣ 📜editForm.ejs   # Edit a chat
 ┃ ┗ 📜chat.ejs       # View chat details
 ┣ 📜app.js           # Main application file
 ┣ 📜package.json     # Project dependencies
 ┗ 📜README.md        # Documentation
```

## Technologies Used
- **Node.js**: Backend framework
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database for storing chat messages
- **Mongoose**: ODM for MongoDB
- **EJS**: Embedded JavaScript templates for server-side rendering
- **CSS**: For styling the front-end
- **Method-Override**: To support PUT and DELETE methods in forms

## Getting Started

### Prerequisites
To run this project, you need to have the following installed:
- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)

### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/chat-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd chat-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start your MongoDB server:
   ```bash
   mongod
   ```

5. Start the application:
   ```bash
   node app.js
   ```

6. Open your browser and go to:
   ```
   http://localhost:3000
   ```

## Usage
- To create a new chat message, click on "New Chat" from the chats page and fill in the form.
- You can view all chats on the main chats page.
- Click "Edit" to update a chat message, or click "Delete" to remove a chat.
- Click on a chat message for more detailed information.


## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


