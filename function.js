const myLibrary = [
    {
        id: crypto.randomUUID(),
        title: "Lord Of Mysteries",
        author: "Cuttlefish That Loves Diving",
        genre: "Dark fantasy, cosmic horror",
        pages: 10000
    },
    {
        id: crypto.randomUUID(),
        title: "Classroom of the Elite",
        author: "Shougo Kinugasa",
        genre: "psychological thriller",
        pages: 9500
    },
    {
        id: crypto.randomUUID(),
        title: "Classic Literature Club",
        author: "Honobu Yonezawa",
        genre: "Mystery, Slice of life",
        pages: 2000
    },
    {
        id: crypto.randomUUID(),
        title: "Noli Me Tangere",
        author: "Dr. Jose Rizal",
        genre: "Social, Political, Romance",
        pages: 517
    }
];

function Book(title, author, genre, pages){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
};
