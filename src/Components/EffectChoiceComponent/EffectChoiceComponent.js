import React from 'react';
import './EffectChoiceComponent.css';

class EffectChoiceComponent extends React.Component {

  render() {
    return (
      <div className="EffectChoiceComponent">
          <div className="EffectChoiceContent">
            <p className="CloseCross" onClick={this.props.switchDisplay}>x</p>
            <h3 className="EffectChoiceTitle">Effects</h3>

            <ul className="EffectChoiceList">
              <li onClick={this.props.addFunctions[0]}>Grayscale</li>
              <li onClick={this.props.addFunctions[1]}>Chromatic aberration</li>
              <li>Pixel sort</li>
            </ul>
          </div>
      </div>
    );
  }
}

export default EffectChoiceComponent;
