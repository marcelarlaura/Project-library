const newForm = document.querySelector('.new-book');
const form = document.querySelector('.form');
const createBook = document.querySelector('.add');
const bookHolder = document.querySelector('.book-holder');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const genre = document.querySelector('#genre');
const release = document.querySelector('#release');
const publisher = document.querySelector('#publisher');
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

newForm.addEventListener('click', () =>{
   form.style.visibility = 'visible';
})







