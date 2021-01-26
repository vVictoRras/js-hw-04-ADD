// Написати метод  every який приймає масив і ф-ю
// callback (в якій ми будемо робити різні перевірки) Цей метод
// повертає true якщо кожен елемент масиву пройшов перевірку з
// callback. Якщо хоча б один елемент не проходить перевірку то
// повертає false, callback приймає елемент масиву.

function every(arr, callback) {
   let length = arr.length;
   for (let i = 0; i < length; i += 1) {
    if (!callback(arr[i])) {
      return false;
    }
  }
  return true;
}

function isMoreThanTen(elem) {
  return elem > 10;
}

function isLessThanTen(elem) {
  return elem < 10;
}
console.log(every([1, 2, 3, 4, 5], isLessThanTen)); // true (перевіряємо чи елементи <10)
console.log(every([2, 45, 67, 34], isMoreThanTen)); // false (перевіряємо чи елементи> 10)
