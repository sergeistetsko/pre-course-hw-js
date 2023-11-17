let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

let passportCopy1 = JSON.parse(JSON.stringify(passportWithAddress));
passportCopy1.address.city = "Bobryisk";

console.log(passportWithAddress.address.city);
console.log(passportCopy1.address.city);
