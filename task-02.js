// Написати метод  some  який приймає масив і ф-ю
// callback. Цей метод поверне true якщо хоча б один елемент масиву
// пройже перевірку з callback callback приймає елемент масиву

function some(arr, callback) {
  let length = arr.length;
  for (let i = 0; i < length; i += 1) {
    if (callback(arr[i])) {
      return true;
    }
  }
  return false;
}

function isLessThanTen(elem) {
  return elem < 10;
}
function isMoreThanTen(elem) {
  return elem > 10;
}
console.log(some([1, 2, 3, 23, 5], isMoreThanTen)); // true (перевіряємо чи елементи > 10)
console.log(some([12, 45, 67, 34], isLessThanTen)); // false (перевіряємо чи елементи< 10)
