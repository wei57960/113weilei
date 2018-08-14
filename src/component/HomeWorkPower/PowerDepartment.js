import React from 'react'
import { Icon, Tree, Input } from 'antd'
import { Button } from 'antd'

import './index.css'
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





    addSeltedStaff = (item) => {
        const { powerActions } = this.props
        powerActions.addSeltedStaff(item.mid)
    }

    showStaff = (selectedKeys, group, staff) => {
        return group[selectedKeys].staff.map((i, index) => {
            const item = staff[i]
            return <div key={index}>
                <Button onClick={this.addSeltedStaff.bind(this, item)} style={{ margin: '10px' }} size='default'>
                    <span>mid:{item.mid}</span>
                    <span>姓名:{item.name}</span>
                </Button>
            </div>
        })
    }


    // renderTree(rootId, entites) {
    //     const root = entites[rootId]
    //     return (
    //         <TreeNode title={root.name} key={root.id}>
    //             {
    //                 root.bloc ? root.bloc.map(depId => {
    //                     return renderTree(depId, entites)
    //                 }) : null
    //             }
    //         </TreeNode>
    //     )
    // }

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
            }
        } = this.props;
        const { selectedKeys, isActive } = this.state
        const { bloc,person } = this.props
        const tree = this.renderTree(person,bloc)
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
                        {this.showStaff(selectedKeys, group, staff)}
                        <Button style={{ float: 'right' }} style={{ margin: '10px' }} size='default'>确认</Button>
                    </div>
                </div>
            </div>
        )
    }
}