//  function is the block of code you define it once and use it as many timmes as you want . so you declare it once and use where ever you want 

// the basic structure of a function
// function the name of function before () is called as function execution context 


function add () {
    console.log(3+4);
}
add()

// function with parameter 

function addi(a,b,) {
    
    console.log(a+b);

}

addi(5, 6);

function multiply(x,y,z) {
    console.log(x*y*z);

}

multiply(3,2,3)


//  function with return statement 
//  whenever you are having a return statement in your function, then at the time of invokation dont call the directly , rather than assign a new variable or const and then print the function , 

function doublethevalue (n) {
    const value = 2*n
    return value 

}
const newvalue = doublethevalue(10)
console.log(newvalue);

// arrow ffunction 

const displayuserinfo = () => {
    console.log("user info ");
}
displayuserinfo ()


//  function expression , in function expression we will assign a function to a variable 
const a = function () {
    return 1 ;
}













