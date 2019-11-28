import React from 'react';
import './ListComponent.css';
import EffectListComponent from './EffectListComponent';

class ListComponent extends React.Component {
  render() {
    return (
      <div className="ListComponent">
          <EffectListComponent sendEffectList={this.props.sendEffectList} active={this.props.active} />
      </div>
    );
  }
}

export default ListComponent;
