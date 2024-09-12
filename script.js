let clickCount = 0;
const hamster = document.getElementById('hamster');
const clickCountDisplay = document.getElementById('click-count');

hamster.addEventListener('click', () => {
    clickCount++;
    clickCountDisplay.textContent = clickCount;

    hamster.style.transform = 'scale(0.95)';
    setTimeout(() => {
        hamster.style.transform = 'scale(1)';
    }, 100);
    
    hamster.style.filter = 'drop-shadow(0 0 25px #ff00de)';
    setTimeout(() => {
        hamster.style.filter = 'drop-shadow(0 0 15px #ff00de)';
    }, 100);
});
