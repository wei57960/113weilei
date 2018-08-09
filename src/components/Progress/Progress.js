import React from 'react';
import './Progress.css'
export default class Progress extends React.Component {
    static defaultProps = {
        value: 0
    }
    render() {
        const { value } = this.props
        return (
            <div className='progress-cen'>
                <div className='progress-bar'>
                    <div className='inner-bar' style={{ width: `${value}%` }} /><div></div>
                </div>
                <div onClick={this.props.handleUpload}>上传</div>
            </div>
        );
    }
}
