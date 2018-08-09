import React from 'react'
import './ActionSheet.css'
export default class ActionSheet extends React.Component {
    static defaultProps = {
        isActive: false,
        title: '',
        menus: [],
        onCancel: () => { },
    }

    getMaskClassName = () => {
        if (!this.props.isActive) {
            return 'mask hideMask';
        }
        if (this.props.isActive) {
            if (this.props.type === '0') {
                return ' mask showMask'
            } else if (this.props.type === '1') {
                return 'mask showMask2'
            }
        }
    }

    getMenuClassName = () => {
        if (!this.props.isActive) {
            return 'menu'
        } if (this.props.isActive) {
            if (this.props.type === '0') {
                return 'menu showMenu'
            } else if (this.props.type === '1') {
                return 'menu2 showMenu2'
            }
        }
    }

    handleMenuItemClick = idex => {
        const { menus, onCancel } = this.props;
        menus[idex].click && menus[idex].click(idex);
        onCancel();
    }

    render() {
        const { title, menus } = this.props

        return (
            <div className='actionSheetCtn'>
                <div className={this.getMaskClassName()} onClick={this.props.onCancel} />
                <div className={this.getMenuClassName()}>
                    {
                        !title.length
                            ? null
                            : <div className='title divider'>{title}</div>
                    }
                    {
                        menus.map((Item, idex) => (
                            <div className='btn divider'
                                key={`actionSheet_${idex}`}
                                onClick={() => this.handleMenuItemClick(idex)}>
                                {Item.title}
                            </div>
                        ))
                    }
                    <div className='btn cancel' onClick={this.props.onCancel}>取消</div>
                </div>
            </div>
        )
    }



}