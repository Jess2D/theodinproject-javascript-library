/**
 * @description Represents a book
 * @constructor
 * @param {string} author - The author of the book
 * @param {string} title - The title of the book
 * @param {number} pages - The pages of the book
 * @param {number} read - The read pages of the book
 */
function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

let del;

const Library = [
  {
    author: "Stephen Covey",
    title: "The 7 Habits of Highly Effective People",
    pages: "300",
    read: true,
  },
  { author: "BJ Fogg", title: "Tiny Habits", pages: "274", read: true },
  {
    author: "Robert Greene",
    title: "The 48 Laws of Power",
    pages: "471",
    read: true,
  },
  {
    author: "Amy Morin",
    title: "13 Things Mentally Strong People Don’t Do",
    pages: "274",
    read: false,
  },
  {
    author: "Mark Manson",
    title:
      "The Daily Stoic: 366 Meditations on Wisdom, Perseverance, and the Art of Living",
    pages: "200",
    read: false,
  },
  {
    author: "Mark Manson",
    title: "The Subtle Art of Not Giving a F*ck",
    pages: "224",
    read: false,
  },
];

/**
 * @description Show The Library as array at browser. It is the main function of this project
 */
function showLibrary() {
  console.log(Library);
  document.getElementById("library").innerHTML = Library.map(
    (book) =>
      `<div class="card"  id="${Library.indexOf(book)}">
          <div class="card-body">
                <div class="item" id="title">Title: ${book.title}</div>
                <div class="item" id="author">Author: ${book.author}</div>
                <div class="item" id="pages">Pages: ${book.pages}</div>
                <div class="item" id="read" value="${
                  book.read
                }">Read: ${this.isRead(book)}</div>
                <button id="buttond" onclick="delBookFromLibrary(${Library.indexOf(
                  book
                )})">Delete book</button>
          </div>
       </div>`
  ).join("");
}

/**
 * @description Adds a new Book to the html code
 */
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
                  <input  type="checkbox" id="read" onclick="check(this)" name="read">
                  <button id="button" onclick="addBookToLibrary(title)">Add</button>
      </div>  
      `;
}

function check(obj) {
  if (obj.checked) obj.value = true;
  else obj.value = false;
}

/**
 * @description Adds a new book to the Library Array
 * @param {string} author
 * @param {string} title
 * @param {number} pages
 * @param {number} read
 */
function addBookToLibrary(author, title, pages, read) {
  author = document.getElementById("author").value;
  title = document.getElementById("title").value;
  pages = document.getElementById("pages").value;
  read = document.getElementById("read").checked ? true : false;
  const book = new Book(author, title, pages, read);
  Library.unshift(book);
  console.log(Library);
  showLibrary();
  newBook();
}

/**
 * @description Delete book from the array Library by the index of the book
 * @param {number} book
 */
function delBookFromLibrary(book) {
  const index = document.getElementById(book).getAttribute("id");
  Library.splice(index, 1);
  showLibrary();
}

function isRead(book) {
  if (book.read == true) return "Read";
  else return "Not Read";
}

window.onload = showLibrary();
window.onload = newBook();
