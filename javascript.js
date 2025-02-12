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

function displayBooks(arg){
    let lastBookIndex = arg.length - 1;
    let lastBookTitle = arg[lastBookIndex].title;
    let lastBookAuthor = arg[lastBookIndex].author;
    let div = document.createElement('div');
    div.textContent = `${lastBookTitle} ${lastBookAuthor}`;
    bookHolder.append(div);
}

newForm.addEventListener('click', () =>{
   form.style.visibility = 'visible';
})

createBook.addEventListener('click', (event)=>{
    event.preventDefault();
    let bookSample = new Book(title.value,author.value,pages.value,genre.value,release.value,publisher.value);
    console.log(bookSample);
    myLibrary.push(bookSample);
    displayBooks(myLibrary);
})





    


    








