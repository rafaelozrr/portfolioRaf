document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll("h2");
    headers.forEach((h2, i) => {
        setTimeout(() => {
            h2.style.transition = "all 0.6s ease";
            h2.style.opacity = "1";
            h2.style.transform = "translateY(0)";
        }, i * 500);
    });
});