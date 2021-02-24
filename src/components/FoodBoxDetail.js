import React, { Component } from 'react';

class FoodBoxDetail extends Component {

state = {
    quantity: 1
}

handleQuantity = (event) => {
    this.setState({
        quantity: event.target.value
    })
}

  render() {
    const {singleFood, onItemAdd} = this.props;
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={singleFood.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong> {singleFood.name} </strong> <br />
                <small> {singleFood.calories} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input onChange={this.handleQuantity} className="input" type="number" value={this.state.quantity} />
              </div>
              <div className="control">
                <button onClick={() => { onItemAdd(singleFood, this.state.quantity) }} className="button is-info">+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBoxDetail;
