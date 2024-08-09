const slides = document.querySelector('.carousel-slide-test');
        const images = slides.children;
        let index = 0;
        const totalImages = images.length;

        function showSlide(n) {
            if (n >= totalImages) index = 0;
            else if (n < 0) index = totalImages - 1;
            else index = n;
            slides.style.transform = `translateX(${-index * 75}rem)`;
        }

        function nextSlide() {
            showSlide(index + 1);
        }

        function prevSlide() {
            showSlide(index - 1);
        }

        // Function to auto-slide every 3 seconds
        setInterval(nextSlide, 7000); // 3000 ms = 3 seconds