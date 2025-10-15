import { useState} from 'react';

const Book = ({img, title, author}) => {
  const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);
  const verHoogTeller = () => {
    setAantalKeerGelezen(aantalKeerGelezen + 1);
  }
  return (
    <section className="book">
      <img src={img} alt="{title}" />
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button onClick={verhoogTeller}>
        Keer gelezen: {2}
      </button>
    </section>
  );
};

export default Book;
