import React, { useState } from 'react';
import AddTask from './AddTask';
import EditTask from './EditTask';
import Tasks from './Tasks';
import ErrorBoundary from '../../ErrorBoundary';

export default function Jira() {
    const initTasks = [
        {
            id: 1,
            'title': 'FE: Add models',
            'description': 'Add new models for the test type'
        },
        {
            id: 2,
            'title': 'FE: Add folder structure',
            'description': 'Add folders for the test type'
        }
    ];

    const initTask = {
        id: null, 'title': '', 'description': ''
    }

    const [tasks, setTasks] = useState(initTasks);

    //Edit
    const [currentTask, setCurrentTask] = useState(initTask);
    const [isEditable, setEditable] = useState(false);

    const addTask = (task) => {
        task.id = tasks.length + 1;
        setTasks([...tasks, task]);
    }

    const editTask = (task) => {
        setEditable(true);
        setCurrentTask({
            id: task.id,
            title: task.title,
            description: task.description
        })
    }

    const updateTask = (task) => {
        setEditable(false);
        const updatedTasks = tasks.map(t => (t.id === task.id ? task : t));
        setTasks(updatedTasks);
    }

    const deleteTask = (id) => {
        const filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks);
    }

    return (
        <div>
            <div className='container'>
                <h1 className='my-2'>Jira App - Task Manager</h1>
                <div className='row'>
                    <div className='col-5'>
                        {!isEditable ?
                            (<AddTask addTaskCallback={addTask} />) :
                            (<EditTask currentTask={currentTask} updateCallback={updateTask} setEditable={setEditable} />)
                        }
                    </div>
                    <div className='col-7'>
                        <ErrorBoundary>
                            <Tasks tasks={tasks} editTaskCallback={editTask} deleteTaskCallback={deleteTask} />
                        </ErrorBoundary>
                    </div>
                </div>
            </div>
        </div>
    )
}
