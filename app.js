$(document).ready(function(){
   let options = {
    strings: ["<h1>SAMARQAND VILOYATI</h1>","<h1>NARPAY TUMANI</h1>","<h1>32-MAKTAB</h1>","<h1>MENING MAKTABIM WEB SITESIGA XUSH KELIBSIZ</h1>","<h1>BU WEBSITEDA 32-MAKTABNI TO'LIQ URGANSA BO'LADI</h1>"],
    typeSpeed: 30,
    startDelay: 500,
    backSpeed: 40,
    backDelay: 500,
    loop: true,
    loopCount: Infinity,
    };

    let typed = new Typed('.elem', options);




    $(".slick-wrapper").slick({
        slidesToShow: 1,
        slidesToScroll: 1 
       /* dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear' */
    });

})









