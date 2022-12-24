<script src="https://cdnjs.cloudflare.com/ajax/libs/barba.js/1.0.0/barba.js"></script>
<script src="https://cdn.jsdelivr.net/npm/macy@2.5.0/dist/macy.min.js"></script>

<script>
// PAGE LOAD TASKS
  

$(document).ready(function() {
    var colors = ["#05995c", "#a82c3e", "#d3a226", "#3f46bf"];   
    var rand = Math.floor(Math.random() * colors.length);
    $('.col__switch').css("color", colors[rand]);
    $("#sort-on-load")[0].click();
});


// CONTACT FORM INPUT FIELDS

$('body').on('keydown input', 'textarea[data-expandable]', function() {
    //Auto-expanding textarea
    this.style.removeProperty('height');
    this.style.height = (this.scrollHeight + 2) + 'px';
}).on('mousedown focus', 'textarea[data-expandable]', function() {
    //Do this on focus, to allow textarea to animate to height...
    this.style.removeProperty('height');
    this.style.height = (this.scrollHeight + 2) + 'px';
});


// BARBA JS PLUGIN: SWAP PAGE CONTENT WITHOUT HARD REFRESH



var FadeTransition = Barba.BaseTransition.extend({
    start: function() {
        Promise
            .all([this.newContainerLoading, this.fadeOut()])
            .then(this.fadeIn.bind(this));
    $(".footer").fadeOut(200);


    },

    fadeOut: function() {
        return $(this.oldContainer).animate({ opacity: 0 }, 200).promise();

    },

    fadeIn: function() {
        var _this = this;
        var $el = $(this.newContainer);

        $(this.oldContainer).hide();
        $(".footer").fadeIn(200);


        $el.css({
            visibility: 'visible',
            opacity: 0
        });    

      
		Webflow.ready();
            Webflow.require('ix2').init();
          
            function init() {
      		window.scrollTo(0, 1);
     		window.scrollTo(0, -1);
  			}
  			init()
      
      
        $el.animate({ opacity: 1 }, 200, function() {
            _this.done();

        });
    }
});

Barba.Pjax.getTransition = function() {
    return FadeTransition;
};

