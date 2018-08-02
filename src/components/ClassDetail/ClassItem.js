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
                    班级：{item.name} 班级ID:{item.id}
                    老师：负责员工：
                </div>
                <Table dataSource={classDetail.Detail} columns={Columns.classDetailColums} />
            </div>
        )
    }
}// .classDetail.Item.real_teacher.name {item.virtual_teacher.id}  

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