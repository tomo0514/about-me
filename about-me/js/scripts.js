document.addEventListener('DOMContentLoaded', () => {
    // ページタイトルのフェードインアニメーション
    const pageTitle = document.getElementById('page-title');
    pageTitle.style.opacity = 0;
    pageTitle.style.transform = 'translateY(-20px)';
    
    function fadeIn(element, duration) {
        let start = null;
        
        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const opacity = Math.min(progress / duration, 1);
            const translateY = Math.max(-20 + (progress / duration) * 20, 0);
            
            element.style.opacity = opacity;
            element.style.transform = `translateY(${translateY}px)`;
            
            if (progress < duration) {
                requestAnimationFrame(step);
            }
        }
        
        requestAnimationFrame(step);
    }
    
    fadeIn(pageTitle, 1000); // 1000ms = 1s

    // ナビゲーションリンクのホバーアニメーション
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', (event) => {
            const element = event.target;
            element.style.transition = 'color 0.3s ease';
            element.style.color = '#0bd';
        });

        link.addEventListener('mouseout', (event) => {
            const element = event.target;
            element.style.transition = 'color 0.3s ease';
            element.style.color = '#432';
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll('.fade-in');

    function fadeInOnScroll(element) {
        const rect = element.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (rect.top + scrollTop < window.innerHeight) {
            element.classList.add('show');
        }
    }

    function handleScroll() {
        fadeElements.forEach(el => {
            fadeInOnScroll(el);
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初期チェック
});