import React from 'react';
import './MenuComponent.css';
import { file } from '@babel/types';

class MenuComponent extends React.Component {

  constructor(props) {
    super(props);
    this.LoadFile = this.LoadFile.bind(this);
  }

  LoadFile(files) {
    console.log(files[0]);
    this.props.loadImage(files[0]);
  }

  render() {
    return (
      <div className="MenuComponent">
          <input ref="fileInput" id="file" type="file" className="FileInput" onChange={(e) => this.props.loadImage(e.target.files[0])}/>
          <label htmlFor="file" className="MenuItem">O<span>PEN</span></label>

          <button className="MenuItem">S<span>AVE</span></button>

          <button className="MenuItem" onClick={() => this.props.clearImage()}>C<span>LEAR</span></button>

      </div>
    );
  }
}

// <button className="MenuItem" onClick={() => this.props.sendEffectList("test")}>SE<span>ND</span></button>

export default MenuComponent;
