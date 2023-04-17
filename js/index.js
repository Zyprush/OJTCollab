// Get the name of the admin who logged in
const adminName = "Jake";

// Update the content of the welcome message
const welcomeMessage = document.getElementById("welcome-message");
welcomeMessage.innerHTML = `Welcome! ${adminName}`;

// Set initial values for the variables
let totalWebinars = 10;
let participants = 100;
let pendingWebinars = 5;

// Update the HTML with the variables' values
document.getElementById("total-webinars").innerHTML = totalWebinars;
document.getElementById("participants").innerHTML = participants;
document.getElementById("pending-webinars").innerHTML = pendingWebinars;
