/*Open*/
function openModal1() 
{document.getElementById('myModal1').style.display = "block";}

/*Close*/
function closeModal1() 
{document.getElementById('myModal1').style.display = "none";}

var slideIndex = 1;
showSlides1(slideIndex);

/*Controls*/
function plusSlides(n)
{showSlides1(slideIndex += n);}

function currentSlide(n) 
{showSlides1(slideIndex = n);}

function showSlides1(n) 
{
    var i;
    var slides = document.getElementsByClassName("mySlides1");
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





/*Open*/
function openModal1() 
{document.getElementById('myModal2').style.display = "block";}

/*Close*/
function closeModal1() 
{document.getElementById('myModal2').style.display = "none";}

var slideIndex = 1;
showSlides2(slideIndex);

/*Controls*/
function plusSlides(n)
{showSlides2(slideIndex += n);}

function currentSlide(n) 
{showSlides2(slideIndex = n);}

function showSlides2(n) 
{
    var i;
    var slides = document.getElementsByClassName("mySlides2");
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