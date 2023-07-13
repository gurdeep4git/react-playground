import React, { useState } from 'react'
import Lists from './Lists/Lists'
import Tasks from './Tasks/Tasks'
import './TaskManager.css'

const initialList = [
    {
        'id': 1,
        'title': 'Traveling',
        'tasks': [
            {
                'id': 1,
                'title': 'Book Tickets',
            }
        ]
    },
    {
        'id': 2,
        'title': 'Traveling 1',
        'tasks': [
            {
                'id': 1,
                'title': 'Book Tickets 1',
            }
        ]
    }
]

function TaskManager() {

    const [lists, setLists] = useState(initialList);
    const [selectedList, setSelectedList] = useState(lists[0]);

    const setSelectedListItem = (selectedListItem) => {
        setSelectedList(lists.filter(i => i.id === selectedListItem.id)[0])
    }

    const addNewList = (newList) => {
        const updatedList = [...lists, newList]
        setLists(updatedList)
    }

    const addNewTask = (newTask) => {

        setSelectedList(prevList => {
            return {
                ...prevList,
                tasks: [...selectedList.tasks, newTask]
            }
        });

        const cloneLists = [...lists];
        const index = cloneLists.map(i => i.id).indexOf(selectedList.id);
        if (index !== -1) {
            cloneLists[index] = selectedList;
        }

        setLists(cloneLists)
    }

    return (
        <div className='container'>
            <div className='task-manager-board'>
                <div className='row'>
                    <div className='col-md-3'>
                        <Lists lists={lists} selectedList={selectedList} onListClickHandler={setSelectedListItem} onAddNewListClickHandler={addNewList} />
                    </div>
                    <div className='col-md-9'>
                        <Tasks selectedList={selectedList} onAddTaskHandler={addNewTask} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskManager
