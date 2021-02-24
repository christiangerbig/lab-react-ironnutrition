import React, { Component } from 'react'

class SearchFood extends Component {
    render() {
        const {myChange} = this.props;
        return (
            <div>
                <input onChange={myChange} type="text" placeholder="Search food name"/>
            </div>
        )
    }
}

export default SearchFood;
