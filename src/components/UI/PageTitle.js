import React from 'react'
import PropTypes from 'prop-types'


export default function PageTitle({ title }) {
    return (
        <h3 className='my-3'>{title}</h3>
    )
}

PageTitle.propTypes = {
    title: PropTypes.string.isRequired
}
