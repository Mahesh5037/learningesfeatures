let Customer = require('../models').Customer;

const INVALID_ARGUMENTS = 'Invalid Argument(s) Specified';
const MIN_LENGTH = 3;
const TIMEOUT_PERIOD = 3000;
const MATCH_INDEX = 0;

class CustomerService {
    constructor() {
        this.customers =
            [
                new Customer(11, 'Northwind', 'Bangalore', 12000, true, 'Simple Record'),
                new Customer(12, 'Southwind', 'Bangalore', 12000, true, 'Simple Record'),
                new Customer(13, 'Eastwind', 'Mysore', 12000, true, 'Simple Record'),
                new Customer(14, 'Westwind', 'Bellary', 12000, true, 'Simple Record'),
                new Customer(15, 'Oxyrich', 'Hassan', 12000, false, 'Simple Record'),
                new Customer(16, 'Adventureworks', 'Gulbarg', 12000, true, 'Simple Record'),
                new Customer(17, 'Footmart', 'Hubli', 2000, false, 'Simple Record')
            ];
    }

    getCustomers(customerName) {
        let promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    if (!customerName) {
                        resolve(this.customers);

                        return;
                    }

                    let validation = customerName.length >= MIN_LENGTH;

                    if (!validation) {
                        reject({
                            reason: INVALID_ARGUMENTS
                        });

                        return;
                    }

                    let filteredCustomers =
                        this.customers
                            .filter(customer => 
                                customer.name.indexOf(customerName) >= MATCH_INDEX);

                    resolve(filteredCustomers);
                }, TIMEOUT_PERIOD);
            });

        return promise;
    }
}

module.exports = CustomerService;
