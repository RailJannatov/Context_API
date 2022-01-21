import { Container, Row, Col } from "reactstrap";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import React, { Component } from "react";
import alertify from "alertifyjs";
import { Switch, Route } from "react-router-dom";
import Cart from "./Cart";
import NotFound from "./NotFound";
import UserForm from "./UserForm";
import MultiForm from "./MultiForm";
import Order from "./Order";

export default class App extends Component {
  state = { currentCategory: "", products: [], card: [], orders: [] };
  componentDidMount() {
    this.getProducts();
    this.getAnotherApi();
  }
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };
  getCard = (product) => {
    let yeniKart = this.state.card;
    let varKart = yeniKart.find((x) => x.product.id === product.id);
    if (varKart) {
      varKart.quantity++;
    } else {
      yeniKart.push({ product: product, quantity: 1 });
    }
    this.setState({ card: yeniKart });
    alertify.success(product.productName + " Added To Cart");
  };

  removeCard = (obj) => {
    let removedItemInCart = this.state.card.find(
      (x) => x.product.id === obj.product.id
    );
    let indexItem = this.state.card.indexOf(removedItemInCart);
    let yeniArray = [...this.state.card];
    yeniArray.splice(indexItem, 1);
    this.setState({ card: yeniArray });
    alertify.error(obj.product.productName + " is deleted");
  };

  resetCard = () => {
    let removeArray = [...this.state.card];
    removeArray.splice(0, removeArray.length);
    this.setState({ card: removeArray });
  };
  getAnotherApi = () => {
    const url = "https://delivery-api.bolt.eu/business/getOrderTrackerUrl";
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ orders: data }));
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  render() {
    let productInfo = { title: "ProductList" };
    let categoryInfo = { title: "CategoryList" };
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Navi
                card={this.state.card}
                removeCard={this.removeCard}
                resetCard={this.resetCard}
              />
            </Row>
            <Row>
              <Col md={4}>
                <CategoryList
                  currentCategory={this.state.currentCategory}
                  changeCategory={this.changeCategory}
                  info={categoryInfo}
                />
              </Col>
              <Col md={8}>
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={(props) => (
                      <ProductList
                        products={this.state.products}
                        getCard={this.getCard}
                        currentCategory={this.state.currentCategory}
                        info={productInfo}
                      />
                    )}
                  />
                  <Route
                    path="/Cart"
                    render={(props) => (
                      <Cart
                        cart={this.state.card}
                        removeCard={this.removeCard}
                      />
                    )}
                  />
                  <Route path="/UserForm" component={UserForm} />
                  <Route path="/MultiForm" component={MultiForm} />
                  <Route
                    path="/Order"
                    render={(props) => <Order orders={this.state.orders} />}
                  />
                  <Route path="/NotFound" component={NotFound} />
                </Switch>
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}
