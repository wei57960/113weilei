import React from 'react'
import { Button } from 'antd'
import './index.css'
export default class StaffButton extends React.Component {

    state = {
        class: ''
    }

    getClassName = () => {
        if (this.state.class == '') {
            this.setState({ class: 'primary' })
        }
        else {
            this.setState({ class: '' })
        }
    }

    addToPower = () => {
        const { powerActions } = this.props
        const { item } = this.props
        powerActions.addToPower(item)
        this.getClassName()
    }

    render() {
        const { item } = this.props;
        return (
            <div >
                <Button  type={this.state.class} onClick={this.addToPower} size='default'>
                    <span >mid:{item.id}</span>
                    <span >姓名:{item.name}</span>
                </Button>
            </div>
        )
    }
}