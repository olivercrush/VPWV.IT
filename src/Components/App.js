import React from 'react';
import axios from 'axios';
import './App.css';
import HeaderComponent from './HeaderComponent/HeaderComponent';
import ImageComponent from './ImageComponent/ImageComponent';
import ListComponent from './ListComponent/ListComponent';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {image: null, base: null, type: null};
    this.LoadImage = this.LoadImage.bind(this);
    this.SendEffectList = this.SendEffectList.bind(this);
    this.ClearImage = this.ClearImage.bind(this);
  }

  LoadImage(image) {
    // FileReader support
    if (FileReader) {
      var fr = new FileReader();
      var self = this;

      fr.addEventListener("load", function () {
        self.setState(state => ({
          image: fr.result,
          base: fr.result,
          type: image.type.replace("image/", "")
        }));
      }, false);

      fr.readAsDataURL(image);
    }
  }

  async SendEffectList(effectList) {
    var img = new Image();
    img.src = this.state.image;

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

    this.LoadImage(response.data);
  }

  ClearImage() {
    this.setState(state => ({
      image: null
    }));
  }

  render() {
    var image = this.state.image;

    return (
      <div className="App">
        <HeaderComponent 
          loadImage={this.LoadImage}
          clearImage={this.ClearImage}
          sendEffectList={this.SendEffectList}
        />
        <div className="AppContent">
          <ImageComponent className="ImageComponent" image={image}/>
          <ListComponent className="ListComponent" sendEffectList={this.SendEffectList}/>
        </div>
      </div>
    );
  }

}

export default App;
