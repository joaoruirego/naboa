"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React, { useState, useEffect, useRef } from "react";

const images = [
  "/a.jpg",
  "/b.jpg",
  "/c.jpg",
  "/d.jpg",
  "/e.jpg",
  "/f.jpg",
  "/g.jpg",
];
const bgImages = [
  "/bgNaboa1.jpg",
  "/bgNaboa2.jpg",
  "/bgNaboa3.jpg",
  "/bgNaboa4.jpg",
];
const intervalTime = 2000;

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentBgImage, setCurrentBgImage] = useState(0);
  const carouselRef = useRef(null);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const nextBgImage = () => {
    setCurrentBgImage((prev) => (prev + 1) % bgImages.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, intervalTime);
    const bgIntervalId = setInterval(nextBgImage, intervalTime);

    return () => {
      clearInterval(intervalId);
      clearInterval(bgIntervalId);
    };
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(${
        -currentImage * 33.33
      }%)`;
    }
  }, [currentImage]);

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telemovel: "",
    mensagem: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update the formData state with the new input value
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();

    // Convert form data to URLSearchParams
    const formDataParams = new URLSearchParams(formData);

    try {
      // Append form data as query parameters to the URL
      const url = `http://localhost:3030/teste?${formDataParams.toString()}`;

      const response = await fetch(url, {
        method: "GET",
        // No need to set body when using GET method
      });

      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }

      alert("Thanks for contacting us, we will get back to you soon!");
    } catch (err) {
      console.error(err);
      alert("We can't submit the form, try again later?");
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.nav}>
        <img className={styles.logo} src="/logo.png" />
        <ul className={styles.navUl}>
          <li className={styles.navLi}>Home</li>
          <li className={styles.navLi}>Localização</li>
          <li className={styles.navLiE}>Encomendas</li>
        </ul>
      </div>
      <div className={styles.titleZone}>
        <h3 className={styles.sobreTitleTitle}>A Mercearia e Garrafeira</h3>
        <h1 className={styles.title}>NABOA</h1>
      </div>

      <div className={styles.bgc}>
        {bgImages.map((bgImage, index) => (
          <img
            key={index}
            className={styles.bg}
            src={bgImage}
            alt={`Background Image ${index + 1}`}
          />
        ))}
      </div>
      <br></br>
      <div className={styles.sobreContainer}>
        <br></br>

        <div>
          <h3 className={styles.sobreTitle}>A Mercearia e Garrafeira</h3>
          <h2 className={styles.segTitle}>NABOA</h2>
        </div>
        <br></br>
        <div>
          <p className={styles.desc}>
            Aqui vai ficar o texto número 1 sobre o Naboa Texto sobre o conceito
            da mercearia Lorem ipsum dolor sit amet,<br></br> consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.<br></br> Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
        <br></br>
        <br></br>
      </div>

      <div className={styles.carouselContainer}>
        <div ref={carouselRef} className={styles.carousel}>
          {images.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className={styles.carouselImage}
            />
          ))}
          {images.map((imageUrl, index) => (
            <img
              key={index + images.length}
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className={styles.carouselImage}
            />
          ))}
          {images.map((imageUrl, index) => (
            <img
              key={index + 2 * images.length}
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className={styles.carouselImage}
            />
          ))}
        </div>
      </div>
      <br></br>

      <div className={styles.sobreContainer}>
        <br></br>

        <h2 style={{ fontSize: 75 }} className={styles.segTitle}>
          A Carta
        </h2>
        <br></br>
        <div>
          <p className={styles.desc}>
            Pequeno texto sobre a carta Lorem ipsum dolor sit amet,<br></br>{" "}
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>
        <div className={styles.buttons}>
          <button className={styles.buttonMenu}>Menu</button>
          <button className={styles.buttonVinhos}>Vinhos</button>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>

      <div className={styles.carouselContainer}>
        <div ref={carouselRef} className={styles.carousel}>
          {images.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className={styles.carouselImage}
            />
          ))}
          {images.map((imageUrl, index) => (
            <img
              key={index + images.length}
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className={styles.carouselImage}
            />
          ))}
          {images.map((imageUrl, index) => (
            <img
              key={index + 2 * images.length}
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className={styles.carouselImage}
            />
          ))}
        </div>
      </div>
      <br></br>

      <div className={styles.sobreContainer}>
        <br></br>
        <h2 style={{ fontSize: 75 }} className={styles.segTitle}>
          Encomendas
        </h2>
        <br></br>
        <div>
          <br></br>
          <p className={styles.desc}>
            Pequeno texto sobre as encomendas Lorem ipsum dolor sit amet,
            <br></br> consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <form className={styles.formStruct} onSubmit={handleSubmit}>
          <div className={styles.formStructDiv}>
            <div className={styles.inputs}>
              <input
                type="text"
                placeholder="Nome"
                className={styles.inputWithoutBorder}
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
              />
              <br />
              <input
                type="email"
                placeholder="Email"
                className={styles.inputWithoutBorder}
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <br />
              <input
                type="tel"
                placeholder="Telemóvel"
                className={styles.inputWithoutBorder}
                name="telemovel"
                value={formData.telemovel}
                onChange={handleInputChange}
              />
            </div>
            <textarea
              placeholder="Mensagem"
              className={styles.textArea}
              name="mensagem"
              value={formData.mensagem}
              onChange={handleInputChange}
            />
          </div>
          <br></br>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>

        <div className={styles.footer}>
          <div className={styles.zonasFooter}>
            <div style={{ width: "33.3%" }}>
              <h3 className={styles.titleForm}>Onde estamos</h3>
              <p className={styles.descForm}>
                Rua Professor Fernando da Fonseca 25A <br></br>1600-617 Lisboa
              </p>
            </div>
            <div style={{ width: "33.3%" }}>
              <h3 className={styles.titleForm}>Contactos</h3>
              <p className={styles.descForm}>
                +351 964 217 459
                <br></br>info@mercadonaboa.pt
              </p>
            </div>
            <div style={{ width: "33.3%" }}>
              <h3 className={styles.titleForm}>Redes Sociais</h3>
              <p className={styles.descForm}>
                Instagram
                <br></br>Facebook
              </p>
            </div>
          </div>
          <br></br>
          <div className={styles.logoFooterImg}>
            <img className={styles.logoFooter} src="/logo.png" />
          </div>
        </div>
        <br></br>
      </div>
    </main>
  );
}
