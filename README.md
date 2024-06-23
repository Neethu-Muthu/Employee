# Employee Management Application

This is a simple Employee Management Application that allows you to add, view, update, and delete employee details. The application uses an Express.js backend and a frontend built with HTML and Tailwind CSS.

## Features

- Add a new employee
- View details of an employee
- Update employee details
- Delete an employee

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/username/employee-management-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd employee-management-app
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

### Running the Application

1. Start the server:
    ```bash
    node app.js
    ```
2. Open your browser and navigate to `http://localhost:3000` to access the application.

### Project Structure

- `app.js`: The main server file that handles the backend logic.
- `public/`: Directory containing the frontend HTML files and static assets.
  - `index.html`: Home page with options to add or view employees.
  - `employee.html`: Form to add a new employee.
  - `viewemployee.html`: Page to view details of an employee.
  - `updateemployee.html`: Form to update employee details.
  - `deleteemployee.html`: Form to confirm deletion of an employee.

### API Endpoints

- `GET /`: Serves the home page.
- `GET /employee`: Serves the page to add a new employee.
- `GET /employee/:id`: Serves the page to view employee details.
- `GET /update/:id`: Serves the page to update employee details.
- `GET /delete/:id`: Serves the page to delete an employee.

#### API for Employee Management

- `POST /api/employee`: Add a new employee.
- `GET /api/employee/:id`: Get details of an employee by ID.
- `PUT /api/employee/:id`: Update details of an employee by ID.
- `DELETE /api/employee/:id`: Delete an employee by ID.

### Example Usage

1. **Add a new employee:**
   - Navigate to `http://localhost:3000/employee` and fill out the form.
   - Click "Submit" to add the employee.

2. **View an employee's details:**
   - Navigate to `http://localhost:3000/` and enter the Employee ID in the "View Employee" input field.
   - Click "View Employee" to see the details.

3. **Update an employee's details:**
   - Navigate to `http://localhost:3000/update/EMPLOYEE_ID`, replacing `EMPLOYEE_ID` with the actual ID of the employee.
   - Update the details and click "Update".

4. **Delete an employee:**
   - Navigate to `http://localhost:3000/delete/EMPLOYEE_ID`, replacing `EMPLOYEE_ID` with the actual ID of the employee.
   - Confirm the deletion.

### Notes

- This application uses an in-memory storage for employee data. All data will be lost when the server is restarted.
- For a production application, consider using a database to persist data.



### Acknowledgments

- This project was inspired by a simple blog application example.

