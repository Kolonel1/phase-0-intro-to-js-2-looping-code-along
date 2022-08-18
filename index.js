// Code your solutions in this file
// types of loops 
// the for loop and while loop
//for
for(let age = 30; age < 40; age++){
    console.log (`I am ${age} years old.Happy birthday to me!`);
    debugger;
}
const gifts = ['teddy bear','drone','doll'];
function wrapGifts(gifts)
{for (let i=0;i<gifts.length;i++){
    console.log(`wrapped ${gifts[i]} and added a bow!`);
    debugger;
}
return(gifts);}
wrapGifts(gifts);

//let me just comment on the for loop the first thing is the initialization then the condition then iteration which can be increments or decrements and in the curly brackets we place the loop body ie the code to be executed
//still do not understand how debuggers work

//assignment



function writeCards(cards = ['Guadalupe','Ollie','Aki'],message=surprise){
   
   
    let newCards=[];

    for(let i=0;i<cards.length;i++){newCards[i]=`Thank you, ${cards[i]}, for the wonderful ${message} gift!`;
debugger;}
return(newCards);
    };
 
    writeCards(cards,message);// i have seen what the problem was if you want to see the final result you just call the function then console.log
    console.log(newCards);

    // this is some sweet code 

    // i will check on it later 

    //the while loop in this loop do not forget the increment or you will have an infinite loop

    const git=['teddy','drone','doll'];
    function wrapGit(git){
        let i=0;
        while (i<git.length){console.log(`wrapped ${git[i]} and added a bow!`)
    i++;
}
  return(git);  }
  wrapGit(git);
  
let count=10;
function countDown(count){
while(count>=0){console.log(count);
count--};}
countDown(count);