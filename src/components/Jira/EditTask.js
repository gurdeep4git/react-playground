import React, { useState, useEffect } from 'react'

export default function EditTask(props) {
    const [task, setTask] = useState(props.currentTask);

    useEffect(() => {
        setTask(props.currentTask)
    }, [props])

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setTask({ ...task, [name]: value });
    }

    const updateTask = () => {
        if (!task.title || !task.description) {
            return;
        }
        props.updateCallback(task);
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
                <button type="button" className="btn btn-primary mr-2" onClick={updateTask}>Update</button>
                <button type="button" className="btn btn-default" onClick={() => { props.setEditable(false) }}>Cancel</button>
            </form>
        </div>
    )
}
