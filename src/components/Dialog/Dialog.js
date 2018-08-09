import React from 'react';
import './Dialog.css'
export default class Dialog extends React.Component {
    getMaskClassName = () => {
        if (!this.props.isActive) {
            return 'mask hideMask'
        } if (this.props.isActive) {
            return 'mask showMask'
        }
    }

    getDialogClassName = () => {
        if (!this.props.isActive) {
            return 'dialog'
        } if (this.props.isActive) { //true
            if (this.props.type === '0') {
                return 'dialog showDialog'
            } else if (this.props.type === '1') {
                return 'dialog showDialog'
            }
        }
    }
    handleMenuItemClick = () => {
        const { onCancel } = this.props
        onCancel();
    }

    render() {
        const { title, okText, cancelText, renderBody, onOk, onCancel } = this.props
        return (
            <div className='DialogCtn'>
                <div className={this.getMaskClassName()} />
                <div className={this.getDialogClassName()}>
                    {
                        !title.length
                            ? null
                            : <div className='title divider'><strong>{title}</strong></div>
                    }
                    {
                        !renderBody.length
                            ? null
                            : <div className='title divider'>{renderBody}</div>
                    }
                    {
                        !okText.length && !cancelText.length
                            ? null
                            : <div className='title divider'>
                                <span className='cancl btn' onClick={this.props.onCancel} >{cancelText}</span>
                                <span className='ok btn' onClick={this.props.onCancel} >{okText}</span>
                            </div>
                    }
                </div>
            </div>
        );
    }
}