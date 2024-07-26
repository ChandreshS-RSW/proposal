
$(document).ready(function() {
  var $sidebar = $('#header');
  var sidebarTop = $sidebar.position().top;
  var contentHeight = $('#content').outerHeight();
  
  $(window).scroll(fixSidebarOnScroll);

  function fixSidebarOnScroll() {
    var windowScrollTop = $(window).scrollTop();

    if (windowScrollTop >= (sidebarTop + contentHeight) || windowScrollTop <= sidebarTop) {
      $sidebar.removeClass('sticky');
    } else if (windowScrollTop >= sidebarTop) {
      if (!$sidebar.hasClass('sticky')) {
        $sidebar.addClass('sticky');
      }
    }
  }
  
  // Trigger the function on page load
  fixSidebarOnScroll();
});


const headerToggleBtn = document.querySelector('.header-toggle');

function headerToggle() {
  document.querySelector('#header').classList.toggle('header-show');
  headerToggleBtn.classList.toggle('bi-list');
  headerToggleBtn.classList.toggle('bi-x');
}
headerToggleBtn.addEventListener('click', headerToggle);

document.querySelectorAll('#navmenu a').forEach(navmenu => {
  navmenu.addEventListener('click', () => {
    if (document.querySelector('.header-show')) {
      headerToggle();
    }
  });
});


document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
  navmenu.addEventListener('click', function (e) {
    e.preventDefault();
    this.parentNode.classList.toggle('active');
    this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
    e.stopImmediatePropagation();
  });
});



  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });


  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);









const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));


$(document).ready(function(){
  $('#checkAll').click(function(){
    if(this.checked){
      $('.checkbox').each(function(){
        this.checked = true;
      });
    } else {
      $('.checkbox').each(function(){
        this.checked = false;
      });
    }
  });
});


$(document).ready(function () {
  $(".owl-carousel.latest_pofrfolio_slider").owlCarousel({
     loop: true,
     nav: true,
     dots:false,
     autoplay: true,
     autoplayTimeout: 3000,
     navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
     ],
     responsive: {
        0: {
           items: 1
        },
        992: {
           items: 2
        }
     }
  });
});

const dropZone = document.querySelector('.sign_upload_area');
const inputElement = document.querySelector('.sign_upload_area input');
const img = document.querySelector('.sign_upload_area img');
let p = document.querySelectorAll('.sign_upload_area p');

inputElement.addEventListener('change', function (e) {
    const clickFile = this.files[0];
    if (clickFile) {
        img.style.display = "block";
        p.forEach(pTag => pTag.style.display = 'none');
        const reader = new FileReader();
        reader.readAsDataURL(clickFile);
        reader.onloadend = function () {
            const result = reader.result;
            let src = this.result;
            img.src = src;
            img.alt = clickFile.name;
        }
    }
});

dropZone.addEventListener('click', () => inputElement.click());

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    img.style.display = "block";
    let file = e.dataTransfer.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
        p.forEach(pTag => pTag.style.display = 'none');
        let src = this.result;
        img.src = src;
        img.alt = file.name;
    }
});






