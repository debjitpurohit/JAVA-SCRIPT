

// function clicked(){
//     console.log('the button was clicked')
// } on click event by html on button 2


////////////events///////////////////////////
document.getElementById('btn')

// btn.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML ="<b> we have clicked </d>"
//     console.log("btn click hua")
// })


// btn.addEventListener('mouseover',function(){
//     console.log("mouse on btn")
// })

// btn.addEventListener('mouseout',function(){
//     console.log("mouse out from btn")
// })
let prevHTML =document.querySelectorAll('.container')[1].innerHTML
 btn.addEventListener('mouseup',function(){
    document.querySelectorAll('.container')[1].innerHTML =prevHTML
     console.log("mouse up after clicked on btn")  }) // mouse click korlam and chere dilam that means mouse up

 btn.addEventListener('mousedown',function(){
    document.querySelectorAll('.container')[1].innerHTML ="<b> we have clicked </d>"
   console.log("mouse down after clicked on btn")
}) // mouse click krlm and hold kre thaklam eans mousedown

