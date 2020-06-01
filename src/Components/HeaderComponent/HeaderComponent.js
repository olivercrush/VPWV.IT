import React from 'react';
import './HeaderComponent.css';
import MenuComponent from './MenuComponent';
import TitleComponent from './TitleComponent';

class HeaderComponent extends React.Component {
  render() {
    return (
      <div className="HeaderComponent">
          <MenuComponent 
            loadImage={this.props.loadImage}
            clearImage={this.props.clearImage}
            sendEffectList={this.props.sendEffectList}
          />
      </div>
    );
  }
}

export default HeaderComponent;
