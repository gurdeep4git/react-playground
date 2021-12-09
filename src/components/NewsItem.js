import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        const { title, description, imageUrl, url } = this.props;
        return (
            <div>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={imageUrl} className="card-img-top" alt={title} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={url} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
