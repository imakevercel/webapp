import { useState, useEffect } from 'react';
import styles from '../styles/styles.module.css';

const images = [
  '/images/IMG_4028.jpeg',
  '/images/IMG_4001.jpeg',
  '/images/IMG_7634.jpeg'
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 1000); // Match this duration to the CSS transition duration
    }, 4000); // Change image every 4 seconds (including 1 second for fade out and 1 second for fade in)
    return () => clearInterval(interval);
  }, []);
<div className={styles.circ1}></div>
  useEffect(() => {
    const footer = document.createElement('footer');
    footer.innerHTML = `
      <p><small>all code on this website and in <a href="https://github.com/r-y4n" style="color: #0000eb;">github</a> made by ryan j.</small></p>
    `;
    footer.style.backgroundColor = '#333';
    footer.style.color = '#d8d8ff';
    footer.style.textAlign = 'center', 'top';
    footer.style.padding = '10px';
    footer.style.position = 'fixed';
    footer.style.bottom = '0';
    footer.style.width = '95%';
    footer.style.height = '5%';
    document.body.appendChild(footer);

    return () => {
      document.body.removeChild(footer);
    };
  }, []);

  return (
    <div className={styles.container}>
      <h1> </h1>
      <img 
        src={images[currentImageIndex]} 
        alt="if you are seeing this I made an oopsie 😔🙏" 
        className={`${styles.image} ${fade ? styles['fade-in'] : ''}`} 
      />
  );
}
