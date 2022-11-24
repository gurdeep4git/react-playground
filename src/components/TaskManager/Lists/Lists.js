import React from 'react'
import '../TaskManager.css'
import './Lists.css'

function Lists() {

    const lists = [
        { id: 1, title: 'Traveling' }
    ]

    return (
        <div className='space-all list-bg'>
            <span>LISTS</span>
            <div className='list-container'>

            </div>
            <div className='button-container'>
                <button className='btn btn-primary'>New List</button>
            </div>
        </div>
    )
}

export default Lists