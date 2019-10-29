import React from 'react';
import axios from 'axios';
import './App.css';
import HeaderComponent from './HeaderComponent/HeaderComponent';
import ImageComponent from './ImageComponent/ImageComponent';
import ListComponent from './ListComponent/ListComponent';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {image: null, base: null};
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
          base: fr.result
        }));

        self.SendEffectList("test");
      }, false);

      fr.readAsDataURL(image);
      //console.log(imgUrl);
    }
  }

  async SendEffectList(effectList) {
    const response = await axios.post(
      'http://127.0.0.1:5000/processImage',
      { effects : effectList, image : this.state.image },
      { headers: {
        'content-type': 'application/json'
      }}
    )
    console.log("RESPONSE FROM BACKEND : " + response);
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
