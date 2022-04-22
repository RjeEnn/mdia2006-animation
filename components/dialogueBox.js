import styles from "../styles/DialogueBox.module.css";

export default function DialogueBox({ line, onClick }) {
  return (
    <div className={styles.container} onClick={onClick}>
      {line.name != null ? (
        <>
          <h2>{line.name}</h2>
          <p>{line.msg}</p>
        </>
      ) : (
        <p>{line.msg}</p>
      )}
      <p className={styles.continue}>(click anywhere to continue)</p>
    </div>
  );
}
