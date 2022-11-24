import React, { useEffect, useState } from 'react'

function Home() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();

        const fetchPosts = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', { signal: abortController.signal });
            const posts = await response.json()
            setPosts(posts);
        }

        fetchPosts();

        return () => {
            abortController.abort();
            console.log('subscription removed!!!')
        };

    }, [])

    return (
        <>
            {posts.length > 0 ?
                <>{posts.map((p) => {
                    return <p key={p.id}>{p.title}</p>
                })}</> : <>Something went wrong</>
            }
        </>
    )
}

export default Home
