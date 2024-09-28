const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
    const dots = elem.getAttribute("data-dots"); // Use parseInt to get a number
    const marked = elem.getAttribute("data-percent"); // Use parseInt for percentage
    const percent = Math.floor(dots * marked / 100);
    let points = "";
    const rotate = 360 / dots;

    // Create dots dynamically
    for (let i = 0; i < dots; i++) {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    // Mark the percentage of dots
    const pointsMarked = elem.querySelectorAll('.points');
    for (let i = 0; i < percent; i++) {
        pointsMarked[i].classList.add('marked');
    }
});
