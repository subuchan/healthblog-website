const menu = document.querySelector('.menu');
        const menuList = document.querySelector('nav ul');
        menu.addEventListener('click', () => {
            menuList.classList.toggle('show');
        })


        // active nav class//

        $(document).ready(function(){
            $('ul li a').click(function(){
              $('li a').removeClass("active");
              $(this).addClass("active");
          });
          });

          //humberger menu
        
          
let changeIcon = function(icon) {
    icon.classList.toggle('fa-times')
}

//image slider

const slideshowImages = document.querySelectorAll(".intro-slideshow img");

const nextImageDelay = 5000;
let currentImageCounter = 0; // setting a variable to keep track of the current image (slide)

// slideshowImages[currentImageCounter].style.display = "block";
slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
  // slideshowImages[currentImageCounter].style.display = "none";
  slideshowImages[currentImageCounter].style.opacity = 0;

  currentImageCounter = (currentImageCounter+1) % slideshowImages.length;

  // slideshowImages[currentImageCounter].style.display = "block";
  slideshowImages[currentImageCounter].style.opacity = 1;
}

 