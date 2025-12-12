// Бургер-меню
const burger = document.getElementById('burger-menu');
const nav = document.getElementById('nav-menu');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Табы
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        tabPanels.forEach(p => p.classList.remove('active'));
        document.getElementById(btn.dataset.tab).classList.add('active');
    });
});

// Модальное окно
const modal = document.getElementById('modal');
const contactBtn = document.getElementById('contact-btn');
const closeModal = document.getElementById('close-modal');

contactBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Слайдер
const images = [
    'https://elyroberts.com/wp-content/uploads/2023/02/Black.Butte_.Ranch_.Wedding.Mountians-768x576.jpg',
    'https://terschanphotography.com/wp-content/uploads/2025/01/Hiking-Elopement.jpg',
    'https://akelaidis.com/wp-content/uploads/2022/12/wedding-photographer-crete-0000.jpg',
    'https://www.jules-photographer.com/wp-content/uploads/2021/04/couple-photo-session-002-768x512.webp'
];

let currentIndex = 0;
const sliderImg = document.getElementById('slider-img');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function updateSlider() {
    sliderImg.src = images[currentIndex];
    sliderImg.alt = `Фото ${currentIndex + 1}`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
});