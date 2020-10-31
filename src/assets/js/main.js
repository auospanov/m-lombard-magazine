/* eslint-disable */

$(document).ready(function(){
    initBurger();
    initCityModal();
    initCollapse();
});

function initBurger() {
    $('.mobile-tab').hide();
    $('#burg').on('click', function() {
      $('.mobile-tab').slideToggle(400);
    });
}

function initCityModal() {
    $('.js-close-city-modal').on('click', closeCityModal);
    $('.js-next-city-modal').on('click', nextCityModal);

    function closeCityModal() {
        document.getElementById('city_dropdown').style.display = "none";
    }
    
    function nextCityModal() {
        document.getElementById('city_dropdown').style.display = "none";
        document.getElementById('city_dropdown_2').style.display = "block";
    }
}

function initCollapse() {
    var coll = document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("footer-active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        } 
      });
    }
}

/* Смена иконки сердце (избранное) при клике на него *для страницы Категорий, шаблон category */
function myFunction(x) {
    x.classList.toggle("fas");
} 
/* / Смена иконки сердце (избранное) при клике на него *для страницы Категорий, шаблон category */

/* Смена иконки сердце (избранное) при клике на него *для страницы Избранные, шаблон favorite.html */
function myFunction2(x) {
    x.classList.toggle("fas");
} 
/* / Смена иконки сердце (избранное) при клике на него *для страницы Избранные, шаблон favorite.html */

/* Смена иконки сердце (избранное) при клике на него *для страницы Избранные, шаблон favorite.html */
function myFunction3(x) {
    x.classList.toggle("fas");
} 
/* / Смена иконки сердце (избранное) при клике на него *для страницы Избранные, шаблон favorite.html */