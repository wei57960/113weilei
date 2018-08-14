import React from 'react'
import { Input } from 'antd'
import { Button } from 'antd'
import './index.css'
import StaffButton from './StaffButton';
export default class DepartmentStaff extends React.Component {


    showStaff = (bloc, person, powerDetail) => {
        const staffId = powerDetail.seltedStaff;
        if (staffId.length == 0) return null
        else {
            if (bloc[staffId].numbers) {
                const numbers = bloc[staffId].numbers
                return numbers.map((i, index) => {
                    const item = person[i]
                    return <div key={index} >
                        <StaffButton item={item} powerActions={this.props.powerActions} />
                    </div>
                })
            }
        }
    }

    getClassName = () => {
        if (this.state.class == '') {
            this.setState({ class: 'sel-btn' })
        }
        else {
            this.setState({ class: '' })
        }
    }

    addToPower = (item) => {
        const { powerActions } = this.props
        powerActions.addToPower(item)
        this.getClassName()
    }

    commitSelted = () => {
        const { powerActions } = this.props
        powerActions.commitSelted()
    }

    render() {
        const Search = Input.Search;
        const { bloc, person, powerDetail } = this.props
        return (
            <div className='search-btn'>
                <Search
                    placeholder="请输入姓名"
                    enterButton="搜索"
                    size="default"
                    onSearch={value => console.log(value)}
                    style={{ width: '250px' }}
                />
                {this.showStaff(bloc, person, powerDetail)}
                <Button onClick={this.commitSelted} style={{ top: '420px', position: 'fixed', margin: '10px' }} size='default'>确认</Button>
            </div>
        )
    }
}