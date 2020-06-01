import React from 'react';
import axios from 'axios';
import './App.css';
import '98.css';

import HeaderComponent from './HeaderComponent/HeaderComponent';
import ImageComponent from './ImageComponent/ImageComponent';
import ListComponent from './ListComponent/ListComponent';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {image: null, base: null, type: null, active: false, serverProcessing: false, needReset: true};
    this.LoadImage = this.LoadImage.bind(this);
    this.SendEffectList = this.SendEffectList.bind(this);
    this.ClearImage = this.ClearImage.bind(this);
  }

  LoadImage(image, needReset) {
    // FileReader support
    if (FileReader) {
      var fr = new FileReader();
      var self = this;

      fr.addEventListener("load", function () {
        self.setState(state => ({
          image: fr.result,
          base: fr.result,
          type: image.type.replace("image/", ""),
          active: true,
          needReset: needReset
        }));
      }, false);

      fr.readAsDataURL(image);
    }
  }

  async SendEffectList(effectList) {
    var img = new Image();
    img.src = this.state.image;

    this.setState({
      serverProcessing: true
    });

    const response = await axios.post(
      'http://127.0.0.1:5000/processImage',
      { 
        effects : effectList, 
        image : this.state.image,
        imageType: this.state.type,
        imageSize : {'height' : img.height, 'width' : img.width}
      },
      { 
        headers: {'content-type': 'application/json'},
        responseType: 'blob'
      }
    );

    this.setState({
      serverProcessing: false
    });

    this.LoadImage(response.data, false);
  }

  ClearImage() {
    this.setState(state => ({
      image: null,
      active: false,
      needReset: true
    }));
  }

  render() {
    var image = this.state.image;

    return (
      <div className="App window">
        <div className="title-bar">
          <div className="title-bar-text">V A P O R W A V E . it</div>
          <div className="title-bar-controls">
            <button aria-label="Help"></button>
          </div>
        </div>

        <div className="window-body">
          <HeaderComponent 
            loadImage={this.LoadImage}
            clearImage={this.ClearImage}
            sendEffectList={this.SendEffectList}
          />
          <div className="AppContent">
            <ImageComponent className="ImageComponent" image={image} serverProcessing={this.state.serverProcessing} />
            <ListComponent className="ListComponent" sendEffectList={this.SendEffectList} active={this.state.active} needReset={this.state.needReset} />
          </div>
        </div>
      </div>
    );
  }

}

export default App;
