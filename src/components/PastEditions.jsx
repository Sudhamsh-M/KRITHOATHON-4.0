import { useState, useEffect } from "react";

/* ---------- SLIDER COMPONENT ---------- */
function ImageSlider({ images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[220px] rounded-xl overflow-hidden">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt=""
          className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
}

/* ---------- MAIN COMPONENT ---------- */
export default function PastEditions() {
  const edition1 = [
    "/assets/ed-1-1.jpeg",
    "/assets/ed-1-2.jpeg",
    "/assets/ed-1-3.jpeg",
  ];

  const edition2 = [
    "/assets/ed-2-1.jpeg",
    "/assets/ed-2-2.jpeg",
    "/assets/ed-2-3.jpeg",
    "/assets/ed-2-4.jpeg",
    "/assets/ed-2-5.jpeg",
    "/assets/ed-2-6.jpeg",
    "/assets/ed-2-8.jpeg",
    "/assets/ed-2-9.jpeg",
    "/assets/ed-2-10.jpeg",
    "/assets/ed-2-11.jpeg",
    "/assets/ed-2-12.jpeg",
  ];

  const edition3 = [
    "/assets/ed-3-1.jpeg",
    "/assets/ed-3-2.jpeg",
    "/assets/ed-3-3.jpeg",
    "/assets/ed-3-4.jpeg",
    "/assets/ed-3-5.jpeg",
    "/assets/ed-3-6.jpeg",
    "/assets/ed-3-7.jpeg",
    "/assets/ed-3-8.jpeg",
    "/assets/ed-3-9.jpeg",
    "/assets/ed-3-10.jpeg",
    "/assets/ed-3-11.jpeg",
    "/assets/ed-3-1.jpeg",
  ];

  const editions = [
    { title: "Edition 1.0", images: edition1 },
    { title: "Edition 2.0", images: edition2 },
    { title: "Edition 3.0", images: edition3 },
  ];

  return (
    <div
      style={{
        paddingTop: "clamp(20px, 8vw, 60px)",
        minHeight: "100vh",
        background: "#000",
        color: "#fff",
        textAlign: "center",
        paddingInline: "20px",
        scrollMarginTop: "80px",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
        Past Editions
      </h1>

      <p
        style={{
          color: "#888",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        Relive the best moments from Krithoathon 1.0, 2.0, and 3.0.
      </p>

      {/* GRID */}
      <div
        style={{
          marginTop: "60px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
        }}
      >
        {editions.map((edition, i) => (
          <div
            key={i}
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.1)",
              padding: "16px",
              transition: "0.5s",
            }}
          >

            <ImageSlider images={edition.images} />

            <p
              style={{
                marginTop: "14px",
                color: "#aaa",
                fontSize: "14px",
              }}
            >
              {edition.title}
            </p>
          </div>
        ))}
    
      </div>
      <div className="h-8 md:h-12" />
    </div>
  );
}