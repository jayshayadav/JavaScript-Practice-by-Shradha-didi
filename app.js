// let img = document.getElementsByClassName("oldImg");

// for(let i=0; i<img.length; i++){
//     img[i].src="/spiderman_img.png";
//     console.log(`The link of image ${i} is changed`);
// }


// let ancer = document.querySelectorAll(".box a");
 

// for(link of ancer){
//     link.style.color='red';
//     link.style.backgroundColor='yellow';
//     link.style.fontSize='1rem'


// }

// let content = document.createElement('p');
// content.innerText='Hey This font color is red';
// document.querySelector('body').append(content);
// content.classList.add("color");

// let heading3=document.createElement('h3');
// heading3.innerText='I am with blue color';
// document.querySelector('body').append(heading3);
// heading3.classList.add("hcolor")

// let div = document.createElement('div');
// let h1 = document.createElement('h1');
// let p = document.createElement('p');
// h1.innerText="I'm in a div";
// p.innerText="ME TOO!";
// div.append(h1);
// div.append(p);
// document.querySelector('body').append(div);
// div.classList.add("borders");


//Assignment Question
//Qs.1 (sol)
let input = document.createElement("input");
let button = document.createElement("button");
button.innerText="Click me";
document.querySelector("body").append(input);
document.querySelector("body").append(button);

//sol 2
input.setAttribute("placeholder","username");
button.setAttribute('id','button');

//solution 3
button.setAttribute('id', 'btn');
button.classList.add("butt");

//sol 4
let h1= document.createElement("h1");
h1.innerText="DOM Practice";
h1.style.color='purple'
h1.style.textDecoration="underline"
document.querySelector("body").append(h1);

//solu 5
let p= document.createElement("p");
p.innerHTML="Apna College <b>Delta </b>Practice";
document.querySelector("body").append(p);

