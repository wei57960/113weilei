import React from 'react'
import { Table } from 'antd'
import * as Columns from '../../const/Columns'
import { Link } from 'react-router'
export default class StudentTables extends React.Component {
    render() {
        const { studentList } = this.props
        return (<div>
            <Link to='/students/1001' ><Table dataSource={studentList.studentList} columns={Columns.studentListColums} />
            </Link>
        </div>
        )
    }
}
