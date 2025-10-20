// Inisialisasi AOS (Animasi on Scroll)
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: true, // Animasi hanya terjadi satu kali saat scrolling down
        easing: 'ease-in-out',
    });

    setupAccordion();
    setupTestimonialCarousel();
    setupStickyHeader();
});

// =================== Microinteraction: Accordion FAQ ===================
function setupAccordion() {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const body = item.querySelector('.accordion-body');

            // Tutup semua kecuali yang diklik
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.accordion-header').classList.remove('active');
                    otherItem.querySelector('.accordion-body').classList.remove('open');
                }
            });

            // Toggle yang diklik
            header.classList.toggle('active');
            body.classList.toggle('open');
        });
    });
}

// =================== Microinteraction: Testimonial Carousel ===================
function setupTestimonialCarousel() {
    const cards = document.querySelectorAll('.testi-card');
    const dots = document.querySelectorAll('.dot');
    let current = 0;

    function showCard(index) {
        cards.forEach(card => card.classList.remove('active-testi'));
        dots.forEach(dot => dot.classList.remove('active-dot'));

        cards[index].classList.add('active-testi');
        dots[index].classList.add('active-dot');
    }

    function nextCard() {
        current = (current + 1) % cards.length;
        showCard(current);
    }

    // Auto-slide every 5 seconds
    setInterval(nextCard, 5000);

    // Click dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            current = index;
            showCard(current);
        });
    });
}

// =================== Microinteraction: Sticky Header ===================
function setupStickyHeader() {
    const header = document.getElementById('main-header');
    const heroHeight = document.querySelector('.hero-section').offsetHeight;

    window.addEventListener('scroll', () => {
        if (window.scrollY > heroHeight - 100) { // Berubah warna/shadow saat melewati hero
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.05)';
        }
    });
}