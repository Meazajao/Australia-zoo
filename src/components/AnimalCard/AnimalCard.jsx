import styles from "./AnimalCard.module.css";

export default function AnimalCard({ animal }) {
  return (
    <div className={styles.card}>
      <img src={animal.image} alt={animal.name} className={styles.image} />
      <h2>{animal.name}</h2>
      <p><strong>Group:</strong> {animal.group}</p>
      <p><strong>Diet:</strong> {animal.food}</p>
      <p><strong>Lifespan:</strong> {animal.lifespan}</p>
      <p><strong>Length:</strong> {animal.length}</p>
      <p><strong>Weight:</strong> {animal.weight}</p>
      <p><strong>Found:</strong> {animal.found}</p>
      <p><strong>Description:</strong> {animal.description}</p>
    </div>
  );
}
