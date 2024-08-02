# README.md

## Overview

This project is a Single Page Application (SPA) designed to give you control over your mouse through a web interface. It offers a seamless and intuitive way to manage your mouse actions remotely.

## Technology Stack

The application is divided into two main components:

1. **Backend (API)**: The backend is powered by a .NET Core API. It serves as the main engine driving the application, handling all the server-side logic and operations.

2. **Frontend (SPA)**: The frontend is built using Angular, a robust and popular framework for developing SPAs. This component delivers a smooth user experience and communicates with the backend API to perform the necessary actions.

## Setting Up the Project

To set up and run this application, please follow these steps:

1. **Navigate to the Frontend Directory**:
   - Open your terminal or command prompt.
   - Change the current directory to the frontend folder by executing the following command:
     ```sh
     cd ./fe-tv-phone
     ```

2. **Install Frontend Dependencies**:
   - Once inside the frontend directory, install all the required dependencies using Yarn. Yarn is a package manager that provides a secure and faster way to manage project dependencies.
     ```sh
     yarn
     ```

3. **Start the Application**:
   - Return to the root directory of the project.
     ```sh
     cd ..
     ```
   - Start both the backend and frontend servers simultaneously by running the following command:
     ```sh
     yarn start:all
     ```

This command will initiate both the .NET Core API and the Angular SPA, allowing you to control your mouse via the web application.

## Additional Information

- Ensure that you have all the necessary prerequisites installed on your system, such as Node.js, Yarn, and .NET Core SDK, to run this application smoothly.
- If you encounter any issues during the setup or execution, check the console output for error messages and troubleshoot accordingly.
- This project is designed to be extensible. You can modify or enhance it by adding new features or improving the existing ones. The modular architecture of both the backend and frontend makes it easier to manage and scale the application.

Enjoy using your new web-based mouse control application!
