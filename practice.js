console.log('hello');

let array = [1,2,3,4] 
let newarray = array.push("pushing example")
// console.log(newarray);
console.log(array);     //  push is used to add element in the end of the array 

array.pop() 
console.log(array);   // to remove the last element of the array 

console.log(array[0]);

let a = array.map(x=> x*2)
// console.log(array);
console.log(a);



//  slice is used to return a nwe array from the selected index 



 let b = array.some(x=>x%2===0)

console.log(b);


//  reduce 
let sum = 0
let reduce = array.reduce((sum,x)=>sum=sum+x,0)
console.log(reduce);



let y = [1,2,3]
let mul = 0

let yr = y.reduce((mul,x)=>mul=mul+x,0)
console.log(yr);






//  for off and for in 




for (const key in y) {
//   console.log(key);  
}


for (const iterator of y) {
    // console.log(iterator);
}

array.forEach(element => {
    console.log(element*6);
});                             // for each modifies the same array 


array.forEach(element => {

})










//  STRINGS 

//  reverse of string     split reverse join 
 

//  split is use to convert the sttring into array 

let name1 = "sahikabdulrazzzak"
 let name2 = name1.split("a") 
//  console.log(name2);
let name = "sahik abdul razzzak"
let name3 = name.split(" ")
console.log(name3);


//  reverse is used to reverse the arrray 

let reverse = name3.reverse()
console.log(reverse);    


//  join is used to convert array into string


  let join = reverse.join(" ")
console.log(join);



let combined = name.split(" ").reverse().join(" ")
console.log(combined);






//  trim is used to remove all the sapces from start and end of the strings 





//  replace is used to rreplace the element of the strings 


let mydi = "mirza asad bhag"

console.log(mydi.replace("asad","asadullah"));


// SETS

let set = new Set("abdulul")      // it will remmove all the dublicate elements in that 

console.log(set);


let sett = new Set()
//  ADD function is used to add elements in the set 
console.log(sett);
sett.add(12)
sett.add(true)
sett.add("name")

console.log(sett);



let mappp = new Map()


mappp.set("id",5)
console.log(mappp);








let un ;
console.log(un);

let add = 20 
let save = "0"

// console.log(add/save);

let d = ""  
console.log(d);

console.log("worlll");



//  immediately invoked function 


(function () {
    console.log("raza bhai");
})()



//  call bind apply 



//  higher and first class function 


















//  Explain Implicit Type Coercion in javascript, difference between type conversion and type coercion



// type conversion  is used to change the data types of values and to use parseint and parsefloat things 


//  typre coerecion is shows the behaviour when we add a string and a numberr ,automatic and implicit conversion of data types from data type to the anther 









//  strict mode 



// strict mode eliminates some JavaScript silent errors by changing them to throw errors.
// strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations.
// strict mode prohibits some syntax likely to be defined in future versions of ECMAScript.


// closure in javascript 

// Closures A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.









// What is a Temporal Dead Zone?



// the time between declaration and initislization of the variable  is called as temporal dead zone 








//  rest parameter converts the elements into an array , its an improved way to handle functional parameters


function nr(...inputs) {

    console.log(inputs);

}


nr(1,4,5,6,8,0,)



setTimeout(() => {
    console.log("set");
}, 3000);
setTimeout(() => {
    console.log("hellooooooo");
}, 2000);








let hb = [1,2,3,4 ]
let b1 = [...hb]
console.log(b1);

































