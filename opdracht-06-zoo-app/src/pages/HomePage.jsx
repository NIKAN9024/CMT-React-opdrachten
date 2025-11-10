import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  animals  from './animals.js';
import Animal from '../components/Animal';

const Home = () => {
  const navigate = useNavigate();
  const [animalList, setAnimalList] = useState(animals);

  const goToDetail = (animalId) => {
    navigate(`/animal/${animalId}`);
  };

  return (
    <section>
      <h1>Welkom bij onze Zoo!</h1>
      <h2>Onze Dieren</h2>
      <div className="card-container">
      
      
      {animalList.map(animal => (
        <Animal
          key={animal.id}
          animal={animal}
          onShowDetail={goToDetail}
        />
      ))}
      </div>
    </section>
  );
};

export default Home;

