import React from 'react';
import './ListComponent.css';
import EffectListComponent from './EffectListComponent';

class ListComponent extends React.Component {
  render() {
    return (
      <div className="ListComponent">
          <EffectListComponent />
      </div>
    );
  }
}

export default ListComponent;
