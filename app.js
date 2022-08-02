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
        // Making the input equal the value if all the input fields are filled in
        titleInput = titleValue;
        authorInput = authorValue;
        pagesInput = pagesValue;
        hasReadInput = document.getElementById('hasRead').value;

        // Creating a Book object using a constructor, adding the object into the myLibrary array 
        let book = new Book (titleInput, authorInput, pagesInput, hasReadInput);
        myLibrary.push(book);

        // Pass the myLibrary array into a function that will display the book 
        displayBook(myLibrary);
    }

    // Empty the input fields and close modal once this button is clicked only if there values in the input fields
});

const displayBook = (libArray) => {
    // DOM Manipulation 
    console.log(libArray);
}

 function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

const addBookToLibrary = () => {
    // Form Data
    return Array.from(document.querySelectorAll('#book-form input')).reduce((acc, input) => ({ ...acc, [input.id] : input.value }), {});
};
