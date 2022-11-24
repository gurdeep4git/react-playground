import React, { useState } from 'react'
import PageTitle from '../UI/PageTitle'

export default function JobForm() {

    const initialFormData = {
        firstName: '',
        middleName: '',
        isMiddleNameAvailable: true,
        lastName: '',
        gender: '',
        email: '',
        phone: '',
        currentEmploymentStatus: 'E',
    }

    const [formData, setFormData] = useState(initialFormData);
    const [errorsData, setErrorsData] = useState({});

    const genders = ["Male", "Female", "Transgender"];

    const currentEmploymentOptions = [
        { 'text': 'Employed', 'value': 'E' },
        { 'text': 'Unemployed', 'value': 'UE' },
        { 'text': 'Student', 'value': 'S' }
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log(formData);
        }
    }

    const handleCheckBoxChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.checked
        })
    }

    const validateForm = () => {

        let errors = {};
        let formIsValid = true;

        if (!formData.firstName) {
            formIsValid = false;
            errors["firstName"] = "Please enter your first name.";
        } else {
            errors["firstName"] = null;
        }

        if (!formData.lastName) {
            formIsValid = false;
            errors["lastName"] = "Please enter your last name.";
        }

        if (!formData.email) {
            formIsValid = false;
            errors["email"] = "Please enter your email.";
        }

        if (!formData.phone) {
            formIsValid = false;
            errors["phone"] = "Please enter your phone number.";
        }

        if (!formData.gender) {
            formIsValid = false;
            errors["gender"] = "Please select your gender.";
        }

        setErrorsData(errors);

        return formIsValid;
    }

    return (
        <div className='container'>
            <PageTitle title="Job Application Form" />
            <form onSubmit={handleFormSubmit}>
                <div className='row'>
                    <div className='col-4'>
                        <div className='form-group'>
                            <label htmlFor='firstName'>First Name</label>
                            <input type="text" className='form-control' name="firstName" value={formData.firstName} onChange={handleChange} />
                            {errorsData.firstName && <small className='text-danger'>{errorsData.firstName}</small>}
                        </div>
                    </div>
                    <div className={'col-4 ' + (formData.isMiddleNameAvailable ? '' : 'd-none')}>
                        <div className='form-group'>
                            <label htmlFor='middleName'>Middle Name</label>
                            <input type="text" className='form-control' name="middleName" value={formData.middleName} onChange={handleChange} />
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='form-group'>
                            <label htmlFor='lastName'>Last Name</label>
                            <input type="text" className='form-control' name="lastName" value={formData.lastName} onChange={handleChange} />
                            {errorsData.lastName && <small className='text-danger'>{errorsData.lastName}</small>}
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div className="form-check p-0 mb-3">
                            <input checked={formData.isMiddleNameAvailable} id="isMiddleNameAvailable" name="isMiddleNameAvailable" onChange={handleCheckBoxChange} type="checkbox" value={formData.isMiddleNameAvailable} />
                            <label className="form-check-label" htmlFor="isMiddleNameAvailable">
                                &nbsp;Middle name?
                            </label>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4'>
                        <div className='form-group'>
                            <label htmlFor='email'>Email Address</label>
                            <input type="email" className='form-control' name="email" value={formData.email} onChange={handleChange} />
                            {errorsData.email && <small className='text-danger'>{errorsData.email}</small>}
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='form-group'>
                            <label htmlFor='phone'>Phone #</label>
                            <input type="text" className='form-control' name="phone" value={formData.phone} onChange={handleChange} />
                            {errorsData.phone && <small className='text-danger'>{errorsData.phone}</small>}
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='form-group'>
                            <label htmlFor='gender'>Gender</label>
                            <select className='form-control' name="gender" value={formData.gender} onChange={handleChange}>
                                <option value="">--Select--</option>
                                {genders.map((g, index) => (
                                    <option key={index} value={g}>
                                        {g}
                                    </option>
                                ))}
                            </select>
                            {errorsData.gender && <small className='text-danger'>{errorsData.gender}</small>}
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4'>
                        <div className='form-group'>
                            <label htmlFor='email'>Current Employment Status</label>
                            {currentEmploymentOptions.map((ceo, index) => (
                                <div key={index}>
                                    <div className="form-check">
                                        <input className="form-check-input"
                                            type="radio"
                                            name="currentEmploymentStatus"
                                            checked={ceo.value === formData.currentEmploymentStatus}
                                            id={ceo.text}
                                            value={ceo.value}
                                            onChange={handleChange} />
                                        <label className="form-check-label" htmlFor={ceo.text}>
                                            {ceo.text}
                                        </label>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='row mt-3'>
                    <div className='col'>
                        <button className='btn btn-dark' type='submit'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
