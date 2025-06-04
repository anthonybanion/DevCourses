import { useState } from "react";
import { Conteiner } from "react-bootstrap";

function Crud() {
  const [products, setProduct] = useState([]);
  const [editProducts, setEditProducts] = useState(null);
  const [idCounter, setIdCounter] = useState(1);

  const addProduct = (product) => {
    const newProduct = { ...product, id: idCounter };
    setProduct([...products, newProduct]);
    setIdCounter(idCounter + 1);
  };

  const updateProduct = (product) => {
    setProduct(products.map((p) => (p.id === product.id ? product : p)));
    setEditProducts(null);
  };

  const deleteProduct = (id) => {
    setProduct(products.filter((p) => p.id !== id));
  };

  const editProduct = (product) => {
    setEditProducts(product);
  };

  return (
    <Container className="my-4">
      <h2>Product Management</h2>
      <ProducForm
        onSubmit={editProducts ? updateProduct : addProduct}
      ></ProducForm>
    </Container>
  );
}

export default Crud;
