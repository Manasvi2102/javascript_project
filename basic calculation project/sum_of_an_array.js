// => Sum and Product of Array
// Write a JavaScript program to compute the sum and product of an array of integers.
// [1,2,3,4,5]
// sum=15 product= 120


let arr = [1,2,3,4,5]
let sum = 0;
let num=1;
let ans = arr.forEach((v)=>{
   sum+=v;
   num*=v;
})
console.log(`sum = ${sum}  product = ${num}`);