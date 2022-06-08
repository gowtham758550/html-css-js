var time = document.getElementById("time");
var hyperlink = document.getElementById("hyperlink");
var hyperlinkText = document.getElementById("hyperlink-text");
var hyperlinkInput = document.getElementById("hyperlink-input");
var hyperlinkOption = document.getElementById("hyperlink-option");

function getTime() {
    time.innerHTML = new Date();
}

function getHyperlink() {
    hyperlinkText.innerHTML = hyperlinkInput.value;
    hyperlink.href = hyperlinkInput.value;
    if (hyperlinkOption.value == "new") {
        hyperlink.target = "_blank"
    }
}

// Event listener
var hyperlink1 = document.getElementById("hyperlink1");
var hyperlinkText1 = document.getElementById("hyperlink-text1");
var hyperlinkInput1 = document.getElementById("hyperlink-input1");
var hyperlinkOption1 = document.getElementById("hyperlink-option1");

hyperlinkInput1.addEventListener("change", function (e) {
    hyperlinkText1.innerHTML = e.target.value;
    hyperlink1.href = e.target.value;
});

hyperlinkOption1.addEventListener("change", function (e) {
    if (hyperlinkOption1.value == "new") {
        hyperlink1.target = "_blank";
    } else {
        hyperlink1.target = "";
    }
})

// var form = document.getElementById("form");
// var fieldType = document.getElementById("field-type");

// fieldType.addEventListener("change", (e) => {
//     switch (e.target.value) {
//         case "input":
//             let inputType = document.createElement("select");
//             let inputTypeOption = document.createElement("option");
//             ["text", "password", "number"].forEach(type => {
//                 inputTypeOption.text = type;
//                 inputTypeOption.value = type
//                 inputType.appendChild(inputTypeOption)
//             });
//             form.appendChild(inputType);
//     }
// });

// function generateForm() {
//     let input = document.createElement("input");
//     input.placeholder = "Enter your name";
//     form.appendChild(input);
// }

var search = document.getElementById("search");
var paragraph = document.getElementById("paragraph");

search.addEventListener("change", (e) => {
    let searchText = e.target.value;
    let paragraphArray = paragraph.innerHTML.split(" ");
    paragraph.innerHTML = ""
    paragraphArray.forEach((word) => {
        if (word.toLowerCase() === searchText) {
            paragraph.innerHTML += `<span class=\"bg-yellow\">${word}</span>`;
        } else {
            paragraph.innerHTML += word + " ";
        }
    })
});