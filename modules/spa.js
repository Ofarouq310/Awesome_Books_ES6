// Script to create Single Page Application (SPA)
// Declare variables
const linkItem = document.querySelectorAll('.nav_links');
const bookListContainer = document.querySelector('.list_wrapper');
const addBookContainer = document.querySelector('.add_book');
const contactContainer = document.querySelector('.contact');

// SPA function
const spa = () => {
  // Function to hide & display different sections
  const openPage = (i) => {
    addBookContainer.style.display = 'none';
    contactContainer.style.display = 'none';
    bookListContainer.style.display = 'none';

    linkItem.forEach((item) => {
      item.classList.remove('active');
    });

    if (i === 1) {
      addBookContainer.style.display = 'flex';
      linkItem[i].classList.add('active');
    } else if (i === 2) {
      contactContainer.style.display = 'flex';
      linkItem[i].classList.add('active');
    } else {
      bookListContainer.style.display = 'flex';
      linkItem[i].classList.add('active');
    }
  };

  for (let i = 0; i < linkItem.length; i += 1) {
    linkItem[i].addEventListener('click', () => {
      openPage(i);
    });
  }
};
export default spa;