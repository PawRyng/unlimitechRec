
  $('.slider1').slick({
    infinite: true,
    autoplay:true,
    slidesToShow: 1,
    mobileFirst: true,
    arrows:true,
    nextArrow: `<button  type="button" class="slick-next"><img src="./img/ARROW.svg" alt="arrow"></button>`,
    prevArrow: `<button  type="button" class="slick-prev"><img src="./img/ARROW.svg" alt="arrow"></button>`,
    responsive: [{
      breakpoint: 750,
        settings: {
          slidesToShow: 2,
        }},{
      breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }},
      {
      breakpoint: 1500,
        settings: {
          slidesToShow: 4,
        }},
      
      {
      breakpoint: 1600,
        settings: {
          slidesToShow: 5,
        }}   
      ]

});

  $('.carusel').slick({
    infinite: true,
    arrows:false,
    slidesToShow: 1.5,
    mobileFirst: true,
    responsive: [{
      breakpoint: 700,
        settings: {
          slidesToShow: 2,
        }
      },
      {
      breakpoint: 900,
        settings: {
          slidesToShow: 3,
        }
      },
      {
      breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },{
      breakpoint: 1400,
        settings: {
          slidesToShow: 5,
        }}
      
      ]
    

});


$(`input[type="button"]`).click(()=>{
  (!validateEmail($("#E-mail").val())) ? $("#E-mail").addClass("validation__input--Error") : $("#E-mail").removeClass("validation__input--Error");
  (!validatePhoneNumber($("#phone").val())) ? $("#phone").addClass("validation__input--Error") : $("#phone").removeClass("validation__input--Error");    
})
  