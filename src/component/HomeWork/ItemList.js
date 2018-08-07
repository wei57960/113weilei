import React, { Component } from 'react'
import Item from './Item'
export default class ItemList extends Component {
    render() {
        const { list } = this.props
        return (
            <div>
                {list.map((item, idx) => {
                    return <Item key={idx} item={item}  />
                })}
            </div>
            
        )
    }
} 