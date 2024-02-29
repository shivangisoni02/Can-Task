import React, { Component } from 'react'
import '../../src/App.css'

import BatchComponent from './BatchComponent';

const spanStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '24px',

};
const spanStyle2 = {
    color: '#f66c3b',
    cursor: 'pointer'
};
const buttonStyle = {
    fontSize: '18px',
    color: '#FFFFFF',
    background: '#F66C3B',
    padding: '16px 32px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    marginTop: '100px'

};
const arrowStyle = {
    marginLeft: '5px'
};
const spanStylebottom = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '16px',
    marginTop: '60px'
};

export class RightPage extends Component {
    render() {
        return (
            <>
                <div className="right-page">
                    <div className='rightbox'>
                        <span style={spanStyle}>
                            <span>Select a batch</span>
                            <span style={spanStyle2} >View all batches</span>
                        </span>
                    </div>
                    <BatchComponent/>
                    <button style={buttonStyle} className='button'>
                        Proceed to payment
                        <span style={arrowStyle}>➔</span>
                    </button>
                    <div className='bottom'>
                        <span style={spanStylebottom}>
                            <span>No Cost EMI on all major credit cards & No cost Cardless EMI</span>
                            <span>7-day money back Guarantee</span>
                        </span>
                    </div>
                </div>
            </>
        )
    }
}

export default RightPage