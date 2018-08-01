import React from 'react';
import { connect } from 'react-redux'
import Header from '../components/Header/Header'
import TabBar from '../components/TabBar/TabBar'
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import Personal from './Personal';

class Container extends React.Component {
    componentWillMount() {
        const { Actions } = this.props;
        Actions.getUserInfo(330900002)
        Actions.getLessonInfo(1)
        // Actions.getStudentList()
    }
    render() {
        const { tableList, headerList } = this.props;
        return (
            <div>
                <Header item={headerList}  />
                <TabBar tableList={tableList} />
                <Personal/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { tableList, headerList } = state;
    return { tableList, headerList };
}

const mapDispatchToProps = dispatch => {
    return {
        Actions: bindActionCreators(actionCreators, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);