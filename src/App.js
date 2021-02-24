import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from "./components/FoodBox";
import TodaysFood from "./components/TodaysFood";



class App extends Component {

  state = {
    totalItems: []
  }

  handleAddItems = (food, quantity) => {
    let myItem = {
      name: food.name,
      calories: food.calories,
      quantity: quantity
    }

    this.setState({
      totalItems: [...this.state.totalItems, myItem]
    })

  }

  render() {
    return (
      <div className="App">
        <div className="is-flex is-justify-content-space-around">
          <div>
            <FoodBox onItemAdd={this.handleAddItems}></FoodBox>
          </div>
          <div>
            <TodaysFood items={this.state.totalItems}></TodaysFood>
          </div>
        </div>
      </div>
    );
  }
 }

export default App;
