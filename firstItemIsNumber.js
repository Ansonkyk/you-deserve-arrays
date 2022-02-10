var prompt=require("prompt-sync")();
var arr = prompt("Enter your numbers").split(",");

if (isNaN(Number(arr[2]))) {
    arr[2]=arr[1];
}else{
    concole.log("error");
}
