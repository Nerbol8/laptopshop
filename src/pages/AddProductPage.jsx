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
import { adminContext } from "../contexts/AdminContext";
import { mobile } from "../responsive";

const Tag = styled.h2`
  width: 700;
  ${mobile({ backgroundColor: "red" })}
`;

const AddProductPage = () => {
  const data = React.useContext(adminContext);
  const { addProduct } = data;

  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    ram: "",
    memory: "",
    color: "",
    feedbacks: [],
    likes: 0,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    for (let key in newProduct) {
      let value = newProduct[key];
      if (typeof value === "string") {
        if (!value.trim()) {
          alert("Заполните поля!");
          return;
        }
      }
    }

    addProduct(newProduct);
    setNewProduct({
      name: "",
      description: "",
      price: "",
      image: "",
      ram: "",
      memory: "",
      color: "",
    });
  };

  return (
    <Container>
      <div className="add-edit-page">
        <Tag>Добавить товар</Tag>
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            value={newProduct.name}
            label="Введите название"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
            value={newProduct.description}
            label="Введите описание"
            variant="standard"
          />
          <TextField
            type="number"
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: parseInt(e.target.value) })
            }
            value={newProduct.price}
            label="Введите цену"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
            value={newProduct.image}
            label="Введите фото"
            variant="standard"
          />
          <FormControl variant="standard">
            <InputLabel id="color-select-label">Выберите цвет</InputLabel>
            <Select
              onChange={(e) =>
                setNewProduct({ ...newProduct, color: e.target.value })
              }
              value={newProduct.color}
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
                setNewProduct({ ...newProduct, memory: e.target.value })
              }
              value={newProduct.memory}
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
            <InputLabel id="ram-select-label">Выберите Озу</InputLabel>
            <Select
              onChange={(e) =>
                setNewProduct({ ...newProduct, ram: e.target.value })
              }
              value={newProduct.ram}
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

export default AddProductPage;
