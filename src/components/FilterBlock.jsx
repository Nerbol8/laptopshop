import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const FilterBlock = ({ getProducts }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const filter = new URLSearchParams(location.search);

  //! Состояния
  const [searchValue, setSearchValue] = useState(filter.get("q") || "");
  const [colorValue, setColorValue] = useState(filter.get("color") || "");
  const [sizeValue, setSizeValue] = useState(filter.get("ram") || "");
  const [memoryValue, setMemoryValue] = useState(filter.get("memory") || "");

  const handleFilters = (key, value) => {
    filter.set(key, value);
    navigate(`${location.pathname}?${filter.toString()}`);
    setSearchValue(filter.get("q") || "");
    setColorValue(filter.get("color") || "");
    setSizeValue(filter.get("size") || "");
    setMemoryValue(filter.get("memory") || "");
    getProducts();
  };

  const resetFilter = () => {
    setSearchValue("");
    setColorValue("");
    setSizeValue("");
    setMemoryValue("");
    navigate("/");
    getProducts();
  };

  return (
    <div className="filters-block">
      <TextField
        variant="standard"
        value={searchValue}
        onChange={(e) => handleFilters("q", e.target.value)}
        type="search"
        label="Живой поиск..."
      />
      <FormControl variant="standard">
        <InputLabel id="color-label">Выберите цвет</InputLabel>
        <Select
          value={colorValue}
          onChange={(e) => handleFilters("color", e.target.value)}
          label="Выберите цвет"
          labelId="color-label"
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
        <InputLabel id="color-label">Выберите ram</InputLabel>
        <Select
          value={sizeValue}
          onChange={(e) => handleFilters("ram", e.target.value)}
          label="Выберите ram"
          labelId="color-label"
        >
          <MenuItem value="256">256</MenuItem>
          <MenuItem value="512">512</MenuItem>
          <MenuItem value="1024">1024</MenuItem>
          <MenuItem value="2048">2048</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel id="color-label">Выберите ram</InputLabel>
        <Select
          value={memoryValue}
          onChange={(e) => handleFilters("memory", e.target.value)}
          label="Выберите ram"
          labelId="color-label"
        >
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="8">8</MenuItem>
          <MenuItem value="16">16</MenuItem>
          <MenuItem value="32">32</MenuItem>
          <MenuItem value="xxl">64</MenuItem>
        </Select>
      </FormControl>
      <Button variant="outlined" color="primary" onClick={resetFilter}>
        Сбросить
      </Button>
    </div>
  );
};

export default FilterBlock;
