import React from 'react'
import { Icon, Tree, Input } from 'antd'
import { Button } from 'antd'

import './index.css'
import { generateShowHourMinuteSecond } from '../../../node_modules/antd/lib/time-picker';
export default class PowerDepartment extends React.Component {

    state = {
        isActive: false,
        selectedKeys: 3000
    }

    onSelect = (selectedKeys, info) => {
        const isActive = this.state
        // console.log('selected', selectedKeys, info);
        // this.showStaff(selectedKeys)
        this.setState({ isActive: true, selectedKeys: selectedKeys })
        console.log(selectedKeys)
    }

    showSearch = () => {
        const Search = Input.Search;
        const isActive = this.state;
        if (!isActive) {
            return null
        }
        else if (isActive) {
            return <div className='search-btn'>
                <Search
                    placeholder="请输入姓名"
                    enterButton="搜索"
                    size="small"
                    onSearch={value => console.log(value)}
                    style={{ width: '200px' }}
                />
                <div></div>
                <Button style={{ float: 'right' }} size='default'>确认</Button>
            </div>
        }
    }

    // showStaff = () => {
    //     const { selectedKeys, isActive } = this.state
    //     if (!isActive) {
    //         this.props.data.departmentMsg.group[selectedKeys[0]].staff.map((i, index) => {
    //             const item = this.props.data.departmentMsg.staff[i]
    //             return <div>
    //                 <span>mid:{item.mid}</span>
    //                 <span>姓名:{item.name}</span>
    //             </div>
    //         })
    //     } else if (isActive) {
    //         return null
    //     }
    // }

    addSeltedStaff = () => {
        const mid = this.getMid(mid)
        const { powerActions } = this.props
        powerActions.addSeltedStaff(mid)
    }

    getMid = (mid) => {
        return mid
    }
    showStaff = (item) => {
        this.getMid(item.mid)
        return <Button onClick={this.addSeltedStaff} style={{ margin: '10px' }} size='default'>
            <span>mid:{item.mid}</span>
            <span>姓名:{item.name}</span>
        </Button>
    }
    render() {
        const TreeNode = Tree.TreeNode;
        const Search = Input.Search;
        const {
            data: {
                powerList: { },
                departmentMsg: {
                    allDepartment: all,
                    company: company,
                    area: area,
                    department: department,
                    group: group,
                    staff: staff,
                    seltedStaff: seltedStaff
                }
            },
            powerActions
        } = this.props;
        const { selectedKeys, isActive } = this.state
        return (
            <div className='power-bottom'>
                <div>
                    点评作业：拥有个人点评页，可以为学生作业进行点评
                    <strong><Icon style={{ float: 'right' }} type="close" /></strong>
                </div>
                <div className='lef'>
                    <Button style={{ margin: '10px' }} size='default'>添加</Button>
                    <Button style={{ margin: '10px' }} size='default'>删除</Button>
                    <Search
                        placeholder="请输入姓名"
                        enterButton="搜索"
                        size="default"
                        onSearch={value => console.log(value)}
                        style={{ width: '300px', margin: '10px' }}
                    />
                    <div>
                        {
                            seltedStaff.map((i, index) => {
                                return <div key={index}><Button style={{ margin: '10px' }} size='default'>
                                    <span>mid:{i.mid}</span>
                                    <span>姓名:{i.name}</span>
                                </Button>
                                </div>
                            })
                        }
                    </div>
                </div>

                <div className='rig'>
                    <div className='depart'>
                        <Tree
                            showLine
                            defaultExpandedKeys={[group[3000].id.toString()]}  //{['0-0-0-0-0']}
                        //onSelect={this.onSelect}
                        >
                            <TreeNode title={all.name} key="0-0">
                                <TreeNode title={company[1].name} key="0-0-0">
                                    <TreeNode title={area[1000].name} key="0-0-0-0" >
                                        <TreeNode title={department[2000].name} key="0-0-0-0-0" >
                                            <TreeNode title={group[3000].name} key={group[3000].id}>
                                                <TreeNode title={staff[4000].name} key="0-0-0-0-0-0-0" />
                                                <TreeNode title={staff[4001].name} key="0-0-0-0-0-0-1" />
                                                <TreeNode title={staff[4002].name} key="0-0-0-0-0-0-2" />
                                            </TreeNode>
                                            <TreeNode title={group[3001].name} key="0-0-0-0-0-1" />
                                            <TreeNode title={group[3002].name} key="0-0-0-0-0-2" />
                                        </TreeNode>
                                        <TreeNode title={department[2001].name} key="0-0-0-0-1" />
                                        <TreeNode title={department[2002].name} key="0-0-0-0-2" />
                                        <TreeNode title={department[2003].name} key="0-0-0-0-3" />
                                    </TreeNode>
                                </TreeNode>
                            </TreeNode>
                        </Tree>
                    </div>
                    <div className='search-btn'>
                        <Search
                            placeholder="请输入姓名"
                            enterButton="搜索"
                            size="default"
                            onSearch={value => console.log(value)}
                            style={{ width: '250px' }}
                        />
                        <div>
                            {group[selectedKeys].staff.map((i, index) => {
                                const item = staff[i]
                                return <div key={index}>
                                    {this.showStaff(item)}

                                </div>
                            })
                            }
                        </div>
                        <Button style={{ float: 'right' }} style={{ margin: '10px' }} size='default'>确认</Button>
                    </div>
                </div>
            </div>
        )
    }
}