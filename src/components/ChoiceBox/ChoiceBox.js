import React from 'react';
import './ChoiceBox.css';


class ChoiceBox extends React.Component {
  setSingleStatus = () => {
    const { actions } = this.props;
    actions.setSeltedStatus('singleton');
  }

  setLotStatus = () => {
    const { actions } = this.props;
    actions.setSeltedStatus('checkbox');
  }
  render() {
    return (
      <div className="choice-box">
        <label className="choice-btn" >
          <input
            type="radio"
            name="selBox"
            id="singleton"
            defaultChecked
            onChange={this.setSingleStatus}
          />
          <span />单选
        </label>

        <label className="choice-btn" >
          <input
            type="radio"
            name="selBox"
            id="checkbox"
            onChange={this.setLotStatus}
          />
          <span />多选
        </label>
      </div>
    );
  }
}
export default ChoiceBox;
