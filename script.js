let myLibrary = [];

function Book () {
};

function Book (title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
};

Book.prototype.info = function () {
    return this.title + ', by ' + this.author + ', ' + this.pages + ' pages, ' + this.read.toLowerCase() + '.';
};

function addBookToLibrary() {
    let title = prompt('Please enter the name of the book to add to the library : ');
    let author = prompt('Please enter the name of its author : ');
    let pages = prompt('Please enter the number of pages this book contains : ');
    let read = prompt('Please enter if you read it or not (Y for Yes/N for No) : ');
    if (read === 'Y'){
        read = 'Already read';
    }
    else if (read === 'N'){
        read = 'Not read yet';
    }
    else {
        read = 'No information about reading status yet';
    }
    if (title !== null && author !== null && pages !== null){
        let book = new Book(title, author, pages, read);
        myLibrary.push(book);
    }
    
}

function displayLibrary(library){
    if(library.length !== 0){
        for (let book in library){
            console.log(library[book].info());
        }
    }
    else{
        console.log('No book in the library.');
    }
}

addBookToLibrary();

displayLibrary(myLibrary);

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