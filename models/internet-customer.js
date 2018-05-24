let Customer = require('./customer');
let ObjectFormatter = require('../utilities').ObjectFormatter;

const DELIMITER = ':';
const INVALID_ARGUMENTS = 'Invalid Argument(s) Specified!';

class InternetCustomer extends Customer {
    constructor(id, name, address, credit, status, remarks, blogUrl) {
        super(...arguments);

        this.blogUrl = blogUrl;
    }

    static create(csvString) {
        if(!csvString) {
            throw new Error(INVALID_ARGUMENTS);
        }        

        let splittedCsvString = csvString.split(DELIMITER);
        let internetCustomer = new InternetCustomer(...splittedCsvString);

        return internetCustomer;
    }
}

module.exports = InternetCustomer;
