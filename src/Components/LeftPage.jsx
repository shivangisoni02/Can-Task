import React, { Component } from 'react'
import '../../src/App.css'

import CurriculumComponent from './CurriculumComponent';
import DetailsComponent from './DetailsComponent';

export class LeftPage extends Component {
    render() {
        return (
            <>
                <div className="left-page">
                    <h4>Premium</h4>
                    <h3>Data Structures and Algorithms (Python) + Placement Prepration</h3>
                    <div className='inside'> Everything included in Combo plan along with Placement prepration features (Duration -8 months)</div>
                    <div>
                        <div className='fees3'>
                            <CurriculumComponent/>
                            <DetailsComponent/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default LeftPage