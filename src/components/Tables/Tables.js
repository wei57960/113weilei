import React from 'react'
import { Table } from 'antd'
import './Tables.css';
export default class Tables extends React.Component {
    render() {
        const learningCourse = this.props.learningCourse
        const dataSource = this.props.dataSource
        const columns = this.props.columns
        //const dataSource2 = Object.keys(historicalData)
        //const columns2 = Object.values(historicalData)
        return (
            <div className='tables'>
                <strong><p>在学课程</p></strong>
                <Table dataSource={learningCourse} columns={columns} />
                <strong><p>历史数据</p></strong>
                <Table dataSource={dataSource} columns={columns} />
            </div>
        )
    }
}