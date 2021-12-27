import React, { useState } from 'react'

export default function AddTask(props) {
    const initTask = {
        id: null, 'title': '', 'description': ''
    }

    const [task, setTask] = useState(initTask)

    const addTask = () => {
        if (!task.title || !task.description) {
            return;
        }

        props.addTaskCallback(task);
        setTask(initTask);
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setTask({
            ...task,
            [name]: value
        })
    }

    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="taskTitle">Title</label>
                    <input name="title" type="text" className="form-control" id="taskTitle" value={task.title} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="taskDescription">Description</label>
                    <textarea name="description" className="form-control" id="taskDescription" value={task.description} onChange={handleInputChange} />
                </div>
                <button type="button" className="btn btn-primary" onClick={addTask}>Submit</button>
            </form>
        </div>
    )
}
