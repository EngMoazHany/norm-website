import React, { useState } from "react";
import pdfFile from "../assets/Company Profile.pdf";
import bg from "../assets/Photo1.png";

const Services = () => {
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
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "40px",
          borderRadius: "20px",
          background: "rgba(0, 0, 0, 0.25)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
        }}
      >
        {!downloaded ? (
          <>
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
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = "#b80d0d")
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = "#e60000")
              }
            >
              تحميل الملف 📄
            </button>
          </>
        ) : (
          <h3
            style={{
              color: "#bfa97f",
              textShadow: "0 0 10px rgba(0,0,0,0.8)",
              fontSize: "1.3rem",
            }}
          >
            ✅ تم بدء تحميل الملف بنجاح
          </h3>
        )}
      </div>
    </section>
  );
};

export default Services;
