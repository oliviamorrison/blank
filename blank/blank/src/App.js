import React, { Component } from 'react';
import './App.css';


//imports all images from images folder
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>BLANK</h1>
        <img src={images['test1.jpg']} />
      </div>
    );
  }
}

export default App;
