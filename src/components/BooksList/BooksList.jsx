import BookCard from "../BookCard/BookCard";

const BooksList = ({ booksData }) => {
  console.log(booksData);
  return (
    <div>
      {booksData.items.map((book) => {
        console.log(book);
        return <BookCard key={book.id} book={book} />;
      })}
    </div>
  );
};

export default BooksList;
