
//########################## MENU START ##########################
// NAVIGATION START
$(document).ready(function() {
    // $('a[href*="#"]').bind('click', function(e) {
    //         e.preventDefault(); // prevent hard jump, the default behavior

    //         var target = $(this).attr("href"); // Set the target as variable

    //         // perform animated scrolling by getting top-position of target-element and set it as scroll target
    //         $('html, body').stop().animate({
    //                 scrollTop: $(target).offset().top
    //         }, 2500, function() {
    //                 location.hash = target; //attach the hash (#jumptarget) to the pageurl
    //         });

    //         return false;
    // });
});



// NAVIGATION COLOR CHANGE ON SCROLL START

// $(window).scroll(function(){
//     var scroll = $(window).scrollTop();
//     if(scroll < 300){
//         $('.sticky-top').css('background', 'transparent');
//     } 
//     if(scroll < 800){
//             $('.sticky-top').css('background', 'rgba(51, 0, 0, 0.2)');
//         }

//         else if (scroll < 2900 ) {
//             $('.sticky-top').css('background', 'rgba(52, 168, 68, 0.5)');

//         }
//     else{
//         $('.sticky-top').css('background', 'rgba(23, 162, 184, 0.9)');
//     }
// });

// NAVIGATION COLOR CHANGE ON SCROLL ENDS


//########################## TYPEWRITING STARTS ##########################

// Write JavaScript here 
// var TxtType = function(el, toRotate, period) {
//     this.toRotate = toRotate;
//     this.el = el;
//     this.loopNum = 0;
//     this.period = parseInt(period, 10) || 2000;
//     this.txt = '';
//     this.tick();
//     this.isDeleting = false;
// };

// TxtType.prototype.tick = function() {
//     var i = this.loopNum % this.toRotate.length;
//     var fullTxt = this.toRotate[i];

//     if (this.isDeleting) {
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//     } else {
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//     }

//     this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

//     var that = this;
//     var delta = 200 - Math.random() * 100;

//     if (this.isDeleting) { delta /= 2; }

//     if (!this.isDeleting && this.txt === fullTxt) {
//     delta = this.period;
//     this.isDeleting = true;
//     } else if (this.isDeleting && this.txt === '') {
//     this.isDeleting = false;
//     this.loopNum++;
//     delta = 500;
//     }

//     setTimeout(function() {
//     that.tick();
//     }, delta);
// };

// window.onload = function() {
//     var elements = document.getElementsByClassName('typewrite');
//     for (var i=0; i<elements.length; i++) {
//         var toRotate = elements[i].getAttribute('data-type');
//         var period = elements[i].getAttribute('data-period');
//         if (toRotate) {
//           new TxtType(elements[i], JSON.parse(toRotate), period);
//         }
//     }
    // INJECT CSS setting the cursor border
    // var css = document.createElement("style");
    // css.type = "text/css";
    // css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid red}";
    // document.body.appendChild(css);
// };

//########################## TYPEWRITING ENDS ##########################


//########################## MENU ENDS ##########################




// #################### Number Counter #######################

jQuery(window).scroll(startCounter);
function startCounter() {
    var hT = jQuery('.love_counter').offset().top,
        hH = jQuery('.love_counter').outerHeight(),
        wH = jQuery(window).height();
    if (jQuery(window).scrollTop() > hT+hH-wH) {
        jQuery(window).off("scroll", startCounter);
        jQuery('.love_count').each(function () {
            var $this = jQuery(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
    }
}
// #################### Number Counter #######################


 