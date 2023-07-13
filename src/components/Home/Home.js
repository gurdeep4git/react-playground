import React, { useEffect, useState } from 'react'
import Spinner from '../UI/Spinner';
import './Home.css'

function Home() {

    const categoriesList = ['all', 'accessories', 'apparel', 'bags', 'drinkware', 'office', 'shop by brand']

    const [isLoading, setLoading] = useState(false);
    const [products, setPosts] = useState([]);
    const [filter, setFilter] = useState({ category: 'all', price: 0 });


    useEffect(() => {
        console.log('useEffect Fired!!!');

        const abortController = new AbortController();

        const fetchProducts = async () => {
            try {
                setLoading(true);
                const url = getURL();
                const response = await fetch(url, { signal: abortController.signal });
                const products = await response.json()
                setPosts(products);
                setPriceRange()
            }
            catch (e) {

            }
            finally {
                setLoading(false);
            }
        }

        fetchProducts();

        return () => {
            abortController.abort();
            console.log('subscription removed!!!')
        };

    }, [filter])

    const getURL = () => {
        if (filter.category === 'all' && filter.price === 0) {
            return `http://localhost:5000/products`;
        }

        if (filter.category !== 'all' && filter.price === 0) {
            return `http://localhost:5000/products?category=${filter.category}`;
        }

        if (filter.category === 'all' && filter.price !== 0) {
            return `http://localhost:5000/products?price=${filter.price}`;
        }

        if (filter.category !== 'all' && filter.price !== 0) {
            return `http://localhost:5000/products?category=${filter.category}&price=${filter.price}`;
        }
    }

    const onCategoryFilterChange = (e) => {
        const { value } = e.target;
        setFilter(previousFilter => {
            return { ...previousFilter, category: value }
        })
    }

    const onPriceFilterChange = (e) => {
        const { value } = e.target;
        setFilter(previousFilter => {
            return { ...previousFilter, price: value }
        })
    }

    const setPriceRange = () => {

        const prices = products.map(i => i.price);
        return {
            min: Math.min(...prices),
            max: Math.max(...prices),
        }

    }

    return (
        <>
            <div className='container-fluid p-3'>
                <div className='row'>
                    <div className='col-md-3'>
                        {products.length > 0 && <div className='filter'>
                            <h5 className="lead">Filters</h5>
                            <p>Categories</p>
                            <ul className='filter-list'>
                                {categoriesList.map((category) => {
                                    return <li key={category}><input type="radio" name="categoryFilter" value={category} id={category} onChange={onCategoryFilterChange} /><label htmlFor={category}>{category}</label></li>
                                })}
                            </ul>
                            <p>Price</p>
                            <div className='range-control'>
                                <span>${setPriceRange().min}</span>
                                <input type="range" id="price" name="price" value="0" onChange={onPriceFilterChange} />
                                <span>${setPriceRange().max}</span>
                            </div>
                        </div>
                        }
                    </div>
                    <div className='col-md-9'>
                        <div className='row'>
                            {isLoading ? <Spinner /> :
                                <>{products.map((p) => {
                                    return <div className='col-3 mb-2' key={p.id}>
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">{p.name}</h5>
                                                <p className="card-text">{p.description}</p>
                                                <p>Price: <b>${p.price}</b></p>
                                                <span className={"badge badge-info " + p.category}>{p.category}</span>
                                            </div>
                                        </div>
                                    </div>
                                })}</>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
