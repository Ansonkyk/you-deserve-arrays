var prompt=require("prompt-sync")();
var arr = prompt("Enter your numbers").split(",");
if (arr.length>=4){
    console.log(arr[3])
}else{
    console.log(arr[arr.length-1])
}