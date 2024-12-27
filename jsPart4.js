let arr=[1,2,35,5,2,3,5,2,5,86,2,];

for(let i=0; i<=arr.length; i++){
    if(arr[i]==2){
        arr.splice(i,1);
    }
}
console.log(arr);


