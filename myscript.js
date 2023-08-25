
// Q.1) Print even numbers between 1 and 20, but exclude multiples of 6.

// let i = 1;
// while (i <= 20) {
//     if (i % 2 === 0 && i % 6 !== 0) {
//       console.log(i);
//   }
//     i++;
//  }

// Q.2) Calculate the total price of items in a shopping cart, but apply a 10% discount to items that are on sale.
// let shoppingCart = [
//   { item: 'Shirt', price: 25, onSale: false },
//   { item: 'Jeans', price: 50, onSale: true },
//   { item: 'Shoes', price: 80, onSale: false },
//   { item: 'Hat', price: 15, onSale: true }
// ];
// let sum=0;
// for(let a of shoppingCart){
//     let prices=a.price;
//     if(a.onSale==true){
//       prices=a.price - prices*0.1;
//     }
//     sum+=prices
// }
// console.log(sum);



// Q.3) Double each number in an array using the map function.

// let numbers = [1, 2, 3, 4, 5];

// let doubledNumbers = numbers.map((number) =>{
//     return(number * 2);
// })
// console.log(doubledNumbers)



// Q .4)Remove the odd numbers from an array and get only the even numbers in a new array using filter function.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumbers = numbers.filter((number) =>{
//      return(number % 2 === 0);
// })
// console.log(evenNumbers);



// Q.5) Calculate the sum of numbers in an array using the reduce function.

// let numbers = [1, 2, 3, 4, 5];

// let sum = numbers.reduce((element1,element2) =>{
//     return(element1+element2);
// })
//  console.log(sum);



// Q.6) Find the first even number in an array using find function.

// let num=[13,8,3,4,5,6,7,10,9];
// let even= num.find((num) =>{
//     if(num%2==0){
//         return num;
//     }
// })
// console.log(even);

