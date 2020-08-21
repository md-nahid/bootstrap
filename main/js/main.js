

// aboutpage working process mouseover effect
let workingProcessHover = document.querySelectorAll(".working-porcess");
workingProcessHover.forEach( (item) => {
    item.addEventListener("mouseover", () => {
        item.classList.add("shadow")
    });
})

// aboutpage working process mouseout effect
let workingProcessBlur = document.querySelectorAll(".working-porcess");
workingProcessBlur.forEach( (item) => {
    item.addEventListener("mouseout", () => {
        item.classList.remove("shadow")
    });
})


// slick slider function about page tour type
$(document).ready(function(){
  $('.about-testimonial').slick({
      dots: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
          }
        }
      ]
  });
});


// tour type slick slider function service page 
$(document).ready(function(){
  $('.tour-type-slick-slider').slick({
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: ".tour-type-slick-prev",
      nextArrow: ".tour-type-slick-next",
      responsive: [
          {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
  });
});


// popular tours slick slider function service page
$(document).ready(function(){
  $('.popular-tour-slick-slider').slick({
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      prevArrow: ".slickPrev",
      nextArrow: ".slickNext",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
              slidesToShow: 2,
          }
        },
        {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
          }
        }
      ]
  });
});



// custom file input item function for file name
$(document).ready(function() {
  $(".custom-file-input").on("change", function() {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
  });
})










