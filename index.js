// 1.Uppercase first letter- Input: "hello"- Output: "Hello"
// - Input: "world" - Output: "World"
hint:charAt(), toUpperCase(), slice(), concat()
let word =prompt("");
function covertUpperCase(str){
    return str.slice(0,1).toUpperCase() + str.slice(1);
}
console.log(covertUpperCase(word))


// 2.Remove vowels - Input: "hello" - Output: "hll"
// - Input: "world" - Output: "wrld" using replace().

function findVowels(greet){
    let res = ""
    for(i of greet){
       if(i=="a" ||i=="e" ||i=="i" ||i=="o" ||i=="u"){
          console.log("");
       }else{
         res += i;
       }
    }
    return res;
}
console.log(findVowels("world"))


// research required here
// Write a function to reverse a string.
let reverse = prompt("")
function reverseStr(str){
    let res = "";
    for(i=str.length-1;i>=0;i--){
        res += str[i];
    }
    return res;
}
console.log(reverseStr(reverse));
