



/* 
let fruists = ["apple","banana","Mango","orange"];
function showFruits(...fruits){


    console.log("----------------");
    for (const iterator of fruits) {
        console.log(iterator);
    }
    console.log("----------------");
    fruits.forEach(element => {
        console.log(element);
    });
    console.log("----------------");
    for (const key in fruits) {
        
     console.log(fruits[key]);
    }
}


let showFruits2 = function(...fruits){
    for (let index = 0; index < fruits.length; index++) {
        const element = fruits[index];
        console.log(element); 
    }
}

showFruits("apple","banana","Mango","orange");
console.log("----------------");
showFruits2("apple","banana","Mango","orange"); */

/* let fruists2 = [20,"apple","banana","Mango","orange",12,1231];
let showFruits = (x,...fruits) => { fruits.forEach(element => {
    console.log(element);
 
}); }
let fruists = [];
showFruits(20,"apple","banana","Mango","orange",12,1231);


console.log("----------------");
fruists2.forEach(element => {
    console.log(element);
}); */

let person = {
    name:"hisham",
    age:30,
    salary:5000,
    address:{
        country:"sweden",
        city:"Helsingborg"
    }
}

// function showPerson(person){
//     Object.values(person).forEach(element => {
//         if( element !=  person.address){
//             console.log(element);
//         }
        
//     });
//     Object.values(person.address).forEach(element => {
//         console.log(element);
//     });
// }
// Destructring for function

/* function ShowPerson({name,age,salary ,address : {city,country}}){
    console.log(name);
    console.log(age);
    console.log(salary);
    console.log(city);
    console.log(country);
}

ShowPerson(person); */
/* const foo = ['one', 'two', 'three'];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); */

/* function colors(spilt){
    let result = "";
  
   for(let x = 0 ; x<arguments.length ; x++){
      result+=arguments[x]+" ";
   }
   console.log(result);
}

colors("red","green","blue"); */



/* function gretting (name,lastName){
    console.log(`${name} ${lastName}`);
}

// setTimeout(gretting,2000,"hisham","abulil");
var timestop = setInterval(gretting,2000,"hisham","abulil");

function stop(id){
    clearInterval(id);
}

setTimeout(stop,5000,timestop); */

/* function time(){
    let time = new Date;
    console.log(time.toLocaleString());
}

function timeing(id){
    clearInterval(id);
}


var stopTime = setInterval(time,1000);

setTimeout(timeing,5000,stopTime);
console.log("asda");
console.log("asda");
console.log("asda");
console.log("asda");
console.log("asda");
console.log("asda");
console.log("asda"); */

/* setTimeout((name) => {
    console.log(`My Name is  ${name}`);
},2000,"hisham"); */



/* var timerGreeting = setInterval((name) => {
    console.log(`My Name is  ${name}`);
}, 2000,"hisham");

/* var timeStopping = (id) => {clearInterval(id)}; */
/* setTimeout(timeStopping,3000,timerGreeting) */

/* setTimeout((id) => {clearInterval(id);}, 5000,timerGreeting);  */

/* function getPrimeNumers(x){
    for (let index = 2; index <= x; index++) {
    
      if(isPrime(index)){
          console.log(index);
      }
        
    }
}

function isPrime(number){
    for (let m = 2; m < number; m++) {
      
        if(number % m === 0){
            return false;
        }
      
        
    }
      return true;
}
getPrimeNumers(100); */

/* let hello ="hallo";
let world ='World';
let halloWolrd = `hallo Wolrd`;
let t = String(true);
let f = String(false);
let n = String(12);
let nn = String(null);
console.log(hello);
console.log(world);
console.log(halloWolrd);
console.log(t);
console.log(f);
console.log(n);

console.log(hello +" "+ world + halloWolrd); // "" + ''

console.log((22222).toString());
console.log(parseFloat("2.22f"));
console.log(parseInt("231231"));
 */
/* var toString_ = (number) => {let s = (number).toString(); console.log(s);}
toString_(true);

var charcter = String.fromCharCode(104,105,115,104,97,109);
console.log(charcter);
let firstName = "hisham";
let lastName = "Abulil";
console.log(firstName +" "+ lastName);
console.log(firstName.concat(" ",lastName));
console.log('a'.concat("c"," ","b") ); */
/* var test = "iam here and i \\\\ want to learn me javascript";
console.log(test); */

/* var test = "Hisham Abulil";

var revercString = (test)=>{
    let revers = "";
for(let i = test.length -1 ; i>=0;i-- ){
revers+=test[i];
}
return revers;
};

console.log(revercString(test));
console.log(test.split("").reverse().join("")); */

