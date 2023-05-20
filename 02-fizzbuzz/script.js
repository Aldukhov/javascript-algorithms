/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
*/

function fizzBuzz(num) {
    
    if(num%3===0 && num%15===0 || num===1){
        return console.log('fizzbuzz');
    } else if(num%3 ===0) {
        return console.log('fizz');
    } else if (num%5 ===0) {
        return console.log('buzz');
    } else return num;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fizzBuzz(15));