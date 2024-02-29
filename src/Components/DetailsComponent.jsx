import React, { Component } from 'react'
import '../../src/App.css'


const listItemStyleA = {
    marginBottom: '15px'
};

const listStyle2 = {
    listStyleType: 'none',
    paddingLeft: '0',
    marginBottom: '15px'

};

export class DetailsComponent extends Component {
    render() {
        return (
            <>
                <div className='rup row' >
                    <div className='rup1 col-5'> <span>&#8377;</span> 15,399
                        <div className='srup'><span>&#8377;</span><span >21, 999</span> </div>
                    </div>
                    <div className='rup2 col-7' >EMI starting at <span>&#8377;</span>2,566 /m</div>
                </div>
                <div>
                    <p style={{marginTop:'5px'}}> Additional perks</p>
                    <ul style={listStyle2}>
                        <li style={listItemStyleA}>1:1 Expert Doubt support</li>
                        <li style={listItemStyleA}>90 Days course pause</li>
                        <li style={listItemStyleA}>1:1 session with Industry Experts - 5</li>
                        <li style={listItemStyleA}>Spotlight HIRIST to Elevate your career</li>
                        <li style={listItemStyleA}>2 months Free Course Extension</li>
                        <li style={listItemStyleA}>Curated Interview Problems - 100</li>
                        <li style={listItemStyleA}>Mock Test Series for Product Companies</li>
                    </ul>
                </div>
            </>
        )
    }
}

export default DetailsComponent