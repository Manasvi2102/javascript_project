// =>Remove Duplicates
// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
let arr = [1, 2, 3, 3, 4, 5, 5, 5, 2, 1, 1, 2]
let unique = []

arr.forEach((val) => {
    a = 0;
    unique.forEach((i) => {
        if (val === i) {
            a++;
        }
    });
    if (a===0) {
        unique.push(val);
    }
})
console.log(unique);