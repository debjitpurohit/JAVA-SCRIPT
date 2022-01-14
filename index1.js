// called dome manipulation


// 1   ways to print in javascript
/*console.log("this is me", 4 + 6, "another log");
 document.write("this is documnet write");*/
// alert("me");
// 2    ....console API
btn.innerHTML = "<b>Debjit</b>";
document.getElementsByTagName('h1')
document.getElementsByTagName('h1')[0]
document.getElementsByTagName('h1')[0].style.fontSize = "100px"
console.warn("this is a warning");
console.clear()
console.assert(4 == (6 - 2)) // if 4==4 then assertion passed but if 4!= 6 then assertion failed

//3 ... javascripts variable
//what are variables?....containers to store data values
var number1 = 34; //to store a number in variables
var number2 = 56;
console.log(number1 + number2); //to print in console by js as like printf


// 4 ......datatypes in javascripts
//number
var num1 = 455;
var num2 = 56.76;
// string
var str1 = "this is a string";
var str2 = 'this is also a string';
// object= key value pairs
var marks = {
    ravi: 45,
    suvam: 78,
    debjit: 99.75
}
console.log(num1)
console.log(num2)
console.log(str1)
console.log(str2)
console.log(marks)

//booleans
var a = true;
var b = false;
console.log(a, b)

//to print a undefined value
//var und=undefined;
var und; // value na dile ota undefined e print hbe
// console.log(undefined)
console.log(und)

//to print a null value
var n = null;
console.log(n)
console.log(null)

/*at very high level , there are two data types in JS
1. primitive data types: undefined ,null, number, string , boolean ,symbol
2 . reference data types : arrays and objects  
*/

//arrays
var arr = [1, 2, 3, 4, 5]; //arrays of 5 ...0,1,2,3.4
console.log(arr)
console.log(arr[4])
var arr = [1, 2, "Debjit", 4, 5]; // also use string with in array
console.log(arr[2])
console.log(arr)

// to take user input
// var  ( age )= window.prompt("Enter your ( age ): ");