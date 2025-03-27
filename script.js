document.addEventListener('DOMContentLoaded', () => {
    console.log('Website loaded successfully!');
    
    // Add a simple animation to the hello world text
    const heading = document.querySelector('h1');
    heading.style.opacity = '0';
    
    setTimeout(() => {
        let opacity = 0;
        const fadeIn = setInterval(() => {
            opacity += 0.1;
            heading.style.opacity = opacity.toString();
            
            if (opacity >= 1) {
                clearInterval(fadeIn);
            }
        }, 100);
    }, 500);
}); 