import React from 'react'
import { Table } from 'antd'
import './Tables.css';
import * as Columns from '../../const/Columns'
export default class Tables extends React.Component {
    render() {
        const { learningCourse } = this.props
        const { dataSource } = this.props
        return (
            <div className='tables'>
                <strong><p>在学课程</p></strong>
                <Table dataSource={learningCourse} columns={Columns.TableListColums} />
                <strong><p>历史数据</p></strong>
                <Table dataSource={dataSource} columns={Columns.TableListColums} />
            </div>
        )
    }
}