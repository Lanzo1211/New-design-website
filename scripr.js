const actionBtn = document.getElementById('actionBtn');

actionBtn.addEventListener('click', (event) => {
    event.preventDefault(); 
    
    actionBtn.textContent = '✨ Spawning Background Elements...';
    setTimeout(() => {
        actionBtn.textContent = 'Trigger Prompt Effect';
    }, 1500);

    for (let i = 0; i < 8; i++) {
        createBackgroundParticle();
    }
});

function createBackgroundParticle() {
    const particle = document.createElement('div');
    particle.classList.add('floating-particle');

    const size = Math.random() * 50 + 20;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    particle.style.left = `${Math.random() * 100}vw`;
    
    particle.style.top = '105vh';

    const colors = ['#0ea5e9', '#ec4899', '#a855f7'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.background = randomColor;

    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 3000);
}