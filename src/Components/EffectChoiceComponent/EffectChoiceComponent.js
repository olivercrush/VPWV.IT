import React from 'react';
import './EffectChoiceComponent.css';
import '98.css';

class EffectChoiceComponent extends React.Component {

  render() {
    return (
      <div className="EffectChoiceComponent">
          <div className="EffectChoiceContent window">
            <div className="title-bar">
              <div className="title-bar-text">Effects</div>
              <div className="title-bar-controls">
                <button onClick={this.props.switchDisplay} aria-label="Close" />
              </div>
            </div>

            <ul className="EffectChoiceList window-body">
              <li><button onClick={this.props.addFunctions[0]}>Grayscale</button></li>
              <li><button onClick={this.props.addFunctions[1]}>Chromatic aberration</button></li>
            </ul>
          </div>
      </div>
    );
  }
}

export default EffectChoiceComponent;
