// Add this to the beginning of your script.js file

// Control hamburger visibility based on screen size
document.addEventListener('DOMContentLoaded', function() {
    // Function to check screen size and set hamburger visibility
    function setHamburgerVisibility() {
        const hamburger = document.querySelector('.hamburger');
        if (window.innerWidth > 768) {
            hamburger.style.display = 'none';
        } else {
            hamburger.style.display = 'block';
        }
    }
    
    // Set initial state
    setHamburgerVisibility();
    
    // Update when window is resized
    window.addEventListener('resize', setHamburgerVisibility);
});

// Keep your existing code below this
function showMenu() {
    document.querySelector('.sidebar').classList.add('active');
}

function closeSidebar() {
    document.querySelector('.sidebar').classList.remove('active');
}

// Rest of your script.js code...

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (event) => {
    const sidebar = document.querySelector('.sidebar');
    const hamburger = document.querySelector('.hamburger');
    if (!sidebar.contains(event.target) && !hamburger.contains(event.target) && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    }
});

// Close sidebar when a link is clicked
document.querySelectorAll('.sidebar-links a').forEach(link => {
    link.addEventListener('click', () => closeSidebar());
});

// Typed.js initialization
document.addEventListener('DOMContentLoaded', () => {
    new Typed('.auto-type', {
        strings: [' VISUAL', 'VISUALISER'],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });
});