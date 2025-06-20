import React, { useState } from "react";
import animals from "../../data/animals";
import Sidebar from "../../components/Sidebar/Sidebar";
import AnimalDetailsModal from "../../components/AnimalDetailsModal/AnimalDetailsModal";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import styles from "./AnimalPage.module.css";

export default function Birds() {
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const birds = animals.filter((animal) => animal.group === "birds");

  return (
    <div className={styles.page}>
      <Sidebar
        animals={birds}
        selectedAnimal={selectedAnimal}
        onSelect={(animal) =>
          selectedAnimal?.id === animal.id ? setSelectedAnimal(null) : setSelectedAnimal(animal)
        }
      />

      <div className={styles.contentWrapper}>
        <section className={styles.hero}>
          <div className={styles.overlay}></div>
          <div className={styles.heroContent}>
            <h1>Australian Birds</h1>
            <p>
            Meet Australia’s most iconic feathered friends – from the dinosaur-like Cassowary, to the laughing Kookaburra, and the majestic Yellow Tailed Black Cockatoo. These birds aren’t just beautiful – they’re legendary.

Whether it’s the haunting call of a Lyrebird mimicking chainsaws and car alarms, or the playful chatter of a Rainbow Lorikeet diving through eucalyptus trees, Aussie birds bring drama, color, and chaos to the skies.

Many of these birds have been here since prehistoric times, outlasting predators and thriving in Australia’s wild landscapes – from dry deserts to lush rainforests.

So stretch your wings and get ready to explore the bold, the loud, and the wildly unique birds that could only come from Down Under. Warning: you might fall in love with feathers you never knew existed.
            </p>
          </div>
        </section>

        <ImageSlider images={birds.slice(0, 3).map((animal) => animal.image)} />

        <main className={styles.main}>
          <div className={styles.container}>
            {birds.map((bird, index) => (
              <div
                key={bird.id}
                className={`${styles.animalRow} ${index % 2 !== 0 ? styles.reverse : ""}`}
              >
                <img src={bird.image} alt={bird.name} className={styles.imageCircle} />
                <div className={styles.textBox}>
                  <h2>{bird.name}</h2>
                  <p><strong>Diet:</strong> {bird.food}</p>
                  <p><strong>Found:</strong> {bird.found}</p>
                  <p>{bird.description}</p>
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
