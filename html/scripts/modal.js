/*Open*/
function openModal1() 
{document.getElementById('myModal').style.display = "block";}

function openModal2() 
{document.getElementById('myModal').style.display = "block";}

/*Close*/
function closeModal() 
{document.getElementById('myModal').style.display = "none";}

var slideIndex = 1;
showSlides(slideIndex);

/*Controls*/
function plusSlides(n)
{showSlides(slideIndex += n);}

function currentSlide(n) 
{showSlides(slideIndex = n);}

function showSlides(n) 
{
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) 
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}