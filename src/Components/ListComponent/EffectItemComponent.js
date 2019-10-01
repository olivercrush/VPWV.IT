import React from 'react';
import './EffectItemComponent.css';

class EffectItemComponent extends React.Component {

    render() {
        return (
            <div className="EffectItemComponent">
                <div className="EffectTitle">{this.props.effectTitle}</div>
            </div>
        );
    }
}

export default EffectItemComponent;
