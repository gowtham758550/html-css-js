
// toggles survey name input
// $("#survey-name").dbclick(function () {
//     $("#survey-name-input").prop("disabled", false);
//     $("#survey-name-input").select();
// });

const surveyNameInput = document.getElementById("survey-name-input");
document.getElementById("survey-name").addEventListener("click", function () {
    surveyNameInput.disabled = false;
    surveyNameInput.focus();
    surveyNameInput.select();
});

document.getElementById("survey-name").addEventListener("focusout", () => {
    surveyNameInput.disabled = true;

});



const formFields = [];
let meta = "";

// select form field type
$("#field-type").on("change", function () {

    const fieldType = $("#field-type").val();
    const form = document.getElementById("form");

    const preview = document.getElementById("preview");

    switch (fieldType) {
        // input case
        // <div class="input-group mb-3">
        //     <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
        //     <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
        // </div>
        case "input":
            const div = document.createElement("div");
            div.classList = "input-group pt-3"
            const span = document.createElement("span");
            span.classList = "input-group-text"
            span.id = "input-field"
            span.innerHTML = "Question"
            const input = document.createElement("input");
            input.classList = "form-control"
            input.setAttribute("aria-describedby", "input-field");
            div.append(span, input);
            form.append(div);
            meta = div
    }
})

function addField() {
    const preview = document.getElementById("preview");
    console.log(meta);
    preview.append(meta)
    document.getElementById("field-type").selectedIndex = 0;

}