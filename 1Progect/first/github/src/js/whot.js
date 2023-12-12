// Получаем ссылки на таблицу и кнопку
const table = document.getElementById('myTable');
const addRowButton = document.getElementById('addRow');

// Обработчик клика по кнопке
addRowButton.addEventListener('click', () => {
    // Создаем новую строку
    const newRow = table.insertRow();

    // Создаем ячейки для имени и фамилии
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell1 = newRow.insertCell(2);
    const cell2 = newRow.insertCell(3);

    // Задаем значения ячеек (можно получать их из формы или других источников)
    cell1.textContent = 'Date';
    cell2.textContent = 'Сколько получил';
    cell1.textContent = 'Сколько потрачено';
    cell2.textContent = 'На что потрачено';
});