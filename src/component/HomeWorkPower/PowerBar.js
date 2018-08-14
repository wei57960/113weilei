import React from 'react'
import { Button } from 'antd'
import './index.css'
export default class PowerBar extends React.Component {
    render() {
        if (!this.props.data) return null;
        const { data: {
            powerList: powerList
        } } = this.props;
        return (
            <div>
                <div><strong>点评权限</strong></div>
                <div className='powerbar'>
                    {powerList.map((i, index) => {
                        return <div className='item-title' key={index}>{i.title}
                            <Button type='default' style={{ float: 'right' }}>权限管理</Button>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}