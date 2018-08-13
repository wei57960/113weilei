import React from 'react'
import { connect } from 'react-redux'
import PowerBar from '../component/HomeWorkPower/PowerBar'
import PowerDepartment from '../component/HomeWorkPower/PowerDepartment'
import  powerActions from '../actions/homeworkPower'
import { bindActionCreators } from '../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';
class HomeWorkPower extends React.Component {
    render() {
        const { powerDetail, powerDepartment, powerActions } = this.props
        return (
            <div>
                <PowerBar data={powerDetail} />
                <PowerDepartment data={powerDepartment} powerActions={powerActions} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const {
        homeworkPower: {
            powerDetail,
            powerDepartment
        }
    } = state
    return {
        powerDetail,
        powerDepartment
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        powerActions: bindActionCreators(powerActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeWorkPower)