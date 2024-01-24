"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
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
  const [currentImage2, setCurrentImage2] = useState(0);
  const [currentBgImage, setCurrentBgImage] = useState(0);
  const carouselRef = useRef(null);
  const carouselRef2 = useRef(null);

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

  const nextImage2 = () => {
    setCurrentImage2((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, intervalTime);
    const intervalId2 = setInterval(nextImage2, intervalTime); // Intervalo para carouselRef2

    return () => {
      clearInterval(intervalId);
      clearInterval(intervalId2);
    };
  }, []);

  useEffect(() => {
    // Atualiza o carouselRef
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(${
        -currentImage * 100
      }%)`;
    }

    // Atualiza o carouselRef2
    if (carouselRef2.current) {
      carouselRef2.current.style.transform = `translateX(${
        -currentImage2 * 100
      }%)`;
    }
  }, [currentImage, currentImage2]); // Dependência adicionada para currentImage2

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(${
        -currentImage * 33.33
      }%)`;
    }

    if (carouselRef2.current) {
      carouselRef2.current.style.transform = `translateX(${
        -currentImage2 * 33.33
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

    const formDataParams = new URLSearchParams(formData);

    try {
      const url = `https://step-server-5p5n.onrender.com/naboa?${formDataParams.toString()}`;

      const response = await fetch(url, {
        method: "GET",
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

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.nav}>
        <img className={styles.logo} src="/logo.png" />
        <ul className={styles.navUl}>
          {/* <li className={styles.navLi}>Home</li> */}
          <li
            onClick={() => scrollToSection("#localizacao")}
            className={styles.navLi}
          >
            Localização
          </li>
          <li
            onClick={() => scrollToSection("#encomendas")}
            className={styles.navLiE}
          >
            Encomendas
          </li>
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
            Bem-vindo à NABOA, o refúgio de tapas e vinhos em Telheiras, Lisboa.
            Descubra o charme vintage enquanto desfruta de petiscos autênticos e
            uma vasta seleção de vinhos na nossa garrafeira única.
          </p>
        </div>
        <br></br>
        <br></br>
      </div>

      <div className={styles.carouselContainer}>
        <div ref={carouselRef2} className={styles.carousel}>
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
            Explore a nossa carta de petiscos na NABOA, onde cada prato é uma
            deliciosa viagem pelos sabores autênticos,<br></br> cuidadosamente
            selecionados para tornar a sua experiência única e memorável.
          </p>
        </div>
        <div className={styles.buttons}>
          <a href="/carta/">
            <button className={styles.buttonMenu}>Menu</button>
          </a>
          <a href="/vinhos/">
            <button className={styles.buttonVinhos}>Vinhos</button>
          </a>
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
      <div id="encomendas"></div>
      <br></br>

      <div className={styles.sobreContainer}>
        <br></br>
        <h2 style={{ fontSize: "350%" }} className={styles.segTitle}>
          Encomendas
        </h2>
        <br></br>
        <div>
          <br></br>
          <p className={styles.desc}>
            Leve a NABOA até si! Encomende bolos, vinhos e refeições incríveis!
          </p>
        </div>

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
          <p className={styles.desc}>
            Envie-nos uma mensagem para fazer uma reserva!<br></br>
          </p>
          <button
            id="localizacao"
            type="submit"
            className={styles.submitButton}
          >
            Submeter
          </button>
          <br></br>
        </form>
        <h2
          style={{ fontSize: "320%", marginTop: 50 }}
          className={styles.segTitle}
        >
          Localização
        </h2>
        <br></br>
        <div className={styles.mapaDiv}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.0959530047753!2d-9.168765923525415!3d38.76150317175341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1932e7bdc20dd1%3A0xb509920c7fbcb494!2sRua%20Professor%20Fernando%20da%20Fonseca%2025%2C%201600-617%20Lisboa!5e0!3m2!1spt-PT!2spt!4v1704566702075!5m2!1spt-PT!2spt"
            allowFullScreen=""
            className={styles.mapa}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className={styles.footer}>
          <div className={styles.zonasFooter}>
            <div className={styles.zonaFooter}>
              <h3 className={styles.titleForm}>Onde estamos</h3>
              <p className={styles.descForm}>
                Rua Professor Fernando da Fonseca 25A <br></br>1600-617 Lisboa
              </p>
            </div>
            <br></br>
            <br></br>
            <div className={styles.zonaFooter}>
              <h3 className={styles.titleForm}>Contactos</h3>
              <p className={styles.descForm}>
                +351 964 217 459
                <br></br>info@mercadonaboa.pt
              </p>
            </div>
            <br></br>
            <br></br>

            <div className={styles.zonaFooter}>
              <h3 className={styles.titleForm}>Redes Sociais</h3>
              <p className={styles.descForm}>
                <a
                  href="https://www.instagram.com/imagino_naboa/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <br />
                <a
                  href="https://www.facebook.com/naboamercearia/?locale=pt_PT"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </p>
            </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
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
