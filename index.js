let Models = require('./models');

let csvString = '10:Northwind:Bangalore:12000:true:Simple Record:blogs.msdn.com/northwind';
let internetCustomer = Models.InternetCustomer.create(csvString);

console.log(internetCustomer instanceof Models.InternetCustomer);
console.log(internetCustomer instanceof Models.Customer);

console.log(internetCustomer.toString());

