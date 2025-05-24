// Project 2: Greeting Based on Name and Age

let name = prompt("Enter your name:");
let age = parseInt(prompt("Enter your age:"));
let message;

if (age < 13) {
  message = "Hello " + name + "! You're a child.";
} else if (age >= 13 && age < 20) {
  message = "Hello " + name + "! You're a teenager.";
} else if (age >= 20 && age < 60) {
  message = "Hello " + name + "! You're an adult.";
} else {
  message = "Hello " + name + "! You're a senior citizen.";
}

alert(message);
