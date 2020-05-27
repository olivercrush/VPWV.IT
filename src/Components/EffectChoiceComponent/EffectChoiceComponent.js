import React from 'react';
import './EffectChoiceComponent.css';

class EffectChoiceComponent extends React.Component {

  render() {
    return (
      <div className="EffectChoiceComponent">
          <ul className="EffectChoiceContent">
            <li onClick={this.props.addFunctions[0]}>Grayscale</li>
            <li>Chromatic aberration</li>
            <li>Pixel sort</li>
          </ul>
      </div>
    );
  }
}

export default EffectChoiceComponent;
