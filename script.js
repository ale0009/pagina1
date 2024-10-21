// Create a global variable to store the workers
var workers = [];

// Create a function to login
function login() {
  // Get the username and password from the form
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Make a request to the server to login
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "login.php");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send("username=" + username + "&password=" + password);

  // Handle the response from the server
  xhr.onload = function() {
    if (xhr.status === 200) {
      // The login was successful, redirect to the create worker form
      window.location.href = "create.php";
    } else {
      // The login failed, show an error message
      alert("Login failed!");
    }
  };
}

// Create a function to create a worker
function createWorker() {
  // Get the worker data from the form
  var cedula = document.getElementById("cedula").value;
  var name = document.getElementById("name").value;
  var salary = document.getElementById("salary").value;
  var days_worked = document.getElementById("days_worked").value;
  var nhed = document.getElementById("nhed").value;
  var nhen = document.getElementById("nhen").value;
  var nhedd = document.getElementById("nhedd").value;
  var nheDN = document.getElementById("nheDN").value;
  var nhrn = document.getElementById("nhrn").value;

  // Make a request to the server to create the worker
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "create.php");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send("cedula=" + cedula + "&name=" + name + "&salary=" + salary + "&days_worked=" + days_worked + "&nhed=" + nhed + "&nhen=" + nhen + "&nhedd=" + nhedd + "&nheDN=" + nheDN + "&nhrn=" + nhrn);

  // Handle the response from the server
  xhr.onload = function() {
    if (xhr.status === 200) {
      // The worker was created successfully, show a success message
      alert("Worker created successfully!");
    } else {
      // The worker was not created successfully, show an error message
      alert("Error creating worker!");
    }
  };
}

// Create a function to read a worker
function readWorker() {
  // Get the worker's cédula from the form
  var cedula = document.getElementById("cedula").value;

  // Make a request to the server to read the worker
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "read.php");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send("cedula=" + cedula);

  // Handle the response from the server
  xhr.onload = function() {
    if (xhr.status === 200) {
      // The worker was found successfully, populate the form with the worker's data
      var worker = JSON.parse(xhr.responseText);
      document.getElementById("name").value = worker.name;
      document.getElementById("salary").value = worker.salary;
      document.getElementById("days_worked").value = worker.days_worked;
      document.getElementById("nhed").value = worker.nhed;
      document.getElementById("nhen").value = worker.nhen;
      document.getElementById("nhedd").value = worker.nhedd;
      document.getElementById("nheDN").value = worker.nheDN;
      document.getElementById("nhrn").value = worker.nhrn;
    } else {
      // The worker was not found, show an error message
      alert("Worker not found!");
    }
  };
}

// Create a function to update a worker
function updateWorker() {
  // Get the worker data from the form
  var cedula = document.getElementById("cedula").value;
