import React from 'react'
import useFetch from '../../../hooks/fetch-hook'
import Spinner from '../../UI/Spinner';

export default function Dishes() {

    // call api to get dishes from DB
    const { loading, data: dishes, error } = useFetch("GET", '/dishes', {});

    return (
        <>
            <h4>Dishes</h4>
            {loading && <Spinner />}
            {!loading && error ?
                (<span>Something went wrong</span>) :
                (
                    <div className='row'>
                        {
                            dishes && dishes.map((dish, index) => (
                                <div key={index} className='col-4'>
                                    <div className='panel'>
                                        <h4>{dish.title}</h4>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </>
    )
}
