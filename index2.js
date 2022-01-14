////////////////////////////////operators////////////
       
       
       
       ///////////arithmatic operators/////////////
var a = 34;
var b = 56;               // + - / * are the operators ,,,and 34 , 56 is operants
console.log("the value of a+b is", a + b);
console.log("the value of a-b is", a - b);
console.log("the value of a*b is", a * b);
console.log("the value of a/b is", a / b);
      // /////////assingment operATOR is used to assingened a value//////////
var c = b;
//c += 2; // add equal to ..c=c+2
// c-=2; // c=c-2;
// c *=2 // c= c*2
// c /= 2; // c=c/2
console.log(c);
        ///////////comparison operators///////////
var x=34;
var y =34;
var z =56;
console.log(x == y);
console.log(x == z);
console.log(x >= z);
console.log(x <= z);
console.log(x != y);
console.log(x != z);
console.log(x > z);
console.log(x < z);
        //////////logical operator//////////////////
    //logical and
console.log( true && true)  
console.log( true && false)
console.log( false && false) 
console.log( false && true)
     // logical or
console.log( true || true)  
console.log( true || false)
console.log( false || false) 
console.log( false || true)
      //logical not
console.log(!false) // not false as like not equal (!=)
console.log(!true)



//////////////////functions///////////////////



function avg(a,b){
    //return (a+b)/2 ; //logic
    c = (a+b)/2 ;
    return c;
}
c1 = avg(4 ,6);
c2 = avg(14 ,16);
console.log(c1 , c2) 





