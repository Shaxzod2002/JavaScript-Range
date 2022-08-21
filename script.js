const range = document.getElementById('range');
const rangeNumber = document.getElementById('range-number');
const valueNumber = document.getElementById('value-number');

range.addEventListener('mousemove', getRangeNumber);

function getRangeNumber() {
    rangeNumber.innerHTML = 10 * range.value;
    valueNumber.innerHTML = range.value;
}