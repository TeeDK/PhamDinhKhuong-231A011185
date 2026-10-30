
document.addEventListener("DOMContentLoaded", function () {
    // Hien thi nam hien tai
    const footer = document.querySelector("footer p");

    if (footer) {
        footer.innerHTML =
            "© " + new Date().getFullYear() +
            " Phạm Đình Khương | Bài tập thiết kế website";
    }

    // Hieu ung hien thi khi cuon trang
    const cards = document.querySelectorAll(".info-card, .assignment-card");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15
        });

        cards.forEach(function (card) {
            card.classList.add("animate-card");
            observer.observe(card);
        });
    }
});
