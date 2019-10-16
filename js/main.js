AOS.init({
    duration: 1200
});

$(document).ready(function(){
    $(window).scroll(function(){
         var scroll = $(window).scrollTop();
         if(scroll > 100){
             $("#mynav").css("background-image", "linear-gradient(45deg, rgb(122, 74, 253, 95), rgb(2, 5, 199, 0.95))");
         }
         else{
             $("#mynav").css("background-image", "linear-gradient(45deg, rgb(122, 74, 253, 0.4), rgb(2, 5, 199, 0.4))");
         }
    })
})

window.onload = function(){
    var el = document.getElementById('preload');
    el.style.display = 'none';
  };