import React from 'react'
import './ButtonBox.css'
import Button from 'antd/lib/button';
export default class ButtonBox extends React.Component {
    render() {
        return (
            <div className='btn-box'>
                <div className='lft-btn'>
                    <Button>汇总</Button>
                    <Button style ={{background:'gray'}}>摄影课</Button>
                    <Button>绘画课</Button>
                </div>
                <div className='rig-btn'>
                    <Button>返回</Button>
                </div>
            </div>
        );
    }
}