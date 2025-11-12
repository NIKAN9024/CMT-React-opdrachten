import { useParams, useNavigate } from 'react-router-dom';
import animals from './animals';

const AnimalDetail = () => {
  const { animalId } = useParams();
  const navigate = useNavigate();

  const animal = animals.find((a) => a.id === Number(animalId));

  if (!animal) {
    return <section>Dier niet gevonden</section>;
  }

  return (
    <section className="detail-card">
      <img src={animal.imageUrl} alt={animal.name} /> {}
      <h2>{animal.name}</h2>
      <p><strong>Leefomgeving:</strong> {animal.habitat}</p>
      <p><strong>Dieet:</strong> {animal.diet}</p>
      <p><strong>Beschrijving:</strong> {animal.description}</p>
      <button className="back-btn" onClick={() => navigate('/')}>Terug</button>
    </section>
  );
};

export default AnimalPage;