
# Expense Tracker Web Application

This web application is designed to help users track their expenses by allowing them to add, view, and manage their expenses. It consists of a Spring Boot backend for managing expenses and a React frontend for user interaction.

## Table of Contents
- Getting Started
- Prerequisites
- Installation
- Project Structure
- Usage
- Backend
- Frontend
- API Endpoints
- Database Configuration
- Dependencies
- Contributing
## Getting Started
- Prerequisites
Before you can run this project, make sure you have the following software installed:

- Java 8 or higher
- PostgreSQL database
- Node.js
- npm (Node Package Manager)
## Installation
1. Clone the repository to your local machine.
    git clone https://github.com/yourusername/expense-tracker.git
2. Backend Setup:
- Open the 'application.properties' file in src/main/resources and configure your PostgreSQL database settings.
- Run the Spring Boot backend server:
    ./mvnw spring-boot:run
    The backend server will run on port 2345.
3. Frontend Setup:
   - Navigate to the 'frontend' directory:
     [cd frontend]
   - Install the required frontend dependencies:
     [npm install]
   - Run the React frontend:[npm start]
   The React development server will run on port 3000.
4. Access the web application in your browser by visiting http://localhost:3000.




## Project Structure
- 'src/main/java/com/expense': Backend Java code.
- 'frontend': Frontend React code.
- 'frontend/src/components': React components for the user interface.
- 'frontend/src/services': Services for making API calls to the backend.
## Usage
You can use this web application to:

- Add new expenses.
- View a list of all expenses.
## Backend
The backend is built using Spring Boot and provides API endpoints for managing expenses.


## Frontend
The frontend is built using React and allows users to interact with the application.


## API Endpoints
- 'GET /api/expenses': Get a list of all expenses.
- 'POST /api/expenses/post': Create a new expense.
## Database Configuration
The application uses a PostgreSQL database. You can configure the database connection in the 'application.properties' file in the backend.
## Dependencies
- Spring Boot
- React
- PostgreSQL database
## Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request. We welcome contributions and improvements.
## Screenshots
![App Screenshot 1](ExpenseItem-Web-Application\Screenshot%20(178).png)

