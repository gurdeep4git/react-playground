import React from 'react'
import PageTitle from '../UI/PageTitle'
import Dishes from './Dishes/Dishes'

export default function Cookz() {
    return (
        <div>
            <div className='container'>
                <PageTitle title="Cookz - Recipe Book" />
                <div className='row'>
                    <div className='col-md-3'>

                    </div>
                    <div className='col-md-9'>
                        <Dishes />
                    </div>
                </div>
            </div>
        </div>
    )
}
