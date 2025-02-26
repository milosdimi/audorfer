// Cookie Banner Logik
document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookie-banner");
    const cookieAccept = document.getElementById("cookie-accept");
    const cookieDecline = document.getElementById("cookie-decline");

    // Prüfen, ob schon eine Entscheidung getroffen wurde
    if (!localStorage.getItem("cookieConsent")) {
        cookieBanner.style.display = "block";
    }

    // Zustimmen
    cookieAccept.addEventListener("click", function () {
        localStorage.setItem("cookieConsent", "accepted");
        cookieBanner.style.display = "none";
    });

    // Ablehnen
    cookieDecline.addEventListener("click", function () {
        localStorage.setItem("cookieConsent", "declined");
        cookieBanner.style.display = "none";
    });
});