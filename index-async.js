let Customer = require('./models').Customer;
let CustomerService = require('./services').CustomerService;


// Promise
//     .all([windPromise, workPromise])
//     .then(
//         results => {
//             console.log('Results ...');

//             for (let result of results) {
//                 for (let customer of result) {
//                     console.log(customer.toString());
//                 }

//                 console.log('===============================');
//             }
//         },
//         error => console.log('One of the promises failed!'));

async function process() {
    try {
        let serviceObject = new CustomerService();
        let searchString1 = 'wind';
        let searchString2 = 'work';

        let windPromise = serviceObject.getCustomers(searchString1);
        let workPromise = serviceObject.getCustomers(searchString2);
        let results = await Promise.all([windPromise, workPromise]);

        for (let result of results) {
            for (let customer of result) {
                console.log(customer.toString());
            }

            console.log('===============================');
        }
    } catch (error) {
        console.log(`Error Occurred, Details : ${JSON.stringify(error)}`);
    }
}

process()
    .then(() => console.log('Continuing the work ...'));