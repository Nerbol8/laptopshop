import { Button, Container, TextField } from "@mui/material";
import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { clientContext } from "../contexts/ClientContext";

const ProductDetailsPage = () => {
  const data = useContext(clientContext);
  const { getProductDetails, productDetails, addFeedback } = data;
  const [feedbackValue, setFeedbackValue] = useState("");
  const [feedbackUser, setFeedbackUser] = useState("");
  const params = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFeedback = {
      title: feedbackValue.trim(),
      user: feedbackUser.trim(),
    };

    for (let key in newFeedback) {
      if (!newFeedback[key]) {
        alert("Заполните");
        return;
      }
    }
    addFeedback(newFeedback, productDetails);
    setFeedbackValue("");
    setFeedbackUser("");
  };
  console.log(productDetails);

  useEffect(() => {
    getProductDetails(params.id);
  }, []);
  if (!productDetails) {
    return <h2>Loading ...</h2>;
  }

  return (
    <div>
      <Container>
        <div className="product-details">
          <img src={productDetails.image} alt="" />
          <div>
            <h2>{productDetails.name}</h2>
            <ul>
              <li>
                <strong>цЕНА</strong>
                {productDetails.price}
              </li>
              <li>
                <strong>Цвет</strong>
                {productDetails.color}
              </li>
              <li>
                <strong>размер</strong>
                {productDetails.memory}
              </li>
              <li>
                <strong>описание</strong>
                {productDetails.description}
              </li>
              <li>
                <strong>описание</strong>
                {productDetails.ram}
              </li>
            </ul>
          </div>
        </div>
        <div className="product-detail-feedback">
          <h3>Отзывы</h3>
          <form onSubmit={handleSubmit}>
            <TextField
              onChange={(e) => setFeedbackUser(e.target.value)}
              value={feedbackUser}
              type="text"
              variant="standard"
              label="ввведите ваш Имя"
              style={{ marginBottom: 15 }}
            />
            <TextField
              value={feedbackValue}
              onChange={(e) => setFeedbackValue(e.target.value)}
              type="text"
              multiline
              minRows={3}
              maxRows={5}
              label="ввведите ваш отзыв"
              style={{ marginBottom: 15 }}
            />
            <Button type="submit">Сотавитьс отзыв</Button>
          </form>

          <div>
            {productDetails.feedBacks?.map((item, index) => (
              <div key={index} className="feedback">
                <h5>{item.user}</h5>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
