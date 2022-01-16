//////////////////JSON//////////

obj = {name:"harry" , length:1} // double caut e likhte hbe
// how to convert the object into string
js=JSON.stringify(obj) // JS BECOME A STRING
console.log(obj)
console.log(js)
//typeof js/obj ....used to know type of variable
console.log(typeof obj)
console.log(typeof js)

// how to convertback the string into object
parsed = JSON.parse(js) 
console.log(parsed)
console.log(typeof parsed)

////////////////////versions////////////////
//ECMAscript- older version of js

//backticks= template literals
a = 34
console.log(`this is my ${a}`)