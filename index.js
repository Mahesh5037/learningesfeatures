let Customer = require('./models').Customer;
let CustomerService = require('./services').CustomerService;

let serviceObject = new CustomerService();
let searchString1 = 'wind';
let searchString2 = 'work';

let windPromise = serviceObject.getCustomers(searchString1);
let workPromise = serviceObject.getCustomers(searchString2);

Promise
    .all([windPromise, workPromise])
    .then(
        results => {
            console.log('Results ...');

            for (let result of results) {
                for (let customer of result) {
                    console.log(customer.toString());
                }

                console.log('===============================');
            }
        },
        error => console.log('One of the promises failed!'));