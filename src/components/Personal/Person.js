import React from 'react'
import Headers from './Headers'
import StudentsTables from './StudentsTables'
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions';
import { connect } from 'react-redux'
import './Personal.css'

class Person extends React.Component {
    componentDidMount() {
        const { Actions } = this.props;
        Actions.getStudentList()
    }
    render() {
        const { studentList ,Actions} = this.props
        return (
            <div className='studentList'>
                <Headers Actions={Actions}/>
                <StudentsTables studentList={studentList} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { studentList } = state;
    return { studentList  };
}

const mapDispatchToProps = dispatch => {
    return {
        Actions: bindActionCreators(actionCreators, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Person);