"use client";
import React from "react";
import styles from "../src/app/vinhos.module.css"; // Certifique-se de que este arquivo CSS está no mesmo diretório

const MenuPage = () => {
  const images = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
    "/9.jpg",
    "/10.jpg",
    "/11.jpg",
    "/12.jpg",
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
