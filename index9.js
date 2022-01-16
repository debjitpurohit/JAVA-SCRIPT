///////////////////AROOW FUNCTON//////////////

// function sum(a,b){
//     return a+b;
// }
sum =(a,b)=>{
    return a+b;
}
console.log(sum(3,4));

//set time out function

logkaro =()=>{
    document.querySelectorAll('.container')[1].innerHTML ="<b> it changed after 5 seccond due to settimeout function </d>"
    console.log("i am your log")
}
// setTimeout(logkaro,5000) // (function, time in mili seccond) // after 2 seccond i am your log is printed
// clr=setTimeout(logkaro,5000) clr take an id from settimeout
// clearTimeout(clr) the timeout function cleared and printing after 5 seccond that stop


//setInterval(logkaro,2000) //after every 2 seccond console is repetadely printed
// clr=setInterval(logkaro,2000) //clr take an id
//clearInterval(clr) // the interval function cleared and repetadely printing stop



////////////////// local storage//////////////

localStorage.setItem('name','debjit') // ('key' , 'value')
console.log(localStorage)
// localStorage.clear() // clear the localstorage
// console.log(localStorage)
// localStorage.getItem('name')
localStorage.removeItem('name')
console.log(localStorage)