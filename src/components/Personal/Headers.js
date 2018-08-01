import React from 'react'
import { Button, Input, Menu } from 'antd'
export default class Headers extends React.Component {
    render() {
        return (
            <div className='btn-box'>
                <div className='lft-btn'>
                    <Button>汇总</Button>
                    <Button style={{ background: 'gray' }}>摄影课</Button>
                    <Button>绘画课</Button>
                </div>
                <div className='rig-btn'>
                    <Button>mid</Button>
                    <Input style={{ width: 300 }} placeholder="Basic usage" />
                    <Button>搜索</Button>
                </div>
            </div>
        )
    }
}