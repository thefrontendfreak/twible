$(function () {
    $("#accordion").accordion({
        heightStyle: "content"
    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dot:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
});

var toggleButton = document.getElementById("toggle");
var toggleMenu = document.getElementById("menu");

document.getElementById("toggle").addEventListener("click", function() {
    toggleButton.classList.toggle('active');
    toggleMenu.classList.toggle('showMenu');
});

