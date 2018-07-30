import React from 'react';
import { Avatar, Button } from 'antd';
import { Input } from 'antd';
import { Icon } from 'antd'
import './Header.css'
export default class Header extends React.Component {
    render() {
        const item = this.props.Items;
        return (
            <div className='header'>
                <div className='ava'><Avatar shape="square" style={{ width: '150px', height: '150px' }} src={require('../../images/111.jpg')} /></div>
                <div className='lft'>
                    <p>{item.class}</p>
                    <p>学员编号：{item.number}</p>
                    <p>在学课程：{item.course}</p>
                    <p>入学时间：{item.startTime}</p>
                </div>
                <div className='cnt'>
                    <p>历史付费额：{item.historicalDays}</p>
                    <p>累计学习天数：{item.learningDays}</p>
                    <p>最后登录时间：{item.lastTime}</p>
                </div>
                <div className='rig'>
                    <div > <p >手机号码：</p> <Input placeholder="Basic usage" /><Icon type="file-text" /></div>
                    <div ><p >微信号码：</p><Input placeholder="Basic usage" /> <Button>提交</Button></div>
                    <div > <p>备注：  </p> <Input placeholder="Basic usage" /> <Button>提交</Button></div>
                </div >
            </div >
        )
    }
}