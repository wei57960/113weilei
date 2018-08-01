import React from 'react'
import Headers from './Headers'
import StudentsTables from './StudentsTables'
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions';
import { connect } from 'react-redux'
import './Personal.css'
class Person extends React.Component {
    componentWillMount() {
        const { Actions } = this.props;
        Actions.getStudentList()
        // Actions.getClassInfo(1)
    }
    render() {
        const { studentList } = this.props
        return (
            <div className='studentList'>             
                <Headers/>         
                <StudentsTables studentList={studentList}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { studentList } = state;
    return { studentList };
}

const mapDispatchToProps = dispatch => {
    return {
        Actions: bindActionCreators(actionCreators, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Person);