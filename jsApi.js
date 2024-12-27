// let json = '{"fact":"The female cat reaches sexual maturity within 6 to 10 months; most veterinarians suggest spaying the female at 5 months, before her first heat period. The male cat usually reaches sexual maturity between 9 and 12 months.","length":220}';
// console.log(json)

// let validRes = JSON.parse(json);


// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res) =>{
//     // console.log(res);
//    return res.json();
// })
// .then((data)=>{
//     console.log("data1 =", data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     // console.log(res);
//     return res.json();
// })
// .then((data2)=>{
//     console.log("data2 = ", data2.fact);
// })
// .catch((err) =>{
//    console.log(err);
// })

// console.log("jay shree krishna")

// async function getFatch() {
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);
//     }
//     catch(e){
//         console.log("error -",e);
//     }

//     console.log("bye");   
// }

// console.log(getFatch())




//axios concept

// let btn = document.querySelector("button");

// let url2= "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click", async()=>{
//    let link = await getimage();
//    console.log(link);
//    let img = document.querySelector('#result');
//    img.setAttribute("src" , link);
//    console.log(link) 
// })

// async function getimage() {
//     try{
//     let res= await axios.get(url2);
//     return res.data.message;
//     }
//     catch(E){
//         console.log(E);
//         return "No image found";
//     }
// }

// getimage();

// let link = "https://icanhazdadjoke.com/";

// async function getjokes() {
// try{
// const config = { headers : {Accept : "application/json"}};
// let res =  await axios.get(link, config);
// console.log(res.data);
// }
// catch(e){
//     console.log(e)
// }
// }





//concept of ~ Updating Query Strings

let url="http://universities.hipolabs.com/search?name=";

let btn = document.querySelector('button');
btn.addEventListener("click", async ()=>{
    let input = document.querySelector('input').value
    getCOllege(input);
   
});


async function getCOllege(country) {
    try{
    let res = await axios.get(url+country);
    console.log(res)
    }
    catch(e){
        console.log(e);
        return []
    }
}

