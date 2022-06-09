$(document).ready(function () {
    $("#loader").show();
    $("#joke").html("");
    $.get(`https://api.chucknorris.io/jokes/random?query=${$("#joke-category option:selected").text()}`, function (data) {
        $("#loader").hide();
        $("#joke").html(data.value);
    })
});

$("#joke-category").on("change", function(){
    $("#loader").show();
    $("#joke").html("");
    $.get(`https://api.chucknorris.io/jokes/random?query=${$("#joke-category option:selected").text()}`, function (data) {
        $("#loader").hide();
        $("#joke").html(data.value);
    })
});

$("#get-joke").on("click", function(){
    $("#loader").show();
    $("#joke").html("");
    $.get(`https://api.chucknorris.io/jokes/random?query=${$("#joke-category option:selected").text()}`,function (data) {
        $("#loader").hide();
        $("#joke").html(data.value);
    }); 
});