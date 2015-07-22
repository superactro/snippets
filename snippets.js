function Person(name, age) {
    // if object created without the 'new' keyword
    if (!(this instanceof arguments.callee)) {
        return new arguments.callee(name, age)
    }
    this._name = name;
    this._age = age;
}

// Extend object 
// Student.extends(Person);
Object.prototype.extends = function (parent) {
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor.this;
}

// Console color
console.log("%cBlue!", "color: blue;");

// do something on click
$(".element").live("click", function () {

});

var count = 0;
function myFunction() {
    count++;
    if (count > 5) clearInterval(timeout);
    //do something
}
var timeout = setInterval(myFunction, 20000);

if ($("#elementid").length) {
    //it does!
}

$(document).ready(function () {
    $("a.topLink").click(function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
});


var max_height = 0;
$("div.col").each(function () {
    if ($(this).height() > max_height) { max_height = $(this).height(); }
});
$("div.col").height(max_height);


jQuery.fn.centerElement = function () {
    this.css("position", "absolute");
    this.css("top", ($(window).height() - this.height()) / 2 + $(window).scrollTop() + "px");
    this.css("left", ($(window).width() - this.width()) / 2 + $(window).scrollLeft() + "px")
    return this;
}
$('#item').centerElement();