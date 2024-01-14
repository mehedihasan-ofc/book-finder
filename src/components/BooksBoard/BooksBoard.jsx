import { useState } from "react";
import BookCard from "../BookCard/BookCard";
import SearchBox from "../SearchBox/SearchBox";
import SortBox from "../SortBox/SortBox";

const BooksBoard = () => {

    const booksData = [
        {
            id: 1,
            bookName: "The Great Gatsby 1925",
            author: "F. Scott Fitzgerald",
            price: 19,
            rating: 3,
            publicationYear: 1925,
            isFav: false,
            bookImage: "https://i.ibb.co/C7Fv6ZK/the-great-gatsby.png"
        },
        {
            id: 2,
            bookName: "To Kill a Mockingbird 1960",
            author: "Harper Lee",
            price: 15,
            rating: 4,
            publicationYear: 1960,
            isFav: true,
            bookImage: "https://i.ibb.co/xHQ5THV/mockingbird.png"
        },
        {
            id: 3,
            bookName: "The Alchemist 1988",
            author: "Paulo Coelho",
            price: 12,
            rating: 5,
            publicationYear: 1988,
            isFav: false,
            bookImage: "https://i.ibb.co/9WwFMQk/1984.png"
        },
        {
            id: 4,
            bookName: "The Hobbit 1937",
            author: "J.R.R. Tolkien",
            price: 22,
            rating: 2,
            publicationYear: 1937,
            isFav: true,
            bookImage: "https://i.ibb.co/hXWsxY5/hobbit-and-the-lord.png"
        },
        {
            id: 5,
            bookName: "Pride and Prejudice 1813",
            author: "Jane Austen",
            price: 18,
            rating: 4,
            publicationYear: 1813,
            isFav: false,
            bookImage: "https://i.ibb.co/34VBvm7/Pride-and-Prejudice-Books.png"
        },
        {
            id: 6,
            bookName: "The Catcher in the Rye 1951",
            author: "J.D. Salinger",
            price: 14,
            rating: 5,
            publicationYear: 1951,
            isFav: true,
            bookImage: "https://i.ibb.co/rQZKqw4/catcher.png"
        },
        {
            id: 7,
            bookName: "The Sorcerer's Stone 1997",
            author: "J.K. Rowling",
            price: 24,
            rating: 4,
            publicationYear: 1997,
            isFav: false,
            bookImage: "https://i.ibb.co/x5Zc7ZD/Pocket-Hobbit.png"
        },
        {
            id: 8,
            bookName: "The Lord of the Rings 1954",
            author: "J.R.R. Tolkien",
            price: 29,
            rating: 3,
            publicationYear: 1954,
            isFav: true,
            bookImage: "https://i.ibb.co/G51s352/ezgif.png"
        }
    ];

    const [books, setBooks] = useState(booksData);

    const handleSearch = (searchTerm) => {
        console.log(searchTerm);

        const filtered = books.filter((book) =>
            book.bookName.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setBooks([...filtered]);

    }

    const handleFavorite = (bookId) => {

        setBooks(books.map((book) => {
            if (book.id === bookId) {
                return { ...book, isFav: !book.isFav };
            } else {
                return book;
            }
        }))
    }

    const handleSort = (selectedSortOption) => {

        let sortedBooks = [...books];

        switch (selectedSortOption) {
            case "name_asc":
                sortedBooks.sort((a, b) => a.bookName.localeCompare(b.bookName));
                break;
            case "name_desc":
                sortedBooks.sort((a, b) => b.bookName.localeCompare(a.bookName));
                break;
            case "year_asc":
                sortedBooks.sort((a, b) => a.publicationYear - b.publicationYear);
                break;
            case "year_desc":
                sortedBooks.sort((a, b) => b.publicationYear - a.publicationYear);
                break;
            default:
                break;
        }

        setBooks(sortedBooks);
    };

    return (
        <main className="my-10 lg:my-14">
            <header className="mb-8 lg:mb-10 mx-auto max-w-7xl">
                <div
                    className="mx-auto flex items-end justify-between max-md:max-w-[95%] max-md:flex-col max-md:items-start max-md:space-y-4"
                >
                    <div>
                        <h6 className="mb-2 text-base lg:text-xl">Trending on 2021</h6>
                        <h2
                            className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl"
                        >
                            Trending Books of the Year
                        </h2>

                        <SearchBox onSearch={handleSearch} />

                    </div>

                    <SortBox onSort={handleSort} />
                </div>
            </header>

            <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                {
                    books.map(book => <BookCard key={book.id} book={book} onFav={handleFavorite} />)
                }

            </div>
        </main>
    );
};

export default BooksBoard;