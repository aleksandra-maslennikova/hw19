let resizeOne = document.querySelector('.one > .resize');
let one = document.querySelector('.one');
let resizeTwo = document.querySelector('.two > .resize');
let two = document.querySelector('.two');
let resizeThree = document.querySelector('.three > .resize');
let three = document.querySelector('.three');


function resizeBlockOne(event) {
    one.style.flex = 'none';
    one.style.width = event.pageX + 'px';
    one.style.maxWidth = three.offsetWidth * 2 - 50 + 'px';
    two.style.flex = 1;
}



resizeOne.addEventListener('mousedown', () => {
    window.addEventListener('mousemove', resizeBlockOne);
    resizeOne.addEventListener('mouseup', () => {
        window.removeEventListener('mousemove', resizeBlockOne);
    });
})


function resizeBlockTwo(event) {
    two.style.flex = 'none';
    two.style.width = event.pageX - one.offsetWidth - resizeTwo.offsetWidth * 2 + 'px';
    three.style.flex = 1;
}


resizeTwo.addEventListener('mousedown', () => {
    window.addEventListener('mousemove', resizeBlockTwo);
    resizeTwo.addEventListener('mouseup', () => {
        window.removeEventListener('mousemove', resizeBlockTwo);
    });
})