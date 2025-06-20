import React, { useState } from "react";
import animals from "../../data/animals";
import AnimalDetailsModal from "../../components/AnimalDetailsModal/AnimalDetailsModal";
import Sidebar from "../../components/Sidebar/Sidebar";
import ImageSlider from "../../components/ImageSlider/ImageSlider"; // 👈 YES!
import styles from "./AnimalPage.module.css";

export default function Mammals() {
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const mammals = animals.filter((animal) => animal.group === "mammals");

  return (
    <div className={styles.page}>
      {/* Sidebar always visible */}
      <Sidebar
        animals={mammals}
        selectedAnimal={selectedAnimal}
        onSelect={(animal) =>
          selectedAnimal?.id === animal.id
            ? setSelectedAnimal(null)
            : setSelectedAnimal(animal)
        }
      />

      <div className={styles.contentWrapper}>
        
        <section className={styles.hero}>
          <div className={styles.overlay}></div>
          <div className={styles.heroContent}>
            <h1>Australian Mammals!</h1>
            <p>
            Australia isn’t like the rest of the world – and neither are its mammals. Get ready to explore a lineup of the planet’s weirdest, wildest, and most wonderful creatures.

From the fierce and fiery Tasmanian Devil, known for its wild screeches and attitude, to the smiley-faced Quokka that melts hearts (and dominates selfies), these animals are pure Aussie icons.

And it doesn't stop there. Ever heard of a mammal that lays eggs? Meet the Echidna – a spiky little mystery with a long tongue and ancient roots that go back to the time of dinosaurs.

Whether they're hopping, crawling, burrowing, or just being downright adorable, Australia’s mammals are anything but ordinary. So buckle up – it’s time to discover the outback's coolest (and cuddliest) legends.
            </p>
          </div>
        </section>

        
        <ImageSlider
  images={mammals.slice(0, 3).map((animal) => animal.image)}
/>

      
        <main className={styles.main}>
          <div className={styles.container}>
            {mammals.map((animal, index) => (
              <div
                key={animal.id}
                className={`${styles.animalRow} ${
                  index % 2 !== 0 ? styles.reverse : ""
                }`}
              >
                <img
                  src={animal.image}
                  alt={animal.name}
                  className={styles.imageCircle}
                />
                <div className={styles.textBox}>
                  <h2>{animal.name}</h2>
                  <p><strong>Diet:</strong> {animal.food}</p>
                  <p><strong>Found:</strong> {animal.found}</p>
                  <p>{animal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {selectedAnimal && (
        <AnimalDetailsModal
          animal={selectedAnimal}
          onClose={() => setSelectedAnimal(null)}
        />
      )}
    </div>
  );
}
