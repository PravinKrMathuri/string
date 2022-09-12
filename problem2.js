// Problem 2 : Given an array of string count the overall total number of characters

let name = ['tony', 'caption','cris_hamesworth','bruce'];

let total_char = 0;

for (let i=0; i<=name.length-1; i++) {
  total_char = total_char + name[i].length;
}
console.log(total_char);