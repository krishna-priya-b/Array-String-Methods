let myArray1 = ["Rose", "Jasmine", "Sunflower", "Daisy", "Orchid"];
document.getElementById("myArray").innerHTML= myArray1;

myArray1.sort();
document.getElementById("sort").innerHTML= myArray1;

myArray1.reverse();
document.getElementById("reverse").innerHTML= myArray1;

myArray1.pop();
document.getElementById("pop").innerHTML= myArray1;

myArray1.push("Lotus", "Hibiscus");
document.getElementById("push").innerHTML= myArray1;

myArray1.shift();
document.getElementById("shift").innerHTML= myArray1;

myArray1.unshift("Gulmohar");
document.getElementById("unshift").innerHTML= myArray1;

let joined = myArray1.join("🌿");
document.getElementById("join").innerHTML= joined;

let slice = myArray1.slice(2,4);
document.getElementById("slice").innerHTML= slice;



let fruits = ["🍇", "🍊","🍍"];
document.getElementById("fruits").innerHTML= fruits;
let vegies = ["🥕", "🥦"];
document.getElementById("vegies").innerHTML= vegies;

let concated = myArray1.concat(fruits,vegies)
document.getElementById("concated").innerHTML= concated;


//--------------- map() 
let num= [2,8,12,9,15,3,20];
document.getElementById("num").innerHTML= num;

function square(n){
    let sqr = n*n;
    return sqr;
}
let squr = num.map(square);
document.getElementById("map").innerHTML= squr;

//-----------------------------------String methods
let text = "Today is awesome";
document.getElementById("text").innerHTML= text;

let length = text.length;
document.getElementById("length").innerHTML= length;

let lowercase = text.toLowerCase();
document.getElementById("lowercase").innerHTML= lowercase;

let uppercase = text.toUpperCase();
document.getElementById("uppercase").innerHTML= uppercase;

let sliceOf = text.slice(8, 17);
document.getElementById("sliceof").innerHTML= sliceOf;

let replaced = text.replace("awesome", "spectacular");
document.getElementById("replaced").innerHTML= replaced;