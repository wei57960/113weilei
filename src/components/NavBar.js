import React from 'react';
import Button from '../Button.js'
export default class ItemList extends React.Component {
    render() {
        const { items } = this.props
        return (
            <div className="end">
                {items.map((item,idex)=>{
                     return <Button className="idx-btn" data={item} key={idex}></Button>
                })}
            </div>
        )
    }
}