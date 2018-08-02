import React from 'react';
import { connect } from 'react-redux'
import Header from '../components/Header/Header'
import TabBar from '../components/TabBar/TabBar'
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
class Container extends React.Component {
    componentWillMount() {
        const { Actions } = this.props;
        Actions.getUserInfo(330900002)
        Actions.getLessonInfo(1)
        Actions.getSatisfiledList(1)
    }
    render() {
        const { tableList, headerList ,router} = this.props;
        return (
            <div>
                <Header item={headerList} />
                <TabBar tableList={tableList} router={router}/>
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