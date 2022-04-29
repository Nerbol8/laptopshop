import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { admimContext, adminContext } from "../contexts/AdminContext";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables(props) {
  const data = React.useContext(adminContext);
  const { deleteProduct } = data;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>№</StyledTableCell>
            <StyledTableCell align="right">Название товара </StyledTableCell>
            <StyledTableCell align="right">Описание</StyledTableCell>
            <StyledTableCell align="right">Цена</StyledTableCell>
            <StyledTableCell align="right">Картинка</StyledTableCell>
            <StyledTableCell align="right">ОЗУ</StyledTableCell>
            <StyledTableCell align="right">Память</StyledTableCell>
            <StyledTableCell align="right">Цвет</StyledTableCell>
            <StyledTableCell align="right">Изменить</StyledTableCell>
            <StyledTableCell align="right">Удалить</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.products.map((item, index) => (
            <StyledTableRow key={item.id}>
              <StyledTableCell component="th" scope="row">
                {index + 1}
              </StyledTableCell>
              <StyledTableCell align="right">{item.name}</StyledTableCell>
              <StyledTableCell align="right">
                {item.description}
              </StyledTableCell>
              <StyledTableCell align="right">{item.price}Сом</StyledTableCell>
              <StyledTableCell align="right">
                <img width={100} src={item.image} />
              </StyledTableCell>
              <StyledTableCell align="right">{item.ram}GB</StyledTableCell>
              <StyledTableCell align="right">{item.memory}GB</StyledTableCell>
              <StyledTableCell align="right">{item.color}</StyledTableCell>
              {/* <StyledTableCell align="right">{item.memory}</StyledTableCell> */}

              <StyledTableCell align="right">
                <Link to={`/admin-panel-edit/${item.id}`}>
                  <Button color="inherit" variant="outlined">
                    EDIT
                  </Button>
                </Link>
              </StyledTableCell>

              <StyledTableCell align="right">
                <Button
                  color="inherit"
                  variant="outlined"
                  onClick={() => deleteProduct(item.id)}
                >
                  DEL
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
