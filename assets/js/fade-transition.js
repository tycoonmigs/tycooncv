document.addEventListener('DOMContentLoaded', function() {
    const texts = [
        document.getElementById('text1'),
        document.getElementById('text2'),
        document.getElementById('text3'),
        document.getElementById('text4'),
        document.getElementById('text5'),
        document.getElementById('text6'),
        document.getElementById('text7')
    ];
    let currentIndex = 0;

    function fadeText() {
        const currentText = texts[currentIndex];
        const nextIndex = (currentIndex + 1) % texts.length;
        const nextText = texts[nextIndex];

        currentText.classList.add('fade-out');
        currentText.addEventListener('animationend', function() {
            currentText.style.display = 'none';
            currentText.classList.remove('fade-out');

            nextText.style.display = 'block';
            nextText.classList.add('fade-in');
            nextText.addEventListener('animationend', function() {
                nextText.classList.remove('fade-in');
            }, { once: true });

            currentIndex = nextIndex;
        }, { once: true });
    }

    setInterval(fadeText, 2000);
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollUpBtn = document.getElementById('scrollUpBtn');

    // Show scroll-up button when user scrolls down
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            scrollUpBtn.style.display = 'flex';
        } else {
            scrollUpBtn.style.display = 'none';
        }
    });

    // Smooth scroll to top when button is clicked
    scrollUpBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
