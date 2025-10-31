const Animal = ({ animal, onShowDetail }) => {
  return (
    <div className="card">
      <h2>{animal.name}</h2>
      <img src={animal.imageUrl} alt={animal.name} />
      <button onClick={() => onShowDetail(animal.id)}>
        Meer info
      </button>
      </div>
    
  );
};

export default Animal;