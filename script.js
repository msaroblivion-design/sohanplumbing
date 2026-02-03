document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if(hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // --- WhatsApp Logic (Universal Link with specific text) ---
    // The Master Prompt requested different behaviors for desktop/mobile,
    // but the modern "wa.me" API handles device detection automatically
    // and is much more reliable. We will format the message correctly.
    
    const phoneNumber = "6589068421";
    const message = encodeURIComponent("Hi");
    const waUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    const waLinks = document.querySelectorAll('.whatsapp-link');
    
    waLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Open in new tab
            window.open(waUrl, '_blank');
        });
    });

    // --- Contact Form Handling (Simulation) ---
    const form = document.getElementById('quoteForm');
    
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get values
            const name = form.querySelector('input[type="text"]').value;
            const service = form.querySelector('select').value;
            
            // Construct a WhatsApp URL from the form data to make it actionable
            const formMessage = encodeURIComponent(`Hi Sohan, my name is ${name}. I need a quote for ${service}.`);
            const formWaUrl = `https://wa.me/${phoneNumber}?text=${formMessage}`;
            
            // Simulate sending (Redirect to WA)
            if(confirm("Click OK to send this inquiry directly via WhatsApp for a faster response!")) {
                window.open(formWaUrl, '_blank');
                form.reset();
            }
        });
    }

    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if(navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }

            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
