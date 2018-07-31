import React from 'react';
import { Avatar, Button } from 'antd';
import { Input } from 'antd';
import { Icon } from 'antd'
import './Header.css'
import * as api from '../../actions'
export default class Header extends React.Component {
    componentWillMount() {
        const dispatch = this.props.dispatch;
        api.getUserInfo(330900002, dispatch)
        api.getLessonInfo(1,dispatch)
    }
    render() {
        const item = this.props.item;
        return (
            <div className='header'>
                <div className='ava'><Avatar shape="square" style={{ width: '150px', height: '150px' }} src={item.hurl} /></div>
                <div className='lft'>
                    <p>三班人</p>
                    <p>学员编号：{item.number}</p>
                    <p>在学课程：{item.learningLesson}</p>
                    <p>入学时间：{item.enterDate}</p>
                </div>
                <div className='cnt'>
                    <p>历史付费额：{item.history_pay}</p>
                    <p>累计学习天数：{item.totalLearningDays}</p>
                    <p>最后登录时间：{item.lastLoginDate}</p>
                </div>
                <div className='rig'>
                    <div > <p >手机号码：</p> {item.tel}<Icon type="file-text" /></div>
                    <div ><p >微信号码：</p><Input placeholder="Basic usage" /> <Button>提交</Button></div>
                    <div > <p>备注：  </p> <Input placeholder="Basic usage" /> <Button>提交</Button></div>
                </div >
            </div >
        )
    }
}