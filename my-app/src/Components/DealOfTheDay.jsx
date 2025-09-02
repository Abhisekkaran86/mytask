
import React from "react";
import "./Style/DealOfTheDay.css";

function DealOfTheDay() {
  const deals = [
    {
      id: 1,
      tag: "NEW",
      category: "Chocos",
      title: "Mixed Fruits Chocolates Pack",
      price: 25,
      oldPrice: 30,
      stock: "1 Pack",
      rating: 4,
      img: "/images/mixchocklet.jpg",
    },
    {
      id: 2,
      tag: "HOT",
      category: "Juice",
      title: "Organic Apple Juice Pack",
      price: 15,
      stock: "3 Left",
      rating: 4,
      img: "/images/apple.png",
    },
    {
      id: 3,
      tag: "NEW",
      category: "Juice",
      title: "Mixed Almond Nuts Juice Pack",
      price: 32,
      oldPrice: 39,
      stock: "250 g",
      rating: 4,
      img: "/images/almond.jpg",
    },
    {
      id: 4,
      tag: "SALE",
      category: "Fruits",
      title: "Fresh Mango Slice Juice",
      price: 25,
      stock: "Out Of Stock",
      rating: 4,
      img: "/images/mango.png",
    },
  ];

  return (
    <section className="deal">
      <div className="deal-header">
        <div>
          <h2>
            Day Of The <span>Deal</span>
          </h2>
          <p>Don’t wait. The time will never be just right.</p>
        </div>
        <div className="deal-timer">597 Days 22 : 11 : 14</div>
      </div>

      <div className="deal-cards">
        {deals.map((item) => (
          <div key={item.id} className="deal-card">
            <div className="tag">{item.tag}</div>
            <img src={item.img} alt={item.title} />
            <div className="deal-info">
              <p className="category">{item.category}</p>
              <h4>{item.title}</h4>
              <div className="rating">★★★★☆</div>
              <div className="price">
                <span>${item.price}</span>
                {item.oldPrice && <del>${item.oldPrice}</del>}
              </div>
              <p className="stock">{item.stock}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DealOfTheDay;
