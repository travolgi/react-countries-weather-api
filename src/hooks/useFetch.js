import { useState, useEffect } from 'react';

const useFetch = url => {
   const [data, setData] = useState([]),
			[error, setError] = useState(null),
			[isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchAPI = async () => {
			setIsLoading(true);
			try {
				const response = await fetch(url),
						json = await response.json();
						
				response.status === 404 ||	json.status === 404 || json.status === 400 ? setError(true) : setError(false);
				setData(json);
			}
			catch(err) {
				setError(err.message);
				setData(null);
				console.log(err);
			}
			setIsLoading(false);
		};
		fetchAPI();

		return () => new AbortController();
	}, [url]);

   return [data, error, isLoading];
}

export default useFetch;