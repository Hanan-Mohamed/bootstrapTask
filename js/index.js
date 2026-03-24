
// Portfolio

let buttons = document.querySelectorAll(".filter-btn");

let items = document.querySelectorAll(".portfolio-item");

buttons.forEach(btn => {

btn.addEventListener("click", function(){

buttons.forEach(b => b.classList.remove("active"));

this.classList.add("active");

let filter = this.getAttribute("data-filter");

items.forEach(item => {

if(filter === "all"){

  // item.style.display="block";

  item.classList.remove("hide");


  item.classList.add("show");

}
else if(item.classList.contains(filter)){

  // item.style.display="block";

  item.classList.remove("hide");

  item.classList.add("show");
}
else{

  // item.style.display="none";

  item.classList.remove("show");

  item.classList.add("hide");
}

});

});

});


// client


document.addEventListener("DOMContentLoaded", function () {

  const swiper = new Swiper(".clients-slider", {

    slidesPerView: 6, 

    spaceBetween: 30,

    loop: true,

    pagination: {

      el: ".swiper-pagination",

      clickable: true,
    },

    breakpoints: {
      
      0: { slidesPerView: 2 },
      
      576: { slidesPerView: 3 },
      
      768: { slidesPerView: 4 },

      992: { slidesPerView: 6 } 
    }
  });
});

