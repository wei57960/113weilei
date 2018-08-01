import React from 'react'
import { Table } from 'antd'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as actionCreators from '../../actions';

class ClassItem extends React.Component {
    componentDidMount() {
        const { Actions } = this.props;
        Actions.getClassInfo(1)
    }
    render() {
        const { classDetail } = this.props
        console.log(classDetail+'1111111111111')
        return (
            <Table dataSource={classDetail.Detail} columns={classDetail.columns} />
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
