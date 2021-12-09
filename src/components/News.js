import React, { Component } from 'react'
import PropTypes from 'prop-types'

import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default class News extends Component {

    initState = {
        articles: [],
        loading: false,
        page: 1,
        totalResults: 0
    }

    constructor() {
        super();
        this.state = this.initState;
    }

    async componentDidMount() {
        this.setState({ loading: true });
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2e424527b4ec4c0abd824126db0ea4fe&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        const parsedData = await this.getData(url);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.articles.length,
            loading: false
        })

    }

    async getData(url) {
        const data = await fetch(url);
        const parsedData = await data.json();
        return parsedData;
    }

    handlePrevClick = async () => {
        this.setState({ loading: true });
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2e424527b4ec4c0abd824126db0ea4fe&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        const parsedData = await this.getData(url);
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1,
            loading: false
        })
    }

    handleNextClick = async () => {
        if (this.state.page + 1 < Math.ceil(this.state.totalResults / this.props.pageSize)) { }
        else {
            this.setState({ loading: true });
            const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2e424527b4ec4c0abd824126db0ea4fe&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            const parsedData = await this.getData(url);
            this.setState({
                articles: parsedData.articles,
                page: this.state.page + 1,
                loading: false
            })
        }
    }



    render() {

        const newsTemplate = (<div className="row">
            {this.state.articles && this.state.articles.map((element, index) => {
                return (
                    <div className="col-md-4 mt-4" key={index}>
                        <NewsItem
                            title={element.title ? element.title : ''}
                            description={element.description ? element.description : ''}
                            imageUrl={element.urlToImage ? element.urlToImage : ''}
                            url={element.url}
                        />
                    </div>
                )
            })}
        </div>);

        return (
            <div className="container my-3">
                <h2>Top headlines</h2>
                {this.state.loading ?
                    (<Spinner />) :
                    newsTemplate
                }
                <div className="d-flex justify-content-between mt-4">
                    <button disabled={this.state.page <= 1} type="button" onClick={this.handlePrevClick} className="btn btn-dark">Prev</button>
                    <button disabled={this.state.page + 1 < Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" onClick={this.handleNextClick} className="btn btn-dark">Next</button>
                </div>
            </div>
        )
    }
}


News.defaultProps = {
    pageSize: 5,
    country: 'in',
    category: 'general',
}

News.propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
}
