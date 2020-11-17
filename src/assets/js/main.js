/* eslint-disable */
import $ from 'jquery';

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
    document.querySelectorAll('.js-open-city-modal').forEach(el => el.addEventListener('click', openCityModal));
    document.querySelectorAll('.js-close-city-modal').forEach(el => el.addEventListener('click', closeCityModal));
    document.querySelectorAll('.js-next-city-modal').forEach(el => el.addEventListener('click', nextCityModal));

    function openCityModal(e) {
        e.preventDefault();
        document.querySelector('#city_dropdown').style.display = "block";
        document.querySelector('#city_dropdown_mob').style.display = "block";
    }

    function closeCityModal() {
        document.querySelector('#city_dropdown').style.display = "none";
        document.querySelector('#city_dropdown_2').style.display = "none";
        document.querySelector('#city_dropdown_mob').style.display = "none";
    }
    
    function nextCityModal() {
        document.querySelector('#city_dropdown').style.display = "none";
        document.querySelector('#city_dropdown_mob').style.display = "none";
        document.querySelector('#city_dropdown_2').style.display = "block";
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
