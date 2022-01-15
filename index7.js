///////DOM =( documnent tobject model )   Manipulation

//document
let elem=document.getElementById('btn')
//document.getElementById('btn').click()
//document.getElementById('btn').style.border ='blue'
//document.getElementById('btn').style.border ='2px solid red'
console.log(elem)

let elemclass= document.getElementsByClassName('container')
console.log(elemclass)

elemclass[0].style.background ="yellow" //bcz under container 2 conation is there thats why [0]
elemclass[1].classList.add("bg-primary") //bg-primary is putted in under css
elemclass[0].classList.add("text-success")
elemclass[0].classList.remove("text-success")
// elemclass[0].innerHTML // print the htnml
// elemclass[0].innerText // print the inner text
console.log(elemclass[0].innerHTML);
console.log(elemclass[0].innerText)
tn = document.getElementsByTagName('div')
console.log(tn)


// to add h1 elemnet in tn[0]
createdElement = document.createElement('h1')
createdElement.innerText ="this is a created h1 tag"
tn[0].appendChild(createdElement);
console.log(createdElement.innerText)
// to REPLACE with p element 
createdElement2 = document.createElement('b')
createdElement2.innerText ="this is a created bold "
tn[0].replaceChild(createdElement2,createdElement);
console.log(createdElement2.innerText)
// removeChlild(element) ----> removes an element




console.log(document.URL)
console.log(document.title)
console.log(document.scripts)
console.log(document.links)
console.log(document.images)
console.log(document.domain)


// selecting using Query
sel =document.querySelector('.container') //print the first container
console.log(sel)
// 
sel =document.querySelectorAll('.container') //print all container
console.log(sel)

//
console.log(sel[1])
