$('#sliderHome').owlCarousel({
    loop: true,
    margin: 30,
    // autoplay: true,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        },
        1500: {
            items: 5
        }
    }
})