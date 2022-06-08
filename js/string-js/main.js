const stringInput = document.getElementById("string-input");
const output = document.getElementById("output");

function convertByte() {
    console.log(document.getElementsByTagName("span"));
    const paragraphSpan = document.createElement("span");
    paragraphSpan.innerHTML = `The input string is ${stringInput.value}`;
    output.appendChild(paragraphSpan);
    // for (let i = 0; i < stringInput.value.length; i++) {
    //      += stringInput.value.charCodeAt(i);
    // }
    // console.log(byte);
}

const textareaInput = document.getElementById("textarea-input");
const camelCase = document.getElementById("camel-case");
function getCamelCase() {
    camelCase.innerHTML = textareaInput.value.split(" ").map((word) => word[0].toUpperCase() + word.substring(1)).join(" ");
}