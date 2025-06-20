import React, { useState } from "react";
import animals from "../../data/animals";
import Sidebar from "../../components/Sidebar/Sidebar";
import AnimalDetailsModal from "../../components/AnimalDetailsModal/AnimalDetailsModal";
import styles from "./Home.module.css";

export default function Home() {
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const handleSelect = (animal) => {
    if (selectedAnimal?.id === animal.id) {
      setSelectedAnimal(null);
    } else {
      setSelectedAnimal(animal);
    }
  };
  

  return (
    <div className={styles.homePage}>
      <Sidebar
        animals={animals}
        selectedAnimal={selectedAnimal}
        onSelect={handleSelect}
      />

      <main className={styles.mainContent}>
        {!selectedAnimal ? (
          <div className={styles.welcome}>
           <h1>Welcome to Australia Zoo!</h1>
<p>
  Discover the wild wonders of Australia – from curious kangaroos and colorful cockatoos to mysterious reptiles and mighty mammals. Dive into nature's most fascinating creatures and learn what makes them truly extraordinary! 🐨🦘🦜
</p>

          </div>
        ) : (
          <AnimalDetailsModal
            animal={selectedAnimal}
            onClose={() => setSelectedAnimal(null)}
          />
        )}
      </main>
    </div>
  );
}
