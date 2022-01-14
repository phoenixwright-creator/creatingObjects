let myLibrary = [];

const libraryTab = document.getElementById('libraryTab');

function Book (title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read
};

Book.prototype.info = function () {
  return 'NAME : ' + this.title + ' | AUTHOR : ' + this.author + ' | NUMBER OF PAGES : ' + this.pages + ' | READ : ' + this.read;
};

function addBookToLibrary() {
  const title = prompt('Please enter the name of the book to add to the library : ').toUpperCase();
  const author = prompt('Please enter the name of its author : ').toUpperCase();
  const pages = prompt('Please enter the number of pages this book contains : ');
  let read = prompt('Please enter if you read it or not (Y for Yes/N for No) : ').toUpperCase();
  if(read === 'Y') {
    read = 'YES';
  }
  else if(read === 'N') {
    read = 'NO';
  }
  if (title !== null && author !== null && pages !== null) {
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
  }
  displayLibrary(myLibrary);
}

function deleteBook(event) {
  myLibrary.splice((event.target.id - 1), 1);
  displayLibrary(myLibrary);
}

function changeReadStatus(event) {
  if(myLibrary[(event.target.id - 1)].read === 'YES') {
    myLibrary[(event.target.id - 1)].read = 'NO';
  }
  else if(myLibrary[(event.target.id - 1)].read === 'NO') {
    myLibrary[(event.target.id - 1)].read = 'YES';
  }
  displayLibrary(myLibrary);
}

function displayLibrary(library) {
  const bookList = document.getElementById('bookList');
  libraryTab.removeChild(bookList);
  const newList = document.createElement('ul');
  newList.id = 'bookList';
  if(myLibrary.length === 0) {
    const bookLine = document.createElement('li');
    bookLine.id = 'defaultLine';
    bookLine.className = 'bookLines';
    bookLine.innerHTML = 'NO BOOKS';
    newList.appendChild(bookLine);
  }
  else {
    for (let book in library) {
      const bookLine = document.createElement('li');
      bookLine.id = Number(book) + 1;
      bookLine.className = 'bookLines';
      bookLine.innerHTML = library[book].info();

      const readStatusButton = document.createElement('button');
      readStatusButton.id = bookLine.id;
      readStatusButton.className = 'changeReadStatus';
      readStatusButton.innerHTML = 'CHANGE READ STATUS';
      bookLine.appendChild(readStatusButton);

      const deleteButton = document.createElement('button');
      deleteButton.id = bookLine.id;
      deleteButton.className = 'deleteBook';
      deleteButton.innerHTML = 'DELETE BOOK';
      bookLine.appendChild(deleteButton);

      newList.appendChild(bookLine);

      const spaceLine = document.createElement('hr');
      newList.appendChild(spaceLine);
    }
  }
  libraryTab.appendChild(newList);
  const deleteButtons = document.querySelectorAll('.deleteBook');
  for(let i=0; i<deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', deleteBook);
  }

  const readStatusButtons = document.querySelectorAll('.changeReadStatus');
  for(let i=0; i<readStatusButtons.length; i++) {
    readStatusButtons[i].addEventListener('click', changeReadStatus);
  }
}

const addBookButton = document.createElement('button');
addBookButton.innerHTML = 'ADD A NEW BOOK';
addBookButton.id = 'addBookButton';

libraryTab.appendChild(addBookButton);

const list = document.createElement('ul');
list.id = 'bookList';
const line = document.createElement('li');
line.id = 'defaultLine';
line.className = 'bookLines';
line.innerHTML = 'NO BOOKS';
list.appendChild(line);
libraryTab.appendChild(list);

addBookButton.addEventListener('click', addBookToLibrary);



/*

Exercise 2 : 
Use __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head. For instance, pockets.pen should be 3 (found in table), and bed.glasses should be 1 (found in head).
Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.

let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__ : head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__ : table
  };
  
  let pockets = {
    money: 2000,
    __proto__ : bed
  };

  console.log(pockets.pen);
  console.log(bed.glasses);


// Exercise 3 :
//We have two hamsters: speedy and lazy inheriting from the general hamster object.
//When we feed one of them, the other one is also full. Why? How can we fix it?

  let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
  };
  
  let speedy = {
    __proto__: hamster,
    stomach : []
  };
  
  let lazy = {
    __proto__: hamster,
    stomach : []
  };
  
  // This one found the food
  speedy.eat("apple");
  console.log( speedy.stomach ); // apple
  
  // This one also has it, why? fix please.
  console.log( lazy.stomach ); // apple

  */