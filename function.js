function Book(title, author, genre, pages, read = "Not yet"){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.read = read; 
}

Book.prototype.readStatus = function(){
    this.read = (this.read === "Done") ? "Not yet" : "Done";
};

const myLibrary = [
    new Book("Lord Of Mysteries", "Cuttlefish That Loves Diving", "Dark fantasy, cosmic horror", 10000),
    new Book("Classroom of the Elite", "Shougo Kinugasa", "psychological thriller", 9500),
    new Book("Classic Literature Club", "Honobu Yonezawa", "Mystery, Slice of life", 2000),
    new Book("Noli Me Tangere", "Dr. Jose Rizal", "Social, Political, Romance", 517)
];

const addBookDial = document.getElementById("addBookDial");
const addBookBtn = document.getElementById("addBookBtn");
const cancelBtn = document.getElementById("cancelBtn");
const bookShelf = document.getElementById("bookShelf");
const addForm = document.getElementById("addBookForm");

const showBooks = () => {
    bookShelf.replaceChildren();

    myLibrary.forEach((book, index) => {
        const card = document.createElement('div');
        card.className = "card";

        Object.entries(book).forEach(([key, value]) => {
            if (key === 'id') return; 
            
            const p = document.createElement('p');
            p.innerHTML = `${key}: <span style='font-weight: bold'>${value}</span>`;
            card.appendChild(p);
        });

        const read = document.createElement("button");
        read.textContent = "Read";
        read.className = "read";
        
        if (book.read === "Done") {
            read.classList.add("green");
        }

        const featureBtns = document.createElement("div");
        featureBtns.className = "feature";

        read.addEventListener("click", (e) => {
            book.readStatus(); 
            e.target.classList.toggle("green"); 
            showBooks(); 
        });

        featureBtns.appendChild(read);

        const remove = document.createElement("button");
        remove.textContent = "Remove";
        remove.className = "remove";
        
        remove.addEventListener("click", () => {
            myLibrary.splice(index, 1); 
            showBooks();
        });

        featureBtns.appendChild(remove);
        bookShelf.appendChild(card);
        card.appendChild(featureBtns);
    });
};

// Initial load
showBooks();

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
    addBookDial.close();
    showBooks();
});