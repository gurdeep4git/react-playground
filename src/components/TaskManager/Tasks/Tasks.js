import React from 'react'
import '../TaskManager.css';
import './Tasks.css';

function Tasks(props) {

    const { selectedList } = props;

    const getTaskTemplate = () => {
        if (selectedList?.tasks?.length === 0) {
            return <span>No tasks added. Please add one</span>
        }
        return (
            selectedList.tasks.map(item => (
                <p key={item.id}>{item.title}</p>
            ))
        )
    }

    const addTask = () => {
        props.onAddTaskHandler({
            'id': Math.random() * 10,
            'title': `New task ${Math.random() * 10}`
        })
    }

    return (
        <div className='space-all'>
            <p>TASKS</p>
            <div className='tasks-container'>
                {getTaskTemplate()}
            </div>
            <div className='button-container-1'>
                <button onClick={addTask} className='btn btn-primary'>Add Task</button>
            </div>
        </div>
    )
}

export default Tasks