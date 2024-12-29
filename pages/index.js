import React, { useEffect, useState } from "react";
import MessageCarousel from "../components/MessageCarousel"; // Import du composant MessageCarousel
import CelebrationAnimation from "@/components/ConfettiAnimation";

const Home = () => {
  const [showFireworks, setShowFireworks] = useState(false);

  // Liste des messages
  function generateMessages() {
    const templates = [
      "Merci pour une année incroyable ! 🎉",
      "Que {year} soit remplie de bonheur et de succès ! ✨",
      "Ensemble, nous avons accompli tant de choses ! 🙏",
      "Un immense merci à tous pour votre soutien cette année ! 💖",
      "Nouvelle année, nouvelles opportunités. Bonne année ! 🎆",
      "{pastYear} a été mémorable, merci à vous tous ! 🥂",
      "Que {year} soit encore plus lumineuse ! 🌟",
      "Merci pour chaque moment partagé cette année ! ❤️",
      "Vos sourires et votre soutien rendent tout possible. Bonne année ! 🎊",
      "À une nouvelle année remplie de rêves et de réalisations ! 🌈",
      "Que cette nouvelle année soit pleine d'aventures et de succès ! 🚀",
      "Chers amis, merci pour votre soutien constant. Que {year} soit magique ! ✨",
      "Célébrons ensemble un nouveau chapitre rempli de promesses ! 📖",
      "Merci d'être là chaque jour. Que {year} soit rempli de joie et de prospérité ! 🎊",
      "L'année {pastYear} a été un voyage incroyable, et c'est grâce à vous ! 🌟",
      "Chaque moment passé ensemble cette année a été un cadeau. Bonne année ! 🎁",
      "Une année se termine, une autre commence, et je vous souhaite le meilleur ! 🌸",
      "Je vous souhaite une année {year} pleine de moments heureux et inoubliables ! 🌅",
      "À de nouvelles réussites et des moments heureux en 2025 ! 🥳",
      "Que {year} soit une année de grande santé, d'amour et de prospérité ! 💖",
      "Merci pour votre amitié et votre soutien. Que {year} vous apporte ce que vous désirez ! 💫",
      "Que vos rêves deviennent réalité cette année. Bonne année ! 🌠",
      "Ensemble, faisons de {year} une année inoubliable ! 🏆",
      "Merci pour tout ce que nous avons partagé cette année. En route pour de nouvelles aventures ! 🌍",
      "Bonne année à vous et à vos proches. Que la joie et la paix vous accompagnent ! 🕊️",
      "Merci d'avoir été une source de lumière dans ma vie en {pastYear}. Que {year} soit encore plus lumineux ! 🌟",
      "Que chaque jour de {year} vous apporte une nouvelle raison de sourire ! 😊",
      "À une année pleine de nouvelles opportunités et de rêves réalisés ! 🌈",
      "Les meilleures choses arrivent à ceux qui savent attendre. Bonne année et à bientôt ! 🕰️",
      "Que {year} soit l'année où vos rêves prennent vie ! ✨",
      "Que cette année vous apporte la réussite, la paix et des moments mémorables ! 💖",
      "Un grand merci pour tout ce que vous faites. Que {year} soit aussi géniale que vous ! 🌟",
      "À une année pleine de rencontres et de succès professionnels ! 💼",
      "Merci de faire partie de ma vie et de rendre chaque moment spécial. Bonne année ! 💖",
      "Que {year} soit rempli de nouveaux commencements et de belles surprises ! 🎉",
      "Je vous souhaite une année riche en bonheur et en découvertes ! 🌍",
      "Que cette nouvelle année soit plus douce et plus joyeuse que jamais ! 🌸",
      "À une année d'amour, de rires et de grands projets ! 💬",
      "Chaque nouvelle année est une nouvelle chance. Faisons de {year} une année extraordinaire ! 💫",
      "Merci pour votre soutien sans faille. Que {year} soit encore plus radieuse ! 🌟",
    ];
    

    const messages = [];
    const year = new Date().getFullYear();
    const pastYear = year;

    for (let i = 0; i < 1000; i++) {
      const template = templates[Math.floor(Math.random() * templates.length)];
      const message = template
        .replace("{year}", year + 1)
        .replace("{pastYear}", pastYear);
      messages.push(message);
    }

    return messages;
  }

  const messages = generateMessages();

  // Diviser le tableau de messages en deux
  const quarterLength = Math.ceil(messages.length / 4);
  const firstQuarter = messages.slice(0, quarterLength);
  const secondQuarter = messages.slice(quarterLength, quarterLength * 2);
  const thirdQuarter = messages.slice(quarterLength * 2, quarterLength * 3);
  const fourthQuarter = messages.slice(quarterLength * 3);

  useEffect(() => {
    const countdownTo2025 = () => {
      const now = new Date();
      const targetDate = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0, 0);
      const timeLeft = targetDate - now;
  
      console.log("Current Time (now):", now);
      console.log("Target Time (targetDate):", targetDate);
      console.log("Time Left (in milliseconds):", timeLeft);
  
      if (timeLeft <= 0) {
        console.log("Time has passed, showing fireworks!"); 
        try {
          setShowFireworks(true);
        } catch (error) {
          console.error("Error when setting fireworks:", error);
        }
        clearInterval(timer);
      }
    };
  
    const timer = setInterval(countdownTo2025, 1000);
    return () => clearInterval(timer);
  }, []);
  
  
  

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        overflow: "hidden",
        color: "white",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {!showFireworks ? (
        <>
          {/* Ajout de marges entre les carrousels */}
          <div style={{ marginBottom: "30px", overflow: "hidden" }}>
            <MessageCarousel messages={firstQuarter} speed={15} direction="left" />
          </div>
          <div style={{ marginBottom: "30px",  overflow: "hidden" }}>
            <MessageCarousel messages={secondQuarter} speed={25} direction="right" />
          </div>
          <div style={{ marginBottom: "30px",  overflow: "hidden" }}>
            <MessageCarousel messages={thirdQuarter} speed={30} direction="left" />
          </div>
          <div style={{  overflow: "hidden" }}>
            <MessageCarousel messages={fourthQuarter} speed={20} direction="right" />
          </div>
        </>
      ) : (
        <CelebrationAnimation />
      )}
    </div>
  );
};

export default Home;
