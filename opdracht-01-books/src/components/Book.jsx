import { useState } from "react";
 
function Book({ title, author, img }) {
  const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);
  
  const verhoogTeller = () => {
    setAantalKeerGelezen(aantalKeerGelezen + 1);
  };
 
  return (
    <div className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button onClick={verhoogTeller}>
      Keer gelezen: {aantalKeerGelezen}
      </button>
    </div>
  );
}
 
export default Book;
 