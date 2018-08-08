import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classActions from '../actions/homework'
import ItemList from '../component/HomeWork/ItemList'
import { Tabs } from 'antd'
import { Input, Select } from 'antd'
const InputGroup = Input.Group;
const Search = Input.Search;
const Option = Select.Option;
const TabPane = Tabs.TabPane;

class HomeWork extends Component {
    componentDidMount() {
        const { classActions } = this.props
        classActions.feachHomeworkUserUnReview({ token: 1, isReviewed: 0 }) //token ,0 获取全部作业 1 只读取当前老师作业
        classActions.feachHomeworkUserReview({ token: 1, isReviewed: 1 }) // isReviewed  0 读取为点评作业 1 读取已点评作业
        classActions.feachHomeworkAllUnreview({ token: 0, isReviewed: 0 })
        classActions.feachHomeworkAllReview({ token: 0, isReviewed: 1 })
    }
    render() {
        const { homeworkList, list, classActions } = this.props;
        const mapEntities = (ids, entity) => {
            const {
                classes,
                comments,
                homeworks,
                teachers
            } = entity;
            const data = ids.map(id => {
                const {
                    classInfo: classId,
                    teacherInfo: teacherId,
                    comments: commentIdList
                } = homeworks[id];
                const _comments = commentIdList.map(id => comments[id])
                return {
                    ...homeworks[id],
                    classInfo: classes[classId],
                    teacherInfo: teachers[teacherId],
                    comments: _comments
                }
            })
            return data;
        }
        return (
            <div>

                <InputGroup compact >
                    <Select defaultValue="mid">
                        <Option value="mid">根据mid搜索</Option>
                        <Option value="姓名">根据姓名搜索</Option>
                    </Select>
                    <Search
                        style={{ width: 200 }}
                        enterButton
                    />
                </InputGroup>
                <Tabs tabBarStyle={{ padding: '0 20px' }} defaultActiveKey="1" >
                    <TabPane tab="我的未点评" key='1' >
                        <ItemList list={mapEntities(list.userUnReview, homeworkList.userUnReview)} classActions={classActions} />
                    </TabPane>
                    <TabPane tab="我的点评历史" key='2' >
                        <ItemList list={mapEntities(list.userReview, homeworkList.userReview)} classActions={classActions} />
                    </TabPane>
                    <TabPane tab="全部未点评" key='3'>
                        <ItemList list={mapEntities(list.allUnreview, homeworkList.allUnreview)} classActions={classActions} />
                    </TabPane>
                    <TabPane tab="全部已点评" key='4'>
                        <ItemList list={mapEntities(list.allReview, homeworkList.allReview)} classActions={classActions} />
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {
        homeWorks: {
            homeworkList,
            list
        }

    } = state
    return {
        homeworkList,
        list

    }
}

const mapDispatchToProps = dispatch => {
    return {
        classActions: bindActionCreators(classActions, dispatch),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(HomeWork)