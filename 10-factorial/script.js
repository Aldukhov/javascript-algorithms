/*
 * Задача 10: «Факториал»
 *
 * Напишите функцию factorial(n), возвращающую факториал неотрицательного
 * целого числа. Факториал — это произведение всех натуральных чисел
 * от 1 до n включительно. Факториал 0 равен 1.
 * 
*/

function factorial(n) {
    let fact = 1;

    if(Number.isInteger(n)) {

        if(n === 0 )
        { 
            return fact;
        };
        for(let i=1;i<=n;i++) {
        fact*=i;
        }

    } else return false;

    return fact;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(6)); // 720