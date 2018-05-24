let CustomerService = require('./services').CustomerService;

let serviceObject = new CustomerService();

for (let customer of serviceObject) {
    console.log(customer.toString());
    console.log('Continuing ...');
}
