import Book from "./Book";

const BookList = () => {
    return ( 
        <section className="bookList">
       <Book img="./images/book-1.png" title="Interestig facts for curious minds" author="Jordan Moore"/>
        <Book img="./images/book-2.png" title="Atomic Habits" author="James Clear"/>
         <Book img="./images/book-3.png" title="Fairy tale" author="Stephen King"/>
         </section>
     );
};
 
export default BookList;