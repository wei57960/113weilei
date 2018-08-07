import React, { Component } from 'react'
import './Item.css'
import { Input } from 'antd';
import { Switch, Button } from 'antd';
import Comments from './Comments'
export default class Item extends Component {
    renderStudentInfo() {
        const {
            item: {
                author: {
                    mid,
                    nick
                },
                classInfo: {
                    name
                },
                commentator,
                description,
                id,
                isExcellent,
                teacherInfo: {
                    nick: teacherInfoNick
                },
                time,
            }
        } = this.props
        function isExcellentShow(isExcellent) {
            if (isExcellent) {
                return <div className='left-float-style'>
                    佳作 <Switch defaultChecked onChange={onChange} />
                </div>
            } else {
                return <div className='left-float-style'>
                    佳作 <Switch onChange={onChange} />
                </div>
            }
        }
        return (
            <div className='student-item'>
                <span className='left-float-style'>{`NO.${id}`}</span>
                <span className='left-float-style'><img className='avatar' src='http://imgtu.5011.net/uploads/content/20170209/4934501486627131.jpg' alt='图片加载失败' /></span>
                <div className='center-text'>
                    <div >{`作业：${description}`}</div>
                    <div>{`${nick}mid:${mid}  ${name}|${commentator} 点评人：${teacherInfoNick} 
                提交时间:${new Date(parseInt(time)).toLocaleString().replace(/:\d{1,2}$/, ' ')}`}
                    </div>
                </div>
                {isExcellentShow(isExcellent)}
                <Input placeholder="Basic usage" style={{ margin: 10, width: 600 }} /><Button type="primary">发送</Button>
            </div>
        )
    }

    render() {
        const { item } = this.props
        return (
            <div>
                <div className='item'>
                    <div className='left-comments'>
                        <div  >{item.photos.map((i, idex) => {
                            return <img key={idex} className='img' src={i} alt="图片加载失败" />
                        })}
                        </div>
                        {this.renderStudentInfo()}
                    </div>
                    <Comments item={item} />
                </div>
            </div>
        )
    }
}

function onChange(checked) {
    console.log(`switch to ${checked}`);
}
