document.addEventListener("DOMContentLoaded", function () {
    const fadeIns = document.querySelectorAll(".fade-in, .mobile-fade-in, .fade-in-right, .fade-in-left, .fade-in-up");
    const sections = document.querySelectorAll(".services-section, .expertise-section, .how-we-work-section, .discount-section, .contact-section");
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

    function parallaxEffect() {
        if (discountBg) {
            const scrollPosition = window.scrollY;
            const section = document.querySelector(".discount-section");
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const windowHeight = window.innerHeight;

            if (scrollPosition + windowHeight > sectionTop && scrollPosition < sectionTop + sectionHeight) {
                const offset = (scrollPosition - sectionTop) * 0.3;
                discountBg.style.transform = `translateY(${offset}px)`;
            }
        }
    }

    window.addEventListener("scroll", () => {
        checkVisibility();
        parallaxEffect();
    });
    checkVisibility();
});

// Kontaktformular senden
function sendMail(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    fetch("https://formspree.io/f/mqaevjej", {
        method: "POST",
        body: data,
    })
        .then(response => {
            if (response.ok) {
                window.location.href = "./send_mail.html"; // Erfolgsseite
            } else {
                throw new Error("Formular konnte nicht gesendet werden");
            }
        })
        .catch(error => {
            console.error("Fehler beim Senden des Formulars:", error);
            alert("Es gab ein Problem beim Senden. Bitte versuchen Sie es erneut.");
        });
}