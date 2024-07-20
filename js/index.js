$(document).ready(function () {
    class TxtType {
        constructor(el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        }
        tick() {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];

            if (this.isDeleting) {
                this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
                this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.html('<span class="wrap">' + this.txt + '</span>');

            var that = this;
            var delta = 200 - Math.random() * 100;

            if (this.isDeleting) {
                delta /= 2;
            }

            if (!this.isDeleting && this.txt === fullTxt) {
                delta = this.period;
                this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
                this.isDeleting = false;
                this.loopNum++;
                delta = 500;
            }

            setTimeout(function () {
                that.tick();
            }, delta);
        }
    }


    var elements = $('.typewrite');
    elements.each(function() {
        var toRotate = $(this).attr('data-type');
        var period = $(this).attr('data-period');
        if (toRotate) {
            new TxtType($(this), JSON.parse(toRotate), period);
        }
    });

    // INJECT CSS
    var css = $("<style>")
        .prop("type", "text/css")
        .html(".typewrite > .wrap { border-right: 0.08em solid #fff}");
    $("body").append(css);
});