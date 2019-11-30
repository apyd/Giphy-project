import { apiRequest } from "./apiRequest.js";

const header = document.querySelector('.header');
const informationBox = document.querySelector('.information-box')
const input = document.querySelector('.search-box__input');
const button = document.querySelector('.search-box__button');
const infoText = document.querySelector('.information-box__text');
const tagButtons = document.querySelectorAll('.information-box__button');
const loadmoreButton = document.querySelector('.loadmore-button');
let offsetVar = 17;

window.onscroll = function () {
    console.log(window.scrollY);
    if (window.scrollY != 0) {
        informationBox.classList.add('information-box--hidden');
        header.classList.add('header--compact')
    } else {
        informationBox.classList.remove('information-box--hidden');
        header.classList.remove('header--compact');
    }
}

apiRequest("trending", 0);
button.addEventListener('click', processQuery);
input.addEventListener('keyup', searchOnEnter);
tagButtons.forEach(function (tagButton) {
    tagButton.addEventListener('click', processQuery);
    tagButton.addEventListener('click', clearInputBox);
});
loadmoreButton.addEventListener('click', loadMore);

function searchOnEnter(e) {
    if (e.key === "Enter") {
        return processQuery(e);
    }
};

function clearInputBox(e) {
    input.value = e.srcElement.value;
};

function processQuery(e) {
    const text = e.srcElement.value || input.value;
    if (text) {
        removeElements();
        addTextToSpan(text);
        apiRequest(text, 0);
    }
};

function loadMore(e) {
    const text = e.srcElement.value || input.value;
    if (text) {
        apiRequest(text, offsetVar)
        offsetVar += 17
    } else {
        apiRequest("trending", offsetVar)
        offsetVar += 17
    }
}

function removeElements() {
    const gifWrappers = document.querySelectorAll('.gif__wrapper');
    gifWrappers.forEach(gifWrapper => {
        gifWrapper.remove();
    });
};

function addTextToSpan(text) {
    const span = document.querySelector('span');
    span.textContent = '';
    span.textContent = text;
};