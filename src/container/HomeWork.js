import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classActions from '../actions/homework'
import ItemList from '../component/HomeWork/ItemList'
import { Tabs } from 'antd'

const TabPane = Tabs.TabPane;

class HomeWork extends Component {
    componentDidMount() {
        const { classActions } = this.props
        classActions.feachHomeworkInfo({ token: 0, isReviewed: 0 }) //token ,0 获取全部作业 1 只读取当前老师作业
        // isReviewed  0 读取为点评作业 1 读取已点评作业
    }
    render() {
        const { homeWork, list } = this.props;
        const homeWorkList = homeWork.map(id => list.homework[id])
        return (
            <Tabs tabBarStyle={{ padding: '0 20px' }} defaultActiveKey="1">
                <TabPane tab="我的未点评" key='1'>
                    <ItemList list={homeWorkList} />
                </TabPane>
                <TabPane tab="我的点评历史" key='2'>
                    <ItemList list={homeWorkList} />
                </TabPane><TabPane tab="全部未点评" key='3'>
                    <ItemList list={homeWorkList} />
                </TabPane><TabPane tab="全部已点评" key='4'>
                    <ItemList list={homeWorkList} />
                </TabPane>
            </Tabs>
        )
    }
}

const mapStateToProps = state => {
    const {
        homeWorks: {
            homeWork,
            list
        }
    } = state
    return {
        homeWork,
        list
    }
}

const mapDispatchToProps = dispatch => {
    return {
        classActions: bindActionCreators(classActions, dispatch),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(HomeWork)