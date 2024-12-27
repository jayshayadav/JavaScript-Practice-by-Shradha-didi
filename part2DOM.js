let btns=document.querySelectorAll('button');

for(btn of btns){
    // btn.onclick=function(){
    //     console.log("you clicke the button");
    // }
    // btn.onmouseenter=function(){
    //     alert("you touch the button");
    // }

    btn.addEventListener("click", hello);
    btn.addEventListener("dblclick", alt);

}

function hello(){
    console.log("you click the button ");
}

function alt(){
    alert("You find a alert after double clicking");
}