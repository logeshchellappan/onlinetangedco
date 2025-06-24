var slideIndex = 0;
showSlides();

function currentSlide(n) {
    if (n > slides.length) {n = 1}
        else if(n < 1) {n = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[n-1].style.display = "block";  
    dots[n-1].className += " active";
}

function showSlides() {
    var i;
    slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 8 seconds
}

function closePopup(id) {
  document.getElementById(id).style.display = "none";
}

function openReplyPopup() {
  document.getElementById("popup1").style.display = "none";
  document.getElementById("popup2").style.display = "flex";
}


  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');

  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

const openButtons = document.querySelectorAll('.openPopup');
const closeBtn = document.getElementById('closePopup');
const overlay = document.getElementById('popupOverlay');

// Add click listener to all popup buttons
openButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    overlay.style.display = 'flex';
  });
});

// Close button inside popup
closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

// Optional: Click outside the popup to close
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.style.display = 'none';
  }
});