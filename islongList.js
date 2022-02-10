var prompt=require("prompt-sync")();
var arr = prompt("Enter your numbers").split(",");
if (arr.length>=10){
    x=true;
}else{
    x=false;
}
console.log("Long:"+x);