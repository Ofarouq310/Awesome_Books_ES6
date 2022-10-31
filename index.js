// Importing neede js files
import Book from './modules/book.js';
import formInputs from './modules/form.js';
import spa from './modules/spa.js';
import { DateTime } from './modules/luxon.js';

// Calling needed functions from the js modules
formInputs();
Book.displayBooks();
spa();

// Populating the Date
const populateDate = () => {
  const date = document.getElementById('date');
  date.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
};
setInterval(populateDate, 1000);
