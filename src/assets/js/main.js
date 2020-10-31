/* eslint-disable */

$(document).ready(function(){
    $('.js-close-city-modal').on('click', closeCityModal);
    $('.js-next-city-modal').on('click', nextCityModal);
})

function closeCityModal() {
    document.getElementById('city_dropdown').style.display = "none";
}

function nextCityModal() {
    document.getElementById('city_dropdown').style.display = "none";
    document.getElementById('city_dropdown_2').style.display = "block";
}

/* Смена иконки сердце (избранное) при клике на него *для страницы Категорий, шаблон category.html */
function myFunction(x) {
    x.classList.toggle("fas");
} 
/* / Смена иконки сердце (избранное) при клике на него *для страницы Категорий, шаблон category.html */

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