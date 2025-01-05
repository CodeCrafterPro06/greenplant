 // Show default page on load
 document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
});

// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}

// Page navigation
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('#content > div');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    // Show selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.style.display = 'block';
        // Scroll to top
        window.scrollTo(0, 0);
        // Close mobile menu if open
        document.getElementById('mobileMenu').classList.add('hidden');
    }
}

// Handle Contact Form Submission
function handleContact(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    event.target.reset();
}

// Handle Login Form Submission
function handleLogin(event) {
    event.preventDefault();
    alert('Login successful! Welcome back.');
    event.target.reset();
    showPage('home');
}

// Handle Signup Form Submission
function handleSignup(event) {
    event.preventDefault();
    alert('Signup successful! Welcome to GreenEarth.');
    event.target.reset();
    showPage('login');
}