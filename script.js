// data structure and alogrithms
// 1.strings 
// 2.Array
// 3.Object



// let text = " Hello everyone, I am happy to see you! "
// console.log(typeof(text));
// console.log(text.length);
//console.log(text.toLocaleUpperCase())
// console.log(text.includes("everyone"))
// console.log(text.startsWith("Hello"))
// console.log( text.trim().length);
// console.log(text[9]);
// console.log(text.indexOf("I"));
// console.log(text.split(","));
// let arr = ['I', 'need', 'money']
// console.log(arr.join('+'));

function checkLength() {
    let essay = userEssay.value
    let words = essay.trim().split(' ')
    
    // console.log(words);
    // console.log(words.includes(""));
    // console.log(words.lenght);
    displayScreen.innerHTML = words.length
    
}
