import React, { Component } from 'react'

class TodaysFood extends Component {
    render() {
        const {items} = this.props;
        return (
            <div>
                <h1>Today's foods</h1>
                {
                    items.map((singleItem) => {
                        return (
                            <div>
                                <div>
                                    {singleItem.quantity} {singleItem.name} = {singleItem.calories * singleItem.quantity} cal  
                                </div>
                                <div>
                                    Total: {singleItem.quantity * singleItem.calories} cal
                                </div>                                  
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default TodaysFood;
