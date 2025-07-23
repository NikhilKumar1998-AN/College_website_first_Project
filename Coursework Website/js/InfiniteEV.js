
document.addEventListener("DOMContentLoaded", function () {
    initNavigation();

    initSmoothScrolling();

    initContactForm();
    
    initAuthTabs();
});

function initNavigation() {
    const navLinks = document.getElementById("navLinks");
    const hamburger = document.getElementById("hamburger");
 
    if (hamburger) {
        hamburger.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }
    
    document.querySelectorAll(".nav-links li a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
}

function initContactForm() {
    const contactForm = document.getElementById("contactForm");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault(); 
    
            const name = contactForm.querySelector('input[type="text"]').value.trim();
            const email = contactForm.querySelector('input[type="email"]').value.trim();
            const message = contactForm.querySelector('textarea').value.trim();
            
            if (name === "" || email === "" || message === "") {
                alert("Please fill in all required fields.");
                return;
            }
   
            if (!validateEmail(email)) {
                alert("Please enter a valid email address.");
                return;
            }
     
            alert("Message sent successfully!");
            contactForm.reset();
            
        });
    }
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function initAuthTabs() {
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            changeTab(tabId);
        });
    });

    const signInForm = document.getElementById('signInForm');
    if (signInForm) {
        signInForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Sign in successful!');
        });
    }
    
    const signUpForm = document.getElementById('signUpForm');
    if (signUpForm) {
        signUpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const password = document.getElementById('signUpPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
   
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            alert('Account created successfully!');
            changeTab('sign-in');
        });
    }
}

function changeTab(tabId) {
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.querySelectorAll('.form-content').forEach(content => {
        content.classList.remove('active');
    });

    if (tabId === 'sign-in') {
        document.querySelector('.tab:nth-child(1)').classList.add('active');
        document.getElementById('sign-in').classList.add('active');
    } else {
        document.querySelector('.tab:nth-child(2)').classList.add('active');
        document.getElementById('sign-up').classList.add('active');
    }
}
