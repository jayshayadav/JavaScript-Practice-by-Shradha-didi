// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans=  two() + one();
//     console.log(ans);
// }

// three();


let h1 = document.querySelector('h1');

// function colorChange(color ,delay){
//     setTimeout(()=>{
//     h1.style.color=color;
// },delay)
// }

// colorChange('red' , 3000);
// colorChange('blue' ,5000);

// setTimeout(()=>{
//     h1.style.color='red';
// },2000)

// setTimeout(()=>{
//     h1.style.color='green';
// },3000)

// setTimeout(()=>{
//     h1.style.color='orange';
// },4000)



//callback hell(color)

// function changeColor(color, delay, nextchangeColor){
//     setTimeout(() => {
//         h1.style.color=color;
//         if(nextchangeColor) nextchangeColor()
//     }, delay);
// }

// changeColor("red",1000, ()=>{
//     changeColor("blue",1000, ()=>{
//         changeColor("green",1000 , ()=>{
//             changeColor("orange" ,2000,()=>{
//                 changeColor("purple", 1000)
//             })
//         })
//     })
// })

//callback hell resolve (Color)

function changeColor(color, delay){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
              h1.style.color=color;
              resolve("color chanhe");
          }, delay);
  })
}


changeColor("red" ,1000)
.then(() =>{
  console.log("red color was completed");
  return changeColor("green" , 1000);
})
.then(() =>{
  console.log("green color was completed");
  return changeColor("yellow" , 1000);
})
.then(() =>{
  console.log("yellow color was completed");
  return changeColor("orange" , 1000);
})
.then(() =>{
  console.log("orange color was completed");
  return changeColor("blue" , 1000);
})
.then(() =>{
  console.log("blue color was completed");
  return changeColor("purple" , 1000);
})
.then(() =>{
  console.log("purple color was completed");
})



// function savetoDb(data, success, failure){
//     let internetSpeed = Math.floor(Math.random()*10)+1;
//     if (internetSpeed>4){
//         success();
//     }
//     else{
//         failure();
//     }
// }

// savetoDb("Apna College",
//     () => {
//     console.log("success: 1st data saved");
//     savetoDb("Jay",
//         ()=>{
//             console.log("success: 2nd data saved");
//             savetoDb("yadav" , 
//                 () =>{
//                     console.log("success: 3rd data saved")
//                 },
//                 ()=>{
//                   console.log("failure: 3data don't save due to weak connection")
//                 }
//             )
//         },
//         () =>{
//         console.log("failure: 2data don't save due to weak connection")
//         }
//     )
//     },
//     () =>{
//         console.log("failure: 1data don't save due to weak connection")
//     }
// )


//promises concept


// function savetoDb(data){
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random()*10)+1;
//         if (internetSpeed>4){
//             resolve("success: data save");
//         }
//         else{
//             reject("failure: due to low connection");
//         }

//     })
// }

// savetoDb("Yadav")
//   .then((result) =>{
//     console.log("1st data saved");
//     console.log("result of promise: ",result);
//     return savetoDb("jay");
//   })
//   .then((result) =>{
//     console.log("2nd data saved")
//     console.log("result of promise: ", result)
//     return savetoDb("shankar")
//   })
//   .then((result) =>{
//     console.log("3rd data saved")
//     console.log("result of promise: ", result)
//   })


//   .catch((error) =>{
//     console.log("promise rejected");
//     console.log("error of promise: ", error)
//   })
