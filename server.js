// TODO: this file :)
const express = require("express");
const app = express();
const PORT = 3000;

const employees = require("./employees");   //Import from employees.js

app.get("/", (req, res) => {        //Send a message
  res.send("Hello");
});



app.get("/employees", (req, res) => {        //Send array of employees
  res.json(employees);
});



app.get('/employees/random', (req, res) => {        //Sends a random employee from the array 
   const randomEmployee = employees[Math.floor(Math.random()* employees.length)
    res.json(randomEmployee);
   });


app.get("/employees/:id", (req, res) => {       //Send employee from the array by given id
  const { id } = req.params;
  if (id < 0 || id >= employees.length) {
    res.status(404).send("Employee missing.");
  } else {
    res.json(employees[id]);
  }
});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});