import React from 'react'
import './TabBar.css'
import Button from 'antd/lib/button';
export default class TabBar extends React.Component {

    render() {
        return (
            <div className='tab-bar-top'>
                <div className='tab-bar'>
                    <div className='sel-btn'><Button ><strong>课程信息</strong></Button></div>
                    <Button>满意度反馈</Button>
                </div>
            </div >
        )
    }
}