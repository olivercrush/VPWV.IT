import React from 'react';
import './ImageComponent.css';

class ImageComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      b_imageLoaded:false, 
      b_dragging:false,
      v_imagePos: null,
      v_posClicked:null,
      v_initPosDraggedImage:null,
      str_className: "ImageComponent Grab"
    };

    this.GetMousePos = this.GetMousePos.bind(this);

    this.StartTranslation = this.StartTranslation.bind(this);
    this.EndTranslation = this.EndTranslation.bind(this);
    this.Translate = this.Translate.bind(this);

    this.InitializeState = this.InitializeState.bind(this);
    this.ResetState = this.ResetState.bind(this);
    
    this.DrawImage = this.DrawImage.bind(this);
    this.ClearCanvas = this.ClearCanvas.bind(this);
  }

  // UTILS METHODS
  
  GetMousePos(e) {
    const canvas = this.refs.canvas;
    var rect = canvas.getBoundingClientRect();

    var mousePos = {
      x: e.clientX - rect.left,
      y: Math.floor(e.clientY - rect.top)
    }
    
    //console.log("X : " + mousePos.x + " / Y : " +  mousePos.y);

    return mousePos;
  }

  // CANVAS METHODS

  StartTranslation(e) {
    if (!this.state.b_b_dragging) {
      var mousePos = this.GetMousePos(e);

      var posClicked = {
        x: mousePos.x,
        y: mousePos.y
      }

      var initPosDraggedImage = {
        x: this.state.v_imagePos.x,
        y: this.state.v_imagePos.y
      }
      
      this.setState({
        v_posClicked: posClicked,
        v_initPosDraggedImage: initPosDraggedImage,
        b_dragging: true,
        str_className: "ImageComponent Grabbed"
      });
    }
  }

  EndTranslation(e) {
    if (this.state.b_dragging) {
      this.setState({
        v_posClicked: null,
        v_initPosDraggedImage: null,
        b_dragging: false,
        str_className: "ImageComponent Grab"
      });
    }
  }

  Translate(e) {
    if (this.state.b_dragging) {

      var mousePos = this.GetMousePos(e);

      var imagePos = {
        x: this.state.v_initPosDraggedImage.x + (mousePos.x - this.state.v_posClicked.x),
        y: this.state.v_initPosDraggedImage.y + (mousePos.y - this.state.v_posClicked.y)
      }

      // TODO : create a utils class
      const canvas = this.refs.canvas;
      const img = this.refs.image;

      if (imagePos.x > canvas.width/2) {
        imagePos.x = canvas.width/2;
      }
      else if (imagePos.x + img.width < canvas.width/2) {
        imagePos.x = canvas.width/2 - img.width;
      }

      if (imagePos.y > canvas.height/2) {
        imagePos.y = canvas.height/2;
      }
      else if (imagePos.y + img.height < canvas.height/2) {
        imagePos.y = canvas.height/2 - img.height;
      }

      // TODO : create a state method
      this.setState({
        b_imageLoaded: true,
        v_imagePos: imagePos
      });
    }
  }

  ResizeCanvas() {
    const canvas = this.refs.canvas;
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const img = this.refs.image;

    this.ClearCanvas();
    this.InitializeState(img);
    this.DrawImage();
  }

  ClearCanvas() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  DrawImage() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext("2d");
    const img = this.refs.image;

    //console.log(this.state.b_imageLoaded + " -> " + this.state.v_imagePos.x + " : " + this.state.v_imagePos.y);
    ctx.drawImage(img, this.state.v_imagePos.x, this.state.v_imagePos.y);
  }

  // STATE METHODS

  InitializeState(img) {
    const canvas = this.refs.canvas;
    var imagePos = {
      x: canvas.width/2 - img.width/2,
      y: canvas.height/2 - img.height/2
    }

    this.setState({
      b_imageLoaded: true,
      v_imagePos: imagePos
    });
  }

  ResetState() {
    this.setState({
      b_imageLoaded: false,
      v_imagePos: null
    });
  }
  
  // COMPONENTS LIFECYCLE

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.image !== this.props.image) {
      this.ResetState();
    }

    this.ClearCanvas();
  }

  componentDidUpdate() {
    const img = this.refs.image;

    if (!this.state.b_imageLoaded) {
      this.InitializeState(img);
    }
    else {
      this.DrawImage();
    }
  }

  componentDidMount() {
    var self = this;

    const canvas = this.refs.canvas;
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const img = this.refs.image;
    img.onload = () => {
      self.InitializeState(img);
    }

    window.addEventListener("resize", this.ResizeCanvas.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.ResizeCanvas.bind(this));
  }

  // RENDER

  render() {
    return (
      <div className={this.state.str_className}>
        <canvas ref="canvas" onMouseDown={this.StartTranslation} onMouseUp={this.EndTranslation} onMouseLeave={this.EndTranslation} onMouseMove={this.Translate} />
        <img ref="image" alt="" src={this.props.image} className="Hidden" />
      </div>
    );
  }
}

export default ImageComponent;
