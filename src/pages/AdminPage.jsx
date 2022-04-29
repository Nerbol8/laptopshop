import { Container } from "@mui/material";
import React, { useEffect } from "react";
import AdminTable from "../components/AdminTable";
import { adminContext } from "../contexts/AdminContext";
import { clientContext } from "../contexts/ClientContext";
const AdminPage = () => {
  const data = React.useContext(adminContext);
  const { getProducts, products } = data;
  const datat = React.useContext(clientContext);
  const { cartCount, authWithGoogle, user, logOut } = datat;

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <div>
        <h1>All products you are</h1>
        <AdminTable products={products} />
      </div>
    </Container>
  );
};

export default AdminPage;
