import React from 'react';
import Dialog from '../components/Dialog/Dialog'
import './index.css'
export default class DialogExample extends React.Component {
    state = {
        type: '', //0 ios 1 android 
        isDialogActive: false,
        okText: '',
        cancelText: '',
        onOk: '',
        onCancel: '',
        renderBody: '',
        title: '',
    }
    handleShowDialog = () => {
        this.setState({
            type: '0',
            isDialogActive: true,
            okText: '主操作',
            cancelText: '辅操作',
            onOk: this.handleHideDialog() ,
            onCancel: '',
            renderBody: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量在三行内',
            title: '弹窗标题'
        })
    }
    handleShowDialog1 = () => {
        this.setState({
            type: '0',
            isDialogActive: true,
            okText: '知道了',
            cancelText: '',
            onOk: '',
            onCancel: '',
            renderBody: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量在三行内',
            title: ''
        })
    }
    handleShowDialog2 = () => {
        this.setState({
            type: '1',
            isDialogActive: true,
            okText: '主操作',
            cancelText: '辅助操作',
            onOk: '',
            onCancel: '',
            renderBody: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量在三行内',
            title: '弹窗标题'
        })
    }
    handleShowDialog3 = () => {
        this.setState({
            type: '1',
            isDialogActive: true,
            okText: '主操作',
            cancelText: '辅助操作',
            onOk: '',
            onCancel: '',
            renderBody: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量在三行内',
            title: ''
        })
    }

    handleHideDialog = () => {
        this.setState({
            isDialogActive: false
        })
    }

    render() {
        return (
            <div>
                <div onClick={this.handleShowDialog} className='exam-text'>ios Dialog 样式一</div>
                <div onClick={this.handleShowDialog1} className='exam-text'>ios Dialog 样式二</div>
                <div onClick={this.handleShowDialog2} className='exam-text'>android Dialog 样式一 </div>
                <div onClick={this.handleShowDialog3} className='exam-text'>android Dialog 样式二</div>
                <Dialog isActive={this.state.isDialogActive}
                    type={this.state.type}
                    okText={this.state.okText}
                    cancelText={this.state.cancelText}
                    renderBody={this.state.renderBody}
                    title={this.state.title}
                    onOk={this.state.onOk}
                    onCancel={this.handleHideDialog}
                />
            </div>
        );
    }
}