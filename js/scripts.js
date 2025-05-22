document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menu.classList.toggle('active');
            // Toggle aria-expanded attribute for accessibility
            const isExpanded = menu.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Dropdown Menu for Mobile
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        
        if (window.innerWidth < 992) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            });
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('nav') && menu.classList.contains('active')) {
            menu.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', false);
        }
    });

    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    
    if (testimonials.length > 0 && dots.length > 0) {
        // Function to show a specific slide
        function showSlide(index) {
            testimonials.forEach(testimonial => testimonial.style.display = 'none');
            dots.forEach(dot => dot.classList.remove('active'));
            
            testimonials[index].style.display = 'block';
            dots[index].classList.add('active');
        }
        
        // Initially show the first slide
        showSlide(currentSlide);
        
        // Automatic slide change
        setInterval(() => {
            currentSlide = (currentSlide + 1) % testimonials.length;
            showSlide(currentSlide);
        }, 5000);
        
        // Click on dots to change slide
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });
    }

    // Form Validation
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const inputs = contactForm.querySelectorAll('input, textarea');
            
            inputs.forEach(input => {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                } else if (input.type === 'email' && input.value.trim()) {
                    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailPattern.test(input.value)) {
                        isValid = false;
                        input.classList.add('error');
                    } else {
                        input.classList.remove('error');
                    }
                } else {
                    input.classList.remove('error');
                }
            });
            
            if (isValid) {
                // Here you would typically send the form data to the server
                alert('Bedankt voor uw bericht! We nemen zo spoedig mogelijk contact met u op.');
                contactForm.reset();
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add shadow to header on scroll
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Responsive events
    window.addEventListener('resize', () => {
        if (window.innerWidth > 992) {
            menu.classList.remove('active');
            dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
        }
    });
    
    // Accordion functionality for service FAQs
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        if (header) {
            header.addEventListener('click', () => {
                // Close all other accordion items
                accordionItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current accordion item
                item.classList.toggle('active');
            });
        }
    });
}); 