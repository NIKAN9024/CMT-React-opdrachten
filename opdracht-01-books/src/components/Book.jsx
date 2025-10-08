const Book = ({img, title, author}) => {
  return (
    <section className="book">
      <img src={img} alt="{title}" />
      <h2>{title}</h2>
      <h3>{author}</h3>
    </section>
  );
};

export default Book;
