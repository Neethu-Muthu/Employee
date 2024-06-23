// Importing required modules
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3004;

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// In-memory storage for employees
let employees = [];

// Serve the home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Serve the add employee page
app.get('/employee', (req, res) => {
    res.sendFile(__dirname + '/public/employee.html');
});

// Serve the view employee page
app.get('/employee/:id', (req, res) => {
    res.sendFile(__dirname + '/public/viewemployee.html');
});

// Serve the update employee page
app.get('/update/:id', (req, res) => {
    res.sendFile(__dirname + '/public/updateemployee.html');
});

// Serve the delete employee page
app.get('/delete/:id', (req, res) => {
    res.sendFile(__dirname + '/public/deleteemployee.html');
});

// Handle adding a new employee (POST)
app.post('/api/employee', (req, res) => {
    const { EmployeeID, name, position } = req.body;
    employees.push({ EmployeeID, name, position });
    res.status(201).send('Employee added successfully');
});

// Handle getting employee details by ID (GET)
app.get('/api/employee/:id', (req, res) => {
    const employee = employees.find(e => e.EmployeeID === req.params.id);
    if (employee) {
        res.json(employee);
    } else {
        res.status(404).send('Employee not found');
    }
});

// Handle updating an employee (PUT)
app.put('/api/employee/:id', (req, res) => {
    const { name, position } = req.body;
    const index = employees.findIndex(e => e.EmployeeID === req.params.id);
    if (index !== -1) {
        employees[index] = { EmployeeID: req.params.id, name, position };
        res.send('Employee updated successfully');
    } else {
        res.status(404).send('Employee not found');
    }
});

// Handle deleting an employee (DELETE)
app.delete('/api/employee/:id', (req, res) => {
    const index = employees.findIndex(e => e.EmployeeID === req.params.id);
    if (index !== -1) {
        employees.splice(index, 1);
        res.send('Employee deleted successfully');
    } else {
        res.status(404).send('Employee not found');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