const trigger = document.getElementById('trigger');

Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container, newPageRawHTML) {
	

  
  //REMOVING PORTFOLIO DISPLAY CLASSES BEFORE NEXT PAGE LOAD 
    $(".ps__image-wrapper.is--v1").removeClass("is--tablet-p is--tablet-l is--desktop is--cut is--mobile is--framed");
  //***NOTE: This is unfinished. Add all classes v1-v6, 1-6, and ps__list
      
  
  
  
  
  
  $(".ps__list").removeClass("is--tablet-p is--grid");
  
  
  //IMAGE DISPLAY OPTIONS FOR PORTFOLIO PROJECTS
  
		//IMAGE BLOCK 1
        $(function () {  
            
          $("div.ps__optionfield.is--1").each(function(index, element) {
          var myclass = $(this).text(); 
          switch (myclass) {

            case "Full-Width Tablet Portrait":
              $(".ps__image-wrapper.is--1").addClass("is--tablet-p");

              break;
              
            case "Full-Width Tablet Landscape":
              $(".ps__image-wrapper.is--1").addClass("is--tablet-l");

              break;

            case "Full-Width Desktop":
              $(".ps__image-wrapper.is--1").addClass("is--desktop");
              
              break;
              
            case "Full-Width Desktop Cut":
              $(".ps__image-wrapper.is--1").addClass("is--desktop is--cut");

              break;
              
			case "Grid":
              $(".ps__list.is--1").addClass("is--grid");

              break;
              
            case "Grid Desktop":
              $(".ps__list.is--1").addClass("is--grid");
			  $(".ps__image-wrapper.is--1").addClass("is--desktop");
              
              break;
              
            case "Grid Desktop Cut":
              $(".ps__list.is--1").addClass("is--grid");
			  $(".ps__image-wrapper.is--1").addClass("is--desktop is--cut");
              
              break;
              
            case "Grid Mobile":
              $(".ps__list.is--1").addClass("is--grid");
			  $(".ps__image-wrapper.is--1").addClass("is--mobile");
              
              break;
              
            case "Grid Mobile Frame":
              $(".ps__list.is--1").addClass("is--grid");
			  $(".ps__image-wrapper.is--1").addClass("is--mobile is--framed");
              
              break;

            default:
              break;
          }
        });
      });
  
   		//IMAGE BLOCK 2
        $(function () {  
            
          $("div.ps__optionfield.is--2").each(function(index, element) {
          var myclass = $(this).text(); 
          switch (myclass) {

            case "Full-Width Tablet Portrait":
              $(".ps__image-wrapper.is--2").addClass("is--tablet-p");

              break;
              
            case "Full-Width Tablet Landscape":
              $(".ps__image-wrapper.is--2").addClass("is--tablet-l");

              break;

            case "Full-Width Desktop":
              $(".ps__image-wrapper.is--2").addClass("is--desktop");
              
              break;
              
            case "Full-Width Desktop Cut":
              $(".ps__image-wrapper.is--2").addClass("is--desktop is--cut");

              break;
              
			case "Grid":
              $(".ps__list.is--2").addClass("is--grid");

              break;
              
            case "Grid Desktop":
              $(".ps__list.is--2").addClass("is--grid");
			  $(".ps__image-wrapper.is--2").addClass("is--desktop");
              
              break;
              
            case "Grid Desktop Cut":
              $(".ps__list.is--2").addClass("is--grid");
			  $(".ps__image-wrapper.is--2").addClass("is--desktop is--cut");
              
              break;
              
            case "Grid Mobile":
              $(".ps__list.is--2").addClass("is--grid");
			  $(".ps__image-wrapper.is--2").addClass("is--mobile");
              
              break;
              
            case "Grid Mobile Frame":
              $(".ps__list.is--2").addClass("is--grid");
			  $(".ps__image-wrapper.is--2").addClass("is--mobile is--framed");
              
              break;

            default:
              break;
          }
        });
      });
  
   		//IMAGE BLOCK 3
        $(function () {  
            
          $("div.ps__optionfield.is--3").each(function(index, element) {
          var myclass = $(this).text(); 
          switch (myclass) {

            case "Full-Width Tablet Portrait":
              $(".ps__image-wrapper.is--3").addClass("is--tablet-p");

              break;
              
            case "Full-Width Tablet Landscape":
              $(".ps__image-wrapper.is--3").addClass("is--tablet-l");

              break;

            case "Full-Width Desktop":
              $(".ps__image-wrapper.is--3").addClass("is--desktop");
              
              break;
              
            case "Full-Width Desktop Cut":
              $(".ps__image-wrapper.is--3").addClass("is--desktop is--cut");

              break;
              
			case "Grid":
              $(".ps__list.is--3").addClass("is--grid");

              break;
              
            case "Grid Desktop":
              $(".ps__list.is--3").addClass("is--grid");
			  $(".ps__image-wrapper.is--3").addClass("is--desktop");
              
              break;
              
            case "Grid Desktop Cut":
              $(".ps__list.is--3").addClass("is--grid");
			  $(".ps__image-wrapper.is--3").addClass("is--desktop is--cut");
              
              break;
              
            case "Grid Mobile":
              $(".ps__list.is--3").addClass("is--grid");
			  $(".ps__image-wrapper.is--3").addClass("is--mobile");
              
              break;
              
            case "Grid Mobile Frame":
              $(".ps__list.is--3").addClass("is--grid");
			  $(".ps__image-wrapper.is--3").addClass("is--mobile is--framed");
              
              break;

            default:
              break;
          }
        });
      });
  
   		//IMAGE BLOCK 4
        $(function () {  
            
          $("div.ps__optionfield.is--4").each(function(index, element) {
          var myclass = $(this).text(); 
          switch (myclass) {

            case "Full-Width Tablet Portrait":
              $(".ps__image-wrapper.is--4").addClass("is--tablet-p");

              break;
              
            case "Full-Width Tablet Landscape":
              $(".ps__image-wrapper.is--4").addClass("is--tablet-l");

              break;

            case "Full-Width Desktop":
              $(".ps__image-wrapper.is--4").addClass("is--desktop");
              
              break;
              
            case "Full-Width Desktop Cut":
              $(".ps__image-wrapper.is--4").addClass("is--desktop is--cut");

              break;
              
			case "Grid":
              $(".ps__list.is--4").addClass("is--grid");

              break;
              
            case "Grid Desktop":
              $(".ps__list.is--4").addClass("is--grid");
			  $(".ps__image-wrapper.is--4").addClass("is--desktop");
              
              break;
              
            case "Grid Desktop Cut":
              $(".ps__list.is--4").addClass("is--grid");
			  $(".ps__image-wrapper.is--4").addClass("is--desktop is--cut");
              
              break;
              
            case "Grid Mobile":
              $(".ps__list.is--4").addClass("is--grid");
			  $(".ps__image-wrapper.is--4").addClass("is--mobile");
              
              break;
              
            case "Grid Mobile Frame":
              $(".ps__list.is--4").addClass("is--grid");
			  $(".ps__image-wrapper.is--4").addClass("is--mobile is--framed");
              
              break;

            default:
              break;
          }
        });
      });
  
   		//IMAGE BLOCK 5
        $(function () {  
            
          $("div.ps__optionfield.is--5").each(function(index, element) {
          var myclass = $(this).text(); 
          switch (myclass) {

            case "Full-Width Tablet Portrait":
              $(".ps__image-wrapper.is--5").addClass("is--tablet-p");

              break;
              
            case "Full-Width Tablet Landscape":
              $(".ps__image-wrapper.is--5").addClass("is--tablet-l");

              break;

            case "Full-Width Desktop":
              $(".ps__image-wrapper.is--5").addClass("is--desktop");
              
              break;
              
            case "Full-Width Desktop Cut":
              $(".ps__image-wrapper.is--5").addClass("is--desktop is--cut");

              break;
              
			case "Grid":
              $(".ps__list.is--5").addClass("is--grid");

              break;
              
            case "Grid Desktop":
              $(".ps__list.is--5").addClass("is--grid");
			  $(".ps__image-wrapper.is--5").addClass("is--desktop");
              
              break;
              
            case "Grid Desktop Cut":
              $(".ps__list.is--5").addClass("is--grid");
			  $(".ps__image-wrapper.is--5").addClass("is--desktop is--cut");
              
              break;
              
            case "Grid Mobile":
              $(".ps__list.is--5").addClass("is--grid");
			  $(".ps__image-wrapper.is--5").addClass("is--mobile");
              
              break;
              
            case "Grid Mobile Frame":
              $(".ps__list.is--5").addClass("is--grid");
			  $(".ps__image-wrapper.is--5").addClass("is--mobile is--framed");
              
              break;

            default:
              break;
          }
        });
      });
  
   		//IMAGE BLOCK 6
        $(function () {  
            
          $("div.ps__optionfield.is--6").each(function(index, element) {
          var myclass = $(this).text(); 
          switch (myclass) {

            case "Full-Width Tablet Portrait":
              $(".ps__image-wrapper.is--6").addClass("is--tablet-p");

              break;
              
            case "Full-Width Tablet Landscape":
              $(".ps__image-wrapper.is--6").addClass("is--tablet-l");

              break;

            case "Full-Width Desktop":
              $(".ps__image-wrapper.is--6").addClass("is--desktop");
              
              break;
              
            case "Full-Width Desktop Cut":
              $(".ps__image-wrapper.is--6").addClass("is--desktop is--cut");

              break;
              
			case "Grid":
              $(".ps__list.is--6").addClass("is--grid");

              break;
              
            case "Grid Desktop":
              $(".ps__list.is--6").addClass("is--grid");
			  $(".ps__image-wrapper.is--6").addClass("is--desktop");
              
              break;
              
            case "Grid Desktop Cut":
              $(".ps__list.is--6").addClass("is--grid");
			  $(".ps__image-wrapper.is--6").addClass("is--desktop is--cut");
              
              break;
              
            case "Grid Mobile":
              $(".ps__list.is--5").addClass("is--grid");
			  $(".ps__image-wrapper.is--6").addClass("is--mobile");
              
              break;
              
            case "Grid Mobile Frame":
              $(".ps__list.is--6").addClass("is--grid");
			  $(".ps__image-wrapper.is--6").addClass("is--mobile is--framed");
              
              break;

            default:
              break;
          }
        });
      });
  
        //VIDEO BLOCK 1
        $(function () {  
            
          $("div.ps__optionfield.is--v1").each(function(index, element) {
          var myclass = $(this).text(); 
          switch (myclass) {

            case "Full-Width Desktop":
              $(".ps__image-wrapper.is--v1").addClass("is--desktop");
              
              break;  
          }
        });
      });
  
		//VIDEO BLOCK 2
        $(function () {  
            
          $("div.ps__optionfield.is--v2").each(function(index, element) {
          var myclass = $(this).text(); 
          switch (myclass) {

            case "Full-Width Desktop":
              $(".ps__image-wrapper.is--v2").addClass("is--desktop");
              
              break;  
          }
        });
      });
  
		//VIDEO BLOCK 3
        $(function () {  
            
          $("div.ps__optionfield.is--v3").each(function(index, element) {
          var myclass = $(this).text(); 
          switch (myclass) {

            case "Full-Width Desktop":
              $(".ps__image-wrapper.is--v3").addClass("is--desktop");
              
              break;  
          }
        });
      });
  
		//VIDEO BLOCK 4
        $(function () {  
            
          $("div.ps__optionfield.is--v4").each(function(index, element) {
          var myclass = $(this).text(); 
          switch (myclass) {

            case "Full-Width Desktop":
              $(".ps__image-wrapper.is--v4").addClass("is--desktop");
              
              break;  
          }
        });
      });
  
		//VIDEO BLOCK 5
        $(function () {  
            
          $("div.ps__optionfield.is--v5").each(function(index, element) {
          var myclass = $(this).text(); 
          switch (myclass) {

            case "Full-Width Desktop":
              $(".ps__image-wrapper.is--v5").addClass("is--desktop");
              
              break;  
          }
        });
      });
  
		//VIDEO BLOCK 6
        $(function () {  
            
          $("div.ps__optionfield.is--v6").each(function(index, element) {
          var myclass = $(this).text(); 
          switch (myclass) {

            case "Full-Width Desktop":
              $(".ps__image-wrapper.is--v6").addClass("is--desktop");
              
              break;  
          }
        });
      });
  
  
    // RANDOMIZE COLOURED TEXT FROM ARRAY

    $(document).ready(function() {
        var colors = ["#05995c", "#a82c3e", "#d3a226", "#814da0"];
        var rand = Math.floor(Math.random() * colors.length);
        $('.col__switch').css("color", colors[rand]);
        $('.bgcol__switch').css("background-color", colors[rand]);
    }, 0);
  

    // TURN NAVIGATION TRANSPARENT FOR JOURNAL POSTS

    if (window.location.href.indexOf("journal") > -1) {
        $(".nav__bar").css("background-color", "transparent");
    } else {
        $(".nav__bar").css("background-color", "white");
    }

    var response = newPageRawHTML.replace(/(<\/?)html( .+?)?>/gi, '$1nothtml$2>', newPageRawHTML)
    var bodyClasses = $(response).filter('nothtml').attr('data-wf-page')
    $('html').attr('data-wf-page', bodyClasses)
});


