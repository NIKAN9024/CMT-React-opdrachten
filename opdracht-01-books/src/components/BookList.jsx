import { useState} from 'react';
import Book from "./Book";


const BookList = () => {
    const [books, setBooks] = useState([
        {
        title: "Interestig facts for curious minds",
        author: "Jordan Moore",
        img: "./images/book-1.png"
        },

        {
         title: "Atomic Habits",
         author: "James Clear",
         img: "./images/book-2.png"
        },

        {
         title: "Fairy tale",
         author: "Stephen King",
         img: "./images/book-3.png"
        },
    ]);

    return (
        <section className='book'>
            {books.map((book) => (
                <Book
                title={book.title}
                author={book.author}
                img={book.img}
                />
                ))}
        </section>
    );
};

  
export default BookList;