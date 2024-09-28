
console.log("Star script loaded"); // Add this to the top of your script


document.addEventListener("DOMContentLoaded", function () {
    const starContainer = document.createElement('div');
    starContainer.classList.add('stars');
    document.body.appendChild(starContainer);  // Append to the body

    const numStars = 50; // Set the number of stars

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Random position within the viewport
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;

        // Random animation duration for each star
        star.style.animationDuration = `${Math.random() * 1 + 2}s`;

        // Append the star to the container
        starContainer.appendChild(star);
    }
});
