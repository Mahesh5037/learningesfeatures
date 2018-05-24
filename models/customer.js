let ObjectFormatter = require('../utilities').ObjectFormatter;

class Customer {
    constructor(id, name, address, credit, status, remarks) {
        [
            this.id, this.name, this.address,
            this.credit, this.status, this.remarks
        ] = arguments;
    }

    toString() {
        return ObjectFormatter.format(this);
    }
}

module.exports = Customer;
