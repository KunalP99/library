let myLibrary = [{
    title: "Game of Thrones",
    author: "George R.R. Martin",
    pages: 694,
    hasRead: false
},
{
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
    pages: 223,
    hasRead: true
}];

const cardsContainer = document.querySelector('.cards-container');
const modalOverlay = document.querySelector('.modal-overlay');
const addBtn = document.getElementById('plus-btn');

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

function Book() {
    
}

function addBookToLibrary() {

}