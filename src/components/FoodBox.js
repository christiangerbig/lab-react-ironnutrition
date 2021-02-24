import React, { Component } from 'react';
import foods from '../foods.json';
import FoodBoxDetail from './FoodBoxDetail';
import AddForm from './AddForm';
import SearchFood from './SearchFood';

class FoodBox extends Component {
  state = {
    foods: foods,
    showForm: false,
    filteredFoods: foods,
  };

  handleShowForm = () => {
    this.setState({ showForm: true });
  };

  handleAddForm = (event) => {
    event.preventDefault();
    let name = event.target.name.value;
    let calories = event.target.calories.value;
    let image = event.target.image.value;
    let newFood = {
      name,
      calories,
      image,
    };

    this.setState({
      showForm: false,
      foods: [newFood, ...this.state.foods],
      filteredFoods: [newFood, ...this.state.filteredFoods],
    });
  };

  handleChange = (event) => {
    let searchText = event.target.value.toLowerCase();
    let filteredList = this.state.foods.filter((singleFood) => {
      return singleFood.name.toLowerCase().includes(searchText);
    });

    this.setState({
      filteredFoods: filteredList,
    });
  };

  render() {
    const { foods, filteredFoods, showForm } = this.state;

    return (
      <div>
        <h1>Food</h1>
        <SearchFood myChange={this.handleChange}></SearchFood>
        {showForm ? (
          <AddForm onAdd={this.handleAddForm}></AddForm>
        ) : (
          <button onClick={this.handleShowForm}> Show </button>
        )}
        {filteredFoods.map((singleFood, index) => {
          return (
            <FoodBoxDetail
              key={index}
              onItemAdd={this.props.onItemAdd}
              singleFood={singleFood}
            />
          );
        })}
      </div>
    );
  }
}

export default FoodBox;
