import React from 'react'
import { Table } from 'antd'
export default class StudentTables extends React.Component {
    render() {
        const { studentList } = this.props
        return (
            <Table dataSource={studentList.studentList} columns={studentList.columns} />
        )
    }
}
