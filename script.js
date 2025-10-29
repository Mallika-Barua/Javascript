//arithmatic operator
// let a=5;
// let b=2;
// console.log("a + b =", a+b);
// console.log("a - b =", a-b);
// console.log("a ** b =", a**b);

//....unary operator
// let a=5; 
// let b=2;
// a=a-1;
// b--;
// console.log("a =", a, " b =", b);
// console.log("--a=", --a);
// console.log(a);

//...assignment opertors
// let a=5;
// let b=2;
// a += 1; //a = a+1
// console.log("a =",a) //a =6
// a %= 4; //a=a%4
// console.log("a =", a); //a=2
// a **= 4; //a=2*2*2*2
// console.log("a =", a); //a = 16

//......comparison operator
// let a=5;//numb
// let b=2;
// let c="5";//string -> numb
// console.log("a == b", a==b); //true 
// console.log("a != b", a!=b);//true
// console.log("a == c", a==c);//true
// console.log("a === c", a===c);//false

//....logical operator
// let a=5;
// let b=6;
// let con1= a<b;
// let cond2= a===5;
// // console.log("cond1 && cond2 =", a<b && a===5);
// // console.log("cond1 && cond2 =", a>b || a===5);
// console.log("!(a<b) =", !(a<b));


//....conditional statements 
// let age=16;
// if(age>=18){
//     console.log("you can vote");
// }

// if(age<18){
//     console.log("you can not vote");
// }

// let mode="light";
// let color;
// if(mode==="dark-mode"){
//     color="dark";
// }
// if(mode==="light"){
//     color="white";
// }
// console.log(color);

// //odd or even
// let num=7;
// if(num%2==0){
//     console.log(num, " is a even" )
// }
// else{
//     console.log(num, " is odd");
// }


//.....ternary operators
// let age=26;
// let result = age>=18? "adult":"not adult";
// console.log(result);

// alert("hello");//onetime popup
// let name=prompt("enter a numbr");
// console.log(name);//prompt same as alert. but can input msg

//....enter a num prompt check mulitiplied by 5 or not
// let num=prompt("Enter a num:");
// if(num%5==0){
//     console.log("multiplided by 5");
// }
// else{
//     console.log("not multiplied by 5");
// }

//........write a grade according their num
// let num=prompt("Enter your score: (0-100)");
// let grade;
// if(num>=80 && num<=100){
//     grade="A";
// }
// else if(num>=70 && num<=89){
//     grade="B";
// }
// else if(num>=60 && num<=69){
//     grade="C";
// }
// else if(num>=50 && num<=59){
//     grade="D";
// }
// else if(num>=0 && num<=49){
//     grade="F";
// }
// console.log("Your grade was: ", grade);

//.......Loop
// let sum=0;
// for(let i=1; i<=5; i++){
// sum=sum+i;
// }
// console.log("sum= ", sum);

//.....while loop
// let i=1;
// while(i<=5){
//     console.log("i= ", i)
// }

//....do while loop
// let i=20;
// do{
// console.log("apna college", i);
// i++;
// }
// while(i<=10);

//.for-of loop
// let size=0;
// for(let i of str){// i=iterator->character
//     console.log("i= ", i);
//     size++;
// }
// console.log("ss= " , size);

// let stu={
//     name: "mallika",
//     age : 20,
//     cgpa: 30,
//     isPass: true,
// };
// for (let x in stu){
//     console.log("key= ",x, "value= ", stu[x]);
// }

//practice 01
// for(let num=0; num<=100; num++){
//     if(num%2==0){
//             console.log("num= ", num);

//     }  
// }

//practice 02
// let gameNum=25;
// let userNum = prompt("guess the num: ");
// while(userNum != gameNum){
//  userNum=prompt("you enterd wrong num. Guess again: ");
// }
// console.log("you got the right num ");

//...STRING
// let str ="apna college";
// console.log(str[2]); //n

// //......Templete literals
// let obj ={
//     item: "pen",
//     price: 10,
// };
// let output= `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

//....string methods
// let str="apna college";
// console.log(str);
// let newstr=str.toUpperCase();
// console.log(newstr);
// let s="apna college";
// console.log(s.toUpperCase());

//slice
// let str="abcd";
// console.log(str.slice(1,3));

// //concat
// let str1="apna";
// let str2="college";
// let res= str1.concat(str2);
// //let res = str1 + str2;
// console.log(res);

//replce
// let str= "hello";
// console.log(str.replace("h", "y"));

// //charAt
// let str="apna college";
// console.log(str[2 ]);

//....practice
//QS1
// let name= prompt("Enter your name:");
// let username="@"+name+name.length;
// console.log(username);