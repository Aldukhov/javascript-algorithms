/*
 * Задача 8: «Фибоначчи»
 *
 * Последовательность Фибоначчи — это порядок чисел, где каждое последующее
 * число является суммой двух предыдущих: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 * 
 * Напишите функцию, которая принимает на вход число n и возвращает n-й элемент
 * последовательности Фибоначчи.
*/

function fibonacci(n) {
    let sum = 0;
    let oldNum = [];

    for (let i = 0; i < n; i++) {
        if (i === 0) {
            oldNum.push(sum);
        } else if (i === 1) {
            oldNum.push(sum); sum++;
        } else {
            oldNum.push(sum);
            sum = oldNum[i - 1] + oldNum[i];
        }
    }

    return sum;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fibonacci(4)); // 2. Четвёртое число последовательности — двойка (0, 1, 1, 2)