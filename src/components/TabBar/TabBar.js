import React from 'react'
import './TabBar.css'
import { Tabs, Table } from 'antd'
import ButtonBox from '../ButtonBox/ButtonBox'
import Tables from '../Tables/Tables'
import * as Columns from '../../const/Columns'
const TabPane = Tabs.TabPane;
// function callback(key) {
//     // console.log(key) onChange={callback}
// }

export default class TabBar extends React.Component {
    render() {
        const { tableList, router } = this.props;
        return (
            <div className='tab-bar-top'>
                <div className='tab-bar'>
                    <Tabs defaultActiveKey="1" >
                        <TabPane tab='课程信息' key='1'>
                            <ButtonBox router={router} />
                            <Tables learningCourse={tableList.learningCourse} dataSource={tableList.dataSource} />
                        </TabPane>
                        <TabPane tab='满意度反馈' key='2'>
                            <ButtonBox router={router} />
                            <Table dataSource={tableList.satisfiledList} columns={Columns.satisfiledList} />
                        </TabPane>
                    </Tabs>
                </div>
            </div >
        )
    }
}