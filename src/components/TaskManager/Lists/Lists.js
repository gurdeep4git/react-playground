import React, { useState } from 'react'
import '../TaskManager.css'
import './Lists.css'
import AddListModal from './AddListModal';

function Lists(props) {

    const [showModal, setShowModal] = useState(false)

    const { lists, selectedList } = props;

    const listClickHandler = (selectedListItem, _event) => {
        props.onListClickHandler(selectedListItem)
    }

    const getListTemplate = () => {
        if (lists?.length === 0) {
            return <span>No lists added. Please add one</span>
        }
        return (
            lists.map((item) => (
                <div onClick={() => listClickHandler(item)} key={item.id} className={"card-item shadow p-3 mb-2 border rounded " + (item.id === selectedList.id ? 'active' : '')}>
                    <span>{item.title}</span>
                </div>
            ))
        )
    }

    const onAddNewListHandler = () => {
        setShowModal(true)
    }

    const onCancel = () => {
        setShowModal(false)
    }

    const onAdd = (title) => {
        props.onAddNewListClickHandler({
            'id': Math.random() * 10,
            'title': title,
            'tasks': []
        })
        setShowModal(false);
    }

    return (
        <div className='space-all list-bg'>
            <p>LISTS</p>

            {showModal && <AddListModal cancelClickHandler={onCancel} addClickHandler={onAdd} />}

            <div className='list-container'>
                {getListTemplate()}
            </div>
            <div className='button-container'>
                <button onClick={onAddNewListHandler} className='btn btn-primary'>New List</button>
            </div>
        </div>
    )
}

export default Lists