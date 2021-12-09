import React, { Component } from 'react'

export default class NewsItem extends Component {

    getFromattedDate = (date) => {
        return new Date(date).toDateString();
    }

    render() {
        const { title, description, imageUrl, url, author, date, source } = this.props;
        return (
            <div>
                <div className="card" style={{ width: '18rem' }}>
                    <img src={imageUrl} className="card-img-top" alt={title} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <span className="badge badge-danger">{source}</span>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small>By {author ? author : 'Unknown'} on {this.getFromattedDate(date)}</small></p>
                        <a href={url} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
