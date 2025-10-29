// let marks=[12, 11, 22, 15,24];
// console.log(marks);
// console.log(marks.length);
// console.log(typeof marks);
// console.log(marks[2])

//string=immutable(can't change)
//array=mutable(can change)

//.....looping over a array

//for loop
//  let heroes=["ironman", "thor", "hulk", "spiderman"];
// for (let idx=0; idx<heros.length; idx++){
//     console.log(heros[idx]);
// }

//for of
// for(let hero of heroes){
//     console.log(hero);
// }

// //practice Q1
// let marks = [12, 11, 22, 15,24];
// let sum=0;
// for(let val of marks){
//     sum=sum+val;
//     //sum +=val;
//     //console.log(val);
// }
// let avg =sum/marks.length;
// console.log(`avg marks =${avg}`);

//Practice Q2
//  let items =[250, 139, 507, 50, 900];
// let idx= 0;
// for (let val of items){
//     console.log(`value at index ${idx} = ${val}`);
//     let offer =val/10;
//     items[idx]=items[idx]-offer;
//     console.log(`value after offer =${items[idx]}`);
//         idx++;
// }

//or
// for (let i=0; i<items.length; i++){
//     let off= items[i] / 10;
//     items[i] -= off;

// }
// console.log(items);

//....array methods

// //Push(): to ADD 
// let foodItems =["potato", "litchi", "banana"];
// foodItems.push("cherry");
// console.log(foodItems);

// //pop()
// let deletedItem=foodItems.pop();
// console.log(foodItems);
// console.log("deleted item: ", deletedItem);

// //toString()
// let tostr=foodItems.toString();
// console.log(tostr);

//concat(): to join multiple array
//  let fruits=["banana", "apple", "cherry"];
// // let fat=["butter", "oil", "ghee"];
// // let vegs=["potato", "carrot", "tomato"];
// // let foods = fruits.concat(vegs,fat);
// // console.log(foods);

// //unshift():same as push()
// fruits.unshift("mango");

// //slice():same as pop()
// console.log(fruits);
// console.log(fruits.slice(1, 3));

//splice():change original array (add, remove, replace)
//splice(start idx, delete count, new element)
//[1, 2, 3, 4, 5, 6]
//splice[2, 2, 101, 102]
//[1, 2, 101, 102, 5, 6]

// let arr=[1, 2, 3, 4, 5, 6, 7];
// //arr.splice(2, 2, 101, 102);

// //ADD ele
// arr.splice(2, 0, 101);
// console.log("add: ",arr);

// //DELETE ele
// arr.splice(3, 1);
// console.log("delete: ",arr);

// //REPLACE ele
// arr.splice(3, 1, 102);
// console.log("replace: ",arr);

// console.log(arr.splice(4));


//Practice q1
let companies=["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
//REMOVE
console.log( companies.shift());
console.log(companies);
//Remove & replace
companies.splice(2, 1,"Ola");
console.log(companies);
//push
companies.push("Amazon");
console.log(companies);