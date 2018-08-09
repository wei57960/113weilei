import React from 'react';
import Progress from '../components/Progress/Progress'
export default class ProgressExample extends React.Component {
    state = {
        value: 0,
        showCancel: '',
        onCancel: ''
    }
    handleUpload = () => {
        this.driver = setInterval(() => {
            if (this.state.value >= 100) {
                clearInterval(this.driver);
                return;
            }
            this.setState({ value: this.state.value + 10 })
        }, 1000);
    }
    render() {
        return (
            <div>
                <Progress
                    value={this.state.value}
                    handleUpload={this.handleUpload} />
            </div>
        );
    }
}
