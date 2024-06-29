
$(document).ready(function(){
  $('.menu-toggle').click(function(){
    $('.menu-burger').toggleClass('active')
    $('.menu').toggleClass('active')
  });
});
// ---------------------------------------

var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 11) || 2002;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        // css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #5079f7}";
        // css.innerHTML = ".typewrite > .wrap { border-left: 0.08em solid #5079f7}";
        document.body.appendChild(css);
    };

// ---------------------------------------

$(document).ready(function() {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
      items: 2,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 1000,
      autoplayHoverPause: true,
      responsiveClass: true,
      responsive: {
          0: {
              items: 1,
              nav: true
          },
          576: {
              items: 2,
              nav: false
          },
          768: {
              items: 1,
              nav: false
          },
          992: {
              items: 2,
              nav: true,
              loop: false
          }
      },
      rtl: true, // Enable RTL support
      autoplayDirection: 'rtl' // Set autoplay direction to RTL
  });

  $('.play').on('click', function() {
      owl.trigger('play.owl.autoplay', [1000]);
  });

  $('.stop').on('click', function() {
      owl.trigger('stop.owl.autoplay');
  });
});
