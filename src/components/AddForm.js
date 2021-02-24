import React, { Component } from 'react'

class AddForm extends Component {
    render() {
        const {onAdd} = this.props
        return (
            <form onSubmit = {onAdd}>
                <input name="name" type="text" placeholder="Enter a food"></input>
                <input name="calories" type="number"></input>
                <input name="image" type="text" placeholder="Enter image url"></input>
                <button type="submit"> Add food </button>
            </form>
        )
    }
}

export default AddForm;