Barba.Dispatcher.on('transitionCompleted', function(currentStatus) {
    $("#sort-on-load")[0].click();
    $(".nav__bar").fadeIn(200);
  
      setTimeout(function() {
    var macyInstance = Macy({
      container: '#macy-container', //Id of the grid
      trueOrder: true, 
      margin: 24, //Gap between
      columns: 2, //Colums
      debug: true,
      mobileFirst: true,
      breakAt: {
          1200: 2,
          991: 1,
          520: 1,
          400: 1,
          100: 1
      }
    });
  }, 250); 
    
});

Barba.Pjax.start();


// DELAY LINK IN FULLSCREEN NAVIGATION 

$(document).on('click', '#delay__home', function(event) {
    $("#menu__close").click();
    setTimeout(function() { jQuery('#shadow__home')[0].click() }, 550);
});

$(document).on('click', '#delay__portfolio', function(event) {
    $("#menu__close").click();
    setTimeout(function() { jQuery('#shadow__portfolio')[0].click() }, 550);
});

$(document).on('click', '#delay__about', function(event) {
    $("#menu__close").click();
    setTimeout(function() { jQuery('#shadow__about')[0].click() }, 550);
});

$(document).on('click', '#delay__exploration', function(event) {
    $("#menu__close").click();
    setTimeout(function() { jQuery('#shadow__exploration')[0].click() }, 550);
});


