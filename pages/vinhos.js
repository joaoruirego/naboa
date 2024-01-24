"use client";
import React from "react";
import styles from "../src/app/vinhos.module.css"; // Certifique-se de que este arquivo CSS está no mesmo diretório

const MenuPage = () => {
  const images = [
    "/e.jpg",
    "/f.jpg",
    "/g.jpg",
    "/e.jpg",
    "/f.jpg",
    "/g.jpg",
    "/e.jpg",
    "/f.jpg",
    "/g.jpg",
    "/f.jpg",
    "/g.jpg",
    "/e.jpg",
  ];

  return (
    <main className={styles.main}>
      <div className={styles.menuContainer}>
        <h1 className={styles.menuTitle}>Vinhos NABOA</h1>

        <div className={styles.galleryGrid}>
          {images.map((image, index) => (
            <div key={index} className={styles.gridItem}>
              <img src={image} alt={`Gallery item ${index + 1}`} />
            </div>
          ))}
        </div>

        <a href="/" className={styles.submitButton}>
          Voltar
        </a>
      </div>
    </main>
  );
};

export default MenuPage;
