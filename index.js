//NAVIGATION BAR


function openNav1() {
    document.getElementById("mySidenav1").style.width = "250px";
    document.getElementById("main1").style.marginLeft = "250px";
    // document.body.style.backgroundColor = "rgba(255,0,0,0.4)";
    // document.getElementById("ope_me").style.color = "rgba(255,0,0,0.4)";
    document.getElementById("ope_me").style.visibility = "hidden";

     
  }
  
  function closeNav1() {
    document.getElementById("mySidenav1").style.width = "0";
    document.getElementById("main1").style.marginLeft= "0";
    // document.body.style.backgroundColor = "white";
    document.getElementById("ope_me").style.color = "red";
    document.getElementById("ope_me").style.visibility = "visible";


  }


// NAVIGATION BAR  



// HORIZONTAL TEXT SLIDER



// HORIZONTAL TEXT SLIDER


// WHY CHOOSE US



$('#recipeCarousel').carousel({
    interval: 10000
  })
  
  $('.carousel .carousel-item1').each(function(){
      var minPerSlide = 2;
      var next = $(this).next();
      if (!next.length) {
      next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
      
      for (var i=0;i<minPerSlide;i++) {
          next=next.next();
          if (!next.length) {
              next = $(this).siblings(':first');
            }
          
          next.children(':first-child').clone().appendTo($(this));
        }
  });
//   WHY CHOOSE US


// OUR STATS

// OUR STATS

// CUSTOMER REVIEWS

// CUSTOMER REVIEWS


// UPCOMING EVENTS 


// UPCOMING EVENTS 


// FOOTER


// FOOTER