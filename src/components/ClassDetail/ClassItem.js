import React from 'react'
import { Table } from 'antd'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as actionCreators from '../../actions';
import * as Columns from '../../const/Columns'
import './ClassItem.css'
class ClassItem extends React.Component {
    componentDidMount() {
        const { Actions } = this.props;
        Actions.getClassInfo(1)
    }
    render() {
        const { classDetail } = this.props
        const item = classDetail.Item
        return (
            <div>
                <div className='headerText'>
                    <span className='textItem'>班级：{item.name} 班级ID:{item.id}</span>
                    <span className='textItem'>老师:{item.realTeacherName}/ID:{item.realTeacherId}/微信:{item.realTeacherWechat}</span>
                    <span className='textItem'>负责员工：{item.virtulTeacherName}/ID:{item.virtulTeacherId}/微信:{item.virtulTeacherWechat}</span>
                </div>
                <Table dataSource={classDetail.Detail} columns={Columns.classDetailColums} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { classDetail } = state;
    return { classDetail };
}

const mapDispatchToProps = dispatch => {
    return {
        Actions: bindActionCreators(actionCreators, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ClassItem);