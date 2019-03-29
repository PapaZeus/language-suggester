$(document).ready(function() {
  $("form#languagematch").submit(function(event) {
    var languagechoice = parseInt($("input#languagechoice").val());
    var picjb = "img/justin.jpg";
    var picag = "img/ariana.jpg"
    var picts = "img/taylor.jpg"
    var picrg = "img/ryan.jpg"
    var picgg = "img/golum.jpg"


    if (languagechoice === 'c#' && age <= 21 ) {

    $("#matchpic").append("<img src=" + picjb + ">");
    $("#soulmate").empty().append("Justin Bieber");
    $("#result").show();

    } else if (languagechoice === 'male' && age <= 21) {

    $("#matchpic").append("<img src=" + picag + ">");
    $("#soulmate").empty().append("Ariana Grande");
    $("#result").show();


    } else if (languagechoice === 'male' && age <= 40) {

    $("#matchpic").append("<img src=" + picts + ">");
    $("#soulmate").empty().append("Taylor Swift");
    $("#result").show();
    }

    else if (languagechoice === 'female' && age <= 30) {

    $("#matchpic").append("<img src=" + picrg + ">");
    $("#soulmate").empty().append("Ryan Gosling");
    $("#result").show();
    }

    else if (languagechoice === 'female' && age > 30) {

    $("#matchpic").append("<img src=" + picgg + ">");
    $("#soulmate").empty().append("Golum");
    $("#result").show();

    } else if (languagechoice === 'male' && age > 30) {

    $("#matchpic").append("<img src=" + picgg + ">");
    $("#soulmate").empty().append("Golum");
    $("#result").show();

    } else {
      alert('Please enter your information.');
    }

    event.preventDefault();
  });
});
