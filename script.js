document.addEventListener("DOMContentLoaded", function () {
    const fadeIns = document.querySelectorAll(".fade-in, .mobile-fade-in, .fade-in-right, .fade-in-left, .fade-in-up");
    const sections = document.querySelectorAll(".services-section, .expertise-section, .how-we-work-section, .discount-section");
    const discountBg = document.querySelector(".discount-bg");

    function checkVisibility() {
        fadeIns.forEach((element) => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                element.classList.add("visible");
            }
        });

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                section.classList.add("visible");
            }
        });
    }

    // Parallax-Effekt für discount-bg
    function parallaxEffect() {
        if (discountBg) {
            const scrollPosition = window.scrollY;
            const section = document.querySelector(".discount-section");
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const windowHeight = window.innerHeight;

            // Berechne den Offset nur, wenn die Sektion im Sichtbereich ist
            if (scrollPosition + windowHeight > sectionTop && scrollPosition < sectionTop + sectionHeight) {
                const offset = (scrollPosition - sectionTop) * 0.3; // Sanfter Parallax
                discountBg.style.transform = `translateY(${offset}px)`;
            }
        }
    }

    window.addEventListener("scroll", () => {
        checkVisibility();
        parallaxEffect();
    });
    checkVisibility(); // Initialer Check
});