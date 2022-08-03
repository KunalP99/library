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

addBookBtn.addEventListener('click', () => addBookToLibrary());

// Creates an object with the parameters set whenever called 
 function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

const addBookToLibrary = () => {
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

        // Changes the value for hasReadInput
        switch(hasReadInput) {
            case 'yes':
                hasReadInput = 'Have Read';
                break;
            case 'no':
                hasReadInput = 'Have Not Read';
                break;
        }

        // Creating a Book object using a constructor, adding the object into the myLibrary array 
        let book = new Book (titleInput, authorInput, pagesInput, hasReadInput);
        myLibrary.push(book);

        // Pass the myLibrary array into a function that will display the book 
        displayBook(myLibrary);

        // Empty the input fields and close modal once this button is clicked
        modalOverlay.style.visibility = "hidden";
        form.reset();
    }
};

const displayBook = (libArray) => {
    let cardDiv = document.createElement('div');
    let titleText = document.createElement('h3');
    let authorText = document.createElement('p');
    let pagesText = document.createElement('p');
    let hasReadBtn = document.createElement('button');
    let removeBtn = document.createElement('button');

    removeBtn.innerText = 'Remove';

    // Add classes to the relevant elements
    cardDiv.classList.add('card');
    authorText.classList.add('author');
    hasReadBtn.classList.add('card-btn', 'card-read-btn');
    removeBtn.classList.add('card-btn', 'card-close-btn');

    for (let i = 0; i < libArray.length; i++) {
        titleText.textContent = libArray[i].title;
        authorText.textContent = libArray[i].author;
        pagesText.textContent = `Pages: ${libArray[i].pages}`;

        if (libArray[i].hasRead === 'Have Read') {
            hasReadBtn.classList.add('has-read-btn');
        } else {
            hasReadBtn.classList.add('has-not-read-btn');
        }

        hasReadBtn.innerText = libArray[i].hasRead;
    }
    hasReadChange(hasReadBtn.innerText, hasReadBtn);
    cardDiv.append(titleText, authorText, pagesText, hasReadBtn, removeBtn);
    cardsContainer.appendChild(cardDiv);
}

const hasReadChange = (hasReadValue, hasReadBtn) => {
    hasReadBtn.addEventListener('click', () => {
        console.log('click');
    });
}