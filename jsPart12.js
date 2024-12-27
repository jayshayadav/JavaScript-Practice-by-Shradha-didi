
// async function greet(){
//     throw aaa
//     return 5;
// }

// greet()
// .then((result) =>{
//     console.log("success: " , result)
// })
// .catch((error) =>{
//     console.log("failure: due to weak connection ")
// })

// let demo = async ()=>{
//   return 10;
// }


//await keyword concept

let h1=document.querySelector('h1');

function colorchange(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let num = Math.floor(Math.random()*5)+1;
        if(num>3){
            reject("promises rejected:");
        }
            h1.style.color=color;
            console.log(`color changed to ${color}`);
            resolve("color changed");
        },delay);
    });
}

async function demo() {
try {
await colorchange("red" ,1000);
await colorchange("green" ,1000);
await colorchange("blue" ,1000);
await colorchange("yellow" ,1000);
await colorchange("purple" ,1000);
}
catch(err){
    console.log(err);
}
a=3;
b=a+2;
console.log(b+1);
};


demo();
