import React from 'react'
import { Table } from 'antd'
import './Tables.css';
import * as Columns from '../../const/Columns'
import {browserHistory} from 'react-router'
export default class Tables extends React.Component {
    render() {
        const { learningCourse, dataSource } = this.props
        return (
            <div className='tables'>
                <strong><p>在学课程</p></strong>
                <Table dataSource={learningCourse} columns={Columns.TableListColums}
                    onRow={(record) => { return { onClick: (e) => {browserHistory.push(`/classdetail/${record.className}`) } } }} />
                <strong><p>历史数据</p></strong>
                <Table dataSource={dataSource} columns={Columns.TableListColums} />
            </div>
        )
    }
}