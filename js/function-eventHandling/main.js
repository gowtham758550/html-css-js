const likeCount = document.getElementById("like-count");

function like() {
    console.log();
    likeCount.value = parseInt(likeCount.value) + 1;
}

function unlike() {
    if (parseInt(likeCount.value) > 0) {
        likeCount.value = parseInt(likeCount.value) - 1;
    }
}

const select = document.getElementById("select");
const selectValue = document.getElementById("select-value");
function getSelectValue() {
    selectValue.innerHTML = select.value;
    if (selectValue.innerHTML == "") {
        selectValue.innerHTML = "No value is Selected";
        selectValue.className = "text-red";
    } else {
        selectValue.innerHTML = `Selected value is ${select.value}`;
        selectValue.className = "text-green";
    }
}