import styles from "./Sidebar.module.css";

export default function Sidebar({ animals, selectedAnimal, onSelect }) {
  return (
    <aside className={styles.sidebar}>
      <h3>Animals</h3>
      <ul>
        {animals.map((animal) => (
          <li
            key={animal.id}
            className={selectedAnimal?.id === animal.id ? styles.active : ""}
            onClick={() => onSelect(animal)}
          >
            {animal.name}
          </li>
        ))}
      </ul>
    </aside>
  );
}
