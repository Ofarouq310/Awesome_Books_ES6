// import class Book
import Book from './book.js';

// Code to get book from the form and add it to the list

// Declaring variables
const form = document.getElementById('form');
const listContainer = document.querySelector('.list_container');
const h4 = document.querySelector('h4');

const formInputs = () => {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const msg = document.querySelector('.error-message');
    const clear = () => { msg.innerHTML = ''; };

    // Declaring variables for the booklist, and book's properties
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const books = JSON.parse(localStorage.getItem('books')) || [];
    const id = books.length + 1;

    if (title.value === '' || author.value === '') {
      msg.classList.remove('success');
      msg.innerHTML = 'Please enter the book title and author';
      setTimeout(clear, 2000);
    } else {
      const b = new Book(id, title.value, author.value);
      Book.addBook(b);
      form.reset();
      msg.classList.add('success');
      msg.innerHTML = 'The book is added successfully';
      setTimeout(clear, 1000);
      listContainer.innerHTML = '';
      if (listContainer.innerHTML === '') {
        listContainer.style.border = '2px solid #000';
        h4.innerHTML = '';
      }
      Book.displayBooks();
    }
  });
};
export default formInputs;