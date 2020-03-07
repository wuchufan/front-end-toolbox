// this is


let increment = document.getElementById('increment');
let counter = 0;
let to = increment.innerText;

function numberGoUp(destination){
      if(counter < destination){
        counter++;
          increment.innerText = counter;
      } else{
        clearInterval(a);
      }


}
    let a = setInterval(()=>numberGoUp(to),30);
