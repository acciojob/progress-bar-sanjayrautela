const circles = document.querySelectorAll('.circle');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let activeIndex = 0;

function updateButtons() {
    prev.disabled = activeIndex === 0;
    next.disabled = activeIndex === circles.length - 1;
}

function updateCircles() {
    circles.forEach((circle, index) => {
        if (index <= activeIndex) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });
}

prev.addEventListener('click', () => {
    activeIndex--;
    updateCircles();
    updateButtons();
});

next.addEventListener('click', () => {
    activeIndex++;
    updateCircles();
    updateButtons();
});

updateButtons();
