let passport = {
    name: "Petr",
    surname: "Petrov",
};

let passportCopy = {...passport};
passportCopy.name = "Ivan";

console.log(passport); // {name: "Petr", surname: "Petrov"}
console.log(passportCopy); // {name: "Ivan", surname: "Petrov"}
