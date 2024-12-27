let max=prompt("Enter the max number");
console.log(max)
const random = Math.floor(Math.random()*max)+1;
let guess=prompt("guess the number");
while(true){
    if(guess=="quit"){
        console.log("quiting game");
        break;
    }
    if(random==guess){
        console.log("congrats! you guess right number",random);
        break;
    } else if(guess<random){
        guess=prompt("hind: you guess so small . please try again")
    }
    else {
        guess=prompt("You guess so large, Please try again");
    }
}