
import React from "react";
import "./Style/CategoryCards.css";

export function CategoryCards() {
  const categories = [
    {
      id: 1,
      title: "Tasty Snack & Fast food",
      description: "The flavour of something special",
      img: "/images/snack.png",
      gradient: "linear-gradient(135deg, #fdf4e3 50%, #f9f6f2 50%)", // beige split
    },
    {
      id: 2,
      title: "Fresh Fruits & Vegetables",
      description: "A healthy meal for every one",
      img: "/images/Fruits.jpeg",
      gradient: "linear-gradient(135deg, #ffe6ec 50%, #fff5f7 50%)", // pink split
    },
  ];

  return (
    <section className="categories">
      {categories.map((cat) => (
        <div
          key={cat.id}
          className="card"
          style={{ background: cat.gradient }}
        >
          <div className="card-image">
            <img src={cat.img} alt={cat.title} />
          </div>
          <div className="card-text">
            <h3>{cat.title}</h3>
            <p>{cat.description}</p>
            <button>Shop Now</button>
          </div>
        </div>
      ))}
    </section>
  );
}
