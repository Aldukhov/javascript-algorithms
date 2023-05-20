/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 * 
*/

function intersection(arr1, arr2) {
    let arr3 = [];

    if(arr1.length >= arr2.length)
    {
      arr3 =  arr1.filter(function(item) {
        
            if(arr2.includes(item)) return item;
        
        });
    } else {

        arr3 =  arr2.filter(function(item) {
           
            if(arr1.includes(item)) return item;
      
        });
    }

    let newArr = [];

    arr3.forEach (function (item) {

        if (!newArr.length) {
            newArr.push(item);
        }

        if (!newArr.includes(item)) 
        {
            newArr.push(item);
        }
    });

return newArr;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []