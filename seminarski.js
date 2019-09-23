/*TOP OF THE PAGE BUTTON START*/
window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
}
/*TOP OF THE PAGE BUTTON END*/

/*COLLAPSIBLE DIV START*/
var getCollapsible = document.getElementsByClassName('collapsibleDiv-title');

for (var i = 0; i < getCollapsible.length; i++) {
    getCollapsible[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var collContent = this.nextElementSibling;
        if (collContent.style.maxHeight) {
            collContent.style.maxHeight = null;
            collContent.style.transition = "500ms";
            collContent.style.padding = "0px";
        } else {
            collContent.style.maxHeight = collContent.scrollHeight + "px";
            collContent.style.transition = "500ms";
        }
    });
}
/*COLLAPSIBLE DIV END*/

/*TYPING EFFECT START*/

var i = 0,
    text;
text = 'Software developer | Student at Faculty of Information Technologies, University "Džemal Bijedić" in Mostar.';


function typingEffect() {
    if (i < text.length) {
        document.getElementById('description').innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 30);
    }
}

typingEffect();

/*TYPING EFFECT END*/

/*FIXED NAVBAR*/

var stickyNavTop = $('.navbar').offset().top;

var stickyNav = function() {
    var scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop && $(window).width() > 600) {
        $('.navbar').addClass('stickyNavbar');
        $('.navbar').css({
            "padding-top": "15px",
            "padding-bottom": "15px"
        });
        $('.colorBlack').css({
            "color": "#191919"
        });

    } else {
        $('.navbar').removeClass('stickyNavbar');
        $('.colorBlack').css({
            "color": "#edf0f1"
        });
        $('.navbar').css({
            "padding-top": "30px",
            "padding-bottom": "30px"
        });
    }
}
stickyNav();

$(window).scroll(function() {
    stickyNav();
});

/*FIXED NAVBAR END*/

function hamburgerMenu() {
    var x = document.getElementById("myLinks");

    if (x.style.display === "block") {
        x.style.display = "none";
        x.style.transition = "500ms";
    } else {
        x.style.display = "block";
        x.style.transition = "500ms";
    }
}