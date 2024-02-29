import React, { Component } from 'react'
import '../../src/App.css'


const listStyle = {
  listStyleType: 'none',
  paddingLeft: '0'
};

const listItemStyle = {
  marginBottom: '15px'
};

const tickStyle = {
  marginRight: '5px'
};
const listItemStyle1 = {
  marginBottom: '15px',
  color: 'lightgray'
};

const tickStyle1 = {
  marginRight: '5px',
  color: 'lightgray'
};

export class CurriculumComponent extends Component {
  render() {
    return (
      <>
        <div className='fees4 row'>
          <div className='fees5 col-7'>Curriculam</div>
          <div className='fees6 col-5'>View full curriculam</div>

        </div>
        <div>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <span style={tickStyle}>&#10003;</span> Introduction to Programming
            </li>
            <li style={listItemStyle}>
              <span style={tickStyle}>&#10003;</span> Data Structure and Algorithms
            </li>


            <li style={listItemStyle1}>
              <span style={tickStyle1}>&#10007;</span> Web development
            </li>
            <li style={listItemStyle1}>
              <span style={tickStyle1}>&#10007;</span> Interview preparation
            </li>
          </ul>
        </div>
      </>
    )
  }
}

export default CurriculumComponent