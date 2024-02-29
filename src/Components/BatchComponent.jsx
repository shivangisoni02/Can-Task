import React, { Component } from 'react'
import '../../src/App.css'

export class BatchComponent extends Component {
    render() {
        return (
            <>
                <div className='batch row'>
                    <div className='col-6'>
                        <div className='rec'>Recommended</div>
                        <div className='batch1'>
                            <div className='rup' >
                                <div className='rup3'> <span>&#8377;</span> 15, 399/-
                                    <div className='srup'><span>&#8377;</span><span >21, 999/-</span>
                                    </div>
                                </div>
                                <div className='rup4'>30% off </div>
                            </div>
                            <div>Batch starts : 26 Feb'24</div>
                            <div>EMI :<span>&#8377;</span>2,567/month </div>
                        </div>

                    </div >
                    <div className='mar col-6' >
                        <div className='batch2'>
                            <div className='rup6'> <span>&#8377;</span> 21, 999/- </div>
                            <div>Batch starts : 1 Apr'24</div>
                            <div>EMI :<span>&#8377;</span>3, 667/month </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default BatchComponent