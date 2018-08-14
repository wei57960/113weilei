import React from 'react'
import { connect } from 'react-redux'
import PowerBar from '../component/HomeWorkPower/PowerBar'
import HandleStaffPower from '../component/HomeWorkPower/HandleStaffPower'
import DepartmentTree from '../component/HomeWorkPower/DepartmentTree'
import DepartmentStaff from '../component/HomeWorkPower/DepartmentStaff'
import powerActions from '../actions/homeworkPower'
import { bindActionCreators } from 'redux';
class HomeWorkPower extends React.Component {
    render() {
        const { powerDetail, powerDepartment, powerActions, bloc, person, filterOption } = this.props
        return (
            <div>
                <PowerBar data={powerDetail} />
                <HandleStaffPower data={powerDetail} powerActions={powerActions} filterOption={filterOption} />
                <DepartmentTree bloc={bloc} powerDetail={powerDetail} powerActions={powerActions} />
                <DepartmentStaff bloc={bloc} powerDetail={powerDetail} person={person} powerActions={powerActions} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const {
        homeworkPower: {
            powerDetail,
            powerDepartment,
            bloc,
            person,
            filterOption
        }
    } = state
    return {
        powerDetail,
        powerDepartment,
        bloc,
        person,
        filterOption
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        powerActions: bindActionCreators(powerActions, dispatch)
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(HomeWorkPower)