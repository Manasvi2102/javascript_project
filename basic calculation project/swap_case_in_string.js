
// => Swap Case in String

// Write a JavaScript program that accepts a string as input and swaps the case of each character.For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
// let cap=prompt("Enter a string: ")
// let arr=cap.split(" ");
// let ans="";
// for(let i=0;i<arr.length;i++){
//     ans+=arr[i].charAt(0).toLowerCase()+arr[i].slice(1)+" ";
// }



// alert(ans);
// Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
let swap = (str) => {
  let swapped = '';
  for (let i = 0; i < str.length; i++) {
      if (str[i]===str[i].toUpperCase()) {
          swapped = swapped + str[i].toLowerCase();
      }else{
          swapped = swapped + str[i].toUpperCase();
      }
  }
  return swapped;
}

console.log(swap('Manasvi Jetavat'));