// Function to redirect to Telegram
function contactTelegram(service) {
    const telegramUsername = 'mzed33';
    const message = مرحباً، أنا مهتم بـ ${service}. الرجاء التواصل معي.;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Open Telegram link
    window.open(https://t.me/${telegramUsername}?text=${encodedMessage}, '_blank');
}

// Add animation to service cards when they come into view
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});