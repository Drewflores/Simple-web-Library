const myLibrary = [
    {
        title: "Lord Of Mysteries",
        author: "Cuttlefish That Loves Diving",
        genre: "Dark fantasy, cosmic horror",
        pages: 10000
    },
    {
        title: "Classroom of the Elite",
        author: "Shougo Kinugasa",
        genre: "psychological thriller",
        pages: 9500
    },
    {
        title: "Classic Literature Club",
        author: "Honobu Yonezawa",
        genre: "Mystery, Slice of life",
        pages: 2000
    },
    {
        title: "Noli Me Tangere",
        author: "Dr. Jose Rizal",
        genre: "Social, Political, Romance",
        pages: 517
    }
];

function Book(title, author, genre, pages){
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
};
