import React, { useState } from "react";
import pdfFile from "../assets/Company Profile.pdf";

const About = () => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = "Company Profile - NORM.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloaded(true);
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 20px",
        overflow: "hidden",

        /* 🎬 CINEMATIC BACKGROUND */
        background: `
          radial-gradient(
            circle at 20% 25%,
            rgba(230, 0, 0, 0.35),
            transparent 45%
          ),
          radial-gradient(
            circle at 80% 75%,
            rgba(19, 15, 15, 0.25),
            transparent 50%
          ),
          linear-gradient(
            180deg,
            #020202,
            #080808,
            #000000
          )
        `,
      }}
    >
      {/* 🎥 Film Grain */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
          opacity: 0.18,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* 🔴 Red Glow */}
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(230,0,0,0.45), transparent 60%)",
          top: "-200px",
          right: "-200px",
          filter: "blur(120px)",
          animation: "floatGlow 12s ease-in-out infinite",
          zIndex: 1,
        }}
      />

      {/* 🔥 Glass Card */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.03))",
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
          borderRadius: "26px",
          border: "1px solid rgba(255,255,255,0.18)",
          boxShadow:
            "0 40px 100px rgba(0,0,0,0.8), inset 0 0 60px rgba(230,0,0,0.12)",

          /* ✅ Responsive Padding */
          padding: "clamp(36px, 6vw, 60px) clamp(26px, 6vw, 45px)",
          maxWidth: "720px",
          width: "100%",
          textAlign: "center",
          color: "#ffffff",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.4rem, 4.8vw, 2.1rem)",
            lineHeight: "1.5",
            marginBottom: "32px",
            fontWeight: "700",
            textShadow: "0 10px 40px rgba(0,0,0,0.9)",
            maxWidth: "520px",
            marginInline: "auto",
            textWrap: "balance",
          }}
        >
         
         ؟ <span style={{ color: "#ff2b2b" }}>NORM</span> تحب تعرف وش يميّزنا في{" "}
          <span style={{ display: "block", marginTop: "10px" }}>
            حمّل الملف وخلّنا نحكيك الصورة كاملة
          </span>
        </h2>

        <button
          onClick={handleDownload}
          style={{
            background: "linear-gradient(135deg, #ff0000, #b80000)",
            color: "white",
            border: "none",
            padding: "14px 32px",
            borderRadius: "16px",
            fontSize: "clamp(0.95rem, 4vw, 1.15rem)",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.35s ease",
            boxShadow: "0 18px 45px rgba(230,0,0,0.55)",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "translateY(-3px) scale(1.02)";
            e.target.style.boxShadow =
              "0 25px 65px rgba(255,0,0,0.7)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "translateY(0) scale(1)";
            e.target.style.boxShadow =
              "0 18px 45px rgba(230,0,0,0.55)";
          }}
        >
          تحميل الملف 📄
        </button>

        {downloaded && (
          <p
            style={{
              marginTop: "22px",
              fontSize: "0.95rem",
              color: "#e8fff3",
              opacity: 0.95,
            }}
          >
            ✅ تم بدء تحميل الملف بنجاح
          </p>
        )}
      </div>

      {/* 🔧 Animation */}
      <style>
        {`
          @keyframes floatGlow {
            0% { transform: translateY(0px); }
            50% { transform: translateY(40px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>
    </section>
  );
};

export default About;
