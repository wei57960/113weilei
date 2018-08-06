import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import userActions from '../actions/user'
import StudentTable from '../component/StudentTable/StudentTable'
import StudentSearcher from '../component/StudentSearcher/StudentSearcher'
import satisfied from '../reducers/satisfied';

class StudentsLib extends Component {
  componentDidMount() {
    const { userActions } = this.props
    userActions.fetchStudentList()
  }
  render() {
    const { studentList, entities, filterOption } = this.props;
    const Lists = studentList.map(mid => {
      const student = entities.students[mid]
      return { ...student }
    })
    const newStudentList = getAfterFilterList(Lists, filterOption)
    const options = [
      {
        value: 'mid',
        text: '根据mid搜索'
      },
      {
        value: 'nick',
        text: '根据名字搜索'
      }
    ]
    return (
      <div>
        <StudentSearcher options={options} onSearch={userActions.searchStudentListByOption} />
        <StudentTable list={newStudentList} />
      </div>
    )
  }
}
const getAfterFilterList = (list, filter) => {
  if (!filter) return list
  const { keyName, value } = filter
  return list.filter(item => {
    // console.log(item[keyName], value)
    if (`${item[keyName]}` === value || value === '') {
      return true
    }
    return false
  })
}
const mapStateToProps = (state, ownProps) => {
  const {
    studentLib: {
      list: studentList,
      filterOption
    },
    entities
  } = state
  return {
    //studentList: getAfterFilterList(studentList, filterOption),
    entities,
    studentList,
    filterOption
  }
}
const mapDispatchToProps = dispatch => {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(StudentsLib)