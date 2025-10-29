// function myFunction(msg){
//     console.log("We are learning");
//     console.log(msg);
// }
// myFunction("hey bro!"); //function call

// function sum(x,y){
//     console.log(x+y);
// }
// sum(3, 9);

// function sum(x, y){
//     s=x+y;
//     return s;
// }
// let val =sum(3, 4);
// console.log(val);

//.......Arrow functions: =>

// function sum(a, b){
//     return a+b;
// }

// const arrowsum=(a, b) =>{
//     console.log(a+b);
// };

//Practice Qs1
// function countVowels(str){
//     let count = 0;
// for(const char of str){
// if(char ==="a" || char === "e" || 
//     char ==="i" || char ==="o" || char === "u"){
// count++;
//}
// }
// return count;
// }

//Practice Q2
// const countVow =(str) =>{
//     let count = 0;
// for(const char of str){
// if(char ==="a" || char === "e" || 
//     char ==="i" || char ==="o" || char === "u"){
// count++;
// }
//  }
//  return count;
// }

//....forEach loop in Arrays
//arr.forEach(call back function)
// let arr=[1, "hello", 3, 4, 5];
// arr.forEach(function printVal(val){
// console.log(val);
// }) 
// //or
// let jrr=["dhaka","chattogram", "sylhet", "rajshahi", "khulna"];
// jrr.forEach((val, idx, jrr) => {
//     console.log(val.toUpperCase(), idx, jrr);
// })

//****Higher order function/Methods****
//kono function ke perameter hisebe ney ba fucntion return kore dey


//Practice Qs1
//for a giver array of numbers, print the suare of each value using the forEach loop
// let arr=[1, 2, 3, 4, 5];
// arr.forEach((arr) => {
//     console.log(arr*arr); //arr**2
// })

//or
// let num =[12, 44,56];
// let calcSquare = (num)=>
// {
//     console.log(num*num);

// };
// num.forEach(calcSquare);

//....MAP
let num=[2,4,7,8];
let  newArr=num.map((val)=>
{
return val;
});
console.log(newArr);
