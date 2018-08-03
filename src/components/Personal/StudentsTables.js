import React from 'react'
import { Table } from 'antd'
import * as Columns from '../../const/Columns'
import { browserHistory } from 'react-router'
export default class StudentTables extends React.Component {
    render() {
        const { studentList } = this.props
        return (<div>
            <Table dataSource={studentList.studentList} columns={Columns.studentListColums}
                onRow={(record) => { return { onClick: (e) => { browserHistory.push(`/students/${record.mid}`) } } }} />
        </div>
        )
    }
}
