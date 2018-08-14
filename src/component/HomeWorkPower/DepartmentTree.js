import React from 'react'
import { Icon, Tree, Input } from 'antd'
import './index.css'
export default class HomeWorkPower extends React.Component {

    onSelect = (selectedKeys, info) => {
        const { powerActions } = this.props
        console.log(selectedKeys)
        powerActions.addSeltedStaff(selectedKeys)
    }

    renderDepTree = (rootId, bloc) => {
        const TreeNode = Tree.TreeNode;
        const root = bloc[rootId]
        return (
            <TreeNode  title={root.name} key={root.id}>
                {
                    root.bloc ? root.bloc.map(depId => {
                        return this.renderDepTree(depId, bloc)
                    }) : null
                }
            </TreeNode>
        )
    }

    render() {
        const { bloc, powerDetail } = this.props
        const rootId = powerDetail.blocResult[0]
        const tree = this.renderDepTree(rootId, bloc)
        return (
            <div className='depart'>
                <Tree
                    showLine
                    defaultExpandedKeys={['0']}  
                    onSelect={this.onSelect}
                    defaultExpandAll
                >
                    {tree}
                </Tree>
            </div>
        )
    }
}