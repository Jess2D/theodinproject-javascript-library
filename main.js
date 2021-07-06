function Book(author, title, pages, read){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

let Library = [] ;

function adBookToLibrary(author, title, pages, read) {
    author = document.getElementById("author").value
    title = document.getElementById("title").value
    pages = document.getElementById("pages").value
    read = document.getElementById("read").value
    const book = new Book(author, title, pages, read)
    Library.push(book);  
    console.log(Library)
}

