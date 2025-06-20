import React, { useState } from "react";
import animals from "../../data/animals";
import Sidebar from "../../components/Sidebar/Sidebar";
import AnimalDetailsModal from "../../components/AnimalDetailsModal/AnimalDetailsModal";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import styles from "./AnimalPage.module.css";

export default function Reptiles() {
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const reptiles = animals.filter((animal) => animal.group === "reptiles");

  return (
    <div className={styles.page}>
      <Sidebar
        animals={reptiles}
        selectedAnimal={selectedAnimal}
        onSelect={(animal) =>
          selectedAnimal?.id === animal.id ? setSelectedAnimal(null) : setSelectedAnimal(animal)
        }
      />

      <div className={styles.contentWrapper}>
        <section className={styles.hero}>
          <div className={styles.overlay}></div>
          <div className={styles.heroContent}>
            <h1>Australian Reptiles</h1>
            <p>
            From frill-necked drama queens to ancient sea turtles and desert giants – Australia's reptiles are wild, weird, and wonderful. Get ready to meet cold-blooded legends that slither, snap, and stun.

Australia is home to some of the most unique reptiles on Earth – from the prehistoric Saltwater Crocodile, the largest reptile alive today, to the curious Blue-Tongue Lizard flashing its sapphire tongue in self-defense.

You’ll find reptiles that can change color, run on two legs, or flatten their bodies to glide through the trees. And let’s not forget the Frilled-Neck Lizard, whose flair for the dramatic puts Hollywood to shame.

These creatures are masters of survival, perfectly adapted to Australia’s harshest deserts, thickest jungles, and mysterious coastlines. Some are cute. Some are terrifying. All are unforgettable.

So hold on tight – you're about to dive into the wild world of Australia's most ancient survivors.
            </p>
          </div>
        </section>

        <ImageSlider images={reptiles.slice(0, 3).map((animal) => animal.image)} />

        <main className={styles.main}>
          <div className={styles.container}>
            {reptiles.map((reptile, index) => (
              <div
                key={reptile.id}
                className={`${styles.animalRow} ${index % 2 !== 0 ? styles.reverse : ""}`}
              >
                <img src={reptile.image} alt={reptile.name} className={styles.imageCircle} />
                <div className={styles.textBox}>
                  <h2>{reptile.name}</h2>
                  <p><strong>Diet:</strong> {reptile.food}</p>
                  <p><strong>Found:</strong> {reptile.found}</p>
                  <p>{reptile.description}</p>
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
