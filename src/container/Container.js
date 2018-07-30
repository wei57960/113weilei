import React from 'react';
import { connect } from 'react-redux'
import Header from '../components/Header/Header'
import TabBar from '../components/TabBar/TabBar'
import ButtonBox from '../components/ButtonBox/ButtonBox'
import Tables from '../components/Tables/Tables'
class Container extends React.Component {
    render() {
        const { tableList, headerList } = this.props;
        return (
            <div>
                <Header Items={headerList.Items} />
                <TabBar />
                <ButtonBox />
                <Tables learningCourse={tableList.learningCourse} dataSource={tableList.dataSource} columns={tableList.columns} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { tableList, headerList } = state;
    return { tableList, headerList };
}


export default connect(mapStateToProps)(Container); 
