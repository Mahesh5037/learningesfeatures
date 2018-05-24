function getData(inputA, inputB) {
    console.log('getData() called ...');

    let result = inputA + inputB;

    console.log('getData() completed ...');

    return result;
}

function doSomething(a, b) {
    console.log('Doing Something ...');

    let result = getData(a, b);

    console.log('Done Something ... ' + result);
}

getData = new Proxy(getData, {
    apply: (target, current, args) => {
        console.log('Proxying Started ...');

        let originalResult = target(...args);

        console.log('Original Result altered ...');

        originalResult *= originalResult;

        return originalResult;
    }
});

doSomething(10, 20);
