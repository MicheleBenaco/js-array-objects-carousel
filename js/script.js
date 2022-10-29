"use strict";

const slides = [
  {
      url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
      title: 'Svezia',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
  },

  {
      url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
      title: 'Perù',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
  },

  {
      url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
      title: 'Chile',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
  },
  {
      url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
      title: 'Argentina',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
  },
  {
      url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
      title: 'Colombia',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
  },
];



// `<div class="col p-0 active">
// <img src="http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg" class="d-block w-100" alt="Svezia">
// </div>`

const sliderContainer = document.getElementById('slider');
const prevBtn  = document.querySelector('.carousel-control-prev');
const nextBtn  = document.querySelector('.carousel-control-next');
const thumbnailsContainer = document.querySelector('.row-cols-5');
let activeIndex = 0;
let isForward = true;


function drawCarousel(){
  const slider = document.createElement('div');
  slider.className = 'carousel-inner';
  

  slides.forEach((value,index)=>{
    const slide = document.createElement('div');
    slide.className = (index === 0) ? 'carousel-item active' : 'carousel-item';
    slide.innerHTML =  `
    <div class="text-container">
      <h2>${value.title}</h2>
      <p>${value.description}</p>
    </div>
    <img src="${value.url}" class="d-block w-100" alt="${value.title}"/>`;
    slider.appendChild(slide);

    const thumbnail = document.createElement('div');
    thumbnail.className =  (index === 0) ? 'col p-0 active' : 'col p-0';
    thumbnail.innerHTML =  `<img src="${value.url}" class="d-block w-100" alt="${value.title}"/>`;
    thumbnailsContainer.appendChild(thumbnail);
  });
  sliderContainer.insertBefore(slider, prevBtn);
}

drawCarousel();


const sliderItems = document.querySelectorAll('.carousel-item');
const thumbs = Array.from(thumbnailsContainer.children);


function playCarousel(isNext){
  sliderItems[activeIndex].classList.remove('active');
  thumbs[activeIndex].classList.remove('active');
  //const len = sliderItems.length;
  //activeIndex = (activeIndex + isNext % len + len) % len;

  if(isNext){
    activeIndex = (activeIndex === sliderItems.length -1) ? 0 : activeIndex + 1;
  } else {
    activeIndex = (activeIndex === 0) ? sliderItems.length -1 : activeIndex - 1;
  }
  sliderItems[activeIndex].classList.add('active');
  thumbs[activeIndex].classList.add('active');
}
nextBtn.addEventListener('click', function(){
    playCarousel(true);

});
prevBtn.addEventListener('click',  function(){
  playCarousel(false);

});

let slideInterval = setInterval(()=>{
  playCarousel(isForward);
},3000);


const stopCarousel = document.getElementById('start-stop');
const reverse = document.getElementById('reverse');
stopCarousel.addEventListener('click', ()=> {
  if(slideInterval){
    clearInterval(slideInterval);
    slideInterval = false;
  } else {
    slideInterval = setInterval(()=>{
      playCarousel(isForward);
    },3000);
  }


});
reverse.addEventListener('click', ()=> isForward = !isForward);

thumbs.forEach((el,index)=>{
  el.addEventListener('click', function(){
    sliderItems[activeIndex].classList.remove('active');
    thumbs[activeIndex].classList.remove('active');
    activeIndex = index;
    sliderItems[activeIndex].classList.add('active');
    thumbs[activeIndex].classList.add('active');
  })

})