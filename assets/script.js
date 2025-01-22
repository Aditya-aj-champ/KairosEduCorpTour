
let scrollAmount = 0;
const scrollStep = 310; // Adjust for card width + gap
const carousel = document.getElementById("carousel");
const carouselItems = carousel.children;
const totalCards = carouselItems.length; // Since we duplicated the cards
const totalScrollWidth = carousel.scrollWidth; // Original content width
const indicatorsContainer = document.getElementById("upCarouselIndicators");

let currentCardIndex = 0; // Track the active card for indicators

// Duplicate the carousel content to enable infinite scrolling
const cloneCarousel = () => {
    const clones = Array.from(carouselItems).map(item => item.cloneNode(true));
    clones.forEach(clone => carousel.appendChild(clone));
};

// Create indicators dynamically
const createIndicators = () => {
    for (let i = 0; i < totalCards; i++) {
        const button = document.createElement("button");
        if (i === 0) button.classList.add("active"); // Mark the first as active
        indicatorsContainer.appendChild(button);
    }
};

// Update active indicator
const updateIndicators = () => {
    const indicators = indicatorsContainer.children;
    Array.from(indicators).forEach((button, index) => {
        button.classList.toggle("active", index === currentCardIndex);
    });
};

// Auto-scroll the carousel
function autoScroll() {
    scrollAmount += scrollStep;
    carousel.style.transform = `translateX(-${scrollAmount}px)`;
    carousel.style.transition = "transform 0.5s ease-in-out";

    // Reset the scroll position when reaching halfway to simulate infinite scrolling
    if (scrollAmount >= totalScrollWidth) {
        carousel.style.transition = "none"; // Disable animation for seamless reset
        scrollAmount = 0; // Reset scroll amount
        carousel.style.transform = `translateX(0)`;
    }

    // Update the current card index for indicators
    currentCardIndex = (currentCardIndex + 1) % totalCards;
    updateIndicators();
}

// Initialize carousel and indicators
cloneCarousel();
createIndicators();

// Auto-move the carousel every 2 seconds
setInterval(autoScroll, 2000);







// -------------------------- card heart like color--------------------
document.querySelector(".card-like-icon").addEventListener("click", function () {
    const outlineIcon = document.getElementById("heart-icon-outline");
    const filledIcon = document.getElementById("heart-icon-filled");

    if (outlineIcon.style.display === "none") {
        outlineIcon.style.display = "inline";
        filledIcon.style.display = "none";
    } else {
        outlineIcon.style.display = "none";
        filledIcon.style.display = "inline";
    }
});

// ------------------------testimonials-carousel---------------------
const carousel2 = document.getElementById('testimonials-carousel');
let scrollPosition = 0;
const cardWidth = 200; // Card width + margin

// Clone the carousel content for infinite loop
const carouselContent = carousel2.innerHTML;
carousel2.innerHTML += carouselContent;

carousel2.style.transition = "transform 0.5s ease-in-out";

setInterval(() => {
    scrollPosition += cardWidth;

    if (scrollPosition >= carousel2.scrollWidth / 2) {
        carousel2.style.transition = "none"; // Disable transition for smooth reset
        carousel2.style.transform = `translateX(0)`; // Reset to the start
        scrollPosition = 0;
        setTimeout(() => {
            carousel2.style.transition = "transform 0.5s ease-in-out"; // Re-enable transition
        }, 0); // Wait a moment before re-enabling transition
    } else {
        carousel2.style.transform = `translateX(-${scrollPosition}px)`;
    }
}, 2000);
