const createBook = document.querySelector('.new-book');
const bookHolder = document.querySelector('.book-holder');
const myLibrary = [];

function Book(arg1, arg2,arg3, arg4, arg5, arg6){
    this.title = arg1;
    this.author = arg2;
    this.pages = arg3;
    this.genre = arg4;
    this.year = arg5;
    this.publisher = arg6;
}

function addBookToLibrary(arg){
    let bookArray = [];
    let value;
    for (let key in arg){
        value = arg[key];
        bookArray.push(value);
    }
    return bookArray;
    
}









