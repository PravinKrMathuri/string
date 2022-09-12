// Problem 1: Given a string count the number of words in that string

let name = "Tony Stark is an ironman";
let count = " ";
for(i=0;i<=name.length-1;i++) {
    if(name[i] == " "){
      count++;
    }
}

console.log(count+1);