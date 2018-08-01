import React from 'react'
import './TabBar.css'
import { Tabs } from 'antd'
import ButtonBox from '../ButtonBox/ButtonBox'
import Tables from '../Tables/Tables'
const TabPane = Tabs.TabPane;

function callback(key) {
    console.log(key)
}

export default class TabBar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { tableList } = this.props;
        return (
            <div className='tab-bar-top'>
                <div className='tab-bar'>
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab='课程信息' key='1'>
                            {/* <div className='sel-btn'><Button ><strong>课程信息</strong></Button></div> */}
                            <ButtonBox />
                            <Tables learningCourse={tableList.learningCourse} dataSource={tableList.dataSource} columns={tableList.columns} />
                        </TabPane>
                        <TabPane tab='课程信息' key='2'>
                        </TabPane>
                    </Tabs>
                </div>
            </div >
        )
    }
}