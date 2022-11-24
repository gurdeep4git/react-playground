import axios from "axios";
import { useState, useEffect } from "react";


const useFetch = (method, url, body) => {
    const [loading, setLoading] = useState(null);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const response = await axios({ method, url, data: body });
                const data = await response?.data;

                setData(data);
            }
            catch (error) {
                setError(error);
            }
            finally {
                setLoading(false);
            }
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return { loading, data, error }
}

export { useFetch as default };