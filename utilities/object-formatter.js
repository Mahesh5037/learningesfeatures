const DELIMITER = ', ';
const INVALID_ARGUMENTS = 'Invalid Argument(s) Specified!';
const NO_TRAIL_CHARS = 2;
const START_POS = 0;

class ObjectFormatter {
    static format(obj) {
        if (!obj) {
            throw new Error(INVALID_ARGUMENTS);
        }

        let formattedMessage = '';

        for (let property in obj) {
            let propertyValue = obj[property];

            if (typeof propertyValue !== 'function') {
                formattedMessage += `${propertyValue}${DELIMITER}`;
            }
        }

        formattedMessage = formattedMessage.substr(START_POS,
            formattedMessage.length - NO_TRAIL_CHARS);

        return formattedMessage;
    }
}

module.exports = ObjectFormatter;
