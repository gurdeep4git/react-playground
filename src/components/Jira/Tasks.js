import React from 'react'

export default function Tasks(props) {
    const { tasks } = props;

    return (
        <div>
            {tasks.length > 0 ?
                (tasks.map((t, index) => {
                    const { id, title, description } = t;
                    return (
                        <div key={id} className={"p-3 border " + (index !== 0 ? 'mt-2' : '')}>
                            <p>{title}</p>
                            <p>{description}</p>
                            <button onClick={() => { props.editTaskCallback(t) }} className='btn btn-warning mr-2'>Edit</button>
                            <button onClick={() => { props.deleteTaskCallback(id) }} className='btn btn-danger'>Delete</button>
                        </div>
                    )
                })) :
                (<p>No Tasks, Please add</p>)
            }
        </div>
    )
}
