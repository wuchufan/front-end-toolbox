const carouselSlide = document.querySelector('.slides');
const carouselItems = document.querySelectorAll('.items');

//Get size of Items

const size = carouselItems[0].clientWidth;

//Buttons

const btnPrev = document.getElementById('prevBtn');
const btnNext = document.getElementById('nextBtn');

let counter = 0;
//start from the second one
counter++;
carouselSlide.style.transform = `translateX(-${size * counter}px)`;


//Button Click Next
btnNext.addEventListener('click',function(){
  if (counter >= carouselItems.length - 1) return;
  counter++;
  carouselSlide.style.transition ='transform 0.4s ease';
  carouselSlide.style.transform = `translateX(-${size * counter}px)`;

})

//Button Click Prev
btnPrev.addEventListener('click',function(){
  if (counter <= 0) return;
  counter--;
  carouselSlide.style.transition ='transform 0.4s ease';
  carouselSlide.style.transform = `translateX(-${size * counter}px)`;

});

//Make looping infinit
carouselSlide.addEventListener('transitionend',function(){
  if(carouselItems[counter].id === 'last-clone'){
    carouselSlide.style.transition= 'none';
    counter = carouselItems.length - 2;
    carouselSlide.style.transform = `translateX(-${size * counter}px)`;
  }

  if(carouselItems[counter].id === 'first-clone'){
    carouselSlide.style.transition= 'none';
    counter = 1;
    carouselSlide.style.transform = `translateX(-${size * counter}px)`;
  }
});
