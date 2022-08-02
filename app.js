let myLibrary = [];

const cardsContainer = document.querySelector('.cards-container');
const modalOverlay = document.querySelector('.modal-overlay');

// Buttons
const addBtn = document.getElementById('plus-btn');
const addBookBtn = document.getElementById('add-book-btn');

// Form variables
const form = document.getElementById('book-form');
let titleInput;
let authorInput;
let pagesInput;
let hasReadInput;

// Displays the modal overlay 
addBtn.addEventListener('click', () => {
    modalOverlay.style.visibility = "visible";
});
// Hides the modal overlay
window.onclick = (e) => {
    if(e.target == modalOverlay) {
        modalOverlay.style.visibility = "hidden";
    }
};

addBookBtn.addEventListener('click', () => {
    let titleValue = document.getElementById('title').value;
    let authorValue = document.getElementById('author').value;
    let pagesValue = document.getElementById('pages').value;

    if (titleValue.length == 0 || authorValue.length == 0 || pagesValue.length == 0) {
        console.log('error');
        return 'error';
    } else {
        titleInput = titleValue;
        authorInput = authorValue;
        pagesInput = pagesValue;
        hasReadInput = document.getElementById('hasRead').value;
    }
        console.log(titleInput, authorInput, pagesInput, hasReadInput);
});

const displayBook = () => {

}

function Book() {
    
}

const addBookToLibrary = () => {
    // Form Data
    return Array.from(document.querySelectorAll('#book-form input')).reduce((acc, input) => ({ ...acc, [input.id] : input.value }), {});
};
