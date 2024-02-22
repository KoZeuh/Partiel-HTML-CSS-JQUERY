$(document).ready(function() {
    const slides = [
        { src: 'images/1.jpg', title: 'Titre 1' },
        { src: 'images/2.jpg', title: 'Titre 2' },
        { src: 'images/3.jpg', title: 'Titre 3' },
        { src: 'images/4.jpg', title: 'Titre 4' },
        { src: 'images/5.jpg', title: 'Titre 5' },
        { src: 'images/6.jpg', title: 'Titre 6' },
    ];

    const playSpeed = 3000;

    let currentIndex = 0;
    let playInterval;

    function showSlide(index) {
        var slide = slides[index];
        $('#slider').html(`<img src="${slide.src}" alt="${slide.title}">`);
        $('#slider-figcaption').html(slide.title);
    }


    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }


    function previousSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }


    function randomSlide() {
        var randomIndex = Math.floor(Math.random() * slides.length);
        currentIndex = randomIndex;
        showSlide(currentIndex);
    }

    function togglePlay() {
        if (playInterval) {
            clearInterval(playInterval);
            playInterval = null;
            $('#slider-toggle').html('<i class="fas fa-play"></i>');
        } else {
            playInterval = setInterval(nextSlide, playSpeed);
            $('#slider-toggle').html('<i class="fas fa-pause"></i>');
        }
    }


    showSlide(currentIndex);

    $('#slider-next').click(nextSlide);
    $('#slider-previous').click(previousSlide);
    $('#slider-random').click(randomSlide);
    $('#slider-toggle').click(togglePlay);


    $('.toolbar-toggle').click(function() {
        $('.toolbar').toggle();
    });


    $(document).keydown(function(e) {
        switch (e.which) {
            case 37: // flèche gauche
                previousSlide();
                break;
            case 39: // flèche droite
                nextSlide();
                break;
            case 32: // espace
                togglePlay();
                break;
        }
    });


});
