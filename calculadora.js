function appendToDisplay(value) {
    document.getElementById('result').value += value;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function backspace() {
    const display = document.getElementById('result');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('result');
    try {
        const result = eval(display.value);
        if (result !== undefined) {
            addToHistory(result);
            display.value = result;
        }
    } catch (error) {
        display.value = 'Erro';
    }
}

function addToHistory(result) {
    const now = new Date();
    const formattedDatetime = formatDateTime(now);

    const table = document.getElementById('historyTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const dateTimeCell = newRow.insertCell(0);
    const resultCell = newRow.insertCell(1);

    dateTimeCell.textContent = formattedDatetime;
    resultCell.textContent = result;

    newRow.onclick = function() {
        document.getElementById('result').value = result;
    };
}

function formatDateTime(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

