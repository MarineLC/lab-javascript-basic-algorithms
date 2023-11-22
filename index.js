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