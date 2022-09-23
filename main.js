let firstPost = document.querySelector('.img1');
let secondPost = document.querySelector('.img2');
let thirdPost = document.querySelector('.img3');
let fourthPost = document.querySelector('.img4');
let fifthPost = document.querySelector('.img5');
let sixthPost = document.querySelector('.img6');

let travelCard = document.querySelector('.travel-card');
let travelCard2 = document.querySelector('.travel-card2');
let travelCard3 = document.querySelector('.travel-card3');
let travelCard4 = document.querySelector('.travel-card4');
let travelCard5 = document.querySelector('.travel-card5');
let travelCard6 = document.querySelector('.travel-card6');

let closeIcon = document.querySelector('.close-icon');
let closeIcon2 = document.querySelector('.close-icon2');
let closeIcon3 = document.querySelector('.close-icon3');
let closeIcon4 = document.querySelector('.close-icon4');
let closeIcon5 = document.querySelector('.close-icon5');
let closeIcon6 = document.querySelector('.close-icon6');

firstPost.addEventListener('click', togglePost1);
secondPost.addEventListener('click', togglePost2);
thirdPost.addEventListener('click', togglePost3);
fourthPost.addEventListener('click', togglePost4);
fifthPost.addEventListener('click', togglePost5);
sixthPost.addEventListener('click', togglePost6);

closeIcon.addEventListener('click', closeMenu);
closeIcon2.addEventListener('click', closeMenu2);
closeIcon3.addEventListener('click', closeMenu3);
closeIcon4.addEventListener('click', closeMenu4);
closeIcon5.addEventListener('click', closeMenu5);
closeIcon6.addEventListener('click', closeMenu6);


// Functions
function togglePost1(){
    travelCard.classList.toggle('inactive');
}
function togglePost2(){
    travelCard2.classList.toggle('inactive');
}
function togglePost3(){
    travelCard3.classList.toggle('inactive');
}
function togglePost4(){
    travelCard4.classList.toggle('inactive');
}
function togglePost5(){
    travelCard5.classList.toggle('inactive');
}
function togglePost6(){
    travelCard6.classList.toggle('inactive');
}


function closeMenu(){
    travelCard.classList.add('inactive');
}
function closeMenu2(){
    travelCard2.classList.add('inactive');
}
function closeMenu3(){
    travelCard3.classList.add('inactive');
}
function closeMenu4(){
    travelCard4.classList.add('inactive');
}
function closeMenu5(){
    travelCard5.classList.add('inactive');
}
function closeMenu6(){
    travelCard6.classList.add('inactive');
}