# Uploader Project

The **Uploader** project consists of two main parts: the **Client** and the **Server**.

- The **Client** is built with **React** and **Vite**, providing a fast and responsive user interface for file uploads.
- The **Server** is built with **Node.js** and **Express**, using **express-fileupload** to handle file uploads and return the file information to the client.

## Client

The client is a React application that allows users to upload files to the server. It provides a user-friendly interface to select files, view upload progress, and receive feedback after the upload is complete.

### Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that focuses on speed and performance.
- **HTML/CSS**: Standard web technologies for structuring and styling the application.
- **JavaScript**: The programming language used to add functionality to the app.

### Features
- Upload files to the server
- Display upload progress
- Show success or error messages based on the upload status

The client is available online at: [http://uploader.stefansabev.com](http://uploader.stefansabev.com)

## Server

The server is built with **Node.js** and **Express** to handle file uploads from the client. It processes the uploaded files and stores them on the server, returning the file path to the client upon success.

### Technologies Used
- **Node.js**: A JavaScript runtime for building scalable network applications.
- **Express**: A minimal and flexible Node.js web application framework.
- **express-fileupload**: A middleware to handle file uploads in the Express application.
- **PM2**: A process manager for Node.js applications to keep the server running in production.

### Features
- Accepts file uploads from the client
- Stores uploaded files in a designated folder on the server
- Returns the file path after a successful upload


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
