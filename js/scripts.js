$(document).ready(function() {
  $("form#languagematch").submit(function(event) {
    var languagechoice = ($("select#languagechoice").val());
    var piccsharp = "img/csharp.jpg";
    var picjava = "img/java.jpg"
    var picruby = "img/ruby.png"


    if (languagechoice === 'c#' && 'c#' && 'c#' && 'c#' && 'c#') {

    $("#languagepic").append("<img src=" + piccsharp + ">");
    $("#language").empty().append("C#");
    $("#result").show();

    }

    if (languagechoice === 'java' && 'java' && 'java' && 'java' && 'java') {

    $("#languagepic").append("<img src=" + picjava + ">");
    $("#language").empty().append("JavaScript");
    $("#result").show();

    }

    if (languagechoice === 'c#' && 'c#' && 'c#' && 'c#' && 'c#') {

    $("#languagepic").append("<img src=" + piccsharp + ">");
    $("#language").empty().append("C#");
    $("#result").show();

    } 

    event.preventDefault();
  });
});
