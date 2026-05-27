const myLibrary = [
    {
        id: crypto.randomUUID(),
        title: "Lord Of Mysteries",
        author: "Cuttlefish That Loves Diving",
        genre: "Dark fantasy, cosmic horror",
        pages: 10000,
        read: "Done"
    },
    {
        id: crypto.randomUUID(),
        title: "Classroom of the Elite",
        author: "Shougo Kinugasa",
        genre: "psychological thriller",
        pages: 9500,
        read: "Done"
    },
    {
        id: crypto.randomUUID(),
        title: "Classic Literature Club",
        author: "Honobu Yonezawa",
        genre: "Mystery, Slice of life",
        pages: 2000,
        read: "Done"
    },
    {
        id: crypto.randomUUID(),
        title: "Noli Me Tangere",
        author: "Dr. Jose Rizal",
        genre: "Social, Political, Romance",
        pages: 517,
        read: "Done"
    }
];

function Book(title, author, genre, pages){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
};

Book.prototype.doneStatus = function(){
    this.read = "Done";
};

Book.prototype.notYetStatus = function(){
    this.read = "Not yet"
}

const addBookDial = document.getElementById("addBookDial");
const addBookBtn = document.getElementById("addBookBtn");
const cancelBtn = document.getElementById("cancelBtn");
const bookShelf = document.getElementById("bookShelf");
const addForm = document.getElementById("addBookForm");


const showBooks = () => {
    myLibrary.forEach(book => {
    const card = document.createElement('div');
    card.className = "card";

    Object.entries(book).forEach(([key, value]) => {
        const p = document.createElement('p');

        p.textContent = `${key}: ${value}`;
        card.appendChild(p)
    });

    const read = document.createElement("button");
    read.textContent = "Read"
    card.appendChild(read);

    const remove = document.createElement("button");
    remove.textContent = "Remove"
    card.appendChild(remove);

    bookShelf.appendChild(card);
    });
};

addBookBtn.addEventListener("click", () => {
    addBookDial.showModal();
});

cancelBtn.addEventListener("click", () => {
    addBookDial.close();
});

const addToLibrary = (title, author, genre, pages) => {
    const newBook = new Book(title, author, genre, pages);
    myLibrary.push(newBook);
};

addForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const genre = document.getElementById("genre").value;
    const pages = Number(document.getElementById("pages").value);

    addToLibrary(title, author, genre, pages);
    
    addForm.reset();
    bookShelf.replaceChildren();
    showBooks();
});

showBooks();
