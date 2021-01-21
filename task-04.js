// Написати ф-ю  showDeliveryStatus  яка приймає
// масив і виводить на екран інформацію про доставку товара всіх
// типів.    
// Якщо прогрес доставки 100 показувати строку "Done"
// Якщо прогрес доставки < 100 показувати строку "In progress"
// Якщо прогрес доставки null показувати строку "Ready for delivery"
     
function showDeliveryStatus(arr) {
  let result = [];
  let newArr = Object.values(arr);
  for (let i = 0; i < newArr.length; i += 1) {
    if (newArr[i].deliveryProgress == null) {
      result.push("Ready for delivery");
    } else if (newArr[i].deliveryProgress == 100) {
      result.push("Done");
    } else {
      result.push("In progress");
    }
  }
    console.log(result.join(", "));
} 
  
const ordersA = [
 { name: 'Phone', price: 12300, deliveryProgress: 50, type: 0 },          
{ name: 'Computer', price: 230000, deliveryProgress: 100, type:1 },              
{ name: 'Tablet', price: 5000, deliveryProgress: null, type: 2},
];
              
const ordersB = [
{ name: 'Phone', price: 12300, deliveryProgress: 50, type: 0 },                
{ name: 'Tablet', price: 5000, deliveryProgress: null, type: 2},        
];
              
showDeliveryStatus(ordersA); // "In Progress", "Done", "Ready for delivery"
showDeliveryStatus(ordersB); // "In progress", "Ready for delivery"