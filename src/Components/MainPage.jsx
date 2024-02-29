import React, { Component } from 'react'
import '../../src/App.css'
import LeftPage from './LeftPage';
import RightPage from './RightPage';

export class MainPage extends Component {
  render() {
    return (
      <>
        <div className="mainDiv">
          <LeftPage />
          <RightPage />
        </div>
      </>
    )
  }
}

export default MainPage