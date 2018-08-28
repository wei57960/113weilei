import React from 'react';
import './TabsControl.css';

class TabsControl extends React.Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0
    };
  }

  getTitleClassName(index) {
    return index === this.state.currentIndex ? 'tab-tile active' : 'tab-tile';
  }

  getItemClassName(index) {
    return index === this.state.currentIndex ? 'tab-item show' : 'tab-item';
  }

  isSelected(index) {
    return index === this.state.currentIndex ? '选中' : '未选中';
  }

  render() {
    return (
      <div>
        <div>
          {React.Children.map(this.props.children, (element, index) => (
            <div
              onClick={() => { this.setState({ currentIndex: index }); }}
              className={this.getTitleClassName(index)}
            >
              <img src={require(`../../icons/${element.props.name}-${this.isSelected(index)}.png`)} />
              {element.props.name}
              <div className="seled-soild" />
            </div>
           ))}
        </div>

        <div>
          {React.Children.map(this.props.children, (element, index) => (
            <div onClick={() => { this.setState({ currentIndex: index }); }} className={this.getItemClassName(index)}>
              {element}
            </div>
           ))}
        </div>
      </div>
    );
  }
}

export default TabsControl;
