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
        backgroundColor: "#000", // ✅ خلفية سوداء فقط
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        flexDirection: "column",
        padding: "0 20px",
      }}
    >
    <h2
              style={{
                color: "#ffffff",
                fontSize: "2rem",
                marginBottom: "20px",
                textShadow: "0 0 10px rgba(0,0,0,0.8)",
                lineHeight: "1.6",
              }}
            >
              ؟NORM تحب تعرف وش يميّزنا في 
      
              <br />
              حمّل الملف وخلّنا نحكيك الصورة كاملة
            </h2>

      <button
        onClick={handleDownload}
        style={{
          backgroundColor: "#e60000",
          color: "white",
          border: "none",
          padding: "12px 25px",
          borderRadius: "10px",
          fontSize: "1.1rem",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#b80d0d")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#e60000")}
      >
        تحميل الملف 📄
      </button>

      {/* ✅ رسالة النجاح */}
      {downloaded && (
        <p
          style={{
            marginTop: "15px",
            color: "#f1f4f3ff",
            fontSize: "1.1rem",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          ✅ تم بدء تحميل الملف بنجاح
        </p>
      )}
    </section>
  );
};

export default About;