// DISABLE SCROLL ON NAV EXPAND

var Webflow = Webflow || [];
var $body = $(document.body);
var scrollPosition = 0;

Webflow.push(function() {
    $('[scroll=disable]').on('click', function() {
        var oldWidth = $body.innerWidth();
        scrollPosition = window.pageYOffset;
        $body.css('overflow', 'hidden');
        $body.css('position', 'fixed');
        $body.css('top', `-${scrollPosition}px`);
        $body.width(oldWidth);
    });
    $('[scroll=enable]').on('click', function() {
        if ($body.css('overflow') != 'hidden') { scrollPosition = window.pageYOffset; }
        $body.css('overflow', '');
        $body.css('position', '');
        $body.css('top', '');
        $body.width('');
        $(window).scrollTop(scrollPosition);
    });
    $('[scroll=both]').on('click', function() {
        if ($body.css('overflow') != 'hidden') {
            var oldWidth = $body.innerWidth();
            scrollPosition = window.pageYOffset;
            $body.css('overflow', 'hidden');
            $body.css('position', 'fixed');
            $body.css('top', `-${scrollPosition}px`);
            $body.width(oldWidth);
        } else {
            $body.css('overflow', '');
            $body.css('position', '');
            $body.css('top', '');
            $body.width('');
            $(window).scrollTop(scrollPosition);
        }
    });
});


// CLOSE NAV MENU

$(document).on('click', '#nav__target', function(event) {
    event.preventDefault();
    $("#nav__button").click();
});

$(document).on('click', '.delay', function(event) {
    event.preventDefault();
    $("#nav__button").click();
});

$(document).on('click', '.is--menu-link-small', function(event) {
    event.preventDefault();
    $("#nav__button").click();
});


// MAKE PARAGRAPH LINKS NULL

jQuery(document).ready(function() {
    jQuery(".paragraph a").attr("target", "_blank");
});




//SHOW PORFOLIO IMAGE ALT TEXT AS IMAGE CAPTIONS

const images = Array.from(document.querySelectorAll('.image'));
images.forEach(image => {
    let alt = image.getAttribute('alt');
    if (alt) { image.insertAdjacentHTML('afterEnd', `<p class="caption">${alt}</p>`); }
});
  

    
</script>
