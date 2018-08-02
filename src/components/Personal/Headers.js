import React from 'react'
import { Button, Input } from 'antd'
export default class Headers extends React.Component {
    constructor(props) {
        super(props)

    }
    state = {
        inputValue: ''
    }

    handleInputChange = e => {
        this.setState({
            inputValue: e.target.value
        })
    }
    handleSearch = () => {
        const { Actions } = this.props
        Actions.getDetailByMid(this.state.inputValue)
    }
    render() {
        return (
            <div className='btn-box'>
                <div className='lft-btn'>
                    <Button>汇总</Button>
                    <Button style={{ background: 'gray' }}>摄影课</Button>
                    <Button>绘画课</Button>
                </div>
                <div className='rig-btn'>
                    <Button>mid</Button>
                    <Input style={{ width: 300 }} placeholder="Basic usage" onChange={this.handleInputChange} />
                    <Button onClick={this.handleSearch}>搜索</Button>
                </div>
            </div>
        )
    }

}