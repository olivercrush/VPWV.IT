import React from 'react';
import './App.css';
import HeaderComponent from './HeaderComponent/HeaderComponent';
import ImageComponent from './ImageComponent/ImageComponent';
import ListComponent from './ListComponent/ListComponent';

import ImageTest from '../Resources/DBZ.jpg';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {image: null, base: null};
    this.LoadImage = this.LoadImage.bind(this);
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
      }, false);

      fr.readAsDataURL(image);
      //console.log(imgUrl);
    }
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
          <ListComponent className="ListComponent" />
        </div>
      </div>
    );
  }

}

export default App;
