let firstPost = document.querySelector('.img1');
let secondPost = document.querySelector('.img2');
let thirdPost = document.querySelector('.img3');
let fourthPost = document.querySelector('.img4');
let fifthPost = document.querySelector('.img5');
let sixthPost = document.querySelector('.img6');

let travelCard = document.querySelector('.travel-card');

let closeIcon = document.querySelector('.close-icon');

firstPost.addEventListener('click', toggleMenus);
secondPost.addEventListener('click', toggleMenus);
thirdPost.addEventListener('click', toggleMenus);
fourthPost.addEventListener('click', toggleMenus);
fifthPost.addEventListener('click', toggleMenus);
sixthPost.addEventListener('click', toggleMenus);

closeIcon.addEventListener('click', closeMenu);


// Functions
function toggleMenus(){
    travelCard.classList.toggle('inactive');
}

function closeMenu(){
    travelCard.classList.add('inactive');
}