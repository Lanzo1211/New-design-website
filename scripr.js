const contentData = {
    home: {
        title: "The future starts here",
        text: "Connect with a growing network of creators, builders, and innovators. Access exclusive resources, collaborate on projects, and level up your skills alongside peers."
    },
    Explore: {
        title: "Discover new horizons",
        text: "Dive into trending digital realms, explore masterpieces crafted by global creators, and find the perfect inspiration for your next big breakthrough project."
    },
    settings: {
        title: "Tailor your experience",
        text: "Fine-tune your workspace environment. Customize your profile privacy, adjust interface themes, manage notification updates, and secure your digital credentials."
    }
};

const navLinks = document.querySelectorAll('.nav-item');
const mainTitle = document.getElementById('main-title');
const mainText = document.getElementById('main-text');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        navLinks.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
        const tabName = link.getAttribute('data-tab');

        mainTitle.style.opacity = 0;
        mainText.style.opacity = 0;
        
        setTimeout(() => {
            mainTitle.textContent = contentData[tabName].title;
            mainText.textContent = contentData[tabName].text;
            
            mainTitle.style.opacity = 1;
            mainText.style.opacity = 1;
        }, 150);
    });
});

const actionBtn = document.getElementById('actionBtn');

actionBtn.addEventListener('click', (event) => {
    event.preventDefault(); 
    
    actionBtn.textContent = '✨';
    setTimeout(() => {
        actionBtn.textContent = 'join';
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
const earthGlobe = document.querySelector('.earth-globe');

if (earthGlobe) {
   
    document.addEventListener('mousemove', (e) => {
        const rect = earthGlobe.getBoundingClientRect();
        const globeCenterX = rect.left + rect.width / 2;
        const globeCenterY = rect.top + rect.height / 2;

        const deltaX = (e.clientX - globeCenterX) / window.innerWidth;
        const deltaY = (e.clientY - globeCenterY) / window.innerHeight;

        const rotateX = -deltaY * 25;
        const rotateY = deltaX * 25;

        earthGlobe.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        earthGlobe.style.transition = 'transform 0.1s ease-out';
    });

    document.addEventListener('mouseleave', () => {
        earthGlobe.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg)';
        earthGlobe.style.transition = 'transform 0.6s ease';
    });
    earthGlobe.addEventListener('click', (e) => {
        const ping = document.createElement('div');
        ping.classList.add('earth-ping');
        
        const rect = earthGlobe.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ping.style.left = `${x}px`;
        ping.style.top = `${y}px`;
        ping.style.width = '16px';
        ping.style.height = '16px';
        ping.style.boxShadow = '0 0 20px #38bdf8';

        earthGlobe.appendChild(ping);

        setTimeout(() => {
            ping.remove();
        }, 2000);
    });
}