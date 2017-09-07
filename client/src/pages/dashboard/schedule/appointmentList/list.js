import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div className="col-lg-4 col-sm-4" style={{
        height: '100%',
        backgroundColor: '#DCD8D7'
      }}>
        Result List
      </div>

    );

  }
}

export default List;