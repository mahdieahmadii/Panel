import React, { useState } from "react";
import "./AddNewProduct.css";

export default function AddNewProduct({ getAllProducts }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [count, setCount] = useState("");
  const [img, setImg] = useState("");
  const [popularity, setPopularity] = useState("");
  const [sale, setSale] = useState("");
  const [colors, setColors] = useState("");

  const product = {
    title,
    price,
    count,
    img,
    popularity,
    sale,
    colors,
  };

  const emptyInputs = () => {
    setTitle("");
    setPrice("");
    setCount("");
    setImg("");
    setPopularity("");
    setSale("");
    setColors("");
  };

  const submitProduct = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => emptyInputs());
  };

  return (
    <div className="products-main">
      <h1 className="products-title">افزودن محصول جدید</h1>

      <form action="#" className="add-products-form">
        <div className="add-products-form-wrap">
          <div className="add-products-form-group">
            <input
              type="text"
              placeholder="اسم محصول را بنویسید"
              className="add-products-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              placeholder="قیمت محصول را بنویسید"
              className="add-products-input"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              placeholder="موجودی محصول را بنویسید"
              className="add-products-input"
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              placeholder="آدرس عکس محصول را بنویسید"
              className="add-products-input"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              placeholder="میزان محبوبیت محصول را بنویسید"
              className="add-products-input"
              value={popularity}
              onChange={(e) => setPopularity(e.target.value)}
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              placeholder="میزان فروش محصول را بنویسید"
              className="add-products-input"
              value={sale}
              onChange={(e) => {
                setSale(e.target.value);
              }}
            />
          </div>
          <div className="add-products-form-group">
            <input
              type="text"
              placeholder="تعداد رنگ بندی محصول را بنویسید"
              className="add-products-input"
              value={colors}
              onChange={(e) => setColors(e.target.value)}
            />
          </div>
        </div>
        <button className="add-products-submit" onClick={submitProduct}>
          ثبت محصول
        </button>
      </form>
    </div>
  );
}
