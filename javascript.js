const newForm = document.querySelector('.new-book');
const form = document.querySelector('.form');
const inputs = document.querySelector('.inputs');
const createBook = document.querySelector('.add');
const bookHolder = document.querySelector('.book-holder');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const genre = document.querySelector('#genre');
const release = document.querySelector('#release');
const publisher = document.querySelector('#publisher');
const myLibrary = [];
let idvariable = 0;


class Book {
    constructor (arg1, arg2,arg3, arg4, arg5, arg6){
    this.title = arg1;
    this.author = arg2;
    this.pages = arg3;
    this.genre = arg4;
    this.year = arg5;
    this.publisher = arg6;
    this.id = '0' + idvariable;
    }
}

function displayBooks(arg){
    let lastBookIndex = arg.length - 1;
    let lastBookTitle = arg[lastBookIndex].title;
    let lastBookAuthor = arg[lastBookIndex].author;
    let div = document.createElement('div');
    div.textContent = `${lastBookTitle} ${lastBookAuthor}`;
    div.setAttribute('id', arg[lastBookIndex].id);
    bookHolder.append(div);
    let resetButton = document.createElement('button');
    resetButton.textContent = 'delete';
    resetButton.classList.add('delete-book');
    resetButton.setAttribute('id', arg[lastBookIndex].id);
    div.append(resetButton);
    var read = document.createElement('input');
    read.type = 'checkbox';
    read.classList.add('read-status');
    div.append(read);
    div.append('read');
    resetButton.addEventListener('click', ()=>{
        div.remove();
        for (let i=0; i<myLibrary.length; i++){
            if (resetButton.id == myLibrary[i].id){
                myLibrary.splice(i,1);
                i--;
            }
        }
        console.log(myLibrary);
    })
}

newForm.addEventListener('click', () =>{
   form.style.visibility = 'visible';


})


createBook.addEventListener('click', (event)=>{
    event.preventDefault();
    if (title.value.length >= 1 && author.value.length >=1){
        let bookSample = new Book(title.value,author.value,pages.value,genre.value,release.value,publisher.value);
        myLibrary.push(bookSample);
        idvariable++;
        displayBooks(myLibrary);
        title.value = '';
        author.value = '';
        pages.value = '';
        release.value = '';
        publisher.value = '';
    } else if (title.value.length <=0 && author.value.length <=0){
        alert("Provide a title for the book, and give its author a name too");
    } else if (author.value.length <=0){
        alert("Provide an author's name for the book");
    } else {
        alert("Provide a name for your book");
    }

})









    


    








