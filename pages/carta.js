"use client";
import React from "react";
import styles from "../src/app/carta.module.css"; // Certifique-se de que este arquivo CSS está no mesmo diretório

const MenuPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.menuContainer}>
        <h1 className={styles.menuTitle}>Menu NABOA</h1>

        <div className={styles.menuSectionContainer}>
          <section className={styles.menuSection}>
            <h2 className={styles.sectionTitle}>Peixe</h2>
            <ul className={styles.menuItems}>
              <li>Punheta de bacalhau - € 12,00</li>
              <li>Salada de Lulas com Abacaxi ou Manga - € 11,00</li>
              <li>Arroz de Lingueirao - € 13,00</li>
              <li>Açorda de Lingueirao - € 15,00</li>
              <li>Pasta Negra com camarão - € 13,00</li>
              <li>Camarão A`laurentina - € 10,00</li>
              <li>Bobó de Camarão - € 10,00</li>
            </ul>
          </section>

          <section className={styles.menuSection}>
            <h2 className={styles.sectionTitle}>Carne</h2>
            <ul className={styles.menuItems}>
              <li>Ribs - € 12</li>
              <li>Cupim de vaca - € 13</li>
              <li>Perdiz - € 15</li>
              <li>Bochechas de porco preto - € 13</li>
              <li>Moelas - € 9</li>
              <li>Vaca atolada - € 14</li>
              <li>Mocotó - € 10</li>
            </ul>
          </section>
        </div>
        <div className={styles.menuSectionContainer}>
          <section className={styles.menuSection}>
            <h2 className={styles.sectionTitle}>Caldos</h2>
            <ul className={styles.menuItems}>
              <li>Nega maluca - € 4</li>
              <li>Creme de xuxu - € 4</li>
              <li>Caldo de pinto - € 3,50</li>
              <li>Ervilha - € 3,50</li>
              <li>Legumes - € 3,50</li>
              <li>Sopa de peixe - € 7</li>
            </ul>
          </section>

          <section className={styles.menuSection}>
            <h2 className={styles.sectionTitle}>Sobremesas</h2>
            <ul className={styles.menuItems}>
              <li>Bolos variados - € 2</li>
              <li>Pudim de Lima ou caramelo salgado - € 3,50</li>
              <li>Raivas - € 0,75 por unidade</li>
            </ul>
          </section>
        </div>

        {/* Seções adicionais para Caldos e Sobremesa */}
        <footer className={styles.menuFooter}>
          Todos os Pratos são compostos de acompanhamento. Aceitamos cartão,
          MBway e dinheiro. Aberta de terças a domingos.
        </footer>
        <br></br>
        <br></br>

        <a href="/" className={styles.submitButton}>
          Voltar
        </a>
      </div>
    </main>
  );
};

export default MenuPage;
