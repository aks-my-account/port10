// JavaScript for Navbar Toggle
function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}




// JavaScript for Typed.js
var typed1 = new Typed(".text1", {
    strings: ["It's me."],
    typeSpeed: 110,
    
    loop: false
});

var typed2 = new Typed(".text2", {
    strings: ["Akash Tharu"],
    typeSpeed: 142,
    loop: false
});

var typed3 = new Typed(".text3", {
    strings: ["Web Developer","Web Designer",  "Graphic Designer"],
    typeSpeed: 130,
    backSpeed: 100,
    backDelay: 1200,
    loop: true
});
var typed4 = new Typed(".text4", {
    strings: [ "Web Developer","Web Designer", "Graphic Designer"],
    typeSpeed: 150,
    backSpeed: 140,
    backDelay: 150,
    loop: true
});

var typed4 = new Typed(".sub-title-up .text6", {
    strings: [ "Creative Website Designings ","Responsive Website Creations ", "User friendly Graphic Designs"],
    typeSpeed: 170,
    
    backDelay: 150,
    
    loop: true
});

















// Get all the navbar links





/*
// Get all the navbar links
const navbarLinks = document.querySelectorAll('.navbar a');

// Loop through each link and add a click event listener
navbarLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Get the href attribute (the target section or URL)
        const target = this.getAttribute('href');
        
        // Check if the href is a section within the same page
        if (target.startsWith('#')) {
            // Prevent the default behavior (scrolling to section)
            event.preventDefault();
            
            // Scroll to the section
            window.location.hash = target;

            // After scrolling to the section, refresh the page after a delay
            setTimeout(() => {
                window.location.reload();
            }, 700); // Delay to allow scrolling to target section
        } else {
            // For external links, simply reload the page after redirection
            window.location.href = target;
        }
    });
});
*/






















/*

// Get all the navbar links
const navbarLinks = document.querySelectorAll('.navbar a');

// Function to check if the current hash matches the target section
function isSameSection(target) {
    return window.location.hash === target;
}

// Loop through each link and add a click event listener
navbarLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Get the href attribute (the target section or URL)
        const target = this.getAttribute('href');
        
        // If it's an internal link (starts with '#')
        if (target.startsWith('#')) {
            // Prevent the default behavior of the anchor tag
            event.preventDefault();
            
            // Check if we're already at the target section
            if (isSameSection(target)) {
                // If we are on the same section, just reload the page
                window.location.reload();
            } else {
                // If we're on a different section, navigate to the target section
                window.location.hash = target;
            }
        } else {
            // For external links, simply redirect
            window.location.href = target;
        }
    });
});


*/

    
