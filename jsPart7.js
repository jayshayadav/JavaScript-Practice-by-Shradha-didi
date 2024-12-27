// let obj={
//     name:"Jay",
//     class:"IT",
//     CGPA:9.5,
//     me(){
//         console.log(this);
//         // console.log(this.name,this.class,this.CGPA);
//     },
// }

// function avg(){
//     console.log(this);
// }

// try and catch concept


// console.log("Hello");
// console.log("Hii");

// try{
//     console.log(a);
// }
// catch{
//     console.log("Caught a error , a is not defined");
// }
// console.log("Hello");
// console.log("Hii")



//Arrow function - concept

// let sum=(a,b) =>{
//     console.log(`The sum of ${a} and ${b} is ${a+b}`)
// }

// sum(3,4);



//setTime out concept

// console.log("Hii!");
// console.log("Hello!");

// setTimeout( ()=> {
//     console.log("jay shankar Yadav");
// },4000)
 
//ya


// console.log("Hii!");
// console.log("Hello!");

// let id = setInterval(msg,2000)

// function msg(){
//     console.log("Hey Bhai!")
// }
// let id2 = setInterval(mass,2000)

// function mass(){
//     console.log("Hey Jay!")
// }


// let std={
//     name:"jay",
//     dep:"IT",
//     roll_no:53,

//     normal: function(){
//         console.log(this);
//         return this.name;
//     },

//     arrow: ()=>{
//         console.log(this);
//         return this.name;
//     },

//     getinfo1: function(){
//      setTimeout(function(){
//         console.log(this)
//     },2000)
//      },
//     getinfo2: function() {
//         setTimeout(() =>{
//            console.log(this)
//         },2000)
//         }
//     }




const s= n =>{
    return n*n;
}

let id=setInterval( ()=>{
    console.log("Hello ")
})


