// Floating Hearts Animation
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    document.body.appendChild(heart);

    // Randomize heart position and size
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    heart.style.fontSize = Math.random() * 20 + 10 + "px"; // Random sizes

    // Remove hearts after animation
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Generate floating hearts every 800ms
setInterval(createHeart, 800);

// Background Themes
const themes = [
    "linear-gradient(135deg, #ff758c, #ff7eb3)", // Soft Pink
    "linear-gradient(135deg, #f5a9b8, #f585b5)", // Light Rosy
    "linear-gradient(135deg, #ff99cc, #ff66b2)", // Bright Pink
    "linear-gradient(135deg, #ff4d6d, #ff0066)"  // Deep Romantic
];
let themeIndex = 0;

function changeBackground() {
    document.body.style.background = themes[themeIndex];
    themeIndex = (themeIndex + 1) % themes.length; // Cycle through themes
}

// Yes Button Click Event
document.querySelector(".yes-btn").addEventListener("click", () => {
    const question = document.querySelector(".question");
    const gif = document.querySelector(".gif");
    const btnGroup = document.querySelector(".btn-group");

    question.innerHTML = "Forever? 💞";
    gif.src = "https://media.tenor.com/sqMrmFmyejwAAAAM/hug.gif";
    changeBackground();

    setTimeout(() => {
        question.innerHTML = "Are you sure? 💍";
        gif.src = "https://media.tenor.com/mqvLadAFFtMAAAAj/thinking-about-question-mark.gif";
        changeBackground();
    }, 2000);

    setTimeout(() => {
        // Hide everything before changing to the final page
        question.style.opacity = "0";
        gif.style.opacity = "0";
        btnGroup.style.opacity = "0";

        setTimeout(() => {
            question.innerHTML = "Yeahhhh!!! I love you Chandani. 💕\nThank you for coming into my life. Thank you for all those precious moments we had.\nI promise to keep you happy and I will always love you.";
            gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGNhdXh1b252b2F2b2U4cHRlNGkwMDZsajllaGF1cDJyb2p4NXl2YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/G6N0pDDgDpLjUvNoyQ/giphy.gif";
            changeBackground();

            // Fade everything back in
            question.style.opacity = "1";
            gif.style.opacity = "1";
            
            setTimeout(() => {
                btnGroup.style.display = "none"; // Fully hide buttons
            }, 500);
        }, 500); // Delay to avoid flashing previous text
    }, 4000);
});

// No Button Moves Away on Hover (Fixed within wrapper background)
document.querySelector(".no-btn").addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const noBtn = document.querySelector(".no-btn");

    // Get wrapper and button sizes
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Ensure button remains inside the wrapper background
    const maxX = wrapperRect.width - noBtnRect.width - 20; // Prevent going out of bounds horizontally
    const maxY = wrapperRect.height - noBtnRect.height - 20; // Prevent going out of bounds vertically

    // Generate random new position within the box
    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    // Apply new position smoothly
    noBtn.style.transition = "transform 0.3s ease-out";
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});
