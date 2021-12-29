function Book (title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.info = function () {
        if(!read){
            return title + ', by ' + author + ', ' + pages + ' pages, not read yet.';
        }
        else{
            return title + ', by ' + author + ', ' + pages + ' pages, already read.';
        }
    }
};

const book1 = new Book("Le Seigneur des Anneaux", "J.R.R. Tolkien", 300, false);

console.log(book1.info());


