// 🔥 Dark Mode Toggle (Already in Your Script)
const toggle = document.getElementById("darkModeToggle");

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
        toggle.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "dark");
        toggle.textContent = "🌙";
    }
});

// 🎭 Scroll Fade-In Effect (Updated Code for About Page)
document.addEventListener("DOMContentLoaded", function () {
    const fadeInElements = document.querySelectorAll(".fade-in");

    const revealOnScroll = (entries, observer) => {
        // Iterate over each entry that is being observed
        entries.forEach(entry => {
            console.log('Entry:', entry.target);  // Log the element
            console.log('Is in viewport?', entry.isIntersecting);  // Log if it's visible in the viewport

            if (entry.isIntersecting) {
                // Add the 'show' class to trigger the fade-in effect
                entry.target.classList.add('show');
                observer.unobserve(entry.target);  // Stop observing once it's visible
            }
        });
    };

    // Create the IntersectionObserver instance
    const observer = new IntersectionObserver(revealOnScroll, {
        threshold: 0.2 // Trigger the effect when 20% of the element is in view
    });

    // Start observing the elements
    fadeInElements.forEach(el => {
        console.log('Observing:', el);  // Log each element being observed
        observer.observe(el);  // Start observing each element
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const quoteSection = document.querySelector(".about-quote");

    if (quoteSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    quoteSection.classList.add("quote-visible");
                    observer.unobserve(quoteSection); // Stop observing after animation
                }
            });
        }, { threshold: 0.2 });

        observer.observe(quoteSection);
    }
});

