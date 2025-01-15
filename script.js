 document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
});

function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}

function showPage(pageId) {
    const pages = document.querySelectorAll('#content > div');
    pages.forEach(page => {
        page.style.display = 'none';
    });
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.style.display = 'block';
        window.scrollTo(0, 0);
        document.getElementById('mobileMenu').classList.add('hidden');
    }
}

// function handleContact(event) {
//     event.preventDefault();
//     alert('Thank you for your message! We will get back to you soon.');
//     event.target.reset();
// }

function handleLogin(event) {
    event.preventDefault();
    alert('Login successful! Welcome back.');
    event.target.reset();
    showPage('home');
}

function handleSignup(event) {
    event.preventDefault();
    alert('Signup successful! Welcome to GreenEarth.');
    event.target.reset();
    showPage('login');
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbw6T5xlMsuHjQ-udkjOmvo48FMDFOZHwil1Dx-grARmupM_QDublv-QoZeDUjtMb6OnDg/exec' 
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
const spinnerEl = document.getElementById("spinner");
form.addEventListener('submit', e => {
  spinnerEl.classList.remove("d-none");
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        spinnerEl.classList.add("d-none");
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})