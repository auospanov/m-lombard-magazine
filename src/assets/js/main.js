/* eslint-disable */
import $ from 'jquery';

$(document).ready(function(){
    initBurger();
    initCollapse();
});

function initBurger() {
    $('.mobile-menu-wrapper').hide();
    $('#burg').on('click', function() {
        $('.mobile-menu-wrapper').fadeIn(400);
    });
    $('.js-close-burger').on('click', function() {
       $('.mobile-menu-wrapper').fadeOut(400);
    })
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
