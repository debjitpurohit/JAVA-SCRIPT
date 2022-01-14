//////////////////loops////////////




/////////////////////for loops/////////////////

var arr = [1, 2, 3, 4, 5, 6, 7]; // array lenght is 7
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// ///////////////// forEach loop////////////////

arr.forEach(function (element) {
    console.log(element)
})


// // const a = 0;
// //  a= a+1; these throw an error bcz Uncaught TypeError: invalid assignment to const 'a'


// ////////////////while loop///////////////

let j = 0;
// while (j < arr.length) {
//     console.log(arr[j]);
//     j++
// }

////////////////do-while loop///////////////
do {
    console.log(arr[j]);
    j++
   
} while (j < arr.length);



////////////break statemnet////////////
var arr2 =[2,4,6,8,10]
for (var i = 0; i < arr2.length; i++) {
    if (i > 2){
        break;
    }
     console.log(arr2[i]);
}

///////////////continue statement/////////

var arr2 =[2,4,6,8,10]
for (var i = 0; i < arr2.length; i++) {
    if (i == 3){
        continue; // only not print for i=3  mane 8  print hbe nh
    }
     console.log(arr2[i]);
}

