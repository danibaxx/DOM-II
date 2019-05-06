let button = document.querySelector('.btn');
console.log(button);
button.addEventListener('click', (event) => {
  event.target.style.backgroundColor = 'orange';
  console.log('They\'ve signed up');
});

let btnClick = document.querySelector('.btn');
btnClick.addEventListener('click', event => {
  console.log(`Click count: ${event.detail}`);
});

let header = document.querySelector('.logo-heading');
header.addEventListener('mouseover', (event) => {
  event.target.style.color = 'orange';
  setTimeout(function() {
    event.target.style.color = '';
  }, 500);
}, false);

document.addEventListener('copy', () => {
  console.log('You have copied!');
});

window.addEventListener('wheel', () => {
  console.log('scrolled');
});

let imgBoat2 = document.querySelector('.img-boat');
  console.log(imgBoat2);
  imgBoat2.addEventListener('dblclick', (img) => {
    img.target.style.border = '3px solid orange';
  });

window.addEventListener('load', () => {
  alert('Welcome to the Fun Bus!');
});

let imgBoat1 = document.querySelector('.img-content');
  console.log(imgBoat1);
  imgBoat1.addEventListener('click', (img) => {
    img.target.style.border = '3px solid green';
  });

let riverPic = document.querySelector('.img-fluid');
  console.log(riverPic);
  riverPic.addEventListener('click', (img) => {
    img.target.style.border = '3px solid royalblue';
  });

let busImg = document.querySelector('.img-bus');
busImg.addEventListener('click', (e) => {
  e.target.style.border = '3px solid purple';
  setTimeout(function() {
    e.target.style.color = '';
  }, 500);
}, false);
