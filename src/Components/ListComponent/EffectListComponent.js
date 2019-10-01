import React from 'react';
import './EffectListComponent.css';
import EffectItemComponent from './EffectItemComponent';

class EffectListComponent extends React.Component {

    render() {
        return (
            <div className="EffectListComponent">
                <div className="EffectList">
                    <EffectItemComponent effectTitle="PIXEL SHIFT" />
                    <EffectItemComponent effectTitle="GRAY" />
                    <EffectItemComponent effectTitle="SCANLINES" />
                </div>
                <div className="AddEffectButton">+</div>
            </div>
        );
    }
}

export default EffectListComponent;
