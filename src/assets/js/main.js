/* eslint-disable */
import $ from 'jquery';

$(document).ready(function(){
    initBurger();
    initCollapse();
});

function initBurger() {
    $('.mobile-tab').hide();
    $('#burg').on('click', function() {
      $('.mobile-tab').slideToggle(400);
    });
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
