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
  const oldLibraryContent = document.getElementById('libraryContent');
  console.log(oldLibraryContent);
  if(oldLibraryContent !== null){
    libraryTab.removeChild(oldLibraryContent);
  }

  const newLibraryContent = document.createElement('div');
  newLibraryContent.id = 'libraryContent';

  if(library.length === 0) {
    const emplyContent = document.createElement('div');
    emplyContent.id = 'emplyContent';
    emplyContent.className = 'bookLines';
    emplyContent.innerHTML = 'NO BOOKS';
    libraryTab.appendChild(emplyContent);
  }

  else {
    
    for (let book in library) {
      const newBook = document.createElement('div');
      newBook.id = 'book' + book;
      newBook.className = 'bookLine';

      const bookName = document.createElement('div');
      bookName.id = 'bookName';
      bookName.className = 'bookName cell';
      bookName.innerHTML = library[book].title;
      newBook.appendChild(bookName);

      const authorName = document.createElement('div');
      authorName.id = 'authorName';
      authorName.className = 'authorName cell';
      authorName.innerHTML = library[book].author;
      newBook.appendChild(authorName);

      const pagesNumber = document.createElement('div');
      pagesNumber.id = 'pagesNumber';
      pagesNumber.className = 'pagesNumber cell';
      pagesNumber.innerHTML = library[book].pages;
      newBook.appendChild(pagesNumber);

      const readStatus = document.createElement('div');
      readStatus.id = 'readStatus';
      readStatus.className = 'readStatus cell';
      readStatus.innerHTML = library[book].read;
      newBook.appendChild(readStatus);

      newLibraryContent.appendChild(newBook);

      /*const bookLine = document.createElement('div');
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
      newList.appendChild(spaceLine);*/
      
    }

    libraryTab.appendChild(newLibraryContent);
  }

  /*
  const deleteButtons = document.querySelectorAll('.deleteBook');
  for(let i=0; i<deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', deleteBook);
  }

  const readStatusButtons = document.querySelectorAll('.changeReadStatus');
  for(let i=0; i<readStatusButtons.length; i++) {
    readStatusButtons[i].addEventListener('click', changeReadStatus);
  }
  */

}

const addBookButton = document.createElement('button');
addBookButton.innerHTML = 'ADD A NEW BOOK';
addBookButton.id = 'addBookButton';

libraryTab.appendChild(addBookButton);

const defaultLibrary = document.createElement('div');
defaultLibrary.id = 'defaultLibrary';
defaultLibrary.className = 'library';

const nameDiv = document.createElement('div');
nameDiv.id = 'nameDiv';
nameDiv.className = 'nameDiv cell';
nameDiv.innerHTML = 'NAME';
defaultLibrary.appendChild(nameDiv);

const authorDiv = document.createElement('div');
authorDiv.id = 'authorDiv';
authorDiv.className = 'authorDiv cell';
authorDiv.innerHTML = 'AUTHOR';
defaultLibrary.appendChild(authorDiv);

const pagesDiv = document.createElement('div');
pagesDiv.id = 'pagesDiv';
pagesDiv.className = 'pagesDiv cell';
pagesDiv.innerHTML = 'PAGES';
defaultLibrary.appendChild(pagesDiv);

const statusDiv = document.createElement('div');
statusDiv.id = 'statusDiv';
statusDiv.className = 'statusDiv cell';
statusDiv.innerHTML = 'READ';
defaultLibrary.appendChild(statusDiv);

libraryTab.appendChild(defaultLibrary);

/*const list = document.createElement('div');
list.id = 'bookList';
const line = document.createElement('div');
line.id = 'defaultLine';
line.className = 'bookLines';
line.innerHTML = 'NO BOOKS';
list.appendChild(line);
libraryTab.appendChild(list);*/

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