import React, { Component } from 'react'
import './Item.css'
import { Button } from 'antd'

export default class Item extends Component {
    render() {
        const { item } = this.props
        return (
            <div className='comments'>
                <div className='comments-item'>
                    <div>{`${item.comments[0].nick} mid:${item.author.mid} ${new Date(parseInt(item.comments[0].time)).toLocaleString().replace(/:\d{1,2}$/, ' ')}`}</div>
                    <div>{`${item.comments[0].content}`}</div>
                </div>
                <div className='comments-item'>
                    <div>{`${item.comments[1].nick}  ${new Date(parseInt(item.comments[1].time)).toLocaleString().replace(/:\d{1,2}$/, ' ')}`}</div>
                    <div>{`${item.comments[1].content}`}</div>
                    <div className='fail-text'>{`(消息被退回,退回原因:${item.comments[1].reason}。)`}<Button size='small' type="primary">退回</Button></div>
                </div>
                <div className='comments-item'>
                    <div>{`${item.comments[2].nick}  ${new Date(parseInt(item.comments[2].time)).toLocaleString().replace(/:\d{1,2}$/, ' ')}`}</div>
                    <div>{`${item.comments[2].content}`}<Button size='small' type="primary">退回</Button></div>
                </div>
                <div className='comments-item'>
                    <div>{`${item.comments[0].nick} mid:${item.author.mid} ${new Date(parseInt(item.comments[0].time)).toLocaleString().replace(/:\d{1,2}$/, ' ')}`}</div>
                    <div>{`${item.comments[0].content}`}</div>
                </div>
                <div className='comments-item'>
                    <div>{`${item.comments[1].nick}  ${new Date(parseInt(item.comments[1].time)).toLocaleString().replace(/:\d{1,2}$/, ' ')}`}</div>
                    <div>{`${item.comments[1].content}`}<Button size='small' type="primary">退回</Button></div>
                </div>
            </div>
        )
    }
}