import React, { Component } from "react";

export default class Order extends Component {
  render() {
    return (
      <div>
        <ul>
          {
            /* {this.props.orders.map((e) => (
            <li>a</li>
          ))} */ console.log(this.props.orders)
          }
        </ul>
      </div>
    );
  }
}
