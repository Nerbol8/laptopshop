import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { adminContext } from "../contexts/AdminContext";
import { useNavigate, useParams } from "react-router-dom";
const EditProductPage = () => {
  const data = React.useContext(adminContext);
  const { getProductsToEdit, productToEdit, saveEditedPruduct } = data;

  const params = useParams();
  const navigate = useNavigate();

  const [editedProduct, setEditedProduct] = useState(productToEdit);

  const handleSubmit = (event) => {
    event.preventDefault();

    for (let key in editedProduct) {
      let value = editedProduct[key];
      if (typeof value === "string") {
        if (!value.trim()) {
          alert("Заполните поля");
          return;
        }
      }
    }
    saveEditedPruduct(editedProduct);
    navigate("/admim-panel");
  };

  useEffect(() => {
    getProductsToEdit(params.id);
  }, []);

  useEffect(() => {
    setEditedProduct(productToEdit);
  }, [productToEdit]);

  if (!editedProduct) {
    return <h2>Loading...</h2>;
  }

  return (
    <Container>
      <div className="add-edit-page">
        <h2>Добавить товар</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, name: e.target.value })({
                ...editedProduct,
                name: e.target.value,
              })
            }
            value={editedProduct.name}
            label="Введите название"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, description: e.target.value })({
                ...editedProduct,
                description: e.target.value,
              })
            }
            value={editedProduct.description}
            label="Введите описание"
            variant="standard"
          />
          <TextField
            type="number"
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, price: e.target.value })({
                ...editedProduct,
                price: parseInt(e.target.value),
              })
            }
            value={editedProduct.price}
            label="Введите цену"
            variant="standard"
          />
          <TextField
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, image: e.target.value })
            }
            value={editedProduct.image}
            label="Введите фото"
            variant="standard"
          />
          <FormControl variant="standard">
            <InputLabel id="color-select-label">Выберите цвет</InputLabel>
            <Select
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, color: e.target.value })({
                  ...editedProduct,
                  color: e.target.value,
                })
              }
              value={editedProduct.color}
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
                setEditedProduct({ ...editedProduct, memory: e.target.value })({
                  ...editedProduct,
                  memory: e.target.value,
                })
              }
              value={editedProduct.memory}
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
                setEditedProduct({ ...editedProduct, ram: e.target.value })({
                  ...editedProduct,
                  ram: e.target.value,
                })
              }
              value={editedProduct.ram}
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

export default EditProductPage;
