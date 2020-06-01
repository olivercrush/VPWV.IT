import React from 'react';
import './MenuComponent.css';
import { file } from '@babel/types';

class MenuComponent extends React.Component {

  constructor(props) {
    super(props);
    this.LoadFile = this.LoadFile.bind(this);
  }

  LoadFile(files) {
    //console.log(files[0]);
    this.props.loadImage(files[0], true);
  }

  render() {
    return (
      <div className="MenuComponent">
          <input ref="fileInput" id="file" type="file" className="FileInput" onChange={(e) => this.props.loadImage(e.target.files[0])}/>
          <button onClick={() => document.getElementById("file").click()}>Open</button>

          <button>Save</button>

          <button onClick={() => this.props.clearImage()}>Clear</button>

      </div>
    );
  }
}

// <button className="MenuItem" onClick={() => this.props.sendEffectList("test")}>SE<span>ND</span></button>

export default MenuComponent;
