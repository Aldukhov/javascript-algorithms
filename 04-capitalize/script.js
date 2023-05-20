/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    if(typeof str !== 'string' || (str.trim() === '')) return false;

    let newStr = str.toLowerCase().split(' ');
    let cap =[];

    newStr.forEach(function(item)
    {
      if(item.trim() === '') return false;

      cap.push(item[0].toUpperCase() + item.slice(1));
    });

    return console.log(cap.join(' '))
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"