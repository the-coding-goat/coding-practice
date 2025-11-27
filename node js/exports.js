// console.log("Hello, World!");


const sum = (num1 , num2)=>  num1 + num2;

const PI = 3.14;

class MathObject {
    constructor(){
        console.log("some math object")
    }
}

// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.MathObject = MathObject;


module.exports ={
    sum : sum,
    PI : PI,
    MathObject : MathObject
}


//class work 

/* 🧩 TOPIC 1: exports and require
🧠 Classwork 1 – Basic Module Export

Create a file mathUtils.js that exports two functions:

add(a, b) → returns sum

multiply(a, b) → returns product

Then, in app.js, import (require) the module and log the results of using both functions. 

🧠 Classwork 2 – Exporting an Object

Create a file student.js that exports an object with:

name, age, and a method greet() that logs "Hello, I am <name>".

In another file main.js, require the object and call the greet() method.


🧠 Classwork 3 – Multiple Exports

In converter.js, export:

A function toCelsius(f)

A function toFahrenheit(c)

Then use them in another file weather.js and display conversions for 100°F and 0°C.


*/
