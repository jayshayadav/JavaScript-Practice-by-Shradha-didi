// // //for each methos concept

// // let arr=["Jay","shankar",8,9];

// // arr.forEach((arr) => {
// //     console.log(arr);
// // })


// let obj=[{
//     name:"Jay",
//     CGPA:9.5
// },
// {
//     name:"Sanjay",
//     CGPA:8.0

// },
// {
//     name:"Shubh",
//     CGPA:8.9
// }]


// obj.forEach((obj)=>{
//   console.log(obj.CGPA);
// })



// //map concept//
// let arr=[2,4,5,9,7,10];
// let sqrt=arr.map((num) =>{
//     return num;
// })


// //filter concept
// let arr1=[2,4,5,9,7,10];
// let sqrt1=arr.map((num) =>{
//     return map%2==0;
// })


// //every concept
// let every= [2,4,6].every((el) => (el%2==0));

// //some concept
// let every1= [2,4,].some((el) => (el%2!=0));

//reduce concept

// let arr=[2,2,4,3];

// let final=arr.reduce((res,el)=>{
//     console.log(res);
//     return res+el;
// })

// console.log(final);


//max in array

//using for loop 
// let dig=[2,45,36,21,56,33];
// let max=-1;

// for(let i=0; i<dig.length; i++){
//   if(max<dig[i]){
//     max=dig[i];
//   }
// }
// console.log(max);

// let num=[2,4,5,7,9,3,6,12];
// let result= num.reduce((max,el) =>{
//     if(el>max){
//         return el;
//     }
//     else{
//         return max;
//     }
// })

// Practice Question 
// check if all number in our array are multiple of 10 of not

// let num=[25,10,40,50,30];

// let ismulti= num.every((num)=>{
//     return num%10==0;
// })

//create a fuction to find the min in an array.

// function getmin(num){
//     let min = num.reduce((min,el)=>{
//         if(min>el){
//             return el;
//         }
//         else{
//             return min;
//         }
//     })

//     return min;
// };

// console.log(getmin([1,24,5]));


//concept of default paramenter

// function fun(a,b=6){
//     return a+b;
// }

// console.log(fun(4));


// Spreade concept(...arr)

// let arr=[2,3,45,2,53,63,27,8,3];
// console.log(Math.max(...arr));
// console.log(..."apna college");

//Reast concept 

function sum(...args){
    return args.reduce((add, el) => add+el) ;
}