$(document).ready(function() {
  $("form#languagematch").submit(function(event) {
    var languagechoice = ($("select#languagechoice").val());
    var piccsharp = "img/csharp.jpg";
    var picag = "img/ariana.jpg"
    var picts = "img/taylor.jpg"
    var picrg = "img/ryan.jpg"
    var picgg = "img/golum.jpg"


    if (languagechoice === 'c#' && 'c#' && 'c#' && 'c#' && 'c#') {

    $("#languagepic").append("<img src=" + piccsharp + ">");
    $("#language").empty().append("C#");
    $("#result").show();

    } else {
      alert('Please enter your information.');
    }

    event.preventDefault();
  });
});
