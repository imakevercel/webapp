import styles from '../styles/styles.module.css';

export default function Projects() {
  return (
    <div>
      <div className={styles.projbg}></div>
      <div className={styles.navbar}>
        <h1>
          <a href="/index" style={{ color: '#000000' }}>Home</a>
        </h1>
        <h1>
          <a href="/projects" style={{ color: '#000000' }}>Projects</a>
        </h1>
      </div>
    </div>
  );
}
