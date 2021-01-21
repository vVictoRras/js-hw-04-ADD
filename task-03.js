// Створити метод  compact  який приймає масив і
// вертає новий де відсутні будь-які значення що при переведені в
// bool дають false
function compact(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(compact([1,0,'', null, 'Hello'])); // [1,'Hello']