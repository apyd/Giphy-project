import { apiRequest } from "./apiRequest.js";

const input = document.querySelector('.search-box__input');
const button = document.querySelector('.search-box__button');
const tagButtons = document.querySelectorAll('.information-box__button');
const loadmoreButton = document.querySelector('.loadmore-button');
let offsetVar=17;

button.addEventListener('click', processQuery);
input.addEventListener('keyup', searchOnEnter);
tagButtons.forEach(function (tagButton) {
    tagButton.addEventListener('click', processQuery);
    tagButton.addEventListener('click', clearInputBox);
});
loadmoreButton.addEventListener('click', loadMore)

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
        apiRequest(text,0);
    }
};
function loadMore(e){
    const text = e.srcElement.value || input.value;

   
    apiRequest(text,offsetVar)
    offsetVar+=17
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