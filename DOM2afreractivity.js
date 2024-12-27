// let para=document.querySelector('p');
// para.addEventListener("mouseenter" , function(){
//     para.style.fontSize="2rem";
//     console.log("You click on p");
// })


// let boxing = document.querySelector("div");
// boxing.addEventListener("mouseenter" , function(){
//     console.log("jay");
//     let random = getRandomColor();
//     boxing.style.backgroundColor=random;
// });


// function getRandomColor(){
//     let red = Math.floor(Math.random() *255);
//     let green = Math.floor(Math.random() *255);
//     let blue = Math.floor(Math.random() *255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }



//this in eventlisteners - concept

// let thees = document.querySelector('button');
// let h1 = document.querySelector('h1');
// let h3 = document.querySelector('h3');
// let p = document.querySelector('p');


// function changeColor(){
//     console.dir(this);
//     this.style.backgroundColor="red";
// }

// thees.addEventListener("click", changeColor);
// h1.addEventListener("click", changeColor);
// h3.addEventListener("dblclick", changeColor);
// p.addEventListener("mouseenter", changeColor);




//concept of keyword events

// let ipt = document.querySelector('input');

// ipt.addEventListener("keydown" , function(event){
//     console.dir(event.key);
//     console.dir(event.code);

// })



//concept of form event 

// let formn = document.querySelector('form')
// formn.addEventListener("submit", function(event){
// event.preventDefault();

// // let user = document.querySelector("#user");
// // let age = document.querySelector("#age");
// // let pass = document.querySelector("#pass");

// let user = this.elements[0]; //form.element[0];
// let age = this.elements[1];
// console.dir(formn)
// console.log("value - " , user.value);
// console.log("value - " , age.value);
// console.log("value - " , pass.value);

// alert(`Hii ${user.value} your age is ${age.value} and you set password ${pass.value}`);

// });


//more event last lecture

// let form=document.querySelector("form");

// form.addEventListener("submit" , function(event){
//     event.preventDefault();
// })

// let user =document.querySelector("#user");

// // user.addEventListener("input", function(){
// //     console.log(` ${user.value}`)
// // })
// user.addEventListener("change", function(){
//     console.log(` ${user.value}`)
// })



//example of create text editor
// let input = document.querySelector('input');
// input.addEventListener("keydown", function(){
//     console.log(input.value);
//     let p = document.querySelector('p');
//     p.innerText=input.value;
// })



///Assignement Solution

// Qs. 1-

// let input = document.querySelector('input');
// input.addEventListener('mouseout', function(){
//    console.log("that propgram follow the mouseout eventlistener concept");
// });

//Qs.2

// let body=document.querySelector('body');
// let button= document.createElement('button');
// button.style.height='0.5rem'
// button.innerHTML='Click';
// button.style.fontSize='2.5px';
// body.append(button);

// button.addEventListener("click", ()=>{
//     button.style.backgroundColor='green';
// })


// Qs - 03

// let inp = document.querySelector('input');
// inp.addEventListener("input", function(){
//     console.log(inp.value);
//     let h2= document.querySelector('h2');
//     h2.innerText=inp.value;
// })




// event bubbling

// let div=document.querySelector('div');

// div.addEventListener("click",(event)=>{
//     event.stopPropagation();
//     console.log("You clicked div class");
// })

// let ul=document.querySelector('ul');

// ul.addEventListener("click",(event)=>{
//     event.stopPropagation();
//     console.log("You clicked ul class");
// })

// let li=document.querySelector('li');

// li.addEventListener("click",(event)=>{
//     event.stopPropagation();
//     console.log("You clicked li class");
// })



//Todo app activity

let btn = document.querySelector('button');
let input=document.querySelector('input');
let ul = document.querySelector('ul');
btn.addEventListener("click", ()=>{
    let item = document.createElement('li');
    item.innerText=input.value;
    ul.appendChild(item);

    let delbtn = document.createElement('button')
    delbtn.innerText="Delete";
    delbtn.classList.add("delete");
    item.append(delbtn);


    input.value="";    
});

ul.addEventListener("click", (event)=>{
    if(event.target.nodeName=='BUTTON'){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log('remove');
    }
})