// let a = "200";
// let b ="100";
// console.log(a.localeCompare(b,"en-us"));

/* var localeComapare2 = (a,b)=> {
    if(a === b)
    {return 0;}
    else if(a<b) {return -1;}
    return 1;
    

    
}

console.log(localeComapare2("222","111")); */

/* let name2 ="Hisham abulil";
let name3 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
console.log(name2.anchor());
console.log(name2.big());
console.log(name2.charAt(0));
console.log(name2.charCodeAt(0));
console.log(name2.codePointAt(0));
console.log(name2.concat(" ","Antoon"));
console.log(name2.endsWith("l"));
console.log(name2.fixed());// not supported
console.log(name2.fontcolor("red"));
console.log(name2.fontsize(10));
console.log(name2.includes("å"));
console.log(name2.indexOf("h"));
console.log(name2.italics());
console.log(name2.lastIndexOf("l"));
console.log(name2.length);
console.log(name2.link("https://google.com"));
console.log(name2.localeCompare("anton"));
console.log(name2.match("a"));
console.log(name3.normalize( ));
console.log(name2.repeat(3));
console.log(name2.replace("Hisham","b"));
console.log(name2.search("h"));
console.log(name2.slice(12,13));
console.log(name2.small());
console.log(name2.split(" "));
console.log(name2.startsWith("H"));
console.log(name2.strike());
console.log(name2.sub());
console.log(name2.substr(0,6));
console.log(name2.sup());
console.log(name2.toLocaleLowerCase());
console.log(name2.toLocaleUpperCase());
console.log(name2.trim());
console.log(name2.valueOf());
console.log(name2.trimStart());

console.log(name2.split()); */

/* let strStatment = "algorithms are en essential part of a terchnival inert process";
let newStatment = [];
let storArt = (statment) => {
let arrayOfWord = statment.split(" "); */
/* for(let x = 0 ; x<arrayOfWord.length ; x++){
    let word = arrayOfWord[x];
  ;

    word = word.replace(word[0], word[0].toLocaleUpperCase())
  
 
  arrayOfWord[x] = word;



   
} */
/* let words ="";
let words2 = [];
for (let word of arrayOfWord) {
  
   let newWorld=word[0].toLocaleUpperCase()+word.slice(1,word.length);
   console.log(newWorld);
   word = word.replace(word,newWorld);
   words+=word+" ";
   words2.push(word);
  
   
}
console.log(words2);
return words;
};

console.log(storArt(strStatment));

/* let name2 ="hisham";
name2 = name2.toLocaleUpperCase();
console.log(name2); */ 

/* let vowels = ["a","e","i","o","u"];

var vowelsCounter = function(words){
    let charckter = words.split("");
    let num = 0;

    for(let x = 0 ; x<charckter.length;x++){
      if(IsVowles(charckter[x])){
          num = num+1;
      }
    }
    
    return num;
}

var IsVowles = (char)=> {
    for(let x = 0 ; x<vowels.length;x++){
        if(char.localeCompare(vowels[x]) === 0){
            return true;
        }
      
    }
    return false;
}

let test = function(words){
    let counter = 0;
    for (const char of words) {
        if(vowels.includes(char)){
            counter++;
        }
    }
    return counter;
}
console.log(test("antoon")); */
/* let num = [];
function longerWords(text){
    var words = text.split(" ");
   for(let x = 0 ; x<words.length ; x++){
    num.push(words[x].length );
   }
 let num2=  Math.max(...num);
let f = "";
 for(let x = 0 ; x<words.length ; x++){
     if(words[x].length == num2){
        f = words[x];
     }
    
   }
   return f;
}
console.log(longerWords("Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32"));
 */
/* function test(text){
    let words = text.split(" ");
    let maxLength = 0 ;
    let result = "";
    for (let index = 0; index < words.length; index++) {
       
        if(words[index].length > maxLength){
            maxLength = words[index].length;
            result = words[index];
        }
        
    }
    return result;
}

console.log(test("hisahm ahamad abulil")); */



/* let test2 = (word,mathcingWord) => { let coutnterFel =  0; if(word.length === mathcingWord.length)
    
    {for(let x = 0 ; x<word.length ; x++){if(word[x] !== mathcingWord[x]){coutnterFel++} }return coutnterFel;} return "Unequal words Length" }

    console.log(test2("path","paht")); */
/* 
   function sum(a,b){
       let z =a +b;
       return z;
   }
   function sub(a,b){
    let z =a -b;
    return z;
}
function mult(a,b){
    let z =a *b;
    return z;
}
 module.exports = {sum : sum, sub : sub};
 module.exports.mult = mult; */

 var moment = require('moment'); // require
console.log(moment().format());