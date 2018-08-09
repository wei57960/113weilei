import React from 'react'
import ActionSheet from '../components/ActionSheet/ActionSheet'
import './index.css'
export default class ActionSheetExample extends React.Component {
    state = {
        isActionSheetActive: false,
        title: '',
        type: '',
        menus: []
    };
    handleShowActionSheet = () => {
        this.setState({
            isActionSheetActive: true,
            title: '这是一个标题',
            type: '0',  //0 ios
            menus: [
                { title: '示例菜单' },
                { title: '示例菜单' },
                { title: '示例菜单' }
            ]
        })
    }

    handleShowActionSheet2 = () => {
        this.setState({
            isActionSheetActive: true,
            // title: '这是一个标题',
            type: '1', // 1 android
            menus: [
                { title: '示例菜单' },
                { title: '示例菜单' },
                { title: '示例菜单' }
            ]
        })
    }

    handleHideActionSheet = () => {
        this.setState({
            isActionSheetActive: false
        })
    }
    
    render() {
        return (
            <div>
                <div onClick={this.handleShowActionSheet} className='exam-text'>ios ActionSheet</div>
                <div onClick={this.handleShowActionSheet2} className='exam-text'>android ActionSheet</div>
                <ActionSheet isActive={this.state.isActionSheetActive}
                    title={this.state.title}
                    menus={this.state.menus}
                    onCancel={this.handleHideActionSheet}
                    type={this.state.type} />
            </div>)
    }
}