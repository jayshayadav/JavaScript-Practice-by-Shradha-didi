// //Ludo gotti Game->

// // function dice(){
// //     let random=Math.floor(Math.random()*6)+1;
// //     console.log(random);
// // }

// // dice();
// // dice();
// // dice();
// // dice();


// // function namePrint(name,age){
// //      console.log(`${name}'s age is ${age}`);
// // }

// // namePrint("Jay",19);

// // function numlen(x){
// //     for(let i=0; i<x; i++){
// //         console.log(i);
// //     }
// // };
// // numlen(10);


// // function voteInfo(age){
// //     if(age>18){
// //         console.log("You can vote");
// //     }
// //     else{
// //         console.log("You can't vote");
// //     }
// // }

// // voteInfo(10);

// // function same(x,y){
// //     if(x==y){
// //         console.log("You entered both valuem same ")
// //     }
// //     else{
// //         console.log("You not entered both value same ")
// //     }
// // }

// //avg of three number

// // function avg(x,y,z){
// //     let avgNum=(x+y+z)/3;
// //     console.log(avgNum);
// // }

// // avg(15,10,5)


// //multiplication table

// // function print_Table(x){
// //   for(let i=x; i<=x*10; i+=x){
// //     console.log(i);
// //   }
// // }
// // print_Table(70);

// // function prac(x,y){
// //     multi=x*y;

// //     return multi;
// // }

// // console.log(prac(3 ,5))


// // function numSum(n){
// //     let sum=0;
// //    for(let i=1; i<=n; i++){
// //      sum+=i;
// //    }
// //    return sum;
// // }
// // console.log(numSum(5));
 


// // let sa=["jay","@","hello","1"];

// // function concat(str){
// //     let result = "";

// //     for(let i=0; i<str.lenght; i++){
// //         result+=str[i];
// //     }
// //     return result;
// // }


// //Global and function scope

// // let sum=58;
// // function CountSum(x,y)
// // {
// //     // let sum=5+4;
// //     console.log(sum);
    
// // }
// // CountSum();
// // console.log(sum);



// //Practice Question

// // let greet="Hello!";
// // function changegreed(){
// //     let greet="Namaste!";
// //     console.log(greet);

// //     function ineergreet(){
// //         console.log(greet);
// //     }
// //     ineergreet();

    
// // }

// // console.log(greet);
// // changegreed();


// // const sum=function (x,y){
// //     return x+y;
// // }



// //higher order function

// // function print(fuct, count){
// //     for(let i=0; i<count; i++){
// //         fuct()
// //     }
// // }

// // let greet = function(){
// //     console.log("Hello")
// // }

// // print(greet, 10);


// //higher order function (return)

// function oddevenfactory(request){
//     if(request=="odd"){
//         return function(n){
//             console.log(!(n%2==0));
//         }
//     }
//     else if(request=="even"){
//         return function(n){
//             console.log(n%2==0)
//         }
//     }
//     else{
//         console.log("Wrong request");
//     }
// }

// let request="odd";



// const calculator={
//     add(a,b){
//         return a+b;
//     },
//     sub(a,b){
//         return a-b;
//     }
// }













//// Assigment Question //////

let num=0;


function count(str){
    for(let i=0; i<str; i++){
      if(str=="a"){
        num=num+[i];
      }
    }
}

let str="jay";
count();