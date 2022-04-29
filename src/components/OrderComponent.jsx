import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { clientContext } from "../contexts/ClientContext";
import { mobile } from "../responsive";
import { api2 } from "../helpers/const";

const Tag = styled.h2`
  width: 700;
  ${mobile({ backgroundColor: "red" })}
`;

const OrderComponent = () => {
  const data = React.useContext(clientContext);
  const { addOrder } = data;

  const [newOrder, setNewOrder] = useState({
    fullname: "",
    email: "",
    address: "",
    city: "",
    country: "",
    zipcode: "",
    namecard: "",
    creditcardnumber: "",
    expmonth: "",
    expyear: "",
    cvv: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    for (let key in newOrder) {
      let value = newOrder[key];
      if (typeof value === "string") {
        if (!value.trim()) {
          alert("Заполните поля!");
          return;
        }
      }
    }

    addOrder(newOrder);
    setNewOrder({
      fullname: "",
      email: "",
      address: "",
      city: "",
      country: "",
      zipcode: "",
      namecard: "",
      creditcardnumber: "",
      expmonth: "",
      expyear: "",
      cvv: "",
    });
  };

  return (
    <Container>
      <div className="add-edit-page">
        <Tag>Добавить товар</Tag>
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={(e) =>
              setNewOrder({ ...newOrder, fullname: e.target.value })
            }
            value={newOrder.name}
            label="Введите название"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              setNewOrder({ ...newOrder, description: e.target.value })
            }
            value={newOrder.description}
            label="Введите описание"
            variant="standard"
          />
          <TextField
            type="number"
            onChange={(e) =>
              setNewOrder({ ...newOrder, price: parseInt(e.target.value) })
            }
            value={newOrder.price}
            label="Введите цену"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              setNewOrder({ ...newOrder, image: e.target.value })
            }
            value={newOrder.image}
            label="Введите фото"
            variant="standard"
          />
          <FormControl variant="standard">
            <InputLabel id="color-select-label">Выберите цвет</InputLabel>
            <Select
              onChange={(e) =>
                setNewOrder({ ...newOrder, color: e.target.value })
              }
              value={newOrder.color}
              label="Выберите цвет"
              labelId="color-select-label"
            >
              <MenuItem value="black">Чёрный</MenuItem>
              <MenuItem value="white">Белый</MenuItem>
              <MenuItem value="blue">Синий</MenuItem>
              <MenuItem value="pink">Розовый</MenuItem>
              <MenuItem value="yellow">Жёлтый</MenuItem>
              <MenuItem value="red">Красный</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard">
            <InputLabel id="memory-select-label">Выберите память</InputLabel>
            <Select
              onChange={(e) =>
                setNewOrder({ ...newOrder, memory: e.target.value })
              }
              value={newOrder.memory}
              label="Выберите память"
              labelId="memory-select-label"
            >
              <MenuItem value="256">256 GB</MenuItem>
              <MenuItem value="512">512 GB</MenuItem>
              <MenuItem value="1024">1024 GB</MenuItem>
              <MenuItem value="2048">2048 GB</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard">
            <InputLabel id="ram-select-label">Выберите ОЗУ</InputLabel>
            <Select
              onChange={(e) =>
                setNewOrder({ ...newOrder, ram: e.target.value })
              }
              value={newOrder.ram}
              label="Выберите ОЗУ "
              labelId="ram-select-label"
            >
              <MenuItem value="4">4 GB</MenuItem>
              <MenuItem value="8">8 GB</MenuItem>
              <MenuItem value="16">16 GB</MenuItem>
              <MenuItem value="32">32 GB</MenuItem>
              <MenuItem value="64">64 GB</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit" variant="outlined">
            Добавить
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default OrderComponent;
