function Book(author, title, pages, read){
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

const Library =[
    {author: "Stephen Covey", title:"The 7 Habits of Highly Effective People", pages: "300", read: "5"},
    {author: "BJ Fogg", title:"Tiny Habits", pages: "274", read: "21"},
    {author: "Robert Greene", title:"The 48 Laws of Power", pages: "471", read: "1"},
    {author: "Amy Morin", title:"13 Things Mentally Strong People Don’t Do", pages: "274", read: "20"},
    {author: "Mark Manson", title:"The Daily Stoic: 366 Meditations on Wisdom, Perseverance, and the Art of Living", pages: "416", read: "300"},
    {author: "Mark Manson", title:"The Subtle Art of Not Giving a F*ck", pages: "224", read: "32"}
]



function adBookToLibrary(author, title, pages, read) {
    author = document.getElementById("author").value
    title = document.getElementById("title").value
    pages = document.getElementById("pages").value
    read = document.getElementById("read").value
    const book = new Book(author, title, pages, read)
    Library.push(book);  
    console.log(Library)
}

function showLibrary(){
    console.log(Library)
    document.getElementById("library").innerHTML= Library.map(book => 
         `<div class="card">
                  <div>Title: ${book.title}</div>
                  <div>Author: ${book.author}</div>
                  <div>Pages: ${book.pages}</div>
                  <div>Read: ${book.read}</div>
         </div>`
    ).join('')

    Library.map(book =>{
        console.log(book)
        console.log(book.title)
        console.log(book.pages)
        console.log(book.read)

    }
        )

}

window.onload = showLibrary();