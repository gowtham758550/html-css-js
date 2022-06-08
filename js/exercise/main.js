
const welcomeOutput = document.getElementById("welcome-output");
const _name = document.getElementById("name");

function welcome() {
    if (document.getElementById("welcome")) {
        const welcome = document.getElementById("welcome");
        welcome.remove();
    }
    const heading2 = document.createElement("h2");
    heading2.id = "welcome"
    heading2.innerHTML = `Welcome ${_name.value}`
    welcomeOutput.appendChild(heading2);
}

const weddingEvent = document.getElementById("wedding-event");
const corporateEvent = document.getElementById("corporate-event");
const totalEvents = document.getElementById("total-events");

function addEvent() {
    const sum = parseInt(weddingEvent.value) + parseInt(corporateEvent.value);
    if (sum) {
        totalEvents.innerHTML = sum;
    }
}