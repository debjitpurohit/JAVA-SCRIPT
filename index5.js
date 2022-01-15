        /////////arrayas method----------------_______________________


let myArr =["fan",6,8,"camera",12,null,true]
console.log(myArr.length);
//myArr.pop(); // remove last one element from array
//myArr.pop();
//myArr.push("Debjit") // to add one extra element with in array in the last
//myArr.shift();  // remove first one element from array
// myArr.unshift("Debjit"); // to add one extra element with in array in the forst
//myArr.toString();   //convert the array(["fan",6,8,"camera",12,null,true]) in to string ("fan,6,8,camera,12,,true")
myArr.sort();
console.log(myArr);


  //____________________________________string method_____________________________

  let mylovelystring="Debjit is a good guy"; // spaces occupay 1 leghth for debjit(6) is(2) a(1) good(4) guy(3) space(4)= 20
//   console.log(mylovelystring.indexOf("guy")) // bcz debjit strted from 0 and guy started from 17
  
  
//   let mylovelystring2="Debjit is a good boy good good";
//   console.log(mylovelystring2.indexOf("good"))  //print the index of first one good
//   console.log(mylovelystring2.lastIndexOf("good"))  //print the index of last one good
// console.log(mylovelystring.slice(0,9));  // that slice the string between 0-8 th no. element  that means 0-8 no. elemnet printed ...9th element not printed in console
d=mylovelystring.replace("Debjit" , "Sneha"); // d =Sneha is a good guy  ..... replace the first occourance
e = mylovelystring.replace("guy" , "girl") // e =Debjit is a good girl
f = d.replace("guy" , "girl"); //f= Sneha is a good girl
console.log(d , e , f ,mylovelystring)

