import { Table, Button } from "react-bootstrap";

function ProductList({ products, onEdit, onDelete }) {
  if (products.length === 0) {
    return <p>No products available.</p>;
  }
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th style={{ width: "150px" }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
              <Button variant="warning" onClick={() => onEdit(product)}>
                Edit
              </Button>{" "}
              <Button variant="danger" onClick={() => onDelete(product.id)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ProductList;
