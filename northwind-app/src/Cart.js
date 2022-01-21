import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class Cart extends Component {
  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((product) => (
              <tr key={product.product.id}>
                <th scope="row">{product.product.id}</th>
                <td>{product.product.productName}</td>
                <td>{product.quantity}</td>
                <td>
                  <Button
                    color="danger"
                    onClick={() => {
                      this.props.removeCard(product);
                    }}
                  >
                    Remove from cart
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
