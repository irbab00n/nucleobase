import React from 'react';

class StepFour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: ''
    };
    this.fileHandler = this.fileHandler.bind(this);
  }

  fileHandler(e) {
    var file = e.target.files;
    console.log(file);
    // var reader = new FileReader();
    // var url = reader.readAsDataURL(file);

    // reader.addEventListener('load', function() {
    //   this.setState({
    //     imgSrc: reader.result
    //   });
    // }.bind(this), false);
  }

  render() {

    console.log(this.state.imgSrc);

    return (

      <div>
        <input type="file" onChange={this.fileHandler}/>
        {
          this.state.imgSrc === '' ?
            <span>Preview...</span> :
            <img src={this.state.imgSrc} style={{height: '150px'}}/>
        }
      </div>

    );

  }
}

export default StepFour;