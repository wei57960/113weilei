import React from 'react'
import { Icon, Tree, Input } from 'antd'
import { Button } from 'antd'
export default class HandleStaffPower extends React.Component {

    onSearch = (value) => {
        const { powerActions } = this.props;
        powerActions.searchStaffListByOption({ keyName: 'name', value: value })
    }

    render() {
        const Search = Input.Search;
        const { data: { powerStaff: powerStaff }, filterOption, powerActions } = this.props
        const newPowerStaff = getAfterFilterList(powerStaff, filterOption)
        return (
            <div>
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
                        onSearch={this.onSearch}
                        style={{ width: '300px', margin: '10px' }}
                    />
                    <div>
                        {newPowerStaff.map((i, index) => {
                            return <div key={index}>
                                <Button style={{ margin: '10px' }} size='default'>
                                    <span>mid:{i.id}</span>
                                    <span>姓名:{i.name}</span>
                                </Button>
                            </div>
                        })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const getAfterFilterList = (powerStaff, filter) => {
    if (!filter) return powerStaff
    const { keyName, value } = filter
    return powerStaff.filter(item => {
        if (`${item.name}` === value || value === '') {
            return true
        }
        return false
    })
}