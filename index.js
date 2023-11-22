// Iteration 1: Names and Input
let hacker1 = "Allan";  
//let hacker2 = "Allan"; 
let hacker2 = "Peter"; 
console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}else if(hacker1.length < hacker2.length){
  console.log(`The navigator has the longest name, it has ${hacker1.length} characters`);
}else if(hacker1.length === hacker2.length){
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
//3.1
let hacker1UpperCase = "";
for(let i =0; i < hacker1.length; i++){
  if(i < hacker1.length -1){
     hacker1UpperCase += hacker1[i].toUpperCase() + " ";
  }else{
    hacker1UpperCase += hacker1[i].toUpperCase();
  }
}
console.log(hacker1UpperCase);
//3.2
let hacker2Reverse = "";
for(let i = hacker2.length -1; i >= 0; i--){
  hacker2Reverse +=hacker2[i];
}
console.log(hacker2Reverse);

//3.3
for(let i =0; i < hacker1.length; i++){
   
     if(hacker1[i] < hacker2[i]){
       console.log("The driver's name goes first.");
       break;
     }else if(hacker1[i] > hacker2[i]){
       console.log("Yo, the navigator goes first, definitely.");
       break;
     }else if((hacker1[i] === hacker2[i]) && (i+1 != hacker1.length)){
       continue;      
    }else{
  console.log("What?! You both have the same name?");
}
}


//bonus time 1

let longText =`Phasellus erat nibh, tristique a posuere vitae, posuere nec neque. Integer ut purus sollicitudin sem sodales cursus. Fusce mattis ligula ac risus elementum, pretium porttitor elit semper. Cras ullamcorper at lacus eget tempus. Sed dictum libero mattis venenatis mollis. Vestibulum ac nisl sit amet mauris facilisis sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas aliquet dui quis massa sagittis ullamcorper nec vel felis. Vestibulum lacus lacus, consequat quis tempus vel, elementum non enim. Nunc vel ligula mollis, rutrum sem in, tincidunt nunc. Sed ut lacinia lacus. Aliquam at erat consectetur, accumsan justo sit amet, sagittis nulla. Donec rhoncus pellentesque odio at iaculis. 

Sed mattis semper lectus vel pellentesque. Maecenas a libero in tortor fermentum rutrum. Etiam varius, elit at ultrices porta, erat diam mollis felis, nec ornare orci nulla porta est. Donec lacus nisl, sodales in lectus vel, scelerisque tempus augue. Quisque tincidunt sit amet ex non rhoncus. Fusce ornare efficitur ornare. Aenean sit amet mauris cursus velit luctus tempor at convallis lorem. Integer eu tortor at dolor dictum vestibulum vel eget metus. Suspendisse potenti. Pellentesque in rhoncus risus. Nunc sodales nunc eros, ut maximus mi varius convallis. In volutpat rhoncus lorem, quis auctor orci imperdiet ac. 

In consequat commodo nisl, sed ullamcorper turpis luctus eget. Duis pulvinar mi id ipsum ornare, ut faucibus enim molestie. Nullam aliquet mattis pharetra. Suspendisse ac nisi tortor. Nullam lacinia cursus ligula sit amet euismod. Phasellus et commodo magna. Curabitur efficitur accumsan efficitur. Aenean ante sem, ullamcorper non vulputate quis, malesuada ac orci. Mauris feugiat venenatis lorem quis mattis. Phasellus fringilla rhoncus convallis.`


let countWord = 1; //start at 1 because last word is not counted

for(let i =0; i < longText.length ; i ++){
  
  if(longText[i+1] === " "){
    countWord += 1;
  }

}
console.log(countWord);

let countEt = 0;

for(let i =0; i < longText.length ; i ++){
  
  if(longText[i] === " " && longText[i+1] === "e" && longText[i+2] === "t" && longText[i+3] === " "){
    countEt += 1;
  }

}
console.log(countEt);

//bonus time 2

//let phraseToCheck = "step on no pets";
//let phraseToCheck = "taco cat";
//let phraseToCheck = "Amor, Roma";

let phraseToCheck = "A man, a plan, a canal, Panama!";
let phraseWithoutSymbol = "";
let j = 0;
let boolean = false;

for(let i =0; i < phraseToCheck.length ; i ++){
  if(phraseToCheck[i] === " " || phraseToCheck[i] === "," || phraseToCheck[i] === "?" || phraseToCheck[i] === "!" ){
    continue;
 }else{
   phraseWithoutSymbol += phraseToCheck[i].toLowerCase();
 }
}


for(let i =0; i < phraseWithoutSymbol.length ; i ++){
  if(phraseWithoutSymbol[i] === phraseWithoutSymbol[phraseWithoutSymbol.length-(i+1)]){
    boolean = true;
    continue;
  }else {
    boolean = false;
    break;
  }
  
}

if(boolean){
  console.log(`${phraseToCheck} is a palindrome`);
}else{
  console.log(`${phraseToCheck} is not a palindrome`);
}
