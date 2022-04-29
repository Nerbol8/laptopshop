import { Backspace } from "@mui/icons-material";
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
  const [memoryValue, setMemoryValue] = useState(filter.get("memory") || "");
  const [ramValue, setRamValue] = useState(filter.get("ram") || "");

  const handleFilters = (key, value) => {
    filter.set(key, value);
    navigate(`${location.pathname}?${filter.toString()}`);
    setSearchValue(filter.get("q") || "");
    setColorValue(filter.get("color") || "");
    setMemoryValue(filter.get("memory") || "");
    setRamValue(filter.get("ram") || "");
    getProducts();
  };

  const resetFilter = () => {
    setSearchValue("");
    setColorValue("");
    setMemoryValue("");
    setRamValue("");
    navigate("/");
    getProducts();
  };

  return (
    <div className="filters-block">
      <TextField
        variant="outlined"
        value={searchValue}
        onChange={(e) => handleFilters("q", e.target.value)}
        type="search"
        label="Живой поиск..."
      />
      <FormControl variant="outlined">
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
      <FormControl variant="outlined">
        <InputLabel id="color-label">Выберите память</InputLabel>
        <Select
          value={memoryValue}
          onChange={(e) => handleFilters("memory", e.target.value)}
          label="Выберите память"
          labelId="color-label"
        >
          <MenuItem value="256">256 GB</MenuItem>
          <MenuItem value="512">512 GB</MenuItem>
          <MenuItem value="1024">1024 GB</MenuItem>
          <MenuItem value="2048">2048 GB</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel id="color-label">Выберите ram</InputLabel>
        <Select
          value={ramValue}
          onChange={(e) => handleFilters("ram", e.target.value)}
          label="Выберите ram"
          labelId="color-label"
        >
          <MenuItem value="4">4 GB</MenuItem>
          <MenuItem value="8">8 GB</MenuItem>
          <MenuItem value="16">16 GB</MenuItem>
          <MenuItem value="32">32 GB</MenuItem>
          <MenuItem value="xxl">64 GB</MenuItem>
        </Select>
      </FormControl>
      <Button variant="outlined" color="inherit" onClick={resetFilter}>
        <Backspace />
      </Button>
    </div>
  );
};

export default FilterBlock;
