import React from 'react'
import Lists from './Lists/Lists'
import Tasks from './Tasks/Tasks'
import './TaskManager.css'

function TaskManager(props) {
    return (
        <div className='container'>
            <div className='task-manager-board'>
                <div className='row'>
                    <div className='col-md-3'>
                        <Lists />
                    </div>
                    <div className='col-md-9'>
                        <Tasks />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskManager
