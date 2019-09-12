let testVar = 1;

const iterateTestVar = () => {
    testVar++;
    console.log(testVar);
}

window.onload = function() {
    console.log('loaded', testVar);
};