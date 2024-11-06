document.addEventListener('DOMContentLoaded', function() {
    var coll = document.querySelectorAll('.collapsible');

    coll.forEach(function(btn) {
        btn.addEventListener('click', function() {
            this.classList.toggle('active');
            var content = this.nextElementSibling;

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var mobileMenu = document.getElementById("mobile-menu");
    var navbar = document.getElementById("navbar");
  
    mobileMenu.addEventListener("click", () => {
      navbar.classList.toggle("navbar-active");
    });
});
  

var slideIndex = 1;
showDivs(slideIndex);
  
function plusDivs(n) {
showDivs(slideIndex += n);
}

function showDivs(n) {
var i;
var slides = document.getElementsByClassName("slideBox");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length} ;

for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";

}
slides[slideIndex-1].style.display = "block";
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // voorkomt onmiddellijk navigeren
  
      // Voegt fade-out class toe aan de body
      document.body.classList.add('fade-out');
  
      // Wacht tot de animatie eindigt voordat je naar de nieuwe pagina gaat
      setTimeout(() => {
        window.location.href = this.href;
      }, 500); // tijd moet overeenkomen met de duur van de fade-out animatie
    });
});


window.onload = function() {
// Jouw code die je wil uitvoeren bij het laden van de pagina
    console.log("Pagina is volledig geladen!");
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
   
};
  