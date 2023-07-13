import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import './AddListModal.css';

const Backdrop = () => {
    return <div className='backdrop' />;
}

const Modal = (props) => {
    return (
        <div className='modal-custom'>
            <header className='header'>
                <span>Add New List</span>
            </header>
            <section className='content'>
                <div>
                    <label>Title</label>
                    <input value={props.title} onChange={props.onChangeHandler} type='text' className='form-control' />
                </div>
            </section>
            <footer className='actions'>
                <button type='button' className='btn btn-outline-primary mr-3' onClick={props.onCancelClickHandler}>Cancel</button>
                <button type='button' className='btn btn-primary' onClick={props.onAddClickHandler}>Add</button>
            </footer>
        </div>
    )
}

function AddListModal(props) {

    const [title, setTitle] = useState('');

    const onCancelClickHandler = () => {
        props.cancelClickHandler();
    }

    const onAddClickHandler = () => {
        props.addClickHandler(title);
    }

    const onChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<Modal title={title} onCancelClickHandler={onCancelClickHandler} onAddClickHandler={onAddClickHandler} onChangeHandler={onChangeHandler} />, document.getElementById('modal-root'))}
        </React.Fragment>
    )
}

export default AddListModal