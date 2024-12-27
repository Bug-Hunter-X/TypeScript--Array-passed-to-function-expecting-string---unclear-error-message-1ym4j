function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1:  Using array destructuring to extract the first element
let [firstName] = user;
console.log(greeter(firstName)); // Works correctly, prints "Hello, Jane"

// Solution 2:  Checking the type and handling the array appropriately
if (typeof user === 'string') {
  console.log(greeter(user));
} else if (Array.isArray(user) && user.length > 0 && typeof user[0] === 'string'){
  console.log(greeter(user[0]));
} else {
  console.log("Invalid input");
}

// Solution 3:  Changing the function signature to accept an array of strings
function greeter2(persons: string[]): string {
  return "Hello, " + persons.join(" ");
}
console.log(greeter2(user)); //Works correctly, prints "Hello, Jane Doe"
