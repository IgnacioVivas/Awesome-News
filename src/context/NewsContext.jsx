import { createContext, useContext, useState, useEffect, React } from 'react';

const NewsContext = createContext();
export const useNewsContext = () => useContext(NewsContext);

function NewsContextProvider({ children }) {

    const [infoNews, setInfoNews] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://firebasestorage.googleapis.com/v0/b/interview-498d3.appspot.com/o/news.json?alt=media&token=63f227b0-7774-4016-b7fe-42507315ac9e`);
            const data = await response.json();
            setInfoNews(Object.values(data));
        }
        fetchData();
    }, []);

    return (
        <NewsContext.Provider value={{ infoNews }}>
            {children}
        </NewsContext.Provider>
    );
}

export default NewsContextProvider;