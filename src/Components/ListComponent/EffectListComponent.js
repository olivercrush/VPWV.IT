import React from 'react';
import './EffectListComponent.css';
import EffectItemComponent from './EffectItemComponent';

class EffectListComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {effects: []};
        this.AddGrayEffect = this.AddGrayEffect.bind(this);
    }

    AddGrayEffect() {
        if (this.props.active) {
            var effectList = this.state.effects;
            effectList.push({
                id: 'grayscale',
                name: 'GRAYSCALE'
            });

            this.setState({
                effects: effectList
            });

            this.props.sendEffectList(effectList);
        }
    }

    componentWillUpdate(nextProps, nextState) {
        if (!nextProps.active && nextProps.active !== this.props.active) {
            console.log("yo");
            this.setState({
                effects: []
            });
        }
    }

    render() {
        let addEffectButton = "";

        if (this.props.active) {
            addEffectButton = <div className="AddEffectButton" onClick={this.AddGrayEffect}>+</div>;
        }

        return (
            <div className="EffectListComponent">
                <div className="EffectList">
                    {this.state.effects.map(item => (
                        <EffectItemComponent effectTitle={item.name} />
                    ))}
                </div>
                
                {addEffectButton}
            </div>
        );
    }
}

export default EffectListComponent;
