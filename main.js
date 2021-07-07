function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

const Library = [
  {
    author: "Stephen Covey",
    title: "The 7 Habits of Highly Effective People",
    pages: "300",
    read: "5",
  },
  { author: "BJ Fogg", title: "Tiny Habits", pages: "274", read: "21" },
  {
    author: "Robert Greene",
    title: "The 48 Laws of Power",
    pages: "471",
    read: "1",
  },
  {
    author: "Amy Morin",
    title: "13 Things Mentally Strong People Don’t Do",
    pages: "274",
    read: "20",
  },
  {
    author: "Mark Manson",
    title:
      "The Daily Stoic: 366 Meditations on Wisdom, Perseverance, and the Art of Living",
    pages: "416",
    read: "300",
  },
  {
    author: "Mark Manson",
    title: "The Subtle Art of Not Giving a F*ck",
    pages: "224",
    read: "32",
  },
];


function showLibrary() {
  console.log(Library);
  document.getElementById("library").innerHTML =
    Library.map(
      (book) =>
        `<div class="card">
            <div class="card-body">
                  <div class="item" id="title">Title: ${book.title}</div>
                  <div class="item" id="author">Author: ${book.author}</div>
                  <div class="item" id="pages">Pages: ${book.pages}</div>
                  <div class="item" id="read">Read: ${book.read}</div>
                  <button id="buttond" onclick="delBookToLibrary(${
                    (book.author, book.title, book.pages, book.read)
                  })">Delete book</button>
            </div>
         </div>`
    ).join("");

  Library.map((book) => {
    console.log(book);
    console.log(book.title);
    console.log(book.pages);
    console.log(book.read);
  });
}

function newBook() {
    document.getElementById("newBook").innerHTML = `
          <div class="card">
              <div class="card-body">
                  <h2 class="card-tittle">[ ADD New Book ]</h2>
                  <label for="title">Title:</label>
                  <input type="text" id="title" name="title">
                  <label for="author">Author:</label>
                  <input type="text" id="author" name="author">
                  <label for="pages">Pages:</label>
                  <input type="text" id="pages" name="pages">
                  <label for="read">Read:</label>
                  <input type="text" id="read" name="read">
                  <button id="button" onclick="adBookToLibrary(title)">Add</button>
      </div>  
      `;
    
  }


  function adBookToLibrary(author, title, pages, read) {
    author = document.getElementById("author").value;
    title = document.getElementById("title").value;
    pages = document.getElementById("pages").value;
    read = document.getElementById("read").value;
    const book = new Book(author, title, pages, read);
    Library.push(book);
    console.log(Library);
    showLibrary();
  }

function delBookToLibrary(author, title, pages, read) {
  author = document.getElementById("author").value;
  title = document.getElementById("title").value;
  pages = document.getElementById("pages").value;
  read = document.getElementById("read").value;
  const book = new Book(author, title, pages, read);
  Library.pop(book);
  showLibrary();
}

window.onload = showLibrary();
window.onload = newBook();
