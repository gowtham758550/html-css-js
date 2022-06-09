$("#get-joke").click(function () {
    $.get("https://api.chucknorris.io/jokes/random",function (data) {
        // console.log(data);
        $("#joke").html(data.value);
    });
});