// var
console.log(a);
var a = 10;
var a = 20;
// console.log(a);

// let
// console.log(b);
let b=60
b=70
// console.log(b);
//const
const c = 10
// c=20
console.log(c);

// functions
// function add(){

// }
// add()

// arrow
let add = ()=>console.log("Arrow function");
add()
// ananoums
// const ana = (function(){

// })
// IFFI

// premitive
// number
let e = 10
// string
// names = "vvvvjh"
// boolean
isAlive=true
// Undefined
let r;
// Null

// Non Premitive
// array
let arr = [10,20,30,40,650]

// for loops
// for(let x = 0;x<arr.length;x++){
//     console.log(arr[x]);    
// }

// for(let x of arr){
//     console.log(x);
    
// }
// for(let x in arr){
//     console.log(x);
    
// }

// arr.forEach((x)=>console.log(x))
// map
arr.map((x)=>console.log(x))
// Reduce
let total = arr.reduce((acc,sum)=>acc+sum)
console.log(total);

// filter
let arr1 = [11,13,14,16,17]
console.log(arr1.filter((x)=>x%2!=0));

// Comparsion
// ==,===
let num1 = 60
let num2 = "60"
console.log(num1==num2);
console.log(num1===num2);

// Logical
// && , || ,!=

// Object
const person = {
    names:"xyz",
    age:20,
    place:"Bargur"
}


console.log(Object.entries(person))
console.log(person.names);

// Destructure
const {names,place} = person
console.log(names,place);

// Spread
let arr2 = [...arr,...arr1]
console.log(arr2);

//rest
let [first,second,...third] = arr2
console.log(first);
console.log(second);
console.log(third);
// Incerment
let newNum = 10
// newNum = newNum+1
console.log(newNum++);
console.log(++newNum);


// decrement Operator
console.log(--newNum);

