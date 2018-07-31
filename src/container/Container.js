import React from 'react';
import { connect } from 'react-redux'
import Header from '../components/Header/Header'
import TabBar from '../components/TabBar/TabBar'

class Container extends React.Component {
    render() {
        const { tableList, headerList } = this.props;
        const { dispatch } = this.props;
        return (
            <div>
                <Header item={headerList} dispatch={dispatch} />
                <TabBar tableList={tableList} />
                
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
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);

