//your JS code here. If required.
const circles = document.querySelectorAll('.circle');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentActive = 1;

updateButtons();

nextButton.addEventListener('click', () => {
    currentActive++;
    updateButtons();
});

prevButton.addEventListener('click', () => {
    currentActive--;
    updateButtons();
});

function updateButtons() {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    if (currentActive === 1) {
        prevButton.disabled = true;
    } else if (currentActive === circles.length) {
        nextButton.disabled = true;
    } else {
        prevButton.disabled = false;
        nextButton.disabled = false;
    }
}
