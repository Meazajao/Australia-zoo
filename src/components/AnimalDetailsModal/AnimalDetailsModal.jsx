import { useState } from "react";
import styles from "./AnimalDetailsModal.module.css";

export default function AnimalDetailsModal({ animal, onClose }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  if (!animal) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>✕</button>
        <img src={animal.image} alt={animal.name} className={styles.image} />
        <h2>{animal.name}</h2>
        <p><strong>Group:</strong> {animal.group}</p>
        <p><strong>Diet:</strong> {animal.food}</p>
        <p><strong>Lifespan:</strong> {animal.lifespan}</p>
        <p><strong>Length:</strong> {animal.length}</p>
        <p><strong>Weight:</strong> {animal.weight}</p>
        <p><strong>Found:</strong> {animal.found}</p>

        <p>
          <strong>Description:</strong>{" "}
          {showFullDescription
            ? animal.description
            : animal.description.slice(0, 120) + "..."}
        </p>

        <button
          className={styles.toggleBtn}
          onClick={() => setShowFullDescription(!showFullDescription)}
        >
          {showFullDescription ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}
