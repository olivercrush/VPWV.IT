import React from 'react';
import './EffectListComponent.css';
import EffectItemComponent from './EffectItemComponent';
import EffectChoiceComponent from './../EffectChoiceComponent/EffectChoiceComponent';


class EffectListComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            effects: [],
            effectChoice: false
        };

        this.SwitchEffectChoiceDisplay = this.SwitchEffectChoiceDisplay.bind(this);
        this.AddGrayEffect = this.AddGrayEffect.bind(this);
        this.AddChromaticAberration = this.AddChromaticAberration.bind(this);

        this.AddFunctions = [
            this.AddGrayEffect,
            this.AddChromaticAberration
        ];
    }

    AddGrayEffect() {
        this.SwitchEffectChoiceDisplay();

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

    AddChromaticAberration() {
        this.SwitchEffectChoiceDisplay();
        if (this.props.active) {
            var effectList = this.state.effects;
            effectList.push({
                id: 'chromatic_aberration',
                name: 'CHROMATIC ABERRATION'
            });

            this.setState({
                effects: effectList
            });

            this.props.sendEffectList(effectList);
        }
    }

    SwitchEffectChoiceDisplay() {
        if (this.props.active) {
            var tmp = this.state.effectChoice;
            this.setState({
                effectChoice: !tmp
            });
            console.log(this.state.effectChoiceHide);
        }
    }

    componentWillUpdate(nextProps, nextState) {
        if (!nextProps.active && nextProps.active !== this.props.active) {
            this.setState({
                effects: []
            });
        }
    }

    render() {
        let addEffectButton = "";
        let effectChoice = "";

        if (this.props.active) {
            addEffectButton = <button onClick={this.SwitchEffectChoiceDisplay}>Add effect</button>;
        }

        if (this.state.effectChoice) {
            effectChoice = <EffectChoiceComponent addFunctions={this.AddFunctions} switchDisplay={this.SwitchEffectChoiceDisplay} />
        }

        return (
            <div className="EffectListComponent">
                <div className="EffectList">
                    {this.state.effects.map(item => (
                        <EffectItemComponent key={item.key} effectTitle={item.name} />
                    ))}
                </div>
                
                {addEffectButton}
                {effectChoice}
            </div>
        );
    }
}

export default EffectListComponent;